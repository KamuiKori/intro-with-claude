var popupContent = `
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"\
          rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Roboto", sans-serif;\
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
  background-color: rgba(0, 0, 0, 0.35);\
  -webkit-backdrop-filter: blur(8px);\
          backdrop-filter: blur(8px);\
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
  -ms-flex-pack: end;\
      justify-content: flex-end;\
  width: 100%;\
  height: 100%;\
  padding-right: 24px;\
}\
\
.scratch-container {\
  position: relative;\
  width: 392px;\
  height: 100px;\
  cursor: crosshair;\
  -webkit-user-select: none;\
      -ms-user-select: none;\
          user-select: none;\
  margin-bottom: 8px;\
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
.description {\
  font-size: 12px;\
  color: #929292;\
  line-height: 20px;\
  text-align: center;\
  letter-spacing: 0;\
  font-weight: 400;\
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
.link {\
  font-size: 14px;\
  color: #171B20;\
  line-height: 20px;\
  letter-spacing: 0;\
  margin-top: 20px;\
}\
\
.popup_link {\
  width: 194px;\
  height: 40px;\
  background: #16FF61;\
  color: #171B20;\
  font-size: 14px;\
  text-decoration: none;\
  line-height: 20px;\
  letter-spacing: 0;\
  border-radius: 4px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  font-weight: 500;\
  -ms-flex-item-align: start;\
      align-self: flex-start;\
  margin-top: 36px;\
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
  border-radius: 8px;\
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
  max-width: 392px;\
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
  background: #F3F5F7;\
  border-radius: 8px;\
  margin: 0;\
  z-index: 1000;\
  width: 440px;\
  height: auto;\
  overflow: hidden;\
  position: relative;\
}\
\
.pc.banner_img {\
  max-width: 440px;\
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
  height: 40px;\
  width: 40px;\
  position: absolute;\
  top: 12px;\
  right: 12px;\
  z-index: 99;\
  background: url("https://files.carrotquest.app/message-images/57576/57576-1777275823150-25tdpe17.png");\
  background-size: 10px;\
  background-repeat: no-repeat;\
  background-position: center center;\
}\
\
.title {\
  font-size: 20px;\
  font-weight: 500;\
  color: #171B20;\
  margin-bottom: 8px;\
  -ms-flex-item-align: start;\
      align-self: flex-start;\
  letter-spacing: 0px;\
  line-height: 28px;\
}\
\
.cq-popup__form {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  padding: 16px 24px 24px 24px;\
  width: 100%;\
  height: 100%;\
}\
\
.cq-popup__form-title {\
  -ms-flex-direction: column;\
      flex-direction: column;\
  margin-bottom: 24px;\
  word-break: break-word;\
  overflow-wrap: break-word;\
}\
\
.subtitle {\
  font-size: 14px;\
  color: #171B20;\
  -ms-flex-item-align: start;\
      align-self: flex-start;\
  font-weight: 400;\
  letter-spacing: 0px;\
  line-height: 20px;\
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
.mob {\
  display: none;\
}\
\
.hidden {\
  display: none !important;\
}\
\
.hidden_by_user {\
  display: none !important;\
}\
\
@media (max-width: 768px) {\
  .wrapper__body {\
    padding: 0;\
    -ms-flex-align: end;\
        align-items: flex-end;\
  }\
\
  .cq-popup__body {\
    border-radius: 8px 8px 0px 0px;\
    width: 100%;\
    display: -ms-flexbox;\
    display: flex;\
    -ms-flex-direction: column;\
        flex-direction: column;\
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
  .mob.banner_img {\
    max-width: 100%;\
  }\
\
  canvas {\
    position: absolute;\
    inset: 0;\
    margin: 0 auto;\
  }\
}</style>\
</head>\
\
<body>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <a class="cq-popup__close"></a>\
        <img src="https://files.carrotquest.app/message-images/57576/57576-1777274845917-28a3kyf6.png" alt="" class="pc banner_img">\
        <img src="https://files.carrotquest.app/message-images/57576/57576-1777281782368-e39kyspa.png" alt="" class="mob banner_img">\
        <form id="form" class="cq-popup__form d_flex flex_col first-form">\
            <div class="cq-popup__form-title d_flex flex_col">\
                <p class="title">Цепляющий заголовок</p>\
                <p class="subtitle">Невероятный текст, который будет мотивировать пользователя нажать на кнопку любой ценой. И я думаю, что 3-x строк достаточно. Не нужно больше!</p>\
            </div>\
            <div class="scratch-container">\
                <div class="hidden-content">\
                    <img src="https://files.carrotquest.app/message-images/57576/57576-1778672800184-pvwx4w6y.png" alt="" class="pc win_img">\
                    <img src="https://files.carrotquest.app/message-images/57576/57576-1778671573087-kj42kctp.png" alt="" class="mob win_img">\
                </div>\
                <canvas width="392" height="100"></canvas>\
                <div class="win-message">\
                    <img src="https://files.carrotquest.app/message-images/57576/57576-1778672800184-pvwx4w6y.png" alt="" class="pc win_img">\
                    <img src="https://files.carrotquest.app/message-images/57576/57576-1778671573087-kj42kctp.png" alt="" class="mob win_img">\
                </div>\
            </div>\
            <p class="description start">\
                Проведите пальцем или курсором по серой области\
            </p>\
            <p class="description end hidden">\
                Скопируйте промокод, нажав на иконку справа\
            </p>\
            <a href="#" class="link hidden" target="_blank">Отправить промокод в Тэда</a>\
            <a href="#" target="_blank" class="popup_btn popup_link hidden">Клик-клац бом-бом-бом</a>\
        </form>\
        <section class="second-form hidden" id="thank">\
            <div class="cq-popup__form-title d_flex flex_col">\
                <p class="cq-popup__text-h1 thank">Заголовок</p>\
                <p class="cq-popup__text">Текст</p>\
            </div>\
        </section>\
    </div>\
</div>\
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"></script>\
<script>"use strict";\
\
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\
var cqpopup_name = "Скретч-карта",\
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
var isTitleHidden = false;\
var isSubtitleHidden = false;\
var isTedLinkHidden = false;\
var isPopupButtonHidden = false;\
var isDescriptionStartHidden = false;\
var isDescriptionEndHidden = false;\
var isBannerImgHidden = false;\
var tedEventText = \'Событие при клике по Тэд\';\
var isMob = top.window.innerWidth < 769;\
var winImgCopied, bgImg;\
if (isMob) {\
  document.querySelector(\'canvas\').setAttribute(\'width\', \'392px\');\
  document.querySelector(\'canvas\').setAttribute(\'height\', \'100px\');\
  winImgCopied = \'https://files.carrotquest.app/message-images/57576/57576-1778672201068-r0jejsfg.png\';\
  bgImg = \'https://files.carrotquest.app/message-images/57576/57576-1778672464088-q0r8xoiy.png\';\
} else {\
  winImgCopied = \'https://files.carrotquest.app/message-images/57576/57576-1778672897933-azmpao8s.png\';\
  bgImg = \'https://files.carrotquest.app/message-images/57576/57576-1777277009901-vuvpu07y.png\';\
}\
function hideElementsByUser() {\
  if (isTitleHidden) {\
    document.querySelector(\'.title\').classList.add(\'hidden_by_user\');\
  }\
  if (isSubtitleHidden) {\
    document.querySelector(\'.subtitle\').classList.add(\'hidden_by_user\');\
  }\
  if (isTedLinkHidden) {\
    document.querySelector(\'.link\').classList.add(\'hidden_by_user\');\
  }\
  if (isPopupButtonHidden) {\
    document.querySelector(\'.popup_btn\').classList.add(\'hidden_by_user\');\
  }\
  if (isDescriptionStartHidden) {\
    document.querySelector(\'.description.start\').classList.add(\'hidden_by_user\');\
  }\
  if (isDescriptionEndHidden) {\
    document.querySelector(\'.description.end\').classList.add(\'hidden_by_user\');\
  }\
  if (isBannerImgHidden) {\
    document.querySelectorAll(\'.banner_img\').forEach(function (img) {\
      img.classList.add(\'hidden_by_user\');\
    });\
  }\
}\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
    hideElementsByUser();\
  }\
});\
document.addEventListener("click", function (e) {\
  if (e.target.closest(\'.link\')) {\
    carrotquest.track(cqpopup_name + \' - \' + tedEventText);\
  }\
  if (e.target.closest(\'.popup_btn\')) {\
    carrotquest.clicked();\
    carrotquest.track(cqpopup_name + \' - Клик по кнопке\');\
  }\
});\
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
  bgImage.src = bgImg;\
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
    showWinElements();\
    carrotquest.track(cqpopup_name + \' - Стер карточку\');\
  }\
}\
function copyOnClick(element, promoCode) {\
  [\'click\', \'touchend\'].forEach(function (eventType) {\
    element.addEventListener(eventType, function (e) {\
      e.preventDefault();\
      var success = function success() {\
        document.querySelectorAll(\'.win-message img\').forEach(function (item) {\
          item.src = winImgCopied;\
        });\
        document.querySelector(\'.description.end\').textContent = \'Промокод скопирован\';\
        carrotquest.track(cqpopup_name + \' - Скопировал промокод\');\
      };\
      var input = document.createElement(\'input\');\
      input.value = promoCode;\
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
function showWinElements() {\
  winMessage.classList.add(\'show\');\
  document.querySelector(\'.scratch-container\').classList.add(\'win\');\
  document.querySelector(\'#form\').classList.remove(\'hidden\');\
  document.querySelector(\'.description.start\').classList.add(\'hidden\');\
  document.querySelector(\'.description.end\').classList.remove(\'hidden\');\
  document.querySelector(\'.link\').classList.remove(\'hidden\');\
  document.querySelector(\'.popup_link\').classList.remove(\'hidden\');\
  document.querySelectorAll(\'.start\').forEach(function (el) {\
    el.classList.add(\'hidden\');\
  });\
  var button = document.querySelector(\'.scratch-container.win\');\
  setTimeout(function () {\
    copyOnClick(button, \'РОКЕТВЖУХ-ВН20\');\
  }, 300);\
}\
document.addEventListener("submit", function (e) {\
  var email = document.querySelector(\'input.email\').value;\
  e.preventDefault();\
  if (email) {\
    trackData("email");\
    hidden_visible(\'.first-form\', \'.second-form\');\
    carrotquest.replied();\
    setTimeout(carrotquest.close, 5000);\
  }\
});\
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {\
  item.addEventListener("click", carrotquest.close);\
});\
function trackData(data) {\
  carrotquest.identify(_defineProperty({}, "$" + data, document.querySelector(".cq_popup-input[name=" + data + "]").value));\
}\
function hidden_visible(elem1, elem2) {\
  document.querySelector(elem1).classList.add("hidden");\
  document.querySelector(elem2).classList.remove("hidden");\
}</script>\
</body>\
</html>\
\
`;

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