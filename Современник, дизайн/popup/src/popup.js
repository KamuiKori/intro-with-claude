// ===== СОВРЕМЕННИК КВИЗ =====
var cqpopup_name = "Современник - Квиз";

var carrotquest = {
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
    var data = { command: "carrotquest.animationPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name };
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

// ===== МАППИНГ ВОПРОСОВ =====
// Ключи для свойств лида
var questionKeys = {
  'step-1': 'Что хочет',
  'step-2': 'С кем пойдет',
  'step-3': 'Что важно при выборе',
  'step-4': 'Формат'
};

// Порядок шагов квиза
var quizSteps = ['step-1', 'step-2', 'step-3', 'step-4', 'step-contact'];
var currentStepIndex = 0;

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener("readystatechange", function() {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});

// ===== ПЕРЕКЛЮЧЕНИЕ ШАГОВ =====
function showStep(stepId) {
  document.querySelectorAll('.quiz-card').forEach(function(card) {
    card.classList.add('hidden');
  });
  document.getElementById(stepId).classList.remove('hidden');
}

// ===== ВЫБОР ОТВЕТА =====
document.addEventListener('click', function(e) {
  var answerBtn = e.target.closest('.answer-btn');
  if (!answerBtn) return;

  var card = answerBtn.closest('.quiz-card');
  if (!card || card.classList.contains('hidden')) return;

  // Снимаем активный класс со всех ответов в текущем шаге
  card.querySelectorAll('.answer-btn').forEach(function(btn) {
    btn.classList.remove('active');
  });

  // Выделяем выбранный ответ
  answerBtn.classList.add('active');

  // Активируем кнопку «Далее»
  var btnNext = card.querySelector('.btn-next');
  if (btnNext) {
    btnNext.disabled = false;
  }
});

// ===== КНОПКА «ДАЛЕЕ» =====
document.addEventListener('click', function(e) {
  var btnNext = e.target.closest('.btn-next');
  if (!btnNext || btnNext.disabled) return;

  var card = btnNext.closest('.quiz-card');
  if (!card) return;

  var stepId = card.id;
  var selectedBtn = card.querySelector('.answer-btn.active');
  if (!selectedBtn) return;

  var answer = selectedBtn.dataset.value;
  var questionNumber = parseInt(stepId.replace('step-', ''), 10);

  // Записываем событие и свойство лида
  carrotquest.track(cqpopup_name + ' - Ответил в квизе на ' + questionNumber + ' вопрос');

  var leadKey = questionKeys[stepId];
  if (leadKey) {
    carrotquest.identify([{ op: 'update_or_create', key: leadKey, value: answer }]);
  }

  // Переходим к следующему шагу
  currentStepIndex++;
  var nextStepId = quizSteps[currentStepIndex];
  if (nextStepId) {
    showStep(nextStepId);
  }
});

// ===== КНОПКА «НАЗАД» =====
document.addEventListener('click', function(e) {
  var btnPrev = e.target.closest('.btn-prev');
  if (!btnPrev) return;

  if (currentStepIndex > 0) {
    currentStepIndex--;
    var prevStepId = quizSteps[currentStepIndex];
    showStep(prevStepId);

    // Если был выбран ответ — кнопка «Далее» уже активна
    var prevCard = document.getElementById(prevStepId);
    var btnNext = prevCard ? prevCard.querySelector('.btn-next') : null;
    if (btnNext) {
      var hasSelected = prevCard.querySelector('.answer-btn.active');
      btnNext.disabled = !hasSelected;
    }
  }
});

// ===== КНОПКА «НА ПОЧТУ» =====
document.addEventListener('click', function(e) {
  if (e.target.id === 'btn-email') {
    showStep('step-email');
  }
});

// ===== КНОПКА «В TELEGRAM» =====
document.addEventListener('click', function(e) {
  var tgBtn = e.target.closest('#btn-telegram');
  if (tgBtn) {
    carrotquest.clicked();
    // Ссылка открывается нативно через href в <a>
  }
});

// ===== ОТПРАВКА EMAIL =====
document.addEventListener('click', function(e) {
  if (e.target.id !== 'btn-submit') return;

  var emailInput = document.getElementById('email-input');
  var cb1 = document.getElementById('cb1');
  var cb2 = document.getElementById('cb2');

  if (!emailInput) return;

  var email = emailInput.value.trim();

  // Валидация email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailInput.style.borderBottomColor = '#c0392b';
    emailInput.closest('.email-field').style.borderBottomColor = '#c0392b';
    return;
  }

  // Валидация чекбоксов (оба должны быть отмечены)
  if (cb1 && !cb1.checked) {
    return;
  }
  if (cb2 && !cb2.checked) {
    return;
  }

  // Сбрасываем ошибку
  if (emailInput.closest('.email-field')) {
    emailInput.closest('.email-field').style.borderBottomColor = '';
  }

  // Записываем события и свойства лида
  carrotquest.replied();
  carrotquest.track(cqpopup_name + ' - Оставил email');
  carrotquest.identify([
    { op: 'update_or_create', key: '$email', value: email }
  ]);

  // Закрываем попап через 1.5 сек
  setTimeout(function() {
    carrotquest.close();
  }, 1500);
});

// ===== ЗАКРЫТИЕ =====
document.addEventListener('click', function(e) {
  if (e.target.closest('.card-close') || e.target.classList.contains('cq-popup__bg')) {
    carrotquest.close();
  }
});

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('cq-popup__bg')) {
    carrotquest.close();
  }
});
