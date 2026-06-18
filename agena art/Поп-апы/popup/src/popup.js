var cqpopup_name = "Глаз искусствоведа",
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

// ====== STATE ======
var currentQ  = 0;          // 0 = start/email/result, 1–10 = question number
var quizPhase = "question"; // "question" | "feedback"
var correctCount = 0;

// ====== QUESTIONS DATA ======
var QUESTIONS = [
  {
    // Q1: Каравадджо
    correct: 1,
    feedbacks: [
      "Неверно. Микеланджело мастерски изображал мускулистые тела, но его стиль отличается идеализированными, монументальными формами и скульптурной сдержанностью. Резкий тенебризм ему не свойственен.",
      "Верно! Это фрагмент картины Каравадджо. Его фирменный «тенебризм» — резкий контраст света и тени на тёмном фоне — перевернул европейскую живопись. Каравадджо отказался от идеализации и писал людей с улицы.",
      "Неверно. Рубенс заимствовал у Каравадджо драматизм, но изображал тела значительно пышнее и мягче — это характерная «рубенсовская» манера.",
      "Неверно. Хосе де Рибера испытал сильное влияние Каравадджо, особенно в изображении мучеников, но данный фрагмент принадлежит самому Каравадджо."
    ]
  },
  {
    // Q2: Голландская школа XVII
    correct: 1,
    feedbacks: [
      "Неверно. Итальянская школа XVI века предпочитала более плотное письмо, тёплые золотистые тона и монументальную трактовку образа — здесь иная техника.",
      "Верно! Прозрачные лессировки, голубоватые рефлексы на коже, глубокий чёрный фон и жемчужные украшения — характерные приметы голландского XVII века. Вермеер и его современники виртуозно передавали текстуру материалов.",
      "Неверно. Французское рококо XVIII века тяготело к пастельным тонам и игривым мотивам, а не к такому плотному ювелирному письму.",
      "Неверно. Английская школа XIX века развивалась в направлении романтизма и прерафаэлитизма — совсем другая манера работы с цветом."
    ]
  },
  {
    // Q3: Назарейец XIX — лишний
    correct: 2,
    feedbacks: [
      "Неверно. Беллини — это кватроченто, XV век: золотистое свечение, выразительные лики, жёсткий контур раннего Возрождения. Это подлинная эпоха, не «лишний».",
      "Неверно. Липпи — флорентийский мастер XV века, предшественник Боттичелли. Его мягкая линия и нежные лики — настоящее кватроченто.",
      "Верно! Это работа немецкого назарейца XIX века, подражающего Проторенессансу. Назарейцы пытались возродить «чистоту» средневековой религиозной живописи, но их работы выдаёт чрезмерная гладкость письма и сентиментальность, несвойственная подлинному XV веку.",
      "Неверно. Боттичелли — флорентийский мастер XV века, один из вершин Возрождения. Его Мадонны узнаются по меланхоличной красоте и тонкой линии."
    ]
  },
  {
    // Q4: хронология Рафаэль→Веласкес→Делакруа→Мане
    correct: 0,
    feedbacks: [
      "Верно! Рафаэль (1483–1520, Возрождение) → Веласкес (1599–1660, Барокко) → Делакруа (1798–1863, Романтизм) → Мане (1832–1883, путь к Импрессионизму). Четыре эпохи, три столетия.",
      "Неверно. Делакруа (1798–1863) жил позже Веласкеса (1599–1660), а не до него. Романтизм идёт после Барокко.",
      "Неверно. Веласкес (1599–1660) жил на 80 лет позже Рафаэля, а не раньше. Барокко наступило после Возрождения.",
      "Неверно. Делакруа (1798–1863) старше Мане (1832–1883): Романтизм предшествует переходу к Импрессионизму, а не следует за ним."
    ]
  },
  {
    // Q5: Рождение Венеры — Рождение Афродиты по Гесиоду
    correct: 0,
    feedbacks: [
      "Верно! Это «Рождение Венеры» Боттичелли (~1484–1486). Сюжет основан на «Теогонии» Гесиода: богиня любви рождается из морской пены. Слева — Зефир с Хлорис, справа — Ора (Гора), подающая покрывало.",
      "Неверно. В сцене Крещения Господня всегда присутствует Иоанн Креститель, льющий воду, и голубь Святого Духа. Здесь иные фигуры.",
      "Неверно. «Триумф Галатеи» — нереида на колеснице из раковины, запряжённой дельфинами, в окружении тритонов. Совсем другая композиция.",
      "Неверно. В истории Андромеды — скованная к скале девушка и Персей на Пегасе с головой Медузы. Здесь иная сцена."
    ]
  },
  {
    // Q6: Святая Анна с Мадонной и младенцем
    correct: 2,
    feedbacks: [
      "Неверно. В «Святом семействе» изображены Мария, Иосиф и младенец Иисус. Здесь другой иконографический тип — трёхфигурная «пирамида» с пожилой женщиной.",
      "Неверно. Сретение Господне — эпизод в храме: Симеон Богоприимец держит младенца, рядом пророчица Анна. Здесь иная иконографическая схема.",
      "Верно! Это «Святая Анна с Мадонной и младенцем Христом» — иконографический тип, где бабушка (Анна), дочь (Мария) и внук (Иисус) образуют пирамиду. Именно Леонардо да Винчи сделал эту композицию знаменитой — Лувр хранит и картон, и законченное полотно.",
      "Неверно. В «Поклонении волхвов» всегда присутствуют трое мудрецов с дарами и обширная свита. Здесь интимная трёхфигурная сцена."
    ]
  },
  {
    // Q7: pronk stilleven демонстрировали богатство
    correct: 1,
    feedbacks: [
      "Неверно. «Vanitas» появлялись в гостиных, но их главная функция — напоминание о тщете земного («memento mori»), а не декоративность. Это морально-религиозный жанр.",
      "Верно! «Pronk stilleven» (от нидерл. «pronken» — выставляться напоказ) — роскошные натюрморты, где каждый предмет служил знаком состоятельности: китайский фарфор, серебряная посуда, экзотические лимоны. Заказчик буквально «кричал» богатством через холст.",
      "Неверно. Цветочные натюрморты НЕ писались «с натуры» в едином сеансе — цветы разных сезонов изображались вместе. Художники использовали зарисовки из разных времён и ботанические альбомы.",
      "Неверно. Голландская Реформация была враждебна религиозным изображениям в церквях. Натюрморт расцвёл как светский жанр — его заказчиками были купцы и буржуазия, а не церковь."
    ]
  },
  {
    // Q8: Бунт 14 выпускников Петербургской Академии
    correct: 1,
    feedbacks: [
      "Неверно. Московское училище живописи играло важную роль в развитии реализма, но «Бунт четырнадцати» произошёл в Петербургской Академии художеств, а не в Москве.",
      "Верно! В 1863 году четырнадцать лучших выпускников Петербургской Академии художеств отказались писать дипломную работу на мифологический сюжет («Пир в Валгалле»). Они основали «Артель художников» под руководством Крамского, из которой позднее выросло Товарищество передвижников.",
      "Неверно. «Бунт четырнадцати» был о свободе творческого выбора, а не о социальных требованиях, связанных с крепостным правом.",
      "Неверно. Разгромы выставок передвижников были, но это отдельный исторический эпизод, не связанный с «Бунтом четырнадцати» 1863 года."
    ]
  },
  {
    // Q9: Сад земных наслаждений — триптих, внешние створки
    correct: 0,
    feedbacks: [
      "Верно! «Сад земных наслаждений» Иеронима Босха — триптих. Когда алтарь закрыт, на внешних створках видна монохромная гризайльная роспись: мир на третий день творения — не менее значимое произведение того же мастера. Открытый и закрытый триптих — два «лица» одного шедевра.",
      "Неверно. «Тайная вечеря» Леонардо — настенная роспись (фреска), а не переносное полотно. Распятие Монторфано находится на противоположной стене и написано другим художником.",
      "Неверно. «Менины» Веласкеса — холст в Прадо. Никакого скрытого автопортрета на обороте официально не зафиксировано.",
      "Неверно. «Девушка с жемчужной серёжкой» Вермеера — холст, и никакой документально подтверждённой значимой работы на его обороте не существует."
    ]
  },
  {
    // Q10: Рублёв, Гостеприимство Авраама
    correct: 1,
    feedbacks: [
      "Неверно. Откровение Иоанна Богослова описывает небесные видения, но не трёх ангелов за столом у Авраама. Феофан Грек — великий мастер, работавший в России, но «Троицу» создал именно Рублёв.",
      "Верно! Иконография восходит к ветхозаветному «Гостеприимству Авраама» (Быт. 18): три странника-ангела у Мамврийского дуба, которых традиция отождествила со Святой Троицей. Икона Андрея Рублёва (~1411 или 1425–1427) — вершина русской иконописи, хранится в Третьяковской галерее.",
      "Неверно. Рублёв не изобрёл этот сюжет — он работал в рамках устойчивой иконографической традиции «Гостеприимства Авраама». Его гений — в совершенстве воплощения, а не в создании иконографии.",
      "Неверно. Видение пророка Исайи — совсем другой иконографический тип. Дионисий — великий иконописец рубежа XV–XVI веков, продолжатель Рублёва, но «Троицу» создал именно Рублёв."
    ]
  }
];

