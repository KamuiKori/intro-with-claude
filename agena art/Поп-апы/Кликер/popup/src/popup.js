const cqpopup_name = "Кликер",
    carrotquest = {
        track: function (eventName, params) {
            parent.window.carrotquest.track(eventName, params);
        },
        identify: function (props) {
            parent.window.carrotquest.identify(props);
        },
        trackMessageInteraction: function (sendingId, type) {
            parent.window.carrotquest.trackMessageInteraction(sendingId, type);
        },
        animation: function () {
            var data = {command: "carrotquest.animationPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name};
            top.postMessage(data, "*");
        },
        close: function () {
            var data = {command: "carrotquest.closePopup", "id": "{{ sending_id }}"};
            top.postMessage(data, "*");
        },
        replied: function () {
            this.trackMessageInteraction("{{ sending_id }}", "replied");
            this.track('Ответил в попап');
            this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);
        },
        clicked: function () {
            this.trackMessageInteraction("{{ sending_id }}", "clicked");
            this.track('Перешел по ссылке в попапе');
            this.track("Коммуникации: Перешел по ссылке в сообщении - " + cqpopup_name);
        },
        read: function () {
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
var clicks = 0;
var prize = "";
document.addEventListener('click', function (e) {
    if (e.target.closest('.clicker_target:not(.start_bouncing)')) {
        setProgressBar(50);
        document.querySelector('.clicker_target').classList.add('start_bouncing');
        setTimeout(function () {
            document.querySelector('.clicker_target').classList.remove('start_bouncing');
        }, 200);
        eventsOnClick();
    }
    if (e.target.closest('.level.active')) {
        prize = e.target.closest('.level.active').querySelector('.level_prize span').textContent.trim();
        document.querySelector('#email .cq-popup__text-h1 span').textContent = prize;
        carrotquest.track(cqpopup_name + ' - Выбрал приз: ' + prize);
        carrotquest.identify([{op: "update_or_create", key: cqpopup_name + ' - Приз', value: prize}]);
        hidden_visible('.cq-popup__body', "#email");
    }
});

function eventsOnClick() {
    switch (clicks) {
        case 5:
            document.querySelector('.clicker_img').src = "https://files.carrotquest.app/message-images/48967/48967-1703835702694-5tizh8bb.png";
            carrotquest.track(cqpopup_name + ' - Кликнул 5 раз');
            break;
        case 10:
            document.querySelector('.clicker_img').src = "https://files.carrotquest.app/message-images/48967/48967-1703835715604-a05t4hqf.png";
            document.querySelector('#level-one').classList.add('active');
            carrotquest.track(cqpopup_name + ' - Кликнул 10 раз');
            break;
        case 17:
            document.querySelector('.clicker_img').src = "https://files.carrotquest.app/message-images/48967/48967-1703835725704-9xyskep7.png";
            carrotquest.track(cqpopup_name + ' - Кликнул 17 раз');
            break;
        case 25:
            document.querySelector('.clicker_img').src = "https://files.carrotquest.app/message-images/48967/48967-1703835736279-ncxxm5mh.png";
            document.querySelector('#level-two').classList.add('active');
            carrotquest.track(cqpopup_name + ' - Кликнул 25 раз');
            break;
        case 40:
            document.querySelector('.clicker_img').src = "https://files.carrotquest.app/message-images/48967/48967-1703835749415-kf9jfwec.png";
            carrotquest.track(cqpopup_name + ' - Кликнул 40 раз');
        case 50:
            document.querySelector('.clicker_img').src = "https://files.carrotquest.app/message-images/48967/48967-1703835761867-77irlmlz.png"
            document.querySelector('#level-three').classList.add('active');
            carrotquest.track(cqpopup_name + ' - Кликнул 50 раз');
    }
}

var isClicked = false;
var progressBarWidth, progressActiveWidth, diff, calcWidth, activeProgressCalc;

function setProgressBar(clicksCount) {
    if (clicks <= clicksCount - 1) {
        progressActiveWidth = Number(window.getComputedStyle(document.querySelector('.progress_bar_active')).width.replace('px', ''));
        if (!isClicked) {
            progressBarWidth = Number(window.getComputedStyle(document.querySelector('.progress_bar')).maxWidth.replace("px", ""));
            diff = Number(progressBarWidth - progressActiveWidth);
            calcWidth = diff / clicksCount;
            isClicked = true;
        }
        activeProgressCalc = progressActiveWidth + calcWidth;
        clicks++;
        document.querySelector('.progress_bar_active').style['width'] = activeProgressCalc + "px";
        document.querySelector('.counter').textContent = clicks + " 🐱";
        document.querySelector('.clicker_img').style = ""
    }
}

document.addEventListener("submit", function (e) {
    var email = document.querySelector('input.email').value;
    e.preventDefault();
    if (email) {
        trackData("email");
        hidden_visible('.first', '#thank')
        carrotquest.replied();
        setTimeout(carrotquest.close, 5000)
    }
});

document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {
    item.addEventListener("click", carrotquest.close);
});


function trackData(data) {
    carrotquest.identify({["$" + data]: document.querySelector(".cq_popup-input[name=" + data + "]").value});
}

function hidden_visible(elem1, elem2) {
    document.querySelector(elem1).classList.add("hidden");
    document.querySelector(elem2).classList.remove("hidden");
}