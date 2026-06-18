var cqpopup_name = "10 Попап - факт";

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

document.addEventListener("readystatechange", function() {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
    setTgLink('https://t.me/theatresovremennik_bot');
  }
});

function setTgLink(link) {
  var tgLink = link;
  try {
    var sig = top.carrotquest.data.user.user_signature.telegram;
    if (sig) tgLink += '?start=' + sig;
  } catch(e) {}
  var btn = document.getElementById('btn-telegram');
  if (btn) btn.href = tgLink;
}

function showStep(stepId) {
  document.querySelectorAll('.quiz-card').forEach(function(card) {
    card.classList.add('hidden');
  });
  document.getElementById(stepId).classList.remove('hidden');
}

document.addEventListener('click', function(e) {
  var btn = e.target.closest('#btn-true, #btn-false');
  if (!btn) return;

  var isTrue = btn.id === 'btn-true';
  var answer = isTrue ? 'Правда' : 'Неправда';

  carrotquest.track(cqpopup_name + ' - Ответил: ' + answer);
  carrotquest.identify([{ op: 'update_or_create', key: 'Ответ на квиз Современник - факт', value: answer }]);

  showStep('step-answer');
});

document.addEventListener('click', function(e) {
  var btn = e.target.closest('#btn-telegram');
  if (!btn) return;

  carrotquest.clicked();
  carrotquest.track(cqpopup_name + ' - Выбрал Telegram');
  setTimeout(function() { carrotquest.close(); }, 1000);
});

document.addEventListener('click', function(e) {
  if (e.target.id !== 'btn-email') return;

  carrotquest.track(cqpopup_name + ' - Выбрал Email');
  showStep('step-email');
});

document.addEventListener('click', function(e) {
  if (!e.target.closest('#btn-submit')) return;

  var emailInput = document.getElementById('email-input');
  var cb1 = document.getElementById('cb1');
  var cb2 = document.getElementById('cb2');
  if (!emailInput) return;

  var email = emailInput.value.trim();
  var emailField = emailInput.closest('.email-field');

  if (!email || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    if (emailField) emailField.style.borderBottomColor = '#c0392b';
    return;
  }

  if ((cb1 && !cb1.checked) || (cb2 && !cb2.checked)) {
    if (cb1 && !cb1.checked) cb1.style.outline = '1px solid #c0392b';
    if (cb2 && !cb2.checked) cb2.style.outline = '1px solid #c0392b';
    return;
  }

  if (emailField) emailField.style.borderBottomColor = '';
  if (cb1) cb1.style.outline = '';
  if (cb2) cb2.style.outline = '';

  carrotquest.replied();
  carrotquest.track(cqpopup_name + ' - Оставил email');
  carrotquest.identify([
    { op: 'update_or_create', key: '$email', value: email },
    { op: 'update_or_create', key: 'Согласие на обработку данных', value: cb1 ? cb1.checked : false },
    { op: 'update_or_create', key: 'Ознакомлен с политикой', value: cb2 ? cb2.checked : false }
  ]);

  showStep('step-thanks');
  setTimeout(function() { carrotquest.close(); }, 3000);
});

document.addEventListener('click', function(e) {
  if (e.target.closest('.card-close') || e.target.classList.contains('cq-popup__bg')) {
    carrotquest.close();
  }
});
