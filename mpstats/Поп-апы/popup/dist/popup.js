"use strict";

var slides = ['https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png', 'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png', 'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png', 'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png', 'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png'];
var adLabel = 'Реклама';
var headline = 'Заголовок не более строки';
var paragraph = 'Мы обновили работу с фразами, добавили группировку по пресетам и статистику фраз по дням. Теперь ты можешь добавить в отслеживание фразы прямо из ключевых';
var ctaText = 'Кнопка';
var phoneLabel = 'Телефон';
var confidentialityText = 'Оставляя заявку, соглашаюсь с ';
var confidentialityLinkText = 'условиями обработки персональных данных';
var confidentialityLinkUrl = '#';
var thanksHeadline = 'Ваши контакты переданы';
var thanksParagraph = 'Мы обновили работу с фразами, добавили группировку по пресетам и статистику фраз по дням. Теперь ты можешь добавить в отслеживание фразы прямо из ключевых';
var thanksCtaText = 'Кнопка';
var thanksLinkUrl = '#';
var cqpopup_name = "Попап со сбором телефона без маркировки",
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
function renderSlide(imageUrl) {
  var el = document.createElement('div');
  el.className = 'cq-popup__slide';
  el.innerHTML = '<img class="cq-popup__slide-img" src="' + imageUrl + '" alt="">';
  return el;
}
function render() {
  var track = document.querySelector('.cq-popup__cover-track');
  var slider = document.querySelector('.cq-popup__slider');
  slides.forEach(function (slide, i) {
    track.appendChild(renderSlide(slide));
    var dot = document.createElement('span');
    dot.className = 'cq-dot' + (i === 0 ? ' cq-dot--active' : '');
    slider.appendChild(dot);
  });
  var formView = document.querySelector('.cq-popup__view--form');
  formView.querySelector('.cq-popup__ad-label').textContent = adLabel;
  formView.querySelector('.cq-popup__headline').textContent = headline;
  formView.querySelector('.cq-popup__paragraph').textContent = paragraph;
  formView.querySelector('.cq-popup__field-label').textContent = phoneLabel;
  formView.querySelector('.cq-popup__confidentiality-text').textContent = confidentialityText;
  var confidentialityLink = formView.querySelector('.cq-popup__confidentiality-link');
  confidentialityLink.textContent = confidentialityLinkText;
  confidentialityLink.href = confidentialityLinkUrl;
  formView.querySelector('.cq-popup__cta--form').textContent = ctaText;
  var thanksView = document.querySelector('.cq-popup__view--thanks');
  thanksView.querySelector('.cq-popup__headline').textContent = thanksHeadline;
  thanksView.querySelector('.cq-popup__paragraph').textContent = thanksParagraph;
  var thanksCta = thanksView.querySelector('.cq-popup__cta--thanks');
  thanksCta.textContent = thanksCtaText;
  thanksCta.href = thanksLinkUrl;
}
render();
(function () {
  var track = document.querySelector('.cq-popup__cover-track');
  var slideEls = document.querySelectorAll('.cq-popup__slide');
  var dots = document.querySelectorAll('.cq-dot');
  var current = 0;
  var timer;
  function goTo(index) {
    dots[current].classList.remove('cq-dot--active');
    current = (index + slideEls.length) % slideEls.length;
    track.style.transform = 'translateX(-' + current * slideEls[0].offsetWidth + 'px)';
    dots[current].classList.add('cq-dot--active');
  }
  function next() {
    goTo(current + 1);
  }
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      clearInterval(timer);
      goTo(i);
      timer = setInterval(next, 3000);
    });
  });
  timer = setInterval(next, 3000);
})();
(function () {
  var phoneInput = document.getElementById('cq-popup-phone');
  if (!phoneInput || !window.intlTelInput) return;
  var iti = window.intlTelInput(phoneInput, {
    initialCountry: 'ru',
    preferredCountries: ['ru'],
    autoPlaceholder: 'aggressive',
    formatOnDisplay: true,
    utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.14/build/js/utils.js'
  });
  var ctaBtn = document.querySelector('.cq-popup__cta--form');
  ctaBtn.addEventListener('click', function () {
    if (!phoneInput.value.trim() || !iti.isValidNumber()) {
      phoneInput.classList.add('cq-popup__field-input--error');
      return;
    }
    phoneInput.classList.remove('cq-popup__field-input--error');
    carrotquest.identify({
      '$phone': iti.getNumber()
    });
    carrotquest.replied();
    document.querySelector('.cq-popup__view--form').classList.add('hidden');
    document.querySelector('.cq-popup__view--thanks').classList.remove('hidden');
  });
  phoneInput.addEventListener('input', function () {
    phoneInput.classList.remove('cq-popup__field-input--error');
  });
})();
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {
  item.addEventListener("click", carrotquest.close);
});
document.querySelector(".cq-popup__cta--thanks").addEventListener("click", function () {
  carrotquest.clicked();
  carrotquest.track(cqpopup_name + ' - Клик по кнопке в отбивке');
});