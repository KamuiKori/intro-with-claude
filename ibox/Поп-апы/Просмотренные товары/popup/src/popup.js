const cqpopup_name = "Просмотренные товары",
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
        replaceSalePrice();
        carrotquest.animation();
    }
});

function replaceSalePrice() {
    document.querySelectorAll(".product-price span").forEach(function (item) {
        if (item.textContent === ' ₽') {
            item.parentElement.querySelector(".product-price p").style.paddingLeft = "0px";
            item.remove();
        }
    })
}

document.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.querySelector(".email").value;
    if (email) {
        trackData("email");
        carrotquest.close();
    }
});
document.addEventListener('click',function (e){
    if(e.target.closest('.link_out')){
        carrotquest.track(cqpopup_name + ' - Перешел в каталог');
    }
    if(e.target.closest('.product-wrapper')){
        carrotquest.track(cqpopup_name + ' - Перешел на товар')
    }
})

document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {
    item.addEventListener("click", carrotquest.close);
});


function trackData(data) {
    carrotquest.identify({["$" + data]: document.querySelector(".cqp__input[name=" + data + "]").value});
    carrotquest.replied();
}