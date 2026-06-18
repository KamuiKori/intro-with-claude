const cqpopup_name = "Вертикальная рулетка",
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
            carrotquest.track(cqpopup_name + ' - Закрыл попап');
        },
        replied: function () {
            this.trackMessageInteraction("{{ sending_id }}", "replied");
            this.track('Ответил в попап');
            this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);
            carrotquest.identify([{op: 'update_or_create', key: 'Источник лида', value: cqpopup_name}]);
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
        initAnimation();
        setTimeout(carrotquest.close,1000000);
    }
});
const prizes = [
    {
        name: 'Ручка Parker',
        subtitle: 'при любом заказе',
        id: "1",
        percentage: 7,
        prizeProperty: '1',
        prizeImg: 'https://files.carrotquest.app/message-images/65310/65310-1744967049725-kbtvsdjd.png'
    },
    {
        name: '10 саше',
        subtitle: 'при любом заказе',
        id: "2",
        percentage: 15,
        prizeProperty: '2',
        prizeImg: 'https://files.carrotquest.app/message-images/65310/65310-1744967125509-90qyx8zc.png'
    },
    {
        name: 'Скидка 2 000 ₽',
        subtitle: 'на заказ от 20000 ₽',
        id: "3",
        percentage: 8,
        prizeProperty: '3',
        prizeImg: 'https://files.carrotquest.app/message-images/65310/65310-1744967139935-o4wuimpi.png'
    },
    {
        name: 'Скидка 500 ₽',
        subtitle: 'на любой заказ',
        id: "4",
        percentage: 20,
        prizeProperty: '4',
        prizeImg: 'https://files.carrotquest.app/message-images/65310/65310-1744967139935-o4wuimpi.png'
    },
    {
        name: 'Скидка 1 000 ₽',
        subtitle: 'на заказ от 10000 ₽',
        id: "5",
        percentage: 15,
        prizeProperty: '5',
        prizeImg: 'https://files.carrotquest.app/message-images/65310/65310-1744967139935-o4wuimpi.png'
    },
    {
        name: 'Скидка 1 500 ₽',
        subtitle: 'на заказ от 15000 ₽',
        id: "6",
        percentage: 10,
        prizeProperty: '6',
        prizeImg: 'https://files.carrotquest.app/message-images/65310/65310-1744967139935-o4wuimpi.png'
    },
    {
        name: 'Зубная щетка',
        subtitle: 'при любом заказе',
        id: "7",
        percentage: 15,
        prizeProperty: '7',
        prizeImg: 'https://files.carrotquest.app/message-images/65310/65310-1744967166891-zhkeb9xi.png'
    },
    {
        name: 'Патчи',
        subtitle: '',
        id: "8",
        percentage: 10,
        prizeProperty: '8',
        prizeImg: 'https://files.carrotquest.app/message-images/65310/65310-1744967182282-064s4hsm.png'
    },
];
var prizeHeight = 320 + 25;
var prizeWidth = 170 + 25;
const countOfSpins = 25
const rouletteContainer = document.getElementById('roulette-container');
const prizesContainer = document.getElementById('prizes');
const containerHeight = rouletteContainer.clientHeight;
const containerWidth = rouletteContainer.clientWidth;
const arrowOffset = containerHeight / 2 - prizeHeight / 2;
const arrowOffsetMob = containerWidth / 2 - prizeWidth / 2;
var totalCountItems = countOfSpins * prizes.length
var expandedPrizes = createRepeatedArrayWithUniqueId(prizes, totalCountItems);
expandedPrizes = insertElementAfterEach(expandedPrizes, {
    name: '',
    subtitle: '',
    id: "9",
    percentage: 0,
    prizeProperty: '9'
})

function insertElementAfterEach(arr, elementToInsert) {
    let result = [];

    arr.forEach((element) => {
        result.push(element, elementToInsert);
    });

    return result;
}

