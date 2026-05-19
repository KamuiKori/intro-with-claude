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
var e = document.querySelector('.video-widget'),
  a = document.getElementById('video-widget__video'),
  c = document.querySelector(".video-widget__container");
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
  }
});

const video = document.getElementById('video-widget__video');

video.addEventListener('ended', function() {
    e.setAttribute('data-state', 'default');
    c.classList.remove("new");
    a.muted = true;

    carrotquest.resizeFrame({
        width: "140px",
        height: "220px"
    });

    document.querySelector('#popmechanic-form').classList.add('mini');
    document.querySelector('#popmechanic-form').classList.remove('big');
    document.querySelector('.link').classList.add('hidden');


    a.currentTime = 0;
    a.play();
});
var isPhone = top.window.innerWidth < 500;

document.addEventListener('click', function (mouseEvent) {
    if(mouseEvent.target.closest('.link')){
        carrotquest.clicked();
    }
  if (mouseEvent.target.closest('.mini')) {
    mouseEvent.preventDefault();
  }
  if (mouseEvent.target.closest('.popmechanic-close')) {
    carrotquest.close();
  }
  if (mouseEvent.target.closest('.video-widget__container') && !mouseEvent.target.closest('.popmechanic-close')) {
    if (e.getAttribute('data-state') === 'default') {
      e.setAttribute('data-state', 'opened');
      document.querySelector('video').removeAttribute('loop')
      c.classList.add("new");
      a.currentTime = 0;
      a.muted = false;
      if(isPhone){
        carrotquest.resizeFrame({
          'width': "400px",
          'height': '520px'
        });
        document.querySelector('.link').classList.remove('hidden');
      }
      else{
        carrotquest.resizeFrame({
          'width': "500px",
          'height': '600px'
        });
        document.querySelector('.link').classList.remove('hidden');
      }
      document.querySelector('#popmechanic-form').classList.remove('mini');
      document.querySelector('#popmechanic-form').classList.add('big');
    } else {
      document.querySelector('video').setAttribute('loop','')
      e.setAttribute('data-state', 'default');
      c.classList.remove("new");
      a.muted = true;
      carrotquest.resizeFrame({
        'width': "140px",
        'height': '220px'
      });
      document.querySelector('#popmechanic-form').classList.add('mini');
      document.querySelector('#popmechanic-form').classList.remove('big');
      document.querySelector('.link').classList.add('hidden');
    }
  }
});
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function (item) {
  item.addEventListener("click", carrotquest.close);
});
function trackData(data) {
  carrotquest.identify(_defineProperty({}, "$" + data, document.querySelector(".cq_popup-input[name=" + data + "]").value));
}
function hidden_visible(elem1, elem2) {
  document.querySelector(elem1).classList.add("hidden");
  document.querySelector(elem2).classList.remove("hidden");
}
document.addEventListener('mouseup', function (t) {
  if (!e.contains(t.target) && e.getAttribute('data-state') !== 'default') {
    e.setAttribute('data-state', 'default');
    a.muted = true;
  }
});