var quizAnswers = [],
    cqpopup_name = "Квиз Искусствоведение",
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

var THRESHOLDS = {
  natural:    { A: 60, I: 60, S: 50, engagement: 1 },
  researcher: { I: 60 },
  educator:   { S: 60, A: 50 }
};

var SCORING = {
  "1": [{ A: 2, I: 1 }, { A: 2 }, { A: 1, I: 2 }],
  "2": [{ I: 3 }, { I: 2 }, { flags: ["low_investigative"] }],
  "3": [{ S: 3 }, {}, { S: 2, A: 1 }],
  "4": [{ goal: "career" }, { goal: "depth", A: 1 }, { goal: "switch" }, { goal: "hobby", S: 1 }],
  "5": [{ engagement: 2, A: 1, I: 1 }, { engagement: 1 }, { engagement: 0, flags: ["beginner"] }],
  "6": [{}, {}, { flags: ["money_objection"] }]
};

var ARCHETYPE_NAMES = {
  natural:    "Прирожденный искусствовед",
  researcher: "Исследователь",
  educator:   "Просветитель",
  amateur:    "Любитель на старте"
};

var quizScores     = { A: 0, I: 0, S: 0 };
var quizEngagement = 0;
var quizGoal       = null;
var quizFlags      = [];
var cameFromPlan   = false;

document.addEventListener("readystatechange", function() {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});

document.querySelectorAll(".quiz-close, .cq-popup__bg").forEach(function(el) {
  el.addEventListener("click", function() {
    var onFinal = !document.getElementById("s-final").classList.contains("hidden");
    if (onFinal && !cameFromPlan) {
      showScreen("wait");
    } else {
      carrotquest.close();
    }
  });
});

document.querySelector(".js-start-quiz").addEventListener("click", function() {
  carrotquest.track(cqpopup_name + " - Нажал ПРОЙТИ ТЕСТ");
  showScreen(1);
});

document.querySelector(".js-btn-plan").addEventListener("click", function() {
  carrotquest.track(cqpopup_name + " - Нажал ПРОСТО ХОЧУ УЧЕБНЫЙ ПЛАН");
  window.open("https://agena-art.getcourse.ru/dpo-uchebnyi-plan?utm_source=carrotquest&utm_medium=quiz&utm_campaign=6.1", "_blank");
});

document.addEventListener("click", function(e) {
  var answer = e.target.closest(".quiz-answer");
  if (!answer) return;
  var screen = answer.closest(".quiz-screen");
  if (!screen || screen.classList.contains("hidden")) return;

  screen.querySelectorAll(".quiz-answer").forEach(function(a) {
    a.classList.remove("active");
  });
  answer.classList.add("active");

  var nextBtn = screen.querySelector(".quiz-btn--next");
  if (nextBtn) {
    nextBtn.disabled = false;
  }
});

document.addEventListener("click", function(e) {
  var btn = e.target.closest(".quiz-btn--next");
  if (!btn || btn.disabled) return;
  var screen = btn.closest(".quiz-screen");
  var screenId = screen.id;

  var checked = screen.querySelector("input[type='radio']:checked");
  if (checked) {
    var answerText = checked.nextElementSibling.textContent.trim();
    var qNum = screenId.replace("s", "");
    var qLabel = getQuestionLabel(qNum);
    var radios = Array.prototype.slice.call(screen.querySelectorAll("input[type='radio']"));
    applyScore(qNum, radios.indexOf(checked));

    quizAnswers.push({
      op: "update_or_create",
      key: cqpopup_name + " - " + qLabel,
      value: answerText
    });
  }

  var nextNum = parseInt(screenId.replace("s", ""), 10) + 1;
  if (nextNum > 6) {
    var result = calculateResult();
    quizAnswers.push(
      { op: "update_or_create", key: cqpopup_name + " - Архетип",          value: result.fit_type },
      { op: "update_or_create", key: cqpopup_name + " - Балл совпадения",  value: result.fit_score },
      { op: "update_or_create", key: cqpopup_name + " - A%",               value: result.A_pct },
      { op: "update_or_create", key: cqpopup_name + " - I%",               value: result.I_pct },
      { op: "update_or_create", key: cqpopup_name + " - S%",               value: result.S_pct },
      { op: "update_or_create", key: cqpopup_name + " - Вовлеченность",    value: result.engagement },
      { op: "update_or_create", key: cqpopup_name + " - Цель",             value: result.goal },
      { op: "update_or_create", key: cqpopup_name + " - Температура лида", value: result.lead_temp },
      { op: "update_or_create", key: cqpopup_name + " - Флаги",            value: result.flags.join(", ") || "none" }
    );
    carrotquest.identify(quizAnswers);
    carrotquest.track(cqpopup_name + " - Завершил квиз");
    var archetypeName = ARCHETYPE_NAMES[result.fit_type] || result.fit_type;
    var waitTitle = document.querySelector("#s-wait .final-title");
    if (waitTitle) waitTitle.textContent = "Подождите! По результатам теста Вы — " + archetypeName + ".";
    showScreen("final");
  } else {
    showScreen(nextNum);
  }
});

