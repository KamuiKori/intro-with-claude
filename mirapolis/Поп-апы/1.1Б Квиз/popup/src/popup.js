const cqpopup_name = "1.1Б Квиз",
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
isAnswer();
document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
        carrotquest.read();
        carrotquest.animation();
        setTgLink('#')
    }
});

var numberOfCurrentSlide = 1;

document.addEventListener('click', function (e) {
    if (e.target.closest('.answer') && e.target.closest('.cq-popup__form-content:not(.hidden):not(.disable)')) {
        var btnNext = document.querySelector('.next')
        btnNext.style = "cursor:pointer";
        btnNext.disabled = false;
        if (e.target.closest('.answer').querySelector('.hidden-answer')) {
            e.target.closest('.answer').querySelector('.hidden-answer').style.opacity = "1"
        }
        var curSlide = document.querySelector('.cq-popup__form-content:not(.hidden)');
        curSlide.querySelectorAll('.answer').forEach(function (item) {
            item.classList.remove('active')
        });
        e.target.closest('.answer').classList.add('active')
        document.querySelectorAll('.hide').forEach(function (item){
            item.classList.remove('hide')
        });
    }
    if (e.target.closest('.link')) {
        carrotquest.clicked();
    }
    if (e.target.closest('.cq-popup__bg:not(.hide)') || e.target.closest('.cq-popup__close:not(.hide)')) {
        carrotquest.close();
    }
    if (e.target.closest('.cq-popup__close.hide')) {
        if (e.target.closest('.phone_form')) {
            hidden_visible('.end-form', '#close');
        }
        if (e.target.closest('.cq-popup__body')) {
            document.querySelector('.cq-popup__body').classList.add('hidden');
            document.querySelector('.phone_form').classList.remove('hidden');
            document.querySelector('.end-form').classList.add('hidden');
            document.querySelector('#close').classList.remove('hidden');
            hidden_visible('.cq-popup__body', '#close');
        }
        document.querySelectorAll('.cq-popup__close').forEach(function (item) {
            item.classList.remove('hide')
        });
    }
    if (e.target.closest('.cq-popup__bg.hide')) {
        if (document.querySelector('.cq-popup__body:not(.hidden)')) {
            document.querySelector('.cq-popup__body').classList.add('hidden');
            document.querySelector('.phone_form').classList.remove('hidden');
            document.querySelector('.end-form').classList.add('hidden');
            document.querySelector('#close').classList.remove('hidden');
            hidden_visible('.cq-popup__body', '#close');
        }
        if (document.querySelector('.phone_form:not(.hidden)')) {
            document.querySelector('.end-form').classList.add('hidden');
            document.querySelector('#close').classList.remove('hidden');
        }
        document.querySelector('.cq-popup__bg').classList.remove('hide');
    }
});

function setTgLink(link) {
    var tgLink = link;
    tgLink += top.carrotquest.data.user.user_signature.telegram ? `?start=${top.carrotquest.data.user.user_signature.telegram}` : '';
    document.querySelector(".link").href = tgLink;
}

document.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    if (document.querySelector('.form-ready') && document.querySelector('#checkbox').checked && name) {
        var phone = document.querySelector('.phone').value;
        carrotquest.replied();
        carrotquest.identify([
            {op: "update_or_create", key: "$phone", value: phone},
            {op: "update_or_create", key: "$name", value: name},
            {op: "update_or_create", key: "Источник CQ", value: 'значение свойства Источник CQ'},
        ]);
        document.querySelector('.cq-popup__bg').classList.remove('hide');
        document.querySelector('.cq-popup__close').classList.remove('hide');
        hidden_visible('.end-form', '.thank');
        if (email) {
            carrotquest.identify([{op: "update_or_create", key: "$email", value: email}])
        }
    }
    if(!document.querySelector('#checkbox').checked){
        document.querySelector('#checkbox').classList.add('error')
    }
});