// ====== INIT ======

document.addEventListener("readystatechange", function() {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});

// ====== SCREEN NAVIGATION ======

function showScreen(id) {
  document.querySelectorAll(".quiz-screen").forEach(function(s) {
    s.classList.add("hidden");
  });
  var target = document.getElementById(id);
  if (target) target.classList.remove("hidden");
}

// ====== CLOSE LOGIC ======

document.addEventListener("click", function(e) {
  var isBg = e.target.classList.contains("js-close-bg");
  var isClose = e.target.closest && e.target.closest(".js-close-btn");
  if (!isBg && !isClose) return;

  if (currentQ >= 1 && currentQ <= 10) {
    var modal = document.getElementById("exit-modal");
    modal.querySelector(".js-exit-progress").textContent = currentQ;
    modal.classList.remove("hidden");
  } else {
    carrotquest.close();
  }
});

document.querySelector(".js-exit-confirm").addEventListener("click", function() {
  carrotquest.close();
});

document.querySelector(".js-exit-cancel").addEventListener("click", function() {
  document.getElementById("exit-modal").classList.add("hidden");
});

// ====== START ======

document.querySelector(".js-start-quiz").addEventListener("click", function() {
  carrotquest.track(cqpopup_name + " - Нажал ПРОЙТИ ТЕСТ");
  currentQ = 1;
  quizPhase = "question";
  showScreen("s1");
});

