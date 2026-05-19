var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Inter", sans-serif;\
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
  display: none;\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background: rgba(51, 51, 51, 0.5);\
  -webkit-backdrop-filter: blur(5px);\
          backdrop-filter: blur(5px);\
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
  width: 100%;\
  height: 100%;\
}\
\
.cq-popup__body {\
  position: relative;\
  z-index: 2;\
  max-height: 500px;\
  width: 100%;\
  max-width: 335px;\
  margin: 15px;\
  background-color: #F7F4F0;\
}\
\
.cq-popup__close {\
  cursor: pointer;\
  height: 21px;\
  width: 21px;\
  position: absolute;\
  top: 15px;\
  right: 15px;\
  z-index: 99;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #333;\
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
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 100%;\
  width: 100%;\
  padding: 34px 25px 20px;\
}\
\
.cq-popup__form-content {\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.cq-popup__form-inputs {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  max-width: 340px;\
}\
\
.cq-popup-inputs-title {\
  font-size: 18px;\
  line-height: 21px;\
  max-width: 355px;\
  margin-bottom: 24px;\
}\
\
.cqp__input {\
  width: 100%;\
  height: 50px;\
  font-size: 16px;\
  line-height: 21px;\
  margin-bottom: 8px;\
  max-width: 340px;\
  outline: none;\
  text-align: center;\
  background: transparent;\
  border: 1px solid #BBBBBB;\
  border-radius: 30px;\
}\
\
#s2 .cq-popup__text,\
#s2 .cq-popup__text-h1 {\
  text-align: center;\
}\
\
.cq-popup__text {\
  font-size: 16px;\
  line-height: normal;\
  color: #333;\
  text-align: center;\
}\
\
.cq-popup__form-title {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  margin-bottom: 25px;\
  -ms-flex-align: center;\
      align-items: center;\
}\
\
.cq-popup__text-h1 {\
  margin-bottom: 5px;\
  font-size: 22px;\
  line-height: normal;\
  color: #333;\
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
  color: #333333;\
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
  background: #fff;\
  color: #202945;\
  font-weight: 500;\
  cursor: pointer;\
  font-size: 16px;\
  border-radius: 30px;\
  text-align: center;\
  width: 100%;\
  max-width: 355px;\
  line-height: 50px;\
  text-decoration: none;\
  border: none;\
}\
\
.cq-popup__viewed-products-wrapper {\
  position: relative;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: center;\
      align-items: center;\
  width: 100%;\
  margin-bottom: 5px;\
}\
\
.cq-popup__viewed-products {\
  -ms-flex-pack: center;\
      justify-content: center;\
  position: relative;\
  width: 100%;\
}\
\
.cq-popup__viewed-product {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  max-width: 300px;\
  width: 100%;\
  text-decoration: none;\
}\
\
.product-img {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  min-width: 110px;\
  min-height: 110px;\
  background: #FFFFFF;\
}\
\
.product-img img {\
  max-width: 110px;\
  max-height: 110px;\
}\
\
.product-wrapper {\
  margin-bottom: 25px;\
}\
\
.product-img {\
  background-repeat: no-repeat;\
  width: 110px;\
  height: 110px;\
  background-size: cover;\
}\
\
.product-discr {\
  margin-left: 17px;\
}\
\
.product-name {\
  margin-bottom: 5px;\
}\
\
.product-name a {\
  text-decoration: none;\
}\
\
.product-name p {\
  font-size: 16px;\
  line-height: normal;\
  color: #333;\
  font-weight: 400;\
  margin-bottom: 5px;\
}\
\
.product-price span {\
  font-size: 16px;\
  color: #A6A6A6;\
  text-decoration: line-through;\
  font-weight: 400;\
}\
\
.product-price {\
  display: -ms-flexbox;\
  display: flex;\
  margin-bottom: 10px;\
}\
\
.product-price p {\
  font-weight: 400;\
  font-size: 16px;\
  padding-right: 10px;\
  color: #C2001F;\
}\
\
.product-btn a {\
  line-height: normal;\
  text-decoration: underline;\
  font-size: 16px;\
  color: #C2001F;\
}\
\
.link_out {\
  width: 100%;\
  max-width: 285px;\
  line-height: 50px;\
  background: #B8251E;\
  text-align: center;\
  color: #fff;\
  font-size: 16px;\
  text-decoration: none;\
}\
\
.next,\
.prev {\
  position: absolute;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  top: 0;\
  bottom: 0;\
  margin: auto;\
  cursor: pointer;\
}\
\
.prev {\
  left: -5px;\
}\
\
.mob {\
  display: none;\
}\
\
.pc {\
  display: block;\
}\
\
.next {\
  right: -5px;\
}\
\
@media (max-width: 440px) {\
  .cq-popup__bg {\
    display: block;\
  }\
\
  .cq-popup__form-title {\
    margin-bottom: 20px;\
  }\
\
  .wrapper__body {\
    -ms-flex-align: center;\
        align-items: center;\
    -ms-flex-pack: center;\
        justify-content: center;\
  }\
\
  .product-discr {\
    margin-left: 12px;\
  }\
\
  .cq-popup__close {\
    right: 10px;\
    top: 10px;\
  }\
\
  .product-wrapper {\
    margin-bottom: 15px;\
    position: relative;\
  }\
\
  .cq-popup__viewed-products-wrapper {\
    margin-bottom: 10px;\
  }\
\
  .link_out {\
    margin-top: 5px;\
  }\
\
  .cq-popup__text-h1 {\
    margin-bottom: 10px;\
    font-size: 18px;\
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
  .cq-popup__text {\
    font-size: 16px;\
  }\
\
  .cq-popup__body {\
    max-width: 300px;\
    max-height: 500px;\
  }\
\
  .product-img {\
    max-width: 88px;\
    max-height: 96px;\
    min-width: 88px;\
  }\
\
  .product-img img {\
    max-width: 87px;\
    max-height: 95px;\
  }\
\
  .product-name {\
    margin-bottom: 1px;\
  }\
\
  .product-name p {\
    font-size: 14px;\
    margin-bottom: 5px;\
  }\
\
  .product-price p {\
    font-size: 14px;\
  }\
\
  .product-price span {\
    font-size: 14px;\
  }\
\
  .product-btn {\
    position: absolute;\
    bottom: 0;\
  }\
\
  .product-price {\
    margin-bottom: 25px;\
  }\
\
  .cq-popup__form-inputs {\
    max-width: 260px;\
  }\
\
  .cq-popup__form {\
    padding: 22px 19px 20px;\
  }\
\
  .cq-popup-inputs-title {\
    text-align: center;\
    font-size: 16px;\
    margin-bottom: 20px;\
  }\
\
  .cq-popup__button {\
    background: #202945;\
    color: #fff;\
  }\
\
  .cq-input-tel {\
    border: 1px solid #000000;\
  }\
\
  .next svg {\
    width: 12px;\
  }\
\
  .prev svg {\
    width: 12px;\
  }\
}</style>\
</head>\
\
<body>\
<p style="display: none;">\
{% set massViewed = [] %}\
{% set massViewedName = [] %}\
{% for e in get_last_events("$product_viewed") %}\
{% if e.props["$name"].lower().strip() not in massViewedName %}\
{% set x = massViewed.append(e) %}\
{% set x = massViewedName.append(e.props["$name"].lower().strip()) %}\
{% endif %}\
{% endfor %}\
</p>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <a class="cq-popup__close"></a>\
        <div id="s1" class="cq-popup__form-wrapper">\
            <form id="form" class="cq-popup__form d_flex flex_col">\
                <div class="cq-popup__form-content d_flex">\
                    <div class="cq-popup__form-title">\
                        <p class="cq-popup__text-h1">Самое время заказать</p>\
                        <p class="cq-popup__text">Вы уже смотрели эти товары. <br>\
                            Осталось добавить их в корзину.</p>\
                    </div>\
                </div>\
                <div class="cq-popup__viewed-products-wrapper">\
                    <div class="cq-popup__viewed-products d_flex flex_col">\
                        {% for b in massViewed[:2] %}\
                        {% set url = b.props["$url"] %}\
                        {% set img = b.props["$img"] %}\
                        {% set name = b.props["$name"] %}\
                        {% set amount = b.props["$amount"] %}\
                        {% set amountBefore = b.props["Цена до скидки"] %}\
                        <div class="product-wrapper d_flex flex_row">\
                            <div class="product-img">\
                                <a href="{{url}}" target="_blank">\
                                    <img src="{{img}}" alt="product_pic">\
                                </a>\
                            </div>\
                            <div class="product-discr">\
                                <div class="product-name">\
                                    <a href="{{url}}" target="_blank">\
                                        <p>{{name}}</p>\
                                    </a>\
                                </div>\
                                <div class="product-price">\
                                    <p>{{amount}} ₽</p>\
                                    <span>{{amountBefore}} ₽</span>\
                                </div>\
                                <div class="product-btn">\
                                    <a href="{{url}}" target="_blank">Подробнее</a>\
                                </div>\
                            </div>\
                        </div>\
                        {% endfor %}\
                    </div>\
                </div>\
                <div class="cq-popup__form-inputs d_flex flex_col">\
                    <a href="#" target="_blank" class="link_out">Перейти в каталог</a>\
                </div>\
            </form>\
        </div>\
    </div>\
</div>\
<script>"use strict";\
\
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\
var cqpopup_name = "Просмотренные товары",\
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
    replaceSalePrice();\
    carrotquest.animation();\
  }\
});\
function replaceSalePrice() {\
  document.querySelectorAll(".product-price span").forEach(function (item) {\
    if (item.textContent === \' ₽\') {\
      item.parentElement.querySelector(".product-price p").style.paddingLeft = "0px";\
      item.remove();\
    }\
  });\
}\
document.addEventListener("submit", function (e) {\
  e.preventDefault();\
  var email = document.querySelector(".email").value;\
  if (email) {\
    trackData("email");\
    carrotquest.close();\
  }\
});\
document.addEventListener(\'click\', function (e) {\
  if (e.target.closest(\'.link_out\')) {\
    carrotquest.track(cqpopup_name + \' - Перешел в каталог\');\
  }\
  if (e.target.closest(\'.product-wrapper\')) {\
    carrotquest.track(cqpopup_name + \' - Перешел на товар\');\
  }\
});\
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {\
  item.addEventListener("click", carrotquest.close);\
});\
function trackData(data) {\
  carrotquest.identify(_defineProperty({}, "$" + data, document.querySelector(".cqp__input[name=" + data + "]").value));\
  carrotquest.replied();\
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
iframe.style.left = "0px";
iframe.style.bottom = "0px";
iframe.style.zIndex = '9999999999';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.transition = '.5s';
iframe.style.maxWidth = '470px';
iframe.style.maxHeight = '600px';
if (window.innerWidth <= 440) {
  iframe.style.top = 0;
  iframe.style.right = 0;
  iframe.style.height = '100%';
  iframe.style.maxWidth = "100%";
  iframe.style.margin = "auto";
  iframe.style.maxHeight = '100%';
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