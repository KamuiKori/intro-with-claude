var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: Arial, sans-serif;\
}\
\
html,\
body {\
  height: 100%;\
  overflow: hidden;\
}\
\
a {\
  color: #fdc43b;\
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
@font-face {\
  font-family: "AkzidenzGroteskPro";\
  font-weight: 400;\
  src: url("https://www.karlssonhaus.ru/fonts/AkzidenzGroteskPro-Regular.ttf") format("ttf");\
}\
\
@font-face {\
  font-family: "AkzidenzGroteskPro-MdEx";\
  font-weight: 400;\
  src: url("https://www.karlssonhaus.ru/fonts/AkzidenzGroteskPro-MdEx.ttf") format("ttf");\
}\
\
.cq-popup__bg {\
  position: fixed;\
  inset: 0;\
  background: rgba(51, 51, 51, 0.5);\
  backdrop-filter: blur(5px);\
  -webkit-backdrop-filter: blur(5px);\
  z-index: 1;\
  cursor: pointer;\
}\
\
.popup__wrapper {\
  position: fixed;\
  inset: 0;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  z-index: 2;\
}\
\
.popup__scene {\
  position: relative;\
}\
\
.popup__close {\
  position: absolute;\
  top: 12px;\
  right: 12px;\
  width: 16px;\
  height: 16px;\
  background: none;\
  border: none;\
  cursor: pointer;\
  z-index: 10;\
  padding: 0;\
}\
\
.popup__close::before,\
.popup__close::after {\
  content: "";\
  position: absolute;\
  left: 50%;\
  top: 50%;\
  width: 2px;\
  height: 18px;\
  background: #333;\
  border-radius: 2px;\
}\
\
.popup__close::before {\
  -webkit-transform: translate(-50%, -50%) rotate(45deg);\
          transform: translate(-50%, -50%) rotate(45deg);\
}\
\
.popup__close::after {\
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\
          transform: translate(-50%, -50%) rotate(-45deg);\
}\
\
.popup__card {\
  position: relative;\
  background: #fff;\
  border: 1px solid #000;\
  border-radius: 5px;\
  overflow: visible;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.popup__card--thank {\
  text-align: center;\
}\
\
.popup__title {\
  -ms-flex-item-align: center;\
      align-self: center;\
  margin-bottom: 15px;\
  max-width: 496px;\
}\
\
.popup__body {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.popup__col-left {\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
}\
\
.popup__col-right {\
  -ms-flex: 1;\
      flex: 1;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
}\
\
.popup__text {\
  font-size: 16px;\
  color: #000;\
  margin-bottom: 12px;\
}\
\
.popup__input {\
  display: block;\
  width: 100%;\
  height: 50px;\
  border: 1px solid #000;\
  border-radius: 5px;\
  padding: 0 14px;\
  font-size: 15px;\
  color: #000;\
  background: #fff;\
  outline: none;\
  margin-bottom: 10px;\
  text-align: center;\
}\
\
.popup__input::-webkit-input-placeholder {\
  color: #000;\
  text-align: center;\
}\
\
.popup__input:-ms-input-placeholder {\
  color: #000;\
  text-align: center;\
}\
\
.popup__input::-ms-input-placeholder {\
  color: #000;\
  text-align: center;\
}\
\
.popup__input::placeholder {\
  color: #000;\
  text-align: center;\
}\
\
.popup__btn {\
  display: block;\
  width: 100%;\
  height: 50px;\
  border-radius: 5px;\
  border: 1px solid #000;\
  cursor: pointer;\
  margin-bottom: 12px;\
  background: url("https://files.carrotquest.app/message-images/69303/69303-1781007331374-t9qeyx3r.png");\
  background-repeat: no-repeat;\
  background-size: cover;\
}\
\
#form {\
  width: 279px;\
}\
\
.popup__eula input[type=checkbox] {\
  position: absolute;\
  opacity: 0;\
  width: 1px;\
  height: 1px;\
}\
\
.popup__eula label {\
  position: relative;\
  padding-left: 21px;\
  font-size: 10px;\
  line-height: 1.5;\
  color: #000;\
  cursor: pointer;\
  display: block;\
}\
\
.popup__eula label a {\
  color: #fdc43b;\
  text-decoration: underline;\
}\
\
.popup__eula label::before {\
  content: "";\
  position: absolute;\
  left: 0;\
  top: 2px;\
  width: 14px;\
  height: 14px;\
  background: #fff;\
  border: 1px solid #000;\
  border-radius: 3px;\
  transition: border-color 0.2s;\
}\
\
.popup__eula label::after {\
  content: "";\
  position: absolute;\
  left: 4px;\
  top: 6px;\
  width: 7px;\
  height: 4px;\
  border-left: 1.5px solid #000;\
  border-bottom: 1.5px solid #000;\
  -webkit-transform: rotate(-45deg) scale(0);\
          transform: rotate(-45deg) scale(0);\
  -webkit-transform-origin: center;\
          transform-origin: center;\
  opacity: 0;\
  transition: all 0.15s;\
}\
\
.popup__eula input[type=checkbox]:checked + label::after {\
  opacity: 1;\
  -webkit-transform: rotate(-45deg) scale(1);\
          transform: rotate(-45deg) scale(1);\
}\
\
.popup__chick,\
.popup__star,\
.popup__gift {\
  position: absolute;\
  pointer-events: none;\
  z-index: 3;\
}\
\
.popup__promo {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  gap: 12px;\
  background: #efd1b4;\
  height: 61px;\
  padding: 0 20px;\
  margin-bottom: 10px;\
  cursor: pointer;\
  position: relative;\
}\
\
.popup__promo-code {\
  font-weight: 400;\
  color: #a0522d;\
  letter-spacing: 1px;\
}\
\
.popup__promo-copy {\
  -ms-flex-negative: 0;\
      flex-shrink: 0;\
  -o-object-fit: contain;\
     object-fit: contain;\
}\
\
.popup__promo-note {\
  font-size: 12px;\
  color: #000;\
  text-align: center;\
}\
\
.mob {\
  display: none !important;\
}\
\
@media (min-width: 681px) {\
  .popup__scene {\
    width: 556px;\
  }\
\
  .popup__card {\
    padding: 30px 30px 44px;\
    min-height: 351px;\
  }\
\
  .popup__col-left {\
    width: 225px;\
  }\
\
  .popup__col-right {\
    padding-right: 8px;\
  }\
\
  .popup__chick {\
    left: 11px;\
    top: 97px;\
    width: 205px;\
    -webkit-transform: rotate(-3.58deg);\
            transform: rotate(-3.58deg);\
  }\
\
  .popup__star--s1 {\
    left: 470px;\
    top: -22px;\
  }\
\
  .popup__star--s2 {\
    left: -18px;\
    top: 77px;\
  }\
\
  .popup__star--s3 {\
    left: 203px;\
    top: 281px;\
    width: 50px;\
  }\
\
  .popup__gift--g1 {\
    left: 11px;\
    top: 282px;\
  }\
\
  .popup__gift--g2 {\
    left: 73px;\
    top: 311px;\
  }\
\
  .popup__card--thank {\
    padding: 30px;\
    min-height: 211px;\
  }\
\
  .popup__card--thank .popup__title {\
    font-size: 32px;\
    margin-bottom: 22px;\
    max-width: 235px;\
  }\
\
  .popup__scene--thank .popup__promo {\
    margin-left: 60px;\
    margin-right: 60px;\
    margin-bottom: 15px;\
  }\
\
  .popup__promo-note {\
    text-align: left;\
    margin-left: 60px;\
  }\
\
  .popup__star--t1 {\
    left: 387px;\
    top: -13px;\
  }\
\
  .popup__star--t2 {\
    left: -25px;\
    top: 112px;\
  }\
\
  .popup__star--t3 {\
    left: 497px;\
    top: 151px;\
  }\
\
  .popup__promo-code {\
    font-size: 32px;\
  }\
\
  .popup__promo-copy {\
    width: 26px;\
    height: 26px;\
    position: absolute;\
    right: 25px;\
    top: 18px;\
  }\
}\
\
@media (max-width: 680px) {\
  .popup__wrapper {\
    padding: 20px;\
  }\
\
  #form {\
    width: 100%;\
  }\
\
  .pc {\
    display: none !important;\
  }\
\
  .mob {\
    display: block !important;\
  }\
\
  .popup__scene {\
    width: min(335px, 100vw - 40px);\
  }\
\
  .popup__card {\
    padding: 22px 20px 210px;\
  }\
\
  .popup__col-left {\
    display: none;\
  }\
\
  .popup__title {\
    font-size: 22px;\
    margin-bottom: 10px;\
  }\
\
  .popup__text {\
    text-align: center;\
    margin-bottom: 14px;\
  }\
\
  .popup__chick {\
    left: -50px;\
    top: 326px;\
  }\
\
  .popup__gift--g1 {\
    left: 170px;\
    top: 341px;\
  }\
\
  .popup__gift--g2 {\
    display: none;\
  }\
\
  .popup__star--s1 {\
    left: 288px;\
    top: 341px;\
  }\
\
  .popup__star--s2 {\
    display: block;\
    left: 170px;\
    top: 459px;\
  }\
\
  .popup__star--s3 {\
    display: block;\
    left: 273px;\
    top: 435px;\
  }\
\
  .popup__card--thank {\
    padding: 20px;\
  }\
\
  .popup__card--thank .popup__title {\
    font-size: 24px;\
    margin-bottom: 15px;\
  }\
\
  .popup__star--t1 {\
    left: 320px;\
    top: 29px;\
  }\
\
  .popup__star--t2 {\
    left: initial;\
    right: 85px;\
    top: initial;\
    bottom: -15px;\
  }\
\
  .popup__star--t3 {\
    left: -13px;\
    top: -27px;\
  }\
\
  .popup__promo-code {\
    font-size: 20px;\
  }\
\
  .popup__promo-copy {\
    width: 20px;\
    height: 20px;\
    position: absolute;\
    right: 20px;\
    top: 20px;\
  }\
\
  .popup__promo {\
    margin-bottom: 15px;\
  }\
}</style>\
</head>\
<body>\
<div id="popmechanic-form">\
    <div class="cq-popup__bg"></div>\
\
    <div class="popup__wrapper d_flex first-form">\
        <div class="popup__scene">\
            <img class="popup__chick pc" src="https://files.carrotquest.app/message-images/69303/69303-1781008583478-j3s646n7.png" alt="">\
            <img class="popup__chick mob" src="https://files.carrotquest.app/message-images/69303/69303-1781009014674-pmkmpwhi.png" alt="">\
            <img class="popup__star popup__star--s1 pc" src="https://files.carrotquest.app/message-images/69303/69303-1781008617301-hkbf2gd3.png" alt="">\
            <img class="popup__star popup__star--s1 mob" src="https://files.carrotquest.app/message-images/69303/69303-1781009061935-sc643g28.png" alt="">\
            <img class="popup__star popup__star--s2 pc" src="https://files.carrotquest.app/message-images/69303/69303-1781008668968-7c725kq2.png" alt="">\
            <img class="popup__star popup__star--s2 mob" src="https://files.carrotquest.app/message-images/69303/69303-1781009121858-x4v1wdio.png" alt="">\
            <img class="popup__star popup__star--s3 pc" src="https://files.carrotquest.app/message-images/69303/69303-1781008749881-zxq2p3gp.png" alt="">\
            <img class="popup__star popup__star--s3 mob" src="https://files.carrotquest.app/message-images/69303/69303-1781009199158-ttr7iv0v.png" alt="">\
            <img class="popup__gift popup__gift--g1 pc" src="https://files.carrotquest.app/message-images/69303/69303-1781008764927-0y1afhtj.png" alt="">\
            <img class="popup__gift popup__gift--g1 mob" src="https://files.carrotquest.app/message-images/69303/69303-1781008966237-cxc8gjtu.png" alt="">\
            <img class="popup__gift popup__gift--g2" src="https://files.carrotquest.app/message-images/69303/69303-1781008777064-mp5gnbe1.png" alt="">\
            <div class="popup__card">\
                <button class="popup__close cq-popup__close" aria-label="Закрыть"></button>\
                <img src="https://files.carrotquest.app/message-images/69303/69303-1782888569857-vbtfm2mt.png" class="popup__title pc">\
                <img src="https://files.carrotquest.app/message-images/69303/69303-1782888601570-pa7rs8z8.png" class="popup__title mob">\
                <div class="popup__body">\
                    <div class="popup__col-left"></div>\
                    <div class="popup__col-right">\
                        <p class="popup__text">Оставьте email — и мы пришлём промокод прямо сейчас. Плюс анонсы новых спектаклей первыми.</p>\
                        <form id="form">\
                            <input class="popup__input cq_popup-input email" type="email" name="email" placeholder="Введите e-mail" required>\
                            <button type="submit" class="popup__btn"></button>\
                            <div class="popup__eula">\
                                <input type="checkbox" id="checkbox" checked>\
                                <label for="checkbox">Я принимаю <a href="#" target="_blank">политику конфиденциальности</a> и даю согласие на <a href="#" target="_blank">обработку персональных данных</a></label>\
                            </div>\
                        </form>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
\
    <div class="popup__wrapper d_flex second-form hidden">\
        <div class="popup__scene popup__scene--thank">\
            <img class="popup__star popup__star--t1 pc" src="https://files.carrotquest.app/message-images/69303/69303-1781008813308-52qizqpk.png" alt="">\
            <img class="popup__star popup__star--t1 mob" src="https://files.carrotquest.app/message-images/69303/69303-1781009278308-urjhc9wo.png" alt="">\
            <img class="popup__star popup__star--t2 pc" src="https://files.carrotquest.app/message-images/69303/69303-1781008871673-dub54iyg.png" alt="">\
            <img class="popup__star popup__star--t2 mob" src="https://files.carrotquest.app/message-images/69303/69303-1781009332634-084nqb2r.png" alt="">\
            <img class="popup__star popup__star--t3 pc" src="https://files.carrotquest.app/message-images/69303/69303-1781008885955-fnghx5qd.png" alt="">\
            <img class="popup__star popup__star--t3 mob" src="https://files.carrotquest.app/message-images/69303/69303-1781009296880-95kd5vy0.png" alt="">\
            <div class="popup__card popup__card--thank">\
                <button class="popup__close cq-popup__close" aria-label="Закрыть"></button>\
                <img src="https://files.carrotquest.app/message-images/69303/69303-1781008441365-7qahjs2p.png" class="popup__title pc">\
                <img src="https://files.carrotquest.app/message-images/69303/69303-1781007700197-fywihdvu.png" class="popup__title mob">\
                <div class="popup__promo" id="promoCode">\
                    <span class="popup__promo-code">театр10</span>\
                    <img class="popup__promo-copy" src="https://www.figma.com/api/mcp/asset/69b846c5-1230-4659-b585-19710ee1d7bf" alt="копировать">\
                </div>\
                <p class="popup__promo-note">*Нажмите на промокод, он скопируется автоматически.</p>\
            </div>\
        </div>\
    </div>\
</div>\
<script>"use strict";\
\
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\
var cqpopup_name = "Сбор e-mail",\
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
  var email = document.querySelector(\'input.email\').value;\
  var checked = document.querySelector(\'#checkbox\').checked;\
  if (email && checked) {\
    trackData("email");\
    carrotquest.identify([{\
      op: \'update_or_create\',\
      key: \'источник CQ\',\
      value: cqpopup_name\
    }]);\
    hidden_visible(\'.first-form\', \'.second-form\');\
    carrotquest.replied();\
  }\
});\
document.addEventListener(\'click\', function (e) {\
  if (e.target.closest(\'#promoCode\')) {\
    var code = document.querySelector(\'.popup__promo-code\').textContent.trim();\
    if (navigator.clipboard) {\
      navigator.clipboard.writeText(code).catch(function () {\
        copyFallback(code);\
      });\
      carrotquest.identify([{\
        op: \'update_or_create\',\
        key: \'промокод CQ\',\
        value: document.querySelector(\'.popup__promo-code\').textContent.trim()\
      }]);\
      carrotquest.track(cqpopup_name + \' - Скопировал промокод\');\
    } else {\
      copyFallback(code);\
    }\
  }\
});\
function copyFallback(text) {\
  var ta = document.createElement(\'textarea\');\
  ta.value = text;\
  ta.style.cssText = \'position:fixed;opacity:0;top:0;left:0\';\
  document.body.appendChild(ta);\
  ta.focus();\
  ta.select();\
  try {\
    document.execCommand(\'copy\');\
  } catch (err) {}\
  document.body.removeChild(ta);\
}\
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