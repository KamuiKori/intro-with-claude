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

var questionKeys = {
  'step-1': 'Что хочет',
  'step-2': 'С кем пойдет',
  'step-3': 'Что важно при выборе',
  'step-4': 'Формат'
};

var quizSteps = ['step-1', 'step-2', 'step-3', 'step-4', 'step-contact'];
var currentStepIndex = 0;
var answerIndexes = {};

var podborkaMap = {
  '1111': 1, '1113': 1, '1131': 1, '1133': 1,
  '1211': 1, '1213': 1, '1231': 1, '1233': 1,
  '1311': 1, '1313': 1, '1331': 1, '1333': 1,
  '2111': 2, '2113': 2, '2211': 2, '2213': 2,
  '3111': 3, '3113': 3, '3121': 3, '3123': 3, '3131': 3, '3133': 3,
  '3211': 3, '3213': 3, '3221': 3, '3223': 3, '3231': 3, '3233': 3,
  '3311': 3, '3313': 3, '3321': 3, '3323': 3, '3331': 3, '3333': 3,
  '2131': 4, '2133': 4, '2231': 4, '2233': 4,
  '2311': 4, '2313': 4, '2331': 4, '2333': 4,
  '4111': 5, '4112': 5, '4113': 5, '4121': 5, '4122': 5, '4123': 5,
  '4131': 5, '4132': 5, '4133': 5, '4141': 5, '4142': 5, '4143': 5,
  '4211': 5, '4212': 5, '4213': 5, '4221': 5, '4222': 5, '4223': 5,
  '4231': 5, '4232': 5, '4233': 5, '4241': 5, '4242': 5, '4243': 5,
  '4311': 5, '4312': 5, '4313': 5, '4321': 5, '4322': 5, '4323': 5,
  '4331': 5, '4332': 5, '4333': 5, '4341': 5, '4342': 5, '4343': 5,
  '4411': 5, '4412': 5, '4413': 5, '4421': 5, '4422': 5, '4423': 5,
  '4431': 5, '4432': 5, '4433': 5, '4441': 5, '4442': 5, '4443': 5,
  '1411': 5, '1412': 5, '1413': 5, '1421': 5, '1422': 5, '1423': 5,
  '1431': 5, '1432': 5, '1433': 5,
  '2411': 5, '2412': 5, '2413': 5, '2421': 5, '2422': 5, '2423': 5,
  '2431': 5, '2432': 5, '2433': 5,
  '3411': 5, '3412': 5, '3413': 5, '3421': 5, '3422': 5, '3423': 5,
  '3431': 5, '3432': 5, '3433': 5,
  '1122': 5, '1132': 5, '1142': 5, '1222': 5, '1232': 5, '1242': 5,
  '1322': 5, '1332': 5, '1342': 5,
  '2122': 5, '2132': 5, '2142': 5, '2222': 5, '2232': 5, '2242': 5,
  '2322': 5, '2332': 5, '2342': 5,
  '3122': 5, '3132': 5, '3142': 5, '3222': 5, '3232': 5, '3242': 5,
  '3322': 5, '3332': 5, '3342': 5,
  '1121': 6, '1123': 6, '1141': 6, '1143': 6,
  '1221': 6, '1223': 6, '1241': 6, '1243': 6,
  '1321': 6, '1323': 6, '1341': 6, '1343': 6,
  '2121': 6, '2123': 6, '2141': 6, '2143': 6,
  '2221': 6, '2223': 6, '2241': 6, '2243': 6,
  '2321': 6, '2323': 6, '2341': 6, '2343': 6
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
    document.querySelector("#btn-telegram").href = tgLink;
}

function showStep(stepId) {
  document.querySelectorAll('.quiz-card').forEach(function(card) {
    card.classList.add('hidden');
  });
  document.getElementById(stepId).classList.remove('hidden');
}

