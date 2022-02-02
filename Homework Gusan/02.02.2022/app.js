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

let a = Number(prompt("Please, enter the first number"));
let b = Number(prompt("Please, enter the second number"));
let c = Number(prompt("Please, enter the third number"));
if((a == b) && (a == c)) console.log("The numbers are the same");
else {console.log("Max is ", Math.max(Math.max(a, b), c), ", Min is ", Math.min(Math.min(a, b), c))};