"use strict";

var cqpopup_name = "Видео виджет",
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
    },
    expanded: function expanded() {
      this.track('Раскрыл попап');
      this.track("Коммуникации: Раскрыл попап - " + cqpopup_name);
    },
    moreClicked: function moreClicked() {
      this.track('Нажал "Подробнее" в попапе');
      this.track("Коммуникации: Нажал Подробнее в сообщении - " + cqpopup_name);
    },
    channelOpened: function channelOpened(channelLabel) {
      this.trackMessageInteraction("{{ sending_id }}", "clicked");
      this.track('Перешел в ' + channelLabel);
      this.track("Коммуникации: Перешел в " + channelLabel + " - " + cqpopup_name);
    },
    resizeFrame: function resizeFrame(obj) {
      var data = {
        "command": 'carrotquest.resizeFrame',
        'id': '{{ sending_id }}',
        'width': obj.width,
        'height': obj.height
      };
      top.postMessage(data, '*');
    }
  };
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});
var isPhone = top.window.innerWidth < 500;
if (isPhone) {
  document.documentElement.classList.add('is-mobile');
}
var SZ = isPhone ? {
  mini: [150, 200],
  opened: [365, 626],
  form: [365, 475],
  thank: [365, 165]
} : {
  mini: [150, 200],
  opened: [310, 510],
  form: [310, 510],
  thank: [282, 150]
};
var userSignature;
try {
  userSignature = top.carrotquest.data.user.user_signature;
} catch (err) {
  userSignature = null;
}
var channelLinks = {
  telegram: 'https://t.me/agena_art_manager_bot',
  max: 'https://max.ru/id9731074734_bot',
  vk: 'https://vk.com/agenaart'
};
var channelLabels = {
  telegram: 'Telegram',
  max: 'МАКС',
  vk: 'Вконтакте'
};
function buildChannelLink(channel) {
  var link = channelLinks[channel];
  var signature = userSignature && userSignature[channel];
  return link + (signature ? '?start=' + signature : '');
}
var widget = document.getElementById('popmechanic-form');
var video = document.getElementById('video-widget__video');
var moreBtnWrap = document.querySelector('.more-btn-wrap');
var consultForm = document.querySelector('.consult-form');
var channelSlot = document.querySelector('.channel-slot');
var phoneSlot = document.querySelector('.phone-slot');
var phoneInput = document.querySelector('.phone-input');
var submitBtn = document.querySelector('.js-consult-submit');
var checkboxes = document.querySelectorAll('.consult-form input[type=checkbox]');
var thank = document.querySelector('.thank');
function resize(size) {
  carrotquest.resizeFrame({
    width: size[0] + 'px',
    height: size[1] + 'px'
  });
}
resize(SZ.mini);
function updateSubmitState() {
  var allChecked = Array.prototype.every.call(checkboxes, function (cb) {
    return cb.checked;
  });
  var phoneOk = phoneSlot.classList.contains('hidden') || phoneInput.classList.contains('success');
  submitBtn.disabled = !(allChecked && phoneOk);
}
checkboxes.forEach(function (cb) {
  cb.addEventListener('change', updateSubmitState);
});
document.querySelectorAll('.checkbox-row a').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
function collapseWidget() {
  widget.setAttribute('data-state', 'default');
  video.muted = true;
  moreBtnWrap.classList.add('hidden');
  resize(SZ.mini);
}
function toggleVideo() {
  if (widget.getAttribute('data-state') === 'default') {
    widget.setAttribute('data-state', 'opened');
    video.muted = false;
    video.currentTime = 0;
    video.play();
    moreBtnWrap.classList.remove('hidden');
    resize(SZ.opened);
    carrotquest.expanded();
  } else {
    collapseWidget();
  }
}
function openConsultForm() {
  video.pause();
  widget.classList.add('hidden');
  consultForm.classList.remove('hidden');
  updateSubmitState();
  resize(SZ.form);
  carrotquest.moreClicked();
}
document.addEventListener('click', function (mouseEvent) {
  if (mouseEvent.target.closest('[data-popmechanic-close]')) {
    carrotquest.close();
    return;
  }
  if (mouseEvent.target.closest('.js-more-btn')) {
    openConsultForm();
    return;
  }
  if (mouseEvent.target.closest('.video-widget__container')) {
    toggleVideo();
  }
});
document.addEventListener('mouseup', function (t) {
  if (widget.classList.contains('hidden')) {
    return;
  }
  if (!widget.contains(t.target) && widget.getAttribute('data-state') !== 'default') {
    collapseWidget();
  }
});
consultForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (submitBtn.disabled) {
    return;
  }
  if (phoneSlot.classList.contains('hidden')) {
    var checkedChannel = consultForm.querySelector('input[name="channel"]:checked');
    var channel = checkedChannel ? checkedChannel.value : 'phone';
    if (channel === 'phone') {
      channelSlot.classList.add('hidden');
      phoneSlot.classList.remove('hidden');
      updateSubmitState();
      resize(SZ.form);
    } else {
      carrotquest.channelOpened(channelLabels[channel]);
      window.open(buildChannelLink(channel), '_blank');
      carrotquest.close();
    }
  } else {
    carrotquest.identify([{
      op: 'update_or_create',
      key: '$phone',
      value: phoneInput.value
    }]);
    consultForm.classList.add('hidden');
    thank.classList.remove('hidden');
    resize(SZ.thank);
    carrotquest.replied();
    setTimeout(carrotquest.close, 5000);
  }
});
(function (formSelector) {
  var formattedInputValue = "+7 (";
  function checkCorrect(input) {
    if (input.length === 18) {
      phoneInput.classList.add("success");
      phoneInput.classList.remove("error");
    } else {
      phoneInput.classList.remove("success");
      phoneInput.classList.remove("error");
    }
    updateSubmitState();
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
      phoneInput.classList.add("error");
      phoneInput.classList.remove("success");
      updateSubmitState();
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
})(".consult-form");