"use strict";

var cqpopup_name = "Попап Скидка при уходе",
  carrotquest = {
    track: function track(eventName, params) {
      parent.window.carrotquest.track(eventName, params);
    },
    identify: function identify(props) {
      parent.window.carrotquest.identify(props);
    },
    trackMessageInteraction: function trackMessageInteraction(sendingId, type) {
      parent.window.carrotquest.trackMessageInteraction(sendingId, type);
    },
    animation: function animation() {
      var data = {
        command: "carrotquest.animationPopup",
        "id": "{{ sending_id }}",
        "cqpopup_name": cqpopup_name
      };
      top.postMessage(data, "*");
    },
    close: function close() {
      var data = {
        command: "carrotquest.closePopup",
        "id": "{{ sending_id }}"
      };
      top.postMessage(data, "*");
    },
    read: function read() {
      this.trackMessageInteraction("{{ sending_id }}", "read");
      this.track('Прочитал попап');
      this.track("Коммуникации: Прочитано сообщение - " + cqpopup_name);
    }
  };
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});
document.querySelectorAll(".discount-popup__close, .cq-popup__bg").forEach(function (item) {
  item.addEventListener("click", carrotquest.close);
});
var PROMO_CODE = 'EXIT10';
var copyBtn = document.querySelector('[data-discount-copy]');
var continueBtn = document.querySelector('[data-discount-continue]');
var copiedMsg = document.querySelector('[data-discount-copied]');
copyBtn.addEventListener('click', function () {
  var input = document.createElement('input');
  input.value = PROMO_CODE;
  document.body.appendChild(input);
  input.select();
  try {
    if (document.execCommand('copy')) {
      carrotquest.track('Скопировал промокод');
      copiedMsg.classList.add('is-active');
      setTimeout(function () {
        copiedMsg.classList.remove('is-active');
      }, 2000);
    }
  } catch (err) {
    console.log('Ошибка копирования');
  } finally {
    document.body.removeChild(input);
  }
});
continueBtn.addEventListener('click', function () {
  carrotquest.track('Продолжил покупки');
  carrotquest.close();
});