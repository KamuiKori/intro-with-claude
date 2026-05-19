const cqpopup_name = "5.1Б Поп-ап на попытку ухода (Таланты)",
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
      setTgLink('#')
  }
});
function setTgLink(link){
    var tgLink = link;
    tgLink += top.carrotquest.data.user.user_signature.telegram ? `?start=${top.carrotquest.data.user.user_signature.telegram}` : '';
    document.querySelector(".link").href = tgLink;
}

document.addEventListener('click',function (e){
    if(e.target.closest('.link')){
        carrotquest.clicked();
    }
    if(e.target.closest('.cq-popup__bg:not(.hide)') || e.target.closest('.cq-popup__close:not(.hide)')){
        carrotquest.close();
    }
    if(e.target.closest('.cq-popup__bg.hide') || e.target.closest('.cq-popup__close.hide')){
        hidden_visible('#phone_form','#form');
        document.querySelector('.cq-popup__bg').classList.remove('hide');
        document.querySelector('.cq-popup__close').classList.remove('hide');
    }
});

document.addEventListener('submit',function (e){
    e.preventDefault();
    if(document.querySelector('.success') && document.querySelector('#checkbox').checked){
        var phone = document.querySelector('#phone').value;
        carrotquest.replied();
        carrotquest.identify([
            {op:'update_or_create',key:'$phone',value:phone},
            {op:'update_or_create',key:'Источник CQ',value:'Значение источника'},
        ]);
        document.querySelector('.cq-popup__bg').classList.remove('hide');
        document.querySelector('.cq-popup__close').classList.remove('hide');
        hidden_visible('#phone_form','#thank')
    }
    if(!document.querySelector('#checkbox').checked){
        document.querySelector('#checkbox').classList.add('error')
    }
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
})("#phone_form");