var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;700;900&display=swap" rel="stylesheet">\
    <style>@font-face {\
  font-family: "KyivTypeSans";\
  font-weight: 500;\
  src: url("https://agena-art.ru/src/fonts/KyivTypeSans-Medium.woff") format("woff");\
}\
\
@font-face {\
  font-family: "KyivTypeSans";\
  font-weight: 700;\
  src: url("https://agena-art.ru/src/fonts/KyivTypeSans-Bold.woff") format("woff");\
}\
\
@font-face {\
  font-family: "KyivTypeSans";\
  font-weight: 400;\
  src: url("https://agena-art.ru/src/fonts/KyivTypeSans-Regular.woff") format("woff");\
}\
\
* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "KyivTypeSans", sans-serif;\
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
  text-decoration: none;\
}\
\
.cq-popup__bg {\
  display: block;\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background-color: rgba(33, 33, 51, 0.65);\
  -webkit-backdrop-filter: blur(5px);\
          backdrop-filter: blur(5px);\
}\
\
.wrapper__body {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  height: 100%;\
  padding: 15px;\
  position: relative;\
  z-index: 2;\
}\
\
.quiz-card {\
  background: #fff;\
  width: 100%;\
  max-width: 901px;\
  position: relative;\
  display: -ms-flexbox;\
  display: flex;\
  overflow: visible;\
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\
}\
\
.quiz-close {\
  cursor: pointer;\
  width: 20px;\
  height: 20px;\
  position: absolute;\
  top: 14px;\
  right: 18px;\
  z-index: 20;\
}\
\
.quiz-close::before,\
.quiz-close::after {\
  content: "";\
  position: absolute;\
  top: 50%;\
  left: 50%;\
  width: 2px;\
  height: 18px;\
  margin-top: -9px;\
  margin-left: -1px;\
  background: #555;\
  border-radius: 2px;\
}\
\
.quiz-close::before {\
  -webkit-transform: rotate(45deg);\
          transform: rotate(45deg);\
}\
\
.quiz-close::after {\
  -webkit-transform: rotate(-45deg);\
          transform: rotate(-45deg);\
}\
\
.quiz-screen {\
  display: -ms-flexbox;\
  display: flex;\
  width: 100%;\
  min-height: 460px;\
  overflow: hidden;\
}\
\
#s-final,\
#s-wait {\
  min-height: 541px;\
}\
\
.hidden {\
  display: none !important;\
}\
\
.quiz-left {\
  width: 305px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  position: relative;\
}\
\
.quiz-left--wide {\
  width: 396px;\
}\
\
.quiz-left--yellow {\
  background: #ffdc6a;\
}\
\
.quiz-left--salmon {\
  background: #ee7668;\
}\
\
.quiz-left--purple {\
  background: #4b54a0;\
}\
\
.quiz-left__img {\
  width: 100%;\
  height: 100%;\
  -o-object-fit: cover;\
     object-fit: cover;\
  border-bottom-left-radius: 204px;\
  border-bottom-right-radius: 204px;\
  display: block;\
}\
\
.quiz-counter {\
  position: absolute;\
  top: 15px;\
  left: 15px;\
  color: #fff;\
  font-size: 16px;\
  font-weight: 700;\
  z-index: 1;\
  line-height: 1;\
}\
\
.quiz-right {\
  -ms-flex: 1;\
      flex: 1;\
  padding: 36px 40px 30px 40px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.quiz-right--intro {\
  -ms-flex-pack: center;\
      justify-content: center;\
  padding: 40px 40px 40px 36px;\
}\
\
.quiz-right--final {\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  padding: 36px 40px 36px 40px;\
}\
\
.quiz-intro-title {\
  font-size: 24px;\
  font-weight: 700;\
  color: #000;\
  line-height: normal;\
  margin-bottom: 18px;\
}\
\
.quiz-intro-sub {\
  font-size: 16px;\
  color: #000;\
  line-height: normal;\
  margin-bottom: 28px;\
}\
\
.quiz-question {\
  font-size: 22px;\
  font-weight: 700;\
  color: #000;\
  line-height: 1.3;\
  margin-bottom: 22px;\
}\
\
.quiz-answers {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  gap: 10px;\
  margin-bottom: 22px;\
}\
\
.quiz-answer {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  gap: 14px;\
  border: 1px solid #2e377b;\
  border-radius: 100px;\
  min-height: 50px;\
  padding: 10px 15px;\
  cursor: pointer;\
  font-size: 16px;\
  color: #000;\
  transition: background 0.15s;\
}\
\
.quiz-answer input[type=radio] {\
  appearance: none;\
  -webkit-appearance: none;\
  width: 19px;\
  height: 19px;\
  min-width: 19px;\
  border-radius: 50%;\
  border: 2px solid #2e377b;\
  cursor: pointer;\
  transition: all 0.15s;\
}\
\
.quiz-answer input[type=radio]:checked {\
  background: #2e377b;\
  border-color: #2e377b;\
  box-shadow: inset 0 0 0 3px #fff;\
}\
\
.quiz-answer span {\
  line-height: 1.3;\
}\
\
.quiz-nav {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
  -ms-flex-align: center;\
      align-items: center;\
  gap: 15px;\
  margin-top: auto;\
}\
\
.btn-wrap {\
  position: relative;\
  width: 100%;\
  height: 74px;\
  margin-bottom: 16px;\
}\
\
.btn-wrap .quiz-btn {\
  position: absolute;\
  top: 9px;\
  left: 0;\
  right: 0;\
  width: 100%;\
  height: 65px;\
  border: none;\
  margin: 0;\
}\
\
.btn-wrap:last-of-type {\
  margin-bottom: 0;\
}\
\
.btn-wrap--channel {\
  -ms-flex: 1;\
      flex: 1;\
  width: auto;\
  margin-bottom: 0;\
}\
\
.btn-wrap--nav {\
  width: 240px;\
  margin-bottom: 0;\
}\
\
.btn-wrap--nav:only-child {\
  margin-left: auto;\
}\
\
.btn-wrap__border {\
  position: absolute;\
  top: 0;\
  left: 0;\
  right: 0;\
  height: 65px;\
  border: 1px solid #2e377b;\
  border-radius: 100px;\
  pointer-events: none;\
}\
\
.quiz-btn {\
  height: 65px;\
  border-radius: 100px;\
  border: none;\
  font-size: 16px;\
  font-weight: 700;\
  cursor: pointer;\
  text-transform: uppercase;\
  padding: 0 24px;\
  text-align: center;\
  display: -ms-inline-flexbox;\
  display: inline-flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  letter-spacing: 0.02em;\
  transition: opacity 0.15s, -webkit-transform 0.1s;\
  transition: opacity 0.15s, transform 0.1s;\
  transition: opacity 0.15s, transform 0.1s, -webkit-transform 0.1s;\
}\
\
.quiz-btn:active {\
  -webkit-transform: scale(0.98);\
          transform: scale(0.98);\
}\
\
.quiz-btn--salmon {\
  background: #ee7668;\
  color: #fff;\
  width: 100%;\
}\
\
.quiz-btn--yellow {\
  background: #ffdc6a;\
  color: #4b54a0;\
  width: 100%;\
}\
\
.quiz-btn--next {\
  background: #ee7668;\
  color: #fff;\
  min-width: 200px;\
}\
\
.quiz-btn--next:disabled {\
  opacity: 0.45;\
  cursor: not-allowed;\
}\
\
.quiz-btn--next:disabled:active {\
  -webkit-transform: none;\
          transform: none;\
}\
\
.quiz-btn--back {\
  background: #ffdc6a;\
  color: #4b54a0;\
  min-width: 200px;\
}\
\
.quiz-btn--telegram {\
  background: #039be5;\
  color: #fff;\
  width: 100%;\
}\
\
.quiz-btn--yellow-email {\
  background: #ffdc6a;\
  color: #4b54a0;\
  width: 100%;\
}\
\
.final-title {\
  font-size: 24px;\
  font-weight: 700;\
  color: #000;\
  margin-bottom: 14px;\
  line-height: normal;\
}\
\
.final-text {\
  font-size: 16px;\
  color: #000;\
  line-height: normal;\
  margin-bottom: 15px;\
}\
\
.final-question {\
  font-size: 16px;\
  font-weight: 500;\
  color: #000;\
  margin-bottom: 25px;\
}\
\
.final-channels {\
  display: -ms-flexbox;\
  display: flex;\
  gap: 15px;\
  margin-bottom: 0;\
}\
\
.wait-channels {\
  display: -ms-flexbox;\
  display: flex;\
  gap: 15px;\
}\
\
.wait-email-form {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex: 1;\
      flex: 1;\
}\
\
.final-email-form {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex: 1;\
      flex: 1;\
}\
\
.btn-wrap--submit {\
  width: 292px;\
  margin-top: auto;\
  margin-left: auto;\
  margin-bottom: 0;\
}\
\
.quiz-email-input {\
  width: 100%;\
  height: 65px;\
  border: 1px solid #2e377b;\
  border-radius: 100px;\
  padding: 0 24px;\
  font-size: 16px;\
  outline: none;\
  color: #000;\
}\
\
.quiz-email-input::-webkit-input-placeholder {\
  color: #aaa;\
}\
\
.quiz-email-input:-ms-input-placeholder {\
  color: #aaa;\
}\
\
.quiz-email-input::-ms-input-placeholder {\
  color: #aaa;\
}\
\
.quiz-email-input::placeholder {\
  color: #aaa;\
}\
\
.quiz-email-input:focus {\
  border-color: #1e2752;\
}\
\
.quiz-checkbox-row {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  gap: 5px;\
  margin-top: 10px;\
  font-size: 11px;\
  color: #000;\
  line-height: 1.4;\
}\
\
.quiz-checkbox-row input[type=checkbox] {\
  appearance: none;\
  -webkit-appearance: none;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  width: 15px;\
  height: 15px;\
  min-width: 15px;\
  margin-top: 1px;\
  border-radius: 50%;\
  border: 1.5px solid #2e377b;\
  background: transparent;\
  cursor: pointer;\
}\
\
.quiz-checkbox-row input[type=checkbox]:checked {\
  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 15 15\'%3E%3Cpath d=\'M2.5 7.5L6 11L12.5 4\' stroke=\'%232e377b\' stroke-width=\'1.5\' fill=\'none\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E");\
  background-size: contain;\
  background-repeat: no-repeat;\
  background-position: center;\
}\
\
.quiz-checkbox-row label {\
  cursor: pointer;\
}\
\
.quiz-email-input + .quiz-checkbox-row {\
  margin-top: 25px;\
}\
\
.cb-link {\
  text-decoration: underline;\
}\
\
.thank-text {\
  font-size: 20px;\
  font-weight: 700;\
  color: #000;\
  line-height: 1.4;\
}\
\
.quiz-counter-mobile {\
  display: none;\
}\
\
.mob_background {\
  display: none;\
}\
\
.mob {\
  display: none;\
}\
\
@media (max-width: 700px) {\
  body {\
    overflow-y: auto;\
  }\
\
  .wrapper__body {\
    padding: 20px;\
    -ms-flex-align: center;\
        align-items: center;\
  }\
\
  .mob {\
    display: block;\
  }\
\
  .pc {\
    display: none;\
  }\
\
  .mob_background {\
    display: block;\
    position: absolute;\
    top: 0;\
  }\
\
  #s1 .mob_background {\
    position: absolute;\
    right: 0;\
  }\
\
  #s2 .mob_background,\
  #s3 .mob_background,\
  #s4 .mob_background,\
  #s5 .mob_background,\
  #s6 .mob_background,\
  #s-final .mob_background,\
  #s-wait .mob_background {\
    position: absolute;\
    left: 0;\
    top: 0;\
  }\
\
  .final-email-form,\
  .wait-email-form,\
  .plan-email-form {\
    z-index: 1000;\
  }\
\
  .quiz-card {\
    max-width: 335px;\
    border-radius: 10px;\
    overflow: hidden;\
    margin: 0 auto;\
  }\
\
  .quiz-close {\
    top: 10px;\
    right: 10px;\
    width: 16px;\
    height: 16px;\
  }\
\
  .quiz-close::before,\
  .quiz-close::after {\
    height: 15px;\
    margin-top: -7.5px;\
  }\
\
  .quiz-screen {\
    min-height: unset;\
    -ms-flex-direction: column;\
        flex-direction: column;\
    position: relative;\
  }\
\
  #s-final,\
  #s-wait {\
    min-height: unset;\
  }\
\
  .quiz-left {\
    display: none !important;\
  }\
\
  #s0 {\
    -ms-flex-direction: column-reverse;\
        flex-direction: column-reverse;\
  }\
\
  #s0 .quiz-left {\
    display: block !important;\
    width: 100%;\
    -ms-flex-negative: 0;\
        flex-shrink: 0;\
    height: 200px;\
  }\
\
  #s0 .quiz-left__img {\
    border-bottom-left-radius: 0;\
    border-bottom-right-radius: 0;\
    -o-object-position: center;\
       object-position: center;\
  }\
\
  .quiz-right {\
    padding: 25px 20px 20px;\
    -ms-flex-pack: start;\
        justify-content: flex-start;\
  }\
\
  .quiz-right--intro {\
    padding: 40px 20px 20px;\
  }\
\
  .quiz-right--final {\
    padding: 25px 20px 20px;\
  }\
\
  .quiz-intro-title {\
    font-size: 18px;\
    margin-bottom: 12px;\
  }\
\
  .quiz-intro-sub {\
    font-size: 14px;\
    margin-bottom: 20px;\
  }\
\
  .quiz-question {\
    font-size: 18px;\
    margin-bottom: 20px;\
  }\
\
  .quiz-answers {\
    gap: 10px;\
    margin-bottom: 15px;\
    z-index: 1000;\
  }\
\
  .quiz-answer {\
    height: 50px;\
    min-height: unset;\
    font-size: 14px;\
    padding: 0 15px;\
    gap: 15px;\
    overflow: hidden;\
    background: #fff;\
  }\
\
  .quiz-counter-mobile {\
    display: block;\
    font-size: 14px;\
    font-weight: 700;\
    color: #000;\
    line-height: 1;\
    margin-bottom: 15px;\
  }\
\
  .quiz-nav {\
    gap: 10px;\
    -ms-flex-direction: column-reverse;\
        flex-direction: column-reverse;\
  }\
\
  .btn-wrap--nav {\
    -ms-flex: none;\
        flex: none;\
    width: 100%;\
    margin-left: 0;\
  }\
\
  .quiz-btn {\
    font-size: 14px;\
  }\
\
  .quiz-btn--next,\
  .quiz-btn--back {\
    min-width: 0;\
  }\
\
  .final-channels,\
  .wait-channels {\
    -ms-flex-direction: column;\
        flex-direction: column;\
    gap: 10px;\
    margin-bottom: 15px;\
  }\
\
  .btn-wrap--channel {\
    -ms-flex: none;\
        flex: none;\
    width: 100%;\
    margin-bottom: 0;\
  }\
\
  .final-title {\
    font-size: 18px;\
    margin-bottom: 10px;\
  }\
\
  .final-text {\
    font-size: 14px;\
    margin-bottom: 10px;\
  }\
\
  .final-question {\
    font-size: 14px;\
    margin-bottom: 15px;\
  }\
\
  .quiz-email-input {\
    height: 52px;\
    font-size: 14px;\
  }\
\
  .btn-wrap--submit {\
    width: 100%;\
    margin-left: 0;\
    margin-top: 15px;\
  }\
\
  .thank-text {\
    font-size: 16px;\
  }\
}</style>\
</head>\
<body>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body">\
  <div class="quiz-card">\
    <a class="quiz-close"></a>\
\
    <div id="s0" class="quiz-screen">\
      <div class="quiz-left quiz-left--salmon quiz-left--wide">\
        <img class="quiz-left__img pc" src="https://files.carrotquest.app/message-images/71534/71534-1781175381237-glfppiqc.png" alt="Искусство">\
        <img class="quiz-left__img mob" src="https://files.carrotquest.app/message-images/71534/71534-1781174330731-ndhuvwgr.png" alt="Искусство">\
      </div>\
      <div class="quiz-right quiz-right--intro">\
        <h1 class="quiz-intro-title">Здравствуйте! Давайте проверим, насколько Вам подходит программа ДПО «Искусствоведение»? 👀</h1>\
        <p class="quiz-intro-sub">Всего 6 вопросов, и мы пришлем персональный разбор. 👍</p>\
          <div class="btn-wrap">\
              <button class="quiz-btn quiz-btn--salmon js-start-quiz">ПРОЙТИ ТЕСТ (6 ВОПРОСОВ)</button>\
              <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap">\
              <button class="quiz-btn quiz-btn--yellow js-btn-plan" type="button">ПРОСТО ХОЧУ УЧЕБНЫЙ ПЛАН</button>\
              <span class="btn-wrap__border"></span>\
          </div>\
      </div>\
    </div>\
\
    <div id="s1" class="quiz-screen hidden">\
      <div class="quiz-left quiz-left--yellow">\
        <span class="quiz-counter">1/6</span>\
        <img class="quiz-left__img" src="https://files.carrotquest.app/message-images/71534/71534-1781174436782-6n78lgpe.png" alt="">\
      </div>\
      <div class="quiz-right">\
          <img src="https://files.carrotquest.app/message-images/71534/71534-1781172139709-xjdiyb75.png" alt="" class="mob_background">\
        <p class="quiz-question">Когда Вы видите картину, скульптуру или другое произведение искусства, которое Вам нравится, какое утверждение описывает Ваши мысли?</p>\
        <div class="quiz-answers">\
          <label class="quiz-answer">\
            <input type="radio" name="q1">\
            <span>Хочу понять, чем именно создатель зацепил меня</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q1">\
            <span>Просто наслаждаюсь, не анализирую</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q1">\
            <span>Хочу узнать историю создания, эпоху, источник вдохновения</span>\
          </label>\
        </div>\
        <span class="quiz-counter-mobile">1/6</span>\
        <div class="quiz-nav">\
          <div class="btn-wrap btn-wrap--nav">\
            <button class="quiz-btn quiz-btn--next" disabled>ДАЛЕЕ</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    <div id="s2" class="quiz-screen hidden">\
      <div class="quiz-left quiz-left--purple">\
        <span class="quiz-counter">2/6</span>\
        <img class="quiz-left__img" src="https://files.carrotquest.app/message-images/71534/71534-1781511261116-v5txompz.png" alt="">\
      </div>\
      <div class="quiz-right">\
          <img src="https://files.carrotquest.app/message-images/71534/71534-1781172454243-st54p739.png" alt="" class="mob_background">\
        <p class="quiz-question">Представьте: перед Вами незнакомая работа без подписи. Что Вам хочется сделать больше всего?</p>\
        <div class="quiz-answers">\
          <label class="quiz-answer">\
            <input type="radio" name="q2">\
            <span>Разобраться: эпоха, автор, стиль, датировка</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q2">\
            <span>Почитать, что о работе пишут критики</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q2">\
            <span>Пройду мимо — к тем картинам, у которых есть подписи</span>\
          </label>\
        </div>\
        <span class="quiz-counter-mobile">2/6</span>\
        <div class="quiz-nav">\
          <div class="btn-wrap btn-wrap--nav">\
            <button class="quiz-btn quiz-btn--back">НАЗАД</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap btn-wrap--nav">\
            <button class="quiz-btn quiz-btn--next" disabled>ДАЛЕЕ</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    <div id="s3" class="quiz-screen hidden">\
      <div class="quiz-left quiz-left--salmon">\
        <span class="quiz-counter">3/6</span>\
        <img class="quiz-left__img" src="https://files.carrotquest.app/message-images/71534/71534-1781174493642-2nv6henv.png" alt="">\
      </div>\
      <div class="quiz-right">\
          <img src="https://files.carrotquest.app/message-images/71534/71534-1781172688612-x92t75r9.png" alt="" class="mob_background">\
        <p class="quiz-question">Представьте, Вы прочитали новую статью / прослушали лекцию и узнали что-то интересное о картине / эпохе / художнике / историческом контексте. Ваша первая реакция?</p>\
        <div class="quiz-answers">\
          <label class="quiz-answer">\
            <input type="radio" name="q3">\
            <span>Сразу хочу рассказать другим, объяснить</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q3">\
            <span>Просто порадуюсь, запомню</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q3">\
            <span>Хочу написать об этом эссе или пост в социальной сети</span>\
          </label>\
        </div>\
        <span class="quiz-counter-mobile">3/6</span>\
        <div class="quiz-nav">\
          <div class="btn-wrap btn-wrap--nav">\
            <button class="quiz-btn quiz-btn--back">НАЗАД</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap btn-wrap--nav">\
            <button class="quiz-btn quiz-btn--next" disabled>ДАЛЕЕ</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    <div id="s4" class="quiz-screen hidden">\
      <div class="quiz-left quiz-left--yellow">\
        <span class="quiz-counter">4/6</span>\
        <img class="quiz-left__img" src="https://files.carrotquest.app/message-images/71534/71534-1781174521920-t4q8x37z.png" alt="">\
      </div>\
      <div class="quiz-right">\
          <img src="https://files.carrotquest.app/message-images/71534/71534-1781172744474-hoi90bfc.png" alt="" class="mob_background">\
        <p class="quiz-question">Представьте, что Вы решили изучить искусствоведение системно и фундаментально. Что для Вас важнее всего?</p>\
        <div class="quiz-answers">\
          <label class="quiz-answer">\
            <input type="radio" name="q4">\
            <span>Новая профессия, диплом и доход</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q4">\
            <span>Глубина и систематизация знаний для себя</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q4">\
            <span>Сменить сферу работы, давно мечтаю</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q4">\
            <span>Искусство как хобби и, возможно, небольшой доход</span>\
          </label>\
        </div>\
        <span class="quiz-counter-mobile">4/6</span>\
        <div class="quiz-nav">\
          <div class="btn-wrap btn-wrap--nav">\
            <button class="quiz-btn quiz-btn--back">НАЗАД</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap btn-wrap--nav">\
            <button class="quiz-btn quiz-btn--next" disabled>ДАЛЕЕ</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    <div id="s5" class="quiz-screen hidden">\
      <div class="quiz-left quiz-left--purple">\
        <span class="quiz-counter">5/6</span>\
        <img class="quiz-left__img" src="https://files.carrotquest.app/message-images/71534/71534-1781511362688-dc35y3t6.jpeg" alt="">\
      </div>\
      <div class="quiz-right">\
          <img src="https://files.carrotquest.app/message-images/71534/71534-1781172826156-4rm7j4eg.png" alt="" class="mob_background">\
        <p class="quiz-question">Сколько времени Вы посвящаете искусству: музеи, лекции, книги, выставки?</p>\
        <div class="quiz-answers">\
          <label class="quiz-answer">\
            <input type="radio" name="q5">\
            <span>Несколько раз в месяц, это часть жизни</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q5">\
            <span>2-3 раза в год</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q5">\
            <span>Редко, но очень хочется это исправить</span>\
          </label>\
        </div>\
        <span class="quiz-counter-mobile">5/6</span>\
        <div class="quiz-nav">\
          <div class="btn-wrap btn-wrap--nav">\
            <button class="quiz-btn quiz-btn--back">НАЗАД</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap btn-wrap--nav">\
            <button class="quiz-btn quiz-btn--next" disabled>ДАЛЕЕ</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    <div id="s6" class="quiz-screen hidden">\
      <div class="quiz-left quiz-left--salmon">\
        <span class="quiz-counter">6/6</span>\
        <img class="quiz-left__img" src="https://files.carrotquest.app/message-images/71534/71534-1781174562412-8g5rjs5k.png" alt="">\
      </div>\
      <div class="quiz-right">\
          <img src="https://files.carrotquest.app/message-images/71534/71534-1781172894647-df4tziln.png" alt="" class="mob_background">\
        <p class="quiz-question">В профессии искусствоведа есть нюанс. На старте доход будет скромный, но через 1-2 года вполне реально прийти в частный сектор и начать зарабатывать от 150 тыс. рублей в месяц. Как Вам такая правда?</p>\
        <div class="quiz-answers">\
          <label class="quiz-answer">\
            <input type="radio" name="q6">\
            <span>Нормально, мне важнее знания и удовольствие</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q6">\
            <span>Не пугает, старт не бывает прибыльным</span>\
          </label>\
          <label class="quiz-answer">\
            <input type="radio" name="q6">\
            <span>Такая себе правда</span>\
          </label>\
        </div>\
        <span class="quiz-counter-mobile">6/6</span>\
        <div class="quiz-nav">\
          <div class="btn-wrap btn-wrap--nav">\
            <button class="quiz-btn quiz-btn--back">НАЗАД</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap btn-wrap--nav">\
            <button class="quiz-btn quiz-btn--next" disabled>ДАЛЕЕ</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
      </div>\
    </div>\
\
    <div id="s-plan" class="quiz-screen hidden">\
      <div class="quiz-left quiz-left--yellow">\
        <img class="quiz-left__img" src="https://files.carrotquest.app/message-images/71534/71534-1781174604167-pwwi1pzv.png" alt="">\
      </div>\
      <div class="quiz-right quiz-right--final">\
          <img src="https://files.carrotquest.app/message-images/71534/71534-1781510523373-t4m1xhlg.png" alt="" class="mob_background">\
        <h2 class="final-title">Готово! Я посчитал Ваш профиль 🎯</h2>\
        <p class="final-text">Сейчас расскажу, насколько программа «Искусствоведение» Вам подходит, какие направления ближе и с чего лучше начать.</p>\
        <p class="final-question">Куда прислать персональный разбор?</p>\
        <div class="plan-email-form">\
          <input class="quiz-email-input" type="email" placeholder="Введите Ваш эл. адрес" name="email">\
          <div class="quiz-checkbox-row">\
            <input type="checkbox" id="cb5" checked>\
            <label for="cb5">Я даю <span class="cb-link">согласие</span> на обработку своих персональных данных.</label>\
          </div>\
          <div class="quiz-checkbox-row">\
            <input type="checkbox" id="cb6" checked>\
            <label for="cb6">Я ознакомлен с <span class="cb-link">Политикой конфиденциальности.</span></label>\
          </div>\
          <div class="btn-wrap btn-wrap--submit">\
            <button class="quiz-btn quiz-btn--salmon js-plan-submit">ПОЛУЧИТЬ УЧЕБНЫЙ ПЛАН</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
        <div class="plan-thank hidden">\
          <p class="thank-text">Спасибо! Учебный план отправлен. Мы свяжемся с вами.</p>\
        </div>\
      </div>\
    </div>\
\
    <div id="s-final" class="quiz-screen hidden">\
      <div class="quiz-left quiz-left--yellow">\
        <img class="quiz-left__img" src="https://files.carrotquest.app/message-images/71534/71534-1781174604167-pwwi1pzv.png" alt="">\
      </div>\
      <div class="quiz-right quiz-right--final">\
          <img src="https://files.carrotquest.app/message-images/71534/71534-1781510523373-t4m1xhlg.png" alt="" class="mob_background">\
        <h2 class="final-title">Готово! Я посчитал Ваш профиль 🎯</h2>\
        <p class="final-text">Сейчас расскажу, насколько программа «Искусствоведение» Вам подходит, какие направления ближе и с чего лучше начать.</p>\
        <p class="final-question">Куда прислать персональный разбор?</p>\
        <div class="final-channels">\
          <div class="btn-wrap btn-wrap--channel">\
            <button class="quiz-btn quiz-btn--telegram js-btn-telegram">TELEGRAM</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap btn-wrap--channel">\
            <button class="quiz-btn quiz-btn--yellow-email js-btn-email">E-MAIL</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
        <div class="final-email-form hidden">\
          <input class="quiz-email-input" type="email" placeholder="Введите Ваш эл. адрес" name="email">\
          <div class="quiz-checkbox-row">\
            <input type="checkbox" id="cb1" checked>\
            <label for="cb1">Я даю <span class="cb-link">согласие</span> на обработку своих персональных данных.</label>\
          </div>\
          <div class="quiz-checkbox-row">\
            <input type="checkbox" id="cb2" checked>\
            <label for="cb2">Я ознакомлен с <span class="cb-link">Политикой конфиденциальности.</span></label>\
          </div>\
          <div class="btn-wrap btn-wrap--submit">\
            <button class="quiz-btn quiz-btn--salmon js-submit-email">ПОЛУЧИТЬ РЕЗУЛЬТАТ</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
        <div class="final-thank hidden">\
          <p class="thank-text">Спасибо! Результат отправлен. Мы свяжемся с вами.</p>\
        </div>\
      </div>\
    </div>\
\
    <div id="s-wait" class="quiz-screen hidden">\
      <div class="quiz-left quiz-left--yellow">\
        <img class="quiz-left__img" src="https://files.carrotquest.app/message-images/71534/71534-1781174604167-pwwi1pzv.png" alt="">\
      </div>\
      <div class="quiz-right quiz-right--final">\
          <img src="https://files.carrotquest.app/message-images/71534/71534-1781510666032-tyeudg2n.png" alt="" class="mob_background">\
        <h2 class="final-title">Подождите! По результатам теста Вы — #####.</h2>\
        <p class="final-text">В персональном разборе подробно расписано, насколько Вам подходит программа, какие есть перспективы в профессии, как можно углубить и расширить знания уже в ближайшее время.</p>\
        <p class="final-question">Выберите удобный канал связи, и я сразу же пришлю подробный разбор.</p>\
        <div class="wait-channels">\
          <div class="btn-wrap btn-wrap--channel">\
            <button class="quiz-btn quiz-btn--telegram js-wait-telegram">TELEGRAM</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
          <div class="btn-wrap btn-wrap--channel">\
            <button class="quiz-btn quiz-btn--yellow-email js-wait-email">E-MAIL</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
        <div class="wait-email-form hidden">\
          <input class="quiz-email-input" type="email" placeholder="Введите Ваш эл. адрес" name="email">\
          <div class="quiz-checkbox-row">\
            <input type="checkbox" id="cb3" checked>\
            <label for="cb3">Я даю <span class="cb-link">согласие</span> на обработку своих персональных данных.</label>\
          </div>\
          <div class="quiz-checkbox-row">\
            <input type="checkbox" id="cb4" checked>\
            <label for="cb4">Я ознакомлен с <span class="cb-link">Политикой конфиденциальности.</span></label>\
          </div>\
          <div class="btn-wrap btn-wrap--submit">\
            <button class="quiz-btn quiz-btn--salmon js-wait-submit">ПОЛУЧИТЬ РЕЗУЛЬТАТ</button>\
            <span class="btn-wrap__border"></span>\
          </div>\
        </div>\
        <div class="wait-thank hidden">\
          <p class="thank-text">Спасибо! Результат отправлен. Мы свяжемся с вами.</p>\
        </div>\
      </div>\
    </div>\
\
  </div>\
</div>\
<script>"use strict";\
\
var quizAnswers = [],\
  cqpopup_name = "Квиз Искусствоведение",\
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
var THRESHOLDS = {\
  natural: {\
    A: 60,\
    I: 60,\
    S: 50,\
    engagement: 1\
  },\
  researcher: {\
    I: 60\
  },\
  educator: {\
    S: 60,\
    A: 50\
  }\
};\
var SCORING = {\
  "1": [{\
    A: 2,\
    I: 1\
  }, {\
    A: 2\
  }, {\
    A: 1,\
    I: 2\
  }],\
  "2": [{\
    I: 3\
  }, {\
    I: 2\
  }, {\
    flags: ["low_investigative"]\
  }],\
  "3": [{\
    S: 3\
  }, {}, {\
    S: 2,\
    A: 1\
  }],\
  "4": [{\
    goal: "career"\
  }, {\
    goal: "depth",\
    A: 1\
  }, {\
    goal: "switch"\
  }, {\
    goal: "hobby",\
    S: 1\
  }],\
  "5": [{\
    engagement: 2,\
    A: 1,\
    I: 1\
  }, {\
    engagement: 1\
  }, {\
    engagement: 0,\
    flags: ["beginner"]\
  }],\
  "6": [{}, {}, {\
    flags: ["money_objection"]\
  }]\
};\
var ARCHETYPE_NAMES = {\
  natural: "Прирожденный искусствовед",\
  researcher: "Исследователь",\
  educator: "Просветитель",\
  amateur: "Любитель на старте"\
};\
var quizScores = {\
  A: 0,\
  I: 0,\
  S: 0\
};\
var quizEngagement = 0;\
var quizGoal = null;\
var quizFlags = [];\
var cameFromPlan = false;\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
  }\
});\
document.querySelectorAll(".quiz-close, .cq-popup__bg").forEach(function (el) {\
  el.addEventListener("click", function () {\
    var onFinal = !document.getElementById("s-final").classList.contains("hidden");\
    if (onFinal && !cameFromPlan) {\
      showScreen("wait");\
    } else {\
      carrotquest.close();\
    }\
  });\
});\
document.querySelector(".js-start-quiz").addEventListener("click", function () {\
  carrotquest.track(cqpopup_name + " - Нажал ПРОЙТИ ТЕСТ");\
  showScreen(1);\
});\
document.querySelector(".js-btn-plan").addEventListener("click", function () {\
  carrotquest.track(cqpopup_name + " - Нажал ПРОСТО ХОЧУ УЧЕБНЫЙ ПЛАН");\
  window.open("https://agena-art.getcourse.ru/dpo-uchebnyi-plan?utm_source=carrotquest&utm_medium=quiz&utm_campaign=6.1", "_blank");\
});\
document.addEventListener("click", function (e) {\
  var answer = e.target.closest(".quiz-answer");\
  if (!answer) return;\
  var screen = answer.closest(".quiz-screen");\
  if (!screen || screen.classList.contains("hidden")) return;\
  screen.querySelectorAll(".quiz-answer").forEach(function (a) {\
    a.classList.remove("active");\
  });\
  answer.classList.add("active");\
  var nextBtn = screen.querySelector(".quiz-btn--next");\
  if (nextBtn) {\
    nextBtn.disabled = false;\
  }\
});\
document.addEventListener("click", function (e) {\
  var btn = e.target.closest(".quiz-btn--next");\
  if (!btn || btn.disabled) return;\
  var screen = btn.closest(".quiz-screen");\
  var screenId = screen.id;\
  var checked = screen.querySelector("input[type=\'radio\']:checked");\
  if (checked) {\
    var answerText = checked.nextElementSibling.textContent.trim();\
    var qNum = screenId.replace("s", "");\
    var qLabel = getQuestionLabel(qNum);\
    var radios = Array.prototype.slice.call(screen.querySelectorAll("input[type=\'radio\']"));\
    applyScore(qNum, radios.indexOf(checked));\
    quizAnswers.push({\
      op: "update_or_create",\
      key: cqpopup_name + " - " + qLabel,\
      value: answerText\
    });\
  }\
  var nextNum = parseInt(screenId.replace("s", ""), 10) + 1;\
  if (nextNum > 6) {\
    var result = calculateResult();\
    quizAnswers.push({\
      op: "update_or_create",\
      key: cqpopup_name + " - Архетип",\
      value: result.fit_type\
    }, {\
      op: "update_or_create",\
      key: cqpopup_name + " - Балл совпадения",\
      value: result.fit_score\
    }, {\
      op: "update_or_create",\
      key: cqpopup_name + " - A%",\
      value: result.A_pct\
    }, {\
      op: "update_or_create",\
      key: cqpopup_name + " - I%",\
      value: result.I_pct\
    }, {\
      op: "update_or_create",\
      key: cqpopup_name + " - S%",\
      value: result.S_pct\
    }, {\
      op: "update_or_create",\
      key: cqpopup_name + " - Вовлеченность",\
      value: result.engagement\
    }, {\
      op: "update_or_create",\
      key: cqpopup_name + " - Цель",\
      value: result.goal\
    }, {\
      op: "update_or_create",\
      key: cqpopup_name + " - Температура лида",\
      value: result.lead_temp\
    }, {\
      op: "update_or_create",\
      key: cqpopup_name + " - Флаги",\
      value: result.flags.join(", ") || "none"\
    });\
    carrotquest.identify(quizAnswers);\
    carrotquest.track(cqpopup_name + " - Завершил квиз");\
    var archetypeName = ARCHETYPE_NAMES[result.fit_type] || result.fit_type;\
    var waitTitle = document.querySelector("#s-wait .final-title");\
    if (waitTitle) waitTitle.textContent = "Подождите! По результатам теста Вы — " + archetypeName + ".";\
    showScreen("final");\
  } else {\
    showScreen(nextNum);\
  }\
});\
document.addEventListener("click", function (e) {\
  if (!e.target.closest(".quiz-btn--back")) return;\
  var screen = e.target.closest(".quiz-screen");\
  var prevNum = parseInt(screen.id.replace("s", ""), 10) - 1;\
  if (prevNum < 1) prevNum = 1;\
  showScreen(prevNum);\
});\
document.querySelector(".js-btn-telegram").addEventListener("click", function () {\
  carrotquest.replied();\
  carrotquest.track(cqpopup_name + " - Выбрал TELEGRAM");\
  carrotquest.identify([{\
    op: "update_or_create",\
    key: cqpopup_name + " - Канал связи",\
    value: "Telegram"\
  }]);\
  var tgLink = "https://t.me/agena_art_manager_bot";\
  tgLink += top.carrotquest.data.user.user_signature.telegram ? "?start=" + top.carrotquest.data.user.user_signature.telegram : "";\
  window.open(tgLink, "_blank");\
  carrotquest.close();\
});\
document.querySelector(".js-btn-email").addEventListener("click", function () {\
  document.querySelector(".final-channels").classList.add("hidden");\
  document.querySelector(".final-email-form").classList.remove("hidden");\
  carrotquest.track(cqpopup_name + " - Выбрал Email");\
});\
document.querySelector(".js-submit-email").addEventListener("click", function () {\
  var emailInput = document.querySelector(".final-email-form .quiz-email-input");\
  var email = emailInput.value.trim();\
  var cb1 = document.getElementById("cb1");\
  var cb2 = document.getElementById("cb2");\
  if (!email || !isValidEmail(email)) {\
    emailInput.style.borderColor = "#e33";\
    return;\
  }\
  if (!cb1.checked || !cb2.checked) {\
    if (!cb1.checked) cb1.style.outline = "1.5px solid #e33";\
    if (!cb2.checked) cb2.style.outline = "1.5px solid #e33";\
    return;\
  }\
  cb1.style.outline = "";\
  cb2.style.outline = "";\
  carrotquest.replied();\
  carrotquest.identify([{\
    op: "update_or_create",\
    key: "$email",\
    value: email\
  }, {\
    op: "update_or_create",\
    key: cqpopup_name + " - Канал связи",\
    value: "Email"\
  }]);\
  carrotquest.track(cqpopup_name + " - Отправил email");\
  var sf = document.getElementById("s-final");\
  sf.querySelector(".final-title").classList.add("hidden");\
  sf.querySelector(".final-text").classList.add("hidden");\
  sf.querySelector(".final-question").classList.add("hidden");\
  sf.querySelector(".final-channels").classList.add("hidden");\
  sf.querySelector(".final-email-form").classList.add("hidden");\
  sf.querySelector(".final-thank").classList.remove("hidden");\
  setTimeout(carrotquest.close, 5000);\
});\
document.querySelector(".js-wait-telegram").addEventListener("click", function () {\
  carrotquest.replied();\
  carrotquest.track(cqpopup_name + " - Подождите: Выбрал TELEGRAM");\
  carrotquest.identify([{\
    op: "update_or_create",\
    key: cqpopup_name + " - Канал связи",\
    value: "Telegram"\
  }]);\
  var tgLink = "https://t.me/agena_art";\
  tgLink += top.carrotquest.data.user.user_signature.telegram ? "?start=" + top.carrotquest.data.user.user_signature.telegram : "";\
  window.open(tgLink, "_blank");\
  setTimeout(function () {\
    carrotquest.close();\
  }, 4000);\
});\
document.querySelector(".js-wait-email").addEventListener("click", function () {\
  document.querySelector(".wait-channels").classList.add("hidden");\
  document.querySelector(".wait-email-form").classList.remove("hidden");\
  carrotquest.track(cqpopup_name + " - Подождите: Выбрал Email");\
});\
document.querySelector(".js-wait-submit").addEventListener("click", function () {\
  var emailInput = document.querySelector(".wait-email-form .quiz-email-input");\
  var email = emailInput.value.trim();\
  var cb3 = document.getElementById("cb3");\
  var cb4 = document.getElementById("cb4");\
  if (!email || !isValidEmail(email)) {\
    emailInput.style.borderColor = "#e33";\
    return;\
  }\
  if (!cb3.checked || !cb4.checked) {\
    if (!cb3.checked) cb3.style.outline = "1.5px solid #e33";\
    if (!cb4.checked) cb4.style.outline = "1.5px solid #e33";\
    return;\
  }\
  cb3.style.outline = "";\
  cb4.style.outline = "";\
  carrotquest.replied();\
  carrotquest.identify([{\
    op: "update_or_create",\
    key: "$email",\
    value: email\
  }, {\
    op: "update_or_create",\
    key: cqpopup_name + " - Канал связи",\
    value: "Email"\
  }]);\
  carrotquest.track(cqpopup_name + " - Подождите: Отправил email");\
  var sw = document.getElementById("s-wait");\
  sw.querySelector(".final-title").classList.add("hidden");\
  sw.querySelector(".final-text").classList.add("hidden");\
  sw.querySelector(".final-question").classList.add("hidden");\
  sw.querySelector(".wait-channels").classList.add("hidden");\
  sw.querySelector(".wait-email-form").classList.add("hidden");\
  sw.querySelector(".wait-thank").classList.remove("hidden");\
  setTimeout(function () {\
    carrotquest.close();\
  }, 5000);\
});\
document.querySelector(".js-plan-submit").addEventListener("click", function () {\
  var emailInput = document.querySelector(".plan-email-form .quiz-email-input");\
  var email = emailInput.value.trim();\
  var cb5 = document.getElementById("cb5");\
  var cb6 = document.getElementById("cb6");\
  if (!email || !isValidEmail(email)) {\
    emailInput.style.borderColor = "#e33";\
    return;\
  }\
  if (!cb5.checked || !cb6.checked) {\
    if (!cb5.checked) cb5.style.outline = "1.5px solid #e33";\
    if (!cb6.checked) cb6.style.outline = "1.5px solid #e33";\
    return;\
  }\
  cb5.style.outline = "";\
  cb6.style.outline = "";\
  carrotquest.replied();\
  carrotquest.identify([{\
    op: "update_or_create",\
    key: "$email",\
    value: email\
  }, {\
    op: "update_or_create",\
    key: cqpopup_name + " - Канал связи",\
    value: "Email"\
  }]);\
  carrotquest.track(cqpopup_name + " - Учебный план: Отправил email");\
  var sp = document.getElementById("s-plan");\
  sp.querySelector(".final-title").classList.add("hidden");\
  sp.querySelector(".final-text").classList.add("hidden");\
  sp.querySelector(".final-question").classList.add("hidden");\
  sp.querySelector(".plan-email-form").classList.add("hidden");\
  sp.querySelector(".plan-thank").classList.remove("hidden");\
  setTimeout(carrotquest.close, 5000);\
});\
function showScreen(id) {\
  document.querySelectorAll(".quiz-screen").forEach(function (s) {\
    s.classList.add("hidden");\
  });\
  var target;\
  if (id === "final") {\
    target = document.getElementById("s-final");\
  } else if (id === "wait") {\
    target = document.getElementById("s-wait");\
  } else if (id === "plan") {\
    target = document.getElementById("s-plan");\
  } else {\
    target = document.getElementById("s" + id);\
  }\
  if (!target) return;\
  target.classList.remove("hidden");\
  var nextBtn = target.querySelector(".quiz-btn--next");\
  if (nextBtn) {\
    nextBtn.disabled = !target.querySelector("input[type=\'radio\']:checked");\
  }\
}\
function applyScore(qNum, answerIndex) {\
  var rules = SCORING[String(qNum)];\
  if (!rules || !rules[answerIndex]) return;\
  var s = rules[answerIndex];\
  if (s.A) quizScores.A += s.A;\
  if (s.I) quizScores.I += s.I;\
  if (s.S) quizScores.S += s.S;\
  if (typeof s.engagement !== "undefined") quizEngagement = s.engagement;\
  if (s.goal) quizGoal = s.goal;\
  if (s.flags) quizFlags = quizFlags.concat(s.flags);\
}\
function calculateResult() {\
  var A_MAX = 5,\
    I_MAX = 6,\
    S_MAX = 4;\
  var Apct = Math.round(quizScores.A / A_MAX * 100);\
  var Ipct = Math.round(quizScores.I / I_MAX * 100);\
  var Spct = Math.round(quizScores.S / S_MAX * 100);\
  var fit_score = Math.round(0.35 * Apct + 0.40 * Ipct + 0.25 * Spct);\
  var t = THRESHOLDS;\
  var fit_type;\
  if (Apct >= t.natural.A && Ipct >= t.natural.I && Spct >= t.natural.S && quizEngagement >= t.natural.engagement) {\
    fit_type = "natural";\
  } else if (Ipct >= t.researcher.I && Ipct >= Spct) {\
    fit_type = "researcher";\
  } else if (Spct >= t.educator.S && Apct >= t.educator.A) {\
    fit_type = "educator";\
  } else {\
    fit_type = "amateur";\
  }\
  var temp = 0;\
  if (quizGoal === "career" || quizGoal === "switch") temp += 2;else if (quizGoal === "depth") temp += 1;\
  temp += quizEngagement;\
  if (quizFlags.indexOf("money_objection") !== -1) temp -= 1;\
  var lead_temp = temp >= 3 ? "hot" : temp >= 1 ? "warm" : "cold";\
  return {\
    fit_score: fit_score,\
    fit_type: fit_type,\
    A_pct: Apct,\
    I_pct: Ipct,\
    S_pct: Spct,\
    engagement: quizEngagement,\
    goal: quizGoal,\
    lead_temp: lead_temp,\
    flags: quizFlags\
  };\
}\
function getQuestionLabel(num) {\
  var labels = {\
    "1": "Вопрос 1 - Восприятие искусства",\
    "2": "Вопрос 2 - Незнакомая работа",\
    "3": "Вопрос 3 - После лекции",\
    "4": "Вопрос 4 - Цель обучения",\
    "5": "Вопрос 5 - Посещение искусства",\
    "6": "Вопрос 6 - Доход в профессии"\
  };\
  return labels[num] || "Вопрос " + num;\
}\
function isValidEmail(email) {\
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);\
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
  key: 'Квиз Искусствоведение - попап открыт',
  value: true
}]);
localStorage["cq_popup_quiz"] = 'opened';