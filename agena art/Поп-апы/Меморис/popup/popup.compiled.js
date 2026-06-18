var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">\
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
.promocode__wrapper {\
  position: relative;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  max-width: 295px;\
}\
\
.cq-popup__body {\
  position: relative;\
  z-index: 2;\
  height: 483px;\
  width: 100%;\
  max-width: 550px;\
  margin: 15px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: center;\
      align-items: center;\
  transition: 0.3s ease;\
  background: #efefef;\
  box-shadow: 0px 4px 8px rgba(155, 155, 155, 0.25);\
  border-radius: 9px;\
}\
\
.success_copy {\
  position: absolute;\
  right: 30px;\
  bottom: -35px;\
  margin-top: 5px;\
  padding: 7px 14px;\
  border-radius: 4px;\
  background-color: #313339;\
  color: #fff;\
  visibility: hidden;\
  opacity: 0;\
  transition: 0.5s;\
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
.promocode {\
  position: relative;\
  max-width: 205px;\
  border-radius: 5px;\
  border: 3px dashed #FFB73F;\
  background: #FFF;\
  width: 100%;\
  height: 50px;\
  font-size: 16px;\
  line-height: 24px;\
  font-weight: 700;\
  color: #FFB73F;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  text-align: center;\
  cursor: pointer;\
  transition: border 0.3s ease-in, background-color 0.3s ease-in, color 0.3s ease-in;\
  margin-bottom: 15px;\
}\
\
.promocode svg {\
  position: absolute;\
  right: 14px;\
  top: 10px;\
}\
\
#thank {\
  width: 100%;\
  max-width: 550px;\
  height: 380px;\
  border-radius: 9px;\
  background: #EFEFEF;\
  position: relative;\
  z-index: 1000;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  padding: 40px;\
}\
\
#thank .cq-popup__text-h1 {\
  margin-top: 0;\
  font-size: 24px;\
  font-style: normal;\
  font-weight: 700;\
  line-height: normal;\
  max-width: 440px;\
  margin-bottom: 20px;\
}\
\
#thank .cq-popup__form-title {\
  margin-top: 0px;\
}\
\
#thank img {\
  position: absolute;\
  top: -66px;\
  right: 0;\
  left: 0;\
  margin: 0 auto;\
}\
\
.reg_link {\
  font-weight: 700;\
}\
\
.subtitle {\
  color: #555;\
  text-align: center;\
  font-family: "Open Sans", Sans-Serif;\
  font-size: 16px;\
  font-style: italic;\
  font-weight: 400;\
  line-height: normal;\
}\
\
.subtitle span {\
  font-weight: 700;\
}\
\
.cq-popup__body.answered {\
  height: 603px;\
}\
\
.cat-img {\
  max-width: 340px;\
  position: absolute;\
  left: 0;\
  bottom: 0;\
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
  background-color: #000000;\
  content: " ";\
  height: 30px;\
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
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  height: 100%;\
  width: 100%;\
  padding: 10px 40px 40px 40px;\
}\
\
.cq-popup__form .cq-popup__text {\
  margin-bottom: 15px;\
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
  max-width: 470px;\
  -ms-flex-direction: row;\
      flex-direction: row;\
}\
\
.cq_popup-input {\
  width: 100%;\
  max-width: 265px;\
  height: 50px;\
  color: #000;\
  border-radius: 5px 0 0 5px;\
  border: 1px solid #B3B3B3;\
  background: #FFFFFF;\
  outline: none;\
  text-align: center;\
  font-size: 16px;\
  background: rgba(157, 157, 157, 0.1);\
}\
\
.cq_popup-input::-webkit-input-placeholder {\
  color: #B3B3B3;\
  font-size: 16px;\
}\
\
.cq_popup-input::-moz-placeholder {\
  color: #B3B3B3;\
  font-size: 16px;\
}\
\
.cq_popup-input:-ms-input-placeholder {\
  color: #B3B3B3;\
  font-size: 16px;\
}\
\
.cq_popup-input::-ms-input-placeholder {\
  color: #B3B3B3;\
  font-size: 16px;\
}\
\
.cq_popup-input::placeholder {\
  color: #B3B3B3;\
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
  color: #000;\
  text-align: center;\
  max-width: 470px;\
  font-style: normal;\
  font-weight: 400;\
  font-size: 16px;\
  margin-bottom: 19px;\
}\
\
.cq-popup__text span {\
  font-weight: 700;\
}\
\
.cards {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  width: 100%;\
  max-width: 470px;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
  -ms-flex-wrap: wrap;\
      flex-wrap: wrap;\
}\
\
.card {\
  width: 100%;\
  max-width: 110px;\
  height: 110px;\
  margin-bottom: 10px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: end;\
      align-items: flex-end;\
  border-radius: 6px;\
  cursor: pointer;\
}\
\
.card svg {\
  -ms-flex-item-align: center;\
      align-self: center;\
}\
\
.card[data_id="2"] img,\
.card[data_id="4"] img {\
  -ms-flex-item-align: center;\
      align-self: center;\
}\
\
.card.opened {\
  background: #e2e2e2;\
  border-radius: 6px;\
  border: 1px solid #ccc;\
}\
\
.card.submited {\
  background: #e2e2e2;\
  border-radius: 6px;\
  border: 1px solid #ccc;\
}\
\
.card.closed {\
  background: #FFB73F;\
}\
\
.cq-popup__text-h1 {\
  margin-bottom: 10px;\
  font-size: 28px;\
  font-weight: 700;\
  line-height: 34px;\
  color: #000;\
  text-align: center;\
  max-width: 420px;\
  margin-top: 45px;\
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
  font-weight: 400;\
  color: #000;\
  cursor: pointer;\
  font-size: 16px;\
  text-align: center;\
  width: 100%;\
  max-width: 205px;\
  border-radius: 0px 5px 5px 0px;\
  border: 1px solid #B3B3B3;\
  background: #FFB73F;\
  line-height: 48px;\
  text-decoration: none;\
  border-left: none;\
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
  .card[data_id="2"] img,\
  .card[data_id="4"] img {\
    max-width: 66px;\
    max-height: 66px;\
  }\
\
  .cat-img {\
    height: 234px;\
    border-radius: 3px;\
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
    padding: 10px 13px 28px;\
    -ms-flex-align: center;\
        align-items: center;\
  }\
\
  #form .cq-popup__text {\
    margin-bottom: 10px;\
  }\
