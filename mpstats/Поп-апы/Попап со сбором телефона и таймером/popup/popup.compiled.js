var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet">\
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/css/intlTelInput.css" integrity="sha512-gxWow8Mo6q6pLa1XH/CcH8JyiSDEtiwJV78E+D+QP0EVasFs8wKXq16G8CLD4CJ2SnonHr4Lm/yY2fSI2+cbmw==" crossorigin="anonymous" referrerpolicy="no-referrer" />\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Onest", sans-serif;\
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
.hidden {\
  display: none !important;\
}\
\
.cq-popup__bg {\
  display: block;\
  position: fixed;\
  inset: 0;\
  background-color: rgba(0, 0, 0, 0.4);\
}\
\
.wrapper__body {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: end;\
      justify-content: flex-end;\
  width: 100%;\
  height: 100%;\
  padding-right: 80px;\
}\
\
.cq-popup__master {\
  position: relative;\
  z-index: 2;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  gap: 12px;\
  margin: 15px 0;\
}\
\
.cq-popup__body {\
  width: 540px;\
  background: #ffffff;\
  border-radius: 40px;\
  overflow: hidden;\
  box-shadow: 0px 0px 21px rgba(142, 142, 142, 0.29);\
}\
\
.cq-popup__banner {\
  position: relative;\
  height: 330px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  overflow: hidden;\
}\
\
.cq-popup__banner-bg {\
  position: absolute;\
  top: 0;\
  left: 0;\
  right: 0;\
  bottom: 0;\
  background-color: #ec7937;\
  background-image: url("https://files.carrotquest.app/message-images/57576/57576-1781856546265-g57t26y9.png");\
  background-position: center;\
  background-size: contain;\
  background-repeat: no-repeat;\
}\
\
.cq-popup__main-placement {\
  height: 276px;\
  padding: 10px 0 10px 10px;\
  position: relative;\
  z-index: 1;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.cq-popup__cover {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  gap: 10px;\
  width: 340px;\
}\
\
.cq-popup__cover-card {\
  width: 340px;\
  height: 240px;\
  background: #ffffff;\
  border-radius: 32px;\
  position: relative;\
  overflow: hidden;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.cq-popup__cover-track {\
  display: -ms-flexbox;\
  display: flex;\
  height: 100%;\
  transition: -webkit-transform 0.4s ease;\
  transition: transform 0.4s ease;\
  transition: transform 0.4s ease, -webkit-transform 0.4s ease;\
  will-change: transform;\
}\
\
.cq-popup__slide {\
  width: 340px;\
  height: 100%;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  position: relative;\
}\
\
.cq-popup__slide-img {\
  display: block;\
  width: 100%;\
  height: 100%;\
  -o-object-fit: cover;\
     object-fit: cover;\
}\
\
.cq-popup__slider {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 16px;\
  gap: 6px;\
  padding: 4px;\
  border-radius: 100px;\
  background: #FFFFFF;\
  -ms-flex-item-align: center;\
      align-self: center;\
}\
\
.cq-dot {\
  width: 6px;\
  height: 6px;\
  border-radius: 50%;\
  background: #DEDEDE;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  transition: 0.3s ease;\
  cursor: pointer;\
}\
\
.cq-dot--active {\
  width: 20px;\
  border-radius: 3px;\
  background: #121212;\
}\
\
.cq-popup__head {\
  height: 54px;\
  padding-top: 14px;\
  position: relative;\
  z-index: 1;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.cq-popup__hat {\
  background: #ffffff;\
  border-radius: 40px 40px 0 0;\
  height: 40px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: end;\
      justify-content: flex-end;\
  padding: 0 32px;\
  gap: 8px;\
}\
\
.cq-popup__ad-content {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: end;\
      justify-content: flex-end;\
  width: 72px;\
}\
\
.cq-popup__ad-label {\
  font-weight: 500;\
  font-size: 12px;\
  line-height: 1.2;\
  color: #a7a7a7;\
  white-space: nowrap;\
}\
\
.cq-popup__ad-dots {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  gap: 4px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  padding: 3px;\
  background: #F2F2F2;\
  border-radius: 100px;\
}\
\
.cq-popup__ad-dot {\
  width: 4px;\
  height: 4px;\
  border-radius: 50%;\
  background: #a7a7a7;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.cq-popup__headline-wrap {\
  padding: 0 32px;\
}\
\
.cq-popup__headline {\
  font-weight: 500;\
  font-size: 28px;\
  line-height: 1.2;\
  color: #121212;\
}\
\
.cq-popup__paragraph-wrap {\
  padding: 12px 32px 28px;\
}\
\
.cq-popup__paragraph-wrap--tight {\
  padding: 12px 32px 16px;\
}\
\
.cq-popup__paragraph {\
  font-weight: 400;\
  font-size: 20px;\
  line-height: 1.3;\
  color: #171b20;\
  opacity: 0.7;\
}\
\
.cq-popup__timer-wrap {\
  padding: 0 32px 28px;\
}\
\
.cq-popup__timer {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  gap: 4px;\
}\
\
.cq-popup__timer-item {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 36px;\
  padding: 4px 10px;\
  border-radius: 8px;\
  background: rgba(220, 223, 228, 0.5);\
}\
\
.cq-popup__timer-item--unit {\
  width: 50px;\
}\
\
.cq-popup__timer-value {\
  font-weight: 500;\
  font-size: 24px;\
  line-height: 1.15;\
  color: #121212;\
  white-space: nowrap;\
}\
\
.cq-popup__timer-sep {\
  font-weight: 600;\
  font-size: 20px;\
  line-height: 1.3;\
  color: #121212;\
}\
\
.cq-popup__banner--sm {\
  height: 200px;\
}\
\
.cq-popup__banner--sm .cq-popup__banner-bg {\
  background-image: url("https://files.carrotquest.app/message-images/57576/57576-1783073651649-geay1lxx.png");\
}\
\
.cq-popup__main-placement--sm {\
  height: 146px;\
  padding: 0;\
}\
\
.cq-popup__field-wrap {\
  padding: 0 32px 12px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  gap: 8px;\
}\
\
.cq-popup__field-label {\
  font-weight: 400;\
  font-size: 18px;\
  line-height: 1.3;\
  color: #929292;\
}\
\
.iti {\
  width: 100%;\
}\
\
.cq-popup__field-input {\
  width: 100%;\
  height: 47px;\
  border: 2px solid rgba(18, 18, 18, 0.16);\
  border-radius: 12px;\
  padding-right: 16px;\
  font-family: "Onest", sans-serif;\
  font-weight: 400;\
  font-size: 18px;\
  color: #121212;\
  outline: none;\
}\
\
.cq-popup__field-input::-webkit-input-placeholder {\
  color: #929292;\
}\
\
.cq-popup__field-input:-ms-input-placeholder {\
  color: #929292;\
}\
\
.cq-popup__field-input::-ms-input-placeholder {\
  color: #929292;\
}\
\
.cq-popup__field-input::placeholder {\
  color: #929292;\
}\
\
.cq-popup__field-input--error {\
  border-color: #ff4d4f;\
}\
\
.cq-popup__confidentiality-wrap {\
  padding: 0 32px 28px;\
}\
\
.cq-popup__confidentiality {\
  font-weight: 400;\
  font-size: 12px;\
  line-height: 1.2;\
  color: #929292;\
  opacity: 0.8;\
}\
\
.cq-popup__confidentiality-link {\
  color: inherit;\
  text-decoration: underline;\
}\
\
.cq-popup__btn-wrap {\
  padding: 0 32px 32px;\
}\
\
.cq-popup__cta {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  background: #16ff60;\
  color: #121212;\
  font-family: "Onest", sans-serif;\
  font-weight: 500;\
  font-size: 18px;\
  line-height: normal;\
  text-align: center;\
  text-decoration: none;\
  border: none;\
  border-radius: 100px;\
  padding: 20px 48px;\
  width: 100%;\
  cursor: pointer;\
}\
\
.cq-popup__close {\
  width: 48px;\
  height: 48px;\
  background: #f4f4f4;\
  border: none;\
  border-radius: 50%;\
  cursor: pointer;\
  position: relative;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.cq-popup__close::before,\
.cq-popup__close::after {\
  content: "";\
  position: absolute;\
  left: 50%;\
  top: 50%;\
  width: 2px;\
  height: 16px;\
  background: #121212;\
  border-radius: 2px;\
  margin-left: -1px;\
  margin-top: -8px;\
}\
\
.cq-popup__close::before {\
  -webkit-transform: rotate(45deg);\
          transform: rotate(45deg);\
}\
\
.cq-popup__close::after {\
  -webkit-transform: rotate(-45deg);\
          transform: rotate(-45deg);\
}\
\
@media (max-width: 700px) {\
  .wrapper__body {\
    -ms-flex-align: center;\
        align-items: center;\
    -ms-flex-pack: center;\
        justify-content: center;\
    padding-right: 0;\
  }\
\
  .cq-popup__master {\
    -ms-flex-direction: column-reverse;\
        flex-direction: column-reverse;\
    -ms-flex-align: end;\
        align-items: flex-end;\
    padding: 15px;\
    gap: 8px;\
    max-width: 400px;\
    width: 100%;\
  }\
\
  .cq-popup__body {\
    width: 100%;\
    border-radius: 24px;\
  }\
\
  .cq-popup__banner {\
    height: 270px;\
  }\
\
  .cq-popup__main-placement {\
    height: 218px;\
  }\
\
  .cq-popup__cover {\
    width: 270px;\
  }\
\
  .cq-popup__cover-card {\
    width: 270px;\
    height: 190px;\
    border-radius: 24px;\
  }\
\
  .cq-popup__slide {\
    width: 270px;\
  }\
\
  .cq-popup__head {\
    height: 52px;\
  }\
\
  .cq-popup__hat {\
    border-radius: 24px 24px 0 0;\
  }\
\
  .cq-popup__headline {\
    font-size: 22px;\
  }\
\
  .cq-popup__paragraph {\
    font-size: 16px;\
  }\
\
  .cq-popup__timer-item {\
    height: 32px;\
  }\
\
  .cq-popup__timer-value {\
    font-size: 20px;\
  }\
\
  .cq-popup__timer-sep {\
    font-size: 18px;\
  }\
\
  .cq-popup__banner--sm {\
    height: 158px;\
  }\
\
  .cq-popup__main-placement--sm {\
    height: 106px;\
  }\
\
  .cq-popup__field-label {\
    font-size: 16px;\
  }\
\
  .cq-popup__field-input {\
    height: 44px;\
    font-size: 16px;\
  }\
\
  .cq-popup__cta {\
    font-size: 16px;\
    padding: 16px 32px;\
  }\
}\
\
@media (max-width: 400px) {\
  .cq-popup__master {\
    max-width: 320px;\
  }\
\
  .cq-popup__cover {\
    width: 220px;\
  }\
\
  .cq-popup__cover-card {\
    width: 220px;\
    height: 170px;\
  }\
\
  .cq-popup__slide {\
    width: 220px;\
  }\
\
  .cq-popup__headline {\
    font-size: 20px;\
  }\
\
  .cq-popup__paragraph {\
    font-size: 14px;\
  }\
\
  .cq-popup__timer-item {\
    height: 28px;\
    padding: 3px 8px;\
  }\
\
  .cq-popup__timer-item--unit {\
    width: 42px;\
  }\
\
  .cq-popup__timer-value {\
    font-size: 17px;\
  }\
\
  .cq-popup__timer-sep {\
    font-size: 16px;\
  }\
}</style>\
</head>\
\
<body>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body">\
    <div class="cq-popup__master">\
        <div class="cq-popup__body">\
            <div class="cq-popup__view cq-popup__view--form">\
                <div class="cq-popup__banner">\
                    <div class="cq-popup__banner-bg"></div>\
                    <div class="cq-popup__main-placement">\
                        <div class="cq-popup__cover">\
                            <div class="cq-popup__cover-card">\
                                <div class="cq-popup__cover-track"></div>\
                            </div>\
                            <div class="cq-popup__slider"></div>\
                        </div>\
                    </div>\
                    <div class="cq-popup__head">\
                        <div class="cq-popup__hat">\
                            <div class="cq-popup__ad-content">\
                                <span class="cq-popup__ad-label "></span>\
                            </div>\
                            <div class="cq-popup__ad-dots ">\
                                <div class="cq-popup__ad-dot"></div>\
                                <div class="cq-popup__ad-dot"></div>\
                                <div class="cq-popup__ad-dot"></div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="cq-popup__headline-wrap">\
                    <p class="cq-popup__headline"></p>\
                </div>\
                <div class="cq-popup__paragraph-wrap cq-popup__paragraph-wrap--tight">\
                    <p class="cq-popup__paragraph"></p>\
                </div>\
                <div class="cq-popup__timer-wrap">\
                    <div class="cq-popup__timer">\
                        <div class="cq-popup__timer-item cq-popup__timer-item--days">\
                            <span class="cq-popup__timer-value cq-popup__timer-value--days"></span>\
                        </div>\
                        <span class="cq-popup__timer-sep">·</span>\
                        <div class="cq-popup__timer-item cq-popup__timer-item--unit">\
                            <span class="cq-popup__timer-value cq-popup__timer-value--hours"></span>\
                        </div>\
                        <span class="cq-popup__timer-sep">:</span>\
                        <div class="cq-popup__timer-item cq-popup__timer-item--unit">\
                            <span class="cq-popup__timer-value cq-popup__timer-value--minutes"></span>\
                        </div>\
                        <span class="cq-popup__timer-sep">:</span>\
                        <div class="cq-popup__timer-item cq-popup__timer-item--unit">\
                            <span class="cq-popup__timer-value cq-popup__timer-value--seconds"></span>\
                        </div>\
                    </div>\
                </div>\
                <div class="cq-popup__field-wrap">\
                    <label class="cq-popup__field-label"></label>\
                    <input type="tel" class="cq-popup__field-input" id="cq-popup-phone">\
                </div>\
                <div class="cq-popup__confidentiality-wrap">\
                    <p class="cq-popup__confidentiality">\
                        <span class="cq-popup__confidentiality-text"></span>\
                        <a href="#" class="cq-popup__confidentiality-link" target="_blank"></a>\
                    </p>\
                </div>\
                <div class="cq-popup__btn-wrap">\
                    <button type="button" class="cq-popup__cta cq-popup__cta--form"></button>\
                </div>\
            </div>\
            <div class="cq-popup__view cq-popup__view--thanks hidden">\
                <div class="cq-popup__banner cq-popup__banner--sm">\
                    <div class="cq-popup__banner-bg"></div>\
                    <div class="cq-popup__main-placement cq-popup__main-placement--sm"></div>\
                    <div class="cq-popup__head">\
                        <div class="cq-popup__hat"></div>\
                    </div>\
                </div>\
                <div class="cq-popup__headline-wrap">\
                    <p class="cq-popup__headline"></p>\
                </div>\
                <div class="cq-popup__paragraph-wrap">\
                    <p class="cq-popup__paragraph"></p>\
                </div>\
                <div class="cq-popup__btn-wrap">\
                    <a class="cq-popup__cta cq-popup__cta--thanks" target="_blank"></a>\
                </div>\
            </div>\
        </div>\
        <button class="cq-popup__close"></button>\
    </div>\
</div>\
<script src="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js"></script>\
<script>"use strict";\
\
var slides = [\'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png\', \'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png\', \'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png\', \'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png\', \'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png\'];\
var adLabel = \'Реклама\';\
var headline = \'Заголовок не более строки\';\
var paragraph = \'Мы обновили работу с фразами, добавили группировку по пресетам и статистику фраз по дням. Теперь ты можешь добавить в отслеживание фразы прямо из ключевых\';\
var ctaText = \'Кнопка\';\
var timerEndDate = \'2026-08-01T00:00:00\';\
var phoneLabel = \'Телефон\';\
var confidentialityText = \'Оставляя заявку, соглашаюсь с \';\
var confidentialityLinkText = \'условиями обработки персональных данных\';\
var confidentialityLinkUrl = \'#\';\
var thanksHeadline = \'Ваши контакты переданы\';\
var thanksParagraph = \'Мы обновили работу с фразами, добавили группировку по пресетам и статистику фраз по дням. Теперь ты можешь добавить в отслеживание фразы прямо из ключевых\';\
var thanksCtaText = \'Кнопка\';\
var thanksLinkUrl = \'#\';\
var cqpopup_name = "Попап со сбором телефона и таймером",\
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
function renderSlide(imageUrl) {\
  var el = document.createElement(\'div\');\
  el.className = \'cq-popup__slide\';\
  el.innerHTML = \'<img class="cq-popup__slide-img" src="\' + imageUrl + \'" alt="">\';\
  return el;\
}\
function render() {\
  var track = document.querySelector(\'.cq-popup__cover-track\');\
  var slider = document.querySelector(\'.cq-popup__slider\');\
  slides.forEach(function (slide, i) {\
    track.appendChild(renderSlide(slide));\
    var dot = document.createElement(\'span\');\
    dot.className = \'cq-dot\' + (i === 0 ? \' cq-dot--active\' : \'\');\
    slider.appendChild(dot);\
  });\
  var formView = document.querySelector(\'.cq-popup__view--form\');\
  formView.querySelector(\'.cq-popup__ad-label\').textContent = adLabel;\
  formView.querySelector(\'.cq-popup__headline\').textContent = headline;\
  formView.querySelector(\'.cq-popup__paragraph\').textContent = paragraph;\
  formView.querySelector(\'.cq-popup__field-label\').textContent = phoneLabel;\
  formView.querySelector(\'.cq-popup__confidentiality-text\').textContent = confidentialityText;\
  var confidentialityLink = formView.querySelector(\'.cq-popup__confidentiality-link\');\
  confidentialityLink.textContent = confidentialityLinkText;\
  confidentialityLink.href = confidentialityLinkUrl;\
  formView.querySelector(\'.cq-popup__cta--form\').textContent = ctaText;\
  var thanksView = document.querySelector(\'.cq-popup__view--thanks\');\
  thanksView.querySelector(\'.cq-popup__headline\').textContent = thanksHeadline;\
  thanksView.querySelector(\'.cq-popup__paragraph\').textContent = thanksParagraph;\
  var thanksCta = thanksView.querySelector(\'.cq-popup__cta--thanks\');\
  thanksCta.textContent = thanksCtaText;\
  thanksCta.href = thanksLinkUrl;\
}\
render();\
(function () {\
  var track = document.querySelector(\'.cq-popup__cover-track\');\
  var slideEls = document.querySelectorAll(\'.cq-popup__slide\');\
  var dots = document.querySelectorAll(\'.cq-dot\');\
  var current = 0;\
  var timer;\
  function goTo(index) {\
    dots[current].classList.remove(\'cq-dot--active\');\
    current = (index + slideEls.length) % slideEls.length;\
    track.style.transform = \'translateX(-\' + current * slideEls[0].offsetWidth + \'px)\';\
    dots[current].classList.add(\'cq-dot--active\');\
  }\
  function next() {\
    goTo(current + 1);\
  }\
  dots.forEach(function (dot, i) {\
    dot.addEventListener(\'click\', function () {\
      clearInterval(timer);\
      goTo(i);\
      timer = setInterval(next, 3000);\
    });\
  });\
  timer = setInterval(next, 3000);\
})();\
function pluralizeDays(n) {\
  var mod10 = n % 10;\
  var mod100 = n % 100;\
  if (mod10 === 1 && mod100 !== 11) return \'день\';\
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return \'дня\';\
  return \'дней\';\
}\
function pad2(n) {\
  return n < 10 ? \'0\' + n : String(n);\
}\
(function () {\
  var timerWrap = document.querySelector(\'.cq-popup__timer-wrap\');\
  if (!timerWrap) return;\
  var endTime = new Date(timerEndDate).getTime();\
  if (!timerEndDate || isNaN(endTime)) {\
    timerWrap.classList.add(\'hidden\');\
    return;\
  }\
  var daysEl = document.querySelector(\'.cq-popup__timer-value--days\');\
  var hoursEl = document.querySelector(\'.cq-popup__timer-value--hours\');\
  var minutesEl = document.querySelector(\'.cq-popup__timer-value--minutes\');\
  var secondsEl = document.querySelector(\'.cq-popup__timer-value--seconds\');\
  var countdownInterval;\
  function tick() {\
    var diff = endTime - Date.now();\
    if (diff <= 0) {\
      clearInterval(countdownInterval);\
      timerWrap.classList.add(\'hidden\');\
      return;\
    }\
    var totalSeconds = Math.floor(diff / 1000);\
    var days = Math.floor(totalSeconds / 86400);\
    var hours = Math.floor(totalSeconds % 86400 / 3600);\
    var minutes = Math.floor(totalSeconds % 3600 / 60);\
    var seconds = totalSeconds % 60;\
    daysEl.textContent = days + \' \' + pluralizeDays(days);\
    hoursEl.textContent = pad2(hours);\
    minutesEl.textContent = pad2(minutes);\
    secondsEl.textContent = pad2(seconds);\
  }\
  tick();\
  countdownInterval = setInterval(tick, 1000);\
})();\
(function () {\
  var phoneInput = document.getElementById(\'cq-popup-phone\');\
  if (!phoneInput || !window.intlTelInput) return;\
  var iti = window.intlTelInput(phoneInput, {\
    initialCountry: \'ru\',\
    preferredCountries: [\'ru\'],\
    autoPlaceholder: \'aggressive\',\
    formatOnDisplay: true,\
    utilsScript: \'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.14/build/js/utils.js\'\
  });\
  var ctaBtn = document.querySelector(\'.cq-popup__cta--form\');\
  ctaBtn.addEventListener(\'click\', function () {\
    if (!phoneInput.value.trim() || !iti.isValidNumber()) {\
      phoneInput.classList.add(\'cq-popup__field-input--error\');\
      return;\
    }\
    phoneInput.classList.remove(\'cq-popup__field-input--error\');\
    carrotquest.identify({\
      \'$phone\': iti.getNumber()\
    });\
    carrotquest.replied();\
    document.querySelector(\'.cq-popup__view--form\').classList.add(\'hidden\');\
    document.querySelector(\'.cq-popup__view--thanks\').classList.remove(\'hidden\');\
  });\
  phoneInput.addEventListener(\'input\', function () {\
    phoneInput.classList.remove(\'cq-popup__field-input--error\');\
  });\
})();\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
  }\
});\
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {\
  item.addEventListener("click", carrotquest.close);\
});\
document.querySelector(".cq-popup__cta--thanks").addEventListener("click", function () {\
  carrotquest.clicked();\
  carrotquest.track(cqpopup_name + \' - Клик по кнопке в отбивке\');\
});</script>\
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