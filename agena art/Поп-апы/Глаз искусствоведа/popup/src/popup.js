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

var currentQ  = 0;          
var quizPhase = "question"; 
var correctCount = 0;

var QUESTIONS = [
  {
    
    correct: 1,
    feedbacks: [
      "Неверно. Хотя Микеланджело и прославился пластичностью изображения мужского тела, у него оно обычно выглядит героически, идеализированно. Здесь же мы видим грязную кожу, морщины, резкий контрастный свет, что плохо вписывается в Высокое Возрождение. <br><br> На самом деле это картина Караваджо “Распятие святого Петра” (рубеж XVI-XVII веков).",
      "Верно. Это фрагмент \"Распятия святого Петра\". Узнаваемые признаки: тенебризм, демонстративно неидеализированное тело пожилого человека  с грязными ступнями, контрастный свет. <br><br>Караваджо одним из первых в европейской живописи стал писать святых с натурщиков из римских трактиров, что позже стало общей практикой художников барокко.",
      "Неверно. Рубенс тоже изображал мужское тело,  но его палитра принципиально другая: теплые розово-золотые тона, румяная плоть, мягкий рассеянный свет. Контраст у Рубенса бывает, но он обычно не создает такого \"театрального\" эффекта прожектора.<br><br>Перед нами раннее итальянское барокко, картина Караваджо “Распятие святого Петра”.",
      "Неверно. Рибера действительно работал в подобной драматической манере, но у него тенебризм еще более выражен. Кожа часто обветренная,  с подчеркнутой фактурой. <br><br>На самом деле это картина Караваджо “Распятие святого Петра”."
    ]
  },
  {
    
    correct: 1,
    feedbacks: [
      "Неверно. На итальянских портретах XVI века тоже виртуозно написаны украшения, но техника совсем другая: более плотные мазки, теплый коричневатый грунт, отсутствие холодных рефлексов. И главное, итальянцы XVI века не делали такого глубокого фона.<br><br>На самом деле это “Женщина с жемчужным ожерельем” Вермеера (Голландия, XVII век).",
      "Верно. Это голландский золотой век. Налицо характерные признаки: тончайшие лессировки, оптически точная передача поверхности жемчуга  с холодным бликом, использование глубокого фона. <br><br>Это картина “Женщина с жемчужным ожерельем” Вермеера.",
      "Неверно. Французский XVIII век - это преимущественно рококо с розово-голубыми пастельными тонами, мягкой дымкой, без резких контрастов. Жемчуг и кожу там тоже писали отлично, но в принципиально иной манере, без подобной холодной точности.<br><br>На самом деле это “Женщина с жемчужным ожерельем” Вермеера, Голландия, XVII век.",
      "Неверно. Английский XIX век - это либо викторианский академизм, либо прерафаэлиты с их яркими насыщенными красками и плоскими композициями. Ни те, ни другие не работали  в подобной технике многослойной лессировки. <br><br>На самом деле это “Женщина с жемчужным ожерельем” Вермеера, Голландия, XVII век."
    ]
  },
  {
    
    correct: 2,
    feedbacks: [
      "Неверно. Это подлинная флорентийская Мадонна конца XV века (кватроченто) кисти Боттичелли. Характерные признаки: S-образная фигура, изгиб тела, светлый колорит, легкая печаль на лице. Эпоха совпадает с двумя другими подлинниками в этом ряду.",
      "Неверно. Это типичное венецианское кватроченто, последняя треть XV века - Джованни Беллини. Узнается по скульптурной моделировке драпировок. Подлинник эпохи.",
      "Верно. Это работа немецкого \"назарейца\" XIX века Иоганна Фридриха Овербека, который сознательно копировал черты Возрождения. <br><br>Подвох в деталях: слишком \"прилизанная\" манера письма, неестественно насыщенные краски, графичность, изображение ярких эмоций на лице, нетипичное для строгого кватроченто. ",
      "Неверно. Это флорентийская работа середины XV века авторства Филиппо Липпи - учителя Боттичелли. Здесь видны типичные черты раннего кватроченто: четкий контур, локальный цвет, еще не до конца преодоленная \"точеность\" позднеготической традиции."
    ]
  },
  {
    
    correct: 0,
    feedbacks: [
      "Верно. Это правильная последовательность: Высокое Возрождение (Рафаэль, XV-XVI век) → испанское барокко (Веласкес, XVII век) → французский романтизм (Делакруа, 30-е годы XIX века) → протомодернизм (Мане, 60-е годы XIX века). <br><br>Между Рафаэлем и Веласкесом около 140 лет, между Делакруа и Мане - всего 30, но эстетически между ними - пропасть. ",
      "Неверно. Веласкес работал в XVII веке, а Делакруа -  в первой половине XIX. Между ними более 150 лет. <br><br>Ловушка в том, что и Веласкес, и Делакруа писали  в драматической манере с темными тенями,  но Веласкес - это испанское барокко, а Делакруа - французский романтизм, и они разделены классицизмом и рококо XVIII века.",
      "Неверно. Рафаэль (XV-XVI век) работал намного раньше Веласкеса (XVII век), Возрождение предшествует барокко. И Делакруа раньше Мане,  а не наоборот. Романтизм Делакруа - это первая половина XIX века, а предтеча импрессионизма Мане - вторая.",
      "Неверно. Мане и Делакруа переставлены местами. \"Свобода на баррикадах\" написана в 1830 году, сразу после Июльской революции. \"Завтрак на траве\" -  в 1863 году, и именно эта картина стала символическим началом современного искусства. <br><br>Делакруа - старший современник, а Мане - наследник, отвергший романтическую риторику."
    ]
  },
  {
    
    correct: 0,
    feedbacks: [
      "Верно. Это \"Рождение Венеры\" Боттичелли (античный миф). Богиня появилась из морской пены, оплодотворенной кровью оскопленного Урана.<br><br>В круге Лоренцо Медичи, под влиянием флорентийского неоплатонизма, этот мотив понимали как образ божественной красоты и любви, возникающей в материальном мире и возвышающей человеческую душу.",
      "Неверно. Иконография крещения принципиально другая: Христос входит в реку, Иоанн Креститель поливает его водой, сверху нисходит Святой Дух. <br>Раковина в христианской иконографии - атрибут паломника и крестильной купели, но никогда  не \"корабль\" для самой фигуры.<br><br>Здесь сюжет явно мифологический, это “Рождение Венеры” Боттичелли. ",
      "Неверно. Галатея - нереида (не путать с Галатеей  из мифа о Пигмалионе), в живописи она обычно изображается в колеснице из раковины, запряженной дельфинами, в окружении тритонов.<br><br>Здесь же - одиночная фигура, и раковина выступает не в роли колесницы. Это античный миф - “Рождение Венеры” Боттичелли.",
      "Неверно. Андромеду по мифу приковывают к скале  на берегу моря. Персей прилетает на крылатых сандалиях с головой Медузы Горгоны (по одной  из версий) и спасает ее. Обычно на картине видим цепи, морское чудовище, Персея в героическом образе. Здесь нет ни одного из этих элементов. <br><br>Это “Рождение Венеры” Боттичелли. "
    ]
  },
  {
    
    correct: 2,
      feedbacks: [
          "Неверно. Для Святого семейства тут не хватает Иосифа, который часто изображается пожилым мужчиной с инструментами плотника или цветущим жезлом. Здесь же - женщина в зеленом. <br><br>Это “Святая Анна с Мадонной и младенцем Христом”, поздняя картина Леонардо да Винчи. ",
          "Неверно. Сретение - это эпизод, когда Иисуса приносят в Иерусалимский храм, и старец Симеон берет его на руки. Иконография обычно такая: храмовая колоннада, Симеон Богоприимец, Анна, иногда - голуби (для принесения жертвы). Здесь нет такого набора элементов. <br><br>Это “Святая Анна с Мадонной и младенцем Христом”, поздняя картина Леонардо да Винчи. ",
          "Верно. Это популярнейшая в итальянском Ренессансе композиция, “Святая Анна с Мадонной  и младенцем Христом”, поздняя картина Леонардо  да Винчи. <br><br>Женщина в зеленом - это мать Богоматери Анна.",
          "Неверно. В \"Поклонении волхвов\" обязательно присутствуют три царя с дарами (золото, ладан, смирна), часто верблюды или лошади, звезда  над яслями, иногда вол и осел. Это многофигурная сложная композиция, а не сцена с двумя женщинами и младенцем. <br><br>Это “Святая Анна с Мадонной и младенцем Христом”, поздняя картина Леонардо да Винчи."
      ]
  },
  {
    
    correct: 1,
    feedbacks: [
      "Неверно. \"Vanitas\" (от лат. \"суета\") - это морализаторский жанр, напоминание о бренности жизни. Такие натюрморты вешали в кабинете или библиотеке, а не для украшения парадных гостиных. <br><br>Верным было утверждение о том, что pronk stilleven (\"роскошные натюрморты\") демонстрировали богатство заказчика и его доступ к колониальным товарам.",
      "Верно. \"Pronk\" в переводе с голландского значит \"роскошь\". Этот тип натюрморта расцвел в Голландии XVII века.<br><br>Очищенный лимон, китайский фарфор династии Мин, серебряный сосуд, персидский ковер -  каждый предмет был свидетельством высокого социального статуса заказчика. Это типичная ярмарка тщеславия. ",
      "Неверно. Цветочные натюрморты - это почти всегда обобщенные образы, а не зарисовки с натуры. Художники часто собирали в одном букете цветы, которые цветут в разные сезоны.<br><br>Верным было утверждение о том, что pronk stilleven (\"роскошные натюрморты\") демонстрировали богатство заказчика и его доступ к колониальным товарам.",
      "Неверно. Протестантская реформация изгнала живопись из храмов, и это вынудило голландских художников искать светских заказчиков: так начался расцвет жанровой живописи и портретов. <br><br>Верным было утверждение о том, что pronk stilleven (\"роскошные натюрморты\") демонстрировали богатство заказчика и его доступ к колониальным товарам."
    ]
  },
  {
    
    correct: 1,
    feedbacks: [
      "Неверно. В Москве такого не было.<br><br>На самом деле речь о событии 1863 года: четырнадцать выпускников Петербургской Академии художеств отказались писать дипломную работу на обязательный мифологический сюжет \"Пир в Валгалле\". Позже они образовали Товарищество передвижников.",
      "Верно. В 1863 году четырнадцать выпускников Императорской Академии художеств во главе с Иваном Крамским отказались писать дипломную работу на обязательный мифологический сюжет \"Пир в Валгалле\".<br><br>Они потребовали свободного выбора темы и, не получив разрешения, демонстративно покинули Академию  без дипломов. ",
      "Неверно. Реальный бунт был не социальным, а эстетическим, за свободу выбора темы. <br><br>На самом деле речь о событии 1863 года: четырнадцать выпускников Петербургской Академии художеств отказались писать дипломную работу на обязательный мифологический сюжет \"Пир в Валгалле\". Позже они образовали Товарищество передвижников.  ",
      "Неверно. Хотя передвижники часто подвергались критике, такого погрома не было.<br><br>На самом деле речь о событии 1863 года: четырнадцать выпускников Петербургской Академии художеств отказались писать дипломную работу на обязательный мифологический сюжет \"Пир в Валгалле\". Позже они образовали Товарищество передвижников."
    ]
  },
  {
    
    correct: 0,
    feedbacks: [
      "Верно. \"Сад земных наслаждений\" Иеронима Босха - один из самых известных триптихов европейской живописи. В закрытом виде на внешних створках мы видим монохромное изображение Земли в момент творения (вода, скалы и первые растения, без людей и животных). ",
      "Неверно. На противоположной стене в трапезной монастыря Санта-Мария-делле-Грацие действительно есть \"Распятие\" Монторфано, но это работа другого автора, а портреты кисти Леонардо  не сохранились.<br><br>А мы имели в виду “Сад земных наслаждений” Босха, на внешних створках которого есть изображение Земли в момент творения его же авторства.",
      "Неверно. На обратной стороне \"Менин\" никаких изображений нет. Образ Веласкеса и так присутствует на лицевой стороне картины,  у мольберта. <br><br>А мы имели в виду “Сад земных наслаждений” Босха, на внешних створках которого есть изображение Земли в момент творения его же авторства.",
      "Неверно. Реставраторы провели много исследований различных полотен Вермеера. Но на \"Девушке  с жемчужной сережкой\" второй композиции обнаружено не было. <br><br>А мы имели в виду “Сад земных наслаждений” Босха, на внешних створках которого есть изображение Земли в момент творения его же авторства."
    ]
  },
  {
    
    correct: 1,
    feedbacks: [
      "Неверно. Откровение Иоанна Богослова описывает Бога на престоле.<br><br>На самом деле Андрей Рублев взял за основу явление странников у Мамврийского дуба. К Аврааму пришли три путника, и он угостил их трапезой. Рублев убрал из композиции Авраама, Сарру, теленка и почти все бытовые детали, оставив только трех ангелов вокруг чаши.",
      "Верно. Сюжет ветхозаветный, из 18 главы Книги Бытия: к Аврааму у Мамврийского дуба пришли три путника, и он угостил их трапезой. Рублев убрал из композиции Авраама, Сарру, теленка и почти все бытовые детали, оставив только трех ангелов вокруг чаши.",
      "Неверно. Рублев ничего не придумывал. <br><br>На самом деле он взял за основу явление странников у Мамврийского дуба. К Аврааму пришли три путника, и он угостил их трапезой. Рублев убрал из композиции Авраама, Сарру, теленка и почти все бытовые детали, оставив только трех ангелов вокруг чаши.",
      "Неверно. Видение Исайи - это совсем другой иконографический сюжет.<br><br>На самом деле Андрей Рублев взял за основу явление странников у Мамврийского дуба. К Аврааму пришли три путника, и он угостил их трапезой. Рублев убрал из композиции Авраама, Сарру, теленка и все бытовые детали, оставив только трех ангелов вокруг чаши."
    ]
  }
];