function createRepeatedArrayWithUniqueId(sourceArray, repeatCount) {
    let result = [];
    const sourceLength = sourceArray.length;
    let index = 0;

    for (let i = 0; i < repeatCount; i++) {
        const prizeWithUniqueId = Object.assign({}, sourceArray[index % sourceLength], {data_id: i});
        result.push(prizeWithUniqueId);
        index++;
    }

    return result;
}


function setupPrizes() {
    expandedPrizes.forEach(function (prize) {
        const prizeElement = document.createElement('div');
        prizeElement.className = 'prize';
        if (prize.id === '9') {
            prizeElement.classList.add('transp')
        } else {
            prizeElement.setAttribute('data_prize_type', prize.id)
            prizeElement.setAttribute('data_id', prize.data_id)
            prizeElement.innerHTML = `<div class='blur_overlay'></div><img class="prize_img" src="${prize.prizeImg}"><div class="prize_text"><p class="prize_title">${prize.name}</p><p class="prize_subtitle">${prize.subtitle}</p></div>`
        }
        prizesContainer.appendChild(prizeElement);
    })
}

function getRandomPrize() {
    const totalPercentage = 100;
    let random = Math.random() * totalPercentage;
    random = Math.floor(random);

    for (const prize of prizes) {
        if (random < prize.percentage) {
            return prize;
        }
        random -= prize.percentage;
    }
}
function initAnimation(){
    if (top.window.innerWidth < 871) {
        prizesContainer.style.transform = `translateX(-39000px)`;
    }
    else{
        prizesContainer.style.transform = `translateY(-69000px)`;
    }
}

var finalPrize;

function spinRoulette() {
    if (top.window.innerWidth < 871) {
        const totalWidth = prizesContainer.scrollWidth / countOfSpins;
        const randomPrize = getRandomPrize();
        const targetIndex = prizes.findIndex(prize => prize.name === randomPrize.name);

        const fullSpins = 13;
        const targetPosition = targetIndex * prizeWidth;

        const finalPosition = -(totalWidth * fullSpins + targetPosition - arrowOffsetMob - 20);

        prizesContainer.style.transition = 'transform 14s ease-out';
        prizesContainer.style.transform = `translateX(${finalPosition}px)`;

        carrotquest.track(cqpopup_name + ' - Выиграл: ' + randomPrize.name)
        finalPrize = randomPrize;
        carrotquest.identify([{
            op: 'update_or_create',
            key: cqpopup_name + ' - Приз',
            value: randomPrize.prizeProperty
        }])
    } else {
        const totalHeight = prizesContainer.scrollHeight / countOfSpins;
        const randomPrize = getRandomPrize();
        const targetIndex = prizes.findIndex(prize => prize.name === randomPrize.name);

        const fullSpins = 13;
        const targetPosition = targetIndex * prizeHeight;

        const finalPosition = -(totalHeight * fullSpins + targetPosition +  - arrowOffset);

        prizesContainer.style.transition = 'transform 14s ease-out';
        prizesContainer.style.transform = `translateY(${finalPosition}px)`;

        carrotquest.track(cqpopup_name + ' - Выиграл: ' + randomPrize.name)
        finalPrize = randomPrize;
        carrotquest.identify([{
            op: 'update_or_create',
            key: cqpopup_name + ' - Приз',
            value: randomPrize.prizeProperty
        }])
    }

}

setupPrizes();

document.addEventListener("submit", function (e) {
    var email = document.querySelector('.email').value;
    e.preventDefault();
    if (email && document.querySelector('#checkbox').checked) {
        spinRoulette()
        carrotquest.identify([{op: "update_or_create", key: "$email", value: email}]);
        document.querySelector('.cq-popup__button').disabled = true;
        setTimeout(function () {
            hidden_visible('.first-form', '.second-form');
            var finalPrizeId = finalPrize.id
            document.querySelectorAll(`.prize:not([data_prize_type="${finalPrizeId}"]) .blur_overlay`).forEach(function (item) {
                item.classList.add('active')
            });
        }, 14000)
        carrotquest.replied();
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