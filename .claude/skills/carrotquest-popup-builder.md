# Skill: Carrot Quest Popup Builder

## Что это за проект

Репозиторий — хранилище попап-кампаний и email-рассылок для клиентов маркетингового агентства. Попапы размещаются в **Carrot Quest** (CRM/чат-платформа, carrotquest.io). Каждый попап — изолированный `<iframe>` внутри Carrot Quest, общающийся с родительской страницей через `postMessage`.

---

## Структура репозитория

```
clients-intro-with-claude/
├── agena art/
│   └── Поп-апы/         ← отдельный gulp-проект на каждого клиента
│       ├── gulpfile.js
│       ├── template.js   ← точка входа для сборки popup.compiled.js
│       ├── events.js     ← код хост-страницы (слушает postMessage от iframe)
│       ├── compiler.cmd  ← запуск gulp build из Проводника
│       ├── gulp/
│       │   ├── config/
│       │   │   ├── path.js
│       │   │   └── plugins.js
│       │   └── tasks/    ← отдельные gulp-таски
│       ├── popup/
│       │   ├── src/
│       │   │   ├── popup.html   ← разметка попапа
│       │   │   ├── popup.js     ← логика внутри iframe
│       │   │   └── popup.scss   ← стили
│       │   └── dist/            ← результат сборки (не редактировать вручную)
│       │       ├── popup.css
│       │       ├── popup.js     ← минифицированный JS
│       │       ├── popup.html   ← финальный HTML с инлайн-CSS
│       │       ├── popup.string.html  ← HTML, экранированный в строку JS
│       │       └── popup.compiled.js ← итоговый файл для загрузки в CQ
│       └── <Имя попапа>/        ← папка с готовым попапом (копия dist)
│           └── popup/dist/...
├── mirapolis/
│   ├── Поп-апы/
│   └── Письма/           ← HTML-письма для email-рассылки
├── mpstats/
│   └── Поп-апы/
├── karlssonhaus/
├── mental plus/
├── imperial orchestra/
├── Современник/
└── моя команда/
```

Каждая клиентская папка `Поп-апы/` — **самостоятельный Gulp-проект** со своим `node_modules` в корне репозитория (shared).

---

## Сборка

### Команды

```bash
# Режим разработки (watch + BrowserSync)
gulp watch

# Финальная сборка (→ popup.compiled.js)
gulp build
```

Или через `compiler.cmd` — двойной клик в Проводнике.

### Что делает `gulp build`

1. `reset` — очищает `popup/dist/`
2. `scss` — компилирует SCSS → CSS (autoprefixer, media-group)
3. `scssDel` — удаляет промежуточные `.css` файлы из dist
4. `js` — минифицирует JS через Babel
5. `inlinesource` — встраивает CSS в `<style>` внутрь `popup.html`
6. `insertstring` — собирает `popup.string.html` в `template.js` через `@@include`, результат → `popup.compiled.js`
7. `resetPopupFolder` / `createPopupFolder` / `cleanPopupFolder` / `cleanPopupDistFolder` — копирует dist в папку с именем попапа

### Итоговый артефакт

**`popup.compiled.js`** — единственный файл, который загружается в Carrot Quest как «Код на JavaScript» попапа.

```js
var popupContent = '<html>...'  // вся HTML-страница в одну строку
// + events.js (слушатель postMessage на хост-странице)
```

---

## Анатомия попапа

### `popup/src/popup.html`

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./popup/dist/popup.css" inline>  <!-- inline при сборке -->
</head>
<body>
  <div class="cq-popup__bg js-close-bg"></div>  <!-- затемнённый фон, клик → закрыть -->
  <div class="wrapper__body">
    <!-- контент попапа -->
  </div>
