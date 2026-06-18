const cqpopup_name = "Просмотренные товары слайдер",
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
var curSlideNumber = 0;
var numOfSlides = document.querySelectorAll('.product-wrapper').length

document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
        carrotquest.read();
        carrotquest.animation();
        setSlider();
    }
});
function setSlider(){
    document.querySelectorAll('.product-wrapper').forEach(function (item){
        item.classList.add('hidden')
    });
    document.querySelector('.product-wrapper').classList.remove('hidden');
}



document.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.querySelector(".email").value;
    var checkbox = document.querySelector("#checkbox").checked;
    if (email && checkbox) {
        carrotquest.identify([{op:'update_or_create',key:'$email',value:email}]);
        hidden_visible('#email_form','#thank');
        carrotquest.replied();
        setTimeout(carrotquest.close,5000);
    }
});
document.addEventListener('click',function (e){
    if(e.target.closest('.next_btn')){
        var curSlide = e.target.closest('.product-wrapper');
        var nextSlide = document.querySelectorAll('.product-wrapper')[curSlideNumber + 1];
        if(curSlideNumber <= numOfSlides && nextSlide){
            curSlide.classList.add('hidden');
            nextSlide.classList.remove('hidden');
            carrotquest.track(cqpopup_name + ' - Перешел вперед');
            curSlideNumber++;
        }
    }
    if(e.target.closest('.prev_btn')){
        var curSlide = e.target.closest('.product-wrapper');
        var prevSlide = document.querySelectorAll('.product-wrapper')[curSlideNumber -1];
        if(curSlideNumber > 0 && prevSlide){
            curSlide.classList.add('hidden');
            prevSlide.classList.remove('hidden');
            carrotquest.track(cqpopup_name + ' - Перешел назад');
            curSlideNumber--;
        }
    }
    if(e.target.closest('.link')){
        carrotquest.clicked();
    }
    if(e.target.closest('.cq-popup__close:not(.hide)')){
        carrotquest.close();
    }
    if(e.target.closest('.cq-popup__close.hide')){
        hidden_visible(`${'#' + document.querySelector('form:not(.hidden)').id}`,'#close_form');
        carrotquest.track(cqpopup_name + ' - Попытался закрыть');
        e.target.closest('.cq-popup__close').classList.remove('hide');
    }
    if(e.target.closest('.link_out')){
        carrotquest.track(cqpopup_name + ' - Перешел в каталог');
    }
    if(e.target.closest('.product-wrapper a')){
        carrotquest.track(cqpopup_name + ' - Перешел на товар')
    }
    if(e.target.closest('.email_btn')){
        carrotquest.track(cqpopup_name + ' - Выбрал email');
        hidden_visible('#form','#email_form')
    }
})
function hidden_visible(elem1, elem2) {
    document.querySelector(elem1).classList.add("hidden");
    document.querySelector(elem2).classList.remove("hidden");
}


function trackData(data) {
    carrotquest.identify({["$" + data]: document.querySelector(".cqp__input[name=" + data + "]").value});
    carrotquest.replied();
}