document.addEventListener("click", function(e) {
  if (!e.target.closest(".quiz-btn--back")) return;
  var screen = e.target.closest(".quiz-screen");
  var prevNum = parseInt(screen.id.replace("s", ""), 10) - 1;
  if (prevNum < 1) prevNum = 1;
  showScreen(prevNum);
});

document.querySelector(".js-btn-telegram").addEventListener("click", function() {
  carrotquest.replied();
  carrotquest.track(cqpopup_name + " - Выбрал TELEGRAM");
  carrotquest.identify([{
    op: "update_or_create",
    key: cqpopup_name + " - Канал связи",
    value: "Telegram"
  }]);
  var tgLink = "https://t.me/agena_art_manager_bot";
  tgLink += top.carrotquest.data.user.user_signature.telegram ? "?start=" + top.carrotquest.data.user.user_signature.telegram : "";
  window.open(tgLink, "_blank");
  carrotquest.close();
});

document.querySelector(".js-btn-email").addEventListener("click", function() {
  document.querySelector(".final-channels").classList.add("hidden");
  document.querySelector(".final-email-form").classList.remove("hidden");
  carrotquest.track(cqpopup_name + " - Выбрал Email");
});

document.querySelector(".js-submit-email").addEventListener("click", function() {
  var emailInput = document.querySelector(".final-email-form .quiz-email-input");
  var email = emailInput.value.trim();
  var cb1 = document.getElementById("cb1");
  var cb2 = document.getElementById("cb2");
  if (!email || !isValidEmail(email)) {
    emailInput.style.borderColor = "#e33";
    return;
  }
  if (!cb1.checked || !cb2.checked) {
    if (!cb1.checked) cb1.style.outline = "1.5px solid #e33";
    if (!cb2.checked) cb2.style.outline = "1.5px solid #e33";
    return;
  }
  cb1.style.outline = "";
  cb2.style.outline = "";

  carrotquest.replied();
  carrotquest.identify([
    { op: "update_or_create", key: "$email",  value: email },
    { op: "update_or_create", key: cqpopup_name + " - Канал связи", value: "Email" }
  ]);
  carrotquest.track(cqpopup_name + " - Отправил email");

  var sf = document.getElementById("s-final");
  sf.querySelector(".final-title").classList.add("hidden");
  sf.querySelector(".final-text").classList.add("hidden");
  sf.querySelector(".final-question").classList.add("hidden");
  sf.querySelector(".final-channels").classList.add("hidden");
  sf.querySelector(".final-email-form").classList.add("hidden");
  sf.querySelector(".final-thank").classList.remove("hidden");
  setTimeout(carrotquest.close, 5000);
});

document.querySelector(".js-wait-telegram").addEventListener("click", function() {
  carrotquest.replied();
  carrotquest.track(cqpopup_name + " - Подождите: Выбрал TELEGRAM");
  carrotquest.identify([{
    op: "update_or_create",
    key: cqpopup_name + " - Канал связи",
    value: "Telegram"
  }]);
  var tgLink = "https://t.me/agena_art";
  tgLink += top.carrotquest.data.user.user_signature.telegram ? "?start=" + top.carrotquest.data.user.user_signature.telegram : "";
  window.open(tgLink, "_blank");
  setTimeout(function() { carrotquest.close(); }, 4000);
});

document.querySelector(".js-wait-email").addEventListener("click", function() {
  document.querySelector(".wait-channels").classList.add("hidden");
  document.querySelector(".wait-email-form").classList.remove("hidden");
  carrotquest.track(cqpopup_name + " - Подождите: Выбрал Email");
});

document.querySelector(".js-wait-submit").addEventListener("click", function() {
  var emailInput = document.querySelector(".wait-email-form .quiz-email-input");
  var email = emailInput.value.trim();
  var cb3 = document.getElementById("cb3");
  var cb4 = document.getElementById("cb4");
  if (!email || !isValidEmail(email)) {
    emailInput.style.borderColor = "#e33";
    return;
  }
  if (!cb3.checked || !cb4.checked) {
    if (!cb3.checked) cb3.style.outline = "1.5px solid #e33";
    if (!cb4.checked) cb4.style.outline = "1.5px solid #e33";
    return;
  }
  cb3.style.outline = "";
  cb4.style.outline = "";
  carrotquest.replied();
  carrotquest.identify([
    { op: "update_or_create", key: "$email", value: email },
    { op: "update_or_create", key: cqpopup_name + " - Канал связи", value: "Email" }
  ]);
  carrotquest.track(cqpopup_name + " - Подождите: Отправил email");
  var sw = document.getElementById("s-wait");
  sw.querySelector(".final-title").classList.add("hidden");
  sw.querySelector(".final-text").classList.add("hidden");
  sw.querySelector(".final-question").classList.add("hidden");
  sw.querySelector(".wait-channels").classList.add("hidden");
  sw.querySelector(".wait-email-form").classList.add("hidden");
  sw.querySelector(".wait-thank").classList.remove("hidden");
  setTimeout(function() { carrotquest.close(); }, 5000);
});