// ====== ANSWER SELECTION ======

document.addEventListener("click", function(e) {
  var answerEl = e.target.closest(".quiz-answer, .quiz-image-answer");
  if (!answerEl) return;
  var screen = answerEl.closest(".quiz-screen");
  if (!screen || screen.classList.contains("hidden")) return;
  if (quizPhase === "feedback") return;

  screen.querySelectorAll(".quiz-answer, .quiz-image-answer").forEach(function(a) {
    a.classList.remove("is-selected");
  });
  answerEl.classList.add("is-selected");

  var nextBtn = screen.querySelector(".js-btn-next");
  if (nextBtn) nextBtn.disabled = false;
});

// ====== NEXT BUTTON ======

document.addEventListener("click", function(e) {
  var btn = e.target.closest(".js-btn-next");
  if (!btn || btn.disabled) return;
  var screen = btn.closest(".quiz-screen");

  if (quizPhase === "question") {
    var checked = screen.querySelector("input[type='radio']:checked");
    if (!checked) return;

    var selectedIndex = parseInt(checked.value, 10);
    var qData = QUESTIONS[currentQ - 1];
    var isCorrect = (selectedIndex === qData.correct);
    if (isCorrect) correctCount++;

    // highlight all answers, hide non-selected
    screen.querySelectorAll(".quiz-answer, .quiz-image-answer").forEach(function(a) {
      var radio = a.querySelector("input[type='radio']");
      if (!radio) return;
      var val = parseInt(radio.value, 10);
      if (val === qData.correct) {
        a.classList.add("is-correct");
      } else if (val === selectedIndex && !isCorrect) {
        a.classList.add("is-wrong");
      }
      if (!a.classList.contains("is-selected")) {
        a.classList.add("hidden");
      }
    });

    // for image-answer questions: switch to two-column layout (image left, feedback right)
    var imageAnswersEl = screen.querySelector(".quiz-image-answers");
    if (imageAnswersEl) {
      var bodyEl = imageAnswersEl.closest(".quiz-body--full");
      if (bodyEl) {
        // snapshot img-wrap size before layout change
        var selectedAnswer = screen.querySelector(".quiz-image-answer.is-selected");
        var imgWrapToPin = selectedAnswer ? selectedAnswer.querySelector(".quiz-image-answer__img-wrap") : null;
        var pinnedRect = imgWrapToPin ? imgWrapToPin.getBoundingClientRect() : null;

        bodyEl.classList.add("quiz-body--feedback-img");

        if (imgWrapToPin && pinnedRect) {
          imgWrapToPin.style.width = pinnedRect.width + "px";
          imgWrapToPin.style.height = pinnedRect.height + "px";
          imgWrapToPin.style.aspectRatio = "auto";
          imgWrapToPin.style.flex = "none";
        }
        var feedbackNode = screen.querySelector(".js-feedback");
        var navNode = screen.querySelector(".quiz-nav");
        var rightCol = document.createElement("div");
        rightCol.className = "quiz-answers-col";
        feedbackNode.parentNode.insertBefore(rightCol, feedbackNode);
        rightCol.appendChild(feedbackNode);
        rightCol.appendChild(navNode);
      }
    }

    // build feedback answer label
    var selectedInput = screen.querySelector("input[value='" + selectedIndex + "']");
    var answerText = "";
    if (selectedInput) {
      // for image answers the text is after the img-wrap div
      var next = selectedInput.nextElementSibling;
      if (next && next.classList.contains("quiz-image-answer__img-wrap")) {
        next = next.nextElementSibling;
      }
      answerText = next ? next.textContent.trim() : "";
    }

    var feedbackEl   = screen.querySelector(".js-feedback");
    var fbAnswerEl   = screen.querySelector(".js-feedback-answer");
    var fbTextEl     = screen.querySelector(".js-feedback-text");

    fbAnswerEl.classList.add("hidden");

    carrotquest.track(cqpopup_name + " - Ответил на вопрос " + currentQ, {
      "Номер вопроса": currentQ,
      "Ответ": answerText,
      "Результат": isCorrect ? "Верно" : "Неверно"
    });
    carrotquest.identify([{
      op: "update_or_create",
      key: cqpopup_name + " - Вопрос " + currentQ,
      value: answerText
    }]);

    var feedbackText = qData.feedbacks[selectedIndex];
    var firstSpace = feedbackText.indexOf(' ');
    var firstWord = firstSpace > -1 ? feedbackText.substring(0, firstSpace) : feedbackText;
    var rest = firstSpace > -1 ? feedbackText.substring(firstSpace) : '';
    var kwClass = 'quiz-feedback-keyword ' + (isCorrect ? 'quiz-feedback-keyword--correct' : 'quiz-feedback-keyword--wrong');
    fbTextEl.innerHTML = '<span class="' + kwClass + '">' + firstWord + '</span>' + rest;
    feedbackEl.classList.remove("hidden");

    // lock radio buttons
    screen.querySelectorAll("input[type='radio']").forEach(function(r) {
      r.disabled = true;
    });

    // update button label for next step
    if (currentQ < 10) {
      btn.textContent = "ДАЛЕЕ (" + (currentQ + 1) + " ИЗ 10)";
    } else {
      btn.textContent = "УЗНАТЬ РЕЗУЛЬТАТ";
    }

    quizPhase = "feedback";

  } else {
    // advance
    if (currentQ < 10) {
      currentQ++;
      quizPhase = "question";
      showScreen("s" + currentQ);
    } else {
      currentQ = 0;
      quizPhase = "question";
      carrotquest.identify([{
        op: "update_or_create",
        key: cqpopup_name + " - Правильных ответов",
        value: correctCount
      }]);
      showScreen("s-email");
    }
  }
});

