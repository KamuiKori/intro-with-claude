const cqpopup_name = "Сбор e-mail",
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

document.addEventListener("readystatechange", function() {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});

document.addEventListener("submit", function(e) {
  e.preventDefault();
  var email = document.querySelector('input.email').value;
  var checked = document.querySelector('#checkbox').checked;
  if (email && checked) {
    trackData("email");
    carrotquest.identify([{op:'update_or_create',key:'источник CQ',value:cqpopup_name}]);
    hidden_visible('.first-form', '.second-form');
    carrotquest.replied();
  }
});

document.addEventListener('click', function(e) {
  if (e.target.closest('#promoCode')) {
    var code = document.querySelector('.popup__promo-code').textContent.trim();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).catch(function() { copyFallback(code); });
        carrotquest.identify([{op:'update_or_create',key:'промокод CQ',value:document.querySelector('.popup__promo-code').textContent.trim()}]);
        carrotquest.track(cqpopup_name + ' - Скопировал промокод');
    } else {
      copyFallback(code);
    }
  }
});

function copyFallback(text) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand('copy'); } catch(err) {}
  document.body.removeChild(ta);
}

document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function(item) {
  item.addEventListener("click", carrotquest.close);
});

function trackData(data) {
  carrotquest.identify({ ["$" + data]: document.querySelector(".cq_popup-input[name=" + data + "]").value });
}

function hidden_visible(elem1, elem2) {
  document.querySelector(elem1).classList.add("hidden");
  document.querySelector(elem2).classList.remove("hidden");
}
