var cqpopup_name = '10.1 Поп-ап таймер PC-2';
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

document.addEventListener("readystatechange", function() {
    if (document.readyState === "complete") {
        minimizePopup();
        carrotquest.read();
        carrotquest.animation();
    }
});

document.addEventListener("click", function(e) {
    var btnClose = e.target.closest(".cqp__close:not(.cqp__minimize)");
    if (btnClose) {
        carrotquest.close();
    }
    var btnCopy = e.target.closest(".copy");
    if (btnCopy) {
        copyText();
    }
    var btnMinimize = e.target.closest(".cqp__minimize") ||
        e.target.closest(".cqp__close-minimize");
    if (btnMinimize) {
        minimizePopup();
    }
});

function wrapperExpandPopup(e) {
    if (!e.target.closest(".cqp__close")) {
        expandPopup();
    }
}

function minimizePopup() {
    setTimeout(function() {
        carrotquest.resizeFrame("370px", "203px");
    }, 100);
        document.querySelector("#form-2 .cqp__close:not(.cqp__minimize)").classList.remove("hidden");
        document.querySelector("#form-2 .cqp__text-h1").classList.add("hidden");
        document.querySelector(".cqp__minimize").classList.add("hidden");
        document.querySelector(".timer").classList.add("minimize-timer");
        document.querySelector('.timer').classList.add('flex_row');
        document.querySelector(".cqp__body").classList.add("cqp__body-minimize");
        document.querySelector("#form-2").classList.add("minimize-form");
        document.querySelector("#form-2").classList.remove("wrapper-col");
        document.querySelector("#form-2 .promocode__wrapper").classList.add("hidden");
        document.querySelector("#form-2 .cqp__form_content").classList.add("hidden");
        document.querySelector(".check").classList.remove("hidden");
        document.querySelector("#form-2 .minimize_text").classList.remove("hidden");
        document.querySelector(".cqp__body").addEventListener("click", wrapperExpandPopup);
}
function expandPopup() {
    setTimeout(function() {
        document.querySelector("#form-2 .promocode__wrapper").classList.remove("hidden");
        document.querySelector("#form-2 .cqp__form_content").classList.remove("hidden");
    }, 100);
    carrotquest.resizeFrame("420px", "350px");
    document.querySelector("#form-2 .cqp__close:not(.cqp__minimize)").classList.add("hidden");
    document.querySelector("#form-2 .cqp__text-h1").classList.remove("hidden");
    document.querySelector(".cqp__minimize").classList.remove("hidden");
    document.querySelector(".timer").classList.remove("minimize-timer");
    document.querySelector(".cqp__body").classList.remove("cqp__body-minimize");
    document.querySelector("#form-2").classList.remove("minimize-form");
    document.querySelector("#form-2").classList.add("wrapper-col");
    document.querySelector(".check").classList.add("hidden");
    document.querySelector("#form-2 .minimize_text").classList.add("hidden");
    document.querySelector(".cqp__body").removeEventListener("click", wrapperExpandPopup);
}


(function copyText() {
    var clipboard = new ClipboardJS(".promocode");
    clipboard.on("success", function(e) {
        carrotquest.track("Скопировал код - " + cqpopup_name);
        document.querySelector(".success_copy").classList.add("active");
        setTimeout(function() {
            document.querySelector(".success_copy").classList.remove("active");
        }, 2000);
        e.clearSelection();
    });
    clipboard.on("error", function(e) {
        carrotquest.track("Something went wrong");
    });
})();
function timer(deadLine) {
    var timer_minute = document.querySelector(".timer-minute");
    var timer_second = document.querySelector(".timer-second");
    function tiсk() {
        var nowDate = new Date();
        var deadlineDate = new Date(deadLine);
        var diffDate = new Date(deadlineDate - nowDate);
        var minute = diffDate.getUTCMinutes();
        var second = diffDate.getUTCSeconds();
        minute < 10 ? timer_minute.textContent = "0"+minute : timer_minute.textContent = minute;
        second < 10 ? timer_second.textContent = "0"+second : timer_second.textContent = second;
        if (diffDate <= 0) {
            clearInterval(around);
            timer_minute.textContent = "00";
            timer_second.textContent = "00";
        }
    }
    var around = setInterval(tiсk, 1000);
};
function initTimer(deadLine) {
    if (typeof localStorage.deadLine == "string") {
        deadLine = +deadLine;
    }
    deadLine += 2000;
    localStorage.setItem("deadLine", deadLine);
    timer(deadLine);
};
initTimer(localStorage.deadLine);