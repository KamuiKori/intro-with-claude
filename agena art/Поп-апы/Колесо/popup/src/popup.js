const cqpopup_name = "Колесо",
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
var winWheelSegments = [
    {
        "text": "Скидка на заказ 1",
        "eventText": "скидку 14%",
        "trackText": "Скидка 14%",
        "chanse": 100
    },
    {
        "text": "Скидка на заказ 2",
        "eventText": "скидку 13%",
        "trackText": "Скидка 13%",
        "chanse": 0
    },
    {
        "text": "Скидка на заказ 3",
        "eventText": "скидку 12%",
        "trackText": "Скидка 12%",
        "chanse": 0
    },
    {
        "text": "Скидка на заказ 4",
        "eventText": "скидку 11%",
        "trackText": "Скидка 11%",
        "chanse": 0
    },
    {
        "text": "Скидка на заказ 5",
        "eventText": "скидку 10%",
        "trackText": "Скидка 10%",
        "chanse": 0
    },
    {
        "text": "Скидка на заказ 6",
        "eventText": "скидку 15%",
        "trackText": "Скидка 15%",
        "chanse": 0
    }
];
var animation = {
    "type": "spinToStop",
    "duration": 5,
    "spins": 9,
    "stopAngle": null,
    "callbackFinished": "winPrizeSuccess()"
}

var pins = {
    "number": 0,
    "outerRadius": 1,
    "lineWidth": 1,
    "margin": 7,
    "fillStyle": "#F2F2F2",
    "strokeStyle": "#FFFFFF"
};

var wheelSettings = {
    "canvasId": "canvas",
    'drawMode': 'code',
    'drawText': true,
    'imageOverlay': false,
    'strokeStyle': 'black',
    "numSegments": winWheelSegments.length,
    "pointerAngle": 270,
    "textFontFamily": "Montserrat",
    'textDirection': 'reversed',
    'textFontWeight': 400,
    "textFontSize": 13,
    "textMargin": 3,
    'pointerGuide':
        {
            'display': true,
            'strokeStyle': 'red',
            'lineWidth': 2
        },
    "finishTitle": "Заголовок",
    "finishText": "Подзаголовок",
    "segments": winWheelSegments,
    "pins": pins,
    "animation": animation
};
var imageWheel = "";
if (window.innerWidth > 990) {
    document.querySelector("#canvas").setAttribute("width", 500);
    document.querySelector("#canvas").setAttribute("height", 500);
    wheelSettings["textFontSize"] = 16;
    wheelSettings["outerRadius"] = 234;
    wheelSettings["innerRadius"] = 40;
    imageWheel = "https://files.carrotquest.io/message-images/12827/12827-1656658060450-ta3ix3hs.png";
} else {
    document.querySelector("#canvas").setAttribute("width", 315);
    document.querySelector("#canvas").setAttribute("height", 315);
    wheelSettings["textFontSize"] = 10;
    wheelSettings["outerRadius"] = 150;
    wheelSettings["innerRadius"] = 25;
    imageWheel = "https://files.carrotquest.io/message-images/12827/12827-1656658360983-zwsx5wfo.png";
}
var theWheel = new Winwheel(wheelSettings);
var firstImg = new Image();
firstImg.onload = function () {
    theWheel.wheelImage = firstImg;
    theWheel.draw();
};
firstImg.src = imageWheel;

function getPrize(sections) {
    var colSection = sections.length,
        randomNumber = Math.floor(1 + Math.random() * (100)),
        acc = 0,
        numberSection = 0;
    var resultAngel = function (numberSection) {
        var anglePerSection = Math.floor(360 / colSection),
            angleDelta = anglePerSection * 0.1,
            angleMin = anglePerSection * numberSection + angleDelta,
            angleMax = anglePerSection * (numberSection + 1) - angleDelta;
        return Math.floor(angleMin + Math.random() * (angleMax - angleMin));
    };
    for (var idx = 0; idx < sections.length; idx++) {
        acc += sections[idx].chanse;
        if (randomNumber <= acc) {
            numberSection = idx;
            break;
        }
    }
    return resultAngel(numberSection);
}

function winPrizeSuccess() {
    hidden_visible("#form", "#thank");
    carrotquest.track(cqpopup_name + " - " + theWheel.getIndicatedSegment().trackText);
    let winningSegment = theWheel.getIndicatedSegment();
    console.log(winningSegment);
}

document.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    if (e.target.closest("#form") && name && email) {

        document.querySelector("[type=submit]").disabled = true;
        theWheel.animation.stopAngle = getPrize(winWheelSegments);

        theWheel.startAnimation();

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

((form) => {
    var phoneInput = document.querySelector("[type=tel]"),
        form = document.querySelector(form),
        formattedInputValue = "+7 (";

    function checkCorrect(input) {
        if (input.length == 18) {
            form.classList.add("form-ready");
            phoneInput.classList.add("success");
            phoneInput.classList.remove("error");
        } else {
            form.classList.remove("form-ready");
            phoneInput.classList.remove("success");
            phoneInput.classList.remove("error");
        }
    }

    function getInputNumbersValue(input) {
        return input.value.replace(/\D/g, "");
    }

    function getformattedInputValue(input, inputNumbersValue, formattedInputValue) {
        if (!(inputNumbersValue[0] == "7" || inputNumbersValue[0] == "8")) {
            formattedInputValue = formattedInputValue + inputNumbersValue;
            return formattedInputValue;
        }
        if (inputNumbersValue.length > 1) {
            formattedInputValue += inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
            formattedInputValue += "–" + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
            formattedInputValue += "–" + inputNumbersValue.substring(9, 11);
        }
        return formattedInputValue;
    }

    function onPhoneInput(e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);

        if (e.inputType == "deleteContentBackward" && inputNumbersValue.length == 1) {
            input.value = "";
            return;
        }

        if (e.inputType == "insertFromPaste") {
            if (["7", "8"].indexOf(inputNumbersValue[0]) > -1 && input.value != "") {
                inputNumbersValue = inputNumbersValue.substring(1);
            }
            if (inputNumbersValue[0] == "9") {
                inputNumbersValue = "8" + inputNumbersValue;
            }
        }

        input.value = getformattedInputValue(input, inputNumbersValue, formattedInputValue);
        checkCorrect(input.value);
    }

    function onPhoneFocus(e) {
        if (e.target.value == "") {
            e.target.value = formattedInputValue;
        }
    }

    function onPhoneBlur(e) {
        if (e.target.value == formattedInputValue) {
            e.target.value = "";
        }
        if (e.target.value.length != 18) {
            form.classList.remove("form-ready");
            phoneInput.classList.add("error");
            phoneInput.classList.remove("success");
        }
    }

    function selectionStart(e) {
        var input = e.target;
        if (input.selectionStart <= 3) {
            input.selectionStart = 4;
        }
    }

    phoneInput.addEventListener("input", onPhoneInput);
    phoneInput.addEventListener("focus", onPhoneFocus);
    phoneInput.addEventListener("blur", onPhoneBlur);
    phoneInput.addEventListener("keyup", selectionStart);
    phoneInput.addEventListener("click", selectionStart);
})("#form");