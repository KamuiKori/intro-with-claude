var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">\
    <style>@font-face {\
  font-family: "Mont";\
  font-weight: 400;\
  src: url("https://daigo.ru/local/templates/main/frontend/build/fonts/Mont-Regular.woff2") format("woff2");\
}\
\
@font-face {\
  font-family: "Mont";\
  font-weight: 600;\
  src: url("https://daigo.ru/local/templates/main/frontend/build/fonts/Mont-SemiBold.woff2") format("woff2");\
}\
\
@font-face {\
  font-family: "Mont";\
  font-weight: 700;\
  src: url("https://daigo.ru/local/templates/main/frontend/build/fonts/Mont-Bold.woff2") format("woff2");\
}\
\
* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Mont", sans-serif;\
  font-weight: 400;\
}\
\
html,\
body {\
  height: 100%;\
}\
\
.wheel_wrapper {\
  width: 100%;\
  padding-left: 30px;\
}\
\
.roulette-container {\
  overflow: hidden;\
  position: relative;\
  width: 100%;\
  height: 100%;\
  background: rgba(0, 118, 255, 0.8);\
}\
\
.prizes {\
  position: absolute;\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: center;\
      align-items: center;\
  -webkit-transform: translateY(0px);\
          transform: translateY(0px);\
  transition: -webkit-transform 1500s ease-out;\
  transition: transform 1500s ease-out;\
  transition: transform 1500s ease-out, -webkit-transform 1500s ease-out;\
}\
\
.prize {\
  width: 100%;\
  max-width: 350px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  padding: 0px 9px;\
  border: 5px solid #FBF5F5;\
  border-radius: 15px;\
  height: 320px;\
  background: #FFFFFF;\
  box-sizing: border-box;\
  position: relative;\
}\
\
.blur_overlay {\
  z-index: 100000;\
  -webkit-backdrop-filter: blur(10px);\
          backdrop-filter: blur(10px);\
  position: absolute;\
  width: 100%;\
  height: 100%;\
  border-radius: 15px;\
  opacity: 0;\
  transition: 0.5s ease;\
}\
\
.blur_overlay.active {\
  opacity: 1;\
}\
\
.prize.transp {\
  height: 25px;\
  background: transparent;\
  box-shadow: none;\
  border: none;\
}\
\
.prize_title {\
  font-size: 32px;\
  font-weight: 700;\
  margin-bottom: 4px;\
  text-align: center;\
  color: #0076FF;\
  line-height: 135%;\
}\
\
.overlay_img {\
  position: absolute;\
  left: 0;\
  top: 0;\
  border-radius: 12px;\
  z-index: 1000;\
}\
\
.prize_subtitle {\
  font-size: 32px;\
  font-weight: 400;\
  color: #000000;\
  line-height: normal;\
  text-align: center;\
}\
\
.prize_img {\
  max-width: 180px;\
  margin-bottom: 10px;\
}\
\
.prize.lavender {\
  background: rgb(236, 240, 255);\
}\
\
.prize.violet {\
  background: rgb(249, 237, 255);\
}\
\
.prize.green {\
  background: rgb(229, 245, 231);\
}\
\
.prize.blue {\
  background: rgb(233, 241, 253);\
}\
\
.arrow {\
  display: none;\
  position: absolute;\
  top: 50%;\
  right: -20px;\
  -webkit-transform: translate(-50%, -50%);\
          transform: translate(-50%, -50%);\
  font-size: 30px;\
  pointer-events: none;\
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
  width: 100%;\
  max-width: 985px;\
  height: 560px;\
  margin: 15px;\
  background: url("https://files.carrotquest.app/message-images/65310/65310-1744966115652-u5q4e8ze.png");\
  background-repeat: no-repeat;\
  background-size: cover;\
  border-radius: 15px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  transition: 0.3s ease;\
}\
\
.cq-popup__close {\
  cursor: pointer;\
  height: 24px;\
  width: 24px;\
  position: absolute;\
  top: 15px;\
  right: 15px;\
  z-index: 100000;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #000000;\
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
.cq-popup__form {\
  border-radius: 3px;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  height: 100%;\
  width: 100%;\
}\
\
.pc:not(.overlay_img) {\
  border-radius: 8px 0 0 8px;\
  max-width: 448px;\
}\
\
.cq-popup__form-content {\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  width: 100%;\
  padding: 40px;\
  box-sizing: content-box;\
}\
\
.cq-popup__form-title {\
  margin-bottom: 25px;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
#thank .cq-popup__form-title {\
  margin-bottom: 0;\
  padding: 40px;\
}\
\
.cq-popup__form-inputs {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
}\
\
.cq_popup-input {\
  width: 100%;\
  height: 30px;\
  color: #000;\
  border: none;\
  border-bottom: 1px solid #000000;\
  background: transparent;\
  outline: none;\
  margin-bottom: 22px;\
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
}\
\
.wrap {\
  width: 100%;\
  position: relative;\
}\
\
.wrap label {\
  position: absolute;\
  top: -10px;\
  left: 12px;\
  color: #3F4651;\
  font-size: 14px;\
  line-height: 135%;\
  background: #fff;\
}\
\
.cq-popup__text-h1 {\
  margin-bottom: 25px;\
  font-size: 32px;\
  line-height: normal;\
  color: #000;\
  text-align: left;\
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
  background: #1B1B1B;\
  color: #ffffff;\
  font-weight: 600;\
  cursor: pointer;\
  font-size: 16px;\
  border-radius: 30px;\
  text-align: center;\
  width: 100%;\
  line-height: 50px;\
  text-decoration: none;\
  margin-bottom: 25px;\
  text-transform: uppercase;\
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
  padding-left: 27px;\
  font-weight: 500;\
  font-size: 12px;\
  line-height: 15px;\
  color: #000;\
  cursor: pointer;\
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
  border: 1px solid #000000;\
  transition: all 0.275s;\
  border-radius: 2px;\
}\
\
[type=checkbox]:not(:checked) + label:after,\
[type=checkbox]:checked + label:after {\
  padding: 1px;\
  content: " ";\
  position: absolute;\
  top: 4px;\
  left: 4px;\
  font-size: 13px;\
  color: #000000;\
  line-height: 0;\
  transition: all 0.2s;\
  background: #000000;\
  width: 5px;\
  height: 5px;\
  border-radius: 1px;\
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
.cq-popup__button:disabled {\
  cursor: not-allowed;\
}\
\
.eula {\
  color: #8B9097;\
  font-size: 14px;\
  line-height: 135%;\
  text-align: left;\
}\
\
.eula a {\
  text-decoration: underline;\
}\
\
.eula a {\
  color: #17BF50;\
  text-decoration: none;\
}\
\
.tablet {\
  display: none;\
}\
\
.mob {\
  display: none;\
}\
\
.inputs {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.tab {\
  display: none;\
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
@media (max-width: 780px) {\
  .cq-popup__bg {\
    display: block;\
  }\
\
  .roulette-container {\
    background: rgba(0, 118, 255, 0.8);\
  }\
\
  .prize.transp {\
    height: 100%;\
    padding: 12.5px;\
    width: 25px;\
    min-width: 25px;\
  }\
\
  .tab {\
    display: none;\
  }\
\
  .mob {\
    display: block;\
  }\
\
  .arrow.pc {\
    display: none;\
  }\
\
  .inputs {\
    -ms-flex-direction: column;\
        flex-direction: column;\
    -ms-flex-pack: justify;\
        justify-content: space-between;\
  }\
\
  .cq_popup-input {\
    font-size: 14px;\
    margin-bottom: 13px;\
  }\
\
  .overlay_img.mob {\
    display: block;\
    top: 30px;\
    left: 19px;\
    border-radius: 0;\
  }\
\
  .cq-popup__form-content {\
    padding: 15px 20px;\
    height: auto;\
  }\
\
  .tablet {\
    display: none;\
  }\
\
  .wrapper__body {\
    -ms-flex-align: center;\
        align-items: center;\
    -ms-flex-pack: center;\
        justify-content: center;\
  }\
\
  .cq-popup__close {\
    right: 5px;\
    top: 5px;\
  }\
\
  .cq-popup__text-h1 {\
    font-size: 20px;\
    margin-bottom: 15px;\
  }\
\
  .cq-popup__form-title {\
    margin-bottom: 15px;\
  }\
\
  .cq-popup__button {\
    font-size: 14px;\
    line-height: 50px;\
    margin-bottom: 15px;\
  }\
\
  .cq-popup__text {\
    font-size: 16px;\
    text-align: center;\
  }\
\
  .cq-popup__body {\
    max-width: 345px;\
    height: 453px;\
    -ms-flex-direction: column;\
        flex-direction: column;\
    background: url("https://files.carrotquest.app/message-images/65310/65310-1744971328546-pzmmqyo7.png");\
    background-size: cover;\
    background-repeat: no-repeat;\
  }\
\
  .cq-popup__form {\
    height: auto;\
    -ms-flex-pack: center;\
        justify-content: center;\
  }\
\
  .wheel_wrapper {\
    height: 200px;\
    padding: 0;\
    margin-top: 20px;\
  }\
\
  .prizes {\
    -ms-flex-direction: row;\
        flex-direction: row;\
    height: 100%;\
    width: 100%;\
    transition: -webkit-transform 1500s ease-out;\
    transition: transform 1500s ease-out;\
    transition: transform 1500s ease-out, -webkit-transform 1500s ease-out;\
  }\
\
  #thank .cq-popup__form-title {\
    height: auto;\
    -ms-flex-align: center;\
        align-items: center;\
    padding: 74px 20px 75px;\
  }\
\
  .arrow {\
    max-width: 36px;\
    display: none;\
    right: -10px;\
  }\
\
  .prize {\
    max-width: 170px;\
    height: 170px;\
    min-width: 170px;\
    padding: 0 8px;\
  }\
\
  .prize_text {\
    width: 100%;\
  }\
\
  .prize_title {\
    font-size: 16px;\
    margin-bottom: 2px;\
  }\
\
  .prize_subtitle {\
    font-size: 16px;\
  }\
\
  .prize_img {\
    max-width: 100px;\
    margin: 0;\
    margin-bottom: 5px;\
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
        <div class="wheel_wrapper">\
            <div class="roulette-container" id="roulette-container">\
                <div class="prizes" id="prizes">\
                </div>\
                <div class="arrow pc"><img src="https://files.carrotquest.app/message-images/57576/57576-1727440055254-l86herj2.png" alt=""></div>\
                <div class="arrow mob"><img src="https://files.carrotquest.app/message-images/57576/57576-1727866909049-carsn7y9.png" alt=""></div>\
            </div>\
        </div>\
        <form id="form" class="cq-popup__form d_flex flex_col first-form">\
            <div class="cq-popup__form-content d_flex">\
                <div class="cq-popup__form-title d_flex flex_col">\
                    <p class="cq-popup__text-h1">Испытайте судьбу!</p>\
                    <p class="cq-popup__text">Укажите email и получите ценный приз:</p>\
                </div>\
                <div class="cq-popup__form-inputs d_flex flex_col">\
                    <div class="inputs">\
                            <input class="cq_popup-input email" type="email" name="email" placeholder="EMAIL" required id="email">\
                    </div>\
                    <button type="submit" class="cq-popup__button">\
                        Испытать удачу\
                    </button>\
                </div>\
                <div class="eula">\
                    <input type="checkbox" id="checkbox" checked>\
                    <label for="checkbox">Принимаю политику конфиденциальности</label>\
                </div>\
            </div>\
        </form>\
        <section class="second-form cq-popup__form d_flex hidden" id="thank">\
            <div class="cq-popup__form-title d_flex flex_col">\
                <p class="cq-popup__text-h1 thank">Спасибо!</p>\
                <p class="cq-popup__text">Промокод для подарка уже летит <br class="mob">на почту</p>\
            </div>\
        </section>\
    </div>\
</div>\
<script>"use strict";\
\
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\
var cqpopup_name = "Вертикальная рулетка",\
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
      carrotquest.track(cqpopup_name + \' - Закрыл попап\');\
    },\
    replied: function replied() {\
      this.trackMessageInteraction("{{ sending_id }}", "replied");\
      this.track(\'Ответил в попап\');\
      this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);\
      carrotquest.identify([{\
        op: \'update_or_create\',\
        key: \'Источник лида\',\
        value: cqpopup_name\
      }]);\
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
    initAnimation();\
    setTimeout(carrotquest.close, 1000000);\
  }\
});\
var prizes = [{\
  name: \'Ручка Parker\',\
  subtitle: \'при любом заказе\',\
  id: "1",\
  percentage: 7,\
  prizeProperty: \'1\',\
  prizeImg: \'https://files.carrotquest.app/message-images/65310/65310-1744967049725-kbtvsdjd.png\'\
}, {\
  name: \'10 саше\',\
  subtitle: \'при любом заказе\',\
  id: "2",\
  percentage: 15,\
  prizeProperty: \'2\',\
  prizeImg: \'https://files.carrotquest.app/message-images/65310/65310-1744967125509-90qyx8zc.png\'\
}, {\
  name: \'Скидка 2 000 ₽\',\
  subtitle: \'на заказ от 20000 ₽\',\
  id: "3",\
  percentage: 8,\
  prizeProperty: \'3\',\
  prizeImg: \'https://files.carrotquest.app/message-images/65310/65310-1744967139935-o4wuimpi.png\'\
}, {\
  name: \'Скидка 500 ₽\',\
  subtitle: \'на любой заказ\',\
  id: "4",\
  percentage: 20,\
  prizeProperty: \'4\',\
  prizeImg: \'https://files.carrotquest.app/message-images/65310/65310-1744967139935-o4wuimpi.png\'\
}, {\
  name: \'Скидка 1 000 ₽\',\
  subtitle: \'на заказ от 10000 ₽\',\
  id: "5",\
  percentage: 15,\
  prizeProperty: \'5\',\
  prizeImg: \'https://files.carrotquest.app/message-images/65310/65310-1744967139935-o4wuimpi.png\'\
}, {\
  name: \'Скидка 1 500 ₽\',\
  subtitle: \'на заказ от 15000 ₽\',\
  id: "6",\
  percentage: 10,\
  prizeProperty: \'6\',\
  prizeImg: \'https://files.carrotquest.app/message-images/65310/65310-1744967139935-o4wuimpi.png\'\
}, {\
  name: \'Зубная щетка\',\
  subtitle: \'при любом заказе\',\
  id: "7",\
  percentage: 15,\
  prizeProperty: \'7\',\
  prizeImg: \'https://files.carrotquest.app/message-images/65310/65310-1744967166891-zhkeb9xi.png\'\
}, {\
  name: \'Патчи\',\
  subtitle: \'\',\
  id: "8",\
  percentage: 10,\
  prizeProperty: \'8\',\
  prizeImg: \'https://files.carrotquest.app/message-images/65310/65310-1744967182282-064s4hsm.png\'\
}];\
var prizeHeight = 320 + 25;\
var prizeWidth = 170 + 25;\
var countOfSpins = 25;\
var rouletteContainer = document.getElementById(\'roulette-container\');\
var prizesContainer = document.getElementById(\'prizes\');\
var containerHeight = rouletteContainer.clientHeight;\
var containerWidth = rouletteContainer.clientWidth;\
var arrowOffset = containerHeight / 2 - prizeHeight / 2;\
var arrowOffsetMob = containerWidth / 2 - prizeWidth / 2;\
var totalCountItems = countOfSpins * prizes.length;\
var expandedPrizes = createRepeatedArrayWithUniqueId(prizes, totalCountItems);\
expandedPrizes = insertElementAfterEach(expandedPrizes, {\
  name: \'\',\
  subtitle: \'\',\
  id: "9",\
  percentage: 0,\
  prizeProperty: \'9\'\
});\
function insertElementAfterEach(arr, elementToInsert) {\
  var result = [];\
  arr.forEach(function (element) {\
    result.push(element, elementToInsert);\
  });\
  return result;\
}\
function createRepeatedArrayWithUniqueId(sourceArray, repeatCount) {\
  var result = [];\
  var sourceLength = sourceArray.length;\
  var index = 0;\
  for (var i = 0; i < repeatCount; i++) {\
    var prizeWithUniqueId = Object.assign({}, sourceArray[index % sourceLength], {\
      data_id: i\
    });\
    result.push(prizeWithUniqueId);\
    index++;\
  }\
  return result;\
}\
function setupPrizes() {\
  expandedPrizes.forEach(function (prize) {\
    var prizeElement = document.createElement(\'div\');\
    prizeElement.className = \'prize\';\
    if (prize.id === \'9\') {\
      prizeElement.classList.add(\'transp\');\
    } else {\
      prizeElement.setAttribute(\'data_prize_type\', prize.id);\
      prizeElement.setAttribute(\'data_id\', prize.data_id);\
      prizeElement.innerHTML = "<div class=\'blur_overlay\'></div><img class=\\"prize_img\\" src=\\"".concat(prize.prizeImg, "\\"><div class=\\"prize_text\\"><p class=\\"prize_title\\">").concat(prize.name, "</p><p class=\\"prize_subtitle\\">").concat(prize.subtitle, "</p></div>");\
    }\
    prizesContainer.appendChild(prizeElement);\
  });\
}\
function getRandomPrize() {\
  var totalPercentage = 100;\
  var random = Math.random() * totalPercentage;\
  random = Math.floor(random);\
  for (var _i = 0, _prizes = prizes; _i < _prizes.length; _i++) {\
    var prize = _prizes[_i];\
    if (random < prize.percentage) {\
      return prize;\
    }\
    random -= prize.percentage;\
  }\
}\
function initAnimation() {\
  if (top.window.innerWidth < 871) {\
    prizesContainer.style.transform = "translateX(-39000px)";\
  } else {\
    prizesContainer.style.transform = "translateY(-69000px)";\
  }\
}\
var finalPrize;\
function spinRoulette() {\
  if (top.window.innerWidth < 871) {\
    var totalWidth = prizesContainer.scrollWidth / countOfSpins;\
    var randomPrize = getRandomPrize();\
    var targetIndex = prizes.findIndex(function (prize) {\
      return prize.name === randomPrize.name;\
    });\
    var fullSpins = 13;\
    var targetPosition = targetIndex * prizeWidth;\
    var finalPosition = -(totalWidth * fullSpins + targetPosition - arrowOffsetMob - 20);\
    prizesContainer.style.transition = \'transform 14s ease-out\';\
    prizesContainer.style.transform = "translateX(".concat(finalPosition, "px)");\
    carrotquest.track(cqpopup_name + \' - Выиграл: \' + randomPrize.name);\
    finalPrize = randomPrize;\
    carrotquest.identify([{\
      op: \'update_or_create\',\
      key: cqpopup_name + \' - Приз\',\
      value: randomPrize.prizeProperty\
    }]);\
  } else {\
    var totalHeight = prizesContainer.scrollHeight / countOfSpins;\
    var _randomPrize = getRandomPrize();\
    var _targetIndex = prizes.findIndex(function (prize) {\
      return prize.name === _randomPrize.name;\
    });\
    var _fullSpins = 13;\
    var _targetPosition = _targetIndex * prizeHeight;\
    var _finalPosition = -(totalHeight * _fullSpins + _targetPosition + -arrowOffset);\
    prizesContainer.style.transition = \'transform 14s ease-out\';\
    prizesContainer.style.transform = "translateY(".concat(_finalPosition, "px)");\
    carrotquest.track(cqpopup_name + \' - Выиграл: \' + _randomPrize.name);\
    finalPrize = _randomPrize;\
    carrotquest.identify([{\
      op: \'update_or_create\',\
      key: cqpopup_name + \' - Приз\',\
      value: _randomPrize.prizeProperty\
    }]);\
  }\
}\
setupPrizes();\
document.addEventListener("submit", function (e) {\
  var email = document.querySelector(\'.email\').value;\
  e.preventDefault();\
  if (email && document.querySelector(\'#checkbox\').checked) {\
    spinRoulette();\
    carrotquest.identify([{\
      op: "update_or_create",\
      key: "$email",\
      value: email\
    }]);\
    document.querySelector(\'.cq-popup__button\').disabled = true;\
    setTimeout(function () {\
      hidden_visible(\'.first-form\', \'.second-form\');\
      var finalPrizeId = finalPrize.id;\
      document.querySelectorAll(".prize:not([data_prize_type=\\"".concat(finalPrizeId, "\\"]) .blur_overlay")).forEach(function (item) {\
        item.classList.add(\'active\');\
      });\
    }, 14000);\
    carrotquest.replied();\
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