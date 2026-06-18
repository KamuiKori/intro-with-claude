const cqpopup_name = "Таймер-clipboard промокод",
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
        var data = { command: "carrotquest.animationPopup", "id": "{{ sending_id }}", "cqpopup_name": cqpopup_name};
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

document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function(item) {
  item.addEventListener("click", carrotquest.close);
});

document.querySelector('.cq-promocode-button').addEventListener('click', function (){
    var copyText = document.getElementById("promocode");
    copyText.select();
    document.execCommand("copy");
    carrotquest.track('Скопировал промокод из Поп-апа',{
        "Промокод":document.getElementById("promocode").value
    })
})
var timerMinutes = 1800;
var timer = setInterval(function (){
    var timerInput = document.querySelector('.cqp_timer span')
    var seconds = timerMinutes%60
    var minutes = timerMinutes/60%60
    if(timerMinutes <=0){
        clearInterval(timer)
        carrotquest.close()
    }
    else{
        timerInput.innerHTML = `${Math.trunc(minutes)}:${seconds}`
    }
    timerMinutes--;
},1000)

