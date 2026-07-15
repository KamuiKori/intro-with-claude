var cqpopup_name = 'Сторис',
    carrotquest = {
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
            carrotquest.track(cqpopup_name + ' - Ответил в попап');
            top.postMessage(data, "*");
        },
        clicked: function() {
            var data = { command: "carrotquest.clickedPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name};
            top.postMessage(data, "*");
        },
        read: function() {
            var data = { command: "carrotquest.readPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name};
            top.postMessage(data, "*");
        },
        close: function() {
            var data = { command: "carrotquest.closePopup", "id": "{{ sending_id }}" };
            top.postMessage(data, "*");
        },
        resizeFrame: function(obj) {
            var data = {
                "command": 'carrotquest.resizeFrame',
                'id': '{{ sending_id }}',
                "position": obj.position,
                'width': obj.width,
                'height': obj.height,
                "zIndex": obj.zIndex,
                "top": obj.top,
                "left": obj.left
            };
            top.postMessage(data, '*');
        }
    },
    stories = [
        {
            id: 1,
            photo: "https://files.carrotquest.app/message-images/47069/47069-1689931604381-8hiw33po.png",
            name: "О школе",
            items: [
                {
                    id: 1,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689932358075-rfnmioy9.png",
                    productLink : "#"
                }
            ]
        },
        {
            id: 2,
            photo: "https://files.carrotquest.app/message-images/47069/47069-1689931646654-xk4ts0sj.png",
            name: "Педагоги",
            items: [
                {
                    id: 1,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689932742246-o7y8r1qp.png",
                    productLink : "#"
                },
                {
                    id: 2,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689932921121-qmwd5g4q.png",
                    productLink : "#"
                },
                {
                    id: 3,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689932942643-vjqaif7f.png",
                    productLink : "#"
                },
            ]
        },
        {
            id: 3,
            photo: "https://files.carrotquest.app/message-images/47069/47069-1689931664998-qx60uhxq.png",
            name: "Форматы обучения",
            items: [
                {
                    id: 1,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933023541-e725k9kj.png",
                    productLink : "#"
                },
                {
                    id: 2,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933056021-brfzxj04.png",
                    productLink : "#"
                },
                {
                    id: 3,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933073382-tirjvnqb.png",
                    productLink : "#"
                },
            ]
        },
        {
            id: 4,
            photo: "https://files.carrotquest.app/message-images/47069/47069-1689931677793-wv4i4btj.png",
            name: "Индивидуальное обучение",
            items: [
                {
                    id: 1,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933477914-jsqswxgb.png",
                    productLink : "#"
                },
            ]
        },
        {
            id: 5,
            photo: "https://files.carrotquest.app/message-images/47069/47069-1689931701338-ha5vd11y.png",
            name: "Отзывы",
            items: [
                {
                    id: 1,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933518130-ymc5wmuc.png",
                    productLink : "#"
                },
                {
                    id: 2,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933546614-aznzy9rr.png",
                    productLink : "#"
                },
                {
                    id: 3,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933567194-qqv4jbhk.png",
                    productLink : "#"
                },
                {
                    id: 4,
                    photo: "https://files.carrotquest.app/message-images/47069/47069-1689933596495-a4kwpjoz.png",
                    productLink : "#"
                },
            ]
        },
    ],
    cqp_stories = document.querySelector(".cqp__stories"),
    cqp_storySlider = document.querySelector(".cqp__story-slider"),
    cqp_modalStory = document.querySelector(".cqp__story-modal"),
    cqp_close = document.querySelector(".cqp__story-close");

document.addEventListener("readystatechange", function() {
    if (document.readyState === "complete") {
        carrotquest.read();
        carrotquest.animation();
        renderStoriesFeed(stories);
    }
});
document.addEventListener("click",function (e){
    if(e.target.closest('.btn_close')){
        resizeFrame("close");
    }
});

cqp_close.addEventListener("click", function() {
    resizeFrame("close");
});

function hidden_visible(elem1, elem2) {
    elem1.classList.add("hidden");
    elem2.classList.remove("hidden");
}

function renderStoriesFeed(stories) {
    var template = "";
    stories.forEach(function(story) {
        template +=`<li class="cqp__story" data-id="${story.id}">
            <div class="cqp__story-img-wrapper active">
            <img class="cqp__story-img" src="${story.photo}">
            </div>
            <p class="cqp__story-text">${story.name}</p>
          </li>`;
    });
    cqp_stories.innerHTML = template;
}

function renderStories(story) {
    var template = "";
    story.items.forEach(function(storyItem, idx) {
        var hidden = idx !=0 ? "hidden" : "";
        var storyLink = storyItem.link ?
            `<a href="${storyItem.link}" target="_blank" class="cqp__story-slide-link">${storyItem.linkText}</a>` :
            "";
        var productLink = storyItem.productLink ?  `<div class="btn_wrap"><a href="${storyItem.productLink}" target="_blank" class="product_link">Записаться на пробный урок</a></div>`:"";
        var btn_next_large = storyItem.btn_next_large ? `<button class="btn_next_large">${storyItem.btn_next_text}</button>"`:'';
        var btnClose = storyItem.btn_close ? `<button class='btn_close'>Закрыть</button>`:"";
        var btnToTrack = storyItem.btn_toTrack ? `<button class="btn_track">ПОДОБРАТЬ УХОД</button>`:'';
        var emailForm = storyItem.emailForm ? `
        <form class="email-form">
            <p class="cq-popup__text">
                Дарим 10% скидку <br>на нашу косметику.
            </p>
            <p class="cq-popup__text small">
                Оставьте email, чтобы мы прислали промокод.
            </p>
            <input class="cq_popup-input email" type="email" name="email" placeholder="Ваш email" required>
            <button type="submit" class="btn_submit">Получить подарок</button>
            <div class="eula">
                <input type="checkbox" id="checkbox" checked>
                <label for="checkbox">Я согласна(-ен) на обработку персональных данных.</label>
            </div>
        </form>
        <div class="thank hidden">
            <p class="cq-popup__text bold">Спасибо!</p>
            <p class="cq-popup__text small">Проверьте почту через пару минут</p>
        </div>
        `:'';
        template +=`
          <div class="cqp__story-viewer ${hidden}">
          <div class="prev"></div>
            <img class="cqp__story-viewer-img" src="${storyItem.photo}" alt="">
            ${storyLink}
            ${btnClose}
            ${btn_next_large}
            ${productLink}
            ${btnToTrack}
            ${emailForm}
            <div class="next"></div>
          </div>`;
    });
    cqp_storySlider.dataset.id = story.id;
    cqp_storySlider.innerHTML = template;
}
document.addEventListener('submit',function (e){
    if(e.target.closest('.email-form')){
        e.preventDefault();
        var email = e.target.closest('.email-form').querySelector('.email').value;
        if(email && e.target.closest('.email-form').querySelector('#checkbox').checked){
            hidden_visible(document.querySelector('.email-form'),document.querySelector('.thank'));
            carrotquest.identify([{op:"update_or_create",key:'$email',value:email}]);
            carrotquest.replied();
            stories.forEach(function (story){
                story.items.pop();
            })
        }
    }
});

function resizeFrame(state) {
    var obj = {};
    if (state == "open") {
        cqp_modalStory.classList.remove("hidden");
        obj = {
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: "9999999999999",
            top: 0,
            left: 0
        };
        carrotquest.resizeFrame(obj);
    }
    if (state == "close") {
        cqp_modalStory.classList.add("hidden");
        obj = {
            position: "relative",
            width: "100%",
            height: "135px",
            zIndex: "1",
            top: 0,
            left: 0
        };
        carrotquest.resizeFrame(obj);
    }
}

cqp_stories.addEventListener("click", function(e) {
    if (e.target.closest(".cqp__story")) {
        for (var story of stories) {
            if (story.id == e.target.closest(".cqp__story").dataset.id) {
                renderStories(story);
                resizeFrame("open");
                carrotquest.track(cqpopup_name + " - открыл сторис (" + story.name+")");
                break;
            }
        }
    }
});

cqp_storySlider.addEventListener("click", function(e) {
    if (e.target.closest(".cqp__story-slide-link")) {
        carrotquest.track(cqpopup_name + " - клик (" + e.target.closest(".cqp__story-slide-link").textContent+")");
        carrotquest.clicked();
        return;
    }
    if(e.target.closest('.btn_track')){
        carrotquest.track(cqpopup_name + " - Клик подобрать уход");
        resizeFrame("close");
    }
    if (e.target.closest('.product_link')){
        carrotquest.track(cqpopup_name + " - Перешел на товар");
    }
    if (e.target.closest(".next") || e.target.closest('.btn_next_large') || e.target.closest('.btn_next_small')) {
        var currentStorySlide = e.target.closest(".cqp__story-viewer");
        var nextStorySlide = currentStorySlide.nextElementSibling;
        if (nextStorySlide) {
            if(nextStorySlide.querySelector('.email-form')){
                carrotquest.track(cqpopup_name + ' - Прочитал форму email')
            }
            hidden_visible(currentStorySlide, nextStorySlide);
        } else if (document.querySelector(".cqp__story[data-id='"+ (+e.currentTarget.dataset.id + 1) +"']")) {
            for (var story of stories) {
                if (story.id == +e.currentTarget.dataset.id + 1) {
                    renderStories(story);
                    break;
                }
            }
        } else {
            cqp_storySlider.removeAttribute("data-id");
            cqp_storySlider.innerHTML = "";
            resizeFrame("close");
        }
    }
    if (e.target.closest(".prev")) {
        var currentStorySlide = e.target.closest(".cqp__story-viewer");
        var prevStorySlide = currentStorySlide.previousElementSibling;
        if (prevStorySlide) {
            if(prevStorySlide.querySelector('.email-form')){
                carrotquest.track(cqpopup_name + ' - Прочитал форму email')
            }
            hidden_visible(currentStorySlide, prevStorySlide);
        } else if (document.querySelector(".cqp__story[data-id='"+ (+e.currentTarget.dataset.id - 1) +"']")) {
            for (var story of stories) {
                if (story.id == +e.currentTarget.dataset.id - 1) {
                    renderStories(story);
                    break;
                }
            }
        } else {
            cqp_storySlider.removeAttribute("data-id");
            cqp_storySlider.innerHTML = "";
            resizeFrame("close");
        }
    }
});