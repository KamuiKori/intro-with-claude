var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Open Sans", sans-serif;\
  font-weight: 400;\
}\
\
html,\
body {\
  height: 100%;\
}\
\
body {\
  margin: 0;\
}\
\
a {\
  color: inherit;\
}\
\
.wrapper {\
  display: -ms-flexbox;\
  display: flex;\
}\
\
.wrapper-col {\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.wrapper-row {\
  -ms-flex-direction: row;\
      flex-direction: row;\
}\
\
.wrapper__body {\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  width: 100%;\
  height: 100%;\
}\
\
.cqp__body {\
  position: relative;\
  z-index: 3;\
  -ms-flex-pack: justify;\
      justify-content: space-between;\
  max-width: 342px;\
  height: 305px;\
  width: 100%;\
  padding: 25px 23px 35px;\
  border: none;\
  background: #454D53;\
  background-size: cover;\
  transition: height 0.5s, width 0.5s;\
  overflow: hidden;\
}\
\
.cqp__body-minimize {\
  height: 135px;\
  width: 290px;\
  padding: 27px 40px;\
  background: #454D53;\
  cursor: pointer;\
}\
\
.cqp__close,\
.cqp__close-minimize {\
  position: absolute;\
  top: 0;\
  right: 0;\
  z-index: 9;\
  height: 60px;\
  width: 70px;\
  cursor: pointer;\
}\
\
#form-2 .cqp__close {\
  margin: auto;\
}\
\
.cqp__close:before,\
.cqp__close:after,\
.cqp__close-minimize:before,\
.cqp__close-minimize:after {\
  position: absolute;\
  top: 0;\
  left: 0;\
  bottom: 0;\
  right: 0;\
  height: 22px;\
  width: 1px;\
  margin: auto;\
  background-color: #fff;\
  border-radius: 3px;\
  content: "";\
}\
\
.cqp__close:before,\
.cqp__close-minimize:before {\
  -webkit-transform: rotate(45deg);\
  transform: rotate(45deg);\
}\
\
.cqp__close:after,\
.cqp__close-minimize:after {\
  -webkit-transform: rotate(-45deg);\
  transform: rotate(-45deg);\
}\
\
.contain {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: end;\
      justify-content: flex-end;\
  width: 100%;\
}\
\
.cqp__form {\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  -ms-flex-align: center;\
      align-items: center;\
  margin: 0;\
  width: 100%;\
  transition: justify-content 0.3s ease-in;\
  transition: justify-content 0.3s ease-in, -ms-flex-pack 0.3s ease-in;\
}\
\
#form-2 {\
  padding-bottom: 20px;\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
}\
\
.flex_row {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
#form-2.minimize-form {\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  padding-top: 0;\
  padding-bottom: 0;\
}\
\
.cqp__form_title {\
  -ms-flex-align: center;\
      align-items: center;\
  max-width: 500px;\
}\
\
.cqp__form_content {\
  -ms-flex-align: center;\
      align-items: center;\
  max-width: 500px;\
}\
\
.cqp__form_inputs {\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
}\
\
#form-2 .cqp__text {\
  margin-bottom: 20px;\
  color: #000;\
  font-size: 16px;\
  line-height: 19px;\
  font-weight: 400;\
  text-align: center;\
}\
\
#form-2 .cqp__text.grey {\
  color: #F2F2F2;\
  font-size: 16px;\
  line-height: 24px;\
  font-style: italic;\
  margin-bottom: 0;\
}\
\
.cqp__text-h1 {\
  margin-bottom: 5px;\
  font-size: 24px;\
  line-height: 32px;\
  color: #fff;\
  text-align: center;\
  font-weight: 600;\
  text-transform: uppercase;\
  margin-top: 20px;\
  max-width: 250px;\
}\
\
.cqp__text {\
  font-size: 16px;\
  line-height: 24px;\
  font-weight: 400;\
  max-width: 315px;\
  text-align: center;\
  margin-bottom: 25px;\
  color: #fff;\
}\
\
.cqp__text-h1 span {\
  font-weight: 700;\
}\
\
#form-2 .cqp__text-h1 {\
  margin-bottom: 0px;\
  font-size: 20px;\
  line-height: 28px;\
  margin-top: 63px;\
  max-width: 300px;\
}\
\
.minimize_text {\
  margin-top: 18px;\
  font-size: 16px;\
  line-height: 20px;\
  font-weight: 500;\
  color: #fff;\
  border-bottom: 1px solid #fff;\
  text-align: center;\
}\
\
.cqp__button {\
  background: #FB4D49;\
  border: none;\
  color: #fff;\
  cursor: pointer;\
  font-size: 16px;\
  line-height: 24px;\
  text-align: center;\
  transition: all 300ms ease;\
  width: 100%;\
  font-weight: 700;\
  max-width: 295px;\
  height: 51px;\
  outline: none;\
  border-radius: 5px;\
}\
\
.cqp__wrapper-block {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  margin-top: 15px;\
  width: 100%;\
}\
\
.timer {\
  position: absolute;\
  top: 33px;\
  left: 0;\
  right: 0;\
  margin: 0 auto;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  font-weight: 700;\
  font-size: 30px;\
  line-height: 40px;\
  text-align: center;\
  color: #fff;\
  transition: font-size 0.3s ease-in;\
}\
\
.timer img {\
  margin-right: 13px;\
}\
\
.time_icon {\
  margin-right: 5px;\
}\
\
.minimize-timer .time_icon {\
  -webkit-transform: scale(1.2);\
          transform: scale(1.2);\
  margin-right: 10px;\
}\
\
.minimize-timer {\
  top: 0;\
  bottom: 0px;\
  left: auto;\
  right: auto;\
  font-size: 30px;\
  line-height: 40px;\
  color: #fff;\
  font-weight: 700;\
}\
\
.minimize-timer svg {\
  margin-right: 10px;\
  width: 34px;\
  height: 45px;\
}\
\
.timer-wrapper {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-direction: row;\
      flex-direction: row;\
}\
\
.promocode__wrapper {\
  position: relative;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 100%;\
  max-width: 245px;\
}\
\
.promocode {\
  position: relative;\
  max-width: 200px;\
  width: 100%;\
  height: 50px;\
  border: 2px dashed #fff;\
  border-radius: 2px;\
  background-color: transparent;\
  font-size: 18px;\
  line-height: 22px;\
  font-weight: 700;\
  color: #fff;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-align: center;\
      align-items: center;\
  text-align: center;\
  cursor: pointer;\
  transition: border 0.3s ease-in, background-color 0.3s ease-in, color 0.3s ease-in;\
  font-family: "Comic Neue", cursive;\
  margin-bottom: 20px;\
  border-radius: 5px;\
}\
\
.promocode svg {\
  position: absolute;\
  right: 14px;\
  top: 11px;\
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
.hidden {\
  display: none;\
}</style>\
</head>\
\
<body>\
<div class="cqp__bg"></div>\
<div class="wrapper wrapper__body">\
    <div class="cqp__body wrapper wrapper-row">\
        <section class="cqp__form wrapper wrapper-col" id="form-1">\
            <a class="cqp__close"></a>\
            <img src="https://files.carrotquest.app/message-images/43484/43484-1683013958039-tnsq07tp.png" alt="">\
            <div class="cqp__form_title wrapper wrapper-col">\
                <p class="cqp__text-h1">Купите дешевле на 3% 🔥</p>\
                <p class="cqp__text">Успевайте сделать заказ за 30 минут</p>\
            </div>\
            <div class="cqp__form_inputs wrapper wrapper-col">\
                <input class="cqp__button yes" value="Да, я успею" type="button">\
            </div>\
        </section>\
        <section class="cqp__form wrapper wrapper-col hidden" id="form-2">\
            <a class="cqp__close cqp__minimize"></a>\
            <a class="cqp__close hidden"></a>\
            <div class="timer">\
                <div class="timer-wrapper">\
                    <img src="https://files.carrotquest.app/message-images/43484/43484-1683014598987-qcb3um48.png" alt="">\
                    <div class="time-wrapper">\
                        <span class="time timer-minute"></span><span class="sepparator">:</span><span class="time timer-second"></span>\
                    </div>\
                </div>\
                <p class="check hidden minimize_text">Посмотреть промокод</p>\
            </div>\
            <p class="cqp__text-h1">Дарим любимым покупателям скидку 3%</p>\
            <div class="cqp__wrapper-block wrapper-col">\
                <div class="promocode__wrapper">\
                    <div class="promocode" data-clipboard-target=".promocode" data-clipboard-action="copy" name="ПРОМО2022">ПРОМО2022\
                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M12.7031 24H3.75C1.6822 24 0 22.3178 0 20.25V7.54688C0 5.47908 1.6822 3.79688 3.75 3.79688H12.7031C14.7709 3.79688 16.4531 5.47908 16.4531 7.54688V20.25C16.4531 22.3178 14.7709 24 12.7031 24ZM3.75 5.67188C2.71617 5.67188 1.875 6.51305 1.875 7.54688V20.25C1.875 21.2838 2.71617 22.125 3.75 22.125H12.7031C13.737 22.125 14.5781 21.2838 14.5781 20.25V7.54688C14.5781 6.51305 13.737 5.67188 12.7031 5.67188H3.75ZM20.2031 17.9062V3.75C20.2031 1.6822 18.5209 0 16.4531 0H6.04688C5.52905 0 5.10938 0.419672 5.10938 0.9375C5.10938 1.45533 5.52905 1.875 6.04688 1.875H16.4531C17.487 1.875 18.3281 2.71617 18.3281 3.75V17.9062C18.3281 18.4241 18.7478 18.8438 19.2656 18.8438C19.7835 18.8438 20.2031 18.4241 20.2031 17.9062Z" fill="white"/>\
                        </svg>\
                    </div>\
\
                    <span class="success_copy">Промокод скопирован</span>\
                </div>\
                <div class="cqp__form_content wrapper wrapper-col">\
                    <p class="cqp__text grey">и вставьте на странице <br> оформления заказа 😉</p>\
                </div>\
            </div>\
            <div class="minimize_text hidden"></div>\
        </section>\
    </div>\
</div>\
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.6/clipboard.min.js"></script>\
<script>"use strict";\
\
var cqpopup_name = \'10.1 Поп-ап таймер PC-1\';\
var carrotquest = {\
  track: function track(eventName, params) {\
    parent.window.carrotquest.track(eventName, params);\
  },\
  identify: function identify(props) {\
    parent.window.carrotquest.identify(props);\
  },\
  animation: function animation() {\
    var data = {\
      command: "carrotquest.animationPopup",\
      "id": "{{ sending_id }}",\
      "cqpopup_name": cqpopup_name\
    };\
    top.postMessage(data, "*");\
  },\
  replied: function replied() {\
    var data = {\
      command: "carrotquest.repliedPopup",\
      "id": "{{ sending_id }}",\
      "cqpopup_name": cqpopup_name\
    };\
    top.postMessage(data, "*");\
  },\
  clicked: function clicked() {\
    var data = {\
      command: "carrotquest.clickedPopup",\
      "id": "{{ sending_id }}",\
      "cqpopup_name": cqpopup_name\
    };\
    top.postMessage(data, "*");\
  },\
  read: function read() {\
    var data = {\
      command: "carrotquest.readPopup",\
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
  resizeFrame: function resizeFrame(maxWidth, height) {\
    var data = {\
      command: \'carrotquest.resizeFrame\',\
      \'id\': \'{{ sending_id }}\',\
      \'maxWidth\': maxWidth,\
      \'height\': height\
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
document.addEventListener("click", function (e) {\
  var btnYes = e.target.closest(".yes");\
\
  if (btnYes) {\
    initTimer(1800000);\
    carrotquest.track("Запустил таймер - " + cqpopup_name);\
    document.querySelector("#form-1").classList.add("hidden");\
    document.querySelector("#form-2").classList.remove("hidden");\
  }\
\
  var btnClose = e.target.closest(".cqp__close:not(.cqp__minimize)");\
\
  if (btnClose) {\
    carrotquest.close();\
  }\
\
  var btnCopy = e.target.closest(".copy");\
\
  if (btnCopy) {\
    copyText();\
  }\
\
  var btnMinimize = e.target.closest(".cqp__minimize") || e.target.closest(".cqp__close-minimize");\
\
  if (btnMinimize) {\
    minimizePopup();\
  }\
});\
\
function wrapperExpandPopup(e) {\
  if (!e.target.closest(".cqp__close")) {\
    expandPopup();\
  }\
}\
\
function minimizePopup() {\
  setTimeout(function () {\
    carrotquest.resizeFrame("370px", "203px");\
  }, 100);\
  document.querySelector("#form-2 .cqp__close:not(.cqp__minimize)").classList.remove("hidden");\
  document.querySelector("#form-2 .cqp__text-h1").classList.add("hidden");\
  document.querySelector(".cqp__minimize").classList.add("hidden");\
  document.querySelector(".timer").classList.add("minimize-timer");\
  document.querySelector(\'.timer\').classList.add(\'flex_row\');\
  document.querySelector(".cqp__body").classList.add("cqp__body-minimize");\
  document.querySelector("#form-2").classList.add("minimize-form");\
  document.querySelector("#form-2").classList.remove("wrapper-col");\
  document.querySelector("#form-2 .promocode__wrapper").classList.add("hidden");\
  document.querySelector("#form-2 .cqp__form_content").classList.add("hidden");\
  document.querySelector(".check").classList.remove("hidden");\
  document.querySelector("#form-2 .minimize_text").classList.remove("hidden");\
  document.querySelector(".cqp__body").addEventListener("click", wrapperExpandPopup);\
}\
\
function expandPopup() {\
  setTimeout(function () {\
    document.querySelector("#form-2 .promocode__wrapper").classList.remove("hidden");\
    document.querySelector("#form-2 .cqp__form_content").classList.remove("hidden");\
  }, 100);\
  carrotquest.resizeFrame("420px", "350px");\
  document.querySelector("#form-2 .cqp__close:not(.cqp__minimize)").classList.add("hidden");\
  document.querySelector("#form-2 .cqp__text-h1").classList.remove("hidden");\
  document.querySelector(".cqp__minimize").classList.remove("hidden");\
  document.querySelector(".timer").classList.remove("minimize-timer");\
  document.querySelector(".cqp__body").classList.remove("cqp__body-minimize");\
  document.querySelector("#form-2").classList.remove("minimize-form");\
  document.querySelector("#form-2").classList.add("wrapper-col");\
  document.querySelector(".check").classList.add("hidden");\
  document.querySelector("#form-2 .minimize_text").classList.add("hidden");\
  document.querySelector(".cqp__body").removeEventListener("click", wrapperExpandPopup);\
}\
\
(function copyText() {\
  var clipboard = new ClipboardJS(".promocode");\
  clipboard.on("success", function (e) {\
    carrotquest.track("Скопировал код - " + cqpopup_name);\
    document.querySelector(".success_copy").classList.add("active");\
    setTimeout(function () {\
      document.querySelector(".success_copy").classList.remove("active");\
    }, 2000);\
    e.clearSelection();\
  });\
  clipboard.on("error", function (e) {\
    carrotquest.track("Something went wrong");\
  });\
})();\
\
function timer(deadLine) {\
  var timer_minute = document.querySelector(\'.timer-minute\');\
  var timer_second = document.querySelector(\'.timer-second\');\
\
  function tiсk() {\
    var nowDate = new Date();\
    var deadlineDate = new Date(deadLine);\
    var diffDate = new Date(deadlineDate - nowDate);\
    var minute = diffDate.getUTCMinutes();\
    var second = diffDate.getUTCSeconds();\
    minute < 10 ? timer_minute.textContent = "0" + minute : timer_minute.textContent = minute;\
    second < 10 ? timer_second.textContent = "0" + second : timer_second.textContent = second;\
\
    if (diffDate <= 0) {\
      clearInterval(around);\
      timer_minute.textContent = "00";\
      timer_second.textContent = "00";\
    }\
  }\
\
  ;\
  var around = setInterval(tiсk, 1000);\
}\
\
;\
\
function initTimer(deltaTime) {\
  var currentDate = new Date().getTime();\
  var deltaTime = deltaTime + 2000;\
  var deadLine = currentDate + deltaTime;\
  localStorage.setItem(\'deadLine\', deadLine);\
\
  if (typeof localStorage.deadLine == "string") {\
    timer(+deadLine);\
  } else {\
    timer(deadLine);\
  }\
}\
\
;</script>\
</body>\
</html>\
\
';

"use strict";

if (!document.querySelector("[name=CQpopup]")) {
  var iframe = document.createElement('iframe');
  iframe.name = "CQpopup";
  iframe.id = 'carrot_frame_{{ sending_id }}';
  iframe.frameBorder = 0;
  iframe.style.opacity = "0";
  iframe.style.position = 'fixed';
  iframe.style.left = "0px";
  iframe.style.bottom = "0px";
  iframe.style.height = '350px';
  iframe.style.width = '100%';
  iframe.style.maxWidth = '420px';
  iframe.style.zIndex = '9999999999';
  iframe.style.transition = ".3s";

  if (window.innerWidth < 420) {
    iframe.style.top = 0;
    iframe.style.height = '320px';
    iframe.style.margin = "auto 0";
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
}