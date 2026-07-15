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
  padding-right: 20px;\
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
  background-position: center;\
  background-size: cover;\
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
  width: 8px;\
  height: 8px;\
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
  border-radius: 4px;\
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
.cq-popup__ad-wrap {\
  position: relative;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  gap: 8px;\
  cursor: pointer;\
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
.cq-popup__ad-tooltip {\
  position: absolute;\
  bottom: calc(100% + 15px);\
  right: 0;\
  z-index: 2;\
  width: 220px;\
  padding: 10px 12px;\
  background: #ffffff;\
  color: #121212;\
  font-weight: 400;\
  font-size: 12px;\
  line-height: 1.3;\
  border-radius: 12px;\
  opacity: 0;\
  visibility: hidden;\
  -webkit-transform: translateY(4px);\
          transform: translateY(4px);\
  transition: opacity 0.2s ease, visibility 0.2s ease, -webkit-transform 0.2s ease;\
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;\
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease, -webkit-transform 0.2s ease;\
  pointer-events: none;\
}\
\
.cq-popup__ad-tooltip::before {\
  content: "";\
  position: absolute;\
  top: 100%;\
  right: 16px;\
  border: 6px solid transparent;\
  border-top-color: #ffffff;\
}\
\
.cq-popup__ad-wrap:hover .cq-popup__ad-tooltip,\
.cq-popup__ad-wrap--active .cq-popup__ad-tooltip {\
  opacity: 1;\
  visibility: visible;\
  -webkit-transform: translateY(0);\
          transform: translateY(0);\
  pointer-events: auto;\
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
.cq-popup__scratch-wrap {\
  padding: 0 32px 12px;\
}\
\
.scratch-container {\
  position: relative;\
  width: 470px;\
  max-width: 100%;\
  margin: 0 auto;\
  height: 125px;\
  cursor: crosshair;\
  -webkit-user-select: none;\
      -ms-user-select: none;\
          user-select: none;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.scratch-container.win {\
  cursor: pointer;\
}\
\
.hidden-content {\
  position: absolute;\
  inset: 0;\
  border-radius: 15px;\
  overflow: hidden;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  color: white;\
  font-size: 24px;\
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);\
}\
\
.hidden-content img {\
  width: 100%;\
  height: 100%;\
}\
\
canvas {\
  position: absolute;\
  inset: 0;\
  width: 100%;\
  height: 100%;\
  border-radius: 8px;\
  -ms-touch-action: none;\
      touch-action: none;\
}\
\
.win-message {\
  position: absolute;\
  inset: 0;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  color: #fff;\
  font-size: 26px;\
  font-weight: bold;\
  opacity: 0;\
  transition: opacity 0.5s ease;\
  pointer-events: none;\
  border-radius: 8px;\
  overflow: hidden;\
  cursor: pointer;\
}\
\
.win-message img {\
  width: 100%;\
  height: 100%;\
}\
\
.win-message.show {\
  opacity: 1;\
}\
\
.description {\
  font-size: 14px;\
  color: #929292;\
  line-height: 20px;\
  text-align: center;\
  letter-spacing: 0;\
  font-weight: 400;\
}\
\
.link {\
  font-size: 16px;\
  color: #171B20;\
  line-height: 20px;\
  letter-spacing: 0;\
  text-align: center;\
  font-weight: 500;\
  display: block;\
  text-decoration: underline;\
  cursor: pointer;\
}\
\
.mob {\
  display: none;\
}\
\
.cq-popup__scratch-hint-wrap {\
  padding: 0 32px 28px;\
}\
\
.cq-popup__scratch-link-wrap {\
  padding: 0 32px 23px;\
}\
\
.cq-popup__btn-wrap {\
  display: none;\
  -ms-flex-align: center;\
      align-items: center;\
  gap: 14px;\
  padding: 0 32px 32px;\
}\
\
body.cq-popup__is-revealed .cq-popup__btn-wrap {\
  display: -ms-flexbox;\
  display: flex;\
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
  -ms-flex: 1 0 0px;\
      flex: 1 0 0;\
  cursor: pointer;\
}\
\
.cq-popup__btn-outline {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  background: transparent;\
  color: #121212;\
  font-family: "Onest", sans-serif;\
  font-weight: 500;\
  font-size: 18px;\
  line-height: normal;\
  text-align: center;\
  text-decoration: none;\
  border: 2px solid #121212;\
  border-radius: 100px;\
  padding: 18px 0px;\
  cursor: pointer;\
}\
\
.cq-popup__tg-btn {\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  width: 200px;\
}\
\
.cq-popup__next-btn,\
.cq-popup__back-btn {\
  display: none;\
}\
\
.cq-popup__back-btn {\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  width: 110px;\
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
  height: 20px;\
  background: #121212;\
  border-radius: 2px;\
  margin-left: -1px;\
  margin-top: -10px;\
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
@media (max-width: 610px) {\
  .mob {\
    display: block;\
  }\
\
  .description {\
    font-size: 12px;\
  }\
\
  .pc {\
    display: none;\
  }\
\
  .wrapper__body {\
    -ms-flex-align: end;\
        align-items: flex-end;\
    -ms-flex-pack: center;\
        justify-content: center;\
    padding-right: 0;\
  }\
\
  .cq-dot {\
    width: 8px;\
    height: 8px;\
  }\
\
  .cq-dot--active {\
    width: 20px;\
    border-radius: 4px;\
    background: #121212;\
  }\
\
  .cq-popup__master {\
    -ms-flex-direction: column-reverse;\
        flex-direction: column-reverse;\
    -ms-flex-align: end;\
        align-items: flex-end;\
    gap: 12px;\
    width: 100%;\
    margin: 0;\
  }\
\
  .cq-popup__body {\
    width: 100%;\
    border-radius: 40px 40px 0 0;\
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
    height: 31px;\
  }\
\
  .cq-popup__timer-value {\
    font-size: 20px;\
  }\
\
  .cq-popup__scratch-wrap {\
    padding: 0 0 10px;\
  }\
\
  .scratch-container {\
    width: 376px;\
    height: 100px;\
  }\
\
  body.cq-popup__is-revealed .cq-popup__scratch-hint-wrap {\
    padding-bottom: 6px;\
  }\
\
  .cq-popup__btn-wrap {\
    display: -ms-flexbox;\
    display: flex;\
    gap: 8px;\
    padding: 0 32px 32px;\
  }\
\
  .cq-popup__cta {\
    font-size: 16px;\
  }\
\
  body:not(.cq-popup__is-revealed) .cq-popup__cta {\
    display: none;\
  }\
\
  body:not(.cq-popup__is-revealed) .cq-popup__back-btn {\
    width: 100%;\
  }\
\
  .cq-popup__btn-outline {\
    font-size: 16px;\
  }\
\
  .cq-popup__next-btn,\
  .cq-popup__back-btn {\
    display: -ms-flexbox;\
    display: flex;\
    width: 100%;\
  }\
\
  .cq-popup__back-btn {\
    width: 110px;\
  }\
\
  .cq-popup__close {\
    width: 25px;\
    height: 25px;\
  }\
\
  .cq-popup__close::before,\
  .cq-popup__close::after {\
    width: 1px;\
    height: 16px;\
    margin-left: -0.5px;\
    margin-top: -8px;\
  }\
\
  body.cq-popup__is-step-1 .cq-popup__step--2 {\
    display: none;\
  }\
\
  body.cq-popup__is-step-1 .cq-popup__back-btn,\
  body.cq-popup__is-step-1 .cq-popup__cta {\
    display: none;\
  }\
\
  body.cq-popup__is-step-2 .cq-popup__step--1 {\
    display: none;\
  }\
\
  body.cq-popup__is-step-2 .cq-popup__next-btn {\
    display: none;\
  }\
}</style>\
</head>\
\
<body class="cq-popup__is-step-1">\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body">\
    <div class="cq-popup__master">\
        <div class="cq-popup__body">\
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
                        <div class="cq-popup__ad-wrap">\
                            <div class="cq-popup__ad-content">\
                                <span class="cq-popup__ad-label "></span>\
                            </div>\
                            <div class="cq-popup__ad-dots ">\
                                <div class="cq-popup__ad-dot"></div>\
                                <div class="cq-popup__ad-dot"></div>\
                                <div class="cq-popup__ad-dot"></div>\
                            </div>\
                            <div class="cq-popup__ad-tooltip">ООО «МПСТАТС ПРОДВИЖЕНИЕ» ИНН 7804713205 erid:2SDnjeWiL5Y</div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <div class="cq-popup__step cq-popup__step--1">\
                <div class="cq-popup__headline-wrap">\
                    <p class="cq-popup__headline"></p>\
                </div>\
                <div class="cq-popup__paragraph-wrap">\
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
            </div>\
            <div class="cq-popup__step cq-popup__step--2">\
                <div class="cq-popup__scratch-wrap">\
                    <div class="scratch-container">\
                        <div class="hidden-content">\
                            <img src="https://files.carrotquest.app/message-images/57576/57576-1784015336791-dm6m3zwp.png" alt="" class="pc win_img">\
                            <img src="https://files.carrotquest.app/message-images/57576/57576-1784016522030-t0bneh27.png" alt="" class="mob win_img">\
                        </div>\
                        <canvas></canvas>\
                        <div class="win-message">\
                            <img src="https://files.carrotquest.app/message-images/57576/57576-1784015336791-dm6m3zwp.png" alt="" class="pc win_img">\
                            <img src="https://files.carrotquest.app/message-images/57576/57576-1784016522030-t0bneh27.png" alt="" class="mob win_img">\
                        </div>\
                    </div>\
                </div>\
                <div class="cq-popup__scratch-hint-wrap">\
                    <p class="description start"></p>\
                    <p class="description end hidden"></p>\
                </div>\
                <div class="cq-popup__scratch-link-wrap mob hidden">\
                    <a href="#" class="link" target="_blank"></a>\
                </div>\
            </div>\
            <div class="cq-popup__btn-wrap">\
                <a class="cq-popup__tg-btn cq-popup__btn-outline pc hidden" target="_blank"></a>\
                <button type="button" class="cq-popup__next-btn cq-popup__btn-outline"></button>\
                <button type="button" class="cq-popup__back-btn cq-popup__btn-outline"></button>\
                <a class="cq-popup__cta" target="_blank"></a>\
            </div>\
        </div>\
        <button class="cq-popup__close"></button>\
    </div>\
</div>\
<script>"use strict";\
\
var slides = [\'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png\', \'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png\', \'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png\', \'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png\', \'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png\'];\
var adLabel = \'Реклама\';\
var headline = \'Заголовок не более строки\';\
var paragraph = \'Мы обновили работу с фразами, добавили группировку по пресетам и статистику фраз по дням. Теперь ты можешь добавить в отслеживание фразы прямо из ключевых\';\
var ctaText = \'Кнопка\';\
var linkUrl = \'#\';\
var timerEndDate = \'2026-08-01T00:00:00\';\
var timerDurationMinutes = null;\
var scratchHintText = \'Проведите пальцем или курсором по серой области\';\
var scratchDoneText = \'Скопируйте промокод, нажав на иконку справа\';\
var scratchLinkText = \'Отправить промокод в Telegram\';\
var scratchLinkUrl = \'#\';\
var tedEventText = \'Клик по ссылке в Telegram\';\
var tgBtnText = \'Промокод в TG ↗\';\
var nextBtnText = \'Вперед →\';\
var backBtnText = \'← Назад\';\
var promoCode = \'РОКЕТВЖУХ-ВН20\';\
var isMob = top.window.innerWidth < 769;\
var winImgCopiedDesktop = \'https://files.carrotquest.app/message-images/57576/57576-1784015409534-28lfezpd.png\';\
var winImgCopiedMobile = \'https://files.carrotquest.app/message-images/57576/57576-1784016545338-j0mwmntq.png\';\
var winImgCopied = isMob ? winImgCopiedMobile : winImgCopiedDesktop;\
var bgImgDesktop = \'https://files.carrotquest.app/message-images/57576/57576-1784015628747-xjv8ljsw.png\';\
var bgImgMobile = \'https://files.carrotquest.app/message-images/57576/57576-1784016502593-psz5i2dq.png\';\
var bgImg = isMob ? bgImgMobile : bgImgDesktop;\
var bannerBgDesktop = \'https://files.carrotquest.app/message-images/57576/57576-1781856546265-g57t26y9.png\';\
var bannerBgMobile = \'https://files.carrotquest.app/message-images/57576/57576-1783498232833-1twz7nmg.png\';\
var cqpopup_name = "Попап скретч c таймером",\
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
function setTgLink(link) {\
  var tgLink = link;\
  try {\
    tgLink += top.carrotquest.data.user.user_signature.telegram ? \'?start=\' + top.carrotquest.data.user.user_signature.telegram : \'\';\
  } catch (err) {}\
  document.querySelectorAll(\'.link, .cq-popup__tg-btn\').forEach(function (el) {\
    el.href = tgLink;\
  });\
}\
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
  document.querySelector(\'.cq-popup__ad-label\').textContent = adLabel;\
  document.querySelector(\'.cq-popup__headline\').textContent = headline;\
  document.querySelector(\'.cq-popup__paragraph\').textContent = paragraph;\
  document.querySelector(\'.description.start\').textContent = scratchHintText;\
  document.querySelector(\'.description.end\').textContent = scratchDoneText;\
  document.querySelector(\'.link\').textContent = scratchLinkText;\
  document.querySelector(\'.cq-popup__tg-btn\').textContent = tgBtnText;\
  setTgLink(scratchLinkUrl);\
  document.querySelector(\'.cq-popup__next-btn\').textContent = nextBtnText;\
  document.querySelector(\'.cq-popup__back-btn\').textContent = backBtnText;\
  var cta = document.querySelector(\'.cq-popup__cta\');\
  cta.textContent = ctaText;\
  cta.href = linkUrl;\
}\
function setBannerBg() {\
  var bannerBg = document.querySelector(\'.cq-popup__banner-bg\');\
  bannerBg.style.backgroundImage = \'url(\' + (isMob ? bannerBgMobile : bannerBgDesktop) + \')\';\
}\
render();\
setBannerBg();\
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
  var endTime = timerDurationMinutes ? Date.now() + timerDurationMinutes * 60 * 1000 : new Date(timerEndDate).getTime();\
  if (!endTime || isNaN(endTime)) {\
    timerWrap.classList.add(\'hidden\');\
    return;\
  }\
  var daysEl = document.querySelector(\'.cq-popup__timer-value--days\');\
  var hoursEl = document.querySelector(\'.cq-popup__timer-value--hours\');\
  var minutesEl = document.querySelector(\'.cq-popup__timer-value--minutes\');\
  var secondsEl = document.querySelector(\'.cq-popup__timer-value--seconds\');\
  var countdownInterval;\
  if (timerDurationMinutes) {\
    var daysItem = daysEl.closest(\'.cq-popup__timer-item\');\
    var hoursItem = hoursEl.closest(\'.cq-popup__timer-item\');\
    daysItem.classList.add(\'hidden\');\
    hoursItem.classList.add(\'hidden\');\
    daysItem.nextElementSibling.classList.add(\'hidden\');\
    hoursItem.nextElementSibling.classList.add(\'hidden\');\
  }\
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
  var scratchContainer = document.querySelector(\'.scratch-container\');\
  var canvas = document.querySelector(\'.scratch-container canvas\');\
  var winMessage = document.querySelector(\'.win-message\');\
  var brushSize = 20;\
  var isDrawing = false;\
  var revealed = false;\
  var ctx = canvas.getContext(\'2d\');\
  function drawCover() {\
    ctx.globalCompositeOperation = \'source-over\';\
    var bgImage = new Image();\
    bgImage.crossOrigin = \'anonymous\';\
    bgImage.onload = function () {\
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);\
    };\
    bgImage.onerror = function () {\
      console.error(\'Не удалось загрузить фоновое изображение\');\
      ctx.fillStyle = \'#999\';\
      ctx.fillRect(0, 0, canvas.width, canvas.height);\
    };\
    bgImage.src = bgImg;\
  }\
  function resizeCanvas() {\
    canvas.width = scratchContainer.clientWidth;\
    canvas.height = scratchContainer.clientHeight;\
    drawCover();\
  }\
  function getPosition(e) {\
    var rect = canvas.getBoundingClientRect();\
    var x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;\
    var y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;\
    return {\
      x: x,\
      y: y\
    };\
  }\
  function erase(x, y) {\
    ctx.globalCompositeOperation = \'destination-out\';\
    ctx.beginPath();\
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);\
    ctx.fill();\
  }\
  function getClearedPercent() {\
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\
    var cleared = 0;\
    for (var i = 3; i < imageData.data.length; i += 4) {\
      if (imageData.data[i] === 0) cleared++;\
    }\
    return cleared / (canvas.width * canvas.height) * 100;\
  }\
  function startDraw(e) {\
    e.preventDefault();\
    isDrawing = true;\
    var pos = getPosition(e);\
    erase(pos.x, pos.y);\
  }\
  function draw(e) {\
    if (!isDrawing) return;\
    e.preventDefault();\
    var pos = getPosition(e);\
    erase(pos.x, pos.y);\
    var percent = getClearedPercent();\
    if (percent > 50 && !revealed) {\
      revealed = true;\
      showWinElements();\
      carrotquest.track(\'Коммуникации: Получил промокод - \' + cqpopup_name);\
    }\
  }\
  function copyOnClick(element, code) {\
    [\'click\', \'touchend\'].forEach(function (eventType) {\
      element.addEventListener(eventType, function (e) {\
        e.preventDefault();\
        var success = function success() {\
          document.querySelectorAll(\'.win-message img\').forEach(function (item) {\
            item.src = winImgCopied;\
          });\
          document.querySelector(\'.description.end\').textContent = \'Промокод скопирован\';\
          carrotquest.track(\'Коммуникации: Скопировал промокод - \' + cqpopup_name);\
        };\
        var input = document.createElement(\'input\');\
        input.value = code;\
        input.style.position = \'fixed\';\
        input.style.top = \'0\';\
        input.style.opacity = \'0\';\
        document.body.appendChild(input);\
        input.focus();\
        input.setSelectionRange(0, 99999);\
        try {\
          if (document.execCommand(\'copy\')) success();\
        } catch (err) {\
          console.log(\'Ошибка копирования\', err);\
        } finally {\
          document.body.removeChild(input);\
        }\
      });\
    });\
  }\
  function endDraw() {\
    isDrawing = false;\
  }\
  canvas.addEventListener(\'mousedown\', startDraw);\
  canvas.addEventListener(\'mousemove\', draw);\
  canvas.addEventListener(\'mouseup\', endDraw);\
  canvas.addEventListener(\'touchstart\', startDraw);\
  canvas.addEventListener(\'touchmove\', draw);\
  canvas.addEventListener(\'touchend\', endDraw);\
  document.addEventListener(\'cq-popup:step-2\', resizeCanvas);\
  function showWinElements() {\
    winMessage.classList.add(\'show\');\
    scratchContainer.classList.add(\'win\');\
    document.body.classList.add(\'cq-popup__is-revealed\');\
    document.querySelector(\'.description.start\').classList.add(\'hidden\');\
    document.querySelector(\'.description.end\').classList.remove(\'hidden\');\
    document.querySelector(\'.cq-popup__scratch-link-wrap\').classList.remove(\'hidden\');\
    document.querySelector(\'.cq-popup__tg-btn\').classList.remove(\'hidden\');\
    var button = document.querySelector(\'.scratch-container.win\');\
    setTimeout(function () {\
      copyOnClick(button, promoCode);\
    }, 300);\
  }\
  resizeCanvas();\
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
document.querySelector(".cq-popup__cta").addEventListener("click", function () {\
  carrotquest.clicked();\
});\
document.querySelector(".link").addEventListener("click", function () {\
  carrotquest.clicked();\
  carrotquest.track(cqpopup_name + \' - \' + tedEventText);\
});\
document.querySelector(".cq-popup__tg-btn").addEventListener("click", function () {\
  carrotquest.clicked();\
  carrotquest.track(cqpopup_name + \' - \' + tedEventText);\
});\
document.querySelector(".cq-popup__next-btn").addEventListener("click", function () {\
  document.body.classList.remove("cq-popup__is-step-1");\
  document.body.classList.add("cq-popup__is-step-2");\
  document.dispatchEvent(new Event(\'cq-popup:step-2\'));\
});\
document.querySelector(".cq-popup__back-btn").addEventListener("click", function () {\
  document.body.classList.remove("cq-popup__is-step-2");\
  document.body.classList.add("cq-popup__is-step-1");\
});\
(function () {\
  var adWrap = document.querySelector(".cq-popup__ad-wrap");\
  adWrap.addEventListener("click", function (event) {\
    event.stopPropagation();\
    adWrap.classList.toggle("cq-popup__ad-wrap--active");\
  });\
  document.addEventListener("click", function () {\
    adWrap.classList.remove("cq-popup__ad-wrap--active");\
  });\
})();</script>\
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