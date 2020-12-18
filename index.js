/* Функции, использующиеся в файле */

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

/* Переключение темы */

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function () {
  page.classList.toggle('light-theme');
  page.classList.toggle('black-theme');
};

/* Массивы */

let cats = [
  '<img src="icons/cats/cat(1).png" alt="cat1" />',
  '<img src="icons/cats/cat(2).png" alt="cat2" />',
  '<img src="icons/cats/cat(3).png" alt="cat3" />',
  '<img src="icons/cats/cat(4).png" alt="cat4" />',
  '<img src="icons/cats/cat(5).png" alt="cat5" />',
  '<img src="icons/cats/cat(6).png" alt="cat6" />',
  '<img src="icons/cats/cat(7).png" alt="cat7" />',
  '<img src="icons/cats/cat(8).png" alt="cat8" />',
  '<img src="icons/cats/cat(9).png" alt="cat9" />',
  '<img src="icons/cats/cat(10).png" alt="cat10" />',
  '<img src="icons/cats/cat(11).png" alt="cat11" />',
  '<img src="icons/cats/cat(12).png" alt="cat12" />',
  '<img src="icons/cats/cat(13).png" alt="cat13" />',
  '<img src="icons/cats/cat(14).png" alt="cat14" />',
  '<img src="icons/cats/cat(15).png" alt="cat15" />',
  '<img src="icons/cats/cat(16).png" alt="cat16" />',
  '<img src="icons/cats/cat(17).png" alt="cat17" />',
  '<img src="icons/cats/cat(18).png" alt="cat18" />',
  '<img src="icons/cats/cat(19).png" alt="cat19" />',
  '<img src="icons/cats/cat(20).png" alt="cat20" />',
];

let dogs = [
  '<img src="icons/dogs/dog(1).png" alt="dog1" />',
  '<img src="icons/dogs/dog(2).png" alt="dog2" />',
  '<img src="icons/dogs/dog(3).png" alt="dog3" />',
  '<img src="icons/dogs/dog(4).png" alt="dog4" />',
  '<img src="icons/dogs/dog(5).png" alt="dog5" />',
  '<img src="icons/dogs/dog(6).png" alt="dog6" />',
  '<img src="icons/dogs/dog(7).png" alt="dog7" />',
  '<img src="icons/dogs/dog(8).png" alt="dog8" />',
  '<img src="icons/dogs/dog(9).png" alt="dog9" />',
  '<img src="icons/dogs/dog(10).png" alt="dog10" />',
  '<img src="icons/dogs/dog(11).png" alt="dog11" />',
  '<img src="icons/dogs/dog(12).png" alt="dog12" />',
  '<img src="icons/dogs/dog(13).png" alt="dog13" />',
  '<img src="icons/dogs/dog(14).png" alt="dog14" />',
  '<img src="icons/dogs/dog(15).png" alt="dog15" />',
  '<img src="icons/dogs/dog(16).png" alt="dog16" />',
  '<img src="icons/dogs/dog(17).png" alt="dog17" />',
  '<img src="icons/dogs/dog(18).png" alt="dog18" />',
  '<img src="icons/dogs/dog(19).png" alt="dog19" />',
  '<img src="icons/dogs/dog(20).png" alt="dog20" />',
  '<img src="icons/dogs/dog(21).png" alt="dog21" />',
  '<img src="icons/dogs/dog(22).png" alt="dog22" />',
  '<img src="icons/dogs/dog(23).png" alt="dog23" />',
  '<img src="icons/dogs/dog(24).png" alt="dog24" />',
  '<img src="icons/dogs/dog(25).png" alt="dog25" />',
  '<img src="icons/dogs/dog(26).png" alt="dog26" />',
  '<img src="icons/dogs/dog(27).png" alt="dog27" />',
  '<img src="icons/dogs/dog(28).png" alt="dog28" />',
  '<img src="icons/dogs/dog(29).png" alt="dog29" />',
  '<img src="icons/dogs/dog(30).png" alt="dog30" />',
  '<img src="icons/dogs/dog(31).png" alt="dog31" />',
];

let workQuotes = [
  '"Не работаешь — жить не на что. Работаешь — жить некогда."',
  '"Не все в курсе, но, оказывается, можно иметь работу своей мечты."',
  '"Я не хочу зарабатывать на жизнь; я хочу жить."',
  '"Если у тебя внезапно появится желание работать, сядь и успокойся, оно пройдет само."',
  '"Кто работает целый день, тому некогда зарабатывать деньги."',
  '"Удовольствие так же необходимо, как работа."',
  '"Лучший способ сделать карьеру – работать на того, кто делает карьеру."',
  '"Некоторые ступени карьеры ведут на виселицу."',
];

let sadQuotes = [
  '"Даже в человеческом счастье есть что-то грустное."',
  '"Грусть — слишком мягкое и приятное слово."',
  '"Тоска — это когда жаждешь чего-то, сам не знаешь чего… Оно существует, это неведомое и желанное, но его не высказать словом."',
  '"Перебирая воспоминания, боюсь наткнуться на такие, от которых на меня накатывает тоска."',
  '"Печаль — это всего лишь изношенная радость."',
  '"Не только плохие воспоминания заставляют грустить, но и самые лучшие, когда знаешь, что они не повторятся."',
];

