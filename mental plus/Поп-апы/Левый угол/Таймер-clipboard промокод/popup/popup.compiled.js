var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Arial", sans-serif;\
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
.cq-popup__bg {\
  display: none;\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background-color: rgba(0, 0, 0, 0.4);\
}\
\
.d_flex {\
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
.wrapper__body {\
  -ms-flex-align: end;\
      align-items: flex-end;\
  width: 100%;\
  height: 100%;\
}\
\
.cq-popup__body {\
  position: relative;\
  z-index: 2;\
  max-height: 237px;\
  width: 100%;\
  max-width: 320px;\
  box-shadow: 0px 0px 3px rgba(111, 111, 111, 0.25);\
  background-color: #fff;\
  border-radius: 20px;\
}\
\
.cq-popup__close {\
  cursor: pointer;\
  height: 21px;\
  width: 21px;\
  position: absolute;\
  top: 25px;\
  right: 25px;\
  z-index: 99;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #000000;\
  content: " ";\
  height: 21px;\
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
.cq-popup__form-wrapper {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  height: 100%;\
  overflow: hidden;\
}\
\
.cq-popup__form {\
  border-radius: 20px;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 100%;\
  width: 100%;\
  padding: 26px 39px 0;\
}\
\
.cq-popup__form-content {\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.cq-popup__form-inputs {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
}\
\
.cq-popup-inputs-title {\
  font-size: 18px;\
  line-height: 21px;\
  max-width: 355px;\
  margin: 20px 0;\
  text-align: center;\
}\
\
.cqp__input {\
  border: 1px solid #9d9d9d;\
  border-radius: 5px;\
  width: 100%;\
  height: 46px;\
  font-size: 16px;\
  line-height: 21px;\
  margin-bottom: 10px;\
  max-width: 355px;\
  outline: none;\
  text-align: center;\
}\
\
.cq-popup__text-h1 {\
  margin-bottom: 10px;\
  font-size: 18px;\
  line-height: 21px;\
  color: #000;\
  text-align: center;\
  font-weight: 400;\
}\
\
.cqp_timer_wrapper {\
  width: 100%;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  margin-bottom: 20px;\
}\
\
.cqp-timer_img {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  max-width: 26px;\
  margin-right: 8px;\
}\
\
.cqp-timer_img img {\
  height: 26px;\
}\
\
.cqp_timer span {\
  color: #000;\
  font-size: 18px;\
  line-height: 21px;\
}\
\
.cq-promocode {\
  background: #727883;\
  color: #fff;\
  width: 100%;\
  height: 50px;\
  max-width: 214px;\
  border-radius: 10px;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
  -ms-flex-align: center;\
      align-items: center;\
  margin-bottom: 10px;\
}\
\
.cq-promocode-text {\
  background: transparent;\
  border: none;\
  font-size: 16px;\
  max-width: 100px;\
  margin-left: 60px;\
  color: #fff;\
}\
\
.cq-promocode-button {\
  margin-right: 13px;\
  cursor: pointer;\
}\
\
.cq-promocode-discription {\
  color: #9BA2AB;\
  font-size: 14px;\
  line-height: 16px;\
  text-align: center;\
  margin-bottom: 42px;\
}\
\
@media (max-width: 390px) {\
  .cq-popup__bg {\
    display: block;\
  }\
\
  .wrapper__body {\
    -ms-flex-align: center;\
        align-items: center;\
    -ms-flex-pack: center;\
        justify-content: center;\
  }\
}</style>\
</head>\
\
<body>\
<div class="cq-popup__bg"></div>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <a class="cq-popup__close"></a>\
        <div id="s1" class="cq-popup__form-wrapper">\
            <form id="form" class="cq-popup__form d_flex flex_col">\
                <div class="cqp_timer_wrapper d_flex flex_row">\
                    <div class="cqp-timer_img">\
                        <img src="https://files.carrotquest.io/message-images/43823/43823-1651643594293-ubi0pcbb.png"\
                             alt="timer-pic">\
                    </div>\
                    <div class="cqp_timer">\
                        <span>30:0</span>\
                    </div>\
                </div>\
                <div class="cq-popup__form-title">\
                    <p class="cq-popup__text-h1">Заголовок</p>\
                </div>\
                <div class="cq-promocode d_flex flex_row">\
                        <input type="text" value="ПРОМОКОД" id="promocode" class="cq-promocode-text" style="z-index: -100; position: absolute; left: -999999px; opacity: 0">\
                        <span class="cq-promocode-text" >ПРОМОКОД</span>\
                    <div class="cq-promocode-button">\
                        <img src="https://files.carrotquest.io/message-images/48926/48926-1651649869534-jk3e9ien.png"\
                             alt="copyImg">\
                    </div>\
                </div>\
                <div class="cq-promocode-discription">\
                    <span>\
                        Описание\
                    </span>\
                </div>\
            </form>\
        </div>\
    </div>\
</div>\
<script>"use strict";\
\
var cqpopup_name = "Таймер-clipboard промокод",\
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
document.querySelector(\'.cq-promocode-button\').addEventListener(\'click\', function () {\
  var copyText = document.getElementById("promocode");\
  copyText.select();\
  document.execCommand("copy");\
  carrotquest.track(\'Скопировал промокод из Поп-апа\', {\
    "Промокод": document.getElementById("promocode").value\
  });\
});\
var timerMinutes = 1800;\
var timer = setInterval(function () {\
  var timerInput = document.querySelector(\'.cqp_timer span\');\
  var seconds = timerMinutes % 60;\
  var minutes = timerMinutes / 60 % 60;\
\
  if (timerMinutes <= 0) {\
    clearInterval(timer);\
    carrotquest.close();\
  } else {\
    timerInput.innerHTML = "".concat(Math.trunc(minutes), ":").concat(seconds);\
  }\
\
  timerMinutes--;\
}, 1000);</script>\
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
iframe.style.left = "45px";
iframe.style.bottom = "45px";
iframe.style.zIndex = '9999999999';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.transition = '.5s';
iframe.style.maxWidth = '430px';
iframe.style.maxHeight = '237px';

if (window.innerWidth <= 390) {
  iframe.style.left = 0;
  iframe.style.bottom = 0;
  iframe.style.top = 0;
  iframe.style.right = 0;
  iframe.style.height = '100%';
  iframe.style.maxWidth = "100%";
  iframe.style.margin = "auto";
  iframe.style.maxHeight = '100%';
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