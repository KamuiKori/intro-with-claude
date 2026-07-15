var slides = ['https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png', 'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png', 'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png', 'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png', 'https://files.carrotquest.app/message-images/57576/57576-1783065565894-5bwm30vv.png'];

var adLabel = 'Реклама';
var headline = 'Заголовок не более строки';
var paragraph = 'Мы обновили работу с фразами, добавили группировку по пресетам и статистику фраз по дням. Теперь ты можешь добавить в отслеживание фразы прямо из ключевых';
var ctaText = 'Кнопка';
var linkUrl = '#';

var timerEndDate         = '2026-08-01T00:00:00';
var timerDurationMinutes = null;

var scratchHintText = 'Проведите пальцем или курсором по серой области';
var scratchDoneText = 'Скопируйте промокод, нажав на иконку справа';
var scratchLinkText = 'Отправить промокод в Telegram';
var scratchLinkUrl = '#';
var tedEventText = 'Клик по ссылке в Telegram';

var tgBtnText = 'Промокод в TG ↗';
var nextBtnText = 'Вперед →';
var backBtnText = '← Назад';

var promoCode = 'РОКЕТВЖУХ-ВН20';

var isMob = top.window.innerWidth < 769;

var winImgCopiedDesktop = 'https://files.carrotquest.app/message-images/57576/57576-1784015409534-28lfezpd.png';
var winImgCopiedMobile  = 'https://files.carrotquest.app/message-images/57576/57576-1784016545338-j0mwmntq.png';
var winImgCopied = isMob ? winImgCopiedMobile : winImgCopiedDesktop;

var bgImgDesktop = 'https://files.carrotquest.app/message-images/57576/57576-1784015628747-xjv8ljsw.png';
var bgImgMobile  = 'https://files.carrotquest.app/message-images/57576/57576-1784016502593-psz5i2dq.png';
var bgImg = isMob ? bgImgMobile : bgImgDesktop;

var bannerBgDesktop = 'https://files.carrotquest.app/message-images/57576/57576-1781856546265-g57t26y9.png';
var bannerBgMobile = 'https://files.carrotquest.app/message-images/57576/57576-1783498232833-1twz7nmg.png';

var cqpopup_name = "Попап скретч c таймером", carrotquest = {
    track: function (eventName, params) {
        parent.window.carrotquest.track(eventName, params);
    }, identify: function (props) {
        parent.window.carrotquest.identify(props);
    }, trackMessageInteraction: function (sendingId, type) {
        parent.window.carrotquest.trackMessageInteraction(sendingId, type);
    }, animation: function () {
        var data = {command: "carrotquest.animationPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name};
        top.postMessage(data, "*");
    }, close: function () {
        var data = {command: "carrotquest.closePopup", "id": "{{ sending_id }}"};
        top.postMessage(data, "*");
    }, replied: function () {
        this.trackMessageInteraction("{{ sending_id }}", "replied");
        this.track('Ответил в попап');
        this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);
    }, clicked: function () {
        this.trackMessageInteraction("{{ sending_id }}", "clicked");
        this.track('Перешел по ссылке в попапе');
        this.track("Коммуникации: Перешел по ссылке в сообщении - " + cqpopup_name);
    }, read: function () {
        this.trackMessageInteraction("{{ sending_id }}", "read");
        this.track('Прочитал попап');
        this.track("Коммуникации: Прочитано сообщение - " + cqpopup_name);
    }
};

function setTgLink(link) {
    var tgLink = link;
    try {
        tgLink += top.carrotquest.data.user.user_signature.telegram ? ('?start=' + top.carrotquest.data.user.user_signature.telegram) : '';
    } catch (err) {
    }
    document.querySelectorAll('.link, .cq-popup__tg-btn').forEach(function (el) {
        el.href = tgLink;
    });
}

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

    document.querySelector('.cq-popup__ad-label').textContent = adLabel;
    document.querySelector('.cq-popup__headline').textContent = headline;
    document.querySelector('.cq-popup__paragraph').textContent = paragraph;

    document.querySelector('.description.start').textContent = scratchHintText;
    document.querySelector('.description.end').textContent = scratchDoneText;

    document.querySelector('.link').textContent = scratchLinkText;
    document.querySelector('.cq-popup__tg-btn').textContent = tgBtnText;
    setTgLink(scratchLinkUrl);

    document.querySelector('.cq-popup__next-btn').textContent = nextBtnText;
    document.querySelector('.cq-popup__back-btn').textContent = backBtnText;

    var cta = document.querySelector('.cq-popup__cta');
    cta.textContent = ctaText;
    cta.href = linkUrl;

}

function setBannerBg() {
    var bannerBg = document.querySelector('.cq-popup__banner-bg');
    bannerBg.style.backgroundImage = 'url(' + (isMob ? bannerBgMobile : bannerBgDesktop) + ')';
}

render();
setBannerBg();

