var cqpopup_name = "Попап Товар в корзине",
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

document.addEventListener('click', function (mouseEvent) {
  if (mouseEvent.target.closest('[data-basket-link]')) {
    carrotquest.clicked();
  }

  if (mouseEvent.target.closest('[data-continue-link]')) {
    carrotquest.track('Продолжил покупки');
    carrotquest.track("Коммуникации: Продолжил покупки - " + cqpopup_name);
    carrotquest.close();
  }

  if (mouseEvent.target.closest('[data-basket-close]')) {
    carrotquest.close();
  }
});
