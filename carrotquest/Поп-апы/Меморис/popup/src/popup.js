const cqpopup_name = "Меморис",
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
var isMobile = false;
document.addEventListener("readystatechange", function() {
  if (document.readyState === "complete") {
    carrotquest.read();
    carrotquest.animation();
      SetIsMobile();
      setCards();
  }
});

function SetIsMobile(){
    if(top.window.innerWidth < 701){
        isMobile = true;
    }
}
(function copyText() {
    var clipboard = new ClipboardJS(".promocode");
    clipboard.on("success", function(e) {
        carrotquest.track("Скопировал код - " + cqpopup_name);
        document.querySelector(".success_copy").classList.add("active");
        setTimeout(function() {
            document.querySelector(".success_copy").classList.remove("active");
        }, 2000);
        e.clearSelection();
    });
    clipboard.on("error", function(e) {
        carrotquest.track("Something went wrong");
    });
})();

document.addEventListener("submit", function(e) {
  var email = document.querySelector('input.email').value;
  e.preventDefault();
  if (email) {
    trackData("email");
    hidden_visible('.cq-popup__body', '#thank')
    carrotquest.replied();
    if(top.window.innerWidth < 700){
        resizeBody("382px");
    }
  }
});

function setCards(){
    if(!isMobile){
        cardsPC = shuffle(cardsPC)
        var i = 0;
        document.querySelectorAll('.card:not(.hidden)').forEach(function (item){
            item.querySelector('img').src = cardsPC[i].img;
            item.setAttribute('data_id',cardsPC[i].id);
            i++;
        });
    }
    else{
        cardsMob = shuffle(cardsMob);
        var i = 0;
        document.querySelectorAll('.card:not(.hidden):not(.pc)').forEach(function (item){
            item.querySelector('img').src = cardsMob[i].img;
            item.setAttribute('data_id',cardsMob[i].id);
            i++;
        });
    }
}
var countOfOpened = 0;
var firstItem,secondItem;
var firstID,secondID;
var i = 0;
document.addEventListener("click",function (e){
    if(e.target.closest('.closed:not(.blocked)') && !document.querySelector('.opened')){
        e.target.closest('.card').classList.remove('closed');
        e.target.closest('.card').classList.add('opened');
        e.target.closest('.card').querySelector('svg').classList.add('hidden');
        e.target.closest('.card').querySelector('img').classList.remove('hidden');
    }
    if(e.target.closest('.closed:not(.blocked)') && document.querySelector('.opened')){
        e.target.closest('.card').classList.remove('closed');
        e.target.closest('.card').classList.add('opened');
        e.target.closest('.card').querySelector('svg').classList.add('hidden');
        e.target.closest('.card').querySelector('img').classList.remove('hidden');
        document.querySelectorAll('.closed').forEach(function (item){
            item.classList.add('blocked');
        });
        checkAnswers();
        checkAll();
    }
    if(e.target.closest('.reg_link')){
        carrotquest.track(cqpopup_name + ' - Перешел по ссылке регистрации');
        carrotquest.clicked();
    }
});

function checkAll(){
    if(!isMobile){
        if(document.querySelectorAll('.submited').length === 8){
            carrotquest.track(cqpopup_name + ' - отгадал все карточки');
            document.querySelector('#form').classList.remove('hidden');
            document.querySelector('.cq-popup__body').classList.add('answered');
        }
    }
    else{
        if(document.querySelectorAll('.submited').length === 6){
            carrotquest.track(cqpopup_name + ' - отгадал все карточки');
            document.querySelector('#form').classList.remove('hidden');
            document.querySelector('.cq-popup__body').classList.add('answered');
        }
    }

}

function checkAnswers(){
    var answers=[]
    document.querySelectorAll('.opened').forEach(function (item){
        answers.push(item.getAttribute('data_id'))
    });
    if(answers[0] === answers[1]){
        document.querySelectorAll('.opened').forEach(function (item){
            item.classList.remove('opened');
            item.classList.add('submited');
            document.querySelectorAll('.closed').forEach(function (item){
                item.classList.remove('blocked');
            });
        });
    }
    else{
        setTimeout(function (){
            document.querySelectorAll('.opened').forEach(function (item){
                item.classList.add('closed');
                item.classList.remove('opened');
                item.querySelector('svg').classList.remove('hidden');
                item.querySelector('img').classList.add('hidden');

                document.querySelectorAll('.closed').forEach(function (item){
                    item.classList.remove('blocked');
                });
            });
        },700)
    }
}
function shuffle(array) {
    return(array.sort(() => Math.random() - 0.5));
}

var cardsPC = [
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776539794-zth34wrx.png",
        id:"1"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776539794-zth34wrx.png",
        id:"1"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776558347-1euwjr7g.png",
        id:"2"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776558347-1euwjr7g.png",
        id:"2"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776577662-wvqfj9we.png",
        id:"3"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776577662-wvqfj9we.png",
        id:"3"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776593953-68x93eku.png",
        id:"4"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776593953-68x93eku.png",
        id:"4"
    },
]

var cardsMob = [
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776539794-zth34wrx.png",
        id:"1"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776539794-zth34wrx.png",
        id:"1"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776558347-1euwjr7g.png",
        id:"2"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776558347-1euwjr7g.png",
        id:"2"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776593953-68x93eku.png",
        id:"3"
    },
    {
        img:"https://files.carrotquest.app/message-images/54159/54159-1687776593953-68x93eku.png",
        id:"3"
    },
]

function resizeBody(height){
    document.querySelector(".cq-popup__body").style.height = height;
    document.querySelector(".cq-popup__body").style.background = "url('https://files.carrotquest.app/message-images/48967/48967-1682666524041-swlxj1tn.png')";
}
document.querySelectorAll(".cq-popup__close, .cq-popup__bg").forEach(function(item) {
  item.addEventListener("click", carrotquest.close);
});


function trackData(data) {
  carrotquest.identify({["$"+data]: document.querySelector(".cq_popup-input[name="+ data +"]").value });
}
function hidden_visible(elem1, elem2) {
  document.querySelector(elem1).classList.add("hidden");
  document.querySelector(elem2).classList.remove("hidden");
}