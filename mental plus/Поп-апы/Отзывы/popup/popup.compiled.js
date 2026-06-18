var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">\
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
  -youbkit-touch-callout: none;\
  -youbkit-user-select: none;\
  -moz-user-select: none;\
  -ms-user-select: none;\
  -webkit-user-select: none;\
          user-select: none;\
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
  background: rgba(79, 79, 79, 0.5);\
  -webkit-backdrop-filter: blur(10px);\
          backdrop-filter: blur(10px);\
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
  height: auto;\
  width: 100%;\
  max-width: 460px;\
  border-radius: 5px;\
  background: #FFF;\
}\
\
.cq-popup__body.resized {\
  height: 450px;\
  max-width: 620px;\
  background: radial-gradient(100% 233.2% at 100% 97.54%, #953AC7 0%, #6B39C5 100%);\
  max-height: 450px;\
}\
\
.reviewer {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  margin-bottom: 8px;\
}\
\
.reviewer_info {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  margin-left: 16px;\
}\
\
.reviewer_name {\
  color: #333;\
  font-size: 14px;\
  font-style: normal;\
  font-weight: 600;\
  margin-bottom: 8px;\
}\
\
.reviewer_pos {\
  color: #B4B4B4;\
  font-size: 12px;\
  font-style: normal;\
  font-weight: 400;\
  line-height: normal;\
}\
\
.reviewer_avatar {\
  margin-right: 7px;\
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
.cq-popup__close.second_form {\
  top: 10px;\
  right: 10px;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #000;\
  content: " ";\
  height: 20px;\
  position: absolute;\
  left: 0;\
  right: 0;\
  top: 0;\
  bottom: 0;\
  margin: auto;\
  width: 2px;\
  border-radius: 50px;\
}\
\
ul li {\
  color: #FFF;\
  font-size: 14px;\
  font-style: normal;\
  font-weight: 300;\
  line-height: normal;\
  margin-left: 20px;\
}\
\
.email-form {\
  position: relative;\
  padding: 15px 35px 20px;\
}\
\
.email-form .cq-popup__text-h1 {\
  margin-bottom: 3px;\
  font-weight: 400;\
  max-width: 100%;\
}\
\
.email-form .prev {\
  left: 14px;\
  top: 50%;\
}\
\
.thank-form {\
  padding: 35px 30px;\
  border-radius: 5px;\
  background: #fff;\
}\
\
.inputs {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  width: 100%;\
  margin-top: 10px;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
}\
\
.inputs .btn {\
  margin-top: 0;\
  max-width: 215px;\
}\
\
.phone {\
  width: 100%;\
  max-width: 175px;\
  border-radius: 5px;\
  border: 1px solid #DFDFDF;\
  color: #000;\
  height: 50px;\
  text-align: center;\
  font-size: 16px;\
  font-style: normal;\
  font-weight: 500;\
  line-height: 34px;\
}\
\
.phone::-webkit-input-placeholder {\
  color: #CACACA;\
}\
\
.phone::-moz-placeholder {\
  color: #CACACA;\
}\
\
.phone:-ms-input-placeholder {\
  color: #CACACA;\
}\
\
.phone::-ms-input-placeholder {\
  color: #CACACA;\
}\
\
.phone::placeholder {\
  color: #CACACA;\
}\
\
.btn {\
  width: 100%;\
  margin-top: 10px;\
  border-radius: 5px;\
  background: #FF004F;\
  color: #FFF;\
  text-align: center;\
  cursor: pointer;\
  font-size: 16px;\
  font-style: normal;\
  font-weight: 700;\
  line-height: 34px;\
  border: none;\
  height: 50px;\
}\
\
.thank-form .cq-popup__text-h1 {\
  color: #333;\
  font-size: 26px;\
  font-style: normal;\
  font-weight: 400;\
  line-height: 30px;\
  text-align: center;\
  margin-bottom: 10px;\
  text-transform: none;\
}\
\
.title_wrapper {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
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
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 100%;\
  width: 100%;\
  padding: 46px 38px;\
  border-radius: 9px;\
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
  margin-bottom: 22px;\
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
  max-width: 410px;\
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
  text-align: center;\
  max-width: 390px;\
  font-size: 16px;\
  color: #333;\
  font-style: normal;\
  line-height: normal;\
  margin-bottom: 0px;\
}\
\
.cq-popup__text-h1 {\
  margin-bottom: 10px;\
  color: #fff;\
  text-align: left;\
  font-style: normal;\
  font-weight: 400;\
  font-size: 36px;\
  line-height: 40px;\
  text-transform: uppercase;\
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
  background: #fff;\
  color: #000;\
  font-weight: 400;\
  cursor: pointer;\
  font-size: 14px;\
  text-align: center;\
  width: 100%;\
  max-width: 410px;\
  line-height: 40px;\
  text-decoration: none;\
  margin-bottom: 10px;\
  border-radius: 5px;\
  border: none;\
}\
\
.prev,\
.next {\
  position: absolute;\
  top: 40%;\
  cursor: pointer;\
}\
\
.prev {\
  left: -18px;\
}\
\
.next {\
  right: -18px;\
}\
\
.second-form {\
  width: 100%;\
  height: 100%;\
  padding: 35px 30px 25px;\
  position: relative;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.email {\
  width: 100%;\
  max-width: 350px;\
  height: 50px;\
  text-align: center;\
  margin-bottom: 8px;\
  border: none;\
  font-size: 16px;\
}\
\
.email::-webkit-input-placeholder {\
  color: #A0A0A0;\
}\
\
.email::-moz-placeholder {\
  color: #A0A0A0;\
}\
\
.email:-ms-input-placeholder {\
  color: #A0A0A0;\
}\
\
.email::-ms-input-placeholder {\
  color: #A0A0A0;\
}\
\
.email::placeholder {\
  color: #A0A0A0;\
}\
\
.submit_btn {\
  height: 50px;\
  width: 100%;\
  border: 1px solid #232730;\
  background: #E31E24;\
  color: #fff;\
  font-size: 16px;\
  outline: none;\
  margin-bottom: 5px;\
  z-index: 1000;\
  position: inherit;\
  cursor: pointer;\
}\
\
.form_img {\
  position: absolute;\
  right: 8px;\
  bottom: 0;\
  max-width: 161px;\
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
  font-weight: 400;\
  font-size: 11px;\
  line-height: normal;\
  cursor: pointer;\
}\
\
[type=checkbox]:not(:checked) + label:before,\
[type=checkbox]:checked + label:before {\
  content: "";\
  position: absolute;\
  left: 3px;\
  top: 3px;\
  width: 13px;\
  height: 13px;\
  background: #fff;\
  border: 1px solid #C6C6C6;\
  transition: all 0.275s;\
  border-radius: 3px;\
}\
\
[type=checkbox]:not(:checked) + label:after,\
[type=checkbox]:checked + label:after {\
  padding: 1px;\
  content: " ";\
  position: absolute;\
  top: 6px;\
  left: 6px;\
  font-size: 13px;\
  color: #DE2E10;\
  line-height: 0;\
  transition: all 0.2s;\
  background: #DE2E10;\
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
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
}\
\
.eula label {\
  font-size: 10px;\
  line-height: 13px;\
  color: #fff;\
  max-width: 355px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  text-align: left;\
}\
\
.review_wrapper {\
  padding: 18px 20px 20px 18px;\
  margin-bottom: 0px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
  position: relative;\
  border-radius: 5px;\
  background: #EBEBEB;\
}\
\
svg.bottom {\
  position: absolute;\
  bottom: 0;\
}\
\
svg.house {\
  right: 8px;\
}\
\
svg.tree {\
  right: 44px;\
}\
\
svg.flashlight {\
  right: 45px;\
}\
\
.review_text p {\
  margin-bottom: 0px;\
  color: #333;\
  font-size: 14px;\
  font-style: normal;\
  font-weight: 400;\
  line-height: normal;\
}\
\
.reviewer_position {\
  font-style: normal;\
  font-weight: 400;\
  font-size: 14px;\
  line-height: 17px;\
  color: #939393;\
}\
\
.footer_title {\
  font-style: normal;\
  font-weight: 700;\
  font-size: 16px;\
  line-height: 19px;\
  color: #FFFFFF;\
  margin-bottom: 15px;\
}\
\
.signup_link {\
  width: 100%;\
  max-width: 253px;\
  line-height: 34px;\
  font-size: 14px;\
  text-decoration: none;\
  background: #fff;\
  padding: 13px 25px;\
  border-radius: 5px;\
}\
\
#review .cq-popup__text {\
  max-width: 526px;\
  text-align: left;\
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
@media (max-width: 499px) {\
  .cq-popup__bg {\
    display: block;\
  }\
\
  .submit_btn {\
    margin-bottom: 10px;\
  }\
\
  [type=checkbox]:not(:checked) + label:before,\
  [type=checkbox]:checked + label:before {\
    top: 0px;\
  }\
\
  [type=checkbox]:not(:checked) + label:after,\
  [type=checkbox]:checked + label:after {\
    top: 3px;\
  }\
\
  .thank-form .cq-popup__text-h1 {\
    color: #333;\
    font-size: 30px;\
    font-style: normal;\
    text-align: center;\
    font-weight: 400;\
    line-height: 40px;\
    max-width: 100%;\
  }\
\
  .thank-form {\
    padding: 30px 25px;\
  }\
\
  .prev {\
    left: -17px;\
  }\
\
  .pc {\
    display: none;\
  }\
\
  [type=checkbox]:not(:checked) + label,\
  [type=checkbox]:checked + label {\
    font-size: 11px;\
    white-space: nowrap;\
    padding-left: 22px;\
  }\
\
  svg.house {\
    right: 4px;\
  }\
\
  svg.tree {\
    right: 45px;\
  }\
\
  svg.tree {\
    right: 35px;\
  }\
\
  .next {\
    right: -17px;\
  }\
\
  .email-form .prev {\
    left: 8px;\
    top: 45%;\
  }\
\
  .eula label {\
    max-width: 100%;\
  }\
\
  .mob {\
    display: block;\
  }\
\
  .reviewer_name {\
    max-width: 150px;\
  }\
\
  .inputs {\
    -ms-flex-direction: column;\
        flex-direction: column;\
  }\
\
  .phone {\
    max-width: 260px;\
    margin-bottom: 10px;\
  }\
\
  .inputs .btn {\
    max-width: 260px;\
  }\
\
  .email-form {\
    padding: 24px 25px 90px 25px;\
  }\
\
  .email-form .cq-popup__text-h1 {\
    text-align: left;\
    font-size: 30px;\
    line-height: 40px;\
    margin-bottom: 10px;\
    max-width: 100%;\
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
    padding: 30px 15px 166px;\
    -ms-flex-align: center;\
        align-items: center;\
  }\
\
  .cq-popup__close {\
    right: 8px;\
    top: 8px;\
  }\
\
  .cq-popup__text-h1 {\
    font-style: normal;\
    font-weight: 400;\
    font-size: 30px;\
    line-height: 40px;\
    text-align: center;\
    margin-bottom: 14px;\
    max-width: 235px;\
  }\
\
  .cq-popup__form-title {\
    margin-bottom: 20px;\
    -ms-flex-align: center;\
        align-items: center;\
  }\
\
  .cq-popup__text {\
    font-size: 16px;\
    margin-bottom: 0px;\
  }\
\
  .mob {\
    display: block;\
  }\
\
  .cq-popup__button {\
    font-size: 14px;\
    line-height: 14px;\
    height: 40px;\
    margin-bottom: 7px;\
  }\
\
  .cq-popup__body {\
    max-width: 310px;\
    border-radius: 5px;\
    background: #fff;\
  }\
\
  .cq-popup__body.resized {\
    background: radial-gradient(100% 233.2% at 100% 97.54%, #953AC7 0%, #6B39C5 100%);\
    border-radius: 9px;\
    height: auto;\
    max-height: 550px;\
    max-width: 300px;\
    padding: 0;\
  }\
\
  .cq-popup__close.second_form {\
    right: 15px;\
    top: 15px;\
  }\
\
  .footer_title {\
    text-align: center;\
    font-weight: 700;\
    font-size: 16px;\
    line-height: 19px;\
    margin-bottom: 10px;\
  }\
\
  .footer {\
    display: -ms-flexbox;\
    display: flex;\
    -ms-flex-direction: column;\
        flex-direction: column;\
    -ms-flex-align: center;\
        align-items: center;\
  }\
\
  .signup_link {\
    padding: 3px 25px;\
  }\
\
  #review .cq-popup__text {\
    font-weight: 400;\
    font-size: 16px;\
    line-height: 19px;\
    text-align: center;\
  }\
\
  #review .cq-popup__form-title {\
    margin-bottom: 10px;\
  }\
\
  .review_wrapper {\
    padding: 20px 15px;\
    height: auto;\
    margin-bottom: 0px;\
  }\
\
  .review_text p {\
    font-size: 14px;\
    line-height: 18px;\
  }\
\
  .second-form {\
    padding: 30px 25px 20px;\
    -ms-flex-align: start;\
        align-items: flex-start;\
  }\
\
  .second-form .cq-popup__text-h1 {\
    font-size: 30px;\
    line-height: 40px;\
    margin-bottom: 14px;\
    max-width: 100%;\
    text-align: left;\
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
        <form class="second-form" id="review">\
            <div class="review_wrapper">\
                <div class="prev">\
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">\
                        <path d="M7 1L1 7L7 13" stroke="#B4B4B4"/>\
                    </svg>\
                </div>\
                <div class="reviewer">\
                    <img src="" alt="" class="avatar">\
                    <div class="reviewer_info">\
                        <p class="reviewer_name"></p>\
                        <p class="reviewer_pos"></p>\
                    </div>\
                </div>\
                <p class="review_text">\
                </p>\
                <div class="next">\
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">\
                        <path d="M1 1L7 7L1 13" stroke="#B4B4B4"/>\
                    </svg>\
                </div>\
            </div>\
            <button class="show_form btn" type="button">Заказать консультацию</button>\
            <div class="inputs hidden">\
                <input type="tel" name="phone" class="phone" required placeholder="Ваш телефон">\
                <button class="btn">Перезвоните мне</button>\
            </div>\
        </form>\
        <div class="thank-form hidden">\
            <p class="cq-popup__text-h1">Спасибо</p>\
            <p class="cq-popup__text">Скоро свяжемся с вами</p>\
        </div>\
    </div>\
</div>\
<script>"use strict";\
\
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\
\
var cqpopup_name = "Отзывы",\
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
    setReview("first");\
  }\
});\
document.addEventListener(\'click\', function (e) {\
  if (e.target.closest(\'.show_form\')) {\
    document.querySelector(\'.show_form\').classList.add(\'hidden\');\
    document.querySelector(\'.inputs\').classList.remove(\'hidden\');\
  }\
\
  if (e.target.closest(\'.cq-popup__button\')) {\
    var value = e.target.closest(\'.cq-popup__button\').textContent.trim();\
    carrotquest.track(cqpopup_name + \' - \' + value);\
    carrotquest.identify([{\
      op: "update_or_create",\
      key: cqpopup_name + \' - Ответ\',\
      value: value\
    }]);\
    document.querySelector(\'.cq-popup__body\').classList.add(\'resized\');\
    document.querySelector(\'.cq-popup__close\').classList.add(\'second_form\');\
    hidden_visible(\'#form\', \'#thank\');\
  }\
\
  if (e.target.closest(\'.signup_link\')) {\
    carrotquest.track(cqpopup_name + \' - Перешел по ссылке\');\
  }\
\
  if (e.target.closest(\'.next\')) {\
    setReview(\'next\');\
  }\
\
  if (e.target.closest(\'.prev:not(.form)\')) {\
    setReview(\'prev\');\
  }\
\
  if (e.target.closest(\'.prev.form\')) {\
    hidden_visible("#form", "#review");\
  }\
});\
document.addEventListener(\'submit\', function (e) {\
  e.preventDefault();\
\
  if (e.target.closest(\'#review\') && document.querySelector(\'.success\')) {\
    var phone = document.querySelector(\'.phone\').value;\
    carrotquest.identify([{\
      op: "update_or_create",\
      key: "$phone",\
      value: phone\
    }]);\
    carrotquest.replied();\
    hidden_visible(\'#review\', \'.thank-form\');\
    setTimeout(carrotquest.close, 5000);\
  }\
});\
\
function randomInteger(min, max) {\
  var rand = min - 0.5 + Math.random() * (max - min + 1);\
  return Math.round(rand);\
}\
\
var currentReviewId = 0;\
\
function setReview(direction) {\
  if (direction === "next" && currentReviewId !== reviews.length - 1) {\
    currentReviewId = currentReviewId + 1;\
  } else if (direction === "next" && currentReviewId === reviews.length - 1) {\
    currentReviewId = 0;\
  }\
\
  if (direction === "prev") {\
    if (currentReviewId !== 0) {\
      currentReviewId = currentReviewId - 1;\
    } else {\
      currentReviewId = reviews.length - 1;\
    }\
  }\
\
  if (direction === "first") {\
    currentReviewId = 0;\
  }\
\
  document.querySelector(\'.review_text\').innerHTML = reviews[currentReviewId].text;\
  document.querySelector(\'.reviewer_name\').textContent = reviews[currentReviewId].name;\
  document.querySelector(\'.avatar\').src = reviews[currentReviewId].avatar;\
  document.querySelector(\'.reviewer_pos\').textContent = reviews[currentReviewId].pos;\
}\
\
var reviews = [{\
  id: 0,\
  imgClass: "house",\
  avatar: "https://files.carrotquest.app/message-images/52233/52233-1697535053510-gjxjwlyp.png",\
  pos: "Адвокат, г.Щёлково",\
  text: "<p>Команда Дмитрия подготовила продающие тексты и начала продвижение сайта. Клиенты приходят действительно качественные. Юристы — это скептики, вы же умеете ломать их стереотипы.</p>",\
  name: "Кузнецова Ирина"\
}, {\
  id: 1,\
  imgClass: "tree",\
  avatar: "https://files.carrotquest.app/message-images/52233/52233-1697535454776-37nuyiis.png",\
  pos: "Адвокат, г. Москва",\
  text: "<p>Выражаю искреннюю благодарность за исполнение моего персонального сайта. Подкупает ваша отзывчивость и срочное выполнение пожеланий по дизайну и оформлению сайта, готовность все доходчиво объяснить.</p>",\
  name: "Ким Борис"\
}, {\
  id: 2,\
  imgClass: "flashlight",\
  avatar: "https://files.carrotquest.app/message-images/52233/52233-1697535090658-rvciilns.png",\
  pos: "Адвокат, г. Москва",\
  text: "<p>Все, что было заявлено, — исполнено! Проделана огромная работа по доработке и продвижению сайта. С помощью ваших эффективных средств удалось улучшить рекламную кампанию и привлечь новых клиентов.</p>",\
  name: "Сулейманов Эльдар"\
}];\
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
}\
\
(function (form) {\
  var phoneInput = document.querySelector("[type=tel]"),\
      form = document.querySelector(form),\
      formattedInputValue = "+7 (";\
\
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
\
  function getInputNumbersValue(input) {\
    return input.value.replace(/\\D/g, "");\
  }\
\
  function getformattedInputValue(input, inputNumbersValue, formattedInputValue) {\
    if (!(inputNumbersValue[0] == "7" || inputNumbersValue[0] == "8")) {\
      formattedInputValue = formattedInputValue + inputNumbersValue;\
      return formattedInputValue;\
    }\
\
    if (inputNumbersValue.length > 1) {\
      formattedInputValue += inputNumbersValue.substring(1, 4);\
    }\
\
    if (inputNumbersValue.length >= 5) {\
      formattedInputValue += ") " + inputNumbersValue.substring(4, 7);\
    }\
\
    if (inputNumbersValue.length >= 8) {\
      formattedInputValue += "–" + inputNumbersValue.substring(7, 9);\
    }\
\
    if (inputNumbersValue.length >= 10) {\
      formattedInputValue += "–" + inputNumbersValue.substring(9, 11);\
    }\
\
    return formattedInputValue;\
  }\
\
  function onPhoneInput(e) {\
    var input = e.target,\
        inputNumbersValue = getInputNumbersValue(input);\
\
    if (e.inputType == "deleteContentBackward" && inputNumbersValue.length == 1) {\
      input.value = "";\
      return;\
    }\
\
    if (e.inputType == "insertFromPaste") {\
      if (["7", "8"].indexOf(inputNumbersValue[0]) > -1 && input.value != "") {\
        inputNumbersValue = inputNumbersValue.substring(1);\
      }\
\
      if (inputNumbersValue[0] == "9") {\
        inputNumbersValue = "8" + inputNumbersValue;\
      }\
    }\
\
    input.value = getformattedInputValue(input, inputNumbersValue, formattedInputValue);\
    checkCorrect(input.value);\
  }\
\
  function onPhoneFocus(e) {\
    if (e.target.value == "") {\
      e.target.value = formattedInputValue;\
    }\
  }\
\
  function onPhoneBlur(e) {\
    if (e.target.value == formattedInputValue) {\
      e.target.value = "";\
    }\
\
    if (e.target.value.length != 18) {\
      form.classList.remove("form-ready");\
      phoneInput.classList.add("error");\
      phoneInput.classList.remove("success");\
    }\
  }\
\
  function selectionStart(e) {\
    var input = e.target;\
\
    if (input.selectionStart <= 3) {\
      input.selectionStart = 4;\
    }\
  }\
\
  phoneInput.addEventListener("input", onPhoneInput);\
  phoneInput.addEventListener("focus", onPhoneFocus);\
  phoneInput.addEventListener("blur", onPhoneBlur);\
  phoneInput.addEventListener("keyup", selectionStart);\
  phoneInput.addEventListener("click", selectionStart);\
})("#review");</script>\
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
iframe.style.maxWidth = '500px';
iframe.style.height = '100%';
iframe.style.maxHeight = '400px';
iframe.style.transition = '.5s';
iframe.style.left = '0';
iframe.style.bottom = '0';

if (top.location.origin.indexOf('m.') > -1 || top.window.innerWidth < 500) {
  iframe.style.maxWidth = '100%';
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