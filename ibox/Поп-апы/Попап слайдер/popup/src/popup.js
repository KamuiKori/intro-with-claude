const cqpopup_name = "Попап слайдер",
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
var curSlide = 0;
function validateEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

var items = [
    {
        "img": "https://files.carrotquest.app/message-images/57355/57355-1717481329436-kd4cpb3n.png",
        "name": "Сет десертов <span>Elegance</span>",
        "price": "5 290₽",
        "link": "#"
    },
    {
        "img": "https://files.carrotquest.app/message-images/57355/57355-1717481453695-4uiperdt.png",
        "name": "Теплые закуски <br class='mob'><span>с радужной форелью</span>",
        "price": "8 650₽",
        "link": "#"
    },
    {
        "img": "https://files.carrotquest.app/message-images/57355/57355-1717481468137-k6k1mxag.png",
        "name": "Сет канапе <span>Meaty Exclusive</span>",
        "price": "5 690₽",
        "link": "#"
    },
]
document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
        carrotquest.read();
        carrotquest.animation();
        initSlider(0);
    }
});

function initSlider(num) {
    var item = items[num]
    document.querySelector('.item_img').src = item.img
    document.querySelector('.item_name').innerHTML = item.name
    document.querySelector('.item_price').textContent = item.price
    document.querySelector('.item_link').href = item.link
}

document.addEventListener('click', function (e) {
    if (e.target.closest('.next')) {
        if(curSlide === 0){
            document.querySelector('.prev').classList.remove('hidden')
        }
        curSlide += 1;
        if(curSlide === items.length -1){
            document.querySelector('.next').classList.add('hidden')
        }
        initSlider(curSlide)
    }
    if(e.target.closest('.prev')){
        curSlide -= 1;
        initSlider(curSlide)
        if(curSlide === 0){
            document.querySelector('.prev').classList.add('hidden')
            document.querySelector('.next').classList.remove('hidden')
        }
    }
    if(e.target.closest('.item_link')){
        carrotquest.clicked();
    }
})
document.addEventListener("submit", function (e) {
    var email = document.querySelector('input.email').value;
    e.preventDefault();
    if (email) {
        trackData("email");
        hidden_visible('.first-form', '.second-form')
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