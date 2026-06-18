var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <style>\
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-font-smoothing: antialiased; -webkit-tap-highlight-color: transparent; }\
html, body { height: 100%; }\
body { overflow: hidden; font-family: "Basis Grotesque Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; }\
a { color: inherit; }\
.cq-popup__bg { position: fixed; inset: 0; background: rgba(51,51,51,0.5); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px); z-index: 0; }\
.wrapper__body { position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; padding: 15px; }\
.quiz-card { position: relative; background: #efebe1; width: 100%; max-width: 693px; padding: 10px; }\
.quiz-card::before { content: ""; position: absolute; inset: 10px; border: 1px solid #2d2d2b; pointer-events: none; z-index: 0; }\
.card-inner { position: relative; z-index: 1; padding: 30px; }\
.card-inner--center { display: flex; flex-direction: column; align-items: center; }\
.card-close { position: absolute; top: 20px; right: 20px; z-index: 10; width: 16px; height: 16px; background: transparent; border: none; cursor: pointer; padding: 0; }\
.card-close::before, .card-close::after { content: ""; position: absolute; top: 50%; left: 0; width: 100%; height: 1.5px; background: #2d2d2b; transform-origin: center; }\
.card-close::before { transform: translateY(-50%) rotate(45deg); }\
.card-close::after { transform: translateY(-50%) rotate(-45deg); }\
.quiz-title { font-size: 24px; font-weight: 700; line-height: 1.2; color: #2d2d2b; text-transform: uppercase; letter-spacing: 0.02em; margin-bottom: 16px; }\
.quiz-title--center { text-align: center; }\
.quiz-subtitle { font-size: 16px; font-weight: 400; line-height: 1.4; color: #2d2d2b; margin-bottom: 24px; }\
.quiz-subtitle--center { text-align: center; }\
.answers-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 24px; }\
.answers-grid__full { grid-column: 1 / -1; }\
.answer-btn { display: flex; align-items: center; justify-content: center; text-align: center; height: 50px; padding: 8px 16px; font-family: "Basis Grotesque Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; color: #2d2d2b; background: #efebe1; border: 1px solid #2d2d2b; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }\
.answer-btn:hover { background: #d5d0c7; }\
.answer-btn.active { background: #2d2d2b; color: #ffffff; border-color: #2d2d2b; }\
.quiz-footer { display: flex; align-items: center; justify-content: space-between; }\
.quiz-counter { font-size: 16px; font-weight: 400; color: #2d2d2b; }\
.quiz-nav { display: flex; align-items: center; gap: 8px; }\
.btn-prev, .btn-next { display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: #2d2d2b; color: #ffffff; border: none; cursor: pointer; transition: opacity 0.2s ease; }\
.btn-prev svg, .btn-next svg { display: block; flex-shrink: 0; }\
.btn-prev:disabled, .btn-next:disabled { opacity: 0.35; cursor: not-allowed; }\
.btn-prev:not(:disabled):hover, .btn-next:not(:disabled):hover { opacity: 0.8; }\
.contact-btns { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 613px; }\
.btn-contact { display: flex; align-items: center; justify-content: center; width: 100%; height: 50px; font-family: "Basis Grotesque Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; text-decoration: none; cursor: pointer; transition: opacity 0.2s ease; background: #2d2d2b; color: #ffffff; border: 1px solid #2d2d2b; }\
.btn-contact--outline { background: #efebe1; color: #2d2d2b; }\
.btn-contact:hover { opacity: 0.8; }\
.email-field { width: 100%; max-width: 613px; margin-bottom: 24px; border-bottom: 1px solid #2d2d2b; }\
.email-input { width: 100%; height: 36px; background: transparent; border: none; outline: none; font-family: "Basis Grotesque Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; color: #2d2d2b; text-align: center; }\
.email-input::placeholder { color: #2d2d2b; opacity: 0.5; }\
.btn-submit { display: flex; align-items: center; justify-content: center; width: 100%; max-width: 613px; height: 50px; font-family: "Basis Grotesque Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; color: #ffffff; background: #2d2d2b; border: none; cursor: pointer; margin-bottom: 16px; transition: opacity 0.2s ease; }\
.btn-submit:hover { opacity: 0.8; }\
.checkboxes { width: 100%; max-width: 613px; display: flex; flex-direction: column; gap: 8px; }\
.checkbox-label { display: flex; align-items: flex-start; gap: 8px; font-size: 11px; font-weight: 400; line-height: 1.5; color: #2d2d2b; cursor: pointer; }\
.checkbox-label input[type="checkbox"] { flex-shrink: 0; appearance: none; -webkit-appearance: none; width: 15px; height: 15px; margin-top: 1px; border: 1px solid #2d2d2b; background: #efebe1; cursor: pointer; position: relative; }\
.checkbox-label input[type="checkbox"]:checked::after { content: ""; position: absolute; top: 2px; left: 4px; width: 4px; height: 7px; border: 1.5px solid #2d2d2b; border-top: none; border-left: none; transform: rotate(45deg); }\
.checkbox-label a { text-decoration: underline; color: #2d2d2b; }\
.hidden { display: none !important; }\
@media (max-width: 600px) {\
  .quiz-title { font-size: 18px; }\
  .quiz-subtitle { font-size: 14px; margin-bottom: 16px; }\
  .answers-grid { grid-template-columns: 1fr; margin-bottom: 16px; }\
  .answer-btn { font-size: 14px; }\
  .answer-btn.answers-grid__full { grid-column: 1; }\
  .btn-prev, .btn-next { width: 44px; height: 44px; }\
  .card-inner { padding: 20px 16px; }\
  .quiz-card { padding: 8px; }\
  .contact-btns, .btn-submit, .email-field, .checkboxes { max-width: 100%; }\
  .btn-contact, .btn-submit, .email-input { font-size: 14px; }\
}\
    </style>\
</head>\
<body>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body">\
\
    <div class="quiz-card" id="step-1">\
        <button class="card-close" aria-label="Закрыть"></button>\
        <div class="card-inner">\
            <p class="quiz-title">Поможем подобрать то, что вам понравится</p>\
            <p class="quiz-subtitle">Всего несколько вопросов — и подборка мероприятий у вас.</p>\
            <div class="answers-grid">\
                <button class="answer-btn" data-value="Хочу посмеяться и расслабиться">Хочу посмеяться и расслабиться</button>\
                <button class="answer-btn" data-value="Хочу сильную историю и эмоции">Хочу сильную историю и эмоции</button>\
                <button class="answer-btn" data-value="Хочу что-то необычное">Хочу что-то необычное</button>\
                <button class="answer-btn" data-value="Ищу семейный формат или спокойный культурный выход">Ищу семейный формат или спокойный культурный выход</button>\
            </div>\
            <div class="quiz-footer">\
                <span class="quiz-counter">1\\4</span>\
                <div class="quiz-nav">\
                    <button class="btn-next" disabled><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>\
                </div>\
            </div>\
        </div>\
    </div>\
\
    <div class="quiz-card hidden" id="step-2">\
        <button class="card-close" aria-label="Закрыть"></button>\
        <div class="card-inner">\
            <p class="quiz-title">С кем планируете идти?</p>\
            <p class="quiz-subtitle">Выберите один вариант ответа.</p>\
            <div class="answers-grid">\
                <button class="answer-btn" data-value="Один / одна">Один / одна</button>\
                <button class="answer-btn" data-value="Вдвоём">Вдвоём</button>\
                <button class="answer-btn" data-value="С друзьями">С друзьями</button>\
                <button class="answer-btn" data-value="С ребёнком / семьёй">С ребёнком / семьёй</button>\
            </div>\
            <div class="quiz-footer">\
                <span class="quiz-counter">2\\4</span>\
                <div class="quiz-nav">\
                    <button class="btn-prev"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>\
                    <button class="btn-next" disabled><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>\
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
                <button class="answer-btn" data-value="Что-то популярное и проверенное">Что-то популярное и проверенное</button>\
                <button class="answer-btn" data-value="Что-то новое для себя">Что-то новое для себя</button>\
                <button class="answer-btn" data-value="Хочу самый простой и понятный выбор">Хочу самый простой и понятный выбор</button>\
                <button class="answer-btn" data-value="Пока просто присматриваюсь">Пока просто присматриваюсь</button>\
            </div>\
            <div class="quiz-footer">\
                <span class="quiz-counter">3\\4</span>\
                <div class="quiz-nav">\
                    <button class="btn-prev"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>\
                    <button class="btn-next" disabled><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>\
                </div>\
            </div>\
        </div>\
    </div>\
\
    <div class="quiz-card hidden" id="step-4">\
        <button class="card-close" aria-label="Закрыть"></button>\
        <div class="card-inner">\
            <p class="quiz-title">Что вам интереснее по формату?</p>\
            <p class="quiz-subtitle">Выберите один вариант ответа.</p>\
            <div class="answers-grid">\
                <button class="answer-btn" data-value="Спектакль">Спектакль</button>\
                <button class="answer-btn" data-value="Экскурсия или другой формат">Экскурсия или другой формат</button>\
                <button class="answer-btn answers-grid__full" data-value="Не принципиально, главное — чтобы понравилось">Не принципиально, главное — чтобы понравилось</button>\
            </div>\
            <div class="quiz-footer">\
                <span class="quiz-counter">4\\4</span>\
                <div class="quiz-nav">\
                    <button class="btn-prev"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>\
                    <button class="btn-next" disabled><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>\
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
                <a class="btn-contact btn-contact--outline" id="btn-telegram" href="https://t.me/sovremennik" target="_blank">В Telegram</a>\
            </div>\
        </div>\
    </div>\
\
    <div class="quiz-card quiz-card--md hidden" id="step-email">\
        <button class="card-close" aria-label="Закрыть"></button>\
        <div class="card-inner card-inner--center">\
            <p class="quiz-title quiz-title--center">Отлично, спасибо!</p>\
            <p class="quiz-subtitle quiz-subtitle--center">Куда вам отправить подборку?</p>\
            <div class="email-field">\
                <input class="email-input" type="email" id="email-input" placeholder="Введите ваш e-mail" autocomplete="email">\
            </div>\
            <button class="btn-submit" id="btn-submit">Отправить</button>\
            <div class="checkboxes">\
                <label class="checkbox-label">\
                    <input type="checkbox" id="cb1" checked>\
                    <span>Я даю <a href="https://sovremennik.ru/page/privacy-policy" target="_blank">согласие</a> на обработку своих персональных данных.</span>\
                </label>\
                <label class="checkbox-label">\
                    <input type="checkbox" id="cb2" checked>\
                    <span>Я ознакомлен с <a href="https://sovremennik.ru/page/privacy-policy" target="_blank">Политикой конфиденциальности.</a></span>\
                </label>\
            </div>\
        </div>\
    </div>\
\
</div>\
<script>\
var cqpopup_name = "Современник - Квиз";\
var carrotquest = {\
  track: function(n, p) { parent.window.carrotquest.track(n, p); },\
  identify: function(p) { parent.window.carrotquest.identify(p); },\
  trackMessageInteraction: function(id, type) { parent.window.carrotquest.trackMessageInteraction(id, type); },\
  animation: function() { top.postMessage({ command: "carrotquest.animationPopup", id: "{{ sending_id }}", cqpopup_name: cqpopup_name }, "*"); },\
  close: function() { top.postMessage({ command: "carrotquest.closePopup", id: "{{ sending_id }}" }, "*"); },\
  replied: function() { this.trackMessageInteraction("{{ sending_id }}", "replied"); this.track("Ответил в попап"); this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name); },\
  clicked: function() { this.trackMessageInteraction("{{ sending_id }}", "clicked"); this.track("Перешел по ссылке в попапе"); this.track("Коммуникации: Перешел по ссылке в сообщении - " + cqpopup_name); },\
  read: function() { this.trackMessageInteraction("{{ sending_id }}", "read"); this.track("Прочитал попап"); this.track("Коммуникации: Прочитано сообщение - " + cqpopup_name); }\
};\
var questionKeys = { "step-1": "Что хочет", "step-2": "С кем пойдет", "step-3": "Что важно при выборе", "step-4": "Формат" };\
var quizSteps = ["step-1","step-2","step-3","step-4","step-contact"];\
var currentStepIndex = 0;\
document.addEventListener("readystatechange", function() { if (document.readyState === "complete") { carrotquest.read(); carrotquest.animation(); } });\
function showStep(stepId) { document.querySelectorAll(".quiz-card").forEach(function(c) { c.classList.add("hidden"); }); document.getElementById(stepId).classList.remove("hidden"); }\
document.addEventListener("click", function(e) {\
  var btn = e.target.closest(".answer-btn");\
  if (!btn) return;\
  var card = btn.closest(".quiz-card");\
  if (!card || card.classList.contains("hidden")) return;\
  card.querySelectorAll(".answer-btn").forEach(function(b) { b.classList.remove("active"); });\
  btn.classList.add("active");\
  var next = card.querySelector(".btn-next");\
  if (next) next.disabled = false;\
});\
document.addEventListener("click", function(e) {\
  var btnNext = e.target.closest(".btn-next");\
  if (!btnNext || btnNext.disabled) return;\
  var card = btnNext.closest(".quiz-card");\
  if (!card) return;\
  var stepId = card.id;\
  var sel = card.querySelector(".answer-btn.active");\
  if (!sel) return;\
  var answer = sel.dataset.value;\
  var num = parseInt(stepId.replace("step-",""), 10);\
  carrotquest.track(cqpopup_name + " - Ответил в квизе на " + num + " вопрос");\
  var key = questionKeys[stepId];\
  if (key) carrotquest.identify([{ op: "update_or_create", key: key, value: answer }]);\
  currentStepIndex++;\
  var next = quizSteps[currentStepIndex];\
  if (next) showStep(next);\
});\
document.addEventListener("click", function(e) {\
  var btnPrev = e.target.closest(".btn-prev");\
  if (!btnPrev) return;\
  if (currentStepIndex > 0) {\
    currentStepIndex--;\
    var prevId = quizSteps[currentStepIndex];\
    showStep(prevId);\
    var pc = document.getElementById(prevId);\
    var nx = pc ? pc.querySelector(".btn-next") : null;\
    if (nx) nx.disabled = !pc.querySelector(".answer-btn.active");\
  }\
});\
document.addEventListener("click", function(e) { if (e.target.id === "btn-email") showStep("step-email"); });\
document.addEventListener("click", function(e) { if (e.target.closest("#btn-telegram")) carrotquest.clicked(); });\
document.addEventListener("click", function(e) {\
  if (e.target.id !== "btn-submit") return;\
  var inp = document.getElementById("email-input");\
  var cb1 = document.getElementById("cb1");\
  var cb2 = document.getElementById("cb2");\
  if (!inp) return;\
  var email = inp.value.trim();\
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { inp.closest(".email-field").style.borderBottomColor = "#c0392b"; return; }\
  if (cb1 && !cb1.checked) return;\
  if (cb2 && !cb2.checked) return;\
  inp.closest(".email-field").style.borderBottomColor = "";\
  carrotquest.replied();\
  carrotquest.track(cqpopup_name + " - Оставил email");\
  carrotquest.identify([{ op: "update_or_create", key: "$email", value: email }]);\
  setTimeout(function() { carrotquest.close(); }, 1500);\
});\
document.addEventListener("click", function(e) {\
  if (e.target.closest(".card-close") || e.target.classList.contains("cq-popup__bg")) carrotquest.close();\
});\
<\/script>\
</body>\
</html>\
';\
\
var iframe = document.createElement('iframe');\
iframe.id = 'carrot_frame_{{ sending_id }}';\
iframe.frameBorder = 0;\
iframe.style.opacity = "0";\
iframe.style.position = 'fixed';\
iframe.style.zIndex = '9999999999';\
iframe.style.width = '100%';\
iframe.style.height = '100%';\
iframe.style.transition = '.5s';\
iframe.style.top = '0';\
iframe.style.right = '0';\
iframe.style.left = '0';\
iframe.style.bottom = '0';\
\
document.body.appendChild(iframe);\
\
var iframeContent = (iframe.contentWindow || iframe.contentDocument);\
if (iframeContent.document) iframeContent = iframeContent.document;\
\
iframeContent.open();\
iframeContent.writeln(popupContent);\
iframeContent.close();\
\
carrotquest.identify([{ op: 'update_or_create', key: 'popup', value: 'opened' }]);\
localStorage["cq_popup"] = 'opened';
