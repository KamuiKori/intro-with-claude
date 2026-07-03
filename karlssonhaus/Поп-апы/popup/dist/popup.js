"use strict";

var cqpopup_name = 'Поп-ап таймер 2';
var carrotquest = {
  track: function track(eventName, params) {
    parent.window.carrotquest.track(eventName, params);
  },
  identify: function identify(props) {
    parent.window.carrotquest.identify(props);
  },
  animation: function animation() {
    var data = {
      command: "carrotquest.animationPopup",
      "id": "{{ sending_id }}",
      "cqpopup_name": cqpopup_name
    };
    top.postMessage(data, "*");
  },
  replied: function replied() {
    var data = {
      command: "carrotquest.repliedPopup",
      "id": "{{ sending_id }}",
      "cqpopup_name": cqpopup_name
    };
    top.postMessage(data, "*");
  },
  clicked: function clicked() {
    var data = {
      command: "carrotquest.clickedPopup",
      "id": "{{ sending_id }}",
      "cqpopup_name": cqpopup_name
    };
    top.postMessage(data, "*");
  },
  read: function read() {
    var data = {
      command: "carrotquest.readPopup",
      "id": "{{ sending_id }}",
      "cqpopup_name": cqpopup_name
    };
    top.postMessage(data, "*");
    carrotquest.track(cqpopup_name + ' - Прочитал попап');
  },
  close: function close() {
    var data = {
      command: "carrotquest.closePopup",
      "id": "{{ sending_id }}"
    };
    top.postMessage(data, "*");
    carrotquest.track(cqpopup_name + ' - Закрыл попап');
  },
  resizeFrame: function resizeFrame(maxWidth, height) {
    var data = {
      command: 'carrotquest.resizeFrame',
      'id': '{{ sending_id }}',
      'maxWidth': maxWidth,
      'height': height
    };
    top.postMessage(data, '*');
  }
};
var isMob = false;
var currentForm = "#form-2";
var SIZE = {
  "#form-2": {
    width: "490px",
    height: "470px"
  }
};
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    var parentW = window.parent && window.parent.innerWidth ? window.parent.innerWidth : screen.width;
    isMob = parentW < 768;
    if (isMob) {
      document.body.classList.add('mob');
      document.querySelector('.promocode').classList.add('mob');
    }
    initTimer();
    minimizePopup();
    carrotquest.read();
    carrotquest.animation();
    carrotquest.track(cqpopup_name + ' - запуск таймера');
  }
});
document.addEventListener("click", function (e) {
  var btnMinimize = e.target.closest(".cqp__minimize");
  if (btnMinimize) {
    minimizePopup();
    return;
  }
  var btnClose = e.target.closest(".cqp__close:not(.cqp__minimize)");
  if (btnClose) {
    carrotquest.close();
  }
});
function resizeToForm() {
  setTimeout(function () {
    if (isMob) {
      var vh = window.parent && window.parent.innerHeight ? window.parent.innerHeight : screen.height;
      carrotquest.resizeFrame("100%", vh + "px");
    } else {
      var size = SIZE[currentForm];
      carrotquest.resizeFrame(size.width, size.height);
    }
  }, 100);
}
function wrapperExpandPopup(e) {
  if (!e.target.closest(".cqp__close")) {
    expandPopup();
  }
}
function minimizePopup() {
  setTimeout(function () {
    if (isMob) {
      carrotquest.resizeFrame("220px", "90px");
    } else {
      carrotquest.resizeFrame("340px", "170px");
    }
  }, 100);
  if (isMob) {
    document.body.classList.add('minimized');
    document.querySelector('.wrapper__body').classList.remove('opened');
  }
  document.querySelector("#form-2").classList.add("hidden");
  document.querySelector(".cqp__minimize").classList.add("hidden");
  document.querySelector(".cqp__close:not(.cqp__minimize)").classList.remove("hidden");
  document.querySelector(".cqp__body").classList.add("cqp__body-minimize");
  document.querySelector(".timer").classList.add("minimize-timer");
  document.querySelector(".cqp__body").addEventListener("click", wrapperExpandPopup);
}
function expandPopup() {
  document.querySelector(".cqp__body").removeEventListener("click", wrapperExpandPopup);
  document.querySelector(".cqp__body").classList.remove("cqp__body-minimize");
  document.querySelector(".timer").classList.remove("minimize-timer");
  document.querySelector(".cqp__minimize").classList.remove("hidden");
  document.querySelector(".cqp__close:not(.cqp__minimize)").classList.add("hidden");
  document.querySelector(currentForm).classList.remove("hidden");
  if (isMob) {
    document.body.classList.remove('minimized');
    document.querySelector('.wrapper__body').classList.add('opened');
  }
  resizeToForm();
}
(function copyText() {
  var clipboard = new ClipboardJS(".promocode");
  function showCopySuccess() {
    carrotquest.track(cqpopup_name + " - Скопировал код");
    carrotquest.identify([{
      op: 'update_or_create',
      key: 'источник CQ',
      value: cqpopup_name
    }, {
      op: 'update_or_create',
      key: 'промокод CQ',
      value: document.querySelector('.promocode').textContent.trim()
    }]);
    document.querySelector(".success_copy").classList.add("active");
    setTimeout(function () {
      document.querySelector(".success_copy").classList.remove("active");
    }, 2000);
  }
  clipboard.on("success", function (e) {
    showCopySuccess();
    e.clearSelection();
  });
  clipboard.on("error", function () {
    var text = document.querySelector('.promocode').textContent.trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showCopySuccess();
      }).catch(function () {
        carrotquest.track("Something went wrong");
      });
    } else {
      carrotquest.track("Something went wrong");
    }
  });
})();
function timer(deadLine) {
  var timer_minute = document.querySelector(".timer-minute");
  var timer_second = document.querySelector(".timer-second");
  function tiсk() {
    var nowDate = new Date();
    var deadlineDate = new Date(deadLine);
    var diffDate = new Date(deadlineDate - nowDate);
    var minute = diffDate.getUTCMinutes();
    var second = diffDate.getUTCSeconds();
    minute < 10 ? timer_minute.textContent = "0" + minute : timer_minute.textContent = minute;
    second < 10 ? timer_second.textContent = "0" + second : timer_second.textContent = second;
    if (diffDate <= 0) {
      clearInterval(around);
      timer_minute.textContent = "00";
      timer_second.textContent = "00";
    }
  }
  tiсk();
  var around = setInterval(tiсk, 1000);
}
;
function initTimer() {
  var timerEl = document.querySelector(".timer");
  timerEl.style.opacity = "0";
  var stored = parseInt(localStorage.getItem("cq_timer_deadline"), 10);
  var now = new Date().getTime();
  if (stored && stored > now) {
    timer(stored);
  } else {
    document.querySelector(".timer-minute").textContent = "00";
    document.querySelector(".timer-second").textContent = "00";
  }
  setTimeout(function () {
    timerEl.style.opacity = "1";
  }, 50);
}
initTimer();