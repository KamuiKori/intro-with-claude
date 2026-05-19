var popupContent = '\
<!DOCTYPE html>\
<html lang="ru">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">\
    <style>* {\
  margin: 0;\
  padding: 0;\
  box-sizing: border-box;\
  -webkit-appearance: none;\
  -webkit-font-smoothing: subpixel-antialiased;\
  -webkit-tap-highlight-color: transparent;\
  font-family: "Ubuntu", sans-serif;\
  font-weight: 400;\
}\
\
html,\
body {\
  height: 100%;\
}\
\
a {\
  color: inherit;\
}\
\
.cqp__body {\
  position: relative;\
  z-index: 3;\
  height: 100%;\
  max-width: 100%;\
  background-color: #fff;\
  overflow: hidden;\
}\
\
.scroll {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  -ms-flex-align: center;\
      align-items: center;\
  height: 100%;\
  width: 100%;\
  overflow-x: auto;\
  box-sizing: content-box;\
  -ms-overflow-style: none;\
}\
\
.scroll::-webkit-scrollbar {\
  width: 0;\
}\
\
.cqp__stories {\
  display: -ms-inline-flexbox;\
  display: inline-flex;\
  -ms-flex-align: start;\
      align-items: flex-start;\
  -ms-flex-pack: start;\
      justify-content: flex-start;\
  list-style-type: none;\
}\
\
.cqp__story {\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  width: 85px;\
  padding: 0 5px;\
  list-style: none;\
  cursor: pointer;\
}\
\
.cqp__story-img-wrapper {\
  position: relative;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-align: center;\
      align-items: center;\
  -ms-flex-pack: center;\
      justify-content: center;\
  width: 67px;\
  height: 67px;\
  background: transparent;\
  border: none;\
  border-radius: 50%;\
}\
\
.cqp__story-img-wrapper.active {\
  background: linear-gradient(#434995, #FF104D);\
}\
\
.cqp__story-img-wrapper.active::before {\
  content: "";\
  position: absolute;\
  top: 0;\
  left: 0;\
  bottom: 0;\
  right: 0;\
  margin: auto;\
  width: 63px;\
  height: 63px;\
  border-radius: 50%;\
  background-color: #fff;\
}\
\
.cqp__story-img {\
  position: absolute;\
  max-width: 59px;\
  max-height: 59px;\
  width: 100%;\
  height: 100%;\
  border-radius: 50%;\
}\
\
.cqp__story-text {\
  position: relative;\
  display: block;\
  display: -webkit-box;\
  line-height: 1.2;\
  -webkit-line-clamp: 2;\
  margin: 5px 0 0 0;\
  font-size: 12px;\
  color: #000;\
  text-align: center;\
}\
\
.cqp__story-modal {\
  position: fixed;\
  top: 0;\
  left: 0;\
  width: 100%;\
  height: 100%;\
  background: #fff;\
}\
\
.cqp__story-close {\
  position: absolute;\
  top: 0;\
  right: 0;\
  height: 40px;\
  width: 40px;\
  cursor: pointer;\
  z-index: 200;\
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
  padding-left: 8px;\
  font-weight: 500;\
  font-size: 11px;\
  line-height: 1.7;\
  cursor: pointer;\
  white-space: nowrap;\
}\
\
[type=checkbox]:not(:checked) + label:before,\
[type=checkbox]:checked + label:before {\
  content: "";\
  position: absolute;\
  left: -11px;\
  top: 0px;\
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
  top: 3px;\
  left: -8px;\
  font-size: 13px;\
  color: #000;\
  line-height: 0;\
  transition: all 0.2s;\
  background: #000;\
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
  width: 100%;\
  max-width: 78%;\
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
.email-form {\
  position: absolute;\
  top: 30%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: center;\
      align-items: center;\
  z-index: 1000;\
  width: 100%;\
}\
\
.thank {\
  position: absolute;\
  top: 45%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: column;\
      flex-direction: column;\
  -ms-flex-align: center;\
      align-items: center;\
  z-index: 1000;\
  width: 100%;\
}\
\
.cq-popup__text {\
  color: #000;\
  text-align: center;\
  font-size: 30px;\
  font-family: "Montserrat", Sans-Serif;\
  font-style: normal;\
  font-weight: 700;\
  line-height: normal;\
  margin-bottom: 10px;\
}\
\
.btn_submit {\
  width: 100%;\
  max-width: 80%;\
  height: 60px;\
  border: none;\
  background: #000;\
  color: #fff;\
  font-size: 18px;\
  font-weight: 700;\
  margin-bottom: 15px;\
}\
\
.email {\
  width: 100%;\
  max-width: 80%;\
  height: 60px;\
  text-align: center;\
  font-size: 18px;\
  border-radius: 2px;\
  border: 1px solid #c6c6c6;\
  margin-bottom: 10px;\
}\
\
.cq-popup__text.small {\
  font-weight: 400;\
  margin-bottom: 25px;\
  font-size: 18px;\
}\
\
.cqp__story-close:before,\
.cqp__story-close:after {\
  position: absolute;\
  top: 0;\
  left: 0;\
  bottom: 0;\
  right: 0;\
  height: 20px;\
  width: 2px;\
  margin: auto;\
  background-color: #000;\
  border-radius: 3px;\
  content: "";\
}\
\
.cqp__story-close:before {\
  -webkit-transform: rotate(45deg);\
  transform: rotate(45deg);\
}\
\
.cqp__story-close:after {\
  -webkit-transform: rotate(-45deg);\
  transform: rotate(-45deg);\
}\
\
.cqp__story-content,\
.cqp__story-slider {\
  height: 100%;\
}\
\
.cqp__story-viewer {\
  height: 100%;\
  position: relative;\
}\
\
.cqp__story-viewer-img {\
  position: absolute;\
  left: 50%;\
  -webkit-transform: translateX(-50%);\
          transform: translateX(-50%);\
  margin: auto;\
  height: 100%;\
}\
\
.cqp__story-slide-link {\
  position: absolute;\
  bottom: 5%;\
  right: 0;\
  left: 0;\
  z-index: 1000;\
  width: 85%;\
  height: 60px;\
  padding: 18px 20px;\
  margin: 0 auto;\
  font-size: 19px;\
  line-height: 24px;\
  text-align: center;\
  color: #fff;\
  background-color: #000;\
  text-decoration: none;\
  outline: none;\
  border-radius: 5px;\
}\
\
.btn_wrap {\
  position: absolute;\
  bottom: 5%;\
  right: 0;\
  left: 0;\
  width: 100%;\
  max-width: 90%;\
  display: -ms-flexbox;\
  display: flex;\
  -ms-flex-direction: row;\
      flex-direction: row;\
  z-index: 200;\
  -ms-flex-pack: center;\
      justify-content: center;\
  margin: 0 auto;\
}\
\
.product_link {\
  width: 90%;\
  background: #FB0848;\
  color: #fff;\
  height: 60px;\
  text-align: center;\
  padding-top: 18px;\
  text-decoration: none;\
  font-size: 17px;\
  border-radius: 5px;\
  z-index: 210;\
}\
\
.btn_track {\
  position: absolute;\
  bottom: 5%;\
  right: 0;\
  left: 0;\
  margin: 0 auto;\
  width: 85%;\
  background: #000;\
  color: #fff;\
  height: 60px;\
  text-align: center;\
  text-decoration: none;\
  font-size: 22px;\
  border-radius: 5px;\
  border: none;\
  z-index: 2000;\
}\
\
.btn_next_small {\
  background: url("https://files.carrotquest.io/message-images/51264/51264-1677060609739-cvnzf94o.png");\
  background-size: cover;\
  border: none;\
  width: 60px;\
  height: 60px;\
}\
\
.btn_next_large,\
.btn_close {\
  position: absolute;\
  bottom: 5%;\
  right: 0;\
  left: 0;\
  width: 100%;\
  max-width: 85%;\
  height: 60px;\
  margin: 0 auto;\
  text-transform: uppercase;\
  background: #000;\
  color: #fff;\
  font-size: 22px;\
  border: none;\
  border-radius: 5px;\
  z-index: 110;\
}\
\
.btn_next_large {\
  font-size: 20px;\
}\
\
.prev {\
  width: 50%;\
  height: 100%;\
  position: absolute;\
  left: 0;\
  top: 0;\
  z-index: 100;\
}\
\
.next {\
  width: 50%;\
  height: 100%;\
  position: absolute;\
  right: 0;\
  top: 0;\
  z-index: 100;\
}\
\
.hidden {\
  display: none;\
}</style>\
</head>\
\
<body>\
<div class="cqp__body">\
    <div class="scroll">\
        <ul class="cqp__stories">\
        </ul>\
    </div>\
    <div class="cqp__story-modal hidden">\
        <div class="cqp__story-close"></div>\
        <div class="cqp__story-content">\
            <div class="cqp__story-slider"></div>\
        </div>\
    </div>\
</div>\
<script>"use strict";\
\
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\
\
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\
\
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\
\
var cqpopup_name = \'Сторис\',\
    carrotquest = {\
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
    carrotquest.track(cqpopup_name + \' - Ответил в попап\');\
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
  resizeFrame: function resizeFrame(obj) {\
    var data = {\
      "command": \'carrotquest.resizeFrame\',\
      \'id\': \'{{ sending_id }}\',\
      "position": obj.position,\
      \'width\': obj.width,\
      \'height\': obj.height,\
      "zIndex": obj.zIndex,\
      "top": obj.top,\
      "left": obj.left\
    };\
    top.postMessage(data, \'*\');\
  }\
},\
    stories = [{\
  id: 1,\
  photo: "https://files.carrotquest.app/message-images/47069/47069-1689931604381-8hiw33po.png",\
  name: "О школе",\
  items: [{\
    id: 1,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689932358075-rfnmioy9.png",\
    productLink: "#"\
  }]\
}, {\
  id: 2,\
  photo: "https://files.carrotquest.app/message-images/47069/47069-1689931646654-xk4ts0sj.png",\
  name: "Педагоги",\
  items: [{\
    id: 1,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689932742246-o7y8r1qp.png",\
    productLink: "#"\
  }, {\
    id: 2,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689932921121-qmwd5g4q.png",\
    productLink: "#"\
  }, {\
    id: 3,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689932942643-vjqaif7f.png",\
    productLink: "#"\
  }]\
}, {\
  id: 3,\
  photo: "https://files.carrotquest.app/message-images/47069/47069-1689931664998-qx60uhxq.png",\
  name: "Форматы обучения",\
  items: [{\
    id: 1,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933023541-e725k9kj.png",\
    productLink: "#"\
  }, {\
    id: 2,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933056021-brfzxj04.png",\
    productLink: "#"\
  }, {\
    id: 3,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933073382-tirjvnqb.png",\
    productLink: "#"\
  }]\
}, {\
  id: 4,\
  photo: "https://files.carrotquest.app/message-images/47069/47069-1689931677793-wv4i4btj.png",\
  name: "Индивидуальное обучение",\
  items: [{\
    id: 1,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933477914-jsqswxgb.png",\
    productLink: "#"\
  }]\
}, {\
  id: 5,\
  photo: "https://files.carrotquest.app/message-images/47069/47069-1689931701338-ha5vd11y.png",\
  name: "Отзывы",\
  items: [{\
    id: 1,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933518130-ymc5wmuc.png",\
    productLink: "#"\
  }, {\
    id: 2,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933546614-aznzy9rr.png",\
    productLink: "#"\
  }, {\
    id: 3,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933567194-qqv4jbhk.png",\
    productLink: "#"\
  }, {\
    id: 4,\
    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933596495-a4kwpjoz.png",\
    productLink: "#"\
  }]\
}],\
    cqp_stories = document.querySelector(".cqp__stories"),\
    cqp_storySlider = document.querySelector(".cqp__story-slider"),\
    cqp_modalStory = document.querySelector(".cqp__story-modal"),\
    cqp_close = document.querySelector(".cqp__story-close");\
document.addEventListener("readystatechange", function () {\
  if (document.readyState === "complete") {\
    carrotquest.read();\
    carrotquest.animation();\
    renderStoriesFeed(stories);\
  }\
});\
document.addEventListener("click", function (e) {\
  if (e.target.closest(\'.btn_close\')) {\
    resizeFrame("close");\
  }\
});\
cqp_close.addEventListener("click", function () {\
  resizeFrame("close");\
});\
\
function hidden_visible(elem1, elem2) {\
  elem1.classList.add("hidden");\
  elem2.classList.remove("hidden");\
}\
\
function renderStoriesFeed(stories) {\
  var template = "";\
  stories.forEach(function (story) {\
    template += "<li class=\\"cqp__story\\" data-id=\\"".concat(story.id, "\\">\\n            <div class=\\"cqp__story-img-wrapper active\\">\\n            <img class=\\"cqp__story-img\\" src=\\"").concat(story.photo, "\\">\\n            </div>\\n            <p class=\\"cqp__story-text\\">").concat(story.name, "</p>\\n          </li>");\
  });\
  cqp_stories.innerHTML = template;\
}\
\
function renderStories(story) {\
  var template = "";\
  story.items.forEach(function (storyItem, idx) {\
    var hidden = idx != 0 ? "hidden" : "";\
    var storyLink = storyItem.link ? "<a href=\\"".concat(storyItem.link, "\\" target=\\"_blank\\" class=\\"cqp__story-slide-link\\">").concat(storyItem.linkText, "</a>") : "";\
    var productLink = storyItem.productLink ? "<div class=\\"btn_wrap\\"><a href=\\"".concat(storyItem.productLink, "\\" target=\\"_blank\\" class=\\"product_link\\">\\u0417\\u0430\\u043F\\u0438\\u0441\\u0430\\u0442\\u044C\\u0441\\u044F \\u043D\\u0430 \\u043F\\u0440\\u043E\\u0431\\u043D\\u044B\\u0439 \\u0443\\u0440\\u043E\\u043A</a></div>") : "";\
    var btn_next_large = storyItem.btn_next_large ? "<button class=\\"btn_next_large\\">".concat(storyItem.btn_next_text, "</button>\\"") : \'\';\
    var btnClose = storyItem.btn_close ? "<button class=\'btn_close\'>\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C</button>" : "";\
    var btnToTrack = storyItem.btn_toTrack ? "<button class=\\"btn_track\\">\\u041F\\u041E\\u0414\\u041E\\u0411\\u0420\\u0410\\u0422\\u042C \\u0423\\u0425\\u041E\\u0414</button>" : \'\';\
    var emailForm = storyItem.emailForm ? "\\n        <form class=\\"email-form\\">\\n            <p class=\\"cq-popup__text\\">\\n                \\u0414\\u0430\\u0440\\u0438\\u043C 10% \\u0441\\u043A\\u0438\\u0434\\u043A\\u0443 <br>\\u043D\\u0430 \\u043D\\u0430\\u0448\\u0443 \\u043A\\u043E\\u0441\\u043C\\u0435\\u0442\\u0438\\u043A\\u0443.\\n            </p>\\n            <p class=\\"cq-popup__text small\\">\\n                \\u041E\\u0441\\u0442\\u0430\\u0432\\u044C\\u0442\\u0435 email, \\u0447\\u0442\\u043E\\u0431\\u044B \\u043C\\u044B \\u043F\\u0440\\u0438\\u0441\\u043B\\u0430\\u043B\\u0438 \\u043F\\u0440\\u043E\\u043C\\u043E\\u043A\\u043E\\u0434.\\n            </p>\\n            <input class=\\"cq_popup-input email\\" type=\\"email\\" name=\\"email\\" placeholder=\\"\\u0412\\u0430\\u0448 email\\" required>\\n            <button type=\\"submit\\" class=\\"btn_submit\\">\\u041F\\u043E\\u043B\\u0443\\u0447\\u0438\\u0442\\u044C \\u043F\\u043E\\u0434\\u0430\\u0440\\u043E\\u043A</button>\\n            <div class=\\"eula\\">\\n                <input type=\\"checkbox\\" id=\\"checkbox\\" checked>\\n                <label for=\\"checkbox\\">\\u042F \\u0441\\u043E\\u0433\\u043B\\u0430\\u0441\\u043D\\u0430(-\\u0435\\u043D) \\u043D\\u0430 \\u043E\\u0431\\u0440\\u0430\\u0431\\u043E\\u0442\\u043A\\u0443 \\u043F\\u0435\\u0440\\u0441\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u044B\\u0445 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445.</label>\\n            </div>\\n        </form>\\n        <div class=\\"thank hidden\\">\\n            <p class=\\"cq-popup__text bold\\">\\u0421\\u043F\\u0430\\u0441\\u0438\\u0431\\u043E!</p>\\n            <p class=\\"cq-popup__text small\\">\\u041F\\u0440\\u043E\\u0432\\u0435\\u0440\\u044C\\u0442\\u0435 \\u043F\\u043E\\u0447\\u0442\\u0443 \\u0447\\u0435\\u0440\\u0435\\u0437 \\u043F\\u0430\\u0440\\u0443 \\u043C\\u0438\\u043D\\u0443\\u0442</p>\\n        </div>\\n        " : \'\';\
    template += "\\n          <div class=\\"cqp__story-viewer ".concat(hidden, "\\">\\n          <div class=\\"prev\\"></div>\\n            <img class=\\"cqp__story-viewer-img\\" src=\\"").concat(storyItem.photo, "\\" alt=\\"\\">\\n            ").concat(storyLink, "\\n            ").concat(btnClose, "\\n            ").concat(btn_next_large, "\\n            ").concat(productLink, "\\n            ").concat(btnToTrack, "\\n            ").concat(emailForm, "\\n            <div class=\\"next\\"></div>\\n          </div>");\
  });\
  cqp_storySlider.dataset.id = story.id;\
  cqp_storySlider.innerHTML = template;\
}\
\
document.addEventListener(\'submit\', function (e) {\
  if (e.target.closest(\'.email-form\')) {\
    e.preventDefault();\
    var email = e.target.closest(\'.email-form\').querySelector(\'.email\').value;\
\
    if (email && e.target.closest(\'.email-form\').querySelector(\'#checkbox\').checked) {\
      hidden_visible(document.querySelector(\'.email-form\'), document.querySelector(\'.thank\'));\
      carrotquest.identify([{\
        op: "update_or_create",\
        key: \'$email\',\
        value: email\
      }]);\
      carrotquest.replied();\
      stories.forEach(function (story) {\
        story.items.pop();\
      });\
    }\
  }\
});\
\
function resizeFrame(state) {\
  var obj = {};\
\
  if (state == "open") {\
    cqp_modalStory.classList.remove("hidden");\
    obj = {\
      position: "fixed",\
      width: "100%",\
      height: "100%",\
      zIndex: "9999999999999",\
      top: 0,\
      left: 0\
    };\
    carrotquest.resizeFrame(obj);\
  }\
\
  if (state == "close") {\
    cqp_modalStory.classList.add("hidden");\
    obj = {\
      position: "relative",\
      width: "100%",\
      height: "135px",\
      zIndex: "1",\
      top: 0,\
      left: 0\
    };\
    carrotquest.resizeFrame(obj);\
  }\
}\
\
cqp_stories.addEventListener("click", function (e) {\
  if (e.target.closest(".cqp__story")) {\
    var _iterator = _createForOfIteratorHelper(stories),\
        _step;\
\
    try {\
      for (_iterator.s(); !(_step = _iterator.n()).done;) {\
        var story = _step.value;\
\
        if (story.id == e.target.closest(".cqp__story").dataset.id) {\
          renderStories(story);\
          resizeFrame("open");\
          carrotquest.track(cqpopup_name + " - открыл сторис (" + story.name + ")");\
          break;\
        }\
      }\
    } catch (err) {\
      _iterator.e(err);\
    } finally {\
      _iterator.f();\
    }\
  }\
});\
cqp_storySlider.addEventListener("click", function (e) {\
  if (e.target.closest(".cqp__story-slide-link")) {\
    carrotquest.track(cqpopup_name + " - клик (" + e.target.closest(".cqp__story-slide-link").textContent + ")");\
    carrotquest.clicked();\
    return;\
  }\
\
  if (e.target.closest(\'.btn_track\')) {\
    carrotquest.track(cqpopup_name + " - Клик подобрать уход");\
    resizeFrame("close");\
  }\
\
  if (e.target.closest(\'.product_link\')) {\
    carrotquest.track(cqpopup_name + " - Перешел на товар");\
  }\
\
  if (e.target.closest(".next") || e.target.closest(\'.btn_next_large\') || e.target.closest(\'.btn_next_small\')) {\
    var currentStorySlide = e.target.closest(".cqp__story-viewer");\
    var nextStorySlide = currentStorySlide.nextElementSibling;\
\
    if (nextStorySlide) {\
      if (nextStorySlide.querySelector(\'.email-form\')) {\
        carrotquest.track(cqpopup_name + \' - Прочитал форму email\');\
      }\
\
      hidden_visible(currentStorySlide, nextStorySlide);\
    } else if (document.querySelector(".cqp__story[data-id=\'" + (+e.currentTarget.dataset.id + 1) + "\']")) {\
      var _iterator2 = _createForOfIteratorHelper(stories),\
          _step2;\
\
      try {\
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\
          var story = _step2.value;\
\
          if (story.id == +e.currentTarget.dataset.id + 1) {\
            renderStories(story);\
            break;\
          }\
        }\
      } catch (err) {\
        _iterator2.e(err);\
      } finally {\
        _iterator2.f();\
      }\
    } else {\
      cqp_storySlider.removeAttribute("data-id");\
      cqp_storySlider.innerHTML = "";\
      resizeFrame("close");\
    }\
  }\
\
  if (e.target.closest(".prev")) {\
    var currentStorySlide = e.target.closest(".cqp__story-viewer");\
    var prevStorySlide = currentStorySlide.previousElementSibling;\
\
    if (prevStorySlide) {\
      if (prevStorySlide.querySelector(\'.email-form\')) {\
        carrotquest.track(cqpopup_name + \' - Прочитал форму email\');\
      }\
\
      hidden_visible(currentStorySlide, prevStorySlide);\
    } else if (document.querySelector(".cqp__story[data-id=\'" + (+e.currentTarget.dataset.id - 1) + "\']")) {\
      var _iterator3 = _createForOfIteratorHelper(stories),\
          _step3;\
\
      try {\
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\
          var story = _step3.value;\
\
          if (story.id == +e.currentTarget.dataset.id - 1) {\
            renderStories(story);\
            break;\
          }\
        }\
      } catch (err) {\
        _iterator3.e(err);\
      } finally {\
        _iterator3.f();\
      }\
    } else {\
      cqp_storySlider.removeAttribute("data-id");\
      cqp_storySlider.innerHTML = "";\
      resizeFrame("close");\
    }\
  }\
});</script>\
</body>\
</html>\
\
';

"use strict";

var iframe = document.createElement('iframe');
iframe.id = 'carrot_frame_{{ sending_id }}';
iframe.name = "cqp_stories";
iframe.frameBorder = 0;
iframe.style.opacity = 0;
iframe.style.display = "block";
iframe.style.position = "relative";
iframe.style.transform = "translateY(0px)";
iframe.style.height = "150px";
iframe.style.width = "100%";
iframe.style.zIndex = "1";
iframe.style.transition = ".5s";
document.querySelector('header ').after(iframe);
var iframeContent = iframe.contentWindow || iframe.contentDocument;
if (iframeContent.document) iframeContent = iframeContent.document;
iframeContent.open();
iframeContent.writeln(popupContent);
iframeContent.close();