\
  #form .cq-popup__form-title {\
    margin-bottom: 0;\
  }\
\
  .cq-popup__close {\
    right: 10px;\
    top: 10px;\
  }\
\
  .cq-popup__close:before,\
  .cq-popup__close:after {\
    height: 20px;\
  }\
\
  .second-form .cq-popup__form-title {\
    -ms-flex-pack: center;\
        justify-content: center;\
    -ms-flex-align: center;\
        align-items: center;\
  }\
\
  .cq-popup__text-h1 {\
    margin-bottom: 10px;\
    margin-top: 30px;\
    max-width: 275px;\
    text-align: center;\
    font-size: 20px;\
    line-height: 24px;\
  }\
\
  .cq-popup__form-title {\
    margin-bottom: 15px;\
  }\
\
  .cq-popup__text {\
    font-size: 14px;\
    line-height: 18px;\
    text-align: center;\
    width: 100%;\
    max-width: 267px;\
    margin-bottom: 15px;\
  }\
\
  .cards {\
    max-width: 260px;\
  }\
\
  .pc {\
    display: none;\
  }\
\
  .card {\
    max-width: 80px;\
    height: 80px;\
  }\
\
  .card svg {\
    max-width: 17px;\
  }\
\
  .card img {\
    max-width: 72px;\
    max-height: 80px;\
  }\
\
  .cq-popup__body {\
    max-width: 300px;\
    height: 385px;\
  }\
\
  .cq-popup__body.answered {\
    height: 540px;\
  }\
\
  .cq-popup__form-inputs {\
    max-width: 260px;\
    -ms-flex-direction: column;\
        flex-direction: column;\
  }\
\
  .cq-popup-inputs-title {\
    text-align: center;\
    font-size: 16px;\
    margin-bottom: 20px;\
  }\
\
  #form .cq-popup__text {\
    font-size: 14px;\
    line-height: 16px;\
    margin-bottom: 15px;\
  }\
\
  .cq_popup-input {\
    max-width: 275px;\
    margin-bottom: 5px;\
    font-size: 14px;\
    border: 1px solid #b3b3b3;\
    border-radius: 5px;\
  }\
\
  .cq-popup__button {\
    max-width: 260px;\
    font-size: 16px;\
    background: #FFB73F;\
    border-radius: 5px;\
    border: none;\
  }\
\
  .cq-input-tel {\
    border: 1px solid #000000;\
  }\
\
  #thank {\
    max-width: 300px;\
    height: auto;\
    padding: 30px 8px 30px 14px;\
  }\
\
  #thank img {\
    max-width: 170px;\
    top: -24px;\
  }\
\
  #thank .cq-popup__form-title {\
    margin-top: 0px;\
    margin-bottom: 0;\
  }\
\
  #thank .cq-popup__text {\
    margin-bottom: 0;\
  }\
