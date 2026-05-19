carrotquest.addCallback('messenger_opened', function(data) {
    carrotquest.identify([{op:'update_or_create',key:'cq chat opened',value:true}]);
});
carrotquest.addCallback('messenger_closed', function(data) {
    carrotquest.identify([{op:'update_or_create',key:'cq chat opened',value:false}]);
});

if(top.window.innerWidth < 1000){
    /* Событие через 15 секунд бездействия (не скроллит, не водит мышкой, не кликает) */
    (function() {
        var isLoop = false; /* поменять true на false, чтобы событие сработало только один раз этой на странице */
        var eventTimeout = 15; /* через сколько секунд бездействия сработает событие */
        var refreshTimeout = 60; /* событие будет повторно срабатывать не чаще, чем раз в столько секунд */
        var idleLoop = null;
        eventTimeout = eventTimeout*1000;
        refreshTimeout = refreshTimeout*1000 - eventTimeout;
        idleTimer();
        function idleTimer() {
            addIdleListeners();
            addIdleLoop();
        };
        function addIdleListeners() {
            document.addEventListener('click', refreshIdleLoop);
            document.addEventListener('scroll', refreshIdleLoop);
            document.addEventListener('mouseout', refreshIdleLoop);
        };
        function removeIdleListeners() {
            document.removeEventListener('click', refreshIdleLoop);
            document.removeEventListener('scroll', refreshIdleLoop);
            document.removeEventListener('mouseout', refreshIdleLoop);
        };
        function refreshIdleLoop() {
            clearTimeout(idleLoop);
            addIdleLoop();
        };
        function addIdleLoop() {
            idleLoop = setTimeout(function() {
                carrotquest.track('Бездействие на мобилке');
                removeIdleListeners();
                isLoop&&setTimeout(idleTimer, refreshTimeout);
            }, eventTimeout);
        };
    }());
}
//Попытка ухода с сайта
(function() {
    init();
    function init() {
        setTimeout(addMouseout, 5000);
    };
    function addMouseout() {
        document.addEventListener('mouseout', mouseout);
    };
    function mouseout(e) {
        if (Math.round(e.x) >= 0 && Math.round(e.y) <= 0) {
            carrotquest.track('Попытка ухода с сайта');
            deleteEvent();
            setTimeout(addMouseout, 10000);//Время до следующего срабатывания
        }
    };
    function deleteEvent() {
        document.removeEventListener('mouseout', mouseout);
    };
}());
//Новый способ (начало)
//Работа с попапами
(function() {
    //Определяем есть ли поп-ап на странице
    if (document.querySelector('iframe[id*="carrot_frame"]') && localStorage['cq_popup'] != 'opened') {
        localStorage['cq_popup'] = 'opened';
        carrotquest.identify([{op: 'update_or_create', key: 'popup', value: 'opened'}]);
    } else if (!document.querySelector('iframe[id*="carrot_frame"]') && localStorage['cq_popup'] != 'closed') {
        localStorage['cq_popup'] = 'closed';
        carrotquest.identify([{op: 'update_or_create', key: 'popup', value: 'closed'}]);
    };
    //Для ie
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    };
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    };
    //Слушаем iframe
    window.addEventListener('message', function(e) {
        if (e.data.command == "carrotquest.animationPopup") {
            animationOpacity(document.getElementById('carrot_frame_' + e.data.id));
        }
        if (e.data.command == 'carrotquest.closePopup') {
            animationOpacity(document.getElementById('carrot_frame_' + e.data.id));
            setTimeout(cb, 500);
            function cb() {
                document.getElementById('carrot_frame_' + e.data.id).remove();
                carrotquest.identify([{ op: 'update_or_create', key: 'popup', value: 'closed' }]);
                localStorage["cq_popup"] = 'closed';
                carrotquest.track('Закрыл поп-ап', {
                    'id': e.data.id
                });
            }
        };
        if (e.data.command == 'carrotquest.resizeFrame') {
            document.getElementById('carrot_frame_' + e.data.id).style.height = e.data.height;
            document.getElementById('carrot_frame_' + e.data.id).style.width = e.data.width;
            document.getElementById('carrot_frame_' + e.data.id).style.maxWidth = e.data.maxWidth;
            document.getElementById('carrot_frame_' + e.data.id).style.maxHeight = e.data.maxHeight;
            document.getElementById('carrot_frame_' + e.data.id).style.left = e.data.left;
            document.getElementById('carrot_frame_' + e.data.id).style.right = e.data.right;
            document.getElementById('carrot_frame_' + e.data.id).style.bottom = e.data.bottom;
            document.getElementById('carrot_frame_' + e.data.id).style.top = e.data.top;
        };
    });
    //Анимация для попапов
    function animationOpacity(iframe) {
        if (iframe.style.opacity == "0") {
            iframe.style.opacity = "1";
        } else {
            iframe.style.opacity = "0";
        }
    }
}());
//Новый способ (конец)

