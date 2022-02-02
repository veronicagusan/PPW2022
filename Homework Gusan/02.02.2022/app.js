/*
Задача №1 - условный оператор
Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, который в 
зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)
 */

const n = Number(prompt("Please, enter a digit"));
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