/*
Задача №1 - условный оператор
Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, который в 
зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)
*/


/*
let n = Number(prompt("Please, enter a digit"));
switch (n) {
    case 0:
        alert("Zero");
        break;
    case 1:
        alert("One");
        break;
    case 2:
        alert("Two");
        break;
    case 3:
        alert("Three");
        break;
    case 4:
        alert("Four");
        break;
    case 5:
        alert("Five");
        break;
    case 6:
        alert("Six");
        break;
    case 7:
        alert("Seven");
        break;
    case 8:
        alert("Eight");
        break;
    case 9:
        alert("Nine");
        break;
    default:
        alert("Please, try again :(");
}
*/

/*
Задача №2 - циклы
Напишите код который посчитает и выведет в консоль сумму четных чисел из интервала [a, b]
*/

/*
let a = Number(prompt("Please, enter the left border number"));
let b = Number(prompt("Please, enter the right border number"));

let summ = 0, i;
for (i = a; i <= b; i++) {
if (i % 2 == 0) summ += i;
};

console.log("summ = ", summ);
//alert(summ);
*/

/* 
Задача №3 - условный оператор
Написать код который определит наибольшее и наименьшее число из a, b, c и выведет на экран соответствующее сообщение.
PS: попробуйте решить эту задачу одной строчки кода (сравнение и вывод)
*/

/*
let a = Number(prompt("Please, enter the first number"));
let b = Number(prompt("Please, enter the second number"));
let c = Number(prompt("Please, enter the third number"));
if((a == b) && (a == c)) console.log("The numbers are the same");
else {console.log("Max is ", Math.max(Math.max(a, b), c), ", Min is ", Math.min(Math.min(a, b), c))};
*/

/*
Задача №4 - функции
Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом. Например:
ucFirst("вася") == "Вася";
*/

/*
const ucFirst = (str) => {
    if (!str) return "Please, enter a word!";
    else return str[0].toUpperCase() + str.slice(1);;
}
let word = prompt("Please, enter a word");
console.log(ucFirst(word));
*/

/*
Задача №5 - строки
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
Например:
alert( extractCurrencyValue('$120') === 120 ); // true
*/

/*
const extractCurrencyValue = (str) => {
    if (!str) return "Please, enter a word!";
    else return str.slice(1);
}
let word = prompt("Please, enter a word");
console.log(extractCurrencyValue(word));
*/

/*
Задача №6 - условный оператор
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Error, если введено не число
*/

/*
let a = Number(prompt("Please, enter a number"));
if (isNaN(a)) alert("Error");
else if (a > 0) alert(1);
else if (a < 0) alert(-1);
else alert(0);
*/

/*
Задача №7 - условный оператор
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
*/

/*
let age = prompt("Please, enter a number");
if (!((age >= 14) && (age <= 90))) alert ("Numer is in"); else alert("Number is out");
// if ((age <= 14) || (age >= 90)) alert ("Numer is out"); else alert("Number is in");
*/

/*
Задача №8 - условный оператор
Напишите код который проверит правильность username и password и выводит следующие сообщения:
Привет, если совпадает username и password
Неправильный пароль если username введен правильно а пароль нет
Неправильный username, если введен неправильный username
Ошибка Валидации, если ничего не введено
PS: На практике не делать такое никогда (писать пользователю что он ввел неверно, username или password)
*/

let username = prompt("Please, enter your username");
let password = prompt("Now, enter your password");
if(!username || !password) alert("Validation error!");
else if((username == "veronicagusan") && (password == "Qwe123!")) alert("Hy :)");
else if(username != "veronicagusan") alert("Wrong username");
else alert("Wrong password");

/*
Задача №9 - взаимодействие с пользователем
Напишите код который при открытии страницы запросит у пользователя его имя(prompt). После ввода имени, 
вывести ему сообщение `Привет ${name}`. Спросить у пользователя если он знаком с языком JavaScript(confirm) и вывести `Молодец`, 
если его ответ Да и сообщение `Можно начать изучение прямо сейчас`, если его ответ Нет.
*/

/* let name = prompt("Hey! What is your name?");
alert(`Hello, ${name}!`);
let js = confirm("Do you know JavaScript?");
if (js) alert("Super!");
else alert("You can start start learning right now!");
*/

/*
Задача №10 - условный оператор и циклы
Напишите функцию которая определяет и выводит в консоль все делитель заданного числа.
const dividers = (number) => {
//	your code here
}
*/

/*
const dividers = (number) => {
    for( let i = 1; i <= number; i++)
    if(number % i == 0) console.log(i);
    }
let n = Number(prompt("Please, enter a number"));
dividers(n);
*/