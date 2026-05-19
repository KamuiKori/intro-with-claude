var cqpopup_name = "Атлас Ривер — лидген",
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
      clicked: function() {
        this.trackMessageInteraction("{{ sending_id }}", "clicked");
        this.track('Перешел по ссылке в попапе');
        this.track("Коммуникации: Перешел по ссылке в сообщении - " + cqpopup_name);
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

document.querySelectorAll("[data-popmechanic-close]").forEach(function(el) {
  el.addEventListener("click", function() {
    carrotquest.close();
  });
});

var tgBtn = document.getElementById("ar-tg-btn");
if (tgBtn) {
  tgBtn.addEventListener("click", function() {
    carrotquest.clicked();
  });
}

(function() {
  var phoneInput = document.querySelector("[type=tel]");
  var form = document.getElementById("ar-form");
  var formattedPrefix = "+7 (";

  if (!phoneInput) return;

  function getNumbersOnly(input) {
    return input.value.replace(/\D/g, "");
  }

  function buildMaskedValue(inputNumbersValue) {
    var result = formattedPrefix;
    if (!(inputNumbersValue[0] === "7" || inputNumbersValue[0] === "8")) {
      return result + inputNumbersValue;
    }
    if (inputNumbersValue.length > 1) result += inputNumbersValue.substring(1, 4);
    if (inputNumbersValue.length >= 5) result += ") " + inputNumbersValue.substring(4, 7);
    if (inputNumbersValue.length >= 8) result += "–" + inputNumbersValue.substring(7, 9);
    if (inputNumbersValue.length >= 10) result += "–" + inputNumbersValue.substring(9, 11);
    return result;
  }

  function checkPhoneReady(value) {
    if (value.length === 18) {
      form.classList.add("form-ready");
      phoneInput.classList.add("success");
      phoneInput.classList.remove("error");
    } else {
      form.classList.remove("form-ready");
      phoneInput.classList.remove("success");
      phoneInput.classList.remove("error");
    }
  }

  phoneInput.addEventListener("input", function(e) {
    var numbersValue = getNumbersOnly(e.target);
    if (e.inputType === "deleteContentBackward" && numbersValue.length === 1) {
      e.target.value = "";
      return;
    }
    if (e.inputType === "insertFromPaste") {
      if ((numbersValue[0] === "7" || numbersValue[0] === "8") && e.target.value !== "") {
        numbersValue = numbersValue.substring(1);
      }
      if (numbersValue[0] === "9") {
        numbersValue = "8" + numbersValue;
      }
    }
    e.target.value = buildMaskedValue(numbersValue);
    checkPhoneReady(e.target.value);
  });

  phoneInput.addEventListener("focus", function(e) {
    if (e.target.value === "") e.target.value = formattedPrefix;
  });

  phoneInput.addEventListener("blur", function(e) {
    if (e.target.value === formattedPrefix) e.target.value = "";
    if (e.target.value.length !== 18 && e.target.value !== "") {
      form.classList.remove("form-ready");
      phoneInput.classList.add("error");
      phoneInput.classList.remove("success");
    }
  });

  phoneInput.addEventListener("keyup", function(e) {
    if (e.target.selectionStart <= 3) e.target.selectionStart = 4;
  });

  phoneInput.addEventListener("click", function(e) {
    if (e.target.selectionStart <= 3) e.target.selectionStart = 4;
  });
})();

document.getElementById("ar-submit-btn").addEventListener("click", function() {
  var form = document.getElementById("ar-form");
  var phone = form.querySelector("[name=phone]").value;
  var email = form.querySelector("[name=email]").value;
  var name  = form.querySelector("[name=name]").value;

  if (!form.classList.contains("form-ready")) return;
  if (!email || !name) return;

  carrotquest.identify({ "$phone": phone });
  carrotquest.identify({ "$email": email });
  carrotquest.identify({ "$name": name });
  carrotquest.replied();
  carrotquest.track("Атлас Ривер: оставил заявку");

  document.getElementById("ar-form-state").classList.add("hidden");
  document.getElementById("ar-thanks-state").classList.remove("hidden");
});
