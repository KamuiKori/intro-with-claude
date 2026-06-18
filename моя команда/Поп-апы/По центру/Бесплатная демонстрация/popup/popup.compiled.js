var popupContent = '<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;700&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
}\
\
html,\
body {\
  height: 100%;\
}\
\
body {\
  overflow: hidden;\
  font-family: Onest, sans-serif;\
}\
\
a {\
  color: inherit;\
  text-decoration: none;\
}\
\
.d_flex {\
  display: -webkit-box;\
  display: -ms-flexbox;\
  display: flex;\
}\
\
.flex_col {\
  -webkit-box-orient: vertical;\
  -webkit-box-direction: normal;\
  -ms-flex-direction: column;\
  flex-direction: column;\
}\
\
.hidden {\
  display: none !important;\
}\
\
.success {\
  border-color: green !important;\
}\
\
.error {\
  border-color: red !important;\
}\
\
.cq-popup__bg {\
  display: block;\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background-color: rgba(51, 51, 51, 0.5);\
}\
\
.wrapper__body {\
  -webkit-box-align: center;\
      -ms-flex-align: center;\
          align-items: center;\
  -webkit-box-pack: center;\
      -ms-flex-pack: center;\
          justify-content: center;\
  width: 100%;\
  height: 100%;\
  padding: 15px;\
}\
\
.cq-popup__body {\
  position: relative;\
  z-index: 2;\
  width: 100%;\
  max-width: 550px;\
  background: #fff;\
  border-radius: 20px;\
  overflow: hidden;\
  -webkit-box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);\
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);\
}\
\
.cq-popup__close {\
  cursor: pointer;\
  width: 10px;\
  height: 10px;\
  position: absolute;\
  top: 15px;\
  right: 15px;\
  z-index: 10;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #16130e;\
  content: " ";\
  height: 14px;\
  position: absolute;\
  left: 4px;\
  top: -2px;\
  width: 1.5px;\
  border-radius: 1px;\
}\
\
.cq-popup__close:before {\
  -webkit-transform: rotate(45deg);\
          transform: rotate(45deg);\
}\
\
.cq-popup__close:after {\
  -webkit-transform: rotate(-45deg);\
          transform: rotate(-45deg);\
}\
\
.cq-popup__screenshot {\
  display: block;\
  margin: 30px auto 0;\
  width: 480px;\
  max-width: calc(100% - 40px);\
  border-radius: 20px;\
  height: auto;\
}\
\
.cq-popup__content {\
  padding: 20px 35px 30px;\
}\
\
.cq-popup__title {\
  font-weight: 700;\
  font-size: 24px;\
  line-height: normal;\
  color: #16130e;\
  margin-bottom: 12px;\
}\
\
.cq-popup__desc {\
  font-weight: 400;\
  font-size: 15px;\
  line-height: 1.5;\
  color: #16130e;\
  margin-bottom: 25px;\
}\
\
.cq-popup__desc .purple {\
  color: #9810fa;\
  font-weight: 700;\
}\
\
.cq-popup__inputs {\
  gap: 10px;\
  margin-bottom: 15px;\
}\
\
.cq_popup-input {\
  width: 100%;\
  height: 50px;\
  padding: 0 15px;\
  border: 1px solid #d2d2d2;\
  border-radius: 10px;\
  background: #fff;\
  outline: none;\
  font-family: Onest, sans-serif;\
  font-size: 16px;\
  font-weight: 400;\
  color: #16130e;\
}\
\
.cq_popup-input::-webkit-input-placeholder {\
  color: #ababab;\
}\
\
.cq_popup-input::-moz-placeholder {\
  color: #ababab;\
}\
\
.cq_popup-input:-ms-input-placeholder {\
  color: #ababab;\
}\
\
.cq_popup-input::placeholder {\
  color: #ababab;\
}\
\
.cq-popup__button {\
  display: -webkit-box;\
  display: -ms-flexbox;\
  display: flex;\
  -webkit-box-align: center;\
      -ms-flex-align: center;\
          align-items: center;\
  -webkit-box-pack: center;\
      -ms-flex-pack: center;\
          justify-content: center;\
  width: 100%;\
  height: 50px;\
  background: #9810fa;\
  color: #f0f0f0;\
  border: none;\
  border-radius: 10px;\
  cursor: pointer;\
  font-family: Onest, sans-serif;\
  font-size: 16px;\
  font-weight: 400;\
}\
\
.eula {\
  display: -webkit-box;\
  display: -ms-flexbox;\
  display: flex;\
  -webkit-box-align: flex-start;\
      -ms-flex-align: flex-start;\
          align-items: flex-start;\
  gap: 5px;\
  font-size: 12px;\
  font-weight: 400;\
  color: #16130e;\
  line-height: 1.4;\
  cursor: pointer;\
}\
\
.eula input[type="checkbox"] {\
  -webkit-appearance: none;\
  -moz-appearance: none;\
       appearance: none;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  width: 15px;\
  height: 15px;\
  border: 1.5px solid #9810fa;\
  border-radius: 3px;\
  cursor: pointer;\
  position: relative;\
  margin-top: 1px;\
  background: #fff;\
}\
\
.eula input[type="checkbox"]:checked::after {\
  content: "";\
  position: absolute;\
  left: 3px;\
  top: 1px;\
  width: 5px;\
  height: 8px;\
  border: 1.5px solid #9810fa;\
  border-top: none;\
  border-left: none;\
  -webkit-transform: rotate(45deg);\
          transform: rotate(45deg);\
}\
\
.eula a {\
  color: #9810fa;\
  text-decoration: underline;\
}\
\
.second-form {\
  padding: 35px;\
}\
\
.second-form .cq-popup__title {\
  font-size: 20px;\
  margin-bottom: 20px;\
}\
\
.second-form .cq-popup__desc {\
  font-size: 16px;\
  margin-bottom: 0;\
}\
\
@media (max-width: 600px) {\
  .cq-popup__body {\
    max-width: 335px;\
    border-radius: 8px;\
  }\
\
  .cq-popup__close {\
    top: 10px;\
    right: 10px;\
  }\
\
  .cq-popup__screenshot {\
    margin: 20px auto 0;\
    width: 295px;\
    max-width: calc(100% - 30px);\
    border-radius: 10px;\
  }\
\
  .cq-popup__content {\
    padding: 15px 20px 20px;\
  }\
\
  .cq-popup__title {\
    font-size: 16px;\
    margin-bottom: 10px;\
  }\
\
  .cq-popup__desc {\
    font-size: 14px;\
    margin-bottom: 20px;\
  }\
\
  .cq_popup-input {\
    height: 45px;\
    border-color: #e4e4e7;\
  }\
\
  .cq-popup__button {\
    height: 45px;\
  }\
\
  .second-form {\
    padding: 25px;\
  }\
\
  .second-form .cq-popup__title {\
    font-size: 16px;\
  }\
\
  .second-form .cq-popup__desc {\
    font-size: 14px;\
  }\
}</style>\
</head>\
<body>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body">\
        <a class="cq-popup__close"></a>\
        <form id="form" class="cq-popup__form first-form">\
            <img class="cq-popup__screenshot" src="https://www.figma.com/api/mcp/asset/d1a18d41-f82e-416a-8fa7-dfadf449916a" alt="">\
            <div class="cq-popup__content">\
                <p class="cq-popup__title">Бесплатная демонстрация</p>\
                <p class="cq-popup__desc">Введите номер телефона и за 20 минут мы покажем, как <strong class="purple">платформа Моя Команда</strong> помогает выстраивать HR-автоматизацию.</p>\
                <div class="cq-popup__inputs d_flex flex_col">\
                    <input class="cq_popup-input phone" type="tel" name="phone" placeholder="Введите номер телефона" required>\
                    <button type="submit" class="cq-popup__button">Отправить</button>\
                </div>\
                <label class="eula d_flex" for="checkbox">\
                    <input type="checkbox" id="checkbox" name="checkbox">\
                    <span>Я согласен (-на) на <a href="#">обработку персональных данных.</a></span>\
                </label>\
            </div>\
        </form>\
        <section class="second-form hidden" id="thank">\
            <p class="cq-popup__title">Записали!</p>\
            <p class="cq-popup__desc">Менеджер скоро свяжется с вами.</p>\
        </section>\
    </div>\
