var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <style>@font-face {\
  font-family: "Basis Grotesque Pro";\
  font-weight: 500;\
  src: url("https://sovremennik.ru/packs/media/fonts/BasisGrotesquePro-Medium-3a4f1d525cbb8b808873b7cabf23a2c2.woff2") format("woff2");\
}\
\
@font-face {\
  font-family: "Basis Grotesque Pro";\
  font-weight: 400;\
  src: url("https://sovremennik.ru/packs/media/fonts/BasisGrotesquePro-Regular-fc5973283fa334f121eab2cc2ba8ecc2.woff2") format("woff2");\
}\
\
* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-font-smoothing: antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Basis Grotesque Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;\
}\
\
html,\
body {\
  height: 100%;\
}\
\
body {\
  overflow: hidden;\
  font-family: "Basis Grotesque Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;\
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
  z-index: 0;\
}\
\
.wrapper__body {\
  position: relative;\
  z-index: 1;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  height: 100%;\
  padding: 15px;\
}\
\
.quiz-card {\
  position: relative;\
  background: #efebe1;\
  width: 100%;\
  max-width: 693px;\
  padding: 10px;\
}\
\
.quiz-card::before {\
  content: "";\
  position: absolute;\
  inset: 10px;\
  border: 1px solid #2d2d2b;\
  pointer-events: none;\
  z-index: 0;\
}\
\
.quiz-card--sm {\
  max-width: 693px;\
}\
\
.quiz-card--sm .card-inner {\
  min-height: 200px;\
}\
\
.quiz-card--md {\
  max-width: 693px;\
}\
\
.quiz-card--md .card-inner {\
  min-height: 260px;\
}\
\
.card-inner {\
  position: relative;\
  z-index: 1;\
  padding: 30px;\
}\
\
.card-inner--center {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: center;\
      align-items: center;\
}\
\
.card-close {\
  position: absolute;\
  top: 20px;\
  right: 20px;\
  z-index: 10;\
  width: 16px;\
  height: 16px;\
  background: transparent;\
  border: none;\
  cursor: pointer;\
  padding: 0;\
}\
\
.card-close::before,\
.card-close::after {\
  content: "";\
  position: absolute;\
  top: 50%;\
  left: 0;\
  width: 100%;\
  height: 1.5px;\
  background: #2d2d2b;\
  -webkit-transform-origin: center;\
          transform-origin: center;\
}\
\
.card-close::before {\
  -webkit-transform: translateY(-50%) rotate(45deg);\
          transform: translateY(-50%) rotate(45deg);\
}\
\
.card-close::after {\
  -webkit-transform: translateY(-50%) rotate(-45deg);\
          transform: translateY(-50%) rotate(-45deg);\
}\
\
.quiz-title {\
  font-size: 24px;\
  font-weight: 700;\
  line-height: 1.2;\
  color: #2d2d2b;\
  text-transform: uppercase;\
  letter-spacing: 0.02em;\
  margin-bottom: 16px;\
  text-align: center;\
}\
\
.quiz-subtitle {\
  font-size: 16px;\
  font-weight: 400;\
  line-height: 1.4;\
  color: #2d2d2b;\
  margin-bottom: 24px;\
  text-align: center;\
}\
\
.quiz-subtitle--center {\
  text-align: center;\
}\
\
.answers-grid {\
  display: grid;\
  grid-template-columns: 1fr 1fr;\
  gap: 10px;\
  margin-bottom: 24px;\
}\
\
.answers-grid__full {\
  grid-column: 1/-1;\
}\
\
.answer-btn {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  text-align: center;\
  height: 50px;\
  padding: 8px 16px;\
  font-family: "Basis Grotesque Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;\
  font-size: 16px;\
  font-weight: 400;\
  line-height: 1.3;\
  color: #2d2d2b;\
  background: #efebe1;\
  border: 1px solid #2d2d2b;\
  cursor: pointer;\
  transition: background 0.2s ease, color 0.2s ease;\
}\
\
.answer-btn:hover {\
  background: #d5d0c7;\
}\
\
.answer-btn.active {\
  background: #2d2d2b;\
  color: #ffffff;\
  border-color: #2d2d2b;\
}\
\
.quiz-footer {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
}\
\
.quiz-counter {\
  font-size: 16px;\
  font-weight: 400;\
  color: #2d2d2b;\
}\
\
.quiz-nav {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  gap: 8px;\
}\
\
.btn-prev,\
.btn-next {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 50px;\
  height: 50px;\
  background: #2d2d2b;\
  color: #ffffff;\
  border: none;\
  cursor: pointer;\
  transition: opacity 0.2s ease;\
}\
\
.btn-prev svg,\
.btn-next svg {\
  display: block;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.btn-prev:disabled,\
.btn-next:disabled {\
  opacity: 0.35;\
  cursor: not-allowed;\
}\
\
.btn-prev:not(:disabled):hover,\
.btn-next:not(:disabled):hover {\
  opacity: 0.8;\
}\
\
.contact-btns {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  gap: 12px;\
  width: 100%;\
  max-width: 613px;\
}\
\
.btn-contact {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  height: 50px;\
  font-family: "Basis Grotesque Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;\
  font-size: 16px;\
  font-weight: 400;\
  text-decoration: none;\
  cursor: pointer;\
  transition: background 0.2s ease;\
  background: #efebe1;\
  color: #2d2d2b;\
  border: 1px solid #2d2d2b;\
}\
\
.btn-contact:hover {\
  background: #2d2d2b;\
  color: #ffffff;\
}\
\
.email-field {\
  width: 100%;\
  max-width: 613px;\
  margin-bottom: 24px;\
  border-bottom: 1px solid #2d2d2b;\
}\
\
.email-input {\
  width: 100%;\
  height: 36px;\
  background: transparent;\
  border: none;\
  outline: none;\
  font-family: "Basis Grotesque Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;\
  font-size: 16px;\
  font-weight: 400;\
  color: #2d2d2b;\
  text-align: center;\
}\
\
.email-input::-webkit-input-placeholder {\
  color: #2d2d2b;\
  opacity: 0.5;\
}\
\
.email-input:-ms-input-placeholder {\
  color: #2d2d2b;\
  opacity: 0.5;\
}\
\
.email-input::-ms-input-placeholder {\
  color: #2d2d2b;\
  opacity: 0.5;\
}\
\
.email-input::placeholder {\
  color: #2d2d2b;\
  opacity: 0.5;\
}\
\
.btn-submit {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  max-width: 613px;\
  height: 50px;\
  font-family: "Basis Grotesque Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;\
  font-size: 16px;\
  font-weight: 400;\
  color: #ffffff;\
  background: #2d2d2b;\
  border: none;\
  cursor: pointer;\
  margin-bottom: 16px;\
  transition: opacity 0.2s ease;\
}\
\
.btn-submit:hover {\
  opacity: 0.8;\
}\
\
.checkboxes {\
  width: 100%;\
  max-width: 613px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  gap: 8px;\
}\
\
.checkbox-label {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  gap: 8px;\
  font-size: 11px;\
  font-weight: 400;\
  line-height: 1.5;\
  color: #2d2d2b;\
  cursor: pointer;\
}\
\
.checkbox-label input[type=checkbox] {\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  appearance: none;\
  -webkit-appearance: none;\
  width: 15px;\
  height: 15px;\
  margin-top: 1px;\
  border: 1px solid #2d2d2b;\
  background: #efebe1;\
  cursor: pointer;\
  position: relative;\
}\
\
.checkbox-label input[type=checkbox]:checked::after {\
  content: "";\
  position: absolute;\
  top: 2px;\
  left: 4px;\
  width: 4px;\
  height: 7px;\
  border: 1.5px solid #2d2d2b;\
  border-top: none;\
  border-left: none;\
  -webkit-transform: rotate(45deg);\
          transform: rotate(45deg);\
}\
\
.checkbox-label a {\
  text-decoration: underline;\
  color: #2d2d2b;\
}\
\
.hidden {\
  display: none !important;\
}\
\
@media (max-width: 600px) {\
  .quiz-title {\
    font-size: 18px;\
  }\
\
  .quiz-subtitle {\
    font-size: 14px;\
    margin-bottom: 16px;\
  }\
\
  .answers-grid {\
    grid-template-columns: 1fr;\
    margin-bottom: 16px;\
  }\
\
  .answer-btn {\
    font-size: 14px;\
  }\
\
  .answer-btn.answers-grid__full {\
    grid-column: 1;\
  }\
\
  .btn-prev,\
  .btn-next {\
    width: 44px;\
    height: 44px;\
  }\
\
  .card-inner {\
    padding: 20px 16px;\
  }\
\
  .quiz-card {\
    padding: 8px;\
  }\
\
  .contact-btns,\
  .btn-submit,\
  .email-field,\
  .checkboxes {\
    max-width: 100%;\
  }\
\
  .btn-contact {\
    font-size: 14px;\
  }\
\
  .btn-submit {\
    font-size: 14px;\
  }\
\
  .email-input {\
    font-size: 14px;\
  }\
}</style>\
</head>\
\
<body>\
<div class="cq-popup__bg"></div>\
\
<div class="wrapper__body">\
\
    <div class="quiz-card" id="step-1">\
        <button class="card-close" aria-label="Закрыть"></button>\
        <div class="card-inner">\
            <p class="quiz-title">Поможем подобрать то,&nbsp;что вам понравится</p>\
            <p class="quiz-subtitle">Всего несколько вопросов — и&nbsp;подборка мероприятий у&nbsp;вас.</p>\
            <div class="answers-grid">\
                <button class="answer-btn" data-value="Хочу посмеяться и расслабиться">Хочу посмеяться и&nbsp;расслабиться</button>\
                <button class="answer-btn" data-value="Хочу сильную историю и эмоции">Хочу сильную историю и&nbsp;эмоции</button>\
                <button class="answer-btn" data-value="Хочу что-то необычное">Хочу что-то необычное</button>\
                <button class="answer-btn" data-value="Ищу семейный формат или спокойный культурный выход">Ищу семейный формат или спокойный культурный выход</button>\
            </div>\
            <div class="quiz-footer">\
                <span class="quiz-counter">1\\4</span>\
                <div class="quiz-nav">\
                    <button class="btn-next" disabled>\
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\
                        </svg>\
                    </button>\
                </div>\
            </div>\
        </div>\
    </div>\
\
    <div class="quiz-card hidden" id="step-2">\
        <button class="card-close" aria-label="Закрыть"></button>\
        <div class="card-inner">\
            <p class="quiz-title">С&nbsp;кем планируете идти?</p>\
            <p class="quiz-subtitle">Выберите один вариант ответа.</p>\
            <div class="answers-grid">\
                <button class="answer-btn" data-value="Один / одна">Один / одна</button>\
                <button class="answer-btn" data-value="Вдвоём">Вдвоём</button>\
                <button class="answer-btn" data-value="С друзьями">С&nbsp;друзьями</button>\
                <button class="answer-btn" data-value="С ребёнком / семьёй">С&nbsp;ребёнком / семьёй</button>\
            </div>\
            <div class="quiz-footer">\
                <span class="quiz-counter">2\\4</span>\
                <div class="quiz-nav">\
                    <button class="btn-prev">\
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M17 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\
                        </svg>\
                    </button>\
                    <button class="btn-next" disabled>\
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\
                        </svg>\
                    </button>\
                </div>\
            </div>\
        </div>\
    </div>\
\
    <div class="quiz-card hidden" id="step-3">\
        <button class="card-close" aria-label="Закрыть"></button>\
        <div class="card-inner">\
            <p class="quiz-title">Что для вас важнее всего при выборе?</p>\
            <p class="quiz-subtitle">Выберите один вариант ответа.</p>\
            <div class="answers-grid">\
                <button class="answer-btn" data-value="Что-то популярное и проверенное">Что-то популярное и&nbsp;проверенное</button>\
                <button class="answer-btn" data-value="Что-то новое для себя">Что-то новое для&nbsp;себя</button>\
                <button class="answer-btn" data-value="Хочу самый простой и понятный выбор">Хочу самый простой и&nbsp;понятный выбор</button>\
                <button class="answer-btn" data-value="Пока просто присматриваюсь">Пока просто присматриваюсь</button>\
            </div>\
            <div class="quiz-footer">\
                <span class="quiz-counter">3\\4</span>\
                <div class="quiz-nav">\
                    <button class="btn-prev">\
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M17 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\
                        </svg>\
                    </button>\
                    <button class="btn-next" disabled>\
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\
                        </svg>\
                    </button>\
                </div>\
            </div>\
        </div>\
    </div>\
\
    <div class="quiz-card hidden" id="step-4">\
        <button class="card-close" aria-label="Закрыть"></button>\
        <div class="card-inner">\
            <p class="quiz-title">Что вам интереснее по&nbsp;формату?</p>\
            <p class="quiz-subtitle">Выберите один вариант ответа.</p>\
            <div class="answers-grid">\
                <button class="answer-btn" data-value="Спектакль">Спектакль</button>\
                <button class="answer-btn" data-value="Экскурсия или другой формат">Экскурсия или другой формат</button>\
                <button class="answer-btn" data-value="Не принципиально, главное — чтобы понравилось">Не принципиально, главное — чтобы понравилось</button>\
            </div>\
            <div class="quiz-footer">\
                <span class="quiz-counter">4\\4</span>\
                <div class="quiz-nav">\
                    <button class="btn-prev">\
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M17 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\
                        </svg>\
                    </button>\
                    <button class="btn-next" disabled>\
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\
                        </svg>\
                    </button>\
                </div>\
            </div>\
        </div>\
    </div>\
\
    <div class="quiz-card quiz-card--sm hidden" id="step-contact">\
        <button class="card-close" aria-label="Закрыть"></button>\
        <div class="card-inner card-inner--center">\
            <p class="quiz-title quiz-title--center">Отлично, спасибо!</p>\
            <p class="quiz-subtitle quiz-subtitle--center">Куда вам отправить подборку?</p>\
            <div class="contact-btns">\
                <button class="btn-contact" id="btn-email">На почту</button>\
                <a class="btn-contact" id="btn-telegram" href="" target="_blank">В Telegram</a>\
            </div>\
        </div>\
    </div>\
\
    <div class="quiz-card quiz-card--sm hidden" id="step-thanks">\
        <button class="card-close" aria-label="Закрыть"></button>\
        <div class="card-inner card-inner--center">\
            <p class="quiz-title">Спасибо!</p>\
            <p class="quiz-subtitle quiz-subtitle--center">Проверьте почту через пару минут</p>\
        </div>\
    </div>\
\
    <div class="quiz-card quiz-card--md hidden" id="step-email">\
        <button class="card-close" aria-label="Закрыть"></button>\
        <div class="card-inner card-inner--center">\
            <p class="quiz-title quiz-title--center">Отлично, спасибо!</p>\
            <p class="quiz-subtitle quiz-subtitle--center">Куда вам отправить подборку?</p>\
            <div class="email-field">\
                <input class="email-input" type="email" id="email-input" placeholder="Введите ваш e-mail" autocomplete="email" required name="email">\
            </div>\
            <button class="btn-submit" id="btn-submit">Отправить</button>\
            <div class="checkboxes">\
                <label class="checkbox-label">\
                    <input type="checkbox" id="cb1">\
                    <span>Я даю <a href="https://sovremennik.ru/uploads/content_file/file/231/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf" target="_blank">согласие</a> на обработку своих персональных данных.</span>\
                </label>\
                <label class="checkbox-label">\
                    <input type="checkbox" id="cb2">\
                    <span>Я ознакомлен с <a href="https://sovremennik.ru/page/privacy-policy" target="_blank">Политикой конфиденциальности.</a></span>\
                </label>\
            </div>\
        </div>\
    </div>\
\
</div>\
\
<script>"use strict";\
\
var cqpopup_name = "Современник - Квиз";\
var carrotquest = {\
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
var questionKeys = {\
  \'step-1\': \'Что хочет\',\
  \'step-2\': \'С кем пойдет\',\
  \'step-3\': \'Что важно при выборе\',\
  \'step-4\': \'Формат\'\
};\
var quizSteps = [\'step-1\', \'step-2\', \'step-3\', \'step-4\', \'step-contact\'];\
var currentStepIndex = 0;\
var answerIndexes = {};\
var podborkaMap = {\
  \'1111\': 1,\
  \'1113\': 1,\
  \'1131\': 1,\
  \'1133\': 1,\
  \'1211\': 1,\
  \'1213\': 1,\
  \'1231\': 1,\
  \'1233\': 1,\
  \'1311\': 1,\
  \'1313\': 1,\
  \'1331\': 1,\
  \'1333\': 1,\
  \'2111\': 2,\
  \'2113\': 2,\
  \'2211\': 2,\
  \'2213\': 2,\
  \'3111\': 3,\
  \'3113\': 3,\
  \'3121\': 3,\
  \'3123\': 3,\
  \'3131\': 3,\
  \'3133\': 3,\
  \'3211\': 3,\
  \'3213\': 3,\
  \'3221\': 3,\
  \'3223\': 3,\
  \'3231\': 3,\
  \'3233\': 3,\
  \'3311\': 3,\
  \'3313\': 3,\
  \'3321\': 3,\
  \'3323\': 3,\
  \'3331\': 3,\
  \'3333\': 3,\
  \'2131\': 4,\
  \'2133\': 4,\
  \'2231\': 4,\
  \'2233\': 4,\
  \'2311\': 4,\
  \'2313\': 4,\
  \'2331\': 4,\
  \'2333\': 4,\
  \'4111\': 5,\
  \'4112\': 5,\
  \'4113\': 5,\
  \'4121\': 5,\
  \'4122\': 5,\
  \'4123\': 5,\
  \'4131\': 5,\
  \'4132\': 5,\
  \'4133\': 5,\
  \'4141\': 5,\
  \'4142\': 5,\
  \'4143\': 5,\
  \'4211\': 5,\
  \'4212\': 5,\
  \'4213\': 5,\
  \'4221\': 5,\
  \'4222\': 5,\
  \'4223\': 5,\
  \'4231\': 5,\
  \'4232\': 5,\
  \'4233\': 5,\
  \'4241\': 5,\
  \'4242\': 5,\
  \'4243\': 5,\
  \'4311\': 5,\
  \'4312\': 5,\
  \'4313\': 5,\
  \'4321\': 5,\
  \'4322\': 5,\
  \'4323\': 5,\
  \'4331\': 5,\
  \'4332\': 5,\
  \'4333\': 5,\
  \'4341\': 5,\
  \'4342\': 5,\
  \'4343\': 5,\
  \'4411\': 5,\
  \'4412\': 5,\
  \'4413\': 5,\
  \'4421\': 5,\
  \'4422\': 5,\
  \'4423\': 5,\
  \'4431\': 5,\
  \'4432\': 5,\
  \'4433\': 5,\
  \'4441\': 5,\
  \'4442\': 5,\
  \'4443\': 5,\
  \'1411\': 5,\
  \'1412\': 5,\
  \'1413\': 5,\
  \'1421\': 5,\
  \'1422\': 5,\
  \'1423\': 5,\
  \'1431\': 5,\
  \'1432\': 5,\
  \'1433\': 5,\
  \'2411\': 5,\
  \'2412\': 5,\
  \'2413\': 5,\
  \'2421\': 5,\
  \'2422\': 5,\
  \'2423\': 5,\
  \'2431\': 5,\
  \'2432\': 5,\
  \'2433\': 5,\
  \'3411\': 5,\
  \'3412\': 5,\
  \'3413\': 5,\
  \'3421\': 5,\
  \'3422\': 5,\
  \'3423\': 5,\
  \'3431\': 5,\
  \'3432\': 5,\
  \'3433\': 5,\
  \'1122\': 5,\
  \'1132\': 5,\
  \'1142\': 5,\
  \'1222\': 5,\
  \'1232\': 5,\
  \'1242\': 5,\
  \'1322\': 5,\
  \'1332\': 5,\
  \'1342\': 5,\
  \'2122\': 5,\
  \'2132\': 5,\
  \'2142\': 5,\
  \'2222\': 5,\
  \'2232\': 5,\
  \'2242\': 5,\
  \'2322\': 5,\
  \'2332\': 5,\
  \'2342\': 5,\
  \'3122\': 5,\
  \'3132\': 5,\
  \'3142\': 5,\
  \'3222\': 5,\
  \'3232\': 5,\
  \'3242\': 5,\
  \'3322\': 5,\
  \'3332\': 5,\
  \'3342\': 5,\
  \'1121\': 6,\
  \'1123\': 6,\
  \'1141\': 6,\
  \'1143\': 6,\
  \'1221\': 6,\
  \'1223\': 6,\
  \'1241\': 6,\
  \'1243\': 6,\
  \'1321\': 6,\
  \'1323\': 6,\
  \'1341\': 6,\
  \'1343\': 6,\
  \'2121\': 6,\
  \'2123\': 6,\
  \'2141\': 6,\
  \'2143\': 6,\
  \'2221\': 6,\
  \'2223\': 6,\
  \'2241\': 6,\
  \'2243\': 6,\
  \'2321\': 6,\
  \'2323\': 6,\
  \'2341\': 6,\
  \'2343\': 6\
};\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
    setTgLink(\'#\');\
  }\
});\
function setTgLink(link) {\
  var tgLink = link;\
  tgLink += top.carrotquest.data.user.user_signature.telegram ? "?start=".concat(top.carrotquest.data.user.user_signature.telegram) : \'\';\
  document.querySelector("#btn-telegram").href = tgLink;\
}\
function showStep(stepId) {\
  document.querySelectorAll(\'.quiz-card\').forEach(function (card) {\
    card.classList.add(\'hidden\');\
  });\
  document.getElementById(stepId).classList.remove(\'hidden\');\
}\
document.addEventListener(\'click\', function (e) {\
  var answerBtn = e.target.closest(\'.answer-btn\');\
  if (!answerBtn) return;\
  var card = answerBtn.closest(\'.quiz-card\');\
  if (!card || card.classList.contains(\'hidden\')) return;\
  card.querySelectorAll(\'.answer-btn\').forEach(function (btn) {\
    btn.classList.remove(\'active\');\
  });\
  answerBtn.classList.add(\'active\');\
  var btnNext = card.querySelector(\'.btn-next\');\
  if (btnNext) {\
    btnNext.disabled = false;\
  }\
});\
document.addEventListener(\'click\', function (e) {\
  var btnNext = e.target.closest(\'.btn-next\');\
  if (!btnNext || btnNext.disabled) return;\
  var card = btnNext.closest(\'.quiz-card\');\
  if (!card) return;\
  var stepId = card.id;\
  var selectedBtn = card.querySelector(\'.answer-btn.active\');\
  if (!selectedBtn) return;\
  var answer = selectedBtn.dataset.value;\
  var questionNumber = parseInt(stepId.replace(\'step-\', \'\'), 10);\
  var allBtns = Array.prototype.slice.call(card.querySelectorAll(\'.answer-btn\'));\
  answerIndexes[stepId] = allBtns.indexOf(selectedBtn) + 1;\
  carrotquest.track(cqpopup_name + \' - Ответил в квизе на \' + questionNumber + \' вопрос\');\
  var leadKey = questionKeys[stepId];\
  if (leadKey) {\
    carrotquest.identify([{\
      op: \'update_or_create\',\
      key: leadKey,\
      value: answer\
    }]);\
  }\
  currentStepIndex++;\
  var nextStepId = quizSteps[currentStepIndex];\
  if (nextStepId) {\
    if (nextStepId === \'step-contact\') {\
      var combo = quizSteps.slice(0, 4).map(function (s) {\
        return answerIndexes[s] || 0;\
      }).join(\'\');\
      var podborka = podborkaMap[combo] ? \'Подборка \' + podborkaMap[combo] : null;\
      carrotquest.track(\'Ответил на все вопросы - \' + cqpopup_name);\
      if (podborka) {\
        carrotquest.identify([{\
          op: \'update_or_create\',\
          key: \'Подборка\',\
          value: podborka\
        }]);\
      } else {\
        carrotquest.track(\'Подборка не найдена - \' + cqpopup_name + \' - \' + combo);\
      }\
    }\
    showStep(nextStepId);\
  }\
});\
document.addEventListener(\'click\', function (e) {\
  var btnPrev = e.target.closest(\'.btn-prev\');\
  if (!btnPrev) return;\
  if (currentStepIndex > 0) {\
    currentStepIndex--;\
    var prevStepId = quizSteps[currentStepIndex];\
    showStep(prevStepId);\
    var prevCard = document.getElementById(prevStepId);\
    var btnNext = prevCard ? prevCard.querySelector(\'.btn-next\') : null;\
    if (btnNext) {\
      var hasSelected = prevCard.querySelector(\'.answer-btn.active\');\
      btnNext.disabled = !hasSelected;\
    }\
  }\
});\
document.addEventListener(\'click\', function (e) {\
  if (e.target.id === \'btn-email\') {\
    showStep(\'step-email\');\
  }\
});\
document.addEventListener(\'click\', function (e) {\
  var tgBtn = e.target.closest(\'#btn-telegram\');\
  if (tgBtn) {\
    carrotquest.clicked();\
    carrotquest.track(\'Выбрал тг - \' + cqpopup_name);\
  }\
});\
document.addEventListener(\'click\', function (e) {\
  if (e.target.id !== \'btn-submit\') return;\
  var emailInput = document.getElementById(\'email-input\');\
  var cb1 = document.getElementById(\'cb1\');\
  var cb2 = document.getElementById(\'cb2\');\
  if (!emailInput) return;\
  var email = emailInput.value.trim();\
  if (!email || email.indexOf(\'@\') === -1 || email.indexOf(\'.\') === -1) {\
    emailInput.closest(\'.email-field\').style.borderBottomColor = \'#c0392b\';\
    return;\
  }\
  if (cb1 && !cb1.checked) return;\
  emailInput.closest(\'.email-field\').style.borderBottomColor = \'\';\
  carrotquest.replied();\
  carrotquest.track(\'Оставил email - \' + cqpopup_name);\
  carrotquest.identify([{\
    op: \'update_or_create\',\
    key: \'$email\',\
    value: email\
  }, {\
    op: \'update_or_create\',\
    key: \'Согласие на обработку данных\',\
    value: cb1 ? cb1.checked : false\
  }, {\
    op: \'update_or_create\',\
    key: \'Ознакомлен с политикой\',\
    value: cb2 ? cb2.checked : false\
  }]);\
  showStep(\'step-thanks\');\
  setTimeout(function () {\
    carrotquest.close();\
  }, 3000);\
});\
document.addEventListener(\'click\', function (e) {\
  if (e.target.closest(\'.card-close\') || e.target.classList.contains(\'cq-popup__bg\')) {\
    carrotquest.close();\
  }\
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