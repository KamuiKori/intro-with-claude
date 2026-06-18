var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Open Sans", sans-serif;\
  font-weight: 400;\
}\
\
html,\
body {\
  height: 100%;\
}\
\
body {\
  overflow: hidden;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: end;\
      align-items: flex-end;\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
}\
\
a {\
  color: inherit;\
}\
\
.hidden {\
  display: none !important;\
}\
\
.video-widget {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  padding: 0 15px 15px;\
}\
\
.video-widget__container {\
  position: relative;\
  width: 165px;\
  height: 240px;\
  border-radius: 5px;\
  overflow: hidden;\
  cursor: pointer;\
  transition: width 0.3s ease, height 0.3s ease;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.video-widget__container video {\
  position: absolute;\
  top: 50%;\
  left: 50%;\
  -webkit-transform: translate(-50%, -50%);\
          transform: translate(-50%, -50%);\
  width: 100%;\
  height: 100%;\
  -o-object-fit: cover;\
     object-fit: cover;\
}\
\
.video-widget.big .video-widget__container {\
  width: 363px;\
  height: 600px;\
}\
\
.video-widget__close {\
  position: absolute;\
  top: 15px;\
  right: 15px;\
  width: 33px;\
  height: 33px;\
  background: rgba(0, 0, 0, 0.45);\
  border-radius: 50%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  cursor: pointer;\
  z-index: 10;\
}\
\
.video-widget__form {\
  display: none;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  width: 363px;\
  background: #fff;\
  border-radius: 5px;\
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\
  padding: 30px;\
  margin-top: 15px;\
}\
\
.video-widget.big .video-widget__form {\
  display: -ms-flexbox;\
  display: flex;\
}\
\
.cq_popup-input {\
  width: 100%;\
  height: 60px;\
  background: #fff;\
  border: 1px solid #a7a7a7;\
  border-radius: 5px;\
  padding: 0 18px;\
  font-size: 21px;\
  color: #252525;\
  outline: none;\
  margin-bottom: 15px;\
}\
\
.cq_popup-input::-webkit-input-placeholder {\
  color: #a7a7a7;\
}\
\
.cq_popup-input:-ms-input-placeholder {\
  color: #a7a7a7;\
}\
\
.cq_popup-input::-ms-input-placeholder {\
  color: #a7a7a7;\
}\
\
.cq_popup-input::placeholder {\
  color: #a7a7a7;\
}\
\
.cq_popup-input.error {\
  border-color: #cc0000;\
}\
\
.cq_popup-input.success {\
  border-color: #22aa22;\
}\
\
.video-widget__button {\
  width: 100%;\
  height: 60px;\
  background: #f0541a;\
  color: #fff;\
  border: none;\
  border-radius: 5px;\
  font-size: 21px;\
  font-weight: 700;\
  cursor: pointer;\
  margin-bottom: 15px;\
  letter-spacing: 0.02em;\
  text-transform: uppercase;\
}\
\
.eula {\
  position: relative;\
  margin-bottom: 8px;\
}\
\
.eula input[type=checkbox] {\
  position: absolute;\
  opacity: 0;\
  width: 0;\
  height: 0;\
}\
\
.eula label {\
  position: relative;\
  padding-left: 24px;\
  font-size: 9px;\
  line-height: 1.5;\
  color: #252525;\
  cursor: pointer;\
  display: block;\
}\
\
.eula label a {\
  color: #f0541a;\
  text-decoration: underline;\
}\
\
.eula label::before {\
  content: "";\
  position: absolute;\
  left: 0;\
  top: 1px;\
  width: 15px;\
  height: 15px;\
  border: 1px solid #a7a7a7;\
  border-radius: 2px;\
  background: #fff;\
  transition: border-color 0.2s;\
}\
\
.eula label::after {\
  content: "";\
  position: absolute;\
  left: 3px;\
  top: 5px;\
  width: 9px;\
  height: 6px;\
  border-left: 1.5px solid #f0541a;\
  border-bottom: 1.5px solid #f0541a;\
  -webkit-transform: rotate(-45deg);\
          transform: rotate(-45deg);\
  opacity: 0;\
  transition: opacity 0.2s;\
}\
\
.eula input:checked + label::before {\
  border-color: #f0541a;\
}\
\
.eula input:checked + label::after {\
  opacity: 1;\
}\
\
.eula.error label::before {\
  border-color: #cc0000;\
}\
\
.second-form {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  min-height: 180px;\
}\
\
.thank-title {\
  font-size: 27px;\
  font-weight: 700;\
  color: #252525;\
  text-align: center;\
}\
\
body.is-mobile .video-widget__container {\
  width: 110px;\
  height: 160px;\
}\
\
body.is-mobile .video-widget.big .video-widget__container {\
  width: 242px;\
  height: 400px;\
}\
\
body.is-mobile .video-widget__close {\
  top: 10px;\
  right: 10px;\
  width: 22px;\
  height: 22px;\
}\
\
body.is-mobile .video-widget__form {\
  width: 242px;\
  padding: 20px;\
  margin-top: 10px;\
}\
\
body.is-mobile .cq_popup-input {\
  height: 40px;\
  padding: 0 12px;\
  font-size: 14px;\
  margin-bottom: 10px;\
}\
\
body.is-mobile .video-widget__button {\
  height: 40px;\
  font-size: 14px;\
  margin-bottom: 10px;\
}\
\
body.is-mobile .eula label {\
  padding-left: 16px;\
  font-size: 6px;\
}\
\
body.is-mobile .eula label::before {\
  width: 10px;\
  height: 10px;\
}\
\
body.is-mobile .eula label::after {\
  left: 2px;\
  top: 3px;\
  width: 6px;\
  height: 4px;\
}\
\
body.is-mobile .second-form {\
  min-height: 120px;\
}\
\
body.is-mobile .thank-title {\
  font-size: 18px;\
}\
\
@media (min-width: 500px) {\
  .video-widget.mini .video-widget__container {\
    width: 330px;\
    height: 480px;\
  }\
}</style>\
</head>\
<body>\
<div id="video-widget" class="video-widget mini" data-state="default">\
    <div class="video-widget__container">\
        <video id="vw-video" loop autoplay playsinline muted preload="auto" controlslist="nodownload" disablepictureinpicture>\
            <source src="https://files.carrotquest.app/messagesfiles/85b10fca-e2ef-43b4-87fe-8ebc0976b0b0/avion_960_1920_03.mp4" type="video/mp4">\
        </video>\
        <div class="video-widget__close hidden">\
            <svg width="10" height="10" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <path d="M18 0.818077L17.1819 0L9 8.18192L0.818077 0L0 0.818077L8.18192 9L0 17.1819L0.818077 18L9 9.81808L17.1819 18L18 17.1819L9.81808 9L18 0.818077Z" fill="#FFFFFF"/>\
            </svg>\
        </div>\
    </div>\
    <div class="video-widget__form hidden">\
        <form id="form" class="first-form">\
            <input class="cq_popup-input" type="tel" name="phone" placeholder="+7 (XXX)-XXX-XX-XX">\
            <button type="submit" class="video-widget__button">ОСТАВИТЬ ЗАЯВКУ</button>\
            <div class="eula" id="eula1">\
                <input type="checkbox" id="checkbox1" checked>\
                <label for="checkbox1">Я согласен на <a href="https://mental-plus.ru/site/download?file=L3Zhci93d3cvbWVudGFsLXBsdXMucnUvd2ViL3VwbG9hZC84ODkzN2ZiYmZmZDUyMDRiNTgzMmFmMmRkYmRhZGUwOC7Qn9C%2B0LvQuNGC0LjQutCwINC%2B0LHRgNCw0LHQvtGC0LrQuCDQv9C10YDRgdC%2B0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFLmRvY3g%3D&alias=politika-v-otnosenii-obrabotki-personalnyh-dannyh" target="_blank">обработку персональных данных</a></label>\
            </div>\
            <div class="eula" id="eula2">\
                <input type="checkbox" id="checkbox2">\
                <label for="checkbox2">Я согласен на получение <a href="https://mental-plus.ru/site/download?file=L3Zhci93d3cvbWVudGFsLXBsdXMucnUvd2ViL3VwbG9hZC8wYjdhMDVlYWJmZThiOGZlOTljODk1MmZiNmJhNmI3MS7QodC%2B0LPQu9Cw0YHQuNC1INC90LAg0L%2FQvtC70YPRh9C10L3QuNC1INGA0LXQutC70LDQvNC90L4t0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvRhSDQvNCw0YLQtdGA0LjQsNC70L7QsiAoMSkuZG9jeA%3D%3D&alias=soglasie-na-polucenie-reklamno-informacionnyh-materialov" target="_blank">рекламно-информационных сообщений</a></label>\
            </div>\
        </form>\
        <div id="thank" class="second-form hidden">\
            <p class="thank-title">Спасибо!</p>\
        </div>\
    </div>\
</div>\
<script>"use strict";\
\
var cqpopup_name = "Видео виджет - Авион",\
  carrotquest = {\
    track: function track(eventName, params) {\
      parent.window.carrotquest.track(eventName, params);\
    },\
    identify: function identify(props) {\
      parent.window.carrotquest.identify(props);\
    },\
    trackMessageInteraction: function trackMessageInteraction(sendingId, type) {\
      parent.window.carrotquest.trackMessageInteraction(sendingId, type);\
    },\
    animation: function animation() {\
      var data = {\
        command: "carrotquest.animationPopup",\
        "id": "{{ sending_id }}",\
        "cqpopup_name": cqpopup_name\
      };\
      top.postMessage(data, "*");\
    },\
    close: function close() {\
      var data = {\
        command: "carrotquest.closePopup",\
        "id": "{{ sending_id }}"\
      };\
      top.postMessage(data, "*");\
    },\
    replied: function replied() {\
      this.trackMessageInteraction("{{ sending_id }}", "replied");\
      this.track(\'Ответил в попап\');\
      this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);\
    },\
    read: function read() {\
      this.trackMessageInteraction("{{ sending_id }}", "read");\
      this.track(\'Прочитал попап\');\
      this.track("Коммуникации: Прочитано сообщение - " + cqpopup_name);\
    },\
    resizeFrame: function resizeFrame(obj) {\
      var data = {\
        command: "carrotquest.resizeFrame",\
        id: "{{ sending_id }}",\
        width: obj.width,\
        height: obj.height\
      };\
      top.postMessage(data, "*");\
    }\
  };\
var widget = document.getElementById("video-widget"),\
  video = document.getElementById("vw-video"),\
  isPhone = top.window.innerWidth < 500;\
if (isPhone) {\
  document.body.classList.add(\'is-mobile\');\
}\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
    carrotquest.resizeFrame({\
      width: widget.offsetWidth + \'px\',\
      height: widget.offsetHeight + \'px\'\
    });\
  }\
});\
var sizes = isPhone ? {\
  mini: {\
    width: \'140px\',\
    height: \'175px\'\
  },\
  big: {\
    width: \'272px\',\
    height: \'640px\'\
  }\
} : {\
  mini: {\
    width: \'360px\',\
    height: \'495px\'\
  },\
  big: {\
    width: \'393px\',\
    height: \'910px\'\
  }\
};\
function expand() {\
  widget.setAttribute("data-state", "opened");\
  widget.classList.remove("mini");\
  widget.classList.add("big");\
  video.removeAttribute("loop");\
  video.currentTime = 0;\
  video.muted = false;\
  video.play();\
  document.querySelector(".video-widget__close").classList.remove("hidden");\
  document.querySelector(".video-widget__form").classList.remove("hidden");\
  carrotquest.resizeFrame(sizes.big);\
}\
function collapse() {\
  widget.setAttribute("data-state", "default");\
  widget.classList.add("mini");\
  widget.classList.remove("big");\
  video.setAttribute("loop", "");\
  video.muted = true;\
  document.querySelector(".video-widget__close").classList.add("hidden");\
  document.querySelector(".video-widget__form").classList.add("hidden");\
  carrotquest.resizeFrame(sizes.mini);\
}\
document.querySelector(".video-widget__container").addEventListener("click", function () {\
  if (widget.getAttribute("data-state") === "default") {\
    expand();\
  } else {\
    collapse();\
  }\
});\
document.querySelector(".video-widget__close").addEventListener("click", function (e) {\
  e.stopPropagation();\
  carrotquest.close();\
});\
video.addEventListener("ended", function () {\
  collapse();\
  video.currentTime = 0;\
  video.play();\
});\
document.addEventListener("mouseup", function (e) {\
  if (!widget.contains(e.target) && widget.getAttribute("data-state") !== "default") {\
    collapse();\
  }\
});\
document.addEventListener("submit", function (e) {\
  e.preventDefault();\
  var isPhoneReady = e.target.closest("#form.form-ready");\
  var checkbox1 = document.querySelector("#checkbox1").checked;\
  var isValid = true;\
  if (!isPhoneReady) {\
    document.querySelector(".cq_popup-input[name=\'phone\']").classList.add("error");\
    isValid = false;\
  }\
  if (!checkbox1) {\
    document.querySelector("#eula1").classList.add("error");\
    isValid = false;\
  } else {\
    document.querySelector("#eula1").classList.remove("error");\
  }\
  if (isValid) {\
    carrotquest.identify({\
      "$phone": document.querySelector(".cq_popup-input[name=\'phone\']").value\
    });\
    carrotquest.identify({\
      "Согласие на обработку персональных данных": true,\
      "Согласие на получение рекламных сообщений": document.querySelector("#checkbox2").checked\
    });\
    document.querySelector(".first-form").classList.add("hidden");\
    document.querySelector(".second-form").classList.remove("hidden");\
    carrotquest.replied();\
  }\
});\
(function (formSelector) {\
  var phoneInput = document.querySelector("[type=tel]"),\
    form = document.querySelector(formSelector),\
    formattedInputValue = "+7 (";\
  function checkCorrect(input) {\
    if (input.length == 18) {\
      form.classList.add("form-ready");\
      phoneInput.classList.add("success");\
      phoneInput.classList.remove("error");\
    } else {\
      form.classList.remove("form-ready");\
      phoneInput.classList.remove("success");\
      phoneInput.classList.remove("error");\
    }\
  }\
  function getInputNumbersValue(input) {\
    return input.value.replace(/\\D/g, "");\
  }\
  function getFormattedInputValue(input, inputNumbersValue, formattedInputValue) {\
    if (!(inputNumbersValue[0] == "7" || inputNumbersValue[0] == "8")) {\
      return formattedInputValue + inputNumbersValue;\
    }\
    if (inputNumbersValue.length > 1) {\
      formattedInputValue += inputNumbersValue.substring(1, 4);\
    }\
    if (inputNumbersValue.length >= 5) {\
      formattedInputValue += ") " + inputNumbersValue.substring(4, 7);\
    }\
    if (inputNumbersValue.length >= 8) {\
      formattedInputValue += "–" + inputNumbersValue.substring(7, 9);\
    }\
    if (inputNumbersValue.length >= 10) {\
      formattedInputValue += "–" + inputNumbersValue.substring(9, 11);\
    }\
    return formattedInputValue;\
  }\
  function onPhoneInput(e) {\
    var input = e.target,\
      inputNumbersValue = getInputNumbersValue(input);\
    if (e.inputType == "deleteContentBackward" && inputNumbersValue.length == 1) {\
      input.value = "";\
      return;\
    }\
    if (e.inputType == "insertFromPaste") {\
      if (["7", "8"].indexOf(inputNumbersValue[0]) > -1 && input.value != "") {\
        inputNumbersValue = inputNumbersValue.substring(1);\
      }\
      if (inputNumbersValue[0] == "9") {\
        inputNumbersValue = "8" + inputNumbersValue;\
      }\
    }\
    input.value = getFormattedInputValue(input, inputNumbersValue, formattedInputValue);\
    checkCorrect(input.value);\
  }\
  function onPhoneFocus(e) {\
    if (e.target.value == "") {\
      e.target.value = formattedInputValue;\
    }\
  }\
  function onPhoneBlur(e) {\
    if (e.target.value == formattedInputValue) {\
      e.target.value = "";\
    }\
    if (e.target.value.length != 18) {\
      form.classList.remove("form-ready");\
      phoneInput.classList.add("error");\
      phoneInput.classList.remove("success");\
    }\
  }\
  function selectionStart(e) {\
    var input = e.target;\
    if (input.selectionStart <= 3) {\
      input.selectionStart = 4;\
    }\
  }\
  phoneInput.addEventListener("input", onPhoneInput);\
  phoneInput.addEventListener("focus", onPhoneFocus);\
  phoneInput.addEventListener("blur", onPhoneBlur);\
  phoneInput.addEventListener("keyup", selectionStart);\
  phoneInput.addEventListener("click", selectionStart);\
})("#form");</script>\
</body>\
</html>\
\
';

"use strict";

var isPhone = window.innerWidth < 500;
var iframe = document.createElement('iframe');
iframe.id = 'carrot_frame_{{ sending_id }}';
iframe.frameBorder = 0;
iframe.style.opacity = "0";
iframe.style.position = 'fixed';
iframe.style.zIndex = '9999999999';
iframe.style.width = isPhone ? '140px' : '360px';
iframe.style.height = isPhone ? '175px' : '495px';
iframe.style.transition = '.5s';
iframe.style.bottom = '0';
iframe.style.left = '0';
iframe.style.top = 'auto';
iframe.style.right = 'auto';
document.body.appendChild(iframe);
var iframeContent = iframe.contentWindow || iframe.contentDocument;
if (iframeContent.document) iframeContent = iframeContent.document;
iframeContent.open();
iframeContent.writeln(popupContent);
iframeContent.close();
carrotquest.identify([{
  op: 'update_or_create',
  key: 'popup',
  value: 'opened'
}]);
localStorage["cq_popup"] = 'opened';