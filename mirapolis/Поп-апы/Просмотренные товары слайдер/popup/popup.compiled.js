var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"\
          rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Open sans", sans-serif;\
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
  width: 100%;\
  max-width: 320px;\
  margin: 15px;\
  background-color: #FFFFFF;\
  border-radius: 10px;\
  border: 1px solid #CCCCCC;\
  padding: 20px 20px;\
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
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 100%;\
  width: 100%;\
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
  font-size: 14px;\
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
  margin-bottom: 40px;\
  -ms-flex-align: center;\
      align-items: center;\
}\
\
.cq_btn {\
  width: 100%;\
  background: transparent;\
  height: 45px;\
  margin-bottom: 15px;\
  text-align: center;\
  font-size: 14px;\
  font-weight: 700;\
  color: #CC0A3B;\
  border-radius: 10px;\
  border: 1px solid #CC0A3B;\
  cursor: pointer;\
  transition: 0.5s ease;\
  line-height: 45px;\
  text-decoration: none;\
}\
\
.cq_btn:hover {\
  background: #CC0A3B;\
  color: #fff;\
}\
\
.cq_btn:last-child {\
  margin-bottom: 0;\
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
  padding-left: 23px;\
  font-weight: 500;\
  font-size: 9px;\
  line-height: 15px;\
  cursor: pointer;\
  color: #333333;\
}\
\
.eula {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
}\
\
.eula a {\
  color: #CD2243;\
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
  border: 1px solid #CC0A3B;\
  transition: all 0.275s;\
  border-radius: 3px;\
}\
\
[type=checkbox]:not(:checked) + label:after,\
[type=checkbox]:checked + label:after {\
  padding: 1px;\
  content: url(\'data:image/svg+xml,<svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5L3 5.5L7.5 1" stroke="%23CD2243"/></svg>\');\
  position: absolute;\
  top: 3px;\
  left: 2px;\
  font-size: 13px;\
  line-height: 0;\
  transition: all 0.2s;\
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
.line {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
  margin-bottom: 10px;\
}\
\
.cq_input {\
  width: 100%;\
  max-width: 257px;\
  border-radius: 10px;\
  background: #fff;\
  border: 1px solid #757575;\
  padding-left: 14px;\
  height: 45px;\
  outline: none;\
  font-size: 16px;\
}\
\
.form_btn {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  background: #CC0A3B;\
  border-radius: 10px;\
  cursor: pointer;\
  width: 45px;\
  height: 45px;\
  border: none;\
}\
\
.link {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 45px;\
  line-height: 45px;\
  font-size: 14px;\
  border-radius: 10px;\
  background: #CC0A3B;\
  color: #fff;\
  text-decoration: none;\
  font-weight: 700;\
}\
\
.tg_link svg {\
  margin-left: 10px;\
}\
\
.cq-popup__text-h1 {\
  margin-bottom: 15px;\
  font-size: 16px;\
  line-height: normal;\
  color: #333;\
  text-align: center;\
  font-weight: 700;\
}\
\
.cq-popup__text-h1.no_margin {\
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
}\
\
.slider_btn {\
  position: absolute;\
  width: 30px;\
  height: 30px;\
  cursor: pointer;\
  z-index: 1000000;\
}\
\
.next_btn {\
  right: 0;\
}\
\
.prev_btn {\
  left: 0;\
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
  border-radius: 10px;\
  border: 1px solid #F8F8F8;\
  box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);\
  margin-bottom: 40px;\
  position: relative;\
}\
\
.product-img a {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.wrap {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  position: relative;\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.product-img img {\
  max-width: 203px;\
  border-radius: 10px;\
}\
\
.product-wrapper {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: center;\
      align-items: center;\
}\
\
.product-img {\
  background-repeat: no-repeat;\
  background-size: cover;\
}\
\
.product-discr {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: center;\
      align-items: center;\
  width: 100%;\
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
  font-weight: 700;\
  margin-bottom: 15px;\
  text-align: center;\
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
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  margin-bottom: 15px;\
}\
\
.product-price p {\
  font-weight: 400;\
  font-size: 16px;\
  color: #C2001F;\
}\
\
.product-price .old_price {\
  color: #A0A0A0;\
  font-size: 12px;\
  margin-right: 15px;\
  text-decoration: line-through;\
}\
\
.product-price .amount {\
  color: #333;\
  font-size: 16px;\
  font-weight: 700;\
  margin-right: 20px;\
}\
\
.product-price .sale_percent {\
  color: #fff;\
  font-size: 14px;\
  font-weight: 700;\
  position: relative;\
  width: -webkit-fit-content;\
  width: -moz-fit-content;\
  width: fit-content;\
}\
\
.product-price .sale_percent::before {\
  content: "";\
  position: absolute;\
  top: 0;\
  bottom: 0;\
  left: -10px;\
  right: -10px;\
  background-color: #CC0A3B;\
  -webkit-transform: skew(-10deg);\
          transform: skew(-10deg);\
  z-index: -1;\
  border-radius: 5px;\
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
.hidden {\
  display: none !important;\
}\
\
@media (max-width: 440px) {\
  .wrapper__body {\
    -ms-flex-align: center;\
        align-items: center;\
    -ms-flex-pack: center;\
        justify-content: center;\
  }\
\
  .cq-popup__body {\
    margin: 0;\
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
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <div class="cq-popup__form-title">\
            <p class="cq-popup__text-h1">Судя по всему, эти товары <br>Вам приглянулись 💛</p>\
            <p class="cq-popup__text">Сохраним их в корзине, чтобы не потерялись? Всегда можно вернуться позже.</p>\
        </div>\
        <a class="cq-popup__close"></a>\
        <div class="cq-popup__viewed-products-wrapper">\
            <div class="cq-popup__viewed-products d_flex flex_col">\
                <p style="display: none;">\
                    {% for b in massViewed[:3] %}\
                    {% set url = b.props["$url"] %}\
                    {% set img = b.props["$img"] %}\
                    {% set name = b.props["$name"] %}\
                    {% set amount = b.props["$amount"] %}\
                    {% set salePercentage = b.props["dcred"] %}\
                    {% set oldPrice = b.props["dcold"] %}\
                </p>\
                <div class="product-wrapper d_flex">\
                    <div class="wrap">\
                        <div class="prev_btn slider_btn">\
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"\
                                 xmlns="http://www.w3.org/2000/svg">\
                                <path d="M18.182 9.09091L11.8184 15L18.182 20.9091" stroke="#CC0A3B"\
                                      stroke-width="1.81818"/>\
                            </svg>\
                        </div>\
                        <div class="next_btn slider_btn">\
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"\
                                 xmlns="http://www.w3.org/2000/svg">\
                                <path d="M11.818 9.09091L18.1816 15L11.818 20.9091" stroke="#CC0A3B"\
                                      stroke-width="1.81818"/>\
                            </svg>\
                        </div>\
                        <div class="product-img">\
                            <a href="{{url}}" target="_blank">\
                                <img src="{{img}}" alt="product_pic">\
                            </a>\
                        </div>\
                    </div>\
                    <div class="product-discr">\
                        <div class="product-name">\
                            <a href="{{url}}" target="_blank">\
                                <p>{{name}}</p>\
                            </a>\
                        </div>\
                        <div class="product-price">\
                            <p class="old_price">{{oldPrice}} Р</p>\
                            <p class="amount">{{amount}} ₽</p>\
                            <p class="sale_percent">{{salePercentage}} ₽</p>\
                        </div>\
                        <a href="{{url}}" class="link" target="_blank">ПОСМОТРЕТЬ ТОВАР</a>\
                    </div>\
                </div>\
                <p style="display: none;">{% endfor %}</p>\
            </div>\
        </div>\
    </div>\
</div>\
<script>"use strict";\
\
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\
var cqpopup_name = "Просмотренные товары слайдер",\
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
var curSlideNumber = 0;\
var numOfSlides = document.querySelectorAll(\'.product-wrapper\').length;\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
    setSlider();\
  }\
});\
function setSlider() {\
  document.querySelectorAll(\'.product-wrapper\').forEach(function (item) {\
    item.classList.add(\'hidden\');\
  });\
  document.querySelector(\'.product-wrapper\').classList.remove(\'hidden\');\
}\
document.addEventListener("submit", function (e) {\
  e.preventDefault();\
  var email = document.querySelector(".email").value;\
  var checkbox = document.querySelector("#checkbox").checked;\
  if (email && checkbox) {\
    carrotquest.identify([{\
      op: \'update_or_create\',\
      key: \'$email\',\
      value: email\
    }]);\
    hidden_visible(\'#email_form\', \'#thank\');\
    carrotquest.replied();\
    setTimeout(carrotquest.close, 5000);\
  }\
});\
document.addEventListener(\'click\', function (e) {\
  if (e.target.closest(\'.next_btn\')) {\
    var curSlide = e.target.closest(\'.product-wrapper\');\
    var nextSlide = document.querySelectorAll(\'.product-wrapper\')[curSlideNumber + 1];\
    if (curSlideNumber <= numOfSlides && nextSlide) {\
      curSlide.classList.add(\'hidden\');\
      nextSlide.classList.remove(\'hidden\');\
      carrotquest.track(cqpopup_name + \' - Перешел вперед\');\
      curSlideNumber++;\
    }\
  }\
  if (e.target.closest(\'.prev_btn\')) {\
    var curSlide = e.target.closest(\'.product-wrapper\');\
    var prevSlide = document.querySelectorAll(\'.product-wrapper\')[curSlideNumber - 1];\
    if (curSlideNumber > 0 && prevSlide) {\
      curSlide.classList.add(\'hidden\');\
      prevSlide.classList.remove(\'hidden\');\
      carrotquest.track(cqpopup_name + \' - Перешел назад\');\
      curSlideNumber--;\
    }\
  }\
  if (e.target.closest(\'.link\')) {\
    carrotquest.clicked();\
  }\
  if (e.target.closest(\'.cq-popup__close:not(.hide)\')) {\
    carrotquest.close();\
  }\
  if (e.target.closest(\'.cq-popup__close.hide\')) {\
    hidden_visible("".concat(\'#\' + document.querySelector(\'form:not(.hidden)\').id), \'#close_form\');\
    carrotquest.track(cqpopup_name + \' - Попытался закрыть\');\
    e.target.closest(\'.cq-popup__close\').classList.remove(\'hide\');\
  }\
  if (e.target.closest(\'.link_out\')) {\
    carrotquest.track(cqpopup_name + \' - Перешел в каталог\');\
  }\
  if (e.target.closest(\'.product-wrapper a\')) {\
    carrotquest.track(cqpopup_name + \' - Перешел на товар\');\
  }\
  if (e.target.closest(\'.email_btn\')) {\
    carrotquest.track(cqpopup_name + \' - Выбрал email\');\
    hidden_visible(\'#form\', \'#email_form\');\
  }\
});\
function hidden_visible(elem1, elem2) {\
  document.querySelector(elem1).classList.add("hidden");\
  document.querySelector(elem2).classList.remove("hidden");\
}\
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