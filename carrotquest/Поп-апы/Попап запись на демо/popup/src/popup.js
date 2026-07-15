var cqpopup_name = "Попап запись на демо",
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

document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});

document.addEventListener("submit", function (e) {
  e.preventDefault();

  var form = e.target.closest("#form"),
      name = document.querySelector('.cq_popup-input.name').value,
      phone = document.querySelector('.cq_popup-input.phone').value,
      email = document.querySelector('.cq_popup-input.email').value,
      site = document.querySelector('.cq_popup-input.site').value,
      isSiteValid = validateSiteURL(site),
      isEmailValid = validateEmail(email),
      checkbox1 = document.getElementById('checkbox-1'),
      checkbox2 = document.getElementById('checkbox-2'),
      checkbox3 = document.getElementById('checkbox-3');

  if (form && name && phone && checkbox1.checked && checkbox2.checked && isSiteValid && isEmailValid) {
    carrotquest.identify([
      { op: 'update_or_create', key: '$name', value: name },
      { op: 'update_or_create', key: '$phone', value: phone },
      { op: 'update_or_create', key: '$email', value: email },
      { op: 'update_or_create', key: 'Адрес сайта', value: site },
      { op: 'update_or_create', key: 'Механика CQ', value: cqpopup_name },
      { op: 'update_or_create', key: '$data_processing_policy_is_allowed', value: checkbox1.checked ? 'Разрешено' : 'Не разрешено' },
      { op: 'update_or_create', key: '$phone_storage_is_allowed', value: checkbox2.checked ? 'Разрешено' : 'Не разрешено' },
      { op: 'update_or_create', key: '$email_storage_is_allowed', value: checkbox3.checked ? 'Разрешено' : 'Не разрешено' }
    ]);
    hidden_visible('#form', '#thank');
    carrotquest.replied();
    setTimeout(carrotquest.close, 5000);
  }
});

function validateSiteURL(input) {
    var arrayOfForbidden = [
        "нет", "нету", "нт", "carrotquest.io", "test.com", "test.ru", "test.io",
        "carrotquest", "carrot guest", "все", "нет компании", "отсутствует",
        "свой", "сайт", "добрый день", "привет", "здравствуйте", "пожалуйста",
        "любая", "любой", "google.com", "google.ru", "ya.ru", "лид",
        "незнаю", "не знаю", "тест", "neznaiu", "ne znaiu",
        "пока что нет", "пока нет", "хз", "vk.ru", "vk.com",
        "web.whatsapp.com", "whatsapp.com", "whatsapp.ru", "www.carrquest.io"
    ];

    if (!input || typeof input !== 'string') {
        return false;
    }

    var trimmed = input.trim();
    if (trimmed.length === 0) {
        return false;
    }

    var cleaned = removeUTMParameters(trimmed);
    var cleanedLower = cleaned.toLowerCase();

    var isForbidden = arrayOfForbidden.some(function (item) {
        return item.toLowerCase() === cleanedLower;
    });
    if (isForbidden) {
        return false;
    }

    var domainCandidate = cleanedLower
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .split('/')[0]
        .split('?')[0]
        .split(':')[0];

    var isDomainForbidden = arrayOfForbidden.some(function (item) {
        return item.toLowerCase() === domainCandidate;
    });
    if (isDomainForbidden) {
        return false;
    }

    var domainPattern = /^([a-z0-9а-яё]([a-z0-9а-яё-]{0,61}[a-z0-9а-яё])?\.)+[a-z]{2,}$/i;

    return domainPattern.test(domainCandidate);
}

function validateEmail(input) {
    if (!input || typeof input !== 'string') {
        return false;
    }

    var trimmed = input.trim();
    if (trimmed.length === 0) {
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    return emailPattern.test(trimmed);
}

document.querySelector('input.email').addEventListener('input', function (e) {
    var input = e.target;
    var value = input.value.trim();

    if (value.length === 0) {
        input.classList.remove('error', 'success');
        return;
    }

    if (!validateEmail(value)) {
        input.classList.add('error');
        input.classList.remove('success');
    } else {
        input.classList.remove('error');
        input.classList.add('success');
    }
});

document.querySelector('input.site').addEventListener('input', function (e) {
    var input = e.target;
    var value = input.value.trim();

    if (value.length === 0) {
        input.classList.remove('error', 'success');
        return;
    }

    var isValueValid = validateSiteURL(value);

    if (!isValueValid) {
        input.classList.add('error');
        input.classList.remove('success');
    } else {
        input.classList.remove('error');
        input.classList.add('success');
    }
});

function removeUTMParameters(url) {
    try {
        var urlObj = new URL(url);
        urlObj.searchParams.forEach(function (value, key) {
            if (key.startsWith('utm_')) {
                urlObj.searchParams.delete(key);
            }
        });
        return urlObj.toString();
    } catch (error) {
        return url;
    }
}
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {
  item.addEventListener("click", carrotquest.close);
});

function hidden_visible(elem1, elem2) {
  document.querySelector(elem1).classList.add("hidden");
  document.querySelector(elem2).classList.remove("hidden");
}

(function (formSelector) {
  var phoneInput = document.querySelector("[type=tel]"),
      form = document.querySelector(formSelector),
      formattedInputValue = "+7 (";

  function checkCorrect(input) {
    if (input.length == 18) {
      phoneInput.classList.add("success");
      phoneInput.classList.remove("error");
    } else {
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
    if (e.target.value.length != 18 && e.target.value.length != 0) {
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
})("#form");
