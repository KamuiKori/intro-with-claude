var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Inter", sans-serif;\
}\
\
html,\
body {\
  height: 100%;\
  overflow: hidden;\
}\
\
a {\
  color: inherit;\
}\
\
.cq-popup__bg {\
  position: fixed;\
  inset: 0;\
  background: rgba(51, 51, 51, 0.5);\
  backdrop-filter: blur(5px);\
  -webkit-backdrop-filter: blur(5px);\
  z-index: 1;\
}\
\
.quiz-wrapper {\
  position: fixed;\
  inset: 0;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  z-index: 2;\
  padding: 15px;\
  overflow-y: auto;\
}\
\
.quiz-card {\
  background: #0a2341;\
  width: 100%;\
  max-width: 1010px;\
  position: relative;\
  padding: 35px 80px 70px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.quiz-close {\
  position: absolute;\
  top: 35px;\
  right: 35px;\
  width: 15px;\
  height: 15px;\
  cursor: pointer;\
  background: none;\
  border: none;\
  padding: 0;\
  z-index: 10;\
}\
\
.quiz-close::before,\
.quiz-close::after {\
  content: "";\
  position: absolute;\
  top: 50%;\
  left: 50%;\
  width: 15px;\
  height: 1px;\
  background: #ffffff;\
}\
\
.quiz-close::before {\
  -webkit-transform: translate(-50%, -50%) rotate(45deg);\
          transform: translate(-50%, -50%) rotate(45deg);\
}\
\
.quiz-close::after {\
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\
          transform: translate(-50%, -50%) rotate(-45deg);\
}\
\
.quiz-step {\
  display: none;\
}\
\
.quiz-step.active {\
  display: block;\
}\
\
.quiz-subtitle {\
  font-size: 14px;\
  font-weight: 500;\
  color: #ffffff;\
  text-transform: uppercase;\
  line-height: 1.25;\
  margin-bottom: 48px;\
}\
\
.quiz-step-header {\
  margin-bottom: 48px;\
}\
\
.quiz-step-label {\
  font-size: 14px;\
  font-weight: 500;\
  color: rgba(255, 255, 255, 0.4);\
  text-transform: uppercase;\
  line-height: 1.25;\
  margin-bottom: 6px;\
}\
\
.quiz-step-question {\
  font-size: 24px;\
  font-weight: 400;\
  color: #ffffff;\
  line-height: 1.1;\
}\
\
.quiz-step-desc {\
  font-size: 14px;\
  font-weight: 400;\
  color: #ffffff;\
  line-height: 1.25;\
  margin-top: 16px;\
  max-width: 511px;\
}\
\
.quiz-step-header--contacts {\
  margin-bottom: 35px;\
}\
\
.quiz-step-header--contacts .quiz-step-question {\
  max-width: 511px;\
}\
\
.quiz-options {\
  margin-bottom: 35px;\
}\
\
.quiz-options--grid {\
  display: grid;\
  grid-template-columns: 1fr 1fr;\
  gap: 8px;\
}\
\
.quiz-option {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
  background: #243d5b;\
  border-radius: 6px;\
  padding: 12px 20px;\
  cursor: pointer;\
  min-height: 42px;\
}\
\
.quiz-option input[type=checkbox] {\
  display: none;\
}\
\
.quiz-option .option-text {\
  font-size: 12px;\
  font-weight: 500;\
  color: #ffffff;\
  text-transform: uppercase;\
  line-height: 1.25;\
  -ms-flex: 1;\
      flex: 1;\
}\
\
.quiz-option .quiz-checkbox {\
  width: 18px;\
  height: 18px;\
  border: 1.5px solid rgba(255, 255, 255, 0.2);\
  border-radius: 3px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  margin-left: 12px;\
  transition: background 0.15s, border-color 0.15s;\
}\
\
.quiz-option .quiz-checkbox::after {\
  content: "";\
  display: none;\
  width: 7px;\
  height: 4px;\
  border-left: 1.5px solid #0a2341;\
  border-bottom: 1.5px solid #0a2341;\
  -webkit-transform: rotate(-45deg) translateY(-1px);\
          transform: rotate(-45deg) translateY(-1px);\
}\
\
.quiz-option input:checked ~ .quiz-checkbox {\
  background: #ffffff;\
  border-color: #ffffff;\
}\
\
.quiz-option input:checked ~ .quiz-checkbox::after {\
  display: block;\
}\
\
.quiz-option--full {\
  grid-column: 1/-1;\
}\
\
.quiz-actions {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  gap: 8px;\
}\
\
.quiz-actions--center {\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.btn-arrow {\
  display: inline-block;\
  width: 12px;\
  height: 12px;\
  position: relative;\
  overflow: hidden;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.btn-arrow::before,\
.btn-arrow::after {\
  content: "";\
  position: absolute;\
  top: 50%;\
  width: 7px;\
  height: 1px;\
  background: currentColor;\
}\
\
.btn-arrow::before {\
  -webkit-transform: translateY(-50%) rotate(40deg);\
          transform: translateY(-50%) rotate(40deg);\
  -webkit-transform-origin: right center;\
          transform-origin: right center;\
}\
\
.btn-arrow::after {\
  -webkit-transform: translateY(-50%) rotate(-40deg);\
          transform: translateY(-50%) rotate(-40deg);\
  -webkit-transform-origin: right center;\
          transform-origin: right center;\
}\
\
.btn-arrow--right::before,\
.btn-arrow--right::after {\
  right: 0;\
}\
\
.btn-arrow--right::before {\
  -webkit-transform: translateY(calc(-50% - 2px)) rotate(40deg);\
          transform: translateY(calc(-50% - 2px)) rotate(40deg);\
  -webkit-transform-origin: right center;\
          transform-origin: right center;\
}\
\
.btn-arrow--right::after {\
  -webkit-transform: translateY(calc(-50% + 2px)) rotate(-40deg);\
          transform: translateY(calc(-50% + 2px)) rotate(-40deg);\
  -webkit-transform-origin: right center;\
          transform-origin: right center;\
}\
\
.btn-arrow--left {\
  -webkit-transform: scaleX(-1);\
          transform: scaleX(-1);\
}\
\
.btn-arrow--left::before,\
.btn-arrow--left::after {\
  right: 0;\
}\
\
.btn-arrow--left::before {\
  -webkit-transform: translateY(calc(-50% - 2px)) rotate(40deg);\
          transform: translateY(calc(-50% - 2px)) rotate(40deg);\
  -webkit-transform-origin: right center;\
          transform-origin: right center;\
}\
\
.btn-arrow--left::after {\
  -webkit-transform: translateY(calc(-50% + 2px)) rotate(-40deg);\
          transform: translateY(calc(-50% + 2px)) rotate(-40deg);\
  -webkit-transform-origin: right center;\
          transform-origin: right center;\
}\
\
.quiz-btn-secondary {\
  display: -ms-inline-flexbox;\
  display: inline-flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  gap: 8px;\
  height: 42px;\
  width: 195px;\
  padding: 8px 30px;\
  border: 1px solid rgba(255, 255, 255, 0.2);\
  border-radius: 5px;\
  background: transparent;\
  color: #ffffff;\
  font-size: 12px;\
  font-family: "Inter", sans-serif;\
  font-weight: 400;\
  cursor: pointer;\
  transition: border-color 0.2s;\
}\
\
.quiz-btn-secondary:hover {\
  border-color: rgba(255, 255, 255, 0.5);\
}\
\
.quiz-btn-primary {\
  display: -ms-inline-flexbox;\
  display: inline-flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  gap: 8px;\
  height: 42px;\
  min-width: 197px;\
  padding: 8px 30px;\
  background: #ffffff;\
  border: none;\
  border-radius: 5px;\
  color: #0a2341;\
  font-size: 12px;\
  font-family: "Inter", sans-serif;\
  font-weight: 400;\
  cursor: pointer;\
  text-decoration: none;\
  transition: opacity 0.2s;\
}\
\
.quiz-btn-primary:hover {\
  opacity: 0.9;\
}\
\
.quiz-btn-primary--full {\
  width: 511px;\
  min-width: unset;\
}\
\
.quiz-form {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  gap: 8px;\
  margin-bottom: 35px;\
}\
\
.quiz-input-wrap {\
  background: #243d5b;\
  border-radius: 6px;\
  padding: 12px 20px;\
  height: 69px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-pack: center;\
      justify-content: center;\
  gap: 8px;\
}\
\
.quiz-input-label {\
  font-size: 12px;\
  font-weight: 500;\
  color: #ffffff;\
  text-transform: uppercase;\
  line-height: 1.25;\
  display: block;\
}\
\
.quiz-input {\
  background: transparent;\
  border: none;\
  outline: none;\
  font-size: 12px;\
  font-weight: 400;\
  color: #ffffff;\
  line-height: 1.25;\
  width: 100%;\
}\
\
.quiz-input::-webkit-input-placeholder {\
  color: #6e829a;\
}\
\
.quiz-input:-ms-input-placeholder {\
  color: #6e829a;\
}\
\
.quiz-input::-ms-input-placeholder {\
  color: #6e829a;\
}\
\
.quiz-input::placeholder {\
  color: #6e829a;\
}\
\
.quiz-privacy {\
  margin-top: 8px;\
}\
\
.quiz-privacy-label {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  gap: 10px;\
  cursor: pointer;\
}\
\
.quiz-privacy-label input[type=checkbox] {\
  display: none;\
}\
\
.quiz-privacy-box {\
  width: 12px;\
  height: 12px;\
  border: 1px solid #ffffff;\
  border-radius: 2px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  margin-top: 2px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  transition: background 0.15s;\
}\
\
.quiz-privacy-box::after {\
  content: "";\
  display: none;\
  width: 6.5px;\
  height: 4px;\
  border-left: 1.5px solid #0a2341;\
  border-bottom: 1.5px solid #0a2341;\
  -webkit-transform: rotate(-45deg) translateY(-1px);\
          transform: rotate(-45deg) translateY(-1px);\
}\
\
.quiz-privacy-check:checked ~ .quiz-privacy-box {\
  background: #ffffff;\
}\
\
.quiz-privacy-check:checked ~ .quiz-privacy-box::after {\
  display: block;\
}\
\
.quiz-privacy-text {\
  font-size: 12px;\
  font-weight: 400;\
  color: #ffffff;\
  line-height: 1.25;\
}\
\
.quiz-privacy-text a {\
  text-decoration: underline;\
  color: #ffffff;\
}\
\
.quiz-thankyou {\
  text-align: center;\
  margin-bottom: 35px;\
  padding-top: 60px;\
}\
\
.quiz-thankyou-title {\
  font-size: 24px;\
  font-weight: 400;\
  color: #ffffff;\
  line-height: 1.1;\
  margin-bottom: 16px;\
  max-width: 511px;\
  margin-left: auto;\
  margin-right: auto;\
}\
\
.quiz-thankyou-text {\
  font-size: 14px;\
  font-weight: 400;\
  color: #ffffff;\
  line-height: 1.25;\
  max-width: 511px;\
  margin-left: auto;\
  margin-right: auto;\
}\
\
.hidden {\
  display: none !important;\
}\
\
@media (max-width: 768px) {\
  .quiz-card {\
    max-width: 335px;\
    padding: 30px 20px 30px 40px;\
  }\
\
  .quiz-close {\
    top: 15px;\
    right: 15px;\
    width: 10px;\
    height: 10px;\
  }\
\
  .quiz-close::before,\
  .quiz-close::after {\
    width: 10px;\
  }\
\
  .quiz-subtitle {\
    margin-bottom: 30px;\
    font-size: 12px;\
  }\
\
  .quiz-step-question {\
    font-size: 18px;\
  }\
\
  .quiz-options--grid {\
    grid-template-columns: 1fr;\
  }\
\
  .quiz-option--full {\
    grid-column: auto;\
  }\
\
  .quiz-btn-secondary {\
    width: 143px;\
    padding: 8px 15px;\
  }\
\
  .quiz-btn-primary {\
    min-width: 144px;\
    padding: 8px 15px;\
  }\
\
  .quiz-btn-primary--full {\
    width: 295px;\
  }\
\
  .quiz-step-desc {\
    max-width: 100%;\
  }\
\
  .quiz-thankyou {\
    padding-top: 30px;\
  }\
\
  .quiz-thankyou-title {\
    font-size: 18px;\
  }\
}</style>\
</head>\
<body>\
<div class="cq-popup__bg"></div>\
<div class="quiz-wrapper">\
    <div class="quiz-card">\
        <button class="quiz-close" type="button"></button>\
\
        <div class="quiz-step active" id="step-1">\
            <p class="quiz-subtitle">Ответьте на несколько вопросов и мы подберем для вас идеальную квартиру</p>\
            <div class="quiz-step-header">\
                <p class="quiz-step-label">Шаг 1 из 4: ЗАДАЧА</p>\
                <p class="quiz-step-question">Для кого вы выбираете квартиру?</p>\
            </div>\
            <div class="quiz-options quiz-options--grid">\
                <label class="quiz-option">\
                    <input type="checkbox" name="step1" value="Для себя">\
                    <span class="option-text">Для себя</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
                <label class="quiz-option">\
                    <input type="checkbox" name="step1" value="Для инвестиций">\
                    <span class="option-text">Для инвестиций</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
                <label class="quiz-option">\
                    <input type="checkbox" name="step1" value="Для ребёнка / родителей">\
                    <span class="option-text">Для ребёнка / родителей</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
                <label class="quiz-option">\
                    <input type="checkbox" name="step1" value="Пока просто присматриваюсь">\
                    <span class="option-text">Пока просто присматриваюсь</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
            </div>\
            <div class="quiz-actions">\
                <button class="quiz-btn-secondary" type="button" data-action="close">\
                    <span class="btn-arrow btn-arrow--left"></span>\
                    Назад\
                </button>\
                <button class="quiz-btn-primary" type="button" data-action="next">\
                    <span class="btn-arrow btn-arrow--right"></span>\
                    Далее\
                </button>\
            </div>\
        </div>\
\
        <div class="quiz-step" id="step-2">\
            <p class="quiz-subtitle">Ответьте на несколько вопросов и мы подберем для вас идеальную квартиру</p>\
            <div class="quiz-step-header">\
                <p class="quiz-step-label">Шаг 2 из 4: ПРЕДПОЧТЕНИЯ</p>\
                <p class="quiz-step-question">Что для вас самое важное в будущей квартире?</p>\
            </div>\
            <div class="quiz-options quiz-options--grid">\
                <label class="quiz-option">\
                    <input type="checkbox" name="step2" value="Тишина и уют">\
                    <span class="option-text">Тишина и уют</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
                <label class="quiz-option">\
                    <input type="checkbox" name="step2" value="Красивый вид из окна">\
                    <span class="option-text">Красивый вид из окна</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
                <label class="quiz-option">\
                    <input type="checkbox" name="step2" value="Просторная кухня-гостиная">\
                    <span class="option-text">Просторная кухня-гостиная</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
                <label class="quiz-option">\
                    <input type="checkbox" name="step2" value="Много света">\
                    <span class="option-text">Много света</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
                <label class="quiz-option">\
                    <input type="checkbox" name="step2" value="Удобная планировка">\
                    <span class="option-text">Удобная планировка</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
            </div>\
            <div class="quiz-actions">\
                <button class="quiz-btn-secondary" type="button" data-action="prev">\
                    <span class="btn-arrow btn-arrow--left"></span>\
                    Назад\
                </button>\
                <button class="quiz-btn-primary" type="button" data-action="next">\
                    <span class="btn-arrow btn-arrow--right"></span>\
                    Далее\
                </button>\
            </div>\
        </div>\
\
        <div class="quiz-step" id="step-3">\
            <p class="quiz-subtitle">Ответьте на несколько вопросов и мы подберем для вас идеальную квартиру</p>\
            <div class="quiz-step-header">\
                <p class="quiz-step-label">Шаг 3 из 4: БЮДЖЕТ</p>\
                <p class="quiz-step-question">В каком бюджете вы рассматриваете квартиру?</p>\
            </div>\
            <div class="quiz-options quiz-options--grid">\
                <label class="quiz-option">\
                    <input type="checkbox" name="step3" value="До 6 млн">\
                    <span class="option-text">До 6 млн</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
                <label class="quiz-option">\
                    <input type="checkbox" name="step3" value="6–8 млн">\
                    <span class="option-text">6–8 млн</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
                <label class="quiz-option">\
                    <input type="checkbox" name="step3" value="8–10 млн">\
                    <span class="option-text">8–10 млн</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
                <label class="quiz-option">\
                    <input type="checkbox" name="step3" value="10+ млн">\
                    <span class="option-text">10+ млн</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
                <label class="quiz-option quiz-option--full">\
                    <input type="checkbox" name="step3" value="Нужна ипотека / помощь с расчётом">\
                    <span class="option-text">Нужна ипотека / помощь с расчётом</span>\
                    <span class="quiz-checkbox"></span>\
                </label>\
            </div>\
            <div class="quiz-actions">\
                <button class="quiz-btn-secondary" type="button" data-action="prev">\
                    <span class="btn-arrow btn-arrow--left"></span>\
                    Назад\
                </button>\
                <button class="quiz-btn-primary" type="button" data-action="next">\
                    <span class="btn-arrow btn-arrow--right"></span>\
                    Далее\
                </button>\
            </div>\
        </div>\
\
        <div class="quiz-step" id="step-4">\
            <div class="quiz-step-header quiz-step-header--contacts">\
                <p class="quiz-step-label">Шаг 4 из 4: КОНТАКТЫ</p>\
                <p class="quiz-step-question">Мы подберем для вас лучшие варианты квартир</p>\
                <p class="quiz-step-desc">На основе ваших ответов мы уже подобрали вам несколько квартир, которые подходят именно вам. Готовы показать планировки, цены и лучшие варианты по вашему бюджету.</p>\
            </div>\
            <div class="quiz-form">\
                <div class="quiz-input-wrap">\
                    <label class="quiz-input-label" for="quiz-name">ИМЯ</label>\
                    <input id="quiz-name" class="quiz-input" type="text" name="name" placeholder="Иван">\
                </div>\
                <div class="quiz-input-wrap">\
                    <label class="quiz-input-label" for="quiz-phone">ТЕЛЕФОН</label>\
                    <input id="quiz-phone" class="quiz-input" type="tel" name="phone" placeholder="+7 (999) 999-99-99">\
                </div>\
                <div class="quiz-input-wrap">\
                    <label class="quiz-input-label" for="quiz-email">E-MAIL</label>\
                    <input id="quiz-email" class="quiz-input" type="email" name="email" placeholder="example@mail.ru">\
                </div>\
                <div class="quiz-privacy">\
                    <label class="quiz-privacy-label">\
                        <input type="checkbox" id="quiz-privacy-check" class="quiz-privacy-check">\
                        <span class="quiz-privacy-box"></span>\
                        <span class="quiz-privacy-text">Я принимаю условия <a href="https://atlasdevelopment.su/policy" target="_blank">политики конфиденциальности</a> и даю согласие на <a href="https://atlasdevelopment.su/personal-agree" target="_blank">обработку персональных данных</a></span>\
                    </label>\
                </div>\
            </div>\
            <div class="quiz-actions">\
                <button class="quiz-btn-primary" type="button" data-action="submit">\
                    <span class="btn-arrow btn-arrow--right"></span>\
                    Оставить заявку\
                </button>\
            </div>\
        </div>\
\
        <div class="quiz-step" id="step-5">\
            <div class="quiz-thankyou">\
                <p class="quiz-thankyou-title">Спасибо! Ваша заявка успешно отправлена.</p>\
                <p class="quiz-thankyou-text">Больше о наших проектах и возможностях партнерства — в боте Atlas.</p>\
            </div>\
            <div class="quiz-actions quiz-actions--center">\
                <a class="quiz-btn-primary quiz-btn-primary--full" href="https://t.me/AtlasDevelopmentBot" target="_blank">\
                    <span class="btn-arrow btn-arrow--right"></span>\
                    Перейти в Telegram-бот\
                </a>\
            </div>\
        </div>\
    </div>\
</div>\
<script>"use strict";\
\
var cqpopup_name = \'20.1 Квиз\',\
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
        command: \'carrotquest.animationPopup\',\
        id: \'{{ sending_id }}\',\
        cqpopup_name: cqpopup_name\
      };\
      top.postMessage(data, \'*\');\
    },\
    close: function close() {\
      var data = {\
        command: \'carrotquest.closePopup\',\
        id: \'{{ sending_id }}\'\
      };\
      top.postMessage(data, \'*\');\
    },\
    replied: function replied() {\
      this.trackMessageInteraction(\'{{ sending_id }}\', \'replied\');\
      this.track(\'Ответил в попап\');\
      this.track(\'Коммуникации: Ответил на сообщение - \' + cqpopup_name);\
    },\
    clicked: function clicked() {\
      this.trackMessageInteraction(\'{{ sending_id }}\', \'clicked\');\
      this.track(\'Перешел по ссылке в попапе\');\
      this.track(\'Коммуникации: Перешел по ссылке в сообщении - \' + cqpopup_name);\
    },\
    read: function read() {\
      this.trackMessageInteraction(\'{{ sending_id }}\', \'read\');\
      this.track(\'Прочитал попап\');\
      this.track(\'Коммуникации: Прочитано сообщение - \' + cqpopup_name);\
    }\
  };\
document.addEventListener(\'readystatechange\', function () {\
  if (document.readyState === \'complete\') {\
    carrotquest.read();\
    carrotquest.animation();\
  }\
});\
var currentStep = 1;\
var totalSteps = 4;\
var answers = {};\
var stepQuestions = {\
  1: \'Для кого вы выбираете квартиру?\',\
  2: \'Что для вас самое важное в будущей квартире?\',\
  3: \'В каком бюджете вы рассматриваете квартиру?\'\
};\
function showStep(stepNum) {\
  document.querySelectorAll(\'.quiz-step\').forEach(function (el) {\
    el.classList.remove(\'active\');\
  });\
  var target = document.getElementById(\'step-\' + stepNum);\
  if (target) {\
    target.classList.add(\'active\');\
  }\
  currentStep = stepNum;\
}\
function getCheckedValues(stepNum) {\
  var checked = document.querySelectorAll(\'#step-\' + stepNum + \' input[type="checkbox"]:checked\');\
  return Array.from(checked).map(function (el) {\
    return el.value;\
  });\
}\
function saveAnswers(stepNum) {\
  var vals = getCheckedValues(stepNum);\
  if (vals.length > 0) {\
    answers[\'step\' + stepNum] = vals;\
    var question = stepQuestions[stepNum];\
    if (question) {\
      carrotquest.identify([{\
        op: \'update_or_create\',\
        key: question,\
        value: vals.join(\', \')\
      }]);\
    }\
  }\
}\
document.addEventListener(\'click\', function (e) {\
  var btn = e.target.closest(\'[data-action]\');\
  if (!btn) return;\
  var action = btn.dataset.action;\
  if (action === \'next\') {\
    if (currentStep <= totalSteps) {\
      saveAnswers(currentStep);\
      carrotquest.track(cqpopup_name + \' - Шаг \' + currentStep + \' пройден\', answers);\
      showStep(currentStep + 1);\
    }\
    return;\
  }\
  if (action === \'prev\') {\
    if (currentStep > 1) {\
      showStep(currentStep - 1);\
    }\
    return;\
  }\
  if (action === \'close\') {\
    carrotquest.close();\
    return;\
  }\
  if (action === \'submit\') {\
    var name = document.getElementById(\'quiz-name\').value.trim();\
    var phone = document.getElementById(\'quiz-phone\').value.trim();\
    var email = document.getElementById(\'quiz-email\').value.trim();\
    var privacyChecked = document.getElementById(\'quiz-privacy-check\').checked;\
    if (!name || !phone || !privacyChecked) {\
      return;\
    }\
    var identifyProps = [];\
    if (name) identifyProps.push({\
      op: \'update_or_create\',\
      key: \'$name\',\
      value: name\
    });\
    if (phone) identifyProps.push({\
      op: \'update_or_create\',\
      key: \'$phone\',\
      value: phone\
    });\
    if (email) identifyProps.push({\
      op: \'update_or_create\',\
      key: \'$email\',\
      value: email\
    });\
    carrotquest.identify(identifyProps);\
    carrotquest.replied();\
    carrotquest.track(cqpopup_name + \' - Заявка отправлена\', {\
      name: name,\
      phone: phone,\
      email: email\
    });\
    showStep(5);\
    return;\
  }\
});\
document.addEventListener(\'click\', function (e) {\
  if (e.target.closest(\'.quiz-close\') || e.target.closest(\'.cq-popup__bg\')) {\
    carrotquest.close();\
  }\
});</script>\
</body>\
</html>\
\
';

"use strict";

if (!document.querySelector('[name=CQpopup]')) {
  var iframe = document.createElement('iframe');
  iframe.name = 'CQpopup';
  iframe.id = 'carrot_frame_{{ sending_id }}';
  iframe.frameBorder = 0;
  iframe.style.opacity = '0';
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
  localStorage['cq_popup'] = 'opened';
}