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

var scratchHintText = 'Проведите пальцем или курсором по серой области';
var scratchDoneText = 'Скопируйте промокод, нажав на иконку справа';
var scratchLinkText = 'Отправить промокод в Тэда';
var scratchLinkUrl  = '#';
var tedEventText    = 'Клик по ссылке в Тэда';

var promoCode = 'РОКЕТВЖУХ-ВН20';

var isMob = top.window.innerWidth < 769;
var winImgCopied;
if (isMob) {
  winImgCopied = 'https://files.carrotquest.app/message-images/57576/57576-1778672201068-r0jejsfg.png';
} else {
  winImgCopied = 'https://files.carrotquest.app/message-images/57576/57576-1778672897933-azmpao8s.png';
}

var bgImg = 'https://files.carrotquest.app/message-images/57576/57576-1783068634971-myyx2iri.png';

var cqpopup_name = "Попап скретч",
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

  document.querySelector('.description.start').textContent = scratchHintText;
  document.querySelector('.description.end').textContent   = scratchDoneText;

  var scratchLink = document.querySelector('.link');
  scratchLink.textContent = scratchLinkText;
  scratchLink.href        = scratchLinkUrl;

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

(function() {
  var scratchContainer = document.querySelector('.scratch-container');
  var canvas           = document.querySelector('.scratch-container canvas');
  var winMessage        = document.querySelector('.win-message');
  var brushSize         = 20;

  var isDrawing = false;
  var revealed  = false;

  var ctx = canvas.getContext('2d');

  function drawCover() {
    ctx.globalCompositeOperation = 'source-over';

    var bgImage = new Image();
    bgImage.crossOrigin = 'anonymous';

    bgImage.onload = function() {
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    };

    bgImage.onerror = function() {
      console.error('Не удалось загрузить фоновое изображение');
      ctx.fillStyle = '#999';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    bgImage.src = bgImg;
  }

  function resizeCanvas() {
    canvas.width  = scratchContainer.clientWidth;
    canvas.height = scratchContainer.clientHeight;
    drawCover();
  }

  function getPosition(e) {
    var rect = canvas.getBoundingClientRect();
    var x    = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    var y    = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    return { x: x, y: y };
  }

  function erase(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fill();
  }

  function getClearedPercent() {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var cleared   = 0;
    for (var i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) cleared++;
    }
    return (cleared / (canvas.width * canvas.height)) * 100;
  }

  function startDraw(e) {
    e.preventDefault();
    isDrawing = true;
    var pos = getPosition(e);
    erase(pos.x, pos.y);
  }

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    var pos = getPosition(e);
    erase(pos.x, pos.y);

    var percent = getClearedPercent();
    if (percent > 50 && !revealed) {
      revealed = true;
      showWinElements();
      carrotquest.track(cqpopup_name + ' - Стёр карточку');
    }
  }

  function copyOnClick(element, code) {
    ['click', 'touchend'].forEach(function(eventType) {
      element.addEventListener(eventType, function(e) {
        e.preventDefault();

        var success = function() {
          document.querySelectorAll('.win-message img').forEach(function(item) {
            item.src = winImgCopied;
          });
          document.querySelector('.description.end').textContent = 'Промокод скопирован';
          carrotquest.track(cqpopup_name + ' - Скопировал промокод');
        };

        var input = document.createElement('input');
        input.value = code;
        input.style.position = 'fixed';
        input.style.top      = '0';
        input.style.opacity  = '0';
        document.body.appendChild(input);
        input.focus();
        input.setSelectionRange(0, 99999);
        try {
          if (document.execCommand('copy')) success();
        } catch (err) {
          console.log('Ошибка копирования', err);
        } finally {
          document.body.removeChild(input);
        }
      });
    });
  }

  function endDraw() {
    isDrawing = false;
  }

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', endDraw);

  canvas.addEventListener('touchstart', startDraw);
  canvas.addEventListener('touchmove', draw);
  canvas.addEventListener('touchend', endDraw);

  function showWinElements() {
    winMessage.classList.add('show');
    scratchContainer.classList.add('win');
    document.querySelector('.description.start').classList.add('hidden');
    document.querySelector('.description.end').classList.remove('hidden');
    document.querySelector('.cq-popup__scratch-link-wrap').classList.remove('hidden');

    var button = document.querySelector('.scratch-container.win');
    setTimeout(function() {
      copyOnClick(button, promoCode);
    }, 300);
  }

  resizeCanvas();
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

document.querySelector(".link").addEventListener("click", function() {
  carrotquest.clicked();
  carrotquest.track(cqpopup_name + ' - ' + tedEventText);
});
