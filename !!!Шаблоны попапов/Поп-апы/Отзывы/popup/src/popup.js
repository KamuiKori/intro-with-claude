const cqpopup_name = "Отзывы",
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

document.addEventListener("readystatechange", function() {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
      setReview("first");
  }
});

document.addEventListener('click',function (e){
    if(e.target.closest('.show_form')){
        document.querySelector('.show_form').classList.add('hidden');
        document.querySelector('.inputs').classList.remove('hidden');
    }
    if(e.target.closest('.cq-popup__button')){
        var value = e.target.closest('.cq-popup__button').textContent.trim();
        carrotquest.track(cqpopup_name + ' - ' + value);
        carrotquest.identify([{op:"update_or_create",key:cqpopup_name + ' - Ответ',value:value}]);
        document.querySelector('.cq-popup__body').classList.add('resized');
        document.querySelector('.cq-popup__close').classList.add('second_form');
        hidden_visible('#form','#thank');
    }
    if(e.target.closest('.signup_link')){
        carrotquest.track(cqpopup_name + ' - Перешел по ссылке');
    }
    if(e.target.closest('.next')){
        setReview('next');
    }
    if(e.target.closest('.prev:not(.form)')){
        setReview('prev');
    }
    if(e.target.closest('.prev.form')){
        hidden_visible("#form","#review")
    }
});
document.addEventListener('submit',function (e){
    e.preventDefault();
    if(e.target.closest('#review') && document.querySelector('.success')){
        var phone = document.querySelector('.phone').value;
        carrotquest.identify([{op:"update_or_create",key:"$phone",value:phone}])
        carrotquest.replied();
        hidden_visible('#review','.thank-form');
        setTimeout(carrotquest.close,5000);
    }
})

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
var currentReviewId = 0;

function setReview(direction){
    if(direction === "next" && currentReviewId !== reviews.length - 1){
        currentReviewId = currentReviewId + 1
    }
    else if(direction === "next" && currentReviewId === reviews.length -1){
        currentReviewId = 0;
    }
    if(direction === "prev"){
        if(currentReviewId !== 0){
            currentReviewId = currentReviewId - 1
        }
        else{
            currentReviewId = reviews.length -1
        }
    }
    if(direction === "first"){
        currentReviewId = 0;
    }
    document.querySelector('.review_text').innerHTML = reviews[currentReviewId].text;
    document.querySelector('.reviewer_name').textContent = reviews[currentReviewId].name;
    document.querySelector('.avatar').src = reviews[currentReviewId].avatar;
    document.querySelector('.reviewer_pos').textContent = reviews[currentReviewId].pos;
}

var reviews = [
    {
        id:0,
        imgClass:"house",
        avatar:"https://files.carrotquest.app/message-images/52233/52233-1697535053510-gjxjwlyp.png",
        pos:"Адвокат, г.Щёлково",
        text:"<p>Команда Дмитрия подготовила продающие тексты и начала продвижение сайта. Клиенты приходят действительно качественные. Юристы — это скептики, вы же умеете ломать их стереотипы.</p>",
        name:"Кузнецова Ирина",
    },
    {

        id:1,
        imgClass:"tree",
        avatar:"https://files.carrotquest.app/message-images/52233/52233-1697535454776-37nuyiis.png",
        pos:"Адвокат, г. Москва",
        text:"<p>Выражаю искреннюю благодарность за исполнение моего персонального сайта. Подкупает ваша отзывчивость и срочное выполнение пожеланий по дизайну и оформлению сайта, готовность все доходчиво объяснить.</p>",
        name:"Ким Борис",
    },
    {
        id:2,
        imgClass:"flashlight",
        avatar:"https://files.carrotquest.app/message-images/52233/52233-1697535090658-rvciilns.png",
        pos:"Адвокат, г. Москва",
        text:"<p>Все, что было заявлено, — исполнено! Проделана огромная работа по доработке и продвижению сайта. С помощью ваших эффективных средств удалось улучшить рекламную кампанию и привлечь новых клиентов.</p>",
        name:"Сулейманов Эльдар",
    },
]

document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function(item) {
  item.addEventListener("click", carrotquest.close);
});


function trackData(data) {
  carrotquest.identify({["$"+data]: document.querySelector(".cq_popup-input[name="+ data +"]").value });
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
})("#review");