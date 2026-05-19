var cqpopup_name = "Тест верстки и макет через ии",
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

document.querySelectorAll("[data-close]").forEach(function(el) {
  el.addEventListener("click", function() {
    carrotquest.close();
  });
});

// Phone masking
(function() {
  var phoneInput = document.getElementById("am-phone");
  if (!phoneInput) return;

  function maskPhone(val) {
    var d = String(val || '').replace(/\D/g, '').slice(0, 11);
    if (!d) return '';
    var r = '+7';
    if (d.length > 1) r += ' (' + d.slice(1, 4);
    if (d.length >= 4) r += ') ' + d.slice(4, 7);
    if (d.length >= 7) r += '-' + d.slice(7, 9);
    if (d.length >= 9) r += '-' + d.slice(9, 11);
    return r;
  }

  phoneInput.addEventListener("input", function(e) {
    var masked = maskPhone(e.target.value);
    if (e.target.value !== masked) e.target.value = masked;
  });

  phoneInput.addEventListener("focus", function(e) {
    if (!e.target.value) e.target.value = '+7 (';
  });

  phoneInput.addEventListener("blur", function(e) {
    if (e.target.value === '+7 (') e.target.value = '';
  });
})();

function getFieldEl(name) {
  return document.querySelector('.am-field[data-field="' + name + '"]');
}

function setError(name, message) {
  var field = getFieldEl(name);
  if (!field) return;
  if (message) {
    field.setAttribute('data-error', '');
    field.querySelector('.am-field__error').textContent = message;
  } else {
    field.removeAttribute('data-error');
  }
}

function clearErrors() {
  document.querySelectorAll('.am-field[data-error]').forEach(function(f) {
    f.removeAttribute('data-error');
  });
}

['name', 'phone', 'email'].forEach(function(name) {
  var input = document.querySelector('.am-field[data-field="' + name + '"] .am-field__input');
  if (input) {
    input.addEventListener('input', function() { setError(name, null); });
  }
});

document.getElementById("am-submit-btn").addEventListener("click", function() {
  clearErrors();

  var nameVal  = document.getElementById("am-name").value.trim();
  var phoneVal = document.getElementById("am-phone").value.trim();
  var emailVal = document.getElementById("am-email").value.trim();
  var consent  = document.getElementById("am-consent").checked;
  var valid = true;

  if (!nameVal || nameVal.length < 2) {
    setError('name', 'Укажите имя');
    valid = false;
  }
  if (!phoneVal || phoneVal.replace(/\D/g, '').length < 11) {
    setError('phone', 'Введите корректный номер');
    valid = false;
  }
  if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    setError('email', 'Введите корректный e-mail');
    valid = false;
  }
  if (!valid) {
    var firstError = document.querySelector('.am-field[data-error] .am-field__input');
    if (firstError) firstError.focus();
    return;
  }
  if (!consent) return;

  carrotquest.identify({ "$name": nameVal });
  carrotquest.identify({ "$phone": phoneVal });
  carrotquest.identify({ "$email": emailVal });
  carrotquest.replied();
  carrotquest.track("Тест верстки и макет через ии: оставил заявку");

  var first = nameVal.split(/\s+/)[0];
  var nameOut = document.getElementById("am-name-out");
  if (nameOut && first) nameOut.textContent = ', ' + first;

  document.getElementById("am-form-state").classList.add("hidden");
  document.getElementById("am-thanks-state").classList.remove("hidden");

  setTimeout(function() { carrotquest.close(); }, 5000);
});