document.addEventListener("readystatechange", function() {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
      setTgLink('https://t.me/agena_art_manager_bot')
  }
});
function setTgLink(link){
    var tgLink = link;
    tgLink += top.carrotquest.data.user.user_signature.telegram ? `?start=${top.carrotquest.data.user.user_signature.telegram}` : '';
    document.querySelectorAll('.js-tg-btn').forEach(function(btn){
        btn.href = tgLink;
    });
}

function showScreen(id) {
  document.querySelectorAll(".quiz-screen").forEach(function(s) {
    s.classList.add("hidden");
  });
  var target = document.getElementById(id);
  if (target) target.classList.remove("hidden");
}

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

document.querySelector(".js-start-quiz").addEventListener("click", function() {
  carrotquest.track(cqpopup_name + " - Нажал ПРОЙТИ ТЕСТ");
  currentQ = 1;
  quizPhase = "question";
  showScreen("s1");
});

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

    
    var imageAnswersEl = screen.querySelector(".quiz-image-answers");
    if (imageAnswersEl) {
      var bodyEl = imageAnswersEl.closest(".quiz-body--full");
      if (bodyEl) {
        
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

    
    var selectedInput = screen.querySelector("input[value='" + selectedIndex + "']");
    var answerText = "";
    if (selectedInput) {
      
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

    
    screen.querySelectorAll("input[type='radio']").forEach(function(r) {
      r.disabled = true;
    });

    
    if (currentQ === 10) {
      btn.textContent = "УЗНАТЬ РЕЗУЛЬТАТ";
    }

    quizPhase = "feedback";

  } else {
    
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

  var nameInput = document.querySelector(".js-name-input");
  var name = nameInput ? nameInput.value.trim() : "";

  carrotquest.replied();
  var identifyProps = [
    { op: "update_or_create", key: "$email", value: email },
    { op: "update_or_create", key: cqpopup_name + " - Правильных ответов", value: correctCount }
  ];
  if (name) {
    identifyProps.push({ op: "update_or_create", key: "$name", value: name });
  }
  carrotquest.identify(identifyProps);
  carrotquest.track(cqpopup_name + " - Отправил email");

  showResult();
});

document.querySelector(".js-skip-email").addEventListener("click", function(e) {
  e.preventDefault();
  carrotquest.track(cqpopup_name + " - Пропустил email");
  showResult();
});

function showResult() {
  var resultId;
  var segment;
  if (correctCount <= 3) {
    resultId = "s-result-1";
    segment = "tourist";
  } else if (correctCount <= 6) {
    resultId = "s-result-2";
    segment = "viewer";
  } else if (correctCount <= 8) {
    resultId = "s-result-3";
    segment = "amateur";
  } else {
    resultId = "s-result-4";
    segment = "curator";
  }

  var scoreText = "Вы ответили верно на " + correctCount + " из 10 вопросов";
  document.querySelectorAll(".js-score-text").forEach(function(el) {
    el.textContent = scoreText;
  });

  var timestamp = new Date().toISOString();

  carrotquest.identify([
    { op: "update_or_create", key: cqpopup_name + " - Сегмент", value: segment }
  ]);

  carrotquest.track(cqpopup_name + " - Завершил квиз", {
    "Правильных ответов": correctCount,
    "Сегмент": segment,
    "Timestamp": timestamp
  });

  showScreen(resultId);
}

document.addEventListener("click", function(e) {
  if (e.target.closest(".js-tg-btn")) {
    carrotquest.track(cqpopup_name + " - Перешел в Telegram");
  }
  if (e.target.closest(".js-max-btn")) {
    carrotquest.track(cqpopup_name + " - Перешел в MAX");
  }
});

document.addEventListener("click", function(e) {
  var btn = e.target.closest(".js-zoom-btn");
  if (!btn) return;
  e.stopPropagation();
  var container = btn.closest(".quiz-painting-bg, .quiz-paint-cell, .quiz-image-answer__img-wrap");
  var imgs = container ? container.querySelectorAll("img:not(.quiz-zoom-icon)") : null;
  var img = null;
  if (imgs) {
    for (var i = 0; i < imgs.length; i++) {
      if (getComputedStyle(imgs[i]).display !== "none") {
        img = imgs[i];
        break;
      }
    }
  }
  if (!img) return;
  document.querySelectorAll(".js-lightbox-img").forEach(function(el) {
    el.src = img.src;
  });
  document.getElementById("quiz-lightbox").classList.remove("hidden");
});

document.addEventListener("click", function(e) {
  if (e.target.closest(".js-lightbox-close")) {
    document.getElementById("quiz-lightbox").classList.add("hidden");
  }
});

