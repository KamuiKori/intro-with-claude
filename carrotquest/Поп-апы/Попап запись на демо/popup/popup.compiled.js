var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Inter", sans-serif;\
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
.d_flex {\
  display: -ms-flexbox;\
  display: flex;\
}\
\
.hidden {\
  display: none !important;\
}\
\
.success {\
  border-color: #5cd65c !important;\
}\
\
.error {\
  border-color: #e05252 !important;\
}\
\
.cq-popup__bg {\
  display: block;\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background-color: rgba(0, 0, 0, 0.3);\
}\
\
.cq-popup__close {\
  cursor: pointer;\
  height: 16px;\
  width: 16px;\
  position: absolute;\
  top: 24px;\
  right: 24px;\
  z-index: 99;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #000;\
  content: " ";\
  height: 18px;\
  position: absolute;\
  left: 0;\
  right: 0;\
  top: 0;\
  bottom: 0;\
  margin: auto;\
  width: 2px;\
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
.wrapper__body {\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  height: 100%;\
  padding: 15px;\
  box-sizing: border-box;\
}\
\
.cq-popup__body {\
  position: relative;\
  z-index: 2;\
  width: 100%;\
  max-width: 500px;\
  max-height: 100%;\
}\
\
.cq-popup__card {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  background: #FFFFFF;\
  border-radius: 40px;\
  overflow: hidden;\
  width: 100%;\
  height: 100%;\
}\
\
.cq-popup__illustration {\
  position: absolute;\
  left: 15px;\
  top: 73px;\
}\
\
.cq-popup__illustration--thank {\
  padding: 0;\
}\
\
.illustration {\
  display: block;\
}\
\
.illustration.illustration--desktop {\
  max-width: 346px;\
}\
\
.illustration--mobile {\
  width: 100%;\
  max-width: 432px;\
  height: auto;\
  margin: 0 auto;\
}\
\
.illustration--thanks {\
  height: auto;\
  display: block;\
  position: absolute;\
  top: 30px;\
  left: 0;\
}\
\
.cq-popup__content {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-pack: center;\
      justify-content: center;\
  gap: 20px;\
  padding: 40px 30px 30px 360px;\
  width: 100%;\
}\
\
.cq-popup__title {\
  font-weight: 700;\
  font-size: 28px;\
  line-height: 36px;\
  color: #000;\
}\
\
.cq-popup__text {\
  font-weight: 400;\
  font-size: 16px;\
  line-height: 24px;\
  color: #000;\
}\
\
.cq-popup__text p + p {\
  margin-top: 16px;\
}\
\
.cq-popup__fields {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  gap: 10px;\
  width: 100%;\
}\
\
.cq_popup-input {\
  width: 100%;\
  height: 54px;\
  background: #fff;\
  border: 1px solid #d9d9d9;\
  border-radius: 10px;\
  color: #000;\
  font-size: 16px;\
  line-height: 24px;\
  padding: 0 30px;\
  outline: none;\
  transition: border-color 0.2s ease-in-out;\
}\
\
.cq_popup-input::-webkit-input-placeholder {\
  color: #c4c4c4;\
}\
\
.cq_popup-input:-ms-input-placeholder {\
  color: #c4c4c4;\
}\
\
.cq_popup-input::-ms-input-placeholder {\
  color: #c4c4c4;\
}\
\
.cq_popup-input::placeholder {\
  color: #c4c4c4;\
}\
\
.cq_popup-input:focus {\
  border-color: #FF8833;\
}\
\
.cq-popup__submit {\
  width: 100%;\
  height: 54px;\
  background: #FF8833;\
  color: #fff;\
  font-weight: 700;\
  font-size: 16px;\
  line-height: 24px;\
  text-align: center;\
  border: none;\
  border-radius: 10px;\
  cursor: pointer;\
  transition: background-color 0.2s ease-in-out;\
}\
\
.cq-popup__consents {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  gap: 6px;\
}\
\
.cq-popup__checkbox-row {\
  position: relative;\
}\
\
.cq-popup__link {\
  color: #000;\
  text-decoration: underline;\
  text-underline-offset: 2px;\
}\
\
[type=checkbox].cq-popup__checkbox {\
  position: absolute;\
  left: 0;\
  top: 2px;\
  opacity: 0.01;\
  width: 16px;\
  height: 16px;\
}\
\
[type=checkbox].cq-popup__checkbox + label {\
  position: relative;\
  display: inline-block;\
  padding-left: 24px;\
  font-size: 13px;\
  line-height: 1.5;\
  color: #999;\
  cursor: pointer;\
}\
\
[type=checkbox].cq-popup__checkbox + label:before {\
  content: "";\
  position: absolute;\
  left: 0;\
  top: 1px;\
  width: 16px;\
  height: 16px;\
  background: #fff;\
  border: 1px solid #c4c4c4;\
  border-radius: 4px;\
  transition: all 0.2s ease-in-out;\
}\
\
[type=checkbox].cq-popup__checkbox:checked + label:before {\
  background: #FF8833;\
  border-color: #FF8833;\
}\
\
[type=checkbox].cq-popup__checkbox + label:after {\
  content: "";\
  position: absolute;\
  left: 3px;\
  top: 5px;\
  width: 10px;\
  height: 5px;\
  border-left: 2px solid #fff;\
  border-bottom: 2px solid #fff;\
  -webkit-transform: rotate(-45deg) scale(0);\
          transform: rotate(-45deg) scale(0);\
  opacity: 0;\
  transition: all 0.15s ease-in-out;\
}\
\
[type=checkbox].cq-popup__checkbox:checked + label:after {\
  -webkit-transform: rotate(-45deg) scale(1);\
          transform: rotate(-45deg) scale(1);\
  opacity: 1;\
}\
\
.cq-popup__card--thank {\
  max-width: 500px;\
  margin: 0 auto;\
  height: auto;\
  position: relative;\
}\
\
.cq-popup__card--thank .cq-popup__illustration--thank {\
  width: 100%;\
}\
\
.cq-popup__card--thank .cq-popup__content {\
  gap: 12px;\
  padding: 0px 30px;\
  border-radius: 40px;\
  margin-top: 172px;\
  background: #fff;\
  height: 160px;\
  z-index: 1000;\
}\
\
@media (min-width: 860px) {\
  .cq-popup__body {\
    max-width: 823px;\
  }\
\
  .cq-popup__card:not(.cq-popup__card--thank) {\
    -ms-flex-direction: row;\
        flex-direction: row;\
    -ms-flex-align: stretch;\
        align-items: stretch;\
  }\
\
  .illustration--mobile {\
    display: none;\
  }\
\
  .cq-popup__card:not(.cq-popup__card--thank) .cq-popup__content {\
    width: auto;\
    -ms-flex: 1;\
        flex: 1;\
  }\
}\
\
@media (max-width: 859px) {\
  .cq-popup__body {\
    max-width: 335px;\
  }\
\
  .cq-popup__close {\
    top: 10px;\
    right: 10px;\
    width: 12px;\
    height: 12px;\
  }\
\
  .cq-popup__close:before,\
  .cq-popup__close:after {\
    height: 14px;\
  }\
\
  .cq-popup__card {\
    border-radius: 20px;\
    height: auto;\
  }\
\
  .cq-popup__illustration {\
    position: static;\
    padding: 15px 20px 0;\
  }\
\
  .illustration--mobile {\
    width: 100%;\
    max-width: 295px;\
  }\
\
  .illustration--desktop {\
    display: none;\
  }\
\
  .cq-popup__content {\
    padding: 20px 20px 24px;\
  }\
\
  .cq-popup__consents {\
    margin-top: -10px;\
  }\
\
  .cq-popup__title {\
    font-size: 20px;\
    line-height: 26px;\
  }\
\
  .cq-popup__text {\
    font-size: 14px;\
    line-height: 18px;\
  }\
\
  .cq_popup-input {\
    height: 50px;\
    font-size: 14px;\
  }\
\
  .cq-popup__submit {\
    height: 50px;\
    font-size: 14px;\
  }\
\
  [type=checkbox].cq-popup__checkbox {\
    width: 14px;\
    height: 14px;\
  }\
\
  [type=checkbox].cq-popup__checkbox + label {\
    font-size: 10px;\
    padding-left: 20px;\
  }\
\
  [type=checkbox].cq-popup__checkbox + label:before {\
    width: 14px;\
    height: 14px;\
  }\
\
  [type=checkbox].cq-popup__checkbox + label:after {\
    left: 3px;\
    top: 4px;\
    width: 8px;\
    height: 4px;\
  }\
\
  .cq-popup__card--thank .cq-popup__illustration--thank {\
    display: none;\
  }\
\
  .cq-popup__card--thank .cq-popup__content {\
    position: static;\
    margin-top: 0;\
    height: auto;\
    padding: 40px 30px;\
    border-radius: 20px;\
    gap: 20px;\
    text-align: center;\
  }\
}</style>\
</head>\
\
<body>\
<div class="cq-popup__bg" data-popmechanic-close></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body">\
        <form id="form" class="cq-popup__card first-form">\
            <a class="cq-popup__close"></a>\
            <div class="cq-popup__illustration">\
                <img src="https://files.carrotquest.app/message-images/100/100-1783507310999-iq7g8w20.png" class="illustration illustration--desktop" alt="">\
                <img src="https://files.carrotquest.app/message-images/100/100-1783675744836-azjoti5h.png" class="illustration illustration--mobile" alt="">\
            </div>\
            <div class="cq-popup__content">\
                <p class="cq-popup__title">Презентация Carrot quest</p>\
                <div class="cq-popup__text">\
                    <p>Покажем, как Carrot quest будет работать именно в вашей воронке</p>\
                </div>\
                <div class="cq-popup__fields">\
                    <input class="cq_popup-input name" type="text" name="name" placeholder="Ваше имя" required>\
                    <input class="cq_popup-input email" type="email" name="email" placeholder="Ваша почта" required>\
                    <input class="cq_popup-input phone" type="tel" name="phone" placeholder="Ваш телефон" required>\
                    <input class="cq_popup-input site" type="text" name="site" placeholder="Адрес сайта" required>\
                    <button type="submit" class="cq-popup__submit" data-popmechanic-submit>\
                        Записаться на демо\
                    </button>\
                </div>\
                <div class="cq-popup__consents">\
                    <div class="cq-popup__checkbox-row">\
                        <input type="checkbox" id="checkbox-1" class="cq-popup__checkbox" required>\
                        <label for="checkbox-1">Я даю <a href="https://www.carrotquest.io/terms-and-policies/soglasie-4/" target="_blank" class="cq-popup__link">согласие</a> на <a href="https://www.carrotquest.io/terms-and-policies/" target="_blank" class="cq-popup__link">обработку персональных данных</a></label>\
                    </div>\
                    <div class="cq-popup__checkbox-row">\
                        <input type="checkbox" id="checkbox-2" class="cq-popup__checkbox" required>\
                        <label for="checkbox-2">Я даю <a href="https://www.carrotquest.io/terms-and-policies/soglasie-4/" target="_blank" class="cq-popup__link">согласие</a> на\
                            <a href="https://www.carrotquest.io/terms-and-policies/soglasie-5/" target="_blank" class="cq-popup__link">обратный звонок</a></label>\
                    </div>\
                    <div class="cq-popup__checkbox-row">\
                        <input type="checkbox" id="checkbox-3" class="cq-popup__checkbox">\
                        <label for="checkbox-3">Я даю <a href="https://www.carrotquest.io/terms-and-policies/soglasie-4/" target="_blank" class="cq-popup__link">согласие</a> на <a href="https://www.carrotquest.io/terms-and-policies/soglasie-3/" target="_blank" class="cq-popup__link">получение email-рассылки</a></label>\
                    </div>\
                </div>\
            </div>\
        </form>\
        <section id="thank" class="cq-popup__card cq-popup__card--thank second-form hidden">\
                <a class="cq-popup__close"></a>\
                <img src="https://files.carrotquest.app/message-images/100/100-1783507674411-ksfiog1a.png" class="illustration illustration--thanks" alt="">\
            <div class="cq-popup__content">\
                <p class="cq-popup__title">Спасибо!</p>\
                <p class="cq-popup__text">Менеджер свяжется с вами в ближайшее время</p>\
            </div>\
        </section>\
    </div>\
</div>\
<script>"use strict";\
\
var cqpopup_name = "Попап запись на демо",\
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
document.addEventListener("submit", function (e) {\
  e.preventDefault();\
  var form = e.target.closest("#form"),\
    name = document.querySelector(\'.cq_popup-input.name\').value,\
    phone = document.querySelector(\'.cq_popup-input.phone\').value,\
    email = document.querySelector(\'.cq_popup-input.email\').value,\
    site = document.querySelector(\'.cq_popup-input.site\').value,\
    isSiteValid = validateSiteURL(site),\
    isEmailValid = validateEmail(email),\
    checkbox1 = document.getElementById(\'checkbox-1\'),\
    checkbox2 = document.getElementById(\'checkbox-2\'),\
    checkbox3 = document.getElementById(\'checkbox-3\');\
  if (form && name && phone && checkbox1.checked && checkbox2.checked && isSiteValid && isEmailValid) {\
    carrotquest.identify([{\
      op: \'update_or_create\',\
      key: \'$name\',\
      value: name\
    }, {\
      op: \'update_or_create\',\
      key: \'$phone\',\
      value: phone\
    }, {\
      op: \'update_or_create\',\
      key: \'$email\',\
      value: email\
    }, {\
      op: \'update_or_create\',\
      key: \'Адрес сайта\',\
      value: site\
    }, {\
      op: \'update_or_create\',\
      key: \'Механика CQ\',\
      value: cqpopup_name\
    }, {\
      op: \'update_or_create\',\
      key: \'$data_processing_policy_is_allowed\',\
      value: checkbox1.checked ? \'Разрешено\' : \'Не разрешено\'\
    }, {\
      op: \'update_or_create\',\
      key: \'$phone_storage_is_allowed\',\
      value: checkbox2.checked ? \'Разрешено\' : \'Не разрешено\'\
    }, {\
      op: \'update_or_create\',\
      key: \'$email_storage_is_allowed\',\
      value: checkbox3.checked ? \'Разрешено\' : \'Не разрешено\'\
    }]);\
    hidden_visible(\'#form\', \'#thank\');\
    carrotquest.replied();\
    setTimeout(carrotquest.close, 5000);\
  }\
});\
function validateSiteURL(input) {\
  var arrayOfForbidden = ["нет", "нету", "нт", "carrotquest.io", "test.com", "test.ru", "test.io", "carrotquest", "carrot guest", "все", "нет компании", "отсутствует", "свой", "сайт", "добрый день", "привет", "здравствуйте", "пожалуйста", "любая", "любой", "google.com", "google.ru", "ya.ru", "лид", "незнаю", "не знаю", "тест", "neznaiu", "ne znaiu", "пока что нет", "пока нет", "хз", "vk.ru", "vk.com", "web.whatsapp.com", "whatsapp.com", "whatsapp.ru", "www.carrquest.io"];\
  if (!input || typeof input !== \'string\') {\
    return false;\
  }\
  var trimmed = input.trim();\
  if (trimmed.length === 0) {\
    return false;\
  }\
  var cleaned = removeUTMParameters(trimmed);\
  var cleanedLower = cleaned.toLowerCase();\
  var isForbidden = arrayOfForbidden.some(function (item) {\
    return item.toLowerCase() === cleanedLower;\
  });\
  if (isForbidden) {\
    return false;\
  }\
  var domainCandidate = cleanedLower.replace(/^https?:\\/\\//, \'\').replace(/^www\\./, \'\').split(\'/\')[0].split(\'?\')[0].split(\':\')[0];\
  var isDomainForbidden = arrayOfForbidden.some(function (item) {\
    return item.toLowerCase() === domainCandidate;\
  });\
  if (isDomainForbidden) {\
    return false;\
  }\
  var domainPattern = /^([a-z0-9а-яё]([a-z0-9а-яё-]{0,61}[a-z0-9а-яё])?\\.)+[a-z]{2,}$/i;\
  return domainPattern.test(domainCandidate);\
}\
function validateEmail(input) {\
  if (!input || typeof input !== \'string\') {\
    return false;\
  }\
  var trimmed = input.trim();\
  if (trimmed.length === 0) {\
    return false;\
  }\
  var emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;\
  return emailPattern.test(trimmed);\
}\
document.querySelector(\'input.email\').addEventListener(\'input\', function (e) {\
  var input = e.target;\
  var value = input.value.trim();\
  if (value.length === 0) {\
    input.classList.remove(\'error\', \'success\');\
    return;\
  }\
  if (!validateEmail(value)) {\
    input.classList.add(\'error\');\
    input.classList.remove(\'success\');\
  } else {\
    input.classList.remove(\'error\');\
    input.classList.add(\'success\');\
  }\
});\
document.querySelector(\'input.site\').addEventListener(\'input\', function (e) {\
  var input = e.target;\
  var value = input.value.trim();\
  if (value.length === 0) {\
    input.classList.remove(\'error\', \'success\');\
    return;\
  }\
  var isValueValid = validateSiteURL(value);\
  if (!isValueValid) {\
    input.classList.add(\'error\');\
    input.classList.remove(\'success\');\
  } else {\
    input.classList.remove(\'error\');\
    input.classList.add(\'success\');\
  }\
});\
function removeUTMParameters(url) {\
  try {\
    var urlObj = new URL(url);\
    urlObj.searchParams.forEach(function (value, key) {\
      if (key.startsWith(\'utm_\')) {\
        urlObj.searchParams.delete(key);\
      }\
    });\
    return urlObj.toString();\
  } catch (error) {\
    return url;\
  }\
}\
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {\
  item.addEventListener("click", carrotquest.close);\
});\
function hidden_visible(elem1, elem2) {\
  document.querySelector(elem1).classList.add("hidden");\
  document.querySelector(elem2).classList.remove("hidden");\
}\
(function (formSelector) {\
  var phoneInput = document.querySelector("[type=tel]"),\
    form = document.querySelector(formSelector),\
    formattedInputValue = "+7 (";\
  function checkCorrect(input) {\
    if (input.length == 18) {\
      phoneInput.classList.add("success");\
      phoneInput.classList.remove("error");\
    } else {\
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
    if (e.target.value.length != 18 && e.target.value.length != 0) {\
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
})("#form");</script>\
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