// ====== EMAIL FORM ======

document.querySelector(".js-submit-email").addEventListener("click", function() {
  var emailInput = document.querySelector(".js-email-input");
  var email = emailInput.value.trim();
  var cb1 = document.getElementById("cb1");
  var cb2 = document.getElementById("cb2");

  if (!email) {
    emailInput.style.borderColor = "#e33";
    return;
  }
  emailInput.style.borderColor = "";

  if (!cb1.checked || !cb2.checked) {
    if (!cb1.checked) cb1.style.outline = "1.5px solid #e33";
    if (!cb2.checked) cb2.style.outline = "1.5px solid #e33";
    return;
  }
  cb1.style.outline = "";
  cb2.style.outline = "";

  carrotquest.replied();
  carrotquest.identify([
    { op: "update_or_create", key: "$email", value: email },
    { op: "update_or_create", key: cqpopup_name + " - Правильных ответов", value: correctCount }
  ]);
  carrotquest.track(cqpopup_name + " - Отправил email");

  showResult();
});

document.querySelector(".js-skip-email").addEventListener("click", function(e) {
  e.preventDefault();
  carrotquest.track(cqpopup_name + " - Пропустил email");
  showResult();
});

// ====== RESULT ROUTING ======

function showResult() {
  var resultId;
  if (correctCount <= 3) {
    resultId = "s-result-1";
  } else if (correctCount <= 6) {
    resultId = "s-result-2";
  } else if (correctCount <= 8) {
    resultId = "s-result-3";
  } else {
    resultId = "s-result-4";
  }

  var scoreText = "Вы ответили верно на " + correctCount + " из 10 вопросов";
  document.querySelectorAll(".js-score-text").forEach(function(el) {
    el.textContent = scoreText;
  });

  carrotquest.track(cqpopup_name + " - Завершил квиз", {
    "Правильных ответов": correctCount
  });

  showScreen(resultId);
}

// ====== RESULT CTA & SOCIALS ======

document.addEventListener("click", function(e) {
  if (e.target.closest(".js-result-btn")) {
    carrotquest.clicked();
  }
  if (e.target.closest(".js-tg-btn")) {
    carrotquest.track(cqpopup_name + " - Перешел в Telegram");
  }
  if (e.target.closest(".js-vk-btn")) {
    carrotquest.track(cqpopup_name + " - Перешел в VK");
  }
});

// ====== ZOOM / LIGHTBOX ======

document.addEventListener("click", function(e) {
  var btn = e.target.closest(".js-zoom-btn");
  if (!btn) return;
  e.stopPropagation();
  var container = btn.closest(".quiz-painting-bg, .quiz-paint-cell, .quiz-image-answer__img-wrap");
  var img = container ? container.querySelector("img:not(.quiz-zoom-icon)") : null;
  if (!img) return;
  document.querySelector(".js-lightbox-img").src = img.src;
  document.getElementById("quiz-lightbox").classList.remove("hidden");
});

document.addEventListener("click", function(e) {
  if (e.target.closest(".js-lightbox-close")) {
    document.getElementById("quiz-lightbox").classList.add("hidden");
  }
});

// ====== UTILS ======
