const cqpopup_name = "5.1А Поп-ап на попытку ухода (Таланты)",
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
      setTgLink('#')
  }
});
function setTgLink(link){
    var tgLink = link;
    tgLink += top.carrotquest.data.user.user_signature.telegram ? `?start=${top.carrotquest.data.user.user_signature.telegram}` : '';
    document.querySelector(".link").href = tgLink;
}

document.addEventListener('click',function (e){
    if(e.target.closest('.link')){
        carrotquest.clicked();
        carrotquest.close();
    }
    if(e.target.closest('.cq-popup__bg:not(.hide)') || e.target.closest('.cq-popup__close:not(.hide)')){
        carrotquest.close();
    }
    if(e.target.closest('.cq-popup__bg.hide') || e.target.closest('.cq-popup__close.hide')){
        hidden_visible('#form','#phone_form');
        document.querySelector('.cq-popup__bg').classList.remove('hide');
        document.querySelector('.cq-popup__close').classList.remove('hide');
    }
});

document.addEventListener('submit',function (e){
    e.preventDefault();
    var email = document.querySelector('#email').value;

    if(email && document.querySelector('#checkbox').checked){
        carrotquest.replied();
        carrotquest.identify([
            {op:'update_or_create',key:'$email',value:email},
            {op:'update_or_create',key:'Источник CQ',value:'Значение источника'},
        ]);
        document.querySelector('.cq-popup__bg').classList.remove('hide');
        document.querySelector('.cq-popup__close').classList.remove('hide');
        hidden_visible('#phone_form','#thank')
    }
    if(!document.querySelector('#checkbox').checked){
        document.querySelector('#checkbox').classList.add('error')
    }
});



function trackData(data) {
  carrotquest.identify({["$"+data]: document.querySelector(".cq_popup-input[name="+ data +"]").value });
}
function hidden_visible(elem1, elem2) {
  document.querySelector(elem1).classList.add("hidden");
  document.querySelector(elem2).classList.remove("hidden");
}