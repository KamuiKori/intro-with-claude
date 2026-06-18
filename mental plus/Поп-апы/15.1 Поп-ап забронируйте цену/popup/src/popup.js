var cqpopup_name = "15.1 Поп-ап забронируйте цену",
    carrotquest = {
      track: function(eventName, params) {
        parent.window.carrotquest.track(eventName, params);
      },
      identify: function(props) {
        parent.window.carrotquest.identify(props);
      },
      trackMessageInteraction: function(sendingId, type) {
        parent.window.carrotquest.trackMessageInteraction(sendingId, type);
      },
      animation: function() {
        var data = { command: "carrotquest.animationPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name };
        top.postMessage(data, "*");
      },
      close: function() {
        var data = { command: "carrotquest.closePopup", "id": "{{ sending_id }}" };
        top.postMessage(data, "*");
      },
      replied: function() {
        this.trackMessageInteraction("{{ sending_id }}", "replied");
        this.track('Ответил в попап');
        this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);
      },
      read: function() {
        this.trackMessageInteraction("{{ sending_id }}", "read");
        this.track('Прочитал попап');
        this.track("Коммуникации: Прочитано сообщение - " + cqpopup_name);
      }
    };

document.addEventListener("readystatechange", function() {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});

document.addEventListener("submit", function(e) {
  e.preventDefault();

  var isPhoneReady = e.target.closest(".cq-popup__form.form-ready");
  var checkbox1 = document.querySelector('#checkbox1').checked;
  var isValid = true;

  if (!isPhoneReady) {
    document.querySelector('.cq_popup-input[name="phone"]').classList.add('error');
    isValid = false;
  }

  if (!checkbox1) {
    document.querySelector('#eula1').classList.add('error');
    isValid = false;
  } else {
    document.querySelector('#eula1').classList.remove('error');
  }

  if (isValid) {
    trackData("phone");
    carrotquest.identify({
      "Согласие на обработку персональных данных": document.querySelector('#checkbox1').checked,
      "Согласие на получение рекламных сообщений": document.querySelector('#checkbox2').checked
    });
    hidden_visible('.first-form', '.second-form');
    carrotquest.replied();
    setTimeout(function() { carrotquest.close(); }, 5000);
  }
});

document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function(item) {
  item.addEventListener("click", function() { carrotquest.close(); });
});

document.querySelector(".wrapper__body").addEventListener("click", function(e) {
  if (e.target === this) { carrotquest.close(); }
});

function trackData(data) {
  carrotquest.identify({ ["$" + data]: document.querySelector('.cq_popup-input[name="' + data + '"]').value });
}

function hidden_visible(elem1, elem2) {
  document.querySelector(elem1).classList.add("hidden");
  document.querySelector(elem2).classList.remove("hidden");
}

((formSelector) => {
  var phoneInput = document.querySelector("[type=tel]"),
      form = document.querySelector(formSelector),
      formattedInputValue = "+7 (";

  function checkCorrect(input) {
    if (input.length == 18) {
      form.classList.add("form-ready");
      phoneInput.classList.add("success");
      phoneInput.classList.remove("error");
    } else {
      form.classList.remove("form-ready");
      phoneInput.classList.remove("success");
      phoneInput.classList.remove("error");
    }
  }

  function getInputNumbersValue(input) {
    return input.value.replace(/\D/g, "");
  }

  function getFormattedInputValue(input, inputNumbersValue, formattedInputValue) {
    if (!(inputNumbersValue[0] == "7" || inputNumbersValue[0] == "8")) {
      formattedInputValue = formattedInputValue + inputNumbersValue;
      return formattedInputValue;
    }
    if (inputNumbersValue.length > 1) {
      formattedInputValue += inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "–" + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "–" + inputNumbersValue.substring(9, 11);
    }
    return formattedInputValue;
  }

  function onPhoneInput(e) {
    var input = e.target,
        inputNumbersValue = getInputNumbersValue(input);

    if (e.inputType == "deleteContentBackward" && inputNumbersValue.length == 1) {
      input.value = "";
      return;
    }

    if (e.inputType == "insertFromPaste") {
      if (["7", "8"].indexOf(inputNumbersValue[0]) > -1 && input.value != "") {
        inputNumbersValue = inputNumbersValue.substring(1);
      }
      if (inputNumbersValue[0] == "9") {
        inputNumbersValue = "8" + inputNumbersValue;
      }
    }

    input.value = getFormattedInputValue(input, inputNumbersValue, formattedInputValue);
    checkCorrect(input.value);
  }

  function onPhoneFocus(e) {
    if (e.target.value == "") {
      e.target.value = formattedInputValue;
    }
  }

  function onPhoneBlur(e) {
    if (e.target.value == formattedInputValue) {
      e.target.value = "";
    }
    if (e.target.value.length != 18) {
      form.classList.remove("form-ready");
      phoneInput.classList.add("error");
      phoneInput.classList.remove("success");
    }
  }

  function selectionStart(e) {
    var input = e.target;
    if (input.selectionStart <= 3) {
      input.selectionStart = 4;
    }
  }

  phoneInput.addEventListener("input", onPhoneInput);
  phoneInput.addEventListener("focus", onPhoneFocus);
  phoneInput.addEventListener("blur", onPhoneBlur);
  phoneInput.addEventListener("keyup", selectionStart);
  phoneInput.addEventListener("click", selectionStart);
})("#form");
