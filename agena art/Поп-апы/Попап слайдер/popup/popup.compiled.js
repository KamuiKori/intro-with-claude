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
  width: 100%;\
  max-width: 510px;\
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
  padding: 30px 79px;\
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
  font-size: 26px;\
  line-height: normal;\
  color: #fff;\
  text-align: center;\
  font-weight: 700;\
}\
\
.slider_wrapper {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  width: 100%;\
  position: relative;\
}\
\
.item_img {\
  margin-bottom: 10px;\
}\
\
.item_name {\
  font-size: 16px;\
  color: #fff;\
  margin-bottom: 10px;\
  text-align: left;\
}\
\
.item_name span {\
  font-weight: 600;\
}\
\
.item_price {\
  font-size: 16px;\
  color: #F05609;\
  font-weight: 600;\
  margin-bottom: 10px;\
  text-align: left;\
}\
\
.item_link {\
  width: 100%;\
  text-align: center;\
  line-height: 50px;\
  text-decoration: none;\
  background: #F05609;\
  color: #fff;\
  border-radius: 10px;\
  font-weight: 700;\
}\
\
.prev,\
.next {\
  position: absolute;\
  width: 29px;\
  height: 29px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  background: #F05609;\
  border-radius: 50%;\
  top: 0;\
  bottom: 0;\
  margin: auto 0;\
  cursor: pointer;\
}\
\
.prev {\
  left: -54px;\
}\
\
.next {\
  right: -54px;\
}\
\
.image_wrapper {\
  width: 100%;\
  position: relative;\
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
.mob {\
  display: none;\
}\
\
.hidden {\
  display: none !important;\
}\
\
@media (max-width: 700px) {\
  .mob {\
    display: block;\
  }\
\
  .pc {\
    display: none;\
  }\
\
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
    padding: 20px 42px;\
  }\
\
  .cq-popup__close {\
    right: 20px;\
    top: 15px;\
  }\
\
  .cq-popup__text-h1 {\
    font-size: 16px;\
    margin-bottom: 15px;\
  }\
\
  .item_img {\
    max-width: 215px;\
  }\
\
  .prev,\
  .next {\
    width: 20px;\
    height: 20px;\
  }\
\
  .prev svg,\
  .next svg {\
    max-width: 12px;\
  }\
\
  .item_name {\
    font-size: 14px;\
    margin-bottom: 10px;\
  }\
\
  .item_price {\
    font-size: 14px;\
    margin-bottom: 10px;\
  }\
\
  .item_link {\
    font-size: 14px;\
  }\
\
  .prev {\
    left: -30px;\
  }\
\
  .next {\
    right: -30px;\
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
            <p class="cq-popup__text-h1">Попробуйте наши новинки</p>\
            <div class="slider_wrapper">\
                <div class="image_wrapper">\
                    <div class="prev hidden">\
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M0.463152 7.4843C0.072628 7.87483 0.0726281 8.50799 0.463152 8.89852L6.82712 15.2625C7.21764 15.653 7.8508 15.653 8.24133 15.2625C8.63185 14.872 8.63185 14.2388 8.24133 13.8483L2.58447 8.19141L8.24133 2.53455C8.63185 2.14403 8.63185 1.51086 8.24133 1.12034C7.8508 0.729816 7.21764 0.729816 6.82711 1.12034L0.463152 7.4843ZM17.8298 7.19141L1.17026 7.19141L1.17026 9.19141L17.8298 9.19141L17.8298 7.19141Z"\
                                  fill="white"/>\
                        </svg>\
                    </div>\
                    <img src="" alt="" class="item_img">\
                    <div class="next">\
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M17.5369 8.5157C17.9274 8.12517 17.9274 7.49201 17.5369 7.10149L11.1729 0.737525C10.7824 0.347001 10.1493 0.347001 9.75873 0.737525C9.36821 1.12805 9.36821 1.76121 9.75873 2.15174L15.4156 7.80859L9.75873 13.4654C9.36821 13.856 9.36821 14.4891 9.75873 14.8797C10.1493 15.2702 10.7824 15.2702 11.1729 14.8797L17.5369 8.5157ZM0.170227 8.80859L16.8298 8.80859L16.8298 6.80859L0.170227 6.80859L0.170227 8.80859Z" fill="white"/>\
                        </svg>\
                    </div>\
                </div>\
                <p class="item_name"></p>\
                <p class="item_price"></p>\
                <a href="" class="item_link" target="_blank">Подробнее</a>\
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\
var cqpopup_name = "Попап слайдер",\
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
var curSlide = 0;\
function validateEmail(email) {\
  var regex = /^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\
  return regex.test(String(email).toLowerCase());\
}\
var items = [{\
  "img": "https://files.carrotquest.app/message-images/57355/57355-1717481329436-kd4cpb3n.png",\
  "name": "Сет десертов <span>Elegance</span>",\
  "price": "5 290₽",\
  "link": "#"\
}, {\
  "img": "https://files.carrotquest.app/message-images/57355/57355-1717481453695-4uiperdt.png",\
  "name": "Теплые закуски <br class=\'mob\'><span>с радужной форелью</span>",\
  "price": "8 650₽",\
  "link": "#"\
}, {\
  "img": "https://files.carrotquest.app/message-images/57355/57355-1717481468137-k6k1mxag.png",\
  "name": "Сет канапе <span>Meaty Exclusive</span>",\
  "price": "5 690₽",\
  "link": "#"\
}];\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
    initSlider(0);\
  }\
});\
function initSlider(num) {\
  var item = items[num];\
  document.querySelector(\'.item_img\').src = item.img;\
  document.querySelector(\'.item_name\').innerHTML = item.name;\
  document.querySelector(\'.item_price\').textContent = item.price;\
  document.querySelector(\'.item_link\').href = item.link;\
}\
document.addEventListener(\'click\', function (e) {\
  if (e.target.closest(\'.next\')) {\
    if (curSlide === 0) {\
      document.querySelector(\'.prev\').classList.remove(\'hidden\');\
    }\
    curSlide += 1;\
    if (curSlide === items.length - 1) {\
      document.querySelector(\'.next\').classList.add(\'hidden\');\
    }\
    initSlider(curSlide);\
  }\
  if (e.target.closest(\'.prev\')) {\
    curSlide -= 1;\
    initSlider(curSlide);\
    if (curSlide === 0) {\
      document.querySelector(\'.prev\').classList.add(\'hidden\');\
      document.querySelector(\'.next\').classList.remove(\'hidden\');\
    }\
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