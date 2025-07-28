//todo ===========================   Task - 1   ====================================

//! 1 - отримай body елемент і виведи його в консоль;
//* const body = document.querySelector("body");
//* console.log(body);

//! 2 - отримай елемент id="title" і виведи його в консоль;
//* const title = document.querySelector("#title");
//* console.log(title);

//! 3 - отримай елемент class="list" і виведи його в консоль;
//* const list = document.querySelector(".list");
//* console.log(list);

//! 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
//* const dataTopic = document.querySelectorAll("[data-topic]");
//* dataTopic.forEach((el) => {
//*   console.log(el.dataset.topic);
//* });

//! 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
//* const dataTopic = document.querySelectorAll("[data-topic]");
//* console.log(dataTopic[0]);

//! 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
//* const dataTopic = document.querySelectorAll("[data-topic]");
//* const lastElement = dataTopic[dataTopic.length - 1];
//* console.log(lastElement);

//! 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
//* const h1Element = document.querySelector("h1");
//* console.log(h1Element.nextElementSibling);

//! 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
//* const titleH3 = document.querySelectorAll("h3");
//* titleH3.forEach((el) => {
//*   console.log(el.textContent);
//* });

//! 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const titleH3 = document.querySelectorAll("h3");
titleH3.forEach((el) => {
  el.classList.add("active");
  el.style.color = "red";
});

//! 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
//* const navItem = document.querySelectorAll("li[data-topic]");
//* navItem.forEach((el) => {
//*   if (el.getAttribute("data-topic") === "navigation") {
//*     console.log(el);
//*   }
//* });
//* const navItemm = document.querySelector('li[data-topic="navigation"]');
//* console.log(navItemm);

//! 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
const navItem = document.querySelector('li[data-topic="navigation"]');
navItem.setAttribute("style", "background-color:yellow");

//! 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const paragraph = document.querySelector('[data-topic="navigation"] p');
paragraph.textContent = "Я змінив тут текст!";

//! 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const topic = document.querySelector(`li[data-topic="${currentTopic}"]`);
// console.log(topic);

//! 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
topic.setAttribute("style", "background-color:lightblue");

//! 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleCompleted = document.querySelector(".completed");
// console.log(titleCompleted.textContent);

//! 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
titleCompleted.parentElement.remove("li");

//! 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const titleH1 = document.querySelector("h1");
const newParagraph = document.createElement("p");
newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
titleH1.insertAdjacentElement("afterend", newParagraph);

//! 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML"
//!   а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
//! використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
//! тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const list = document.querySelector(".list");

// list.innerHTML += ` <li>
//           <h3>Властивість innerHTML</h3>
//           <p>
//             Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
// використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
//           </p>
//         </li>`;

//! 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const list = document.querySelector(".list");

const newItem = ` <li>
          <h3>Властивість innerHTML</h3>
          <p>
            Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
          </p>
        </li>`;
list.insertAdjacentHTML("beforeend", newItem);
//! 20 - очисти список
// list.remove();

//todo ===========================   Task - 2   ====================================
//! Створіть контейнер div (з класом number-container) в HTML-документі
//! та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
//! числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
//! Парні числа повинні мати зелений фон (додати клас even),
//! Непарні числа - жовтий фон (додати клас odd).
//? const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numberContainer = document.querySelector(".number-container");
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
//! Варіант 1
//* for (let i = 0; i < 100; i++) {
//*   const numberDiv = document.createElement("div");
//*   const num = randomNumber();
//*   numberDiv.textContent = num;
//*   numberDiv.classList.add("number");
//*   if (num % 2 === 0) {
//*     numberDiv.classList.add("even");
//*   } else {
//*     numberDiv.classList.add("old");
//*   }
//*   numberContainer.appendChild(numberDiv);
//* }

//! Варіант 2
const blocks = Array.from({ length: 100 }).map(() => {
  const num = randomNumber();
  const className = num % 2 === 0 ? "even" : "old";
  return `<div class="number ${className}">${num}</div>`;
});
numberContainer.innerHTML = blocks.join("");

//todo ===========================   Task - 3   ====================================
//! Form Events, Input, Focus, Blur and Submit.

//! Використовуй шаблон форми з файлу html.

//! 1 - При події `input`, якщо користувач ввів в поле більше
//! 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
//! то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
