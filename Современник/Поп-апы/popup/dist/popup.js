"use strict";

var cqpopup_name = "Попап партнеры";
var carrotquest = {
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
  replied: function replied() {
    this.trackMessageInteraction("{{ sending_id }}", "replied");
    this.track('Ответил в попап');
    this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);
  },
  clicked: function clicked() {
    this.trackMessageInteraction("{{ sending_id }}", "clicked");
    this.track('Перешел по ссылке в попапе');
    this.track("Коммуникации: Перешел по ссылке в сообщении - " + cqpopup_name);
  },
  read: function read() {
    this.trackMessageInteraction("{{ sending_id }}", "read");
    this.track('Прочитал попап');
    this.track("Коммуникации: Прочитано сообщение - " + cqpopup_name);
  }
};
var desserts = {
  medovik: {
    name: 'Медовик',
    title: 'Женитьба Бальзаминова',
    desc: 'Для вас ценны традиции вкуса и не выходящая из моды русская классика «Женитьба Бальзаминова»',
    link: 'https://sovremennik.ru/plays/zhenitba-balzaminova'
  },
  tiramisu: {
    name: 'Тирамису',
    title: 'Житие FM',
    desc: 'Вы цените нежные текстуры и сбалансированный кофейно-сливочный вкус. У итальянского десерта многослойная структура',
    link: 'https://sovremennik.ru/plays/zhitie-fyodora-mihajlovicha'
  },
  cheesecake: {
    name: 'Чизкейк',
    title: 'Сашашишин',
    desc: 'Этот десерт ценят не только за нежный вкус, но и за красивую подачу',
    link: 'https://sovremennik.ru/plays/sasha-shishin'
  },
  fondan: {
    name: 'Шоколадный фондан',
    title: 'Три товарища',
    desc: 'Вам нравится контраст текстур и насыщенный вкус. Вам подходят спектакли, которые оставляют яркие впечатления',
    link: 'https://sovremennik.ru/plays/tri-tovarischa'
  }
};
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.dessert-btn');
  if (!btn) return;
  var key = btn.getAttribute('data-dessert');
  var data = desserts[key];
  if (!data) return;
  carrotquest.track('Выбрал десерт', {
    десерт: data.name
  });
  carrotquest.replied();
  document.getElementById('result-title').textContent = data.title;
  document.getElementById('result-desc').textContent = data.desc;
  document.getElementById('result-link').href = data.link;
  showStep('step-result');
});
document.addEventListener('click', function (e) {
  if (!e.target.closest('#result-link')) return;
  carrotquest.track('Нажал подробнее попап партнеры');
  carrotquest.clicked();
});
document.addEventListener('click', function (e) {
  if (e.target.closest('.card-close') || e.target.classList.contains('cq-popup__bg')) {
    carrotquest.track('Закрыл попап партнеры');
    carrotquest.close();
  }
});
function showStep(stepId) {
  document.querySelectorAll('.dessert-step').forEach(function (el) {
    el.classList.add('hidden');
  });
  document.getElementById(stepId).classList.remove('hidden');
}