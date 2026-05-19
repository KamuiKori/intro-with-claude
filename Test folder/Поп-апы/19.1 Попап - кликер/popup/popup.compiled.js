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
    <style>@font-face {\
  font-family: "Benzin-Regular";\
  font-weight: 400;\
  src: url("https://www.nokidsstickers.ru/wp-content/themes/nksshop/assets/fonts/Benzin-Regular.woff") format("woff");\
}\
\
@font-face {\
  font-family: "Benzin-Bold";\
  font-weight: 400;\
  src: url("https://www.nokidsstickers.ru/wp-content/themes/nksshop/assets/fonts/Benzin-Bold.woff") format("woff");\
}\
\
@font-face {\
  font-family: "ProximaNova-Regular";\
  font-weight: 400;\
  src: url("https://www.nokidsstickers.ru/wp-content/themes/nksshop/assets/fonts/ProximaNova-Regular.woff2") format("woff2");\
}\
\
@font-face {\
  font-family: "ProximaNova-Bold";\
  font-weight: 700;\
  src: url("https://www.nokidsstickers.ru/wp-content/themes/nksshop/assets/fonts/ProximaNova-Bold.woff2") format("woff2");\
}\
\
* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "ProximaNova-Regular", sans-serif;\
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
  background: rgba(163, 163, 163, 0.5);\
  -webkit-backdrop-filter: blur(15px);\
          backdrop-filter: blur(15px);\
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
  max-width: 640px;\
  margin: 15px;\
  box-shadow: 0px 0px 21px rgba(142, 142, 142, 0.29);\
  background: url("https://files.carrotquest.app/message-images/48967/48967-1703829468865-s2tqomku.png");\
  background-size: cover;\
  border-radius: 10px;\
}\
\
.wrapper {\
  display: -ms-flexbox;\
  display: flex;\
  width: 100%;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
}\
\
.progress_bar {\
  width: 100%;\
  max-width: 200px;\
  height: 25px;\
  border-radius: 71px;\
  border: 2px solid #000;\
  background: #FFF;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  position: relative;\
}\
\
.progress_bar_active {\
  border-radius: 71px;\
  border: 2px solid #000;\
  background: linear-gradient(90deg, #FC836B 0%, #FF2A00 100%);\
  height: 25px;\
  width: 25px;\
  margin: 0;\
  position: absolute;\
  left: -2px;\
  top: -2px;\
}\
\
.clicker_progress {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  width: 100%;\
  -ms-flex-align: center;\
      align-items: center;\
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
.clicker_wrapper {\
  width: 100%;\
  max-width: 280px;\
}\
\
.levels_wrapper {\
  width: 100%;\
  max-width: 270px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.level {\
  border-radius: 10px;\
  border: 2px solid #BABABA;\
  background: #EFEFEF;\
  margin-bottom: 10px;\
  padding: 15px 20px;\
}\
\
.level:last-of-type {\
  margin: 0;\
}\
\
.level.active {\
  border-radius: 10px;\
  border: 2px solid #000;\
  background: #FC836B;\
  cursor: pointer;\
}\
\
.level.active .level_name {\
  color: #FFF;\
  font-size: 18px;\
  font-style: normal;\
  font-weight: 700;\
  line-height: 20px;\
}\
\
.level.active .level_description {\
  color: #FFF;\
  font-size: 16px;\
  font-style: normal;\
  font-weight: 400;\
  line-height: 20px;\
}\
\
.level.active .level_prize {\
  color: #FFF;\
  font-size: 16px;\
  font-style: normal;\
  font-weight: 400;\
  line-height: 20px;\
}\
\
.level.active .level_prize span {\
  color: #FFF;\
  font-size: 16px;\
  font-style: normal;\
  font-weight: 700;\
  line-height: 20px;\
}\
\
#email {\
  display: -ms-flexbox;\
  display: flex;\
  width: 100%;\
  max-width: 517px;\
  position: relative;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  z-index: 1000;\
  background: url("https://files.carrotquest.app/message-images/48967/48967-1703836588866-j4sfyfqq.png");\
  padding: 203px 30px 35px;\
  -ms-flex-align: center;\
      align-items: center;\
  border-radius: 10px;\
}\
\
#email .cq-popup__form-title {\
  margin-bottom: 20px;\
}\
\
#email img {\
  position: absolute;\
  top: -75px;\
  left: 0;\
  right: 0;\
  margin: 0 auto;\
}\
\
.level_name {\
  color: #BABABA;\
  font-family: "Proxima-Nova-Bold", Sans-Serif;\
  font-size: 18px;\
  font-style: normal;\
  font-weight: 700;\
  line-height: 20px;\
  margin-bottom: 5px;\
}\
\
.level_description {\
  color: #BABABA;\
  font-size: 16px;\
  font-style: normal;\
  font-weight: 400;\
  line-height: 20px;\
  margin-bottom: 5px;\
}\
\
.level_prize {\
  color: #BABABA;\
  font-size: 16px;\
  font-style: normal;\
  font-weight: 400;\
  line-height: 20px;\
}\
\
.level_prize span {\
  color: #BABABA;\
  font-family: "Proxima-Nova-Bold", Sans-Serif;\
  font-size: 16px;\
  font-style: normal;\
  font-weight: 700;\
  line-height: 20px;\
}\
\
@-webkit-keyframes bounce {\
  20% {\
    -webkit-transform: translateY(-15px);\
            transform: translateY(-15px);\
  }\
\
  40% {\
    -webkit-transform: none;\
            transform: none;\
  }\
}\
\
@keyframes bounce {\
  20% {\
    -webkit-transform: translateY(-15px);\
            transform: translateY(-15px);\
  }\
\
  40% {\
    -webkit-transform: none;\
            transform: none;\
  }\
}\
\
.start_bouncing {\
  -webkit-animation: bounce 0.2s ease-in 1;\
          animation: bounce 0.2s ease-in 1;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #000;\
  content: " ";\
  height: 25px;\
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
.counter {\
  margin-left: 17px;\
  color: #000;\
  font-family: "Proxima-Nova-Bold", Sans-Serif;\
  font-size: 22px;\
  font-style: normal;\
  font-weight: 700;\
  line-height: 28px;\
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
  padding: 30px 40px 35px;\
}\
\
.clicker_img {\
  -webkit-animation: rotation 0.5s linear infinite;\
          animation: rotation 0.5s linear infinite;\
}\
\
.clicker_target {\
  cursor: pointer;\
  margin-bottom: 23px;\
}\
\
@-webkit-keyframes rotation {\
  0% {\
    -webkit-transform: rotate(1deg);\
            transform: rotate(1deg);\
  }\
\
  50% {\
    -webkit-transform: rotate(-1deg);\
            transform: rotate(-1deg);\
  }\
\
  100% {\
    -webkit-transform: rotate(1deg);\
            transform: rotate(1deg);\
  }\
}\
\
@keyframes rotation {\
  0% {\
    -webkit-transform: rotate(1deg);\
            transform: rotate(1deg);\
  }\
\
  50% {\
    -webkit-transform: rotate(-1deg);\
            transform: rotate(-1deg);\
  }\
\
  100% {\
    -webkit-transform: rotate(1deg);\
            transform: rotate(1deg);\
  }\
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
  margin-bottom: 35px;\
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
  max-width: 460px;\
  -ms-flex-direction: row;\
      flex-direction: row;\
}\
\
.cq_popup-input {\
  width: 100%;\
  max-width: 250px;\
  height: 50px;\
  color: #000;\
  background: #fff;\
  outline: none;\
  text-align: center;\
  font-size: 14px;\
  border: 1px solid #E2E2E2;\
  border-radius: 2px 0 0 2px;\
  text-transform: uppercase;\
}\
\
.cq_popup-input::-webkit-input-placeholder {\
  color: #8C8C8C;\
}\
\
.cq_popup-input:-ms-input-placeholder {\
  color: #8C8C8C;\
}\
\
.cq_popup-input::-ms-input-placeholder {\
  color: #8C8C8C;\
}\
\
.cq_popup-input::placeholder {\
  color: #8C8C8C;\
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
  font-size: 18px;\
  line-height: 20px;\
  color: #000;\
  text-align: center;\
}\
\
.cq-popup__text-h1 {\
  margin-bottom: 10px;\
  font-size: 24px;\
  line-height: normal;\
  color: #000;\
  text-align: center;\
  font-weight: 400;\
  font-family: "Benzin-Bold", Sans-Serif;\
}\
\
.cq-popup__text-h1 span {\
  font-size: 24px;\
  font-family: "Benzin-Bold", Sans-Serif;\
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
  background: #FC836B;\
  color: #ffffff;\
  font-weight: 700;\
  cursor: pointer;\
  font-size: 16px;\
  border-radius: 0 2px 2px 0;\
  border: 1px solid #E2E2E2;\
  text-align: center;\
  width: 100%;\
  max-width: 210px;\
  line-height: 48px;\
  text-decoration: none;\
  border-left: none;\
  text-transform: uppercase;\
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
.first {\
  width: 100%;\
}\
\
.mob {\
  display: none;\
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
  .clicker_progress {\
    -ms-flex-pack: justify;\
        justify-content: space-between;\
  }\
\
  .mob {\
    display: block;\
  }\
\
  .clicker_target {\
    display: -ms-flexbox;\
    display: flex;\
    -ms-flex-align: center;\
        align-items: center;\
    -ms-flex-pack: center;\
        justify-content: center;\
  }\
\
  #email img {\
    max-width: 240px;\
    position: initial;\
  }\
\
  #email {\
    padding: 0 15px 30px;\
    max-width: 300px;\
    background: url("https://files.carrotquest.app/message-images/48967/48967-1703838033698-wr31x6h6.png");\
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
    padding: 20px 25px 25px;\
  }\
\
  .cq-popup__close {\
    right: 10px;\
    top: 10px;\
  }\
\
  .cq-popup__text-h1 {\
    color: #000;\
    text-align: center;\
    font-size: 20px;\
    font-style: normal;\
    font-weight: 400;\
    line-height: normal;\
    margin-bottom: 10px;\
  }\
\
  .cq-popup__form-title {\
    margin-bottom: 19px;\
  }\
\
  .cq_popup-input {\
    max-width: 270px;\
    margin-bottom: 5px;\
  }\
\
  .cq-popup__button {\
    max-width: 270px;\
  }\
\
  .cq-popup__text {\
    font-size: 16px;\
    line-height: normal;\
  }\
\
  .cq-popup__body {\
    max-width: 300px;\
    background: url("https://files.carrotquest.app/message-images/48967/48967-1703839168713-j761apmn.png");\
    background-size: cover;\
  }\
\
  .cq-popup__form-inputs {\
    max-width: 300px;\
    -ms-flex-direction: column;\
        flex-direction: column;\
  }\
\
  .clicker_img {\
    max-width: 240px;\
  }\
\
  .wrapper {\
    -ms-flex-direction: column;\
        flex-direction: column;\
  }\
\
  .clicker_wrapper {\
    margin-bottom: 20px;\
  }\
\
  .levels_wrapper {\
    -ms-flex-direction: row;\
        flex-direction: row;\
  }\
\
  .level.active .level_name {\
    font-size: 12px;\
    line-height: 20px;\
    margin-bottom: 2px;\
  }\
\
  .level.active .level_name {\
    font-size: 12px;\
    line-height: 20px;\
    margin-bottom: 2px;\
  }\
\
  .level.active .level_description {\
    font-size: 12px;\
    text-align: center;\
    line-height: normal;\
    margin-bottom: 4px;\
  }\
\
  .level.active .level_prize {\
    font-size: 12px;\
    text-align: center;\
  }\
\
  .level.active .level_prize span {\
    font-size: 12px;\
  }\
\
  .level {\
    max-width: 77px;\
    padding: 7px 5px;\
    min-height: 115px;\
    margin-bottom: 0;\
    margin-right: 10px;\
  }\
\
  .level:last-of-type {\
    margin-right: 0;\
  }\
\
  .level_name {\
    font-size: 12px;\
    line-height: 20px;\
    margin-bottom: 2px;\
  }\
\
  .level_description {\
    font-size: 12px;\
    text-align: center;\
    line-height: normal;\
    margin-bottom: 4px;\
  }\
\
  .level_prize {\
    font-size: 12px;\
    text-align: center;\
  }\
\
  .level_prize span {\
    font-size: 12px;\
  }\
\
  .counter {\
    color: #000;\
    font-size: 20px;\
    font-style: normal;\
    font-weight: 700;\
    line-height: normal;\
  }\
\
  .progress_bar {\
    max-width: 175px;\
  }\
\
  .counter {\
    margin-left: 10px;\
  }\
\
  #thank .cq-popup__text {\
    margin-bottom: 15px;\
    max-width: 240px;\
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
<div class="cq-popup__bg"></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <a class="cq-popup__close"></a>\
        <form id="form" class="cq-popup__form d_flex flex_col first-form">\
            <div class="cq-popup__form-content d_flex">\
                <div class="cq-popup__form-title d_flex flex_col">\
                    <p class="cq-popup__text-h1">Раскопай маскота</p>\
                    <p class="cq-popup__text">Кликай, чтобы получить желанный подарок. Поехали!</p>\
                </div>\
            </div>\
            <div class="wrapper">\
                <div class="clicker_wrapper">\
                    <div class="clicker_target">\
                        <img src="https://files.carrotquest.app/message-images/48967/48967-1703829109797-4yn8k1k6.png" alt="" class="clicker_img">\
                    </div>\
                    <div class="clicker_progress">\
                        <div class="progress_bar">\
                            <div class="progress_bar_active">\
\
                            </div>\
                        </div>\
                        <div class="counter">0 🐱</div>\
                    </div>\
                </div>\
                <div class="levels_wrapper">\
                    <div class="level" id="level-one">\
                        <p class="level_name">1 уровень</p>\
                        <p class="level_description">Кликни 10 раз</p>\
                        <p class="level_prize">Подарок: <span>SINLE STICKER</span></p>\
                    </div>\
                    <div class="level" id="level-two">\
                        <p class="level_name">2 уровень</p>\
                        <p class="level_description">Кликни 25 раз</p>\
                        <p class="level_prize">Подарок: <span>MINI <br class="mob">PACK</span></p>\
                    </div>\
                    <div class="level" id="level-three">\
                        <p class="level_name">3 уровень</p>\
                        <p class="level_description">Кликни 50 раз</p>\
                        <p class="level_prize">Подарок: <span>2хMINI PACK</span></p>\
                    </div>\
                </div>\
            </div>\
        </form>\
    </div>\
    <form id="email" class="hidden">\
        <a class="cq-popup__close"></a>\
        <img src="https://files.carrotquest.app/message-images/48967/48967-1703835761867-77irlmlz.png" alt="">\
        <div class="first">\
            <div class="cq-popup__form-title d_flex flex_col">\
                <p class="cq-popup__text-h1">Ура, ты выбрал подарок <br class="mob"> <span></span></p>\
                <p class="cq-popup__text">Оставь email и мы пришлем промо на почту</p>\
            </div>\
            <div class="cq-popup__form-inputs d_flex flex_col">\
                <input class="cq_popup-input email" type="email" name="email" placeholder="Ввести email" required>\
                <button type="submit" class="cq-popup__button">\
                    Получить подарок\
                </button>\
            </div>\
        </div>\
        <section class="second-form hidden" id="thank">\
                <p class="cq-popup__text-h1 thank">Спасибо!</p>\
                <p class="cq-popup__text">Проверь почту через пару минут 💌</p>\
        </section>\
    </form>\
</div>\
<script>"use strict";\
\
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\
var cqpopup_name = "19.1 Попап - кликер",\
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
var clicks = 0;\
var prize = "";\
document.addEventListener(\'click\', function (e) {\
  if (e.target.closest(\'.clicker_target:not(.start_bouncing)\')) {\
    setProgressBar(50);\
    document.querySelector(\'.clicker_target\').classList.add(\'start_bouncing\');\
    setTimeout(function () {\
      document.querySelector(\'.clicker_target\').classList.remove(\'start_bouncing\');\
    }, 200);\
    eventsOnClick();\
  }\
  if (e.target.closest(\'.level.active\')) {\
    prize = e.target.closest(\'.level.active\').querySelector(\'.level_prize span\').textContent.trim();\
    document.querySelector(\'#email .cq-popup__text-h1 span\').textContent = prize;\
    carrotquest.track(cqpopup_name + \' - Выбрал приз: \' + prize);\
    carrotquest.identify([{\
      op: "update_or_create",\
      key: cqpopup_name + \' - Приз\',\
      value: prize\
    }]);\
    hidden_visible(\'.cq-popup__body\', "#email");\
  }\
});\
function eventsOnClick() {\
  switch (clicks) {\
    case 5:\
      document.querySelector(\'.clicker_img\').src = "https://files.carrotquest.app/message-images/48967/48967-1703835702694-5tizh8bb.png";\
      carrotquest.track(cqpopup_name + \' - Кликнул 5 раз\');\
      break;\
    case 10:\
      document.querySelector(\'.clicker_img\').src = "https://files.carrotquest.app/message-images/48967/48967-1703835715604-a05t4hqf.png";\
      document.querySelector(\'#level-one\').classList.add(\'active\');\
      carrotquest.track(cqpopup_name + \' - Кликнул 10 раз\');\
      break;\
    case 17:\
      document.querySelector(\'.clicker_img\').src = "https://files.carrotquest.app/message-images/48967/48967-1703835725704-9xyskep7.png";\
      carrotquest.track(cqpopup_name + \' - Кликнул 17 раз\');\
      break;\
    case 25:\
      document.querySelector(\'.clicker_img\').src = "https://files.carrotquest.app/message-images/48967/48967-1703835736279-ncxxm5mh.png";\
      document.querySelector(\'#level-two\').classList.add(\'active\');\
      carrotquest.track(cqpopup_name + \' - Кликнул 25 раз\');\
      break;\
    case 40:\
      document.querySelector(\'.clicker_img\').src = "https://files.carrotquest.app/message-images/48967/48967-1703835749415-kf9jfwec.png";\
      carrotquest.track(cqpopup_name + \' - Кликнул 40 раз\');\
    case 50:\
      document.querySelector(\'.clicker_img\').src = "https://files.carrotquest.app/message-images/48967/48967-1703835761867-77irlmlz.png";\
      document.querySelector(\'#level-three\').classList.add(\'active\');\
      carrotquest.track(cqpopup_name + \' - Кликнул 50 раз\');\
  }\
}\
var isClicked = false;\
var progressBarWidth, progressActiveWidth, diff, calcWidth, activeProgressCalc;\
function setProgressBar(clicksCount) {\
  if (clicks <= clicksCount - 1) {\
    progressActiveWidth = Number(window.getComputedStyle(document.querySelector(\'.progress_bar_active\')).width.replace(\'px\', \'\'));\
    if (!isClicked) {\
      progressBarWidth = Number(window.getComputedStyle(document.querySelector(\'.progress_bar\')).maxWidth.replace("px", ""));\
      diff = Number(progressBarWidth - progressActiveWidth);\
      calcWidth = diff / clicksCount;\
      isClicked = true;\
    }\
    activeProgressCalc = progressActiveWidth + calcWidth;\
    clicks++;\
    document.querySelector(\'.progress_bar_active\').style[\'width\'] = activeProgressCalc + "px";\
    document.querySelector(\'.counter\').textContent = clicks + " 🐱";\
    document.querySelector(\'.clicker_img\').style = "";\
  }\
}\
document.addEventListener("submit", function (e) {\
  var email = document.querySelector(\'input.email\').value;\
  e.preventDefault();\
  if (email) {\
    trackData("email");\
    hidden_visible(\'.first\', \'#thank\');\
    carrotquest.replied();\
    setTimeout(carrotquest.close, 5000);\
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