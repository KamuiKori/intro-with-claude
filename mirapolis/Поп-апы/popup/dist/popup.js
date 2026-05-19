"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var cqpopup_name = "4.1 Квиз",
  carrotquest = {
    track: function track(eventName, params) {
      parent.window.carrotquest.track(eventName, params);
    },
    identify: function identify(props) {
      parent.window.carrotquest.identify(props);
    },
    trackMessageInteraction: function trackMessageInteraction(sendingId, type) {
      parent.window.carrotquest.trackMessageInteraction(sendingId, type);
    },
    animation: function animation() {
      var data = {
        command: "carrotquest.animationPopup",
        "id": "{{ sending_id }}",
        "cqpopup_name": cqpopup_name
      };
      top.postMessage(data, "*");
    },
    close: function close() {
      var data = {
        command: "carrotquest.closePopup",
        "id": "{{ sending_id }}"
      };
      top.postMessage(data, "*");
    },
    replied: function replied() {
      this.trackMessageInteraction("{{ sending_id }}", "replied");
      this.track('Ответил в попап');
      this.track("Коммуникации: Ответил на сообщение - " + cqpopup_name);
    },
    clicked: function clicked() {
      this.trackMessageInteraction("{{ sending_id }}", "clicked");
      this.track('Перешел по ссылке в попапе');
      this.track("Коммуникации: Перешел по ссылке в сообщении - " + cqpopup_name);
    },
    read: function read() {
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
  }
});
var numberOfCurrentSlide = 1;
document.addEventListener('click', function (e) {
  if (e.target.closest('.answer') && e.target.closest('.cq-popup__form-content:not(.hidden):not(.disable)')) {
    var btnNext = document.querySelector('.next');
    btnNext.style = "cursor:pointer";
    btnNext.disabled = false;
    if (e.target.closest('.answer').querySelector('.hidden-answer')) {
      e.target.closest('.answer').querySelector('.hidden-answer').style.opacity = "1";
    }
    var curSlide = document.querySelector('.cq-popup__form-content:not(.hidden)');
    curSlide.querySelectorAll('.answer').forEach(function (item) {
      item.classList.remove('active');
    });
    e.target.closest('.answer').classList.add('active');
  }
  if (e.target.closest('#another_input')) {
    e.target.closest('.answer').click();
    e.target.closest('#another_input').focus();
    var btnNext = document.querySelector('.next');
    btnNext.style = "cursor:not-allowed";
    btnNext.disabled = true;
  }
  if (e.target.closest('#another_answer')) {
    e.target.closest('#another_answer').querySelector('#another_input').click();
    var btnNext = document.querySelector('.next');
    btnNext.style = "cursor:not-allowed";
    btnNext.disabled = true;
  }
  if (e.target.closest('.form_subtitle a')) {
    carrotquest.track(cqpopup_name + ' - скачал файл');
  }
});
document.querySelector('#another_input').addEventListener('input', function (e) {
  var btnNext = document.querySelector('.next');
  if (e.target.value.length > 0) {
    btnNext.style = "cursor:pointer";
    btnNext.disabled = false;
  } else {
    btnNext.style = "cursor:not-allowed";
    btnNext.disabled = true;
  }
});
document.addEventListener('submit', function (e) {
  e.preventDefault();
  if (e.target.closest('.end-form')) {
    var name = document.querySelector('.name').value;
    if (document.querySelector('.form-ready') && document.querySelector('#checkbox').checked && name) {
      var phone = document.querySelector('.phone').value;
      carrotquest.replied();
      carrotquest.identify([{
        op: "update_or_create",
        key: "$phone",
        value: phone
      }, {
        op: "update_or_create",
        key: "$name",
        value: name
      }, {
        op: "update_or_create",
        key: "Источник CQ",
        value: document.querySelector('[name="three"]:checked').getAttribute('data-sourse-name')
      }]);
      hidden_visible('.end-form', '.email-form');
    }
    if (!document.querySelector('#checkbox').checked) {
      document.querySelector('#checkbox').classList.add('error');
    }
  }
  if (e.target.closest('.email-form')) {
    var email = document.querySelector('.email').value;
    if (document.querySelector('#checkbox2').checked && email) {
      carrotquest.track(cqpopup_name + ' - подписался');
      carrotquest.identify([{
        op: "update_or_create",
        key: "$email",
        value: email
      }]);
      hidden_visible('.email-form', '.thank');
    }
    if (!document.querySelector('#checkbox2').checked) {
      document.querySelector('#checkbox2').classList.add('error');
    }
  }
});
document.querySelector('input.next').addEventListener('click', function (e) {
  var btnNext = document.querySelector('.next');
  btnNext.style = "cursor:not-allowed";
  btnNext.disabled = true;
  var number = numberOfCurrentSlide;
  var nextSlide = document.querySelector('.cq-popup__form-content:not(.hidden)').nextElementSibling;
  var currentSlide = document.querySelector('.cq-popup__form-content:not(.hidden)');
  var answers = currentSlide.querySelectorAll('input:checked');
  var answersText = '';
  var q = '';
  switch (currentSlide.id) {
    case 's1':
      q = 'HR-задача';
      break;
    case 's2':
      q = 'Количество сотрудников';
      break;
    case 's3':
      q = 'Роль';
      break;
  }
  if (answers != null) {
    answers.forEach(function (item) {
      item = item.nextElementSibling.textContent;
      answersText += " " + item;
    });
    if (answersText.trim().toLowerCase() === 'другое:') {
      answersText = document.querySelector('#another_input').value;
    }
    carrotquest.track(cqpopup_name + ' - Ответил в квизе на ' + number + ' вопрос');
    carrotquest.identify([{
      op: 'update_or_create',
      key: q,
      value: answersText.trim()
    }]);
  }
  if (nextSlide) {
    slideToggler(currentSlide, nextSlide);
    progress("next");
    numberOfCurrentSlide++;
    toggleButtonPrev(numberOfCurrentSlide);
    isAnswer();
  }
  if (!nextSlide) {
    hidden_visible('.cq-popup__body', '.phone_form');
    var answerID = document.querySelector('[name="three"]:checked').id;
    setFinalSlides(answerID);
  }
});
function setFinalSlides(answerID) {
  var phoneTitle, phoneSubtitle, imgPC, imgMOB, emailTitle, emailSubtitle;
  if (answerID === 'naim') {
    phoneTitle = 'Ищете способ ускорить найм и избежать дорогостоящих ошибок?';
    phoneSubtitle = 'Мираполис Таланты позволит автоматизировать подбор и найти лучших кандидатов. Для <span class="bold">бесплатного доступа на 14 дней </span>к платформе оставьте номер телефона.';
    imgPC = 'https://files.carrotquest.app/message-images/68184/68184-1756368106334-ir1mi437.png';
    imgMOB = 'https://files.carrotquest.app/message-images/68184/68184-1756368121921-24bqvg5e.png';
    emailTitle = 'Спасибо!';
    emailSubtitle = 'Наш эксперт свяжется с Вами, чтобы открыть доступ к платформе. А чтобы не пропустить полезные советы и вебинары, подпишитесь на наш блог.';
  } else if (answerID === 'adapt') {
    phoneTitle = 'Хотите, чтобы новые сотрудники быстрее включались в работу и оставались в компании?';
    phoneSubtitle = 'Получите <span class="bold">бесплатный чек-лист «Адаптация 30-60-90: быстрый старт» </span>и начните удерживать таланты уже сейчас! Оставьте телефон — мы пришлём Вам материал.';
    imgPC = 'https://files.carrotquest.app/message-images/68184/68184-1756368224684-m8vkkmwa.png';
    imgMOB = 'https://files.carrotquest.app/message-images/68184/68184-1756368237867-oocgorf5.png';
    emailTitle = 'Спасибо!';
    emailSubtitle = 'Ваш чек-лист <span class="bold">«Адаптация 30-60-90: быстрый старт для новых сотрудников»</span> уже <a href="#" target="_blank">готов к загрузке.</a><br><br>А чтобы не пропустить полезные советы и вебинары, подпишитесь на наш блог.';
  } else if (answerID === 'education') {
    phoneTitle = 'Узнайте, как лидеры рынка развивают сотрудников';
    phoneSubtitle = 'Получите инсайды и рекомендации, <span class="bold">чтобы вывести обучение на новый уровень!</span><br><br>Оставьте телефон — мы расскажем все подробно.';
    imgPC = 'https://files.carrotquest.app/message-images/68184/68184-1756368485956-4htg4gzq.png';
    imgMOB = 'https://files.carrotquest.app/message-images/68184/68184-1756368500401-ror7h4tv.png';
    emailTitle = 'Спасибо!';
    emailSubtitle = 'Наш эксперт свяжется с вами в ближайшее время.А чтобы не пропустить полезные советы и вебинары, подпишитесь на наш блог.';
  } else if (answerID === 'reserv') {
    phoneTitle = 'Хотите видеть реальные точки роста и построить команду мечты?';
    phoneSubtitle = 'Получите гайд <span class="bold">«Как составить опросник 360 градусов: частые ошибки».</span> Оставьте телефон — и мы дадим вам инструмент для развития.';
    imgPC = 'https://files.carrotquest.app/message-images/68184/68184-1756368590395-xe4fc9xe.png';
    imgMOB = 'https://files.carrotquest.app/message-images/68184/68184-1756368604880-co76zgem.png';
    emailTitle = 'Спасибо!';
    emailSubtitle = 'Ваш гайд <span class="bold">«Как составить опросник 360° и избежать ошибок»</span> <a href="#" target="_blank">готов к загрузке.</a><br><br>А чтобы не пропустить полезные советы и вебинары, подпишитесь на наш блог.';
  } else if (answerID === 'razvitie' || answerID === 'another_task') {
    phoneTitle = 'Попробуйте 14 дней бесплатно систему Мираполис Таланты и забирайте бонус!';
    phoneSubtitle = 'Практическое руководство <span class="bold">«51 метрика для измерения эффективности HR-процессов»</span> позволит легко говорить с бизнесом на языке цифр.';
    imgPC = 'https://files.carrotquest.app/message-images/68184/68184-1756368799686-142oiyxt.png';
    imgMOB = 'https://files.carrotquest.app/message-images/68184/68184-1756368815314-y8cyuou2.png';
    emailTitle = 'Спасибо!';
    emailSubtitle = 'Вот Ваш подарок — <a href="#" target="_blank">книга «51 метрика для измерения эффективности HR-процессов».</a><br><br>А чтобы не пропустить полезные советы и вебинары, подпишитесь на наш блог.';
  }
  document.querySelector('.end-form .form_title').innerHTML = phoneTitle;
  document.querySelector('.end-form .form_subtitle').innerHTML = phoneSubtitle;
  document.querySelector('.phone_form img.pc').src = imgPC;
  document.querySelector('.phone_form img.mob').src = imgMOB;
  document.querySelector('.email-form .form_title').innerHTML = emailTitle;
  document.querySelector('.email-form .form_subtitle').innerHTML = emailSubtitle;
}
document.querySelector('.prev').addEventListener('click', function () {
  numberOfCurrentSlide--;
  var currentSlide = document.querySelector('.cq-popup__form-content:not(.hidden)');
  var prevSlide = currentSlide.previousElementSibling;
  var numberOfPrevSlide = document.querySelector('.progress-now');
  numberOfPrevSlide.textContent = (numberOfPrevSlide.textContent--).toString();
  toggleButtonPrev(numberOfCurrentSlide);
  slideToggler(currentSlide, prevSlide);
  progress("prev");
  isAnswer();
});
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {
  item.addEventListener("click", carrotquest.close);
});
function toggleButtonPrev(num) {
  if (num === 1) {
    document.querySelector('.prev').classList.add('hidden');
    document.querySelector('.next').classList.add('rounded');
  } else {
    document.querySelector('.prev').classList.remove('hidden');
    document.querySelector('.next').classList.remove('rounded');
  }
}
function isAnswer() {
  var email = document.querySelector('.cq-popup__form-content:not(.hidden) .email-form input[type="email"]');
  var name = document.querySelector('.cq-popup__form-content:not(.hidden) .email-form input[type="name"]');
  var btnNext = document.querySelector('.next');
  if (document.querySelector('.cq-popup__form-content:not(.hidden) input:checked')) {
    btnNext.disabled = false;
    btnNext.style = "cursor:pointer;";
  } else if (email) {
    if (email.value) {
      btnNext.disabled = false;
      btnNext.style = "cursor:pointer;";
    }
    email.addEventListener('input', function () {
      if (email.value.length > 0) {
        btnNext.disabled = false;
        btnNext.style = "cursor:pointer;";
      }
    });
  }
}
function trackEmail() {
  var numberOfPrevSlide = document.querySelector('.progress-now');
  if (numberOfPrevSlide === 2) {}
}
function progress(arg) {
  if (arg === "next") {
    document.querySelector('.progress-now').textContent++;
  } else {
    document.querySelector('.progress-now').textContent--;
  }
  var now = document.querySelector('.progress-now').textContent;
  var count = document.querySelector('.progress-all').textContent;
  document.querySelector('.progress-box-active').style.width = Math.floor(now * 100 / count) + "%";
}
function trackData(data) {
  carrotquest.identify(_defineProperty({}, "$" + data, document.querySelector(".cq_popup-input[name=" + data + "]").value));
}
function hidden_visible(elem1, elem2) {
  document.querySelector(elem1).classList.add("hidden");
  document.querySelector(elem2).classList.remove("hidden");
}
function slideToggler(element1, element2) {
  element1.classList.add("hidden");
  element2.classList.remove("hidden");
}
(function (form) {
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