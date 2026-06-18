var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">\
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
.eula {\
  font-size: 12px;\
  color: #333;\
}\
\
.eula a {\
  color: #FF7C16;\
  text-decoration: none;\
}\
\
.red {\
  color: #FF0000;\
}\
\
.cq-popup__bg {\
  display: block;\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background-color: rgba(51, 51, 51, 0.4);\
  -webkit-backdrop-filter: blur(20px);\
          backdrop-filter: blur(20px);\
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
.scratch-container {\
  position: relative;\
  width: 495px;\
  height: 165px;\
  cursor: crosshair;\
  -webkit-user-select: none;\
      -ms-user-select: none;\
          user-select: none;\
}\
\
.scratch-container.win {\
  cursor: pointer;\
}\
\
.success_copy {\
  position: absolute;\
  right: 15px;\
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
  border-radius: 15px;\
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
  transition: opacity 0.8s ease;\
  pointer-events: none;\
  border-radius: 20px;\
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
.submit_btn {\
  width: 100%;\
  text-align: center;\
  color: #fff;\
  font-size: 16px;\
  background: #FF7C16;\
  border-radius: 8px;\
  margin-bottom: 15px;\
  border: none;\
  height: 50px;\
  cursor: pointer;\
}\
\
#thank .subtitle {\
  margin-bottom: 0;\
}\
\
.cq-popup__body {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  background: #fff;\
  padding: 40px;\
  font-family: "Inter", sans-serif;\
  margin: 0;\
  z-index: 1000;\
  width: 575px;\
  height: auto;\
  border-radius: 20px;\
  overflow: hidden;\
  position: relative;\
}\
\
.cq_input {\
  width: 100%;\
  height: 50px;\
  margin-bottom: 15px;\
  background: #E3E5E8;\
  border: none;\
  padding-left: 30px;\
  border-radius: 10px;\
  font-size: 16px;\
  outline: none;\
}\
\
.cq_input::-webkit-input-placeholder {\
  color: #717171;\
}\
\
.cq_input:-ms-input-placeholder {\
  color: #717171;\
}\
\
.cq_input::-ms-input-placeholder {\
  color: #717171;\
}\
\
.cq_input::placeholder {\
  color: #717171;\
}\
\
.popup_form {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  width: 100%;\
  margin-bottom: 30px;\
}\
\
.cq-popup__close {\
  cursor: pointer;\
  height: 21px;\
  width: 21px;\
  position: absolute;\
  top: 15px;\
  right: 15px;\
  z-index: 99;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #717171;\
  content: " ";\
  height: 20px;\
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
.title {\
  font-size: 30px;\
  font-weight: 600;\
  color: #FF7C16;\
  margin-bottom: 20px;\
  -ms-flex-item-align: start;\
      align-self: flex-start;\
}\
\
.subtitle {\
  font-size: 16px;\
  margin-bottom: 15px;\
  color: #333333;\
  -ms-flex-item-align: start;\
      align-self: flex-start;\
}\
\
.orange {\
  color: #FF7C16;\
  font-weight: 600;\
}\
\
.semibold {\
  font-weight: 600;\
}\
\
.hidden {\
  display: none !important;\
}</style>\
</head>\
\
<body>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <a class="cq-popup__close"></a>\
        <p class="title start">\
            5000+ компаний увеличивают онлайн‑продажи вместе <br>с Carrot quest\
        </p>\
        <p class="subtitle start">\
            Присоединитесь к ним, записавшись на наше демо.\
        </p>\
        <p class="subtitle start">\
            <span class="semibold">В ноябре действует</span> <span class="orange">скидка на подписку Х%.</span> Сотри защитный слой снизу и узнай промокод! ↓\
        </p>\
        <p class="title finish hidden">\
            Поздравляем!\
        </p>\
        <p class="subtitle finish hidden">\
            <span class="orange">Скидка на подписку Х%</span> ваша! Оставьте ваши контакты, чтобы мы смогли связаться с вами.\
        </p>\
        <p class="subtitle finish hidden">\
            Мы позвоним с номера <span class="orange">+7(495)275-39-09</span> в рабочие часы с 9:00 до 18:00 МСК и подберем удобное время для встречи.\
        </p>\
        <form action="" id="form" class="popup_form hidden">\
            <input type="text" name="name" required placeholder="Имя*" class="cq_input name">\
            <input type="tel" name="phone" required placeholder="+7 999-999-99-99" class="cq_input phone">\
            <button class="submit_btn">Отправить</button>\
            <p class="eula">\
                <span class="red">*</span> Нажимая на кнопку “Отправить”, вы даете <a href="#" target="_blank">согласие</a> на\
                <a href="#" target="_blank">обработку персональных данных</a>\
            </p>\
        </form>\
        <form action="" id="thank" class="popup_form hidden">\
            <p class="title">\
                Спасибо\
            </p>\
            <p class="subtitle">\
                Получили ваши контакты, скоро свяжемся с Вами.\
            </p>\
        </form>\
        <a class="cq-popup__close"></a>\
        <div class="scratch-container">\
            <div class="hidden-content">\
                <img src="https://files.carrotquest.app/message-images/100/100-1763973014417-n222o6ru.png" alt="">\
            </div>\
            <canvas width="495" height="165"></canvas>\
            <div class="win-message">\
                <img src="https://files.carrotquest.app/message-images/100/100-1763973014417-n222o6ru.png" alt="">\
            </div>\
            <p class="success_copy">Промокод скопирован</p>\
        </div>\
    </div>\
</div>\
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"></script>\
<script>"use strict";\
\
var cqpopup_name = "Скретч карточка тест",\
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
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {\
  item.addEventListener("click", carrotquest.close);\
});\
document.addEventListener("submit", function (e) {\
  e.preventDefault();\
  var name = document.querySelector(\'.name\').value;\
  if (document.querySelector(\'.success\') && name) {\
    carrotquest.replied();\
    var phone = document.querySelector(\'.phone\').value;\
    carrotquest.identify([{\
      op: \'update_or_create\',\
      key: \'$name\',\
      value: name\
    }, {\
      op: \'update_or_create\',\
      key: \'$phone\',\
      value: phone\
    }]);\
    document.querySelectorAll(\'.finish\').forEach(function (item) {\
      item.classList.add(\'hidden\');\
    });\
    hidden_visible(\'#form\', \'#thank\');\
  }\
});\
function hidden_visible(elem1, elem2) {\
  document.querySelector(elem1).classList.add("hidden");\
  document.querySelector(elem2).classList.remove("hidden");\
}\
var canvas = document.querySelector(\'canvas\');\
var ctx = canvas.getContext(\'2d\');\
var winMessage = document.querySelector(\'.win-message\');\
var resetBtn = document.getElementById(\'resetBtn\');\
var brushSize = 20;\
var isDrawing = false;\
var revealed = false;\
function drawCover() {\
  ctx.globalCompositeOperation = \'source-over\';\
  var bgImage = new Image();\
  bgImage.crossOrigin = "anonymous";\
  bgImage.onload = function () {\
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);\
  };\
  bgImage.onerror = function () {\
    console.error(\'Не удалось загрузить фоновое изображение\');\
    ctx.fillStyle = \'#999\';\
    ctx.fillRect(0, 0, canvas.width, canvas.height);\
  };\
  bgImage.src = \'https://files.carrotquest.app/message-images/100/100-1763972694279-ixxfmxg2.png\';\
}\
drawCover();\
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
    winMessage.classList.add(\'show\');\
    document.querySelector(\'.scratch-container\').classList.add(\'win\');\
    document.querySelector(\'#form\').classList.remove(\'hidden\');\
    document.querySelectorAll(\'.start\').forEach(function (el) {\
      el.classList.add(\'hidden\');\
    });\
    document.querySelectorAll(\'.finish\').forEach(function (el) {\
      el.classList.remove(\'hidden\');\
    });\
    var button = document.querySelector(\'.scratch-container.win\');\
    copyOnClick(button, \'XXXXXXX\');\
  }\
}\
function copyOnClick(element, promoCode) {\
  element.addEventListener(\'click\', function () {\
    var input = document.createElement(\'input\');\
    input.value = promoCode;\
    document.body.appendChild(input);\
    input.select();\
    try {\
      if (document.execCommand(\'copy\')) {\
        document.querySelector(\'.success_copy\').classList.add(\'active\');\
        setTimeout(function () {\
          document.querySelector(\'.success_copy\').classList.remove(\'active\');\
        }, 2000);\
      }\
    } catch (err) {\
      console.log(\'Ошибка копирования\');\
    } finally {\
      document.body.removeChild(input);\
    }\
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
(function (form) {\
  var phoneInput = document.querySelector("[type=tel]"),\
    form = document.querySelector(form),\
    formattedInputValue = "+7 (";\
  function checkCorrect(input) {\
    if (input.length == 18) {\
      form.classList.add("form-ready");\
      phoneInput.classList.add("success");\
      phoneInput.classList.remove("error");\
    } else {\
      form.classList.remove("form-ready");\
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
      console.log(1);\
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
    if (e.target.value.length != 18) {\
      form.classList.remove("form-ready");\
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
iframe.allow = 'allow="clipboard-read; clipboard-write"';
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