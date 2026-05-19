var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"\
          rel="stylesheet">\
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
  background-color: rgba(51, 51, 51, 0.5);\
  -webkit-backdrop-filter: blur(10px);\
          backdrop-filter: blur(10px);\
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
  padding-left: 20px;\
  font-weight: 400;\
  font-size: 10px;\
  line-height: 14px;\
  color: #757575;\
  cursor: pointer;\
}\
\
[type=checkbox]:not(:checked) + label a,\
[type=checkbox]:checked + label a {\
  color: #00AEEF;\
}\
\
[type=checkbox]:not(:checked) + label:before,\
[type=checkbox]:checked + label:before {\
  content: "";\
  position: absolute;\
  left: 0px;\
  top: 0px;\
  width: 12px;\
  height: 12px;\
  background: #00AEEF;\
  border: 1px solid #00AEEF;\
  transition: all 0.275s;\
  border-radius: 3px;\
}\
\
[type=checkbox]:not(:checked) + label:after,\
[type=checkbox]:checked + label:after {\
  padding: 1px;\
  content: url(\'data:image/svg+xml,<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 3L2.5 5L7 0.5" stroke="white"/></svg>\');\
  position: absolute;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  top: 0px;\
  left: 0px;\
  font-size: 13px;\
  color: #00AEEF;\
  line-height: 0;\
  transition: all 0.2s;\
  background: #00AEEF;\
  border: none;\
  width: 12px;\
  height: 12px;\
  border-radius: 2px;\
}\
\
[type=checkbox].error:not(:checked) + label:before,\
[type=checkbox].error:checked + label:before {\
  border: 1px solid red;\
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
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  height: 100%;\
}\
\
.cq-popup__body {\
  position: relative;\
  z-index: 2;\
  width: 100%;\
  max-width: 890px;\
  margin: 15px;\
  background: #fff;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  -ms-flex-align: center;\
      align-items: center;\
  border-radius: 20px;\
}\
\
.cq-popup__close {\
  cursor: pointer;\
  height: 21px;\
  width: 21px;\
  position: absolute;\
  top: 10px;\
  right: 10px;\
  z-index: 99;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #000;\
  content: " ";\
  height: 15px;\
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
  border-radius: 3px;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 100%;\
  width: 100%;\
  padding: 0px 30px;\
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
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.cq-popup__form-inputs {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.cq_popup-input {\
  width: 100%;\
  height: 45px;\
  color: #000;\
  background: transparent;\
  border: 1px solid #00AEEF;\
  outline: none;\
  border-radius: 10px;\
  margin-bottom: 10px;\
  padding-left: 14px;\
  font-size: 16px;\
}\
\
.cq_popup-input::-webkit-input-placeholder {\
  color: #999999;\
}\
\
.cq_popup-input:-ms-input-placeholder {\
  color: #999999;\
}\
\
.cq_popup-input::-ms-input-placeholder {\
  color: #999999;\
}\
\
.cq_popup-input::placeholder {\
  color: #999999;\
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
  font-size: 16px;\
  line-height: normal;\
  color: #000;\
  text-align: left;\
  margin-bottom: 15px;\
}\
\
.cq-popup__text:last-of-type {\
  margin-bottom: 0;\
}\
\
.cq-popup__text-h1 {\
  margin-bottom: 15px;\
  font-size: 24px;\
  line-height: normal;\
  color: #000;\
  text-align: left;\
  font-weight: 700;\
}\
\
.cq-popup__text-h1 span {\
  color: #0556E5;\
  font-weight: 700;\
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
  background: #00AEEF;\
  color: #ffffff;\
  font-weight: 400;\
  cursor: pointer;\
  font-size: 16px;\
  border-radius: 10px;\
  text-align: center;\
  width: 100%;\
  line-height: 45px;\
  text-decoration: none;\
  margin-bottom: 10px;\
  border: none;\
}\
\
.eula {\
  color: #777777;\
  text-align: center;\
  font-size: 14px;\
  line-height: 21px;\
  max-width: 431px;\
}\
\
.eula a {\
  text-decoration: underline;\
}\
\
.mob {\
  display: none;\
}\
\
.second-form .cq-popup__form-title {\
  margin-bottom: 0;\
}\
\
.hidden {\
  display: none !important;\
}\
\
@media (max-width: 700px) {\
  .cq-popup__bg {\
    display: block;\
  }\
\
  .second-form {\
    -ms-flex-align: center;\
        align-items: center;\
  }\
\
  .second-form .cq-popup__form-title {\
    -ms-flex-align: center;\
        align-items: center;\
  }\
\
  .second-form .cq-popup__text-h1,\
  .second-form .cq-popup__text {\
    text-align: center;\
  }\
\
  .pc {\
    display: none;\
  }\
\
  .mob {\
    display: block;\
  }\
\
  .wrapper__body {\
    -ms-flex-align: center;\
        align-items: center;\
    -ms-flex-pack: center;\
        justify-content: center;\
  }\
\
  .cq-popup__form {\
    padding: 20px;\
  }\
\
  .cq-popup__close {\
    right: 10px;\
    top: 10px;\
  }\
\
  .cq-popup__text-h1 {\
    margin-bottom: 10px;\
    font-size: 18px;\
  }\
\
  .cq-popup__form-title {\
    margin-bottom: 15px;\
  }\
\
  .cq-popup__text {\
    font-size: 14px;\
    margin-bottom: 10px;\
  }\
\
  .cq_popup-input {\
    font-size: 14px;\
    margin-bottom: 10px;\
  }\
\
  .cq-popup__button {\
    font-size: 14px;\
    margin-bottom: 15px;\
  }\
\
  .cq-popup__body {\
    max-width: 335px;\
    -ms-flex-direction: column;\
        flex-direction: column;\
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
}\
\
@media (max-width: 400px) {\
  .cq-popup__text-h1 {\
    font-size: 16px;\
  }\
\
  .cq-popup__text {\
    font-size: 13px;\
  }\
\
  .cq_popup-input {\
    margin-bottom: 10px;\
    height: 40px;\
  }\
\
  .cq-popup__button {\
    line-height: 45px;\
  }\
\
  .eula {\
    font-size: 11px;\
  }\
}</style>\
</head>\
\
<body>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <a class="cq-popup__close"></a>\
        <img src="https://files.carrotquest.app/message-images/68184/68184-1756452282669-crh40p8w.png" alt="" class="pc">\
        <form id="form" class="cq-popup__form d_flex flex_col first-form">\
            <div class="cq-popup__form-content d_flex">\
                <div class="cq-popup__form-title d_flex flex_col">\
                    <p class="cq-popup__text-h1">Легкий старт HR-системы <br>для небольшой команды</p>\
                    <p class="cq-popup__text">Mirapolis поможет выстроить эффективную систему развития даже <br\
                            class="mob">в небольшой команде — «под ключ» <br class="mob">и с поддержкой на каждом этапе.</p>\
                    <p class="cq-popup__text">Оставьте телефон для записи <br class="mob">на бесплатную консультацию.</p>\
                </div>\
            </div>\
            <div class="cq-popup__form-inputs d_flex flex_col">\
                <input class="cq_popup-input name" type="text" name="name" placeholder="Имя" required>\
                <input class="cq_popup-input phone" type="tel" name="phone" placeholder="Телефон" required>\
                <input class="cq_popup-input email" type="email" name="email" placeholder="E-mail">\
                <button type="submit" class="cq-popup__button">\
                    Получить консультацию\
                </button>\
                <div class="eula">\
                    <input type="checkbox" id="checkbox">\
                    <label for="checkbox">Я даю согласие на <a\
                            href="https://www.mirapolis.ru/personal/user_pd_agreement/"\
                            target="_blank">обработку персональных данных</a></label>\
                </div>\
            </div>\
        </form>\
        <section class="second-form hidden cq-popup__form d_flex flex_col" id="thank">\
            <div class="cq-popup__form-title d_flex flex_col">\
                <p class="cq-popup__text-h1 thank">Спасибо!</p>\
                <p class="cq-popup__text">Мы уже передали номер менеджеру, <br class="mob">он скоро свяжется с Вами.</p>\
            </div>\
        </section>\
        <img src="https://files.carrotquest.app/message-images/68184/68184-1756452299352-9n673jvw.png" alt="" class="mob">\
    </div>\
</div>\
<script>"use strict";\
\
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\
var cqpopup_name = "1.4 Поп-ап для маленьких компаний",\
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
document.addEventListener("submit", function (e) {\
  var name = document.querySelector(\'input.name\').value;\
  e.preventDefault();\
  if (e.target.closest(".cq-popup__form.form-ready") && name && document.querySelector(\'#checkbox\').checked) {\
    trackData("phone");\
    trackData("name");\
    var email = document.querySelector(\'input.email\').value;\
    if (email) {\
      trackData("email");\
    }\
    carrotquest.identify([{\
      op: \'update_or_create\',\
      key: \'Источник CQ\',\
      value: \'Источник CQ значение\'\
    }]);\
    hidden_visible(\'.first-form\', \'.second-form\');\
    carrotquest.replied();\
    setTimeout(carrotquest.close, 5000);\
  }\
  if (!document.querySelector(\'#checkbox\').checked) {\
    document.querySelector(\'#checkbox\').classList.add(\'error\');\
  }\
});\
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {\
  item.addEventListener("click", carrotquest.close);\
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