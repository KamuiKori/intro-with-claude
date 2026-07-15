var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
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
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  padding: 20px;\
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
#popmechanic-form.video-widget {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.video-widget__container {\
  position: relative;\
  overflow: hidden;\
  cursor: pointer;\
  width: 110px;\
  height: 160px;\
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;\
}\
\
.is-mobile .video-widget__container {\
  width: 110px;\
  height: 160px;\
}\
\
#popmechanic-form[data-state=opened] .video-widget__container {\
  width: 242px;\
  height: 400px;\
}\
\
.is-mobile #popmechanic-form[data-state=opened] .video-widget__container {\
  width: 325px;\
  height: 538px;\
}\
\
.video-widget__video {\
  position: absolute;\
  inset: 0;\
  width: 100%;\
  height: 100%;\
  -o-object-fit: cover;\
     object-fit: cover;\
}\
\
.popmechanic-close {\
  position: absolute;\
  top: 8px;\
  right: 8px;\
  width: 14px;\
  height: 14px;\
  cursor: pointer;\
  z-index: 2;\
  opacity: 0;\
  pointer-events: none;\
  transition: opacity 0.2s ease-in-out;\
}\
\
#popmechanic-form[data-state=opened] .popmechanic-close {\
  opacity: 1;\
  pointer-events: auto;\
}\
\
.more-btn-wrap {\
  position: relative;\
  width: 242px;\
  height: 57px;\
  margin-top: 11px;\
  display: none;\
}\
\
.is-mobile .more-btn-wrap {\
  width: 325px;\
}\
\
#popmechanic-form[data-state=opened] .more-btn-wrap:not(.hidden) {\
  display: block;\
}\
\
.more-btn {\
  position: absolute;\
  top: 6px;\
  left: 0;\
  width: 100%;\
  height: 51px;\
  border: none;\
  border-radius: 100px;\
  background: #ee7668;\
  color: #fff;\
  font-weight: 700;\
  font-size: 16px;\
  cursor: pointer;\
  transition: opacity 0.15s;\
}\
\
.more-btn:active {\
  opacity: 0.85;\
}\
\
.more-btn__border {\
  position: absolute;\
  top: 0;\
  left: 0;\
  right: 0;\
  height: 51px;\
  border: 1px solid #2e377b;\
  border-radius: 100px;\
  pointer-events: none;\
}\
\
.consult-form {\
  position: relative;\
  width: 262px;\
  background: #fff url("https://files.carrotquest.app/message-images/71534/71534-1783416275118-ojnkqyra.png") no-repeat center/100% 100%;\
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\
}\
\
.is-mobile .consult-form {\
  width: 325px;\
}\
\
.consult-inner {\
  position: relative;\
  z-index: 1;\
  padding: 20px 15px 18px;\
}\
\
.form-close {\
  position: absolute;\
  top: 5px;\
  right: 5px;\
  width: 20px;\
  height: 20px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  background: none;\
  border: none;\
  padding: 0;\
  cursor: pointer;\
  z-index: 3;\
}\
\
.form-close svg {\
  width: 11px;\
  height: 11px;\
}\
\
.consult-title {\
  font-size: 14px;\
  font-weight: 700;\
  color: #000;\
  line-height: 1.25;\
  margin-bottom: 14px;\
}\
\
.is-mobile .consult-title {\
  font-size: 16px;\
}\
\
.consult-text {\
  font-size: 12px;\
  color: #000;\
  line-height: 1.4;\
  margin-bottom: 14px;\
}\
\
.is-mobile .consult-text {\
  font-size: 14px;\
}\
\
.consult-question {\
  font-size: 12px;\
  font-weight: 700;\
  color: #000;\
  line-height: 1.4;\
  margin-bottom: 14px;\
}\
\
.is-mobile .consult-question {\
  font-size: 14px;\
}\
\
.channel-slot {\
  margin-bottom: 16px;\
}\
\
.channel-options {\
  display: grid;\
  grid-template-columns: 1fr 1fr;\
  row-gap: 10px;\
  -webkit-column-gap: 8px;\
     -moz-column-gap: 8px;\
          column-gap: 8px;\
}\
\
.channel-option {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  gap: 8px;\
  cursor: pointer;\
  font-size: 12px;\
  color: #000;\
}\
\
.is-mobile .channel-option {\
  font-size: 14px;\
}\
\
.channel-option input[type=radio] {\
  appearance: none;\
  -webkit-appearance: none;\
  width: 11px;\
  height: 11px;\
  min-width: 11px;\
  margin: 0;\
  border-radius: 50%;\
  border: 1px solid #000;\
  cursor: pointer;\
}\
\
.channel-option input[type=radio]:checked {\
  border-color: #ee7668;\
  background: #ee7668;\
  box-shadow: inset 0 0 0 2px #fff;\
}\
\
.channel-option input[type=radio]:checked ~ .channel-label {\
  color: #ee7668;\
}\
\
.phone-slot {\
  margin-bottom: 16px;\
}\
\
.phone-input {\
  width: 100%;\
  height: 40px;\
  border: 1px solid #2e377b;\
  border-radius: 100px;\
  padding: 0 18px;\
  font-size: 12px;\
  color: #2e377b;\
  outline: none;\
}\
\
.phone-input::-webkit-input-placeholder {\
  color: #2e377b;\
}\
\
.phone-input:-ms-input-placeholder {\
  color: #2e377b;\
}\
\
.phone-input::-ms-input-placeholder {\
  color: #2e377b;\
}\
\
.phone-input::placeholder {\
  color: #2e377b;\
}\
\
.phone-input.error {\
  border-color: #e33b3b;\
}\
\
.is-mobile .phone-input {\
  height: 45px;\
  font-size: 14px;\
  padding: 0 20px;\
}\
\
.btn-wrap {\
  position: relative;\
  width: 100%;\
  height: 46px;\
  margin-bottom: 16px;\
}\
\
.is-mobile .btn-wrap {\
  height: 56px;\
  margin-bottom: 20px;\
}\
\
.submit-btn {\
  position: absolute;\
  top: 6px;\
  left: 0;\
  width: 100%;\
  height: 40px;\
  border: none;\
  border-radius: 100px;\
  background: #ee7668;\
  color: #fff;\
  font-weight: 700;\
  font-size: 12px;\
  cursor: pointer;\
  transition: opacity 0.15s;\
}\
\
.submit-btn:disabled {\
  opacity: 0.45;\
  cursor: not-allowed;\
}\
\
.is-mobile .submit-btn {\
  height: 50px;\
  font-size: 16px;\
}\
\
.btn-wrap__border {\
  position: absolute;\
  top: 0;\
  left: 0;\
  right: 0;\
  height: 40px;\
  border: 1px solid #2e377b;\
  border-radius: 100px;\
  pointer-events: none;\
}\
\
.is-mobile .btn-wrap__border {\
  height: 50px;\
}\
\
.checkboxes {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  gap: 10px;\
}\
\
.checkbox-row {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  gap: 8px;\
}\
\
.checkbox-row input[type=checkbox] {\
  appearance: none;\
  -webkit-appearance: none;\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  width: 15px;\
  height: 15px;\
  min-width: 15px;\
  margin-top: 1px;\
  border-radius: 50%;\
  border: 1.3px solid #000;\
  background: #fff;\
  cursor: pointer;\
}\
\
.checkbox-row input[type=checkbox]:checked {\
  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 15 15\'%3E%3Cpath d=\'M4.5 8L6.5 10L11 5.5\' stroke=\'%23000\' stroke-width=\'1\' fill=\'none\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E");\
  background-size: contain;\
  background-repeat: no-repeat;\
  background-position: center;\
}\
\
.checkbox-row label {\
  font-size: 10px;\
  line-height: 1.4;\
  color: #000;\
  cursor: pointer;\
}\
\
.checkbox-row label a {\
  text-decoration: underline;\
}\
\
.is-mobile .checkbox-row label {\
  font-size: 11px;\
}\
\
.thank {\
  position: relative;\
  width: 262px;\
  background: #fff;\
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\
  padding: 26px 15px 22px;\
}\
\
.is-mobile .thank {\
  width: 325px;\
  padding: 28px 17px 24px;\
}\
\
.thank-title {\
  font-size: 16px;\
  font-weight: 700;\
  color: #000;\
  margin-bottom: 10px;\
}\
\
.is-mobile .thank-title {\
  font-size: 18px;\
}\
\
.thank-text {\
  font-size: 13px;\
  color: #000;\
  line-height: 1.4;\
}\
\
.is-mobile .thank-text {\
  font-size: 14px;\
}</style>\
</head>\
\
<body>\
<div id="popmechanic-form" class="popmechanic-reset video-widget mini" data-state="default">\
    <div class="video-widget__container">\
        <video data-popmechanic-submit id="video-widget__video" loop autoplay playsinline muted="muted"\
               preload="auto" controlslist="nodownload" disablepictureinpicture class="video-widget__video">\
            <source src="https://files.carrotquest.app/attachments/71534/0f079767-1471-4aa6-a94b-0e5dceec7c56/video_iz_2_kuskov.mp4" type="video/mp4">\
        </video>\
        <div class="popmechanic-close" data-popmechanic-close>\
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <path d="M18 0.818077L17.1819 0L9 8.18192L0.818077 0L0 0.818077L8.18192 9L0 17.1819L0.818077 18L9 9.81808L17.1819 18L18 17.1819L9.81808 9L18 0.818077Z"\
                      fill="#FFFFFF"/>\
            </svg>\
        </div>\
    </div>\
    <div class="more-btn-wrap hidden">\
        <button type="button" class="more-btn js-more-btn">Подробнее</button>\
        <span class="more-btn__border"></span>\
    </div>\
</div>\
\
<form action="" class="consult-form hidden">\
    <button type="button" class="form-close" data-popmechanic-close aria-label="Закрыть">\
        <svg viewBox="0 0 10.5 10.5" fill="none" xmlns="http://www.w3.org/2000/svg">\
            <path d="M0.25 0.25L10.25 10.25M10.25 0.25L0.25 10.25" stroke="#333333" stroke-width="0.7" stroke-linecap="round"/>\
        </svg>\
    </button>\
    <div class="consult-inner">\
        <p class="consult-title">Запишитесь на консультацию<br>с экспертом Академии</p>\
        <p class="consult-text">И создайте свой персональный маршрут в профессию с учетом целей, текущего уровня знаний и опыта.</p>\
        <p class="consult-question">В каком канале связи будет <br>удобнее связаться с экспертом <br>и получить консультацию?</p>\
\
        <div class="channel-slot">\
            <div class="channel-options">\
                <label class="channel-option">\
                    <input type="radio" name="channel" value="phone" checked>\
                    <span class="channel-label">По телефону</span>\
                </label>\
                <label class="channel-option">\
                    <input type="radio" name="channel" value="telegram">\
                    <span class="channel-label">В Telegram</span>\
                </label>\
                <label class="channel-option">\
                    <input type="radio" name="channel" value="max">\
                    <span class="channel-label">В МАКС</span>\
                </label>\
                <label class="channel-option">\
                    <input type="radio" name="channel" value="vk">\
                    <span class="channel-label">Во Вконтакте</span>\
                </label>\
            </div>\
        </div>\
\
        <div class="phone-slot hidden">\
            <input class="phone-input" type="tel" name="phone" placeholder="Введите Ваш номер телефона">\
        </div>\
\
        <div class="btn-wrap">\
            <button type="submit" class="submit-btn js-consult-submit" disabled>Отправить</button>\
            <span class="btn-wrap__border"></span>\
        </div>\
\
        <div class="checkboxes">\
            <div class="checkbox-row">\
                <input type="checkbox" id="cf-agree-pd" name="agree_pd">\
                <label for="cf-agree-pd">Я даю <a href="https://agena-art.ru/politika-obrabotki-pd/" target="_blank">согласие</a> на обработку своих персональных данных.</label>\
            </div>\
            <div class="checkbox-row">\
                <input type="checkbox" id="cf-agree-policy" name="agree_policy">\
                <label for="cf-agree-policy">Я ознакомлен с <a href="https://agena-art.ru/privacy_policy/" target="_blank">Политикой конфиденциальности.</a></label>\
            </div>\
        </div>\
    </div>\
</form>\
\
<div class="thank hidden">\
    <button type="button" class="form-close" data-popmechanic-close aria-label="Закрыть">\
        <svg viewBox="0 0 10.5 10.5" fill="none" xmlns="http://www.w3.org/2000/svg">\
            <path d="M0.25 0.25L10.25 10.25M10.25 0.25L0.25 10.25" stroke="#333333" stroke-width="0.7" stroke-linecap="round"/>\
        </svg>\
    </button>\
    <p class="thank-title">Заявка принята!</p>\
    <p class="thank-text">Мы свяжемся с вами в ближайшее время</p>\
</div>\
\
<script>"use strict";\
\
var cqpopup_name = "Видео виджет",\
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
    },\
    expanded: function expanded() {\
      this.track(\'Раскрыл попап\');\
      this.track("Коммуникации: Раскрыл попап - " + cqpopup_name);\
    },\
    moreClicked: function moreClicked() {\
      this.track(\'Нажал "Подробнее" в попапе\');\
      this.track("Коммуникации: Нажал Подробнее в сообщении - " + cqpopup_name);\
    },\
    channelOpened: function channelOpened(channelLabel) {\
      this.trackMessageInteraction("{{ sending_id }}", "clicked");\
      this.track(\'Перешел в \' + channelLabel);\
      this.track("Коммуникации: Перешел в " + channelLabel + " - " + cqpopup_name);\
    },\
    resizeFrame: function resizeFrame(obj) {\
      var data = {\
        "command": \'carrotquest.resizeFrame\',\
        \'id\': \'{{ sending_id }}\',\
        \'width\': obj.width,\
        \'height\': obj.height\
      };\
      top.postMessage(data, \'*\');\
    }\
  };\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
  }\
});\
var isPhone = top.window.innerWidth < 500;\
if (isPhone) {\
  document.documentElement.classList.add(\'is-mobile\');\
}\
var SZ = isPhone ? {\
  mini: [150, 200],\
  opened: [365, 626],\
  form: [365, 475],\
  thank: [365, 165]\
} : {\
  mini: [150, 200],\
  opened: [310, 510],\
  form: [310, 510],\
  thank: [282, 150]\
};\
var userSignature;\
try {\
  userSignature = top.carrotquest.data.user.user_signature;\
} catch (err) {\
  userSignature = null;\
}\
var channelLinks = {\
  telegram: \'https://t.me/agena_art_manager_bot\',\
  max: \'https://max.ru/id9731074734_bot\',\
  vk: \'https://vk.com/agenaart\'\
};\
var channelLabels = {\
  telegram: \'Telegram\',\
  max: \'МАКС\',\
  vk: \'Вконтакте\'\
};\
function buildChannelLink(channel) {\
  var link = channelLinks[channel];\
  var signature = userSignature && userSignature[channel];\
  return link + (signature ? \'?start=\' + signature : \'\');\
}\
var widget = document.getElementById(\'popmechanic-form\');\
var video = document.getElementById(\'video-widget__video\');\
var moreBtnWrap = document.querySelector(\'.more-btn-wrap\');\
var consultForm = document.querySelector(\'.consult-form\');\
var channelSlot = document.querySelector(\'.channel-slot\');\
var phoneSlot = document.querySelector(\'.phone-slot\');\
var phoneInput = document.querySelector(\'.phone-input\');\
var submitBtn = document.querySelector(\'.js-consult-submit\');\
var checkboxes = document.querySelectorAll(\'.consult-form input[type=checkbox]\');\
var thank = document.querySelector(\'.thank\');\
function resize(size) {\
  carrotquest.resizeFrame({\
    width: size[0] + \'px\',\
    height: size[1] + \'px\'\
  });\
}\
resize(SZ.mini);\
function updateSubmitState() {\
  var allChecked = Array.prototype.every.call(checkboxes, function (cb) {\
    return cb.checked;\
  });\
  var phoneOk = phoneSlot.classList.contains(\'hidden\') || phoneInput.classList.contains(\'success\');\
  submitBtn.disabled = !(allChecked && phoneOk);\
}\
checkboxes.forEach(function (cb) {\
  cb.addEventListener(\'change\', updateSubmitState);\
});\
document.querySelectorAll(\'.checkbox-row a\').forEach(function (a) {\
  a.addEventListener(\'click\', function (e) {\
    e.stopPropagation();\
  });\
});\
function collapseWidget() {\
  widget.setAttribute(\'data-state\', \'default\');\
  video.muted = true;\
  moreBtnWrap.classList.add(\'hidden\');\
  resize(SZ.mini);\
}\
function toggleVideo() {\
  if (widget.getAttribute(\'data-state\') === \'default\') {\
    widget.setAttribute(\'data-state\', \'opened\');\
    video.muted = false;\
    video.currentTime = 0;\
    video.play();\
    moreBtnWrap.classList.remove(\'hidden\');\
    resize(SZ.opened);\
    carrotquest.expanded();\
  } else {\
    collapseWidget();\
  }\
}\
function openConsultForm() {\
  video.pause();\
  widget.classList.add(\'hidden\');\
  consultForm.classList.remove(\'hidden\');\
  updateSubmitState();\
  resize(SZ.form);\
  carrotquest.moreClicked();\
}\
document.addEventListener(\'click\', function (mouseEvent) {\
  if (mouseEvent.target.closest(\'[data-popmechanic-close]\')) {\
    carrotquest.close();\
    return;\
  }\
  if (mouseEvent.target.closest(\'.js-more-btn\')) {\
    openConsultForm();\
    return;\
  }\
  if (mouseEvent.target.closest(\'.video-widget__container\')) {\
    toggleVideo();\
  }\
});\
document.addEventListener(\'mouseup\', function (t) {\
  if (widget.classList.contains(\'hidden\')) {\
    return;\
  }\
  if (!widget.contains(t.target) && widget.getAttribute(\'data-state\') !== \'default\') {\
    collapseWidget();\
  }\
});\
consultForm.addEventListener(\'submit\', function (e) {\
  e.preventDefault();\
  if (submitBtn.disabled) {\
    return;\
  }\
  if (phoneSlot.classList.contains(\'hidden\')) {\
    var checkedChannel = consultForm.querySelector(\'input[name="channel"]:checked\');\
    var channel = checkedChannel ? checkedChannel.value : \'phone\';\
    if (channel === \'phone\') {\
      channelSlot.classList.add(\'hidden\');\
      phoneSlot.classList.remove(\'hidden\');\
      updateSubmitState();\
      resize(SZ.form);\
    } else {\
      carrotquest.channelOpened(channelLabels[channel]);\
      window.open(buildChannelLink(channel), \'_blank\');\
      carrotquest.close();\
    }\
  } else {\
    carrotquest.identify([{\
      op: \'update_or_create\',\
      key: \'$phone\',\
      value: phoneInput.value\
    }]);\
    consultForm.classList.add(\'hidden\');\
    thank.classList.remove(\'hidden\');\
    resize(SZ.thank);\
    carrotquest.replied();\
    setTimeout(carrotquest.close, 5000);\
  }\
});\
(function (formSelector) {\
  var formattedInputValue = "+7 (";\
  function checkCorrect(input) {\
    if (input.length === 18) {\
      phoneInput.classList.add("success");\
      phoneInput.classList.remove("error");\
    } else {\
      phoneInput.classList.remove("success");\
      phoneInput.classList.remove("error");\
    }\
    updateSubmitState();\
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
    if (e.target.value.length != 18) {\
      phoneInput.classList.add("error");\
      phoneInput.classList.remove("success");\
      updateSubmitState();\
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
})(".consult-form");</script>\
</body>\
</html>\
';

"use strict";

var iframe = document.createElement('iframe');
iframe.id = 'carrot_frame_{{ sending_id }}';
iframe.frameBorder = 0;
iframe.style.opacity = "0";
iframe.style.position = 'fixed';
iframe.style.zIndex = '9999999999';
iframe.style.width = '140px';
iframe.style.height = '220px';
iframe.style.transition = '.3s';
iframe.style.left = '0';
iframe.style.bottom = '0px';
if (top.window.innerWidth < 500) {
  iframe.style.width = '400px';
  iframe.style.height = '400px';
  iframe.style.bottom = '90px';
}
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