(function () {
    var track = document.querySelector('.cq-popup__cover-track');
    var slideEls = document.querySelectorAll('.cq-popup__slide');
    var dots = document.querySelectorAll('.cq-dot');
    var current = 0;
    var timer;

    function goTo(index) {
        dots[current].classList.remove('cq-dot--active');
        current = (index + slideEls.length) % slideEls.length;
        track.style.transform = 'translateX(-' + (current * slideEls[0].offsetWidth) + 'px)';
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

function pluralizeDays(n) {
    var mod10 = n % 10;
    var mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return 'день';
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'дня';
    return 'дней';
}

function pad2(n) {
    return n < 10 ? '0' + n : String(n);
}

(function () {
    var timerWrap = document.querySelector('.cq-popup__timer-wrap');
    if (!timerWrap) return;

    var endTime = timerDurationMinutes
        ? Date.now() + timerDurationMinutes * 60 * 1000
        : new Date(timerEndDate).getTime();

    if (!endTime || isNaN(endTime)) {
        timerWrap.classList.add('hidden');
        return;
    }

    var daysEl = document.querySelector('.cq-popup__timer-value--days');
    var hoursEl = document.querySelector('.cq-popup__timer-value--hours');
    var minutesEl = document.querySelector('.cq-popup__timer-value--minutes');
    var secondsEl = document.querySelector('.cq-popup__timer-value--seconds');
    var countdownInterval;

    if (timerDurationMinutes) {
        var daysItem  = daysEl.closest('.cq-popup__timer-item');
        var hoursItem = hoursEl.closest('.cq-popup__timer-item');

        daysItem.classList.add('hidden');
        hoursItem.classList.add('hidden');
        daysItem.nextElementSibling.classList.add('hidden');
        hoursItem.nextElementSibling.classList.add('hidden');
    }

    function tick() {
        var diff = endTime - Date.now();

        if (diff <= 0) {
            clearInterval(countdownInterval);
            timerWrap.classList.add('hidden');
            return;
        }

        var totalSeconds = Math.floor(diff / 1000);
        var days = Math.floor(totalSeconds / 86400);
        var hours = Math.floor((totalSeconds % 86400) / 3600);
        var minutes = Math.floor((totalSeconds % 3600) / 60);
        var seconds = totalSeconds % 60;

        daysEl.textContent = days + ' ' + pluralizeDays(days);
        hoursEl.textContent = pad2(hours);
        minutesEl.textContent = pad2(minutes);
        secondsEl.textContent = pad2(seconds);
    }

    tick();
    countdownInterval = setInterval(tick, 1000);
})();

(function () {
    var scratchContainer = document.querySelector('.scratch-container');
    var canvas = document.querySelector('.scratch-container canvas');
    var winMessage = document.querySelector('.win-message');
    var brushSize = 20;

    var isDrawing = false;
    var revealed = false;

    var ctx = canvas.getContext('2d');

    function drawCover() {
        ctx.globalCompositeOperation = 'source-over';

        var bgImage = new Image();
        bgImage.crossOrigin = 'anonymous';

        bgImage.onload = function () {
            ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
        };

        bgImage.onerror = function () {
            console.error('Не удалось загрузить фоновое изображение');
            ctx.fillStyle = '#999';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        bgImage.src = bgImg;
    }

    function resizeCanvas() {
        canvas.width = scratchContainer.clientWidth;
        canvas.height = scratchContainer.clientHeight;
        drawCover();
    }

    function getPosition(e) {
        var rect = canvas.getBoundingClientRect();
        var x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
        var y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
        return {x: x, y: y};
    }

    function erase(x, y) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, brushSize, 0, Math.PI * 2);
        ctx.fill();
    }

    function getClearedPercent() {
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var cleared = 0;
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
            carrotquest.track('Коммуникации: Получил промокод - ' + cqpopup_name);
        }
    }

    function copyOnClick(element, code) {
        ['click', 'touchend'].forEach(function (eventType) {
            element.addEventListener(eventType, function (e) {
                e.preventDefault();

                var success = function () {
                    document.querySelectorAll('.win-message img').forEach(function (item) {
                        item.src = winImgCopied;
                    });
                    document.querySelector('.description.end').textContent = 'Промокод скопирован';
                    carrotquest.track('Коммуникации: Скопировал промокод - ' + cqpopup_name);
                };

                var input = document.createElement('input');
                input.value = code;
                input.style.position = 'fixed';
                input.style.top = '0';
                input.style.opacity = '0';
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

    document.addEventListener('cq-popup:step-2', resizeCanvas);

    function showWinElements() {
        winMessage.classList.add('show');
        scratchContainer.classList.add('win');
        document.body.classList.add('cq-popup__is-revealed');
        document.querySelector('.description.start').classList.add('hidden');
        document.querySelector('.description.end').classList.remove('hidden');
        document.querySelector('.cq-popup__scratch-link-wrap').classList.remove('hidden');
        document.querySelector('.cq-popup__tg-btn').classList.remove('hidden');

        var button = document.querySelector('.scratch-container.win');
        setTimeout(function () {
            copyOnClick(button, promoCode);
        }, 300);
    }

    resizeCanvas();
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

document.querySelector(".cq-popup__cta").addEventListener("click", function () {
    carrotquest.clicked();
});

document.querySelector(".link").addEventListener("click", function () {
    carrotquest.clicked();
    carrotquest.track(cqpopup_name + ' - ' + tedEventText);
});

document.querySelector(".cq-popup__tg-btn").addEventListener("click", function () {
    carrotquest.clicked();
    carrotquest.track(cqpopup_name + ' - ' + tedEventText);
});

document.querySelector(".cq-popup__next-btn").addEventListener("click", function () {
    document.body.classList.remove("cq-popup__is-step-1");
    document.body.classList.add("cq-popup__is-step-2");
    document.dispatchEvent(new Event('cq-popup:step-2'));
});

document.querySelector(".cq-popup__back-btn").addEventListener("click", function () {
    document.body.classList.remove("cq-popup__is-step-2");
    document.body.classList.add("cq-popup__is-step-1");
});

(function () {
    var adWrap = document.querySelector(".cq-popup__ad-wrap");

    adWrap.addEventListener("click", function (event) {
        event.stopPropagation();
        adWrap.classList.toggle("cq-popup__ad-wrap--active");
    });

    document.addEventListener("click", function () {
        adWrap.classList.remove("cq-popup__ad-wrap--active");
    });
})();
