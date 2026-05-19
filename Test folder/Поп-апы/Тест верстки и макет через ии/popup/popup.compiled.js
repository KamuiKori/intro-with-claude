var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap" rel="stylesheet">\
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
  font-family: "Onest", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;\
  font-weight: 400;\
  color: #111111;\
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
.am-overlay {\
  position: fixed;\
  inset: 0;\
  background: rgba(17, 17, 17, 0.45);\
  background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);\
  background-size: 22px 22px;\
  z-index: 1;\
  cursor: pointer;\
}\
\
.am-modal {\
  position: relative;\
  z-index: 2;\
  width: 920px;\
  max-width: calc(100% - 40px);\
  min-height: 640px;\
  background: #ffffff;\
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.22), 0 2px 6px rgba(0, 0, 0, 0.04);\
  display: grid;\
  grid-template-columns: 380px 1fr;\
  overflow: hidden;\
}\
\
.am-close {\
  position: absolute;\
  top: 18px;\
  right: 18px;\
  z-index: 3;\
  width: 40px;\
  height: 40px;\
  padding: 0;\
  border: none;\
  background: transparent;\
  color: #111111;\
  opacity: 0.65;\
  cursor: pointer;\
  display: grid;\
  place-items: center;\
  transition: opacity 200ms ease;\
}\
\
.am-close:hover {\
  opacity: 1;\
}\
\
.am-close svg {\
  width: 14px;\
  height: 14px;\
}\
\
.am-image {\
  background: #0f1b36;\
  position: relative;\
  overflow: hidden;\
}\
\
.am-image img {\
  position: absolute;\
  inset: 0;\
  width: 100%;\
  height: 100%;\
  -o-object-fit: cover;\
     object-fit: cover;\
  -o-object-position: center;\
     object-position: center;\
  display: block;\
}\
\
.am-content {\
  padding: 56px 56px 44px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.am-state {\
  -ms-flex: 1;\
      flex: 1;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.am-state--thanks {\
  -ms-flex-pack: center;\
      justify-content: center;\
  gap: 16px;\
}\
\
.am-eyebrow {\
  font-size: 11px;\
  font-weight: 500;\
  letter-spacing: 0.22em;\
  text-transform: uppercase;\
  color: #7a7a75;\
  margin: 0;\
}\
\
.am-title {\
  font-weight: 500;\
  font-size: 30px;\
  line-height: 1.15;\
  letter-spacing: -0.015em;\
  color: #111111;\
  margin: 18px 0 12px;\
}\
\
.am-text {\
  font-size: 14px;\
  line-height: 1.55;\
  color: #7a7a75;\
  margin: 0 0 28px;\
}\
\
.am-text strong {\
  color: #111111;\
  font-weight: 500;\
}\
\
#am-form {\
  display: grid;\
  gap: 18px;\
}\
\
.am-field {\
  display: block;\
}\
\
.am-field__label {\
  display: block;\
  font-size: 11px;\
  font-weight: 500;\
  letter-spacing: 0.22em;\
  text-transform: uppercase;\
  color: #7a7a75;\
  margin-bottom: 10px;\
  transition: color 180ms ease;\
}\
\
.am-field__input {\
  width: 100%;\
  padding: 16px 18px;\
  border: 1px solid rgba(17, 17, 17, 0.14);\
  background: #ffffff;\
  font-family: inherit;\
  font-size: 16px;\
  font-weight: 400;\
  color: #111111;\
  outline: none;\
  transition: border-color 180ms ease, box-shadow 180ms ease;\
}\
\
.am-field__input::-webkit-input-placeholder {\
  color: #b9b6ae;\
  font-weight: 400;\
}\
\
.am-field__input:-ms-input-placeholder {\
  color: #b9b6ae;\
  font-weight: 400;\
}\
\
.am-field__input::-ms-input-placeholder {\
  color: #b9b6ae;\
  font-weight: 400;\
}\
\
.am-field__input::placeholder {\
  color: #b9b6ae;\
  font-weight: 400;\
}\
\
.am-field__input:focus {\
  border-color: #1a2c52;\
  box-shadow: 0 0 0 3px rgba(26, 44, 82, 0.14);\
}\
\
.am-field:focus-within .am-field__label {\
  color: #1a2c52;\
}\
\
.am-field__error {\
  display: none;\
  font-size: 11px;\
  letter-spacing: 0.04em;\
  color: #e5484d;\
  margin-top: 6px;\
}\
\
.am-field[data-error] .am-field__label {\
  color: #e5484d;\
}\
\
.am-field[data-error] .am-field__input {\
  border-color: #e5484d;\
  box-shadow: none;\
}\
\
.am-field[data-error] .am-field__error {\
  display: block;\
}\
\
.am-consent {\
  display: -ms-flexbox;\
  display: flex;\
  gap: 12px;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  cursor: pointer;\
  -webkit-user-select: none;\
      -ms-user-select: none;\
          user-select: none;\
  margin-top: 4px;\
}\
\
.am-consent__input {\
  position: absolute;\
  opacity: 0;\
  pointer-events: none;\
}\
\
.am-consent__box {\
  width: 18px;\
  height: 18px;\
  min-width: 18px;\
  border: 1px solid rgba(17, 17, 17, 0.3);\
  background: transparent;\
  border-radius: 3px;\
  display: grid;\
  place-items: center;\
  margin-top: 2px;\
  transition: all 160ms ease;\
}\
\
.am-consent__box::after {\
  content: "";\
  width: 10px;\
  height: 8px;\
  background-image: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'8\' viewBox=\'0 0 10 8\' fill=\'none\'><path d=\'M1 4L3.8 6.5L9 1\' stroke=\'%23ffffff\' stroke-width=\'1.6\'/></svg>");\
  background-repeat: no-repeat;\
  background-position: center;\
  opacity: 0;\
  transition: opacity 120ms ease;\
}\
\
.am-consent__text {\
  font-size: 12px;\
  line-height: 1.5;\
  color: #7a7a75;\
}\
\
.am-consent__text a {\
  color: #1a2c52;\
  text-decoration: underline;\
  text-underline-offset: 2px;\
}\
\
.am-consent__input:checked ~ .am-consent__box {\
  background: #1a2c52;\
  border-color: #1a2c52;\
}\
\
.am-consent__input:checked ~ .am-consent__box::after {\
  opacity: 1;\
}\
\
.am-btn {\
  width: 100%;\
  padding: 20px 28px;\
  background: #1a2c52;\
  color: #ffffff;\
  border: none;\
  font-family: inherit;\
  font-size: 13px;\
  font-weight: 500;\
  letter-spacing: 0.22em;\
  text-transform: uppercase;\
  cursor: pointer;\
  display: -ms-inline-flexbox;\
  display: inline-flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  gap: 14px;\
  margin-top: 8px;\
  box-shadow: 0 4px 14px rgba(26, 44, 82, 0.2);\
  transition: background-color 180ms ease, box-shadow 180ms ease;\
}\
\
.am-btn:hover {\
  background: #0f1b36;\
  box-shadow: 0 10px 28px rgba(26, 44, 82, 0.32);\
}\
\
.am-btn__arrow {\
  width: 22px;\
  height: 10px;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  overflow: visible;\
}\
\
@media (max-width: 700px) {\
  .am-modal {\
    max-width: 100%;\
    width: 100%;\
    min-height: 100vh;\
    grid-template-columns: 1fr;\
    grid-template-rows: 220px 1fr;\
  }\
\
  .am-close {\
    top: 16px;\
    right: 16px;\
    background: rgba(255, 255, 255, 0.18);\
    backdrop-filter: blur(10px);\
    -webkit-backdrop-filter: blur(10px);\
    color: #ffffff;\
    opacity: 1;\
    border-radius: 999px;\
  }\
\
  .am-content {\
    padding: 28px 24px 32px;\
  }\
\
  .am-title {\
    font-size: 22px;\
    margin: 12px 0 8px;\
  }\
\
  .am-text {\
    font-size: 13px;\
    margin: 0 0 20px;\
  }\
\
  #am-form {\
    gap: 14px;\
  }\
}</style>\
</head>\
<body>\
\
<div class="am-overlay" data-close></div>\
\
<div class="am-modal">\
    <button type="button" class="am-close" data-close aria-label="Закрыть">\
        <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">\
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" stroke-width="1.2"/>\
        </svg>\
    </button>\
\
    <div class="am-image">\
        <img src="https://www.figma.com/api/mcp/asset/2ad665f7-f95d-40bb-834f-667615cbf6c5" alt="">\
    </div>\
\
    <div class="am-content">\
        <div class="am-state am-state--form" id="am-form-state">\
            <div class="am-eyebrow">Заявка на консультацию</div>\
            <h2 class="am-title">Оставьте контакты — менеджер свяжется с вами</h2>\
            <p class="am-text">Подберём варианты под ваш бюджет и расскажем о действующих скидках до&nbsp;18%.</p>\
\
            <div id="am-form">\
                <div class="am-field" data-field="name">\
                    <label class="am-field__label" for="am-name">Имя</label>\
                    <input class="am-field__input" id="am-name" name="name" type="text" placeholder="Иван" autocomplete="given-name">\
                    <div class="am-field__error"></div>\
                </div>\
\
                <div class="am-field" data-field="phone">\
                    <label class="am-field__label" for="am-phone">Телефон</label>\
                    <input class="am-field__input" id="am-phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" autocomplete="tel" inputmode="tel">\
                    <div class="am-field__error"></div>\
                </div>\
\
                <div class="am-field" data-field="email">\
                    <label class="am-field__label" for="am-email">E-mail</label>\
                    <input class="am-field__input" id="am-email" name="email" type="email" placeholder="name@mail.com" autocomplete="email" inputmode="email">\
                    <div class="am-field__error"></div>\
                </div>\
\
                <label class="am-consent">\
                    <input type="checkbox" class="am-consent__input" id="am-consent" checked>\
                    <span class="am-consent__box" aria-hidden="true"></span>\
                    <span class="am-consent__text">\
                        Я принимаю условия <a href="#" target="_blank" rel="noopener">политики конфиденциальности</a> и&nbsp;даю согласие на обработку персональных данных\
                    </span>\
                </label>\
\
                <button type="button" class="am-btn" id="am-submit-btn">\
                    <span>Отправить заявку</span>\
                    <svg class="am-btn__arrow" viewBox="0 0 22 10" fill="none" aria-hidden="true">\
                        <path d="M0 5 H17 M12 1L17 5L12 9" stroke="currentColor" stroke-width="1.3" fill="none"/>\
                    </svg>\
                </button>\
            </div>\
        </div>\
\
        <div class="am-state am-state--thanks hidden" id="am-thanks-state">\
            <h2 class="am-title">Спасибо<span id="am-name-out"></span>!</h2>\
            <p class="am-text">Менеджер свяжется с вами в&nbsp;течение <strong>15&nbsp;минут</strong> в&nbsp;рабочее время (10:00&ndash;20:00&nbsp;МСК).</p>\
        </div>\
    </div>\
</div>\
\
<script>"use strict";\
\
var cqpopup_name = "Тест верстки и макет через ии",\
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
document.querySelectorAll("[data-close]").forEach(function (el) {\
  el.addEventListener("click", function () {\
    carrotquest.close();\
  });\
});\
\
// Phone masking\
(function () {\
  var phoneInput = document.getElementById("am-phone");\
  if (!phoneInput) return;\
  function maskPhone(val) {\
    var d = String(val || \'\').replace(/\\D/g, \'\').slice(0, 11);\
    if (!d) return \'\';\
    var r = \'+7\';\
    if (d.length > 1) r += \' (\' + d.slice(1, 4);\
    if (d.length >= 4) r += \') \' + d.slice(4, 7);\
    if (d.length >= 7) r += \'-\' + d.slice(7, 9);\
    if (d.length >= 9) r += \'-\' + d.slice(9, 11);\
    return r;\
  }\
  phoneInput.addEventListener("input", function (e) {\
    var masked = maskPhone(e.target.value);\
    if (e.target.value !== masked) e.target.value = masked;\
  });\
  phoneInput.addEventListener("focus", function (e) {\
    if (!e.target.value) e.target.value = \'+7 (\';\
  });\
  phoneInput.addEventListener("blur", function (e) {\
    if (e.target.value === \'+7 (\') e.target.value = \'\';\
  });\
})();\
function getFieldEl(name) {\
  return document.querySelector(\'.am-field[data-field="\' + name + \'"]\');\
}\
function setError(name, message) {\
  var field = getFieldEl(name);\
  if (!field) return;\
  if (message) {\
    field.setAttribute(\'data-error\', \'\');\
    field.querySelector(\'.am-field__error\').textContent = message;\
  } else {\
    field.removeAttribute(\'data-error\');\
  }\
}\
function clearErrors() {\
  document.querySelectorAll(\'.am-field[data-error]\').forEach(function (f) {\
    f.removeAttribute(\'data-error\');\
  });\
}\
[\'name\', \'phone\', \'email\'].forEach(function (name) {\
  var input = document.querySelector(\'.am-field[data-field="\' + name + \'"] .am-field__input\');\
  if (input) {\
    input.addEventListener(\'input\', function () {\
      setError(name, null);\
    });\
  }\
});\
document.getElementById("am-submit-btn").addEventListener("click", function () {\
  clearErrors();\
  var nameVal = document.getElementById("am-name").value.trim();\
  var phoneVal = document.getElementById("am-phone").value.trim();\
  var emailVal = document.getElementById("am-email").value.trim();\
  var consent = document.getElementById("am-consent").checked;\
  var valid = true;\
  if (!nameVal || nameVal.length < 2) {\
    setError(\'name\', \'Укажите имя\');\
    valid = false;\
  }\
  if (!phoneVal || phoneVal.replace(/\\D/g, \'\').length < 11) {\
    setError(\'phone\', \'Введите корректный номер\');\
    valid = false;\
  }\
  if (!emailVal || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(emailVal)) {\
    setError(\'email\', \'Введите корректный e-mail\');\
    valid = false;\
  }\
  if (!valid) {\
    var firstError = document.querySelector(\'.am-field[data-error] .am-field__input\');\
    if (firstError) firstError.focus();\
    return;\
  }\
  if (!consent) return;\
  carrotquest.identify({\
    "$name": nameVal\
  });\
  carrotquest.identify({\
    "$phone": phoneVal\
  });\
  carrotquest.identify({\
    "$email": emailVal\
  });\
  carrotquest.replied();\
  carrotquest.track("Тест верстки и макет через ии: оставил заявку");\
  var first = nameVal.split(/\\s+/)[0];\
  var nameOut = document.getElementById("am-name-out");\
  if (nameOut && first) nameOut.textContent = \', \' + first;\
  document.getElementById("am-form-state").classList.add("hidden");\
  document.getElementById("am-thanks-state").classList.remove("hidden");\
  setTimeout(function () {\
    carrotquest.close();\
  }, 5000);\
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