document.addEventListener('click', function(e) {
  var answerBtn = e.target.closest('.answer-btn');
  if (!answerBtn) return;

  var card = answerBtn.closest('.quiz-card');
  if (!card || card.classList.contains('hidden')) return;

  card.querySelectorAll('.answer-btn').forEach(function(btn) {
    btn.classList.remove('active');
  });

  answerBtn.classList.add('active');

  var btnNext = card.querySelector('.btn-next');
  if (btnNext) {
    btnNext.disabled = false;
  }
});

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
  var allBtns = Array.prototype.slice.call(card.querySelectorAll('.answer-btn'));
  answerIndexes[stepId] = allBtns.indexOf(selectedBtn) + 1;

  carrotquest.track(cqpopup_name + ' - Ответил в квизе на ' + questionNumber + ' вопрос');

  var leadKey = questionKeys[stepId];
  if (leadKey) {
    carrotquest.identify([{ op: 'update_or_create', key: leadKey, value: answer }]);
  }

  currentStepIndex++;
  var nextStepId = quizSteps[currentStepIndex];
  if (nextStepId) {
    if (nextStepId === 'step-contact') {
      var combo = quizSteps.slice(0, 4).map(function(s) { return answerIndexes[s] || 0; }).join('');
      var podborka = podborkaMap[combo] ? 'Подборка ' + podborkaMap[combo] : null;
      carrotquest.track('Ответил на все вопросы - ' + cqpopup_name);
      if (podborka) {
        carrotquest.identify([{ op: 'update_or_create', key: 'Подборка', value: podborka }]);
      } else {
        carrotquest.track('Подборка не найдена - ' + cqpopup_name + ' - ' + combo);
      }
    }
    showStep(nextStepId);
  }
});

document.addEventListener('click', function(e) {
  var btnPrev = e.target.closest('.btn-prev');
  if (!btnPrev) return;

  if (currentStepIndex > 0) {
    currentStepIndex--;
    var prevStepId = quizSteps[currentStepIndex];
    showStep(prevStepId);

    var prevCard = document.getElementById(prevStepId);
    var btnNext = prevCard ? prevCard.querySelector('.btn-next') : null;
    if (btnNext) {
      var hasSelected = prevCard.querySelector('.answer-btn.active');
      btnNext.disabled = !hasSelected;
    }
  }
});

document.addEventListener('click', function(e) {
  if (e.target.id === 'btn-email') {
    showStep('step-email');
  }
});

document.addEventListener('click', function(e) {
  var tgBtn = e.target.closest('#btn-telegram');
  if (tgBtn) {
    carrotquest.clicked();
    carrotquest.track('Выбрал тг - ' + cqpopup_name);
  }
});

document.addEventListener('click', function(e) {
  if (e.target.id !== 'btn-submit') return;

  var emailInput = document.getElementById('email-input');
  var cb1 = document.getElementById('cb1');
  var cb2 = document.getElementById('cb2');

  if (!emailInput) return;

  var email = emailInput.value.trim();

  if (!email || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    emailInput.closest('.email-field').style.borderBottomColor = '#c0392b';
    return;
  }

  if (cb1 && !cb1.checked) return;

  emailInput.closest('.email-field').style.borderBottomColor = '';

  carrotquest.replied();
  carrotquest.track('Оставил email - ' + cqpopup_name);
  carrotquest.identify([
    { op: 'update_or_create', key: '$email', value: email },
    { op: 'update_or_create', key: 'Согласие на обработку данных', value: cb1 ? cb1.checked : false },
    { op: 'update_or_create', key: 'Ознакомлен с политикой', value: cb2 ? cb2.checked : false }
  ]);

  showStep('step-thanks');

  setTimeout(function() {
    carrotquest.close();
  }, 3000);
});

document.addEventListener('click', function(e) {
  if (e.target.closest('.card-close') || e.target.classList.contains('cq-popup__bg')) {
    carrotquest.close();
  }
});
