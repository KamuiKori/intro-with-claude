var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Onest:wght@100..900&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Montserrat", sans-serif;\
  font-weight: 400;\
}\
\
@font-face {\
  font-family: "SovMod";\
  font-weight: 400;\
  src: url("https://static.tildacdn.com/tild6165-3766-4530-b865-356164663334/SovMod.woff") format("woff");\
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
  display: block;\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background-color: rgba(0, 0, 0, 0.4);\
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
.cq-popup__body {\
  position: relative;\
  z-index: 2;\
  width: 100%;\
  height: 100%;\
  background: #fff;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
}\
\
.cq-popup__close {\
  cursor: pointer;\
  height: 21px;\
  width: 21px;\
  position: absolute;\
  top: 20px;\
  right: 25px;\
  z-index: 99;\
}\
\
.cq-popup__close:before,\
.cq-popup__close:after {\
  background-color: #ffffff;\
  content: " ";\
  height: 30px;\
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
  border-radius: 3px;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-pack: center;\
      justify-content: center;\
  height: 100%;\
  width: 100%;\
  padding: 60px;\
  background: #fff;\
}\
\
.cq-popup__form-content {\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  -ms-flex-align: start;\
      align-items: flex-start;\
}\
\
.cq-popup__form-title {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  width: 100%;\
  max-width:820px;\
  background: url("https://files.carrotquest.app/message-images/64086/64086-1740035107416-oi1c2ulq.png");\
  backrground-size:cover;\
  background-repeat:no-repeat;\
  padding: 100px 80px;\
  border-radius: 30px;\
  -ms-flex-align: start;\
      align-items: flex-start;\
      border-radius:39px;\
}\
\
.logo {\
  margin-bottom: 32px;\
  max-width:44px;\
}\
\
.cq-popup__form-inputs {\
  width: 100%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  max-width: 360px;\
}\
\
.cq_popup-input {\
  width: 100%;\
  height: 55px;\
  color: #000;\
  border: none;\
  background: #F5F4F3;\
  outline: none;\
  border-radius: 5px;\
  margin-bottom: 20px;\
  padding-left: 20px;\
  font-size: 16px;\
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
.cq-popup__text {\
  font-size: 26px;\
  line-height: normal;\
  color: #0F0D4C;\
  text-align: left;\
  font-weight: 500;\
    font-family: "Onest", sans-serif;\
  letter-spacing: -0.05em;\
  line-height: 125%;\
}\
\
.cq-popup__text span {\
  font-weight: 500;\
  color:#716DFF;\
    line-height: 125%;\
}\
\
.cq-popup__text-h1 {\
  margin-bottom: 87px;\
  font-size: 49px;\
  font-family: "Onest", sans-serif;\
  line-height: 100%;\
  color: #0F0D4C;\
  text-align: left;\
  font-weight: 500;\
  letter-spacing: -0.05em;\
}\
\
.send_email {\
  color: #487EDB;\
}\
\
.cq-popup__input {\
  background: #ffffff;\
  border: 1px solid #C9C9C9;\
  color: #000;\
  font-size: 16px;\
  font-weight: 400;\
  padding: 0 20px;\
  text-align: center;\
  width: 100%;\
  line-height: 44px;\
  outline: none;\
  border-radius: 3px;\
  margin-bottom: 10px;\
}\
\
.cq-popup__input::-webkit-input-placeholder {\
  font-size: 16px;\
  color: #9BA2AB;\
}\
\
.cq-popup__input:-ms-input-placeholder {\
  font-size: 16px;\
  color: #9BA2AB;\
}\
\
.cq-popup__input::-ms-input-placeholder {\
  font-size: 16px;\
  color: #9BA2AB;\
}\
\
.cq-popup__input::placeholder {\
  font-size: 16px;\
  color: #9BA2AB;\
}\
\
.cq-popup__button {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  background: #000000;\
  color: #ffffff;\
  font-weight: 700;\
  cursor: pointer;\
  font-size: 16px;\
  border-radius: 10px;\
  text-align: center;\
  width: 100%;\
  max-width: 355px;\
  line-height: 55px;\
  text-decoration: none;\
  margin-bottom: 12px;\
  font-family: "Open Sans", sans-serif;\
  border: none;\
}\
\
.second-form {\
  min-height: 329px;\
}\
\
#checkbox {\
  width: 15px;\
  height: 15px;\
  background: #fff;\
  margin-right: 13px;\
}\
\
[type=checkbox]:not(:checked),\
[type=checkbox]:checked {\
  position: absolute;\
  left: 0;\
  opacity: 0.01;\
}\
\
[type=checkbox]:not(:checked) + label,\
[type=checkbox]:checked + label {\
  position: relative;\
  padding-left: 27px;\
  font-weight: 500;\
  font-size: 12px;\
  line-height: 1.7;\
  cursor: pointer;\
}\
\
[type=checkbox]:not(:checked) + label:before,\
[type=checkbox]:checked + label:before {\
  content: "";\
  position: absolute;\
  left: 3px;\
  top: 3px;\
  width: 13px;\
  height: 13px;\
  background: #fff;\
  border: 1px solid #E6E9EC;\
  transition: all 0.275s;\
  border-radius: 3px;\
}\
\
[type=checkbox]:not(:checked) + label:after,\
[type=checkbox]:checked + label:after {\
  padding: 1px;\
  content: " ";\
  position: absolute;\
  top: 6px;\
  left: 6px;\
  font-size: 13px;\
  color: #97EA5D;\
  line-height: 0;\
  transition: all 0.2s;\
  background: #97EA5D;\
  width: 7px;\
  height: 7px;\
  border-radius: 2px;\
}\
\
[type=checkbox]:not(:checked) + label:after {\
  opacity: 0;\
  -webkit-transform: scale(0) rotate(45deg);\
  transform: scale(0) rotate(45deg);\
}\
\
[type=checkbox]:checked + label:after {\
  opacity: 1;\
  -webkit-transform: scale(1) rotate(0);\
  transform: scale(1) rotate(0);\
}\
\
.eula {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
}\
\
.eula label {\
  font-size: 10px;\
  line-height: 13px;\
  color: #000;\
  max-width: 355px;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
}\
\
.hidden {\
  display: none !important;\
}\
.wrap{\
    width:100%;\
    display:flex;\
    flex-direction:column;\
    background:#fff;\
    padding:40px 40px 59px 40px;\
    border-radius:32px;\
    max-width:660px;\
}\
\
@media (max-width: 1700px) {\
  .cq-popup__text {\
    font-size: 17px;\
  }\
\
  .cq-popup__text-h1 {\
    font-size: 27px;\
    margin-bottom: 20px;\
  }\
\
  .logo {\
    margin-bottom: 20px;\
  }\
}\
@media (max-width: 1200px) {\
  .cq-popup__form-title{\
      padding: 50px 40px;\
    }\
}\
\
@media (max-width: 1100px) {\
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
\
  .cq-popup__form {\
    display: none;\
  }\
\
  .cq-popup__form-inputs {\
    max-width: 300px;\
  }\
\
  .cq-popup-inputs-title {\
    text-align: center;\
    font-size: 16px;\
    margin-bottom: 20px;\
  }\
\
  .cq-input-tel {\
    border: 1px solid #000000;\
  }\
}</style>\
</head>\
\
<body>\
<div class="wrapper__body d_flex">\
    <div class="cq-popup__body d_flex flex_col">\
        <form id="form" class="cq-popup__form d_flex flex_col first-form">\
                <div class="cq-popup__form-title d_flex flex_col">\
                    <div class="wrap">\
                        <img src="https://files.carrotquest.app/message-images/64086/64086-1740034779564-8oqek02r.png" alt="" class="logo">\
                        <p class="cq-popup__text-h1">Здорово, что вы с нами!<br> Наш менеджер скоро <br>с вами свяжется.</p>\
                        <p class="cq-popup__text">А пока расскажите немного о себе — <br>это поможет нам лучше узнать вас. <br>В благодарность отправим гайд <span>«Топ-5 ошибок <br>при изучении языков и как их избежать»</span>.</p>\
                    </div>\
                </div>\
        </form>\
        <div data-cq-botid="1861265193728740363"></div>\
    </div>\
</div>\
<script type="text/javascript" src="https://cdn.carrotquest.app/embedded.js"></script>\
<script>"use strict";\
\
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\
</script>\
</body>\
</html>\
\
';

"use strict";

var div = document.createElement('div');
div.id = 'carrot_div_{{ sending_id }}';
div.style.opacity = "1";
div.style.position = 'fixed';
div.style.zIndex = '9999999999';
div.style.width = '100%';
div.style.height = '100%';
div.style.transition = '.5s';
div.style.top = '0';
div.style.right = '0';
div.style.left = '0';
div.style.bottom = '0';
document.body.appendChild(div);

div.innerHTML = popupContent;

function executeScripts(container) {
    var scripts = Array.from(container.querySelectorAll("script"));
    scripts.forEach(function (oldScript) {
        var newScript = document.createElement("script");
        Array.from(oldScript.attributes).forEach(function (attr) {
            newScript.setAttribute(attr.name, attr.value);
        });
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

executeScripts(div);

carrotquest.identify([{
    op: 'update_or_create',
    key: 'popup',
    value: 'opened'
}]);
localStorage["cq_popup"] = 'opened';