document.querySelector('input.next').addEventListener('click', function (e) {
    var btnNext = document.querySelector('.next')
    btnNext.style = "cursor:not-allowed"
    btnNext.disabled = true;
    var number = numberOfCurrentSlide;
    var nextSlide = document.querySelector('.cq-popup__form-content:not(.hidden)').nextElementSibling;
    var currentSlide = document.querySelector('.cq-popup__form-content:not(.hidden)')
    var answers = currentSlide.querySelectorAll('input:checked')
    var answersText = '';
    var q = '';
    switch (currentSlide.id) {
        case 's1':
            q = 'HR-задача'
            break;
        case 's2':
            q = 'Количество сотрудников'
            break;
        case 's3':
            q = 'Срок'
            break;
    }
    if (answers != null) {
        answers.forEach(function (item) {
            item = item.nextElementSibling.textContent;
            answersText += " " + item;
        })
        carrotquest.track(cqpopup_name + ' - Ответил в квизе на ' + number + ' вопрос');
        carrotquest.identify([{op: 'update_or_create', key:q, value: answersText.trim()}])
    }
    if (nextSlide) {
        slideToggler(currentSlide, nextSlide)
        progress("next")
        numberOfCurrentSlide++;
        toggleButtonPrev(numberOfCurrentSlide)
        isAnswer();
    }
    if (!nextSlide) {
        hidden_visible('.cq-popup__body', '.phone_form')
    }
})

document.querySelector('.prev').addEventListener('click', function () {
    numberOfCurrentSlide--;
    var currentSlide = document.querySelector('.cq-popup__form-content:not(.hidden)')
    var prevSlide = currentSlide.previousElementSibling
    var numberOfPrevSlide = document.querySelector('.progress-now');
    numberOfPrevSlide.textContent = (numberOfPrevSlide.textContent--).toString()
    toggleButtonPrev(numberOfCurrentSlide)
    slideToggler(currentSlide, prevSlide)
    progress("prev")
    isAnswer();
})

function toggleButtonPrev(num) {
    if (num === 1) {
        document.querySelector('.prev').classList.add('hidden');
        document.querySelector('.next').classList.add('rounded')
    } else {
        document.querySelector('.prev').classList.remove('hidden');
        document.querySelector('.next').classList.remove('rounded');
    }
}

function isAnswer() {
    var email = document.querySelector('.cq-popup__form-content:not(.hidden) .email-form input[type="email"]')
    var name = document.querySelector('.cq-popup__form-content:not(.hidden) .email-form input[type="name"]')
    var btnNext = document.querySelector('.next')
    if (document.querySelector('.cq-popup__form-content:not(.hidden) input:checked')) {
        btnNext.disabled = false;
        btnNext.style = "cursor:pointer;"
    } else if (email) {
        if (email.value) {
            btnNext.disabled = false;
            btnNext.style = "cursor:pointer;"
        }
        email.addEventListener('input', function () {
            if (email.value.length > 0) {
                btnNext.disabled = false;
                btnNext.style = "cursor:pointer;"
            }
        })
    }

}

function trackEmail() {
    var numberOfPrevSlide = document.querySelector('.progress-now');
    if (numberOfPrevSlide === 2) {
    }
}

function progress(arg) {
    if (arg === "next") {
        document.querySelector('.progress-now').textContent++;
    } else {
        document.querySelector('.progress-now').textContent--;
    }
    var now = document.querySelector('.progress-now').textContent
    var count = document.querySelector('.progress-all').textContent
    document.querySelector('.progress-box-active').style.width = Math.floor(now * 100 / count) + "%";
}


function trackData(data) {
    carrotquest.identify({["$" + data]: document.querySelector(".cq_popup-input[name=" + data + "]").value});
}

function hidden_visible(elem1, elem2) {
    document.querySelector(elem1).classList.add("hidden");
    document.querySelector(elem2).classList.remove("hidden");
}

function slideToggler(element1, element2) {
    element1.classList.add("hidden")
    element2.classList.remove("hidden")
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
})(".end-form");