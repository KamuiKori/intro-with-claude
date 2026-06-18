const cqpopup_name = "Скретч карточка тест",
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



document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {
    item.addEventListener("click", carrotquest.close);
});
document.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.querySelector('.name').value;
    if(document.querySelector('.success') && name){
        carrotquest.replied();
        var phone = document.querySelector('.phone').value
        carrotquest.identify([
            {op:'update_or_create',key:'$name',value:name},
            {op:'update_or_create',key:'$phone',value:phone},
        ]);
        document.querySelectorAll('.finish').forEach(function (item) {
            item.classList.add('hidden')
        });
        hidden_visible('#form','#thank')
    }
});





function hidden_visible(elem1, elem2) {
    document.querySelector(elem1).classList.add("hidden");
    document.querySelector(elem2).classList.remove("hidden");
}

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const winMessage = document.querySelector('.win-message');
const resetBtn = document.getElementById('resetBtn');
const brushSize = 20;

let isDrawing = false;
let revealed = false;

function drawCover() {
    ctx.globalCompositeOperation = 'source-over';

    const bgImage = new Image();
    bgImage.crossOrigin = "anonymous";

    bgImage.onload = function() {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    };

    bgImage.onerror = function() {
        console.error('Не удалось загрузить фоновое изображение');
        ctx.fillStyle = '#999';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    bgImage.src = 'https://files.carrotquest.app/message-images/100/100-1763972694279-ixxfmxg2.png';
}

drawCover();

function getPosition(e) {
    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    return { x, y };
}

function erase(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fill();
}

function getClearedPercent() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] === 0) cleared++;
    }
    return (cleared / (canvas.width * canvas.height)) * 100;
}

function startDraw(e) {
    e.preventDefault();
    isDrawing = true;
    const pos = getPosition(e);
    erase(pos.x, pos.y);
}

function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPosition(e);
    erase(pos.x, pos.y);

    const percent = getClearedPercent();
    if (percent > 50 && !revealed) {
        revealed = true;
        winMessage.classList.add('show');
        document.querySelector('.scratch-container').classList.add('win');
        document.querySelector('#form').classList.remove('hidden');
        document.querySelectorAll('.start').forEach((el) => {
            el.classList.add('hidden');
        });
        document.querySelectorAll('.finish').forEach((el) => {
            el.classList.remove('hidden');
        });
        const button = document.querySelector('.scratch-container.win');
        copyOnClick(button, 'XXXXXXX');
    }
}
function copyOnClick(element, promoCode) {
    element.addEventListener('click', () => {
        const input = document.createElement('input');
        input.value = promoCode;
        document.body.appendChild(input);
        input.select();

        try {
            if (document.execCommand('copy')) {
                document.querySelector('.success_copy').classList.add('active');
                setTimeout(() => {
                    document.querySelector('.success_copy').classList.remove('active');
                },2000);
            }
        } catch (err) {
            console.log('Ошибка копирования');
        } finally {
            document.body.removeChild(input);
        }
    });
}

function endDraw() {
    isDrawing = false;
}

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDraw);

canvas.addEventListener('touchstart', startDraw);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', endDraw);

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
            console.log(1)
        }
        if (inputNumbersValue.length > 1) {
            formattedInputValue += inputNumbersValue.substring(1,4);
        }
        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ") " + inputNumbersValue.substring(4,7);
        }
        if (inputNumbersValue.length >= 8) {
            formattedInputValue += "–"+inputNumbersValue.substring(7,9);
        }
        if (inputNumbersValue.length >= 10) {
            formattedInputValue += "–"+inputNumbersValue.substring(9,11);
        }
        return formattedInputValue;
    }

    function onPhoneInput(e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);

        if (e.inputType =="deleteContentBackward" && inputNumbersValue.length == 1) {
            input.value = "";
            return;
        }

        if (e.inputType =="insertFromPaste") {
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