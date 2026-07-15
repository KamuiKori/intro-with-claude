var slides = [
  'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png',
  'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png',
  'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png',
  'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png',
  'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png'
];

var adLabel   = 'Реклама';
var headline  = 'Заголовок не более строки';
var paragraph = 'Мы обновили работу с фразами, добавили группировку по пресетам и статистику фраз по дням. Теперь ты можешь добавить в отслеживание фразы прямо из ключевых';
var ctaText   = 'Кнопка';
var linkUrl   = '#';

var bannerBgDesktop = 'https://files.carrotquest.app/message-images/57576/57576-1781856546265-g57t26y9.png';
var bannerBgMobile  = 'https://files.carrotquest.app/message-images/57576/57576-1783498232833-1twz7nmg.png';

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

function renderSlide(imageUrl) {
  var el = document.createElement('div');
  el.className = 'cq-popup__slide';
  el.innerHTML = '<img class="cq-popup__slide-img" src="' + imageUrl + '" alt="">';
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

function setBannerBg() {
  var isMob    = top.window.innerWidth <= 767;
  var bannerBg = document.querySelector('.cq-popup__banner-bg');
  bannerBg.style.backgroundImage = 'url(' + (isMob ? bannerBgMobile : bannerBgDesktop) + ')';
}

render();
setBannerBg();
window.addEventListener('resize', setBannerBg);

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

(function() {
  var adWrap = document.querySelector(".cq-popup__ad-wrap");

  adWrap.addEventListener("click", function(event) {
    event.stopPropagation();
    adWrap.classList.toggle("cq-popup__ad-wrap--active");
  });

  document.addEventListener("click", function() {
    adWrap.classList.remove("cq-popup__ad-wrap--active");
  });
})();