</body>
</html>
```

Шаблонная переменная `{{ sending_id }}` — Jinja-синтаксис Carrot Quest, подставляется платформой.

### `popup/src/popup.js`

**Обязательный шаблонный объект** в каждом попапе:

```js
var cqpopup_name = "Название попапа",
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
        top.postMessage({ command: "carrotquest.animationPopup", id: "{{ sending_id }}", cqpopup_name }, "*");
      },
      close: function() {
        top.postMessage({ command: "carrotquest.closePopup", id: "{{ sending_id }}" }, "*");
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
```

### Типовые события для трекинга

```js
carrotquest.track('Прочитал попап');
carrotquest.track('Закрыл поп-ап', { id: "{{ sending_id }}" });
carrotquest.track('Ответил в попап');
carrotquest.track('Перешел по ссылке в попапе');
carrotquest.identify([{ op: 'update_or_create', key: 'ключ', value: 'значение' }]);
```

### CSS-соглашения

- BEM-подобные классы: `cq-popup__bg`, `quiz-card`, `quiz-screen`, `quiz-header`
- JS-хуки: классы с префиксом `js-` (например, `js-close-btn`, `js-start-quiz`, `js-answers`)
- Скрытие: класс `hidden` → `display: none !important`
- Адаптив: медиа-запросы прямо в SCSS (не отдельный файл)
- Брейкпоинт мобайл: обычно `max-width: 768px` или `max-width: 900px`
- Шрифты: подключаются через `@font-face` с абсолютными URL на CDN клиента

---

## Типы попапов

| Тип | Особенности |
|-----|-------------|
| Квиз | Мультишаговый, `quiz-screen` с `id="s0"`, `s1`…, `data-q="N"` |
| Таймер | Обратный отсчёт, `setInterval`, форматирование `00:00:00` |
| Кликер | Счётчик кликов, анимация прогресс-бара |
| Колесо/Рулетка | Canvas или CSS-трансформы для вращения |
| Сторис | Слайдер с автопрокруткой, прогресс-бар по времени |
| Меморис | Карточная игра на память |
| Скретч-карточка | Canvas с эффектом стирания |
| Слайдер | `overflow: hidden` + translate для переключения слайдов |
| Сбор контактов | Форма с валидацией + `carrotquest.identify()` |

### Квиз — ключевой паттерн

```js
var currentQ  = 0;
var quizPhase = "question"; // "question" | "feedback"
var correctCount = 0;

var QUESTIONS = [
  { correct: 1, feedbacks: ["текст0", "текст1 (верный)", "текст2", "текст3"] },
  // ...
];

// Показ экрана
function showScreen(id) {
  document.querySelectorAll('.quiz-screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
```

---

## `events.js` (хост-страница)

Слушает сообщения от iframe и управляет его DOM-элементом на странице сайта:

```js
window.addEventListener('message', function(e) {
  if (e.data.command == 'carrotquest.closePopup') {
    // анимирует и удаляет iframe
    document.getElementById('carrot_frame_' + e.data.id).remove();
    carrotquest.track('Закрыл поп-ап', { id: e.data.id });
  }
  if (e.data.command == 'carrotquest.resizeFrame') {
    // меняет размеры iframe
  }
  // ...
});
```

---

## Email-письма

Папка `Письма/` внутри клиента — статические `.html`-файлы.

- Стандартный email HTML: таблицы, `mso-*` свойства для Outlook, медиа-запросы для мобайла
- Именование: `ДД.ММ.ГГ.html` для дайджестов, или по теме (`Цепочка недозвон. 1 Письмо.html`)
- Шрифты: Google Fonts в `<link>` + fallback system fonts
- Ширина контейнера: 600px

---

## Как создать новый попап

1. Скопировать ближайшую по типу папку с готовым попапом внутри `<Клиент>/Поп-апы/`
2. Переименовать папку по схеме: `N.M Тип попапа (Клиент)`
3. Отредактировать `popup/src/popup.html`, `popup.js`, `popup.scss`
4. Сменить `cqpopup_name` в `popup.js`
5. Запустить `gulp build` (или `compiler.cmd`)
6. Загрузить `popup.compiled.js` в Carrot Quest

---

## Частые паттерны при редактировании

### Добавить вопрос в квиз
- Добавить объект в массив `QUESTIONS` в `popup.js`
- Добавить `<div id="sN" class="quiz-screen hidden" data-q="N">` в `popup.html`
- Обновить общее число вопросов в кнопке «ДАЛЕЕ (X ИЗ Y)»

### Изменить цветовую схему
- Все цветовые переменные — в начале `popup.scss`
- Цвета кнопок, фона, акцентов часто задаются CSS-переменными `--color-*`

### Добавить экран результата
- Отдельный `<div id="result" class="quiz-screen hidden">`
- В JS вызвать `showScreen('result')` после последнего вопроса
- Трекинг: `carrotquest.replied()`

### Форма с identify
```js
document.querySelector('.js-submit-btn').addEventListener('click', function() {
  var email = document.querySelector('.js-email-input').value;
  if (!email) return;
  carrotquest.identify([
    { op: 'update_or_create', key: '$email', value: email }
  ]);
  carrotquest.replied();
  showScreen('success');
});
```

---

## Важные детали

- `{{ sending_id }}` — **не JavaScript-переменная**, это шаблон CQ, подставляется при рендере попапа. В тексте файла должно быть именно `{{ sending_id }}`, не заменять на строку.
- `popup.compiled.js` — **бинарный артефакт**, генерируется автоматически. Не редактировать вручную.
- Все треки пишутся на **русском языке** — это требование клиентов для читаемости в дашборде CQ.
- `carrotquest` объект внутри iframe — **не настоящий SDK**, а локальная прокси-обёртка для postMessage.
- Картинки хранятся на CDN Carrot Quest (`files.carrotquest.app`) или на CDN клиента, URL абсолютные.