</div>\
<script> var cqpopup_name = "Бесплатная демонстрация",\
    carrotquest = {\
      track: function(eventName, params) {\
        parent.window.carrotquest.track(eventName, params);\
      },\
      identify: function(props) {\
        parent.window.carrotquest.identify(props);\
      },\
      trackMessageInteraction: function(sendingId, type) {\
        parent.window.carrotquest.trackMessageInteraction(sendingId, type);\
      },\
      animation: function() {\
        var data = { command: "carrotquest.animationPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name};\
        top.postMessage(data, "*");\
      },\
      close: function() {\
        var data = { command: "carrotquest.closePopup", "id": "{{ sending_id }}" };\
        top.postMessage(data, "*");\
      },\
      replied: function() {\
        this.trackMessageInteraction("{{ sending_id }}", "replied");\
        this.track(\'Ответил в попап\');\
        this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);\
      },\
      clicked: function() {\
        this.trackMessageInteraction("{{ sending_id }}", "clicked");\
        this.track(\'Перешел по ссылке в попапе\');\
        this.track("Коммуникации: Перешел по ссылке в сообщении - " + cqpopup_name);\
      },\
      read: function() {\
        this.trackMessageInteraction("{{ sending_id }}", "read");\
        this.track(\'Прочитал попап\');\
        this.track("Коммуникации: Прочитано сообщение - " + cqpopup_name);\
      }\
    };\
\
document.addEventListener("readystatechange", function() {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
  }\
});\
\
document.addEventListener("submit", function(e) {\
  e.preventDefault();\
  if (e.target.closest(".cq-popup__form.form-ready") && document.querySelector("#checkbox").checked) {\
    trackData("phone");\
    hidden_visible(\'.cq-popup__body\', \'.second-form\');\
    carrotquest.replied();\
  }\
});\
\
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function(item) {\
  item.addEventListener("click", carrotquest.close);\
});\
\
function trackData(data) {\
  carrotquest.identify({["$"+data]: document.querySelector(".cq_popup-input[name="+ data +"]").value });\
}\
\
function hidden_visible(elem1, elem2) {\
  document.querySelector(elem1).classList.add("hidden");\
  document.querySelector(elem2).classList.remove("hidden");\
}\
\
(function (form) {\
  var phoneInput = document.querySelector("[type=tel]"),\
      form = document.querySelector(form),\
      formattedInputValue = "+7 (";\
\
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
\
  function getInputNumbersValue(input) {\
    return input.value.replace(/\\D/g, "");\
  }\
\
  function getformattedInputValue(input, inputNumbersValue, formattedInputValue) {\
    if (!(inputNumbersValue[0] == "7" || inputNumbersValue[0] == "8")) {\
      formattedInputValue = formattedInputValue + inputNumbersValue;\
      return formattedInputValue;\
    }\
\
    if (inputNumbersValue.length > 1) {\
      formattedInputValue += inputNumbersValue.substring(1,4);\
    }\
\
    if (inputNumbersValue.length >= 5) {\
      formattedInputValue += ") " + inputNumbersValue.substring(4,7);\
    }\
\
    if (inputNumbersValue.length >= 8) {\
      formattedInputValue += "–"+inputNumbersValue.substring(7,9);\
    }\
\
    if (inputNumbersValue.length >= 10) {\
      formattedInputValue += "–"+inputNumbersValue.substring(9,11);\
    }\
\
    return formattedInputValue;\
  }\
\
  function onPhoneInput(e) {\
    var input = e.target,\
        inputNumbersValue = getInputNumbersValue(input);\
\
    if (e.inputType =="deleteContentBackward" && inputNumbersValue.length == 1) {\
      input.value = "";\
      return;\
    }\
\
    if (e.inputType =="insertFromPaste") {\
      if (["7", "8"].indexOf(inputNumbersValue[0]) > -1 && input.value != "") {\
        inputNumbersValue = inputNumbersValue.substring(1);\
      }\
\
      if (inputNumbersValue[0] == "9") {\
        inputNumbersValue = "8" + inputNumbersValue;\
      }\
    }\
\
    input.value = getformattedInputValue(input, inputNumbersValue, formattedInputValue);\
    checkCorrect(input.value);\
  }\
\
  function onPhoneFocus(e) {\
    if (e.target.value == "") {\
      e.target.value = formattedInputValue;\
    }\
  }\
\
  function onPhoneBlur(e) {\
    if (e.target.value == formattedInputValue) {\
      e.target.value = "";\
    }\
\
    if (e.target.value.length != 18) {\
      form.classList.remove("form-ready");\
      phoneInput.classList.add("error");\
      phoneInput.classList.remove("success");\
    }\
  }\
\
  function selectionStart(e) {\
    var input = e.target;\
\
    if (input.selectionStart <= 3) {\
      input.selectionStart = 4;\
    }\
  }\
\
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

var iframe = document.createElement('iframe');
iframe.id = 'carrot_frame_{{ sending_id }}';
iframe.frameBorder = 0;
iframe.style.opacity = "0";
iframe.style.position = 'fixed';
iframe.style.zIndex = '9999999999';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.transition = '.5s';
iframe.style.top = '0';
iframe.style.right = '0';
iframe.style.left = '0';
iframe.style.bottom = '0';
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