let angryQuotes = [
  '"Каждую минуту, когда вы злитесь на кого-то, вы теряете 60 секунд счастья, которое вы никогда не вернете."',
  '"Злых людей нет на свете, есть только люди несчастливые."',
  '"Гнев означает страх. Тот, кто злится, — испуган, он боится что-то потерять."',
  '"Немного злости полезно для сердца, кровообращения и кожи."',
  '"Вами управляет тот, кто вас злит."',
  '"Если ты хочешь владеть собой, сначала следует разобраться со своими внутренними проблемами."',
  '"Истинный источник агрессии человека к человеку – способность чувствовать."',
  '"Злоба является неосознанной реакцией на отсутствие любви, независимо от того, что человек считает любовью."',
];

let normalQuotes = [
  '"Не имеет значения, что думают другие – поскольку они в любом случае что-нибудь подумают. Так что расслабься."',
  '"Правда — это странная штука. Сначала мы тратим кучу времени, чтобы ее узнать, а потом всю оставшуюся жизнь, чтобы забыть."',
  '"Люди зажаты между прошлым, за которое им стыдно, и будущим, которое их пугает."',
  '"Я признателен всем, кто говорил мне «нет»: благодаря им я делал все сам."',
  '"Есть только два дня в году, когда вы не можете ничего сделать. Один из них называется вчера, а другой называется завтра."',
];

let happyQuotes = [
  '"Надо всегда быть радостным. Если радость кончается, ищи, в чем ошибся."',
  '"Ключи от счастья – это мечты, воплотившиеся в жизнь."',
  '"Не стоит бояться счастья. Оно быстро проходит."',
  '"В каждой минуте есть что-то великое, например, счастье."',
  '"Счастье — когда утром хочется на работу, а вечером — домой."',
  '"Пытаясь стереть шрамы, звёздное небо касается наших сердец."',
  '"Даже в человеческом счастье есть что-то грустное."',
  '"Счастливой жизни нет, есть только счастливые дни."',
];

/* Нажатие кнопки про настроение */

let workButton = document.querySelector('.work-button');

workButton.addEventListener('click', function () {
  let codeImage = getRandomElement(workQuotes);

  document.getElementById('quote').innerHTML = codeImage;
});

let happyButton = document.querySelector('.happy-button');

happyButton.addEventListener('click', function () {
  let codeImage = getRandomElement(happyQuotes);

  document.getElementById('quote').innerHTML = codeImage;
  document.getElementById('mood-text').innerHTML = 'радостный';
});

let sadButton = document.querySelector('.sad-button');

sadButton.addEventListener('click', function () {
  let codeImage = getRandomElement(sadQuotes);

  document.getElementById('quote').innerHTML = codeImage;
  document.getElementById('mood-text').innerHTML = 'грустный';
});

let angryButton = document.querySelector('.angry-button');

angryButton.addEventListener('click', function () {
  let codeImage = getRandomElement(angryQuotes);

  document.getElementById('quote').innerHTML = codeImage;
  document.getElementById('mood-text').innerHTML = 'раздражен';
});

let normalButton = document.querySelector('.normal-button');

normalButton.addEventListener('click', function () {
  let codeImage = getRandomElement(normalQuotes);

  document.getElementById('quote').innerHTML = codeImage;
  document.getElementById('mood-text').innerHTML = 'в нормальном настроении';
});

/*Скрытие части с выбором настроения*/

let page2 = document.querySelector('.mood');
let page5 = document.querySelector('.pets');

workButton.addEventListener('click', function () {
  page2.classList.add('invisible2');
  page5.classList.remove('invisible2');
});

sadButton.addEventListener('click', function () {
  page2.classList.add('invisible2');
  page5.classList.remove('invisible2');
});

angryButton.addEventListener('click', function () {
  page2.classList.add('invisible2');
  page5.classList.remove('invisible2');
});

normalButton.addEventListener('click', function () {
  page2.classList.add('invisible2');
  page5.classList.remove('invisible2');
});

happyButton.addEventListener('click', function () {
  page2.classList.add('invisible2');
  page5.classList.remove('invisible2');
});

/* Нажатие кнопки про животное */

let catButton = document.querySelector('.cats-button');

catButton.addEventListener('click', function () {
  let codeImage = getRandomElement(cats);

  document.getElementById('choose').innerHTML = codeImage;
});

let dogButton = document.querySelector('.dogs-button');

dogButton.addEventListener('click', function () {
  let codeImage = getRandomElement(dogs);

  document.getElementById('choose').innerHTML = codeImage;
});

/*Скрытие части с выбором животного*/

let page3 = document.querySelector('.pets');
let page6 = document.querySelector('.main');
let again = document.querySelector('.again');

dogButton.addEventListener('click', function () {
  page3.classList.add('invisible2');
  page6.classList.remove('invisible2');
  again.classList.remove('invisible2');
});

catButton.addEventListener('click', function () {
  page3.classList.add('invisible2');
  page6.classList.remove('invisible2');
  again.classList.remove('invisible2');
});

console.log(catButton);

/* Кнопка "Хочу еще" */

let againButton = document.querySelector('.again-button');

againButton.addEventListener('click', function () {
  page6.classList.add('invisible2');
  page2.classList.remove('invisible2');
  again.classList.add('invisible2');
});
