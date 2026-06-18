var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Golos-Text", sans-serif;\
  font-weight: 400;\
  -webkit-user-select: none;\
      -ms-user-select: none;\
          user-select: none;\
}\
\
@font-face {\
  font-family: "Golos-Text";\
  font-weight: 400;\
  src: url("https://static.tildacdn.com/tild3339-3230-4463-a262-326663366230/Golos-Text_Regular.woff") format("woff");\
}\
\
@font-face {\
  font-family: "Golos-Text";\
  font-weight: 500;\
  src: url("https://static.tildacdn.com/tild6265-6331-4439-b365-333563346264/Golos-Text_Medium.woff") format("woff");\
}\
\
@font-face {\
  font-family: "Golos-Text";\
  font-weight: 600;\
  src: url("https://static.tildacdn.com/tild3732-3865-4337-a332-383364393565/Golos-Text_DemiBold.woff") format("woff");\
}\
\
@font-face {\
  font-family: "Golos-Text";\
  font-weight: 700;\
  src: url("https://static.tildacdn.com/tild6338-6261-4364-b831-633865346535/Golos-Text_Bold.woff") format("woff");\
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
  max-height: 395px;\
  width: 100%;\
  max-width: 550px;\
  margin: 15px;\
  background: #1A1A1A;\
  border-radius: 10px;\
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
  background-color: #ffffff;\
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
.slider_wrapper {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  width: 100%;\
  position: relative;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  max-width: 395px;\
  margin-bottom: 10px;\
}\
\
.item_name {\
  font-size: 16px;\
  color: #fff;\
  font-weight: 600;\
  margin-bottom: 7px;\
  text-align: center;\
}\
\
.item_price {\
  font-size: 16px;\
  color: #F05609;\
  margin-bottom: 7px;\
  text-align: center;\
  font-weight: 600;\
}\
\
.item_link {\
  line-height: 50px;\
  color: #fff;\
  background: #F05609;\
  font-weight: 700;\
  width: 100%;\
  max-width: 215px;\
  text-decoration: none;\
  text-align: center;\
  font-size: 16px;\
  border-radius: 10px;\
}\
\
.slider_item.active {\
  z-index: 100;\
}\
\
.slider_item.blured {\
  position: absolute;\
  top: 0;\
  bottom: 0;\
  margin: auto 0;\
  -ms-flex-item-align: start;\
      align-self: flex-start;\
  -webkit-filter: blur(1px);\
          filter: blur(1px);\
}\
\
.left {\
  left: 0;\
}\
\
.right {\
  right: 0;\
}\
\
.item_img.blured {\
  max-width: 145px;\
}\
\
.prev,\
.next {\
  position: absolute;\
  bottom: 0;\
  cursor: pointer;\
}\
\
.prev {\
  left: 34px;\
}\
\
.next {\
  right: 34px;\
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
  padding: 30px 55px;\
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
  margin-bottom: 20px;\
  font-size: 28px;\
  line-height: normal;\
  color: #fff;\
  text-align: center;\
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
  .item_name {\
    font-size: 14px;\
    color: #fff;\
    margin-bottom: 7px;\
  }\
\
  .item_price {\
    font-size: 14px;\
    color: #F05609;\
    margin-bottom: 7px;\
  }\
\
  .item_link {\
    font-size: 14px;\
    max-width: 151px;\
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
    right: 5px;\
    top: 5px;\
  }\
\
  .cq-popup__close:before,\
  .cq-popup__close:after {\
    height: 17px;\
  }\
\
  .slider_item.active img {\
    max-width: 150px;\
  }\
\
  .item_img.blured {\
    max-width: 105px;\
  }\
\
  .prev {\
    left: 15px;\
  }\
\
  .prev,\
  .next {\
    bottom: -10px;\
  }\
\
  .prev svg,\
  .next svg {\
    max-width: 20px;\
  }\
\
  .next {\
    right: 15px;\
  }\
\
  .cq-popup__text-h1 {\
    max-width: 286px;\
    font-size: 16px;\
    margin-bottom: 15px;\
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
    max-width: 300px;\
    max-height: 300px;\
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
<div class="cq-popup__bg"></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <a class="cq-popup__close"></a>\
        <form id="form" class="cq-popup__form d_flex flex_col first-form">\
            <p class="cq-popup__text-h1">Часто заказывают на праздник</p>\
            <div class="slider_wrapper">\
                <div class="prev">\
                    <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <path d="M0.29289 7.2929C-0.0976334 7.68342 -0.0976333 8.31659 0.292891 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928934C7.68054 0.53841 7.04738 0.53841 6.65685 0.928934L0.29289 7.2929ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z" fill="#F05609"/>\
                    </svg>\
                </div>\
                <div class="slider_item blured left">\
                    <img src=""\
                         alt="" class="item_img blured">\
                </div>\
                <div class="slider_item active">\
                    <img src=""\
                         alt="" class="item_img">\
                </div>\
                <div class="slider_item blured right">\
                    <img src=""\
                         alt="" class="item_img blured">\
                </div>\
                <div class="next">\
                    <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <path d="M30.7071 8.70711C31.0976 8.31659 31.0976 7.68342 30.7071 7.2929L24.3431 0.928934C23.9526 0.53841 23.3195 0.53841 22.9289 0.928934C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM-8.74228e-08 9L30 9L30 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#F05609"/>\
                    </svg>\
                </div>\
            </div>\
            <p class="item_name"></p>\
            <p class="item_price"></p>\
            <a href="" class="item_link" target="_blank">Подробнее</a>\
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\
var cqpopup_name = "Попап слайдер из 3 элементов",\
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
var items = [{\
  "id": "0",\
  "name": "Антипасти Premiere",\
  "link": "#",\
  "img": "https://files.carrotquest.app/message-images/57355/57355-1717404956518-e4vhx2hw.png",\
  "price": "7 570₽"\
}, {\
  "id": "1",\
  "name": "Сет канапе SeaFood",\
  "link": "#",\
  "img": "https://files.carrotquest.app/message-images/57355/57355-1717404987785-8s6ahe7h.png",\
  "price": "6 080₽"\
}, {\
  "id": "2",\
  "name": "Коктейль для 20-25 гостей",\
  "link": "#",\
  "img": "https://files.carrotquest.app/message-images/57355/57355-1717405023739-u465t6bs.png",\
  "price": "24 630₽"\
}];\
var activeItemNumber = 1;\
function initSlider() {\
  document.querySelector(\'.slider_item.active img\').src = items[1].img;\
  document.querySelector(\'.slider_item.left img\').src = items[0].img;\
  document.querySelector(\'.slider_item.right img\').src = items[2].img;\
  document.querySelector(\'.item_name\').textContent = items[1].name;\
  document.querySelector(\'.item_price\').textContent = items[1].price;\
  document.querySelector(\'.item_link\').href = items[1].link;\
  document.querySelector(\'.slider_item.active\').setAttribute(\'id\', \'1\');\
}\
function setSlides(activeItemId) {\
  var prevSlide = activeItemId - 1 >= 0 ? activeItemId - 1 : items.length - 1;\
  var nextSlide = activeItemId + 1 === items.length ? 0 : activeItemId + 1;\
  document.querySelector(\'.slider_item.active img\').src = items[activeItemId].img;\
  document.querySelector(\'.item_name\').textContent = items[activeItemId].name;\
  document.querySelector(\'.item_price\').textContent = items[activeItemId].price;\
  document.querySelector(\'.item_link\').href = items[activeItemId].link;\
  document.querySelector(\'.slider_item.active\').setAttribute(\'id\', activeItemId);\
  document.querySelector(\'.slider_item.left img\').src = items[prevSlide].img;\
  document.querySelector(\'.slider_item.right img\').src = items[nextSlide].img;\
}\
function switchItemsNext() {\
  if (activeItemNumber < items.length - 1) {\
    activeItemNumber += 1;\
  } else {\
    activeItemNumber = 0;\
  }\
  setSlides(activeItemNumber);\
}\
function switchItemsPrev() {\
  if (activeItemNumber > 0) {\
    activeItemNumber -= 1;\
  } else {\
    activeItemNumber = items.length - 1;\
  }\
  setSlides(activeItemNumber);\
}\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
    initSlider();\
  }\
});\
document.addEventListener(\'click\', function (e) {\
  if (e.target.closest(\'.next\')) {\
    switchItemsNext();\
  }\
  if (e.target.closest(\'.prev\')) {\
    switchItemsPrev();\
  }\
  if (e.target.closest(\'.item_link\')) {\
    carrotquest.clicked();\
  }\
});\
document.addEventListener("submit", function (e) {\
  var email = document.querySelector(\'input.email\').value;\
  e.preventDefault();\
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