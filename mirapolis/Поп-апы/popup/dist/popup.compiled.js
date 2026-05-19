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
  height: 510px;\
  width: 100%;\
  max-width: 890px;\
  margin: 15px;\
  background: #fff;\
  border-radius: 20px;\
}\
\
.question {\
  width: 100%;\
  padding: 0 30px;\
}\
\
.q_title {\
  font-size: 16px;\
  font-weight: 700;\
  color: #000;\
  margin-bottom: 15px;\
}\
\
.question.email-form {\
  height: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.answers-wrapper {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
  -ms-flex-wrap: wrap;\
      flex-wrap: wrap;\
}\
\
.answer.active {\
  border: 1px solid #00AEEF;\
}\
\
#another_input {\
  width: 150px;\
  border: none;\
  border-bottom: 1px solid #000;\
  height: 20px;\
  outline: none;\
  font-size: 16px;\
}\
\
.answer {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  cursor: pointer;\
  font-weight: 400;\
  font-size: 16px;\
  height: 51px;\
  position: relative;\
  overflow: hidden;\
  margin-bottom: 15px;\
  border: 1px solid #757575;\
  border-radius: 10px;\
  max-width: 400px;\
  width: 100%;\
}\
\
.answer input:not(#another_input) {\
  position: absolute;\
  left: -9999px;\
}\
\
.answer input:not(#another_input):checked + span:before {\
  box-shadow: inset 0px 0px 0px 4px #fff;\
  background: #00AEEF;\
  border: 1px solid #00AEEF;\
}\
\
.answer span:not(.hidden-answer) {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  transition: 0.25s ease;\
  margin: 0 15px;\
}\
\
.answer span:not(.hidden-answer):before {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  content: "";\
  background-color: transparent;\
  border: 1px solid #A7A7A7;\
  width: 15px;\
  height: 15px;\
  border-radius: 50%;\
  margin-right: 10px;\
  transition: 0.25s ease;\
}\
\
.answer span.for_checkbox:before {\
  border-radius: 2px;\
}\
\
.cq-popup__text.q-title {\
  font-weight: 500;\
  font-size: 22px;\
  margin-bottom: 27px;\
  line-height: 28px;\
  margin-top: 70px;\
}\
\
.phone_form {\
  width: 100%;\
  max-width: 890px;\
  background: #fff;\
  position: relative;\
  border-radius: 20px;\
}\
\
.two-columns {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  -ms-flex-align: center;\
      align-items: center;\
  position: relative;\
}\
\
.two-columns .mob {\
  display: none;\
}\
\
.cq-popup__text.q-title span {\
  font-size: 16px;\
  font-weight: 400;\
}\
\
.progress-now {\
  font-weight: 700;\
  padding-right: 3px;\
  color: #000;\
}\
\
.progress-all {\
  padding-left: 3px;\
}\
\
.hidden-answer {\
  margin-left: 22px;\
  opacity: 0;\
  transition: 0.4s;\
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
  margin-bottom: 10px;\
}\
\
.eula:last-of-type {\
  margin: 0;\
}\
\
.form-mob-img {\
  display: none;\
}\
\
.end-form,\
.thank,\
.email-form {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  padding: 0 30px;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.win-form-title {\
  font-size: 23px;\
  font-weight: 700;\
  margin-bottom: 11px;\
}\
\
.win-form-text {\
  font-size: 18px;\
  text-align: center;\
  max-width: 318px;\
  margin-bottom: 50px;\
}\
\
.promo-title {\
  text-align: center;\
  font-weight: 700;\
  font-size: 18px;\
  margin-bottom: 18px;\
}\
\
.promocode__wrapper {\
  position: relative;\
}\
\
.promocode {\
  border: 2px solid #ff0000;\
  border-radius: 3px;\
  height: 46px;\
  color: #ff0000;\
  font-size: 16px;\
  font-weight: 700;\
  margin-bottom: 16px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  text-align: center;\
  cursor: pointer;\
  transition: border 0.3s ease-in, background-color 0.3s ease-in, color 0.3s ease-in;\
  background-image: url("https://files.carrotquest.io/message-images/12827/12827-1655814644036-hmqern7q.png");\
  background-repeat: no-repeat;\
  background-position: right 20px center;\
}\
\
.success_copy {\
  width: 100%;\
  position: absolute;\
  bottom: -43px;\
  padding: 7px 14px;\
  border-radius: 4px;\
  background-color: #313339;\
  color: #fff;\
  visibility: hidden;\
  opacity: 0;\
  transition: 0.5s;\
}\
\
.cq-promocode-discription {\
  color: #959595;\
  font-size: 14px;\
  text-align: center;\
  line-height: 18px;\
}\
\
.success_copy.active {\
  visibility: visible;\
  opacity: 1;\
}\
\
.success_copy::after {\
  content: "";\
  position: absolute;\
  top: -20px;\
  right: 15px;\
  border-width: 10px 8px;\
  border-style: solid;\
  border-color: transparent transparent #313339 transparent;\
}\
\
.right-side {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  width: 100%;\
}\
\
.lose-form-title {\
  font-size: 23px;\
  font-weight: 700;\
  margin-bottom: 11px;\
}\
\
.lose-form-text {\
  font-size: 18px;\
}\
\
.hidden-answer.dasd {\
  color: #FF0000;\
}\
\
.hidden-answer.fasd {\
  color: #59B834;\
}\
\
.hidden-answer.hhgh {\
  color: #FF0000;\
}\
\
.hidden-answer.llas {\
  color: #59B834;\
}\
\
.hidden-mobile.dasd {\
  color: #FF0000;\
}\
\
.hidden-mobile.fasd {\
  color: #59B834;\
}\
\
.hidden-mobile.hhgh {\
  color: #FF0000;\
}\
\
.hidden-mobile.llas {\
  color: #59B834;\
}\
\
.hidden-mobile {\
  font-size: 14px;\
  line-height: 18px;\
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
.footer {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
  -ms-flex-align: end;\
      align-items: flex-end;\
  margin: 0 30px 30px;\
}\
\
.progress-box {\
  width: 585px;\
  height: 5px;\
  background: #D9D9D9;\
  border-radius: 30px;\
}\
\
input.next {\
  cursor: not-allowed;\
  background: #00AEEF;\
  color: #fff;\
  font-size: 16px;\
  max-width: 172px;\
  width: 100%;\
  line-height: 50px;\
  font-weight: 700;\
  border-radius: 10px;\
  border: none;\
}\
\
input.next.rounded {\
  border-radius: 10px;\
  max-width: 232px;\
}\
\
.progress-bar-text {\
  display: -ms-flexbox;\
  display: flex;\
  margin-bottom: 10px;\
  font-size: 16px;\
}\
\
.progress-box-active {\
  height: 5px;\
  background: #00AEEF;\
  border-radius: 30px;\
  width: 33%;\
  transition: 0.3s ease-in;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #fff;\
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
.cq-popup__close.black:before,\
.cq-popup__close.black:after {\
  background-color: #000;\
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
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  height: 100%;\
  width: 100%;\
}\
\
.cq-popup__form-content {\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  width: 100%;\
  height: 100%;\
}\
\
.cq-popup__form-content.question {\
  -ms-flex-direction: row;\
      flex-direction: row;\
  padding-left: 0;\
}\
\
.cq-popup__form-content.question .question {\
  margin-right: 46px;\
}\
\
.cq-popup__form-content.question .answers-wrapper {\
  padding-right: 0;\
}\
\
.answers-wrapper {\
  padding-right: 0;\
}\
\
.pc-pic {\
  margin-right: 60px;\
  margin-top: 70px;\
}\
\
.cq-popup__form-content.email-form {\
  height: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.cq-popup__form-title {\
  margin-bottom: 30px;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  border: none;\
  background: #00AEEF;\
  padding: 30px;\
  border-radius: 20px;\
}\
\
.cq-popup__form-title.mob {\
  display: none;\
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
  border: 1px solid #00AEEF;\
  background: transparent;\
  outline: none;\
  border-radius: 10px;\
  margin-bottom: 10px;\
  text-align: left;\
  font-size: 16px;\
  padding-left: 15px;\
}\
\
.cq_popup-input:last-of-type {\
  margin-bottom: 15px;\
}\
\
.cq_popup-input::-webkit-input-placeholder {\
  color: #757575;\
}\
\
.cq_popup-input:-ms-input-placeholder {\
  color: #757575;\
}\
\
.cq_popup-input::-ms-input-placeholder {\
  color: #757575;\
}\
\
.cq_popup-input::placeholder {\
  color: #757575;\
}\
\
button[type=submit] {\
  width: 100%;\
  background: #00AEEF;\
  color: #fff;\
  border: none;\
  height: 50px;\
  font-size: 16px;\
  font-weight: 400;\
  margin-bottom: 20px;\
  border-radius: 10px;\
  cursor: pointer;\
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
  font-weight: 400;\
  font-size: 16px;\
  line-height: normal;\
  color: #000;\
  text-align: left;\
  margin-bottom: 30px;\
}\
\
.cq-popup__text.small {\
  font-weight: 400;\
  font-size: 16px;\
  line-height: 20px;\
  margin-bottom: 21px;\
}\
\
.cq-popup__text span {\
  font-weight: 700;\
}\
\
.prev {\
  cursor: pointer;\
  background: transparent;\
  border: 1px solid #00AEEF;\
  border-radius: 10px;\
  width: 50px;\
  height: 50px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  margin-right: 10px;\
}\
\
.cq-popup__text.email-form {\
  font-weight: 700;\
  margin-top: 70px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.cq-popup__text-h1 {\
  font-size: 24px;\
  line-height: normal;\
  color: #fff;\
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
.buttons-wrapper {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: end;\
      justify-content: flex-end;\
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
.text-ready {\
  font-size: 22px;\
  margin-top: -20px;\
  margin-bottom: 21px;\
}\
\
.second-form {\
  min-height: 329px;\
}\
\
.eula {\
  color: #252525;\
  text-align: left;\
  font-size: 10px;\
  line-height: normal;\
}\
\
.eula a {\
  text-decoration: underline;\
}\
\
.form_title {\
  font-size: 24px;\
  color: #000000;\
  font-weight: 700;\
  margin-bottom: 15px;\
}\
\
.form_subtitle {\
  font-size: 16px;\
  color: #000;\
  font-weight: 400;\
  margin-bottom: 30px;\
}\
\
.form_subtitle .bold {\
  font-weight: 700;\
}\
\
.form_subtitle a {\
  color: #00AEEF;\
  font-weight: 700;\
}\
\
[type=checkbox].error:not(:checked) + label:before,\
[type=checkbox].error:checked + label:before {\
  border: 1px solid red;\
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
  .progress-now {\
    font-size: 14px;\
  }\
\
  .progress-all {\
    font-size: 14px;\
  }\
\
  .progress-bar-text {\
    font-size: 14px;\
    margin-bottom: 5px;\
  }\
\
  .cq-popup__close:before,\
  .cq-popup__close:after {\
    height: 15px;\
    width: 1px;\
  }\
\
  .question {\
    padding: 0 20px;\
  }\
\
  .cq-popup__form-content.question {\
    -ms-flex-direction: column;\
        flex-direction: column;\
    -ms-flex-pack: start;\
        justify-content: flex-start;\
  }\
\
  .thank .cq-popup__text.bold {\
    margin-bottom: 4px;\
    font-size: 20px;\
  }\
\
  .thank .cq-popup__text {\
    font-size: 14px;\
  }\
\
  .cq-popup__text.q-title span {\
    font-size: 14px;\
  }\
\
  .cq-popup__form-title.mob {\
    display: -ms-flexbox;\
    display: flex;\
    -ms-flex-pack: center;\
        justify-content: center;\
    -ms-flex-align: center;\
        align-items: center;\
    height: 100px;\
    margin-bottom: 10px;\
  }\
\
  .cq-popup__text.q-title {\
    font-size: 14px;\
    margin-top: 0px;\
    margin-bottom: 9px;\
    font-weight: 700;\
    width: 100%;\
    line-height: 17px;\
  }\
\
  .cq-popup__text span {\
    font-size: 14px;\
  }\
\
  .pc-pic {\
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
  .cq-popup__text-h1 {\
    font-size: 16px;\
    line-height: normal;\
  }\
\
  .cq-popup__form-content.question .question {\
    margin-right: 0;\
  }\
\
  .answers-wrapper {\
    max-height: 310px;\
    overflow: scroll;\
  }\
\
  .cq-popup__text {\
    font-size: 14px;\
    margin-bottom: 20px;\
  }\
\
  .text-ready {\
    margin-top: 15px;\
    margin-bottom: 17px;\
  }\
\
  .answer {\
    font-size: 14px;\
    min-height: 51px;\
    height: auto;\
    margin-bottom: 10px;\
  }\
\
  .footer {\
    -ms-flex-direction: column;\
        flex-direction: column;\
    -ms-flex-pack: center;\
        justify-content: center;\
    -ms-flex-align: center;\
        align-items: center;\
    margin: 0 20px 20px;\
  }\
\
  .buttons-wrapper {\
    width: 100%;\
    display: -ms-flexbox;\
    display: flex;\
    -ms-flex-pack: center;\
        justify-content: center;\
  }\
\
  .two-columns {\
    -ms-flex-direction: column;\
        flex-direction: column;\
    -ms-flex-pack: center;\
        justify-content: center;\
    -ms-flex-align: center;\
        align-items: center;\
  }\
\
  .two-columns .pc {\
    display: none;\
  }\
\
  .two-columns .mob {\
    display: block;\
  }\
\
  .phone_form {\
    max-width: 335px;\
    border-radius: 15px;\
  }\
\
  .end-form,\
  .thank,\
  .email-form {\
    margin-left: 0px;\
    display: -ms-flexbox;\
    display: flex;\
    padding: 20px;\
    -ms-flex-pack: center;\
        justify-content: center;\
    -ms-flex-align: start;\
        align-items: flex-start;\
    -ms-flex-direction: column;\
        flex-direction: column;\
  }\
\
  .thank {\
    -ms-flex-align: center;\
        align-items: center;\
    padding: 105px 20px;\
  }\
\
  .thank .form_title {\
    margin: 0;\
  }\
\
  .form_title {\
    font-size: 18px;\
    margin-bottom: 10px;\
  }\
\
  .form_subtitle {\
    font-size: 14px;\
    margin-bottom: 24px;\
  }\
\
  .end-form .cq-popup__text {\
    font-size: 19px;\
    font-weight: 700;\
  }\
\
  .end-form .cq-popup__text.small {\
    font-size: 14px;\
    font-weight: 400;\
    text-align: center;\
    margin-bottom: 12px;\
    max-width: 260px;\
  }\
\
  .prev {\
    margin-right: 10px;\
    margin-left: 0;\
    width: 47px;\
    height: 47px;\
  }\
\
  input.next {\
    width: 100%;\
    max-width: 235px;\
    line-height: 45px;\
    font-size: 14px;\
  }\
\
  input.next.rounded {\
    max-width: 100%;\
  }\
\
  .progress-bar {\
    margin-bottom: 10px;\
  }\
\
  .progress-box {\
    width: 295px;\
    height: 5px;\
  }\
\
  .progress-box-active {\
    height: 5px;\
  }\
\
  .cq-popup__close {\
    right: 5px;\
    top: 5px;\
  }\
\
  .cq-popup__text.email-form {\
    margin-top: 35px;\
  }\
\
  .hidden-answer {\
    display: none;\
  }\
\
  .cq-popup__form-title {\
    margin-bottom: 15px;\
    border-radius: 15px;\
    padding: 20px;\
  }\
\
  .win-form {\
    width: 333px;\
    height: 537px;\
  }\
\
  .lose-form {\
    width: 333px;\
    height: 537px;\
  }\
\
  .lose-form .right-side {\
    -ms-flex-pack: start;\
        justify-content: flex-start;\
    margin-top: 40px;\
  }\
\
  .win-form .left-side {\
    display: none;\
  }\
\
  .lose-form .left-side {\
    display: none;\
  }\
\
  .form-mob-img {\
    display: block;\
    margin-bottom: 34px;\
  }\
\
  .win-form-title {\
    font-size: 16px;\
    margin-bottom: 7px;\
  }\
\
  .lose-form-title {\
    margin-top: 66px;\
    font-size: 16px;\
    margin-bottom: 7px;\
  }\
\
  .lose-form-text {\
    font-size: 14px;\
  }\
\
  .win-form-text {\
    font-size: 14px;\
    margin-bottom: 33px;\
  }\
\
  .promo-title {\
    font-size: 16px;\
    margin-bottom: 16px;\
  }\
\
  .promocode__wrapper {\
    display: -ms-flexbox;\
    display: flex;\
    -ms-flex-pack: center;\
        justify-content: center;\
    -ms-flex-align: center;\
        align-items: center;\
  }\
\
  .promocode {\
    height: 50px;\
    max-width: 264px;\
    width: 100%;\
  }\
\
  .cq-promocode-discription {\
    font-size: 12px;\
  }\
\
  .cq-popup__body {\
    max-width: 335px;\
    height: auto;\
    border-radius: 15px;\
  }\
\
  .q_title {\
    font-size: 14px;\
    color: #000;\
    margin-bottom: 15px;\
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
\
  .cq_popup-input {\
    margin-bottom: 10px;\
    height: 40px;\
    font-size: 14px;\
  }\
\
  .cq_popup-input:last-of-type {\
    margin-bottom: 15px;\
  }\
\
  button[type=submit] {\
    height: 50px;\
    font-size: 14px;\
    margin-bottom: 15px;\
  }\
\
  [type=checkbox]:not(:checked) + label,\
  [type=checkbox]:checked + label {\
    font-size: 9px;\
  }\
\
  .eula {\
    font-size: 11px;\
  }\
\
  [type=checkbox]:not(:checked) + label,\
  [type=checkbox]:checked + label {\
    text-align: left;\
    line-height: 14px;\
  }\
}</style>\
</head>\
\
<body>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <a class="cq-popup__close"></a>\
        <form id="form" class="cq-popup__form d_flex flex_col first-form ">\
            <div id="s1" class="cq-popup__form-content d_flex">\
                <div class="cq-popup__form-title d_flex flex_col">\
                    <p class="cq-popup__text-h1">Добро пожаловать! Быстро сориентируем по платформе Mirapolis — ответьте на 3 вопроса и получите приятный бонус</p>\
                </div>\
                <div class="question">\
                    <p class="q_title">В какой роли Вы работаете в компании?</p>\
                    <div class="answers-wrapper">\
                        <label class="answer">\
                            <input type="radio" name="first"/>\
                            <span>HR-специалиaст</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="first"/>\
                            <span>HRD/Руководитель HR</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="first"/>\
                            <span>Топ–менеджер</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="first"/>\
                            <span>Руководитель подразделения</span>\
                        </label>\
                        <label class="answer" id="another_answer">\
                            <input type="radio" name="first"/>\
                            <span>Другое:</span>\
                            <input type="text" id="another_input">\
                        </label>\
                    </div>\
                </div>\
            </div>\
            <div id="s2" class="cq-popup__form-content d_flex hidden">\
                <div class="cq-popup__form-title d_flex flex_col">\
                    <p class="cq-popup__text-h1">Добро пожаловать! Быстро сориентируем по платформе Mirapolis — ответьте на 3 вопроса и получите приятный бонус</p>\
                </div>\
                <div class="question">\
                    <p class="q_title">Сколько сотрудников в Вашей компании?</p>\
                    <div class="answers-wrapper">\
                        <label class="answer">\
                            <input type="radio" name="second"/>\
                            <span>до 100</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="second"/>\
                            <span>100–500</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="second"/>\
                            <span>500–1 000</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="second"/>\
                            <span>1 000–5 000</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="second"/>\
                            <span>более 5 000</span>\
                        </label>\
                    </div>\
                </div>\
            </div>\
            <div id="s3" class="cq-popup__form-content d_flex hidden">\
                <div class="cq-popup__form-title d_flex flex_col">\
                    <p class="cq-popup__text-h1">Добро пожаловать! Быстро сориентируем по платформе Mirapolis — ответьте на 3 вопроса и получите приятный бонус</p>\
                </div>\
                <div class="question">\
                    <p class="q_title">Какая HR–задача сейчас у Вас в приоритете?</p>\
                    <div class="answers-wrapper">\
                        <label class="answer">\
                            <input type="radio" name="three" id="naim" data-sourse-name="Источник CQ значение 1"/>\
                            <span>Найм</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="three" id="adapt" data-sourse-name="Источник CQ значение 2"/>\
                            <span>Адаптация</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="three" id="education" data-sourse-name="Источник CQ значение 3"/>\
                            <span>Обучение сотрудников</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="three" id="reserv" data-sourse-name="Источник CQ значение 4"/>\
                            <span>Оценка компетенций и кадровый резерв</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="three" id="razvitie" data-sourse-name="Источник CQ значение 5"/>\
                            <span>Управление развитием</span>\
                        </label>\
                        <label class="answer">\
                            <input type="radio" name="three" id="another_task" data-sourse-name="Источник CQ значение 6"/>\
                            <span>Другое</span>\
                        </label>\
                    </div>\
                </div>\
            </div>\
        </form>\
        <div class="footer">\
            <div class="progress-bar">\
                <div class="progress-bar-text">\
                    <div class="progress-now">\
                        1\
                    </div>\
                    из\
                    <div class="progress-all">\
                        3\
                    </div>\
                </div>\
                <div class="progress-box">\
                    <div class="progress-box-active"></div>\
                </div>\
            </div>\
            <div class="buttons-wrapper">\
                <div class="prev hidden">\
                    <img src="https://files.carrotquest.app/message-images/68184/68184-1756364495341-5aeq9w3b.png"\
                         alt="pic prev">\
                </div>\
                <input type="button" class="next rounded" value="Далее" disabled>\
            </div>\
        </div>\
    </div>\
    <section class="phone_form hidden">\
            <a class="cq-popup__close black"></a>\
            <div class="two-columns">\
                <img class="pc" src="https://files.carrotquest.app/message-images/68184/68184-1756366194632-znvprzxh.png" alt="pic">\
                <form class="end-form">\
                    <p class="form_title">\
                        Ищете способ ускорить найм и избежать дорогостоящих ошибок?\
                    </p>\
                    <p class="form_subtitle">\
                        Мираполис Таланты позволит автоматизировать подбор и найти лучших кандидатов. Для <span class="bold">бесплатного доступа на 14 дней</span> к платформе оставьте номер телефона.\
                    </p>\
                    <input class="cq_popup-input name" type="text" name="name" placeholder="Имя" required>\
                        <input class="cq_popup-input phone" type="tel" name="phone" placeholder="Телефон" required>\
                    <button type="submit">Отправить</button>\
                    <div class="eula">\
                        <input type="checkbox" id="checkbox">\
                        <label for="checkbox">Я даю согласие на <a href="https://www.mirapolis.ru/personal/user_pd_agreement/" target="_blank">обработку персональных данных</a></label>\
                    </div>\
                </form>\
                <form class="email-form hidden">\
                    <p class="form_title">\
                        Спасибо!\
                    </p>\
                    <p class="form_subtitle">\
                        Наш эксперт свяжется с Вами, чтобы открыть доступ к платформе. А чтобы не пропустить полезные советы и вебинары, подпишитесь на наш блог.\
                    </p>\
                    <input class="cq_popup-input email" type="email" name="email" placeholder="E-mail" required>\
                    <button type="submit">Отправить</button>\
                    <div class="eula">\
                        <input type="checkbox" id="checkbox2">\
                        <label for="checkbox2">Я даю согласие на <a href="https://www.mirapolis.ru/personal/user_pd_agreement/" target="_blank">обработку персональных данных</a></label>\
                    </div>\
                </form>\
                <div class="thank hidden">\
                    <p class="form_title">Спасибо за подписку!</p>\
                </div>\
                <img class="mob" src="https://files.carrotquest.app/message-images/63248/63248-1752130562097-gnz0ah8n.png" alt="pic">\
            </div>\
    </section>\
</div>\
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.6/clipboard.min.js"></script>\
<script>"use strict";\
\
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\
var cqpopup_name = "4.1 Квиз",\
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
isAnswer();\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
  }\
});\
var numberOfCurrentSlide = 1;\
document.addEventListener(\'click\', function (e) {\
  if (e.target.closest(\'.answer\') && e.target.closest(\'.cq-popup__form-content:not(.hidden):not(.disable)\')) {\
    var btnNext = document.querySelector(\'.next\');\
    btnNext.style = "cursor:pointer";\
    btnNext.disabled = false;\
    if (e.target.closest(\'.answer\').querySelector(\'.hidden-answer\')) {\
      e.target.closest(\'.answer\').querySelector(\'.hidden-answer\').style.opacity = "1";\
    }\
    var curSlide = document.querySelector(\'.cq-popup__form-content:not(.hidden)\');\
    curSlide.querySelectorAll(\'.answer\').forEach(function (item) {\
      item.classList.remove(\'active\');\
    });\
    e.target.closest(\'.answer\').classList.add(\'active\');\
  }\
  if (e.target.closest(\'#another_input\')) {\
    e.target.closest(\'.answer\').click();\
    e.target.closest(\'#another_input\').focus();\
    var btnNext = document.querySelector(\'.next\');\
    btnNext.style = "cursor:not-allowed";\
    btnNext.disabled = true;\
  }\
  if (e.target.closest(\'#another_answer\')) {\
    e.target.closest(\'#another_answer\').querySelector(\'#another_input\').click();\
    var btnNext = document.querySelector(\'.next\');\
    btnNext.style = "cursor:not-allowed";\
    btnNext.disabled = true;\
  }\
  if (e.target.closest(\'.form_subtitle a\')) {\
    carrotquest.track(cqpopup_name + \' - скачал файл\');\
  }\
});\
document.querySelector(\'#another_input\').addEventListener(\'input\', function (e) {\
  var btnNext = document.querySelector(\'.next\');\
  if (e.target.value.length > 0) {\
    btnNext.style = "cursor:pointer";\
    btnNext.disabled = false;\
  } else {\
    btnNext.style = "cursor:not-allowed";\
    btnNext.disabled = true;\
  }\
});\
document.addEventListener(\'submit\', function (e) {\
  e.preventDefault();\
  if (e.target.closest(\'.end-form\')) {\
    var name = document.querySelector(\'.name\').value;\
    if (document.querySelector(\'.form-ready\') && document.querySelector(\'#checkbox\').checked && name) {\
      var phone = document.querySelector(\'.phone\').value;\
      carrotquest.replied();\
      carrotquest.identify([{\
        op: "update_or_create",\
        key: "$phone",\
        value: phone\
      }, {\
        op: "update_or_create",\
        key: "$name",\
        value: name\
      }, {\
        op: "update_or_create",\
        key: "Источник CQ",\
        value: document.querySelector(\'[name="three"]:checked\').getAttribute(\'data-sourse-name\')\
      }]);\
      hidden_visible(\'.end-form\', \'.email-form\');\
    }\
    if (!document.querySelector(\'#checkbox\').checked) {\
      document.querySelector(\'#checkbox\').classList.add(\'error\');\
    }\
  }\
  if (e.target.closest(\'.email-form\')) {\
    var email = document.querySelector(\'.email\').value;\
    if (document.querySelector(\'#checkbox2\').checked && email) {\
      carrotquest.track(cqpopup_name + \' - подписался\');\
      carrotquest.identify([{\
        op: "update_or_create",\
        key: "$email",\
        value: email\
      }]);\
      hidden_visible(\'.email-form\', \'.thank\');\
    }\
    if (!document.querySelector(\'#checkbox2\').checked) {\
      document.querySelector(\'#checkbox2\').classList.add(\'error\');\
    }\
  }\
});\
document.querySelector(\'input.next\').addEventListener(\'click\', function (e) {\
  var btnNext = document.querySelector(\'.next\');\
  btnNext.style = "cursor:not-allowed";\
  btnNext.disabled = true;\
  var number = numberOfCurrentSlide;\
  var nextSlide = document.querySelector(\'.cq-popup__form-content:not(.hidden)\').nextElementSibling;\
  var currentSlide = document.querySelector(\'.cq-popup__form-content:not(.hidden)\');\
  var answers = currentSlide.querySelectorAll(\'input:checked\');\
  var answersText = \'\';\
  var q = \'\';\
  switch (currentSlide.id) {\
    case \'s1\':\
      q = \'HR-задача\';\
      break;\
    case \'s2\':\
      q = \'Количество сотрудников\';\
      break;\
    case \'s3\':\
      q = \'Роль\';\
      break;\
  }\
  if (answers != null) {\
    answers.forEach(function (item) {\
      item = item.nextElementSibling.textContent;\
      answersText += " " + item;\
    });\
    if (answersText.trim().toLowerCase() === \'другое:\') {\
      answersText = document.querySelector(\'#another_input\').value;\
    }\
    carrotquest.track(cqpopup_name + \' - Ответил в квизе на \' + number + \' вопрос\');\
    carrotquest.identify([{\
      op: \'update_or_create\',\
      key: q,\
      value: answersText.trim()\
    }]);\
  }\
  if (nextSlide) {\
    slideToggler(currentSlide, nextSlide);\
    progress("next");\
    numberOfCurrentSlide++;\
    toggleButtonPrev(numberOfCurrentSlide);\
    isAnswer();\
  }\
  if (!nextSlide) {\
    hidden_visible(\'.cq-popup__body\', \'.phone_form\');\
    var answerID = document.querySelector(\'[name="three"]:checked\').id;\
    setFinalSlides(answerID);\
  }\
});\
function setFinalSlides(answerID) {\
  var phoneTitle, phoneSubtitle, imgPC, imgMOB, emailTitle, emailSubtitle;\
  if (answerID === \'naim\') {\
    phoneTitle = \'Ищете способ ускорить найм и избежать дорогостоящих ошибок?\';\
    phoneSubtitle = \'Мираполис Таланты позволит автоматизировать подбор и найти лучших кандидатов. Для <span class="bold">бесплатного доступа на 14 дней </span>к платформе оставьте номер телефона.\';\
    imgPC = \'https://files.carrotquest.app/message-images/68184/68184-1756368106334-ir1mi437.png\';\
    imgMOB = \'https://files.carrotquest.app/message-images/68184/68184-1756368121921-24bqvg5e.png\';\
    emailTitle = \'Спасибо!\';\
    emailSubtitle = \'Наш эксперт свяжется с Вами, чтобы открыть доступ к платформе. А чтобы не пропустить полезные советы и вебинары, подпишитесь на наш блог.\';\
  } else if (answerID === \'adapt\') {\
    phoneTitle = \'Хотите, чтобы новые сотрудники быстрее включались в работу и оставались в компании?\';\
    phoneSubtitle = \'Получите <span class="bold">бесплатный чек-лист «Адаптация 30-60-90: быстрый старт» </span>и начните удерживать таланты уже сейчас! Оставьте телефон — мы пришлём Вам материал.\';\
    imgPC = \'https://files.carrotquest.app/message-images/68184/68184-1756368224684-m8vkkmwa.png\';\
    imgMOB = \'https://files.carrotquest.app/message-images/68184/68184-1756368237867-oocgorf5.png\';\
    emailTitle = \'Спасибо!\';\
    emailSubtitle = \'Ваш чек-лист <span class="bold">«Адаптация 30-60-90: быстрый старт для новых сотрудников»</span> уже <a href="#" target="_blank">готов к загрузке.</a><br><br>А чтобы не пропустить полезные советы и вебинары, подпишитесь на наш блог.\';\
  } else if (answerID === \'education\') {\
    phoneTitle = \'Узнайте, как лидеры рынка развивают сотрудников\';\
    phoneSubtitle = \'Получите инсайды и рекомендации, <span class="bold">чтобы вывести обучение на новый уровень!</span><br><br>Оставьте телефон — мы расскажем все подробно.\';\
    imgPC = \'https://files.carrotquest.app/message-images/68184/68184-1756368485956-4htg4gzq.png\';\
    imgMOB = \'https://files.carrotquest.app/message-images/68184/68184-1756368500401-ror7h4tv.png\';\
    emailTitle = \'Спасибо!\';\
    emailSubtitle = \'Наш эксперт свяжется с вами в ближайшее время.А чтобы не пропустить полезные советы и вебинары, подпишитесь на наш блог.\';\
  } else if (answerID === \'reserv\') {\
    phoneTitle = \'Хотите видеть реальные точки роста и построить команду мечты?\';\
    phoneSubtitle = \'Получите гайд <span class="bold">«Как составить опросник 360 градусов: частые ошибки».</span> Оставьте телефон — и мы дадим вам инструмент для развития.\';\
    imgPC = \'https://files.carrotquest.app/message-images/68184/68184-1756368590395-xe4fc9xe.png\';\
    imgMOB = \'https://files.carrotquest.app/message-images/68184/68184-1756368604880-co76zgem.png\';\
    emailTitle = \'Спасибо!\';\
    emailSubtitle = \'Ваш гайд <span class="bold">«Как составить опросник 360° и избежать ошибок»</span> <a href="#" target="_blank">готов к загрузке.</a><br><br>А чтобы не пропустить полезные советы и вебинары, подпишитесь на наш блог.\';\
  } else if (answerID === \'razvitie\' || answerID === \'another_task\') {\
    phoneTitle = \'Попробуйте 14 дней бесплатно систему Мираполис Таланты и забирайте бонус!\';\
    phoneSubtitle = \'Практическое руководство <span class="bold">«51 метрика для измерения эффективности HR-процессов»</span> позволит легко говорить с бизнесом на языке цифр.\';\
    imgPC = \'https://files.carrotquest.app/message-images/68184/68184-1756368799686-142oiyxt.png\';\
    imgMOB = \'https://files.carrotquest.app/message-images/68184/68184-1756368815314-y8cyuou2.png\';\
    emailTitle = \'Спасибо!\';\
    emailSubtitle = \'Вот Ваш подарок — <a href="#" target="_blank">книга «51 метрика для измерения эффективности HR-процессов».</a><br><br>А чтобы не пропустить полезные советы и вебинары, подпишитесь на наш блог.\';\
  }\
  document.querySelector(\'.end-form .form_title\').innerHTML = phoneTitle;\
  document.querySelector(\'.end-form .form_subtitle\').innerHTML = phoneSubtitle;\
  document.querySelector(\'.phone_form img.pc\').src = imgPC;\
  document.querySelector(\'.phone_form img.mob\').src = imgMOB;\
  document.querySelector(\'.email-form .form_title\').innerHTML = emailTitle;\
  document.querySelector(\'.email-form .form_subtitle\').innerHTML = emailSubtitle;\
}\
document.querySelector(\'.prev\').addEventListener(\'click\', function () {\
  numberOfCurrentSlide--;\
  var currentSlide = document.querySelector(\'.cq-popup__form-content:not(.hidden)\');\
  var prevSlide = currentSlide.previousElementSibling;\
  var numberOfPrevSlide = document.querySelector(\'.progress-now\');\
  numberOfPrevSlide.textContent = (numberOfPrevSlide.textContent--).toString();\
  toggleButtonPrev(numberOfCurrentSlide);\
  slideToggler(currentSlide, prevSlide);\
  progress("prev");\
  isAnswer();\
});\
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {\
  item.addEventListener("click", carrotquest.close);\
});\
function toggleButtonPrev(num) {\
  if (num === 1) {\
    document.querySelector(\'.prev\').classList.add(\'hidden\');\
    document.querySelector(\'.next\').classList.add(\'rounded\');\
  } else {\
    document.querySelector(\'.prev\').classList.remove(\'hidden\');\
    document.querySelector(\'.next\').classList.remove(\'rounded\');\
  }\
}\
function isAnswer() {\
  var email = document.querySelector(\'.cq-popup__form-content:not(.hidden) .email-form input[type="email"]\');\
  var name = document.querySelector(\'.cq-popup__form-content:not(.hidden) .email-form input[type="name"]\');\
  var btnNext = document.querySelector(\'.next\');\
  if (document.querySelector(\'.cq-popup__form-content:not(.hidden) input:checked\')) {\
    btnNext.disabled = false;\
    btnNext.style = "cursor:pointer;";\
  } else if (email) {\
    if (email.value) {\
      btnNext.disabled = false;\
      btnNext.style = "cursor:pointer;";\
    }\
    email.addEventListener(\'input\', function () {\
      if (email.value.length > 0) {\
        btnNext.disabled = false;\
        btnNext.style = "cursor:pointer;";\
      }\
    });\
  }\
}\
function trackEmail() {\
  var numberOfPrevSlide = document.querySelector(\'.progress-now\');\
  if (numberOfPrevSlide === 2) {}\
}\
function progress(arg) {\
  if (arg === "next") {\
    document.querySelector(\'.progress-now\').textContent++;\
  } else {\
    document.querySelector(\'.progress-now\').textContent--;\
  }\
  var now = document.querySelector(\'.progress-now\').textContent;\
  var count = document.querySelector(\'.progress-all\').textContent;\
  document.querySelector(\'.progress-box-active\').style.width = Math.floor(now * 100 / count) + "%";\
}\
function trackData(data) {\
  carrotquest.identify(_defineProperty({}, "$" + data, document.querySelector(".cq_popup-input[name=" + data + "]").value));\
}\
function hidden_visible(elem1, elem2) {\
  document.querySelector(elem1).classList.add("hidden");\
  document.querySelector(elem2).classList.remove("hidden");\
}\
function slideToggler(element1, element2) {\
  element1.classList.add("hidden");\
  element2.classList.remove("hidden");\
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
})(".end-form");</script>\
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