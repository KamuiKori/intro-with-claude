var slides = [
  {
    badge: 'Бейдж',
    title: 'Заголовок в две строки делать',
    text: 'Дополнительный абзац размещается под заголовком и не превышает трех строк'
  },
  {
    badge: 'Бейдж',
    title: 'Заголовок в две строки делать',
    text: 'Дополнительный абзац размещается под заголовком и не превышает трех строк'
  },
  {
    badge: 'Бейдж',
    title: 'Заголовок в две строки делать',
    text: 'Дополнительный абзац размещается под заголовком и не превышает трех строк'
  },
  {
    badge: 'Бейдж',
    title: 'Заголовок в две строки делать',
    text: 'Дополнительный абзац размещается под заголовком и не превышает трех строк'
  },
  {
    badge: 'Бейдж',
    title: 'Заголовок в две строки делать',
    text: 'Дополнительный абзац размещается под заголовком и не превышает трех строк'
  }
];

var adLabel   = 'Реклама';
var headline  = 'Заголовок не более строки';
var paragraph = 'Мы обновили работу с фразами, добавили группировку по пресетам и статистику фраз по дням. Теперь ты можешь добавить в отслеживание фразы прямо из ключевых';
var ctaText   = 'Кнопка';
var linkUrl   = '#';

var cqpopup_name = "Информационный попап mpstats",
    carrotquest = {
      track: function(eventName, params) {
        parent.window.carrotquest.track(eventName, params);
      },
      identify: function(props) {
        parent.window.carrotquest.identify(props);
      },
      trackMessageInteraction: function(sendingId, type) {
        parent.window.carrotquest.trackMessageInteraction(sendingId, type);
      },
      animation: function() {
        var data = { command: "carrotquest.animationPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name};
        top.postMessage(data, "*");
      },
      close: function() {
        var data = { command: "carrotquest.closePopup", "id": "{{ sending_id }}" };
        top.postMessage(data, "*");
      },
      replied: function() {
        this.trackMessageInteraction("{{ sending_id }}", "replied");
        this.track('Ответил в попап');
        this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);
      },
      clicked: function() {
        this.trackMessageInteraction("{{ sending_id }}", "clicked");
        this.track('Перешел по ссылке в попапе');
        this.track("Коммуникации: Перешел по ссылке в сообщении - " + cqpopup_name);
      },
      read: function() {
        this.trackMessageInteraction("{{ sending_id }}", "read");
        this.track('Прочитал попап');
        this.track("Коммуникации: Прочитано сообщение - " + cqpopup_name);
      }
    };

function renderSlide(slide) {
  var el = document.createElement('div');
  el.className = 'cq-popup__slide';
  el.innerHTML =
    '<div class="cq-popup__cover-top">' +
      '<div class="cq-popup__badge-row">' +
        '<div class="cq-popup__badge">' +
          '<div class="cq-popup__badge-volume"></div>' +
          '<div class="cq-popup__badge-face"><span>' + slide.badge + '</span></div>' +
        '</div>' +
      '</div>' +
      '<p class="cq-popup__cover-title">' + slide.title + '</p>' +
    '</div>' +
    '<div class="cq-popup__cover-text"><p>' + slide.text + '</p></div>';
  return el;
}

function render() {
  var track  = document.querySelector('.cq-popup__cover-track');
  var slider = document.querySelector('.cq-popup__slider');

  slides.forEach(function(slide, i) {
    track.appendChild(renderSlide(slide));

    var dot = document.createElement('span');
    dot.className = 'cq-dot' + (i === 0 ? ' cq-dot--active' : '');
    slider.appendChild(dot);
  });

  document.querySelector('.cq-popup__ad-label').textContent = adLabel;
  document.querySelector('.cq-popup__headline').textContent  = headline;
  document.querySelector('.cq-popup__paragraph').textContent = paragraph;

  var cta = document.querySelector('.cq-popup__cta');
  cta.textContent = ctaText;
  cta.href        = linkUrl;
}

render();

(function() {
  var track    = document.querySelector('.cq-popup__cover-track');
  var slideEls = document.querySelectorAll('.cq-popup__slide');
  var dots     = document.querySelectorAll('.cq-dot');
  var current  = 0;
  var timer;

  function goTo(index) {
    dots[current].classList.remove('cq-dot--active');
    current = (index + slideEls.length) % slideEls.length;
    track.style.transform = 'translateX(-' + (current * slideEls[0].offsetWidth) + 'px)';
    dots[current].classList.add('cq-dot--active');
  }

  function next() { goTo(current + 1); }

  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() {
      clearInterval(timer);
      goTo(i);
      timer = setInterval(next, 3000);
    });
  });

  timer = setInterval(next, 3000);
})();

document.addEventListener("readystatechange", function() {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});

document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function(item) {
  item.addEventListener("click", carrotquest.close);
});

document.querySelector(".cq-popup__cta").addEventListener("click", function() {
  carrotquest.clicked();
});
