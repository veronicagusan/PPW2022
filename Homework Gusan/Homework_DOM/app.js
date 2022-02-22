/*
Задача №1 - событие загрузки документа и обращение к элементам DOM
Сразу после открытия документа, установить красный цвет фона страницы.
(задачи 1-4 выполнить в одном документе)
*/

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = "red";
});

/*
Задача №2 - событие загрузки документа и обращение к элементам DOM
Через 3 секунды после загрузки страницы, установить цвет фона в зеленый.
*/

setTimeout(() => {
    document.body.style.backgroundColor = "green";
}, 3000)

/*
Задача №3 - событие click 
Добавить кнопку с текстом Orange, при нажатии на которой, цвет страницы становится оранжевым.
*/

const firstButton = document.getElementById("firstButton");

firstButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "orange";
});

/*
Задача №4 - добавление элементов в DOM
Добавить в странице нумерованный список(ol). После открытия страницы, каждые 2 секунды, в список добавится новый элемент (li)
с текстом `Элемент ${i}`. Заполнение списка остановится когда в списке будет 20 элементов.
У четных элементов будет зеленый фон а у нечетных фиолетовый.
*/

let list = document.createElement('ol');
let addElement = () => {
    let elementOfList = [];
    let i = 0;
    let timer = setInterval(() => {
        i++;
        elementOfList = document.createElement('li');
        elementOfList.innerHTML = `Element ${i}`;

        if (i % 2 == 0) {
            elementOfList.style.background = 'violet';
        } else {
            elementOfList.style.background = 'green';
        }
        list.append(elementOfList);
    }, 2000);

    setTimeout(() => {
        clearInterval(timer);
    }, 40000);
}

document.body.append(list);
addElement();