document.addEventListener('click',function(e){
    if(e.target.closest('#wf-form-demo-request [type="submit"]')){
        var form = e.target.closest('#wf-form-demo-request')
        var name = form.querySelector('#name-3').value;
        var email = form.querySelector('[type="email"]').value;
        var company = form.querySelector('#company-4').value;
        var phone = form.querySelector('[type="tel"]').value;
        var count = form.querySelector('[name="users-count"]:checked')?form.querySelector('[name="users-count"]:checked').nextElementSibling.textContent.trim():"";
        var contact = form.querySelector('[name="contact-count"]:checked')?form.querySelector('[name="contact-count"]:checked').nextElementSibling.textContent.trim():"";
        if(name && email && phone){
            carrotquest.track('Ответил в любую форму');
            carrotquest.track('Подал заявку на демо-доступ Таланты');
            carrotquest.identify([
                {op:"update_or_create",key:"$name",value:name},
                {op:"update_or_create",key:"$email",value:email},
                {op:"update_or_create",key:"Компания",value:company},
                {op:"update_or_create",key:"$phone",value:phone},
                {op:"update_or_create",key:"Кол-во пользователей",value:count},
                {op:"update_or_create",key:"Способ связи",value:contact},
            ]);
        }
    }
    if(e.target.closest('#newsletter_signup #send-newsletter_signup')){
        var form = e.target.closest('.form__consultation-tag')
        var name = form.querySelector('[name="pfirstname"]').value;
        var email = form.querySelector('[name="email"]').value;
        if(name && email && isValidEmail(email)){
            carrotquest.track('Подписался на рассылку');
            carrotquest.track('Ответил в любую форму');
            carrotquest.identify([
                {op:"update_or_create",key:"$name",value:name},
                {op:"update_or_create",key:"$email",value:email},
            ]);
        }
    }
    if(e.target.closest('#newsletter-subscribe-form #send-newsletter-subscribe-form')){
        var form = e.target.closest('.form__consultation-tag')
        var name = form.querySelector('[name="pfirstname"]').value;
        var email = form.querySelector('[name="email"]').value;
        if(name && email && isValidEmail(email)){
            carrotquest.track('Подписался на рассылку');
            carrotquest.track('Ответил в любую форму');
            carrotquest.identify([
                {op:"update_or_create",key:"$name",value:name},
                {op:"update_or_create",key:"$email",value:email},
            ]);
        }
    }
    if(e.target.closest('#get-consultation-form #get-consultation-form__submit')){
        var form = e.target.closest('#get-consultation-form')
        var name = form.querySelector('[name="pfirstname"]').value;
        var email = form.querySelector('[name="email"]').value;
        var company = form.querySelector('[name="ca"]').value;
        var phone = form.querySelector('[name="personworktel"]').value;
        var eventName = '';
        if(location.href.indexOf('portal') > -1){
            eventName = 'Оставил заявку на консультацию portal';
        }
        else if(location.href.indexOf('onboarding') > -1){
            eventName = 'Оставил заявку на консультацию onboarding';
        }
        if(name && email && company && phone){
            carrotquest.track(eventName);
            carrotquest.track('Ответил в любую форму');
            carrotquest.identify([
                {op:"update_or_create",key:"$name",value:name},
                {op:"update_or_create",key:"$email",value:email},
                {op:"update_or_create",key:"Компания",value:company},
                {op:"update_or_create",key:"$phone",value:phone},
            ]);
        }
    }
    if(e.target.closest('#form__consultation #form__consultation__submit')){
        var form = e.target.closest('#form__consultation')
        var name = form.querySelector('[name="pfirstname"]').value;
        var email = form.querySelector('[name="email"]').value;
        var phone = form.querySelector('[name="personworktel"]').value;
        var eventName = '';
        if(location.href.indexOf('portal') > -1){
            eventName = 'Оставил заявку на консультацию portal';
        }
        else if(location.href.indexOf('onboarding') > -1){
            eventName = 'Оставил заявку на консультацию onboarding';
        }
        if(name && email  && phone){
            carrotquest.track(eventName);
            carrotquest.track('Ответил в любую форму');
            carrotquest.identify([
                {op:"update_or_create",key:"$name",value:name},
                {op:"update_or_create",key:"$email",value:email},
                {op:"update_or_create",key:"$phone",value:phone},
            ]);
        }
    }
    if(e.target.closest('.form__consultation-tag #send-lmslight-form-footer')){
        var form = e.target.closest('.form__consultation-tag')
        var name = form.querySelector('[name="pfirstname"]').value;
        var email = form.querySelector('[name="email"]').value;
        var company = form.querySelector('[name="ca"]').value;
        var phone = form.querySelector('[name="personworktel"]').value;
        if(name && email && company && phone){
            carrotquest.track('Оставил заявку на консультацию');
            carrotquest.track('Ответил в любую форму');
            carrotquest.identify([
                {op:"update_or_create",key:"$name",value:name},
                {op:"update_or_create",key:"$email",value:email},
                {op:"update_or_create",key:"Компания",value:company},
                {op:"update_or_create",key:"$phone",value:phone},
            ]);
        }
    }
    if(e.target.closest('.form__consultation-tag #send-modal-form')){
        var form = e.target.closest('.form__consultation-tag')
        var name = form.querySelector('[name="pfirstname"]').value;
        var email = form.querySelector('[name="email"]').value;
        var company = form.querySelector('[name="ca"]').value;
        var phone = form.querySelector('[name="personworktel"]').value;
        if(name && email && company && phone){
            carrotquest.track('Оставил заявку на консультацию');
            carrotquest.track('Ответил в любую форму');
            carrotquest.identify([
                {op:"update_or_create",key:"$name",value:name},
                {op:"update_or_create",key:"$email",value:email},
                {op:"update_or_create",key:"Компания",value:company},
                {op:"update_or_create",key:"$phone",value:phone},
            ]);
        }
    }
    if(e.target.closest('.form__consultation-tag #send-form-consultation')){
        var form = e.target.closest('.form__consultation-tag')
        var name = form.querySelector('[name="pfirstname"]').value;
        var email = form.querySelector('[name="email"]').value;
        var company = form.querySelector('[name="ca"]').value;
        var phone = form.querySelector('[name="personworktel"]').value;
        if(name && email && company && phone){
            carrotquest.track('Оставил заявку на консультацию');
            carrotquest.track('Ответил в любую форму');
            carrotquest.identify([
                {op:"update_or_create",key:"$name",value:name},
                {op:"update_or_create",key:"$email",value:email},
                {op:"update_or_create",key:"Компания",value:company},
                {op:"update_or_create",key:"$phone",value:phone},
            ]);
        }
    }
    if(e.target.closest('.form__consultation-tag #send-contact_us-form')){
        var form = e.target.closest('.form__consultation-tag')
        var name = form.querySelector('[name="pfirstname"]').value;
        var email = form.querySelector('[name="email"]').value;
        var company = form.querySelector('[name="ca"]').value;
        var phone = form.querySelector('[name="personworktel"]').value;
        var comment = form.querySelector('[name="comment"]').value;
        var topic = form.querySelector('#selectTopic').value;
        var product = form.querySelector('#selectProduct').value;
        if(name && email && company && phone && comment){
            carrotquest.track('Оставил заявку на консультацию');
            carrotquest.track('Ответил в любую форму');
            carrotquest.identify([
                {op:"update_or_create",key:"$name",value:name},
                {op:"update_or_create",key:"$email",value:email},
                {op:"update_or_create",key:"Компания",value:company},
                {op:"update_or_create",key:"$phone",value:phone},
                {op:"update_or_create",key:"Сообщение",value:comment},
                {op:"update_or_create",key:"Тема обращения",value:topic},
                {op:"update_or_create",key:"Решение",value:product},
            ]);
        }
    }
});
function isValidEmail(email) {
    // Регулярное выражение для проверки email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

if(location.href === 'https://www.mirapolis.ru/clients/'){
    var name = "Клиенты";
    carrotquest.track('Посмотрел раздел ' + name);
    carrotquest.track('Посмотрел раздел',{
        "Название раздела":name
    });
    carrotquest.identify([{op:"union",key:"Просмотренные разделы",value:name}]);
}
if(location.href === 'https://www.mirapolis.ru/partners/'){
    var name = "Партнеры";
    carrotquest.track('Посмотрел раздел ' + name);
    carrotquest.track('Посмотрел раздел',{
        "Название раздела":name
    });
    carrotquest.identify([{op:"union",key:"Просмотренные разделы",value:name}]);
}
if(location.href === 'https://www.mirapolis.ru/blog/'){
    var name = "Блог";
    carrotquest.track('Посмотрел раздел ' + name);
    carrotquest.track('Посмотрел раздел',{
        "Название раздела":name
    });
    carrotquest.identify([{op:"union",key:"Просмотренные разделы",value:name}]);
}
if(location.href === 'https://www.mirapolis.ru/about-company/'){
    var name = "О нас";
    carrotquest.track('Посмотрел раздел ' + name);
    carrotquest.track('Посмотрел раздел',{
        "Название раздела":name
    });
    carrotquest.identify([{op:"union",key:"Просмотренные разделы",value:name}]);
}
if(location.href === 'https://www.mirapolis.ru/hcm/'){
    var name = "Mirapolis HCM";
    carrotquest.track('Посмотрел страницу продукта ' + name);
    carrotquest.track('Посмотрел страницу продукта',{
        "Название продукта":name
    });
    carrotquest.identify([{op:"union",key:"Просмотренные продукты",value:name}]);
}
if(location.href === 'https://www.mirapolis.ru/lms/'){
    var name = "Mirapolis LMS";
    carrotquest.track('Посмотрел страницу продукта ' + name);
    carrotquest.track('Посмотрел страницу продукта',{
        "Название продукта":name
    });
    carrotquest.identify([{op:"union",key:"Просмотренные продукты",value:name}]);
}
if(location.href === 'https://www.mirapolis.ru/onboarding/'){
    var name = "Mirapolis Onboarding";
    carrotquest.track('Посмотрел страницу продукта ' + name);
    carrotquest.track('Посмотрел страницу продукта',{
        "Название продукта":name
    });
    carrotquest.identify([{op:"union",key:"Просмотренные продукты",value:name}]);
}
if(location.href === 'https://www.mirapolis.ru/portal/'){
    var name = "Mirapolis portal";
    carrotquest.track('Посмотрел страницу продукта ' + name);
    carrotquest.track('Посмотрел страницу продукта',{
        "Название продукта":name
    });
    carrotquest.identify([{op:"union",key:"Просмотренные продукты",value:name}]);
}
if(location.href === 'https://www.mirapolis.ru/talents/'){
    var name = "Mirapolis Таланты";
    carrotquest.track('Посмотрел страницу продукта ' + name);
    carrotquest.track('Посмотрел страницу продукта',{
        "Название продукта":name
    });
    carrotquest.identify([{op:"union",key:"Просмотренные продукты",value:name}]);
}
if(document.querySelector('.post.type-post.status-publish')){
    //Прокрутил страницу до опредленного элемента. Начало
    function scrollTo() {
        var rect = document.querySelector('.footer-blog-form').getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
            document.removeEventListener('scroll', scrollTo);
            carrotquest.track('Доскролил статью до конца');
        };
    };
    document.addEventListener('scroll', scrollTo);
    //Прокрутил страницу до опредленного элемента. Конец
}