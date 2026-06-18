var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "ObjectSans", sans-serif;\
  font-weight: 400;\
}\
\
@font-face {\
  font-family: "ObjectSans";\
  font-weight: 400;\
  src: url("https://static.tildacdn.com/tild3138-3230-4465-b231-366630663338/ObjectSans-Regular.woff") format("woff");\
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
  max-height: 597px;\
  width: 100%;\
  max-width: 540px;\
  margin: 15px;\
  box-shadow: 0px 0px 21px rgba(142, 142, 142, 0.29);\
  background: #fff;\
}\
\
.cq-popup__close {\
  cursor: pointer;\
  height: 21px;\
  width: 21px;\
  position: absolute;\
  top: 20px;\
  right: 25px;\
  z-index: 99;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #ffffff;\
  content: " ";\
  height: 30px;\
  position: absolute;\
  left: 0;\
  right: 0;\
  top: 0;\
  bottom: 0;\
  margin: auto;\
  width: 2px;\
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
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 100%;\
  width: 100%;\
  padding: 40px 20px;\
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
  margin-bottom: 33px;\
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
  height: 55px;\
  color: #000;\
  border: none;\
  background: #F5F4F3;\
  outline: none;\
  border-radius: 5px;\
  margin-bottom: 20px;\
  padding-left: 20px;\
  font-size: 16px;\
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
  line-height: 24px;\
  color: #000;\
  text-align: center;\
  max-width: 390px;\
}\
\
.cq-popup__text-h1 {\
  margin-bottom: 10px;\
  font-size: 20px;\
  line-height: 28px;\
  color: #000;\
  text-align: center;\
  font-weight: 600;\
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
.cq-popup__input::-moz-placeholder {\
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
  background: #000000;\
  color: #ffffff;\
  font-weight: 700;\
  cursor: pointer;\
  font-size: 16px;\
  border-radius: 10px;\
  text-align: center;\
  width: 100%;\
  max-width: 355px;\
  line-height: 55px;\
  text-decoration: none;\
  margin-bottom: 12px;\
  font-family: "Open Sans", sans-serif;\
  border: none;\
}\
\
.second-form {\
  min-height: 329px;\
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
.hidden {\
  display: none !important;\
}\
\
@media (max-width: 700px) {\
  .cq-popup__bg {\
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
    padding: 20px 20px;\
  }\
\
  .cq-popup__close {\
    right: 20px;\
    top: 15px;\
  }\
\
  .cq-popup__text-h1 {\
    margin-bottom: 5px;\
    max-width: 286px;\
  }\
\
  .cq-popup__form-title {\
    margin-bottom: 19px;\
  }\
\
  .cq-popup__text {\
    font-size: 16px;\
  }\
\
  .cq-popup__body {\
    max-width: 340px;\
    max-height: 675px;\
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
<a class="cq-popup__close"></a>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <form id="form" class="cq-popup__form d_flex flex_col first-form">\
            <div class="cq-popup__form-content d_flex">\
                <div class="cq-popup__form-title d_flex flex_col">\
                    <p class="cq-popup__text-h1">Заголовок</p>\
                    <p class="cq-popup__text">Текст</p>\
                </div>\
            </div>\
            <div class="cq-popup__form-inputs d_flex flex_col">\
                <input class="cq_popup-input email" type="email" name="email" placeholder="E-mail" required>\
                <button type="submit" class="cq-popup__button">\
                    Текст кпопки\
                </button>\
            </div>\
            <div class="eula">\
                <span>Нажимая на кнопку, вы разрешаете нам обрабатывать ваши <a href="https://setters.education/agreement">персональные данные</a> и соглашаетесь с условиями <a\
                        href="https://setters.education/oferta">оферты</a>.</span>\
            </div>\
        </form>\
        <section class="second-form hidden" id="thank">\
            <div class="cq-popup__form-title d_flex flex_col">\
                <p class="cq-popup__text-h1 thank">Заголовок</p>\
                <p class="cq-popup__text">Текст</p>\
            </div>\
        </section>\
    </div>\
</div>\
<script>"use strict";\
\
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\
\
var cqpopup_name = "Лидген(email)+форма спасибо",\
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
  var email = document.querySelector(\'input.email\').value;\
  e.preventDefault();\
\
  if (email) {\
    trackData("email");\
    hidden_visible(\'.first-form\', \'.second-form\');\
    carrotquest.replied();\
    setTimeout(carrotquest.close, 5000);\
  }\
});\
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {\
  item.addEventListener("click", carrotquest.close);\
});\
\
function trackData(data) {\
  carrotquest.identify(_defineProperty({}, "$" + data, document.querySelector(".cq_popup-input[name=" + data + "]").value));\
}\
\
function hidden_visible(elem1, elem2) {\
  document.querySelector(elem1).classList.add("hidden");\
  document.querySelector(elem2).classList.remove("hidden");\
}</script>\
</body>\
</html>\
\
';

"use strict";

var iframe = document.createElement('iframe');
iframe.id = 'carrot_frame_{{ sending_id }}';
iframe.frameBorder = 0;
iframe.style.opacity = "0";
iframe.style.position = 'relative';
iframe.style.zIndex = '1';
iframe.style.width = '100%';
iframe.style.height = '500px';
iframe.style.transition = '.5s';
iframe.style.top = '0';
iframe.style.right = '0';
iframe.style.left = '0';
iframe.style.bottom = '0';
top.document.querySelector('h2').after(iframe)
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