\
  #thank .cq-popup__text-h1 {\
    margin-bottom: 20px;\
    font-size: 20px;\
    font-style: normal;\
    font-weight: 700;\
    line-height: normal;\
  }\
\
  .promocode {\
    max-width: 260px;\
    margin-bottom: 20px;\
  }\
\
  .subtitle {\
    color: #000;\
    text-align: center;\
    font-family: Open Sans;\
    font-size: 14px;\
    font-style: italic;\
    font-weight: 400;\
  }\
\
  #thank .cq-popup__text {\
    font-size: 14px;\
    line-height: 16px;\
    max-width: 280px;\
  }\
}</style>\
</head>\
\
<body>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <a class="cq-popup__close"></a>\
        <p class="cq-popup__text-h1">Сыграй в игру и получи скидку на первый заказ!</p>\
        <p class="cq-popup__text">Открывайте карточки, находите одинаковые и составляйте\
            из них пары. Справитесь — <span>подарим 200 ₽\
            на первый заказ.</span></p>\
        <div class="cards">\
            <div class="card closed">\
                <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M5.03125 15.9375V14.5938C5.03125 13.9479 5.10938 13.3646 5.26562 12.8438C5.43229 12.3229 5.72396 11.8281 6.14062 11.3594C6.55729 10.8906 7.13542 10.4219 7.875 9.95312C8.58333 9.50521 9.10417 9.11979 9.4375 8.79688C9.77083 8.46354 9.98958 8.16146 10.0938 7.89062C10.1979 7.60938 10.25 7.32812 10.25 7.04688C10.25 6.60938 10.0521 6.26562 9.65625 6.01562C9.26042 5.75521 8.74479 5.625 8.10938 5.625C7.31771 5.625 6.45833 5.76562 5.53125 6.04688C4.61458 6.32812 3.63542 6.74479 2.59375 7.29688L0.421875 3.04688C1.59896 2.36979 2.85417 1.83333 4.1875 1.4375C5.52083 1.03125 6.97396 0.828125 8.54688 0.828125C10.9115 0.828125 12.7448 1.35417 14.0469 2.40625C15.349 3.44792 16 4.82292 16 6.53125C16 7.34375 15.875 8.08854 15.625 8.76562C15.375 9.44271 14.9792 10.0781 14.4375 10.6719C13.8958 11.2656 13.1823 11.849 12.2969 12.4219C11.6719 12.8177 11.1771 13.1562 10.8125 13.4375C10.4583 13.7188 10.2031 13.9896 10.0469 14.25C9.90104 14.5104 9.82812 14.8073 9.82812 15.1406V15.9375H5.03125ZM4.35938 21.4062C4.35938 20.3021 4.67708 19.526 5.3125 19.0781C5.95833 18.6302 6.73958 18.4062 7.65625 18.4062C8.53125 18.4062 9.28646 18.6302 9.92188 19.0781C10.5677 19.526 10.8906 20.3021 10.8906 21.4062C10.8906 22.4583 10.5677 23.2188 9.92188 23.6875C9.28646 24.1562 8.53125 24.3906 7.65625 24.3906C6.73958 24.3906 5.95833 24.1562 5.3125 23.6875C4.67708 23.2188 4.35938 22.4583 4.35938 21.4062Z" fill="white"/>\
                </svg>\
                <img src="" alt="" class="hidden">\
            </div>\
            <div class="card closed">\
                <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M5.03125 15.9375V14.5938C5.03125 13.9479 5.10938 13.3646 5.26562 12.8438C5.43229 12.3229 5.72396 11.8281 6.14062 11.3594C6.55729 10.8906 7.13542 10.4219 7.875 9.95312C8.58333 9.50521 9.10417 9.11979 9.4375 8.79688C9.77083 8.46354 9.98958 8.16146 10.0938 7.89062C10.1979 7.60938 10.25 7.32812 10.25 7.04688C10.25 6.60938 10.0521 6.26562 9.65625 6.01562C9.26042 5.75521 8.74479 5.625 8.10938 5.625C7.31771 5.625 6.45833 5.76562 5.53125 6.04688C4.61458 6.32812 3.63542 6.74479 2.59375 7.29688L0.421875 3.04688C1.59896 2.36979 2.85417 1.83333 4.1875 1.4375C5.52083 1.03125 6.97396 0.828125 8.54688 0.828125C10.9115 0.828125 12.7448 1.35417 14.0469 2.40625C15.349 3.44792 16 4.82292 16 6.53125C16 7.34375 15.875 8.08854 15.625 8.76562C15.375 9.44271 14.9792 10.0781 14.4375 10.6719C13.8958 11.2656 13.1823 11.849 12.2969 12.4219C11.6719 12.8177 11.1771 13.1562 10.8125 13.4375C10.4583 13.7188 10.2031 13.9896 10.0469 14.25C9.90104 14.5104 9.82812 14.8073 9.82812 15.1406V15.9375H5.03125ZM4.35938 21.4062C4.35938 20.3021 4.67708 19.526 5.3125 19.0781C5.95833 18.6302 6.73958 18.4062 7.65625 18.4062C8.53125 18.4062 9.28646 18.6302 9.92188 19.0781C10.5677 19.526 10.8906 20.3021 10.8906 21.4062C10.8906 22.4583 10.5677 23.2188 9.92188 23.6875C9.28646 24.1562 8.53125 24.3906 7.65625 24.3906C6.73958 24.3906 5.95833 24.1562 5.3125 23.6875C4.67708 23.2188 4.35938 22.4583 4.35938 21.4062Z" fill="white"/>\
                </svg>\
                <img src="" alt="" class="hidden">\
            </div>\
            <div class="card closed">\
                <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M5.03125 15.9375V14.5938C5.03125 13.9479 5.10938 13.3646 5.26562 12.8438C5.43229 12.3229 5.72396 11.8281 6.14062 11.3594C6.55729 10.8906 7.13542 10.4219 7.875 9.95312C8.58333 9.50521 9.10417 9.11979 9.4375 8.79688C9.77083 8.46354 9.98958 8.16146 10.0938 7.89062C10.1979 7.60938 10.25 7.32812 10.25 7.04688C10.25 6.60938 10.0521 6.26562 9.65625 6.01562C9.26042 5.75521 8.74479 5.625 8.10938 5.625C7.31771 5.625 6.45833 5.76562 5.53125 6.04688C4.61458 6.32812 3.63542 6.74479 2.59375 7.29688L0.421875 3.04688C1.59896 2.36979 2.85417 1.83333 4.1875 1.4375C5.52083 1.03125 6.97396 0.828125 8.54688 0.828125C10.9115 0.828125 12.7448 1.35417 14.0469 2.40625C15.349 3.44792 16 4.82292 16 6.53125C16 7.34375 15.875 8.08854 15.625 8.76562C15.375 9.44271 14.9792 10.0781 14.4375 10.6719C13.8958 11.2656 13.1823 11.849 12.2969 12.4219C11.6719 12.8177 11.1771 13.1562 10.8125 13.4375C10.4583 13.7188 10.2031 13.9896 10.0469 14.25C9.90104 14.5104 9.82812 14.8073 9.82812 15.1406V15.9375H5.03125ZM4.35938 21.4062C4.35938 20.3021 4.67708 19.526 5.3125 19.0781C5.95833 18.6302 6.73958 18.4062 7.65625 18.4062C8.53125 18.4062 9.28646 18.6302 9.92188 19.0781C10.5677 19.526 10.8906 20.3021 10.8906 21.4062C10.8906 22.4583 10.5677 23.2188 9.92188 23.6875C9.28646 24.1562 8.53125 24.3906 7.65625 24.3906C6.73958 24.3906 5.95833 24.1562 5.3125 23.6875C4.67708 23.2188 4.35938 22.4583 4.35938 21.4062Z" fill="white"/>\
                </svg>\
                <img src="" alt="" class="hidden">\
            </div>\
            <div class="card closed">\
                <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M5.03125 15.9375V14.5938C5.03125 13.9479 5.10938 13.3646 5.26562 12.8438C5.43229 12.3229 5.72396 11.8281 6.14062 11.3594C6.55729 10.8906 7.13542 10.4219 7.875 9.95312C8.58333 9.50521 9.10417 9.11979 9.4375 8.79688C9.77083 8.46354 9.98958 8.16146 10.0938 7.89062C10.1979 7.60938 10.25 7.32812 10.25 7.04688C10.25 6.60938 10.0521 6.26562 9.65625 6.01562C9.26042 5.75521 8.74479 5.625 8.10938 5.625C7.31771 5.625 6.45833 5.76562 5.53125 6.04688C4.61458 6.32812 3.63542 6.74479 2.59375 7.29688L0.421875 3.04688C1.59896 2.36979 2.85417 1.83333 4.1875 1.4375C5.52083 1.03125 6.97396 0.828125 8.54688 0.828125C10.9115 0.828125 12.7448 1.35417 14.0469 2.40625C15.349 3.44792 16 4.82292 16 6.53125C16 7.34375 15.875 8.08854 15.625 8.76562C15.375 9.44271 14.9792 10.0781 14.4375 10.6719C13.8958 11.2656 13.1823 11.849 12.2969 12.4219C11.6719 12.8177 11.1771 13.1562 10.8125 13.4375C10.4583 13.7188 10.2031 13.9896 10.0469 14.25C9.90104 14.5104 9.82812 14.8073 9.82812 15.1406V15.9375H5.03125ZM4.35938 21.4062C4.35938 20.3021 4.67708 19.526 5.3125 19.0781C5.95833 18.6302 6.73958 18.4062 7.65625 18.4062C8.53125 18.4062 9.28646 18.6302 9.92188 19.0781C10.5677 19.526 10.8906 20.3021 10.8906 21.4062C10.8906 22.4583 10.5677 23.2188 9.92188 23.6875C9.28646 24.1562 8.53125 24.3906 7.65625 24.3906C6.73958 24.3906 5.95833 24.1562 5.3125 23.6875C4.67708 23.2188 4.35938 22.4583 4.35938 21.4062Z" fill="white"/>\
                </svg>\
                <img src="" alt="" class="hidden">\
            </div>\
            <div class="card closed">\
                <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M5.03125 15.9375V14.5938C5.03125 13.9479 5.10938 13.3646 5.26562 12.8438C5.43229 12.3229 5.72396 11.8281 6.14062 11.3594C6.55729 10.8906 7.13542 10.4219 7.875 9.95312C8.58333 9.50521 9.10417 9.11979 9.4375 8.79688C9.77083 8.46354 9.98958 8.16146 10.0938 7.89062C10.1979 7.60938 10.25 7.32812 10.25 7.04688C10.25 6.60938 10.0521 6.26562 9.65625 6.01562C9.26042 5.75521 8.74479 5.625 8.10938 5.625C7.31771 5.625 6.45833 5.76562 5.53125 6.04688C4.61458 6.32812 3.63542 6.74479 2.59375 7.29688L0.421875 3.04688C1.59896 2.36979 2.85417 1.83333 4.1875 1.4375C5.52083 1.03125 6.97396 0.828125 8.54688 0.828125C10.9115 0.828125 12.7448 1.35417 14.0469 2.40625C15.349 3.44792 16 4.82292 16 6.53125C16 7.34375 15.875 8.08854 15.625 8.76562C15.375 9.44271 14.9792 10.0781 14.4375 10.6719C13.8958 11.2656 13.1823 11.849 12.2969 12.4219C11.6719 12.8177 11.1771 13.1562 10.8125 13.4375C10.4583 13.7188 10.2031 13.9896 10.0469 14.25C9.90104 14.5104 9.82812 14.8073 9.82812 15.1406V15.9375H5.03125ZM4.35938 21.4062C4.35938 20.3021 4.67708 19.526 5.3125 19.0781C5.95833 18.6302 6.73958 18.4062 7.65625 18.4062C8.53125 18.4062 9.28646 18.6302 9.92188 19.0781C10.5677 19.526 10.8906 20.3021 10.8906 21.4062C10.8906 22.4583 10.5677 23.2188 9.92188 23.6875C9.28646 24.1562 8.53125 24.3906 7.65625 24.3906C6.73958 24.3906 5.95833 24.1562 5.3125 23.6875C4.67708 23.2188 4.35938 22.4583 4.35938 21.4062Z" fill="white"/>\
                </svg>\
                <img src="" alt="" class="hidden">\
            </div>\
            <div class="card closed">\
                <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M5.03125 15.9375V14.5938C5.03125 13.9479 5.10938 13.3646 5.26562 12.8438C5.43229 12.3229 5.72396 11.8281 6.14062 11.3594C6.55729 10.8906 7.13542 10.4219 7.875 9.95312C8.58333 9.50521 9.10417 9.11979 9.4375 8.79688C9.77083 8.46354 9.98958 8.16146 10.0938 7.89062C10.1979 7.60938 10.25 7.32812 10.25 7.04688C10.25 6.60938 10.0521 6.26562 9.65625 6.01562C9.26042 5.75521 8.74479 5.625 8.10938 5.625C7.31771 5.625 6.45833 5.76562 5.53125 6.04688C4.61458 6.32812 3.63542 6.74479 2.59375 7.29688L0.421875 3.04688C1.59896 2.36979 2.85417 1.83333 4.1875 1.4375C5.52083 1.03125 6.97396 0.828125 8.54688 0.828125C10.9115 0.828125 12.7448 1.35417 14.0469 2.40625C15.349 3.44792 16 4.82292 16 6.53125C16 7.34375 15.875 8.08854 15.625 8.76562C15.375 9.44271 14.9792 10.0781 14.4375 10.6719C13.8958 11.2656 13.1823 11.849 12.2969 12.4219C11.6719 12.8177 11.1771 13.1562 10.8125 13.4375C10.4583 13.7188 10.2031 13.9896 10.0469 14.25C9.90104 14.5104 9.82812 14.8073 9.82812 15.1406V15.9375H5.03125ZM4.35938 21.4062C4.35938 20.3021 4.67708 19.526 5.3125 19.0781C5.95833 18.6302 6.73958 18.4062 7.65625 18.4062C8.53125 18.4062 9.28646 18.6302 9.92188 19.0781C10.5677 19.526 10.8906 20.3021 10.8906 21.4062C10.8906 22.4583 10.5677 23.2188 9.92188 23.6875C9.28646 24.1562 8.53125 24.3906 7.65625 24.3906C6.73958 24.3906 5.95833 24.1562 5.3125 23.6875C4.67708 23.2188 4.35938 22.4583 4.35938 21.4062Z" fill="white"/>\
                </svg>\
                <img src="" alt="" class="hidden">\
            </div>\
            <div class="card closed pc">\
                <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M5.03125 15.9375V14.5938C5.03125 13.9479 5.10938 13.3646 5.26562 12.8438C5.43229 12.3229 5.72396 11.8281 6.14062 11.3594C6.55729 10.8906 7.13542 10.4219 7.875 9.95312C8.58333 9.50521 9.10417 9.11979 9.4375 8.79688C9.77083 8.46354 9.98958 8.16146 10.0938 7.89062C10.1979 7.60938 10.25 7.32812 10.25 7.04688C10.25 6.60938 10.0521 6.26562 9.65625 6.01562C9.26042 5.75521 8.74479 5.625 8.10938 5.625C7.31771 5.625 6.45833 5.76562 5.53125 6.04688C4.61458 6.32812 3.63542 6.74479 2.59375 7.29688L0.421875 3.04688C1.59896 2.36979 2.85417 1.83333 4.1875 1.4375C5.52083 1.03125 6.97396 0.828125 8.54688 0.828125C10.9115 0.828125 12.7448 1.35417 14.0469 2.40625C15.349 3.44792 16 4.82292 16 6.53125C16 7.34375 15.875 8.08854 15.625 8.76562C15.375 9.44271 14.9792 10.0781 14.4375 10.6719C13.8958 11.2656 13.1823 11.849 12.2969 12.4219C11.6719 12.8177 11.1771 13.1562 10.8125 13.4375C10.4583 13.7188 10.2031 13.9896 10.0469 14.25C9.90104 14.5104 9.82812 14.8073 9.82812 15.1406V15.9375H5.03125ZM4.35938 21.4062C4.35938 20.3021 4.67708 19.526 5.3125 19.0781C5.95833 18.6302 6.73958 18.4062 7.65625 18.4062C8.53125 18.4062 9.28646 18.6302 9.92188 19.0781C10.5677 19.526 10.8906 20.3021 10.8906 21.4062C10.8906 22.4583 10.5677 23.2188 9.92188 23.6875C9.28646 24.1562 8.53125 24.3906 7.65625 24.3906C6.73958 24.3906 5.95833 24.1562 5.3125 23.6875C4.67708 23.2188 4.35938 22.4583 4.35938 21.4062Z" fill="white"/>\
                </svg>\
                <img src="" alt="" class="hidden">\
            </div>\
            <div class="card closed pc">\
                <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M5.03125 15.9375V14.5938C5.03125 13.9479 5.10938 13.3646 5.26562 12.8438C5.43229 12.3229 5.72396 11.8281 6.14062 11.3594C6.55729 10.8906 7.13542 10.4219 7.875 9.95312C8.58333 9.50521 9.10417 9.11979 9.4375 8.79688C9.77083 8.46354 9.98958 8.16146 10.0938 7.89062C10.1979 7.60938 10.25 7.32812 10.25 7.04688C10.25 6.60938 10.0521 6.26562 9.65625 6.01562C9.26042 5.75521 8.74479 5.625 8.10938 5.625C7.31771 5.625 6.45833 5.76562 5.53125 6.04688C4.61458 6.32812 3.63542 6.74479 2.59375 7.29688L0.421875 3.04688C1.59896 2.36979 2.85417 1.83333 4.1875 1.4375C5.52083 1.03125 6.97396 0.828125 8.54688 0.828125C10.9115 0.828125 12.7448 1.35417 14.0469 2.40625C15.349 3.44792 16 4.82292 16 6.53125C16 7.34375 15.875 8.08854 15.625 8.76562C15.375 9.44271 14.9792 10.0781 14.4375 10.6719C13.8958 11.2656 13.1823 11.849 12.2969 12.4219C11.6719 12.8177 11.1771 13.1562 10.8125 13.4375C10.4583 13.7188 10.2031 13.9896 10.0469 14.25C9.90104 14.5104 9.82812 14.8073 9.82812 15.1406V15.9375H5.03125ZM4.35938 21.4062C4.35938 20.3021 4.67708 19.526 5.3125 19.0781C5.95833 18.6302 6.73958 18.4062 7.65625 18.4062C8.53125 18.4062 9.28646 18.6302 9.92188 19.0781C10.5677 19.526 10.8906 20.3021 10.8906 21.4062C10.8906 22.4583 10.5677 23.2188 9.92188 23.6875C9.28646 24.1562 8.53125 24.3906 7.65625 24.3906C6.73958 24.3906 5.95833 24.1562 5.3125 23.6875C4.67708 23.2188 4.35938 22.4583 4.35938 21.4062Z" fill="white"/>\
                </svg>\
                <img src="" alt="" class="hidden">\
            </div>\
        </div>\
        <form id="form" class="cq-popup__form d_flex flex_col first-form hidden">\
            <div class="cq-popup__form-content d_flex">\
                <div class="cq-popup__form-title d_flex flex_col">\
                    <p class="cq-popup__text">Поздравляем, скидка ваша! <br class="pc">\
                        Оставьте email — отправим промокод:</p>\
                </div>\
            </div>\
            <div class="cq-popup__form-inputs d_flex flex_col">\
                <input class="cq_popup-input email" type="email" name="email" placeholder="Введите email" required>\
                <button type="submit" class="cq-popup__button">\
                    Получить скидку\
                </button>\
            </div>\
        </form>\
    </div>\
    <section class="second-form hidden" id="thank">\
        <a class="cq-popup__close"></a>\
        <div class="cq-popup__form-title d_flex flex_col">\
            <p class="cq-popup__text-h1 thank"><a href="https://holistic-shop.ru/registration" target="_blank" class="reg_link">Зарегистрируйтесь</a>, примените промокод в корзине или укажите в комментарии к заказу.</p>\
        </div>\
        <div class="promocode__wrapper">\
            <div class="promocode" data-clipboard-target=".promocode" data-clipboard-action="copy" name="BONUS200">BONUS200\
            </div>\
            <span class="success_copy">Промокод скопирован</span>\
        </div>\
        <p class="subtitle">\
            Скидка действует только на <span>первый заказ от 2000 ₽</span>,в течение 30 дней. Не суммируется с бонусами. После первого заказа вам будут начислены 200 приветственных бонусов на следующую покупку и кэшбек бонусами 3% от суммы заказа.\
        </p>\
    </section>\
