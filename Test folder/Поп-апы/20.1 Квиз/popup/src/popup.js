var cqpopup_name = '20.1 Квиз',
    carrotquest = {
        track: function (eventName, params) {
            parent.window.carrotquest.track(eventName, params);
        },
        identify: function (props) {
            parent.window.carrotquest.identify(props);
        },
        trackMessageInteraction: function (sendingId, type) {
            parent.window.carrotquest.trackMessageInteraction(sendingId, type);
        },
        animation: function () {
            var data = {command: 'carrotquest.animationPopup', id: '{{ sending_id }}', cqpopup_name: cqpopup_name};
            top.postMessage(data, '*');
        },
        close: function () {
            var data = {command: 'carrotquest.closePopup', id: '{{ sending_id }}'};
            top.postMessage(data, '*');
        },
        replied: function () {
            this.trackMessageInteraction('{{ sending_id }}', 'replied');
            this.track('Ответил в попап');
            this.track('Коммуникации: Ответил на сообщение - ' + cqpopup_name);
        },
        clicked: function () {
            this.trackMessageInteraction('{{ sending_id }}', 'clicked');
            this.track('Перешел по ссылке в попапе');
            this.track('Коммуникации: Перешел по ссылке в сообщении - ' + cqpopup_name);
        },
        read: function () {
            this.trackMessageInteraction('{{ sending_id }}', 'read');
            this.track('Прочитал попап');
            this.track('Коммуникации: Прочитано сообщение - ' + cqpopup_name);
        }
    };

document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
        carrotquest.read();
        carrotquest.animation();
    }
});

var currentStep = 1;
var totalSteps = 4;
var answers = {};

var stepQuestions = {
    1: 'Для кого вы выбираете квартиру?',
    2: 'Что для вас самое важное в будущей квартире?',
    3: 'В каком бюджете вы рассматриваете квартиру?'
};

function showStep(stepNum) {
    document.querySelectorAll('.quiz-step').forEach(function (el) {
        el.classList.remove('active');
    });
    var target = document.getElementById('step-' + stepNum);
    if (target) {
        target.classList.add('active');
    }
    currentStep = stepNum;
}

function getCheckedValues(stepNum) {
    var checked = document.querySelectorAll('#step-' + stepNum + ' input[type="checkbox"]:checked');
    return Array.from(checked).map(function (el) { return el.value; });
}

function saveAnswers(stepNum) {
    var vals = getCheckedValues(stepNum);
    if (vals.length > 0) {
        answers['step' + stepNum] = vals;
        var question = stepQuestions[stepNum];
        if (question) {
            carrotquest.identify([{op: 'update_or_create', key: question, value: vals.join(', ')}]);
        }
    }
}

document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-action]');
    if (!btn) return;

    var action = btn.dataset.action;

    if (action === 'next') {
        if (currentStep <= totalSteps) {
            saveAnswers(currentStep);
            carrotquest.track(cqpopup_name + ' - Шаг ' + currentStep + ' пройден', answers);
            showStep(currentStep + 1);
        }
        return;
    }

    if (action === 'prev') {
        if (currentStep > 1) {
            showStep(currentStep - 1);
        }
        return;
    }

    if (action === 'close') {
        carrotquest.close();
        return;
    }

    if (action === 'submit') {
        var name = document.getElementById('quiz-name').value.trim();
        var phone = document.getElementById('quiz-phone').value.trim();
        var email = document.getElementById('quiz-email').value.trim();
        var privacyChecked = document.getElementById('quiz-privacy-check').checked;

        if (!name || !phone || !privacyChecked) {
            return;
        }

        var identifyProps = [];
        if (name) identifyProps.push({op: 'update_or_create', key: '$name', value: name});
        if (phone) identifyProps.push({op: 'update_or_create', key: '$phone', value: phone});
        if (email) identifyProps.push({op: 'update_or_create', key: '$email', value: email});

        carrotquest.identify(identifyProps);
        carrotquest.replied();
        carrotquest.track(cqpopup_name + ' - Заявка отправлена', {
            name: name,
            phone: phone,
            email: email
        });

        showStep(5);
        return;
    }
});

document.addEventListener('click', function (e) {
    if (e.target.closest('.quiz-close') || e.target.closest('.cq-popup__bg')) {
        carrotquest.close();
    }
});
