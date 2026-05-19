var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
}\
\
html,\
body {\
  height: 100%;\
  font-family: "Inter", sans-serif;\
  font-weight: 400;\
}\
\
body {\
  overflow: hidden;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
a {\
  color: inherit;\
}\
\
.hidden {\
  display: none !important;\
}\
\
.ar-overlay {\
  position: fixed;\
  inset: 0;\
  background: rgba(0, 0, 0, 0.4);\
  z-index: 1;\
  cursor: pointer;\
}\
\
.ar-popup {\
  position: relative;\
  z-index: 2;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  width: 699px;\
  height: 496px;\
  border-radius: 24px;\
  background: #edf1fa;\
  overflow: hidden;\
}\
\
.ar-close {\
  position: absolute;\
  top: 15px;\
  right: 15px;\
  width: 15px;\
  height: 15px;\
  background: transparent;\
  border: none;\
  cursor: pointer;\
  padding: 0;\
  z-index: 10;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.ar-image {\
  width: 325px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.ar-image img {\
  width: 100%;\
  height: 100%;\
  -o-object-fit: cover;\
     object-fit: cover;\
  display: block;\
  border-radius: 24px;\
}\
\
.ar-panel {\
  -ms-flex: 1;\
      flex: 1;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  overflow-y: auto;\
}\
\
.ar-state {\
  -ms-flex: 1;\
      flex: 1;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.ar-state--form {\
  padding: 35px 20px 20px 20px;\
}\
\
.ar-state--thanks {\
  padding: 20px;\
  -ms-flex-pack: center;\
      justify-content: center;\
  gap: 15px;\
}\
\
.ar-title {\
  font-size: 20px;\
  font-weight: 600;\
  color: #1a2c52;\
  line-height: normal;\
  margin-bottom: 15px;\
}\
\
.ar-text {\
  font-size: 16px;\
  color: #1a2c52;\
  line-height: normal;\
  margin-bottom: 15px;\
}\
\
.ar-state--form > .ar-text {\
  margin-bottom: 20px;\
}\
\
#ar-form {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.ar-input {\
  width: 100%;\
  height: 49px;\
  background: #edf1fa;\
  border: 1px solid #1a2c52;\
  border-radius: 1000px;\
  padding: 0 32px;\
  font-family: "Inter", sans-serif;\
  font-size: 14px;\
  letter-spacing: -0.28px;\
  color: #1a2c52;\
  text-align: center;\
  outline: none;\
  margin-bottom: 15px;\
}\
\
.ar-input::-webkit-input-placeholder {\
  color: #1a2c52;\
  opacity: 0.7;\
}\
\
.ar-input:-ms-input-placeholder {\
  color: #1a2c52;\
  opacity: 0.7;\
}\
\
.ar-input::-ms-input-placeholder {\
  color: #1a2c52;\
  opacity: 0.7;\
}\
\
.ar-input::placeholder {\
  color: #1a2c52;\
  opacity: 0.7;\
}\
\
.ar-input.success {\
  border-color: #388e3c;\
}\
\
.ar-input.error {\
  border-color: #d32f2f;\
}\
\
.ar-btn {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  height: 49px;\
  background: #1a2c52;\
  color: #fff;\
  border: none;\
  border-radius: 1000px;\
  padding: 0 32px;\
  font-family: "Inter", sans-serif;\
  font-size: 14px;\
  letter-spacing: -0.28px;\
  cursor: pointer;\
  text-decoration: none;\
  transition: opacity 0.2s ease;\
  margin-bottom: 15px;\
}\
\
.ar-btn:hover {\
  opacity: 0.85;\
  text-decoration: none;\
}\
\
.ar-disclaimer {\
  font-size: 12px;\
  line-height: normal;\
  color: rgba(10, 35, 66, 0.5);\
}\
\
.ar-disclaimer a {\
  text-decoration: underline;\
  text-underline-offset: 2px;\
}\
\
.ar-state--thanks .ar-text:last-of-type {\
  margin-bottom: 5px;\
}\
\
.ar-state--thanks .ar-btn {\
  margin-bottom: 0;\
}\
\
@media (max-width: 499px) {\
  .ar-popup {\
    -ms-flex-direction: column;\
        flex-direction: column;\
    width: 355px;\
    height: auto;\
    border-radius: 16px;\
  }\
\
  .ar-close {\
    top: 10px;\
    right: 10px;\
  }\
\
  .ar-image {\
    width: 100%;\
    height: 185px;\
    -ms-flex-negative: 0;\
        flex-shrink: 0;\
  }\
\
  .ar-image img {\
    border-radius: 16px;\
  }\
\
  .ar-panel {\
    height: auto;\
    overflow-y: visible;\
  }\
\
  .ar-state {\
    -ms-flex: none;\
        flex: none;\
  }\
\
  .ar-state--form {\
    padding: 20px;\
  }\
\
  .ar-state--thanks {\
    -ms-flex-pack: start;\
        justify-content: flex-start;\
    padding: 20px;\
  }\
\
  .ar-title {\
    font-size: 18px;\
  }\
\
  .ar-text {\
    font-size: 14px;\
  }\
}</style>\
</head>\
<body>\
<div class="ar-overlay" data-popmechanic-close></div>\
<div class="ar-popup">\
    <button class="ar-close" data-popmechanic-close aria-label="Закрыть">\
        <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\
            <path d="M18 0.818077L17.1819 0L9 8.18192L0.818077 0L0 0.818077L8.18192 9L0 17.1819L0.818077 18L9 9.81808L17.1819 18L18 17.1819L9.81808 9L18 0.818077Z" fill="#1a2c52"/>\
        </svg>\
    </button>\
\
    <div class="ar-image">\
        <img src="https://www.figma.com/api/mcp/asset/2ad665f7-f95d-40bb-834f-667615cbf6c5" alt="Атлас Ривер">\
    </div>\
\
    <div class="ar-panel">\
        <div class="ar-state ar-state--form" id="ar-form-state">\
            <h2 class="ar-title">Хотите жить рядом с парком и набережной?</h2>\
            <p class="ar-text">«Атлас Ривер» идеальный вариант. Оставьте телефон, расскажем о проекте и ценах подробнее.</p>\
            <div id="ar-form">\
                <input class="ar-input" type="tel" name="phone" placeholder="Введите телефон">\
                <input class="ar-input" type="email" name="email" placeholder="Введите e-mail">\
                <input class="ar-input" type="text" name="name" placeholder="Введите имя">\
                <button type="button" class="ar-btn" id="ar-submit-btn">Оставить заявку</button>\
                <p class="ar-disclaimer">\
                    Нажимая на кнопку вы даёте согласие на\
                    <a href="https://atlasdevelopment.su/policy" target="_blank">обработку персональных данных</a>\
                </p>\
            </div>\
        </div>\
\
        <div class="ar-state ar-state--thanks hidden" id="ar-thanks-state">\
            <h2 class="ar-title">Спасибо!</h2>\
            <p class="ar-text">Получили контакты и свяжемся с вами в ближайшее время.</p>\
            <p class="ar-text">Переходите в наш Telegram, чтобы оставаться на связи.</p>\
            <a class="ar-btn" href="#" target="_blank" id="ar-tg-btn">Перейти в Telegram</a>\
        </div>\
    </div>\
</div>\
<script>"use strict";\
\
var cqpopup_name = "Атлас Ривер — лидген",\
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
  }\
});\
document.querySelectorAll("[data-popmechanic-close]").forEach(function (el) {\
  el.addEventListener("click", function () {\
    carrotquest.close();\
  });\
});\
var tgBtn = document.getElementById("ar-tg-btn");\
if (tgBtn) {\
  tgBtn.addEventListener("click", function () {\
    carrotquest.clicked();\
  });\
}\
(function () {\
  var phoneInput = document.querySelector("[type=tel]");\
  var form = document.getElementById("ar-form");\
  var formattedPrefix = "+7 (";\
  if (!phoneInput) return;\
  function getNumbersOnly(input) {\
    return input.value.replace(/\\D/g, "");\
  }\
  function buildMaskedValue(inputNumbersValue) {\
    var result = formattedPrefix;\
    if (!(inputNumbersValue[0] === "7" || inputNumbersValue[0] === "8")) {\
      return result + inputNumbersValue;\
    }\
    if (inputNumbersValue.length > 1) result += inputNumbersValue.substring(1, 4);\
    if (inputNumbersValue.length >= 5) result += ") " + inputNumbersValue.substring(4, 7);\
    if (inputNumbersValue.length >= 8) result += "–" + inputNumbersValue.substring(7, 9);\
    if (inputNumbersValue.length >= 10) result += "–" + inputNumbersValue.substring(9, 11);\
    return result;\
  }\
  function checkPhoneReady(value) {\
    if (value.length === 18) {\
      form.classList.add("form-ready");\
      phoneInput.classList.add("success");\
      phoneInput.classList.remove("error");\
    } else {\
      form.classList.remove("form-ready");\
      phoneInput.classList.remove("success");\
      phoneInput.classList.remove("error");\
    }\
  }\
  phoneInput.addEventListener("input", function (e) {\
    var numbersValue = getNumbersOnly(e.target);\
    if (e.inputType === "deleteContentBackward" && numbersValue.length === 1) {\
      e.target.value = "";\
      return;\
    }\
    if (e.inputType === "insertFromPaste") {\
      if ((numbersValue[0] === "7" || numbersValue[0] === "8") && e.target.value !== "") {\
        numbersValue = numbersValue.substring(1);\
      }\
      if (numbersValue[0] === "9") {\
        numbersValue = "8" + numbersValue;\
      }\
    }\
    e.target.value = buildMaskedValue(numbersValue);\
    checkPhoneReady(e.target.value);\
  });\
  phoneInput.addEventListener("focus", function (e) {\
    if (e.target.value === "") e.target.value = formattedPrefix;\
  });\
  phoneInput.addEventListener("blur", function (e) {\
    if (e.target.value === formattedPrefix) e.target.value = "";\
    if (e.target.value.length !== 18 && e.target.value !== "") {\
      form.classList.remove("form-ready");\
      phoneInput.classList.add("error");\
      phoneInput.classList.remove("success");\
    }\
  });\
  phoneInput.addEventListener("keyup", function (e) {\
    if (e.target.selectionStart <= 3) e.target.selectionStart = 4;\
  });\
  phoneInput.addEventListener("click", function (e) {\
    if (e.target.selectionStart <= 3) e.target.selectionStart = 4;\
  });\
})();\
document.getElementById("ar-submit-btn").addEventListener("click", function () {\
  var form = document.getElementById("ar-form");\
  var phone = form.querySelector("[name=phone]").value;\
  var email = form.querySelector("[name=email]").value;\
  var name = form.querySelector("[name=name]").value;\
  if (!form.classList.contains("form-ready")) return;\
  if (!email || !name) return;\
  carrotquest.identify({\
    "$phone": phone\
  });\
  carrotquest.identify({\
    "$email": email\
  });\
  carrotquest.identify({\
    "$name": name\
  });\
  carrotquest.replied();\
  carrotquest.track("Атлас Ривер: оставил заявку");\
  document.getElementById("ar-form-state").classList.add("hidden");\
  document.getElementById("ar-thanks-state").classList.remove("hidden");\
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