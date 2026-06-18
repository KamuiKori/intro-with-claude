var cqpopup_name = 'Поп-ап таймер 1';
var carrotquest = {
    track: function(eventName, params) {
        parent.window.carrotquest.track(eventName, params);
    },
    identify: function(props) {
        parent.window.carrotquest.identify(props);
    },
    animation: function() {
        var data = { command: "carrotquest.animationPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name};
        top.postMessage(data, "*");
    },
    replied: function() {
        var data = { command: "carrotquest.repliedPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name};
        top.postMessage(data, "*");
    },
    clicked: function() {
        var data = { command: "carrotquest.clickedPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name};
        top.postMessage(data, "*");
    },
    read: function() {
        var data = { command: "carrotquest.readPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name};
        top.postMessage(data, "*");
        carrotquest.track(cqpopup_name + ' - Прочитал попап');
    },
    close: function() {
        var data = { command: "carrotquest.closePopup", "id": "{{ sending_id }}" };
        top.postMessage(data, "*");
        carrotquest.track(cqpopup_name + ' - Закрыл попап');
    },
    resizeFrame: function(maxWidth, height) {
        var data = { command: 'carrotquest.resizeFrame', 'id': '{{ sending_id }}', 'maxWidth': maxWidth, 'height': height};
        top.postMessage(data, '*');
    }
};

var isMob = false;

var currentForm = "#form-1";

var SIZE = {
    "#form-1": { width: "490px", height: "540px" },
    "#form-2": { width: "490px", height: "470px" }
};

document.addEventListener("readystatechange", function() {
    if (document.readyState === "complete") {
        var parentW = (window.parent && window.parent.innerWidth) ? window.parent.innerWidth : screen.width;
        isMob = parentW < 768;
        if (isMob) {
            document.body.classList.add('mob');
            document.querySelector('.cqp__text-h1').src = 'https://files.carrotquest.app/message-images/69303/69303-1781076119221-9jz0b431.png';
            var btn = document.querySelector('.cqp__button');
            btn.classList.add('mob');
            btn.style.background = 'url("https://files.carrotquest.app/message-images/69303/69303-1781076452429-dxjuvgdw.png") no-repeat center / cover';
            document.querySelector('.promocode').classList.add('mob');
        }
        resizeToForm();
        carrotquest.read();
        carrotquest.animation();
        carrotquest.track(cqpopup_name + ' - запуск таймера')
    }
});

document.addEventListener("click", function(e) {
    var btnPromo = e.target.closest(".get-promo");
    if (btnPromo) {
        showPromo();
    }
    var btnMinimize = e.target.closest(".cqp__minimize");
    if (btnMinimize) {
        if (currentForm === "#form-2") {
            minimizePopup();
        } else {
            carrotquest.close();
        }
        return;
    }
    var btnClose = e.target.closest(".cqp__close:not(.cqp__minimize)");
    if (btnClose) {
        if (document.querySelector(".cqp__body").classList.contains("cqp__body-minimize")) {
            carrotquest.close();
        } else {
            minimizePopup();
        }
    }
});

function resizeToForm() {
    setTimeout(function() {
        if (isMob) {
            var vh = (window.parent && window.parent.innerHeight) ? window.parent.innerHeight : screen.height;
            carrotquest.resizeFrame("100%", vh + "px");
        } else {
            var size = SIZE[currentForm];
            carrotquest.resizeFrame(size.width, size.height);
        }
    }, 100);
}

function showPromo() {
    currentForm = "#form-2";
    document.querySelector("#form-1").classList.add("hidden");
    document.querySelector("#form-2").classList.remove("hidden");
    initTimer();
    carrotquest.clicked();
    carrotquest.track(cqpopup_name + " - Перешел на экран с промокодом");
    resizeToForm();
}

function wrapperExpandPopup(e) {
    if (!e.target.closest(".cqp__close")) {
        expandPopup();
    }
}

function minimizePopup() {
    setTimeout(function() {
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
    document.querySelector("#form-1").classList.add("hidden");
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
        carrotquest.identify([
            {op:'update_or_create',key:'источник CQ',value:cqpopup_name},
            {op:'update_or_create',key:'промокод CQ',value:document.querySelector('.promocode').textContent.trim()},
        ]);
        document.querySelector(".success_copy").classList.add("active");
        setTimeout(function() {
            document.querySelector(".success_copy").classList.remove("active");
        }, 2000);
    }

    clipboard.on("success", function(e) {
        showCopySuccess();
        e.clearSelection();
    });
    clipboard.on("error", function() {
        var text = document.querySelector('.promocode').textContent.trim();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showCopySuccess();
            }).catch(function() {
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
    function tick() {
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
    tick();
    var around = setInterval(tick, 1000);
}

function initTimer() {
    var deadLine = new Date().getTime() + 30 * 60 * 1000;
    localStorage.setItem("cq_timer_deadline", deadLine);
    timer(deadLine);
}