document.querySelector(".js-plan-submit").addEventListener("click", function() {
  var emailInput = document.querySelector(".plan-email-form .quiz-email-input");
  var email = emailInput.value.trim();
  var cb5 = document.getElementById("cb5");
  var cb6 = document.getElementById("cb6");
  if (!email || !isValidEmail(email)) {
    emailInput.style.borderColor = "#e33";
    return;
  }
  if (!cb5.checked || !cb6.checked) {
    if (!cb5.checked) cb5.style.outline = "1.5px solid #e33";
    if (!cb6.checked) cb6.style.outline = "1.5px solid #e33";
    return;
  }
  cb5.style.outline = "";
  cb6.style.outline = "";
  carrotquest.replied();
  carrotquest.identify([
    { op: "update_or_create", key: "$email", value: email },
    { op: "update_or_create", key: cqpopup_name + " - Канал связи", value: "Email" }
  ]);
  carrotquest.track(cqpopup_name + " - Учебный план: Отправил email");
  var sp = document.getElementById("s-plan");
  sp.querySelector(".final-title").classList.add("hidden");
  sp.querySelector(".final-text").classList.add("hidden");
  sp.querySelector(".final-question").classList.add("hidden");
  sp.querySelector(".plan-email-form").classList.add("hidden");
  sp.querySelector(".plan-thank").classList.remove("hidden");
  setTimeout(carrotquest.close, 5000);
});

function showScreen(id) {
  document.querySelectorAll(".quiz-screen").forEach(function(s) {
    s.classList.add("hidden");
  });

  var target;
  if (id === "final") {
    target = document.getElementById("s-final");
  } else if (id === "wait") {
    target = document.getElementById("s-wait");
  } else if (id === "plan") {
    target = document.getElementById("s-plan");
  } else {
    target = document.getElementById("s" + id);
  }

  if (!target) return;
  target.classList.remove("hidden");

  var nextBtn = target.querySelector(".quiz-btn--next");
  if (nextBtn) {
    nextBtn.disabled = !target.querySelector("input[type='radio']:checked");
  }
}

function applyScore(qNum, answerIndex) {
  var rules = SCORING[String(qNum)];
  if (!rules || !rules[answerIndex]) return;
  var s = rules[answerIndex];
  if (s.A) quizScores.A += s.A;
  if (s.I) quizScores.I += s.I;
  if (s.S) quizScores.S += s.S;
  if (typeof s.engagement !== "undefined") quizEngagement = s.engagement;
  if (s.goal) quizGoal = s.goal;
  if (s.flags) quizFlags = quizFlags.concat(s.flags);
}

function calculateResult() {
  var A_MAX = 5, I_MAX = 6, S_MAX = 4;
  var Apct = Math.round(quizScores.A / A_MAX * 100);
  var Ipct = Math.round(quizScores.I / I_MAX * 100);
  var Spct = Math.round(quizScores.S / S_MAX * 100);
  var fit_score = Math.round(0.35 * Apct + 0.40 * Ipct + 0.25 * Spct);
  var t = THRESHOLDS;
  var fit_type;
  if (Apct >= t.natural.A && Ipct >= t.natural.I && Spct >= t.natural.S && quizEngagement >= t.natural.engagement) {
    fit_type = "natural";
  } else if (Ipct >= t.researcher.I && Ipct >= Spct) {
    fit_type = "researcher";
  } else if (Spct >= t.educator.S && Apct >= t.educator.A) {
    fit_type = "educator";
  } else {
    fit_type = "amateur";
  }
  var temp = 0;
  if (quizGoal === "career" || quizGoal === "switch") temp += 2;
  else if (quizGoal === "depth") temp += 1;
  temp += quizEngagement;
  if (quizFlags.indexOf("money_objection") !== -1) temp -= 1;
  var lead_temp = temp >= 3 ? "hot" : temp >= 1 ? "warm" : "cold";
  return {
    fit_score:  fit_score,
    fit_type:   fit_type,
    A_pct:      Apct,
    I_pct:      Ipct,
    S_pct:      Spct,
    engagement: quizEngagement,
    goal:       quizGoal,
    lead_temp:  lead_temp,
    flags:      quizFlags
  };
}

function getQuestionLabel(num) {
  var labels = {
    "1": "Вопрос 1 - Восприятие искусства",
    "2": "Вопрос 2 - Незнакомая работа",
    "3": "Вопрос 3 - После лекции",
    "4": "Вопрос 4 - Цель обучения",
    "5": "Вопрос 5 - Посещение искусства",
    "6": "Вопрос 6 - Доход в профессии"
  };
  return labels[num] || ("Вопрос " + num);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
