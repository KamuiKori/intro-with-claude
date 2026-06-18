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
}\
\
a {\
  color: inherit;\
}\
\
.d_flex {\
  display: -ms-flexbox;\
  display: flex;\
}\
\
.flex_col {\
  -ms-flex-direction: column;\
  flex-direction: column;\
}\
\
.hidden {\
  display: none !important;\
}\
\
.cq-popup__bg {\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background-color: rgba(51, 51, 51, 0.5);\
  backdrop-filter: blur(5px);\
  -webkit-backdrop-filter: blur(5px);\
}\
\
.wrapper__body {\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  height: 100%;\
  position: relative;\
  z-index: 1;\
  padding: 15px;\
}\
\
.cq-popup__card {\
  position: relative;\
  background: #fff;\
  border-radius: 5px;\
  width: 430px;\
  overflow: hidden;\
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);\
}\
\
.cq-popup__close {\
  position: absolute;\
  top: 14px;\
  right: 14px;\
  width: 16px;\
  height: 16px;\
  cursor: pointer;\
  z-index: 10;\
}\
\
.cq-popup__close::before,\
.cq-popup__close::after {\
  content: "";\
  position: absolute;\
  top: 50%;\
  left: 0;\
  width: 100%;\
  height: 2px;\
  background: #f0541a;\
  border-radius: 1px;\
}\
\
.cq-popup__close::before {\
  -webkit-transform: translateY(-50%) rotate(45deg);\
          transform: translateY(-50%) rotate(45deg);\
}\
\
.cq-popup__close::after {\
  -webkit-transform: translateY(-50%) rotate(-45deg);\
          transform: translateY(-50%) rotate(-45deg);\
}\
\
.cq-popup__form {\
  padding: 30px 30px 15px;\
}\
\
.cq-popup__title {\
  font-size: 20px;\
  line-height: 1.3;\
  font-weight: 700;\
  color: #252525;\
  margin-bottom: 15px;\
}\
\
.cq-popup__desc {\
  font-size: 16px;\
  line-height: 1.5;\
  color: #252525;\
  margin-bottom: 20px;\
}\
\
.cq_popup-input {\
  width: 100%;\
  height: 50px;\
  background: #fff;\
  border: 1px solid #a7a7a7;\
  border-radius: 5px;\
  padding: 0 15px;\
  font-size: 16px;\
  color: #252525;\
  outline: none;\
  margin-bottom: 12px;\
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
.cq-popup__button {\
  width: 100%;\
  height: 50px;\
  background: #f0541a;\
  color: #fff;\
  border: none;\
  border-radius: 5px;\
  font-size: 16px;\
  font-weight: 700;\
  cursor: pointer;\
  margin-bottom: 12px;\
  letter-spacing: 0.02em;\
}\
\
.eula {\
  position: relative;\
  margin-bottom: 4px;\
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
  padding-left: 18px;\
  font-size: 10px;\
  line-height: 1.4;\
  color: #252525;\
  cursor: pointer;\
  display: block;\
}\
\
.eula label a {\
  text-decoration: underline;\
}\
\
.eula label::before {\
  content: "";\
  position: absolute;\
  left: 0;\
  top: 1px;\
  width: 12px;\
  height: 12px;\
  border: 1px solid #a7a7a7;\
  border-radius: 2px;\
  background: #fff;\
  transition: border-color 0.2s;\
}\
\
.eula label::after {\
  content: "";\
  position: absolute;\
  left: 2px;\
  top: 3px;\
  width: 8px;\
  height: 5px;\
  border-left: 2px solid #f0541a;\
  border-bottom: 2px solid #f0541a;\
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
  padding: 40px 30px 30px;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  min-height: 129px;\
}\
\
.second-form .cq-popup__title {\
  text-align: center;\
  margin-bottom: 10px;\
}\
\
.second-form .cq-popup__desc {\
  text-align: center;\
  margin-bottom: 0;\
}\
\
.cq-popup__photo {\
  width: 100%;\
  height: 177px;\
  background-image: url("https://files.carrotquest.app/message-images/63248/63248-1779455463483-ydji9yse.png");\
  background-size: cover;\
  background-position: center;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
@media (max-width: 640px) {\
  .wrapper__body {\
    -ms-flex-align: start;\
        align-items: flex-start;\
    padding: 10px;\
    overflow-y: auto;\
  }\
\
  .cq-popup__card {\
    width: 100%;\
    max-width: 340px;\
    margin: auto;\
  }\
\
  .cq-popup__photo {\
    -ms-flex-order: -1;\
        order: -1;\
    height: 142px;\
    background-image: url("https://files.carrotquest.app/message-images/63248/63248-1779455481781-n0ei6qb6.png");\
  }\
\
  .cq-popup__close {\
    top: 10px;\
    right: 10px;\
  }\
\
  .cq-popup__form {\
    padding: 20px 20px 12px;\
  }\
\
  .second-form {\
    padding: 25px 20px 20px;\
  }\
\
  .cq-popup__title {\
    font-size: 18px;\
  }\
\
  .cq_popup-input,\
  .cq-popup__button {\
    height: 44px;\
  }\
}</style>\
</head>\
<body>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__card d_flex flex_col">\
        <a class="cq-popup__close"></a>\
        <form id="form" class="cq-popup__form d_flex flex_col first-form">\
            <p class="cq-popup__title">Понравилась квартира? Успейте забронировать по сегодняшней цене</p>\
            <p class="cq-popup__desc">В связи с высокой стадией готовности ЖК планируется повышение цен на объекты. Оставьте свои контакты, чтобы мы сохранили для вас стоимость квартиры.</p>\
            <input class="cq_popup-input" type="tel" name="phone" placeholder="Введите телефон" required>\
            <button type="submit" class="cq-popup__button">ХОЧУ ЗАБРОНИРОВАТЬ</button>\
            <div class="eula" id="eula1">\
                <input type="checkbox" id="checkbox1" checked>\
                <label for="checkbox1">Я согласен на <a href="https://mental-plus.ru/site/download?file=L3Zhci93d3cvbWVudGFsLXBsdXMucnUvd2ViL3VwbG9hZC84ODkzN2ZiYmZmZDUyMDRiNTgzMmFmMmRkYmRhZGUwOC7Qn9C%2B0LvQuNGC0LjQutCwINC%2B0LHRgNCw0LHQvtGC0LrQuCDQv9C10YDRgdC%2B0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFLmRvY3g%3D&alias=politika-v-otnosenii-obrabotki-personalnyh-dannyh" target="_blank">обработку персональных данных</a></label>\
            </div>\
            <div class="eula" id="eula2">\
                <input type="checkbox" id="checkbox2">\
                <label for="checkbox2">Я согласен на получение <a href="https://mental-plus.ru/site/download?file=L3Zhci93d3cvbWVudGFsLXBsdXMucnUvd2ViL3VwbG9hZC8wYjdhMDVlYWJmZThiOGZlOTljODk1MmZiNmJhNmI3MS7QodC%2B0LPQu9Cw0YHQuNC1INC90LAg0L%2FQvtC70YPRh9C10L3QuNC1INGA0LXQutC70LDQvNC90L4t0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvRhSDQvNCw0YLQtdGA0LjQsNC70L7QsiAoMSkuZG9jeA%3D%3D&alias=soglasie-na-polucenie-reklamno-informacionnyh-materialov" target="_blank">рекламно-информационных сообщений</a></label>\
            </div>\
        </form>\
        <section id="thank" class="second-form hidden d_flex flex_col">\
            <p class="cq-popup__title">Спасибо!</p>\
            <p class="cq-popup__desc">Менеджер вам перезвонит 🙂</p>\
        </section>\
        <div class="cq-popup__photo"></div>\
    </div>\
</div>\
<script>"use strict";\
\
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\
var cqpopup_name = "15.1 Поп-ап забронируйте цену",\
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
    }\
  };\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
  }\
});\
document.addEventListener("submit", function (e) {\
  e.preventDefault();\
  var isPhoneReady = e.target.closest(".cq-popup__form.form-ready");\
  var checkbox1 = document.querySelector(\'#checkbox1\').checked;\
  var isValid = true;\
  if (!isPhoneReady) {\
    document.querySelector(\'.cq_popup-input[name="phone"]\').classList.add(\'error\');\
    isValid = false;\
  }\
  if (!checkbox1) {\
    document.querySelector(\'#eula1\').classList.add(\'error\');\
    isValid = false;\
  } else {\
    document.querySelector(\'#eula1\').classList.remove(\'error\');\
  }\
  if (isValid) {\
    trackData("phone");\
    carrotquest.identify({\
      "Согласие на обработку персональных данных": document.querySelector(\'#checkbox1\').checked,\
      "Согласие на получение рекламных сообщений": document.querySelector(\'#checkbox2\').checked\
    });\
    hidden_visible(\'.first-form\', \'.second-form\');\
    carrotquest.replied();\
    setTimeout(function () {\
      carrotquest.close();\
    }, 5000);\
  }\
});\
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {\
  item.addEventListener("click", function () {\
    carrotquest.close();\
  });\
});\
document.querySelector(".wrapper__body").addEventListener("click", function (e) {\
  if (e.target === this) {\
    carrotquest.close();\
  }\
});\
function trackData(data) {\
  carrotquest.identify(_defineProperty({}, "$" + data, document.querySelector(\'.cq_popup-input[name="\' + data + \'"]\').value));\
}\
function hidden_visible(elem1, elem2) {\
  document.querySelector(elem1).classList.add("hidden");\
  document.querySelector(elem2).classList.remove("hidden");\
}\
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
      formattedInputValue = formattedInputValue + inputNumbersValue;\
      return formattedInputValue;\
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