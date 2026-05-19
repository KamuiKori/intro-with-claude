var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">\
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
.cq-popup__bg {\
  display: block;\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background-color: rgba(0, 0, 0, 0.4);\
}\
\
.d_flex {\
  display: -moz-flex;\
  display: -ms-flex;\
  display: -o-flex;\
  display: -ms-flexbox;\
  display: flex;\
}\
\
.flex_col {\
  -ms-flex-direction: column;\
  flex-direction: column;\
}\
\
.flex_row {\
  -ms-flex-direction: row;\
  flex-direction: row;\
}\
\
.success {\
  border: 1px green solid !important;\
}\
\
.error {\
  border: 1px red solid !important;\
}\
\
.wrapper__body {\
  --webkit-box-align: flex-end;\
  --ms-flex-align: flex-end;\
  -ms-flex-align: end;\
      align-items: flex-end;\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  width: 100%;\
  height: 100%;\
  padding: 20px;\
}\
\
.cq-popup__body {\
  position: relative;\
  z-index: 2;\
  width: 100%;\
  max-width: 384px;\
  background: url("https://files.carrotquest.app/message-images/2782/2782-1745500635833-cwnw6iqd.png");\
  background-repeat: no-repeat;\
  padding: 20px;\
  border-radius: 10px;\
}\
\
.top_img {\
  position: absolute;\
  top: 0;\
  right: 0;\
}\
\
.cq-popup__close {\
  cursor: pointer;\
  height: 21px;\
  width: 21px;\
  position: absolute;\
  top: 25px;\
  right: 25px;\
  z-index: 99;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #000000;\
  content: " ";\
  height: 20px;\
  position: absolute;\
  left: 0;\
  right: 0;\
  top: 0;\
  bottom: 0;\
  margin: auto;\
  width: 1px;\
  border-radius: 3px;\
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
.cq-popup__form-wrapper {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  height: 100%;\
  overflow: hidden;\
}\
\
.cq-popup__form {\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 100%;\
  width: 100%;\
  padding: 20px;\
  border-radius: 10px;\
  background: #fff;\
}\
\
.percentage {\
  font-size: 64px;\
  color: #F20C08;\
  text-align: center;\
  margin-bottom: 20px;\
  font-weight: 700;\
  -webkit-text-stroke: 1px white;\
  text-shadow: 0 0 5px #fff, 0 0 4px #F20C08, 0 0 1px #F20C08;\
}\
\
.cq-popup__form-content {\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.cq-popup__form-title {\
  margin-bottom: 15px;\
  -ms-flex-align: center;\
      align-items: center;\
}\
\
.cq-popup__form-inputs {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  max-width: 360px;\
}\
\
.cq_popup-input {\
  width: 100%;\
  height: 45px;\
  color: #000;\
  background: #fff;\
  outline: none;\
  border-radius: 10px;\
  border: 1px solid #DDDDDD;\
  margin-bottom: 10px;\
  padding-left: 20px;\
  font-size: 16px;\
}\
\
.cq_popup-input::-webkit-input-placeholder {\
  color: #000000;\
}\
\
.cq_popup-input:-ms-input-placeholder {\
  color: #000000;\
}\
\
.cq_popup-input::-ms-input-placeholder {\
  color: #000000;\
}\
\
.cq_popup-input::placeholder {\
  color: #000000;\
}\
\
.cqp__input {\
  border: 1px solid #9d9d9d;\
  border-radius: 5px;\
  width: 100%;\
  height: 46px;\
  font-size: 16px;\
  line-height: 21px;\
  margin-bottom: 10px;\
  max-width: 355px;\
  outline: none;\
  text-align: center;\
}\
\
.cq-popup__text {\
  font-size: 14px;\
  line-height: normal;\
  color: #000;\
  text-align: center;\
}\
\
.cq-popup__text-h1 {\
  margin-bottom: 15px;\
  font-size: 18px;\
  line-height: normal;\
  color: #000;\
  text-align: center;\
  font-weight: 600;\
}\
\
.cq-popup__text-h1.thank {\
  margin-bottom: 0;\
}\
\
.send_email {\
  color: #487EDB;\
}\
\
.cq-popup__input {\
  background: #ffffff;\
  border: 1px solid #C9C9C9;\
  color: #000;\
  font-size: 16px;\
  font-weight: 400;\
  padding: 0 20px;\
  text-align: center;\
  width: 100%;\
  line-height: 44px;\
  outline: none;\
  border-radius: 3px;\
  margin-bottom: 10px;\
}\
\
.cq-popup__input::-webkit-input-placeholder {\
  font-size: 16px;\
  color: #9BA2AB;\
}\
\
.cq-popup__input:-ms-input-placeholder {\
  font-size: 16px;\
  color: #9BA2AB;\
}\
\
.cq-popup__input::-ms-input-placeholder {\
  font-size: 16px;\
  color: #9BA2AB;\
}\
\
.cq-popup__input::placeholder {\
  font-size: 16px;\
  color: #9BA2AB;\
}\
\
.cq-popup__button {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  background: #4A4A4A;\
  color: #ffffff;\
  font-weight: 400;\
  cursor: pointer;\
  font-size: 14px;\
  border-radius: 10px;\
  text-align: center;\
  width: 100%;\
  line-height: 47px;\
  text-decoration: none;\
  margin-bottom: 5px;\
  border: none;\
}\
\
#checkbox {\
  width: 15px;\
  height: 15px;\
  background: #fff;\
  margin-right: 13px;\
}\
\
[type=checkbox]:not(:checked),\
[type=checkbox]:checked {\
  position: absolute;\
  left: 0;\
  opacity: 0.01;\
}\
\
[type=checkbox]:not(:checked) + label,\
[type=checkbox]:checked + label {\
  position: relative;\
  padding-left: 24px;\
  font-weight: 400;\
  font-size: 9px;\
  line-height: 17px;\
  cursor: pointer;\
  color: #979797;\
}\
\
[type=checkbox]:not(:checked) + label:before,\
[type=checkbox]:checked + label:before {\
  content: "";\
  position: absolute;\
  left: 0px;\
  top: 0px;\
  width: 13px;\
  height: 13px;\
  background: #fff;\
  border: 1px solid #4A4A4A;\
  transition: all 0.275s;\
  border-radius: 3px;\
}\
\
[type=checkbox]:not(:checked) + label:after,\
[type=checkbox]:checked + label:after {\
  padding: 1px;\
  content: " ";\
  position: absolute;\
  top: 3px;\
  left: 3px;\
  font-size: 13px;\
  color: #4A4A4A;\
  line-height: 0;\
  transition: all 0.2s;\
  background: #4A4A4A;\
  width: 7px;\
  height: 7px;\
  border-radius: 2px;\
}\
\
[type=checkbox]:not(:checked) + label:after {\
  opacity: 0;\
  -webkit-transform: scale(0) rotate(45deg);\
  transform: scale(0) rotate(45deg);\
}\
\
[type=checkbox]:checked + label:after {\
  opacity: 1;\
  -webkit-transform: scale(1) rotate(0);\
  transform: scale(1) rotate(0);\
}\
\
.eula {\
  color: #777777;\
  text-align: center;\
  font-size: 14px;\
  line-height: 21px;\
  max-width: 431px;\
  -ms-flex-item-align: start;\
      align-self: flex-start;\
}\
\
.eula a {\
  text-decoration: underline;\
}\
\
.hidden {\
  display: none !important;\
}\
\
@media (max-width: 449px) {\
  .cq-popup__bg {\
    display: block;\
  }\
\
  .wrapper__body {\
    -ms-flex-align: end;\
        align-items: flex-end;\
    -ms-flex-pack: center;\
        justify-content: center;\
  }\
\
  .cq-popup__form {\
    padding: 15px;\
  }\
\
  .cq-popup__close {\
    right: 10px;\
    top: 10px;\
  }\
\
  .cq-popup__close:before,\
  .cq-popup__close:after {\
    height: 15px;\
  }\
\
  .percentage {\
    margin-bottom: 15px;\
  }\
\
  .top_img {\
    max-width: 63px;\
  }\
\
  .cq-popup__text-h1 {\
    margin-bottom: 10px;\
    font-size: 16px;\
  }\
\
  .cq-popup__form-title {\
    margin-bottom: 10px;\
  }\
\
  .cq-popup__text {\
    font-size: 12px;\
  }\
\
  .cq_popup-input {\
    font-size: 12px;\
    height: 45px;\
    margin-bottom: 10px;\
    padding-left: 20px;\
  }\
\
  .cq-popup__button {\
    font-size: 12px;\
    line-height: 45px;\
  }\
\
  .cq-popup__body {\
    max-width: 320px;\
    height: auto;\
    padding: 10px;\
  }\
\
  .cq-popup__form-inputs {\
    max-width: 300px;\
  }\
\
  .cq-popup-inputs-title {\
    text-align: center;\
    font-size: 16px;\
    margin-bottom: 20px;\
  }\
\
  .cq-input-tel {\
    border: 1px solid #000000;\
  }\
}</style>\
</head>\
\
<body>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <img src="https://files.carrotquest.app/message-images/2782/2782-1745500738133-l6vjhv7o.png" alt="" class="pc top_img">\
        <a class="cq-popup__close"></a>\
        <form id="form" class="cq-popup__form d_flex flex_col first-form">\
            <p class="percentage">\
                2%\
            </p>\
            <div class="cq-popup__form-content d_flex">\
                <div class="cq-popup__form-title d_flex flex_col">\
                    <p class="cq-popup__text-h1">Растущая скидка — только <br>для вас</p>\
                    <p class="cq-popup__text">Дизайнерские радиаторы с максимальной выгодой. Подпишитесь на наш Telegram\
                        <br>и получите индивидуальное предложение:</p>\
                </div>\
            </div>\
            <div class="cq-popup__form-inputs d_flex flex_col">\
                <input class="cq_popup-input phone" type="tel" name="phone" placeholder="Телефон *" required>\
                <button type="submit" class="cq-popup__button">\
                    Забрать скидку\
                </button>\
            </div>\
            <div class="eula">\
                <input type="checkbox" id="checkbox" checked>\
                <label for="checkbox">Я согласен на обработку персональных данных.</label>\
            </div>\
        </form>\
        <section class="second-form hidden cq-popup__form d_flex flex_col" id="thank">\
            <p class="percentage">\
                2%\
            </p>\
                <p class="cq-popup__text-h1 thank">Растущая скидка — только <br>для вас</p>\
        </section>\
    </div>\
</div>\
<script>"use strict";\
\
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\
var cqpopup_name = "Поп-ап с таймером скидки",\
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
    clicked: function clicked() {\
      this.trackMessageInteraction("{{ sending_id }}", "clicked");\
      this.track(\'Перешел по ссылке в попапе\');\
      this.track("Коммуникации: Перешел по ссылке в сообщении - " + cqpopup_name);\
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
var visibleCurSale = Number(document.querySelector(\'.percentage\').textContent.replace(/\\D/g, ""));\
var curSaleAmount = localStorage.getItem(\'cq_curSaleAmount\') ? Number(localStorage.getItem(\'cq_curSaleAmount\')) : 2;\
var maxSale = 10;\
if (localStorage.getItem(\'cq_curSaleAmount\')) {\
  if (Number(localStorage.getItem(\'cq_curSaleAmount\')) <= maxSale) {\
    visibleCurSale = Number(localStorage.getItem(\'cq_curSaleAmount\'));\
    visibleCurSale = adjustToNearestEven(visibleCurSale.toFixed(1));\
    document.querySelectorAll(\'.percentage\').forEach(function (item) {\
      item.textContent = visibleCurSale + "%";\
    });\
  }\
}\
var curStep;\
var saleInterval = setInterval(function () {\
  if (curSaleAmount >= maxSale) {\
    clearInterval(saleInterval);\
    return;\
  }\
  curSaleAmount += 0.1;\
  curSaleAmount = parseFloat(curSaleAmount.toFixed(1));\
  localStorage.setItem(\'cq_curSaleAmount\', curSaleAmount);\
  if (adjustToNearestEven(curSaleAmount) % 2 === 0) {\
    visibleCurSale = adjustToNearestEven(curSaleAmount);\
    document.querySelectorAll(\'.percentage\').forEach(function (item) {\
      item.textContent = visibleCurSale + "%";\
    });\
  }\
}, 6667);\
function adjustToNearestEven(number) {\
  if (Math.floor(number) % 2 !== 0) {\
    return Math.floor(number) + 1;\
  } else {\
    return Math.floor(number) === number ? number : Math.floor(number);\
  }\
}\
document.addEventListener("submit", function (e) {\
  e.preventDefault();\
  if (e.target.closest(".cq-popup__form.form-ready") && document.querySelector(\'#checkbox\').checked) {\
    trackData("phone");\
    hidden_visible(\'.first-form\', \'.second-form\');\
    carrotquest.identify([{\
      op: \'update_or_create\',\
      key: cqpopup_name + \' - размер скидки\',\
      value: adjustToNearestEven(curSaleAmount)\
    }]);\
    localStorage.removeItem(\'cq_curSaleAmount\');\
    carrotquest.replied();\
    clearInterval(saleInterval);\
    writePromo();\
    setTimeout(carrotquest.close, 5000);\
  }\
});\
function writePromo() {\
  var promo = "";\
  switch (adjustToNearestEven(curSaleAmount)) {\
    case 2:\
      promo = \'72pyca\';\
      break;\
    case 4:\
      promo = \'g1n15z\';\
      break;\
    case 6:\
      promo = \'6isdv2\';\
      break;\
    case 8:\
      promo = \'bs1w13\';\
      break;\
    case maxSale:\
      promo = \'6rxda8\';\
      break;\
  }\
  carrotquest.identify([{\
    op: \'update_or_create\',\
    key: cqpopup_name + \' - Промокод\',\
    value: promo\
  }]);\
}\
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {\
  item.addEventListener("click", function () {\
    clearInterval(saleInterval);\
    localStorage.removeItem(\'cq_curSaleAmount\');\
    carrotquest.close();\
  });\
});\
function trackData(data) {\
  carrotquest.identify(_defineProperty({}, "$" + data, document.querySelector(".cq_popup-input[name=" + data + "]").value));\
}\
function hidden_visible(elem1, elem2) {\
  document.querySelector(elem1).classList.add("hidden");\
  document.querySelector(elem2).classList.remove("hidden");\
}\
(function (form) {\
  var phoneInput = document.querySelector("[type=tel]"),\
    form = document.querySelector(form),\
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
  function getformattedInputValue(input, inputNumbersValue, formattedInputValue) {\
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
    input.value = getformattedInputValue(input, inputNumbersValue, formattedInputValue);\
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
iframe.style.width = '450px';
iframe.style.height = '490px';
iframe.style.transition = '.5s';
iframe.style.left = '0';
iframe.style.bottom = '0';
if (top.window.innerWidth < 450) {
  iframe.style.width = '350px';
  iframe.style.height = '430px';
  iframe.style.left = '50%';
  iframe.style.bottom = '0';
  iframe.style.transform = 'translateX(-50%)';
}
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