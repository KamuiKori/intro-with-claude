const cqpopup_name = "Скретч-карта",
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

var isTitleHidden = false;
var isSubtitleHidden = false;
var isTedLinkHidden = false;
var isPopupButtonHidden = false;
var isDescriptionStartHidden = false;
var isDescriptionEndHidden = false;
var isBannerImgHidden = false;
var tedEventText = 'Событие при клике по Тэд';

var isMob = top.window.innerWidth < 769;
var winImgCopied,bgImg;
if(isMob){
    document.querySelector('canvas').setAttribute('width', '392px');
    document.querySelector('canvas').setAttribute('height', '100px');
    winImgCopied = 'https://files.carrotquest.app/message-images/57576/57576-1778672201068-r0jejsfg.png';
    bgImg = 'https://files.carrotquest.app/message-images/57576/57576-1778672464088-q0r8xoiy.png'
}
else{
    winImgCopied = 'https://files.carrotquest.app/message-images/57576/57576-1778672897933-azmpao8s.png';
    bgImg = 'https://files.carrotquest.app/message-images/57576/57576-1777277009901-vuvpu07y.png'
}

function hideElementsByUser(){
    if(isTitleHidden){
        document.querySelector('.title').classList.add('hidden_by_user');
    }
    if(isSubtitleHidden){
        document.querySelector('.subtitle').classList.add('hidden_by_user');
    }
    if(isTedLinkHidden){
        document.querySelector('.link').classList.add('hidden_by_user');
    }
    if(isPopupButtonHidden){
        document.querySelector('.popup_btn').classList.add('hidden_by_user');
    }
    if(isDescriptionStartHidden){
        document.querySelector('.description.start').classList.add('hidden_by_user');
    }
    if(isDescriptionEndHidden){
        document.querySelector('.description.end').classList.add('hidden_by_user');
    }
    if(isBannerImgHidden){
        document.querySelectorAll('.banner_img').forEach(function(img){
            img.classList.add('hidden_by_user');
        })
    }
}

document.addEventListener("readystatechange", function() {
    if (document.readyState === "complete") {
        carrotquest.read();
        carrotquest.animation();
        hideElementsByUser();
    }
});

document.addEventListener("click", function(e) {
    if(e.target.closest('.link')){
        carrotquest.track(cqpopup_name + ' - ' + tedEventText);
    }
    if(e.target.closest('.popup_btn')){
        carrotquest.clicked();
        carrotquest.track(cqpopup_name + ' - Клик по кнопке');
    }
});

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const winMessage = document.querySelector('.win-message');
const resetBtn = document.getElementById('resetBtn');
const brushSize = 20;

let isDrawing = false;
let revealed = false;

function drawCover() {
    ctx.globalCompositeOperation = 'source-over';

    const bgImage = new Image();
    bgImage.crossOrigin = "anonymous";

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

drawCover();

function getPosition(e) {
    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    return { x, y };
}

function erase(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fill();
}

function getClearedPercent() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] === 0) cleared++;
    }
    return (cleared / (canvas.width * canvas.height)) * 100;
}

function startDraw(e) {
    e.preventDefault();
    isDrawing = true;
    const pos = getPosition(e);
    erase(pos.x, pos.y);
}

function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPosition(e);
    erase(pos.x, pos.y);

    const percent = getClearedPercent();
    if (percent > 50 && !revealed) {
        revealed = true;
        showWinElements();
        carrotquest.track(cqpopup_name + ' - Стер карточку');
    }
}
function copyOnClick(element, promoCode) {
    ['click', 'touchend'].forEach(eventType => {
        element.addEventListener(eventType, (e) => {
            e.preventDefault();

            const success = () => {
                document.querySelectorAll('.win-message img').forEach(function (item){
                    item.src = winImgCopied
                })
                document.querySelector('.description.end').textContent = 'Промокод скопирован';
                carrotquest.track(cqpopup_name + ' - Скопировал промокод');
            };

            const input = document.createElement('input');
            input.value = promoCode;
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

function showWinElements(){
    winMessage.classList.add('show');
    document.querySelector('.scratch-container').classList.add('win');
    document.querySelector('#form').classList.remove('hidden');
    document.querySelector('.description.start').classList.add('hidden');
    document.querySelector('.description.end').classList.remove('hidden');
    document.querySelector('.link').classList.remove('hidden');
    document.querySelector('.popup_link').classList.remove('hidden');
    document.querySelectorAll('.start').forEach((el) => {
        el.classList.add('hidden');
    });
    const button = document.querySelector('.scratch-container.win');
    setTimeout(function () {
        copyOnClick(button, 'РОКЕТВЖУХ-ВН20');
    },300)
}

document.addEventListener("submit", function(e) {
  var email = document.querySelector('input.email').value;
  e.preventDefault();
  if (email) {
    trackData("email");
    hidden_visible('.first-form', '.second-form')
    carrotquest.replied();
    setTimeout(carrotquest.close , 5000)
  }
});

document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function(item) {
  item.addEventListener("click", carrotquest.close);
});


function trackData(data) {
  carrotquest.identify({["$"+data]: document.querySelector(".cq_popup-input[name="+ data +"]").value });
}
function hidden_visible(elem1, elem2) {
  document.querySelector(elem1).classList.add("hidden");
  document.querySelector(elem2).classList.remove("hidden");
}