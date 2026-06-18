"use strict";

var cqpopup_name = "Видео виджет - Авион",
  carrotquest = {
    track: function track(eventName, params) {
      parent.window.carrotquest.track(eventName, params);
    },
    identify: function identify(props) {
      parent.window.carrotquest.identify(props);
    },
    trackMessageInteraction: function trackMessageInteraction(sendingId, type) {
      parent.window.carrotquest.trackMessageInteraction(sendingId, type);
    },
    animation: function animation() {
      var data = {
        command: "carrotquest.animationPopup",
        "id": "{{ sending_id }}",
        "cqpopup_name": cqpopup_name
      };
      top.postMessage(data, "*");
    },
    close: function close() {
      var data = {
        command: "carrotquest.closePopup",
        "id": "{{ sending_id }}"
      };
      top.postMessage(data, "*");
    },
    replied: function replied() {
      this.trackMessageInteraction("{{ sending_id }}", "replied");
      this.track('Ответил в попап');
      this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);
    },
    read: function read() {
      this.trackMessageInteraction("{{ sending_id }}", "read");
      this.track('Прочитал попап');
      this.track("Коммуникации: Прочитано сообщение - " + cqpopup_name);
    },
    resizeFrame: function resizeFrame(obj) {
      var data = {
        command: "carrotquest.resizeFrame",
        id: "{{ sending_id }}",
        width: obj.width,
        height: obj.height
      };
      top.postMessage(data, "*");
    }
  };
var widget = document.getElementById("video-widget"),
  video = document.getElementById("vw-video"),
  isPhone = top.window.innerWidth < 500;
if (isPhone) {
  document.body.classList.add('is-mobile');
}
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
    carrotquest.resizeFrame({
      width: widget.offsetWidth + 'px',
      height: widget.offsetHeight + 'px'
    });
  }
});
var sizes = isPhone ? {
  mini: {
    width: '140px',
    height: '175px'
  },
  big: {
    width: '272px',
    height: '640px'
  }
} : {
  mini: {
    width: '360px',
    height: '495px'
  },
  big: {
    width: '393px',
    height: '910px'
  }
};
function expand() {
  widget.setAttribute("data-state", "opened");
  widget.classList.remove("mini");
  widget.classList.add("big");
  video.removeAttribute("loop");
  video.currentTime = 0;
  video.muted = false;
  video.play();
  document.querySelector(".video-widget__close").classList.remove("hidden");
  document.querySelector(".video-widget__form").classList.remove("hidden");
  carrotquest.resizeFrame(sizes.big);
}
function collapse() {
  widget.setAttribute("data-state", "default");
  widget.classList.add("mini");
  widget.classList.remove("big");
  video.setAttribute("loop", "");
  video.muted = true;
  document.querySelector(".video-widget__close").classList.add("hidden");
  document.querySelector(".video-widget__form").classList.add("hidden");
  carrotquest.resizeFrame(sizes.mini);
}
document.querySelector(".video-widget__container").addEventListener("click", function () {
  if (widget.getAttribute("data-state") === "default") {
    expand();
  } else {
    collapse();
  }
});
document.querySelector(".video-widget__close").addEventListener("click", function (e) {
  e.stopPropagation();
  carrotquest.close();
});
video.addEventListener("ended", function () {
  collapse();
  video.currentTime = 0;
  video.play();
});
document.addEventListener("mouseup", function (e) {
  if (!widget.contains(e.target) && widget.getAttribute("data-state") !== "default") {
    collapse();
  }
});
document.addEventListener("submit", function (e) {
  e.preventDefault();
  var isPhoneReady = e.target.closest("#form.form-ready");
  var checkbox1 = document.querySelector("#checkbox1").checked;
  var isValid = true;
  if (!isPhoneReady) {
    document.querySelector(".cq_popup-input[name='phone']").classList.add("error");
    isValid = false;
  }
  if (!checkbox1) {
    document.querySelector("#eula1").classList.add("error");
    isValid = false;
  } else {
    document.querySelector("#eula1").classList.remove("error");
  }
  if (isValid) {
    carrotquest.identify({
      "$phone": document.querySelector(".cq_popup-input[name='phone']").value
    });
    carrotquest.identify({
      "Согласие на обработку персональных данных": true,
      "Согласие на получение рекламных сообщений": document.querySelector("#checkbox2").checked
    });
    document.querySelector(".first-form").classList.add("hidden");
    document.querySelector(".second-form").classList.remove("hidden");
    carrotquest.replied();
  }
});
(function (formSelector) {
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
      return formattedInputValue + inputNumbersValue;
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