</div>\
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.6/clipboard.min.js"></script>\
<script>"use strict";\
\
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\
\
var cqpopup_name = "Меморис",\
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
var isMobile = false;\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
    SetIsMobile();\
    setCards();\
  }\
});\
\
function SetIsMobile() {\
  if (top.window.innerWidth < 701) {\
    isMobile = true;\
  }\
}\
\
(function copyText() {\
  var clipboard = new ClipboardJS(".promocode");\
  clipboard.on("success", function (e) {\
    carrotquest.track("Скопировал код - " + cqpopup_name);\
    document.querySelector(".success_copy").classList.add("active");\
    setTimeout(function () {\
      document.querySelector(".success_copy").classList.remove("active");\
    }, 2000);\
    e.clearSelection();\
  });\
  clipboard.on("error", function (e) {\
    carrotquest.track("Something went wrong");\
  });\
})();\
\
document.addEventListener("submit", function (e) {\
  var email = document.querySelector(\'input.email\').value;\
  e.preventDefault();\
\
  if (email) {\
    trackData("email");\
    hidden_visible(\'.cq-popup__body\', \'#thank\');\
    carrotquest.replied();\
\
    if (top.window.innerWidth < 700) {\
      resizeBody("382px");\
    }\
  }\
});\
\
function setCards() {\
  if (!isMobile) {\
    cardsPC = shuffle(cardsPC);\
    var i = 0;\
    document.querySelectorAll(\'.card:not(.hidden)\').forEach(function (item) {\
      item.querySelector(\'img\').src = cardsPC[i].img;\
      item.setAttribute(\'data_id\', cardsPC[i].id);\
      i++;\
    });\
  } else {\
    cardsMob = shuffle(cardsMob);\
    var i = 0;\
    document.querySelectorAll(\'.card:not(.hidden):not(.pc)\').forEach(function (item) {\
      item.querySelector(\'img\').src = cardsMob[i].img;\
      item.setAttribute(\'data_id\', cardsMob[i].id);\
      i++;\
    });\
  }\
}\
\
var countOfOpened = 0;\
var firstItem, secondItem;\
var firstID, secondID;\
var i = 0;\
document.addEventListener("click", function (e) {\
  if (e.target.closest(\'.closed:not(.blocked)\') && !document.querySelector(\'.opened\')) {\
    e.target.closest(\'.card\').classList.remove(\'closed\');\
    e.target.closest(\'.card\').classList.add(\'opened\');\
    e.target.closest(\'.card\').querySelector(\'svg\').classList.add(\'hidden\');\
    e.target.closest(\'.card\').querySelector(\'img\').classList.remove(\'hidden\');\
  }\
\
  if (e.target.closest(\'.closed:not(.blocked)\') && document.querySelector(\'.opened\')) {\
    e.target.closest(\'.card\').classList.remove(\'closed\');\
    e.target.closest(\'.card\').classList.add(\'opened\');\
    e.target.closest(\'.card\').querySelector(\'svg\').classList.add(\'hidden\');\
    e.target.closest(\'.card\').querySelector(\'img\').classList.remove(\'hidden\');\
    document.querySelectorAll(\'.closed\').forEach(function (item) {\
      item.classList.add(\'blocked\');\
    });\
    checkAnswers();\
    checkAll();\
  }\
\
  if (e.target.closest(\'.reg_link\')) {\
    carrotquest.track(cqpopup_name + \' - Перешел по ссылке регистрации\');\
    carrotquest.clicked();\
  }\
});\
\
function checkAll() {\
  if (!isMobile) {\
    if (document.querySelectorAll(\'.submited\').length === 8) {\
      carrotquest.track(cqpopup_name + \' - отгадал все карточки\');\
      document.querySelector(\'#form\').classList.remove(\'hidden\');\
      document.querySelector(\'.cq-popup__body\').classList.add(\'answered\');\
    }\
  } else {\
    if (document.querySelectorAll(\'.submited\').length === 6) {\
      carrotquest.track(cqpopup_name + \' - отгадал все карточки\');\
      document.querySelector(\'#form\').classList.remove(\'hidden\');\
      document.querySelector(\'.cq-popup__body\').classList.add(\'answered\');\
    }\
  }\
}\
\
function checkAnswers() {\
  var answers = [];\
  document.querySelectorAll(\'.opened\').forEach(function (item) {\
    answers.push(item.getAttribute(\'data_id\'));\
  });\
\
  if (answers[0] === answers[1]) {\
    document.querySelectorAll(\'.opened\').forEach(function (item) {\
      item.classList.remove(\'opened\');\
      item.classList.add(\'submited\');\
      document.querySelectorAll(\'.closed\').forEach(function (item) {\
        item.classList.remove(\'blocked\');\
      });\
    });\
  } else {\
    setTimeout(function () {\
      document.querySelectorAll(\'.opened\').forEach(function (item) {\
        item.classList.add(\'closed\');\
        item.classList.remove(\'opened\');\
        item.querySelector(\'svg\').classList.remove(\'hidden\');\
        item.querySelector(\'img\').classList.add(\'hidden\');\
        document.querySelectorAll(\'.closed\').forEach(function (item) {\
          item.classList.remove(\'blocked\');\
        });\
      });\
    }, 700);\
  }\
}\
\
function shuffle(array) {\
  return array.sort(function () {\
    return Math.random() - 0.5;\
  });\
}\
\
var cardsPC = [{\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776539794-zth34wrx.png",\
  id: "1"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776539794-zth34wrx.png",\
  id: "1"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776558347-1euwjr7g.png",\
  id: "2"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776558347-1euwjr7g.png",\
  id: "2"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776577662-wvqfj9we.png",\
  id: "3"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776577662-wvqfj9we.png",\
  id: "3"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776593953-68x93eku.png",\
  id: "4"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776593953-68x93eku.png",\
  id: "4"\
}];\
var cardsMob = [{\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776539794-zth34wrx.png",\
  id: "1"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776539794-zth34wrx.png",\
  id: "1"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776558347-1euwjr7g.png",\
  id: "2"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776558347-1euwjr7g.png",\
  id: "2"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776593953-68x93eku.png",\
  id: "3"\
}, {\
  img: "https://files.carrotquest.app/message-images/54159/54159-1687776593953-68x93eku.png",\
  id: "3"\
}];\
\
function resizeBody(height) {\
  document.querySelector(".cq-popup__body").style.height = height;\
  document.querySelector(".cq-popup__body").style.background = "url(\'https://files.carrotquest.app/message-images/48967/48967-1682666524041-swlxj1tn.png\')";\
}\
\
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