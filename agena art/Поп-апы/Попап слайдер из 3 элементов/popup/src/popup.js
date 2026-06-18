const cqpopup_name = "Попап слайдер из 3 элементов",
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
var items = [
    {
        "id": "0",
        "name": "Антипасти Premiere",
        "link": "#",
        "img": "https://files.carrotquest.app/message-images/57355/57355-1717404956518-e4vhx2hw.png",
        "price": "7 570₽"
    },
    {
        "id": "1",
        "name": "Сет канапе SeaFood",
        "link": "#",
        "img": "https://files.carrotquest.app/message-images/57355/57355-1717404987785-8s6ahe7h.png",
        "price": "6 080₽"
    },
    {
        "id": "2",
        "name": "Коктейль для 20-25 гостей",
        "link": "#",
        "img": "https://files.carrotquest.app/message-images/57355/57355-1717405023739-u465t6bs.png",
        "price": "24 630₽"
    },
];
var activeItemNumber = 1;

function initSlider() {
    document.querySelector('.slider_item.active img').src = items[1].img
    document.querySelector('.slider_item.left img').src = items[0].img
    document.querySelector('.slider_item.right img').src = items[2].img
    document.querySelector('.item_name').textContent = items[1].name
    document.querySelector('.item_price').textContent = items[1].price
    document.querySelector('.item_link').href = items[1].link;
    document.querySelector('.slider_item.active').setAttribute('id','1')
}
function setSlides(activeItemId){
    var prevSlide = activeItemId -1 >= 0?activeItemId -1:items.length - 1;
    var nextSlide = activeItemId +1 === items.length?0:activeItemId+1;

    document.querySelector('.slider_item.active img').src = items[activeItemId].img
    document.querySelector('.item_name').textContent = items[activeItemId].name
    document.querySelector('.item_price').textContent = items[activeItemId].price
    document.querySelector('.item_link').href = items[activeItemId].link;
    document.querySelector('.slider_item.active').setAttribute('id',activeItemId)

    document.querySelector('.slider_item.left img').src = items[prevSlide].img
    document.querySelector('.slider_item.right img').src = items[nextSlide].img
}
function switchItemsNext(){
    if(activeItemNumber < items.length -1){
        activeItemNumber += 1;
    }
    else{
        activeItemNumber = 0;
    }
    setSlides(activeItemNumber)
}
function switchItemsPrev(){
    if(activeItemNumber > 0){
        activeItemNumber -= 1;
    }
    else{
        activeItemNumber = items.length -1;
    }
    setSlides(activeItemNumber)
}

document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
        carrotquest.read();
        carrotquest.animation();
        initSlider();
    }
});
document.addEventListener('click',function (e){
    if(e.target.closest('.next')){
        switchItemsNext();
    }
    if(e.target.closest('.prev')){
        switchItemsPrev();
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