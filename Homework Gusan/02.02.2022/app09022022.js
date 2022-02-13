/*
Arrays
Задача №1 - вывод массива
Создайте массив из n чисел и выводите его в консоль 5 разными способами:
for, while, do … while
for in
for of
forEach
map
В конце кода, пишите в комментарии свое мнение какой из способов лучше. Найдите еще один способ вывода массива.
 */

/*let fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < fibonacciNumbers.length; i++) {
    console.log(fibonacciNumbers[i]);
}

i = 0;
while (i < fibonacciNumbers.length) {
    console.log(fibonacciNumbers[i]);
    i++;
}

i = 0;
do {
    console.log(fibonacciNumbers[i]);
    i++;
} while (i < fibonacciNumbers.length);

for (let number of fibonacciNumbers) {
    console.log(number);
}

for (let number in fibonacciNumbers) {
    console.log(fibonacciNumbers[number]);
}

fibonacciNumbers.forEach(element => console.log(element));

let newFibonacci = fibonacciNumbers.map(element => console.log(element));
*/

//metoda cu forEach pare cea mai simpla

/*
Задача №2 - обработка массива
Создать массив который содержит минимум 5 учеников  (алгоритм должен работать для любого количества учеников) и их оценки (минимум 4 оценки)

[
 {
	name: “First”,
	marks: [8, 10, 7, 5, 4]
 }
]

Написать следующие функции обработки этого массива: 
1. считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива
2. выводит учеников со у которых средняя оценка < 5
3. находит учеников с максимальной и минимальной оценкой
4. сортирует учеников по средней оценке по убыванию (с самой большой средней в начале, с наименьшим в конце списка)
5. выводит тех учеников чья средняя оценка больше средней оценки всего класса
 */

/*const students = [
    {
        name: "Veronica",
        marks: [8, 9, 9, 10, 8]
    },
    {
        name: "Ana",
        marks: [7, 8, 9, 10, 9]
    },
    {
        name: "Nastea",
        marks: [9, 9, 9, 7, 9]
    },
    {
        name: "David",
        marks: [6, 7, 8, 8, 7]
    },
    {
        name: "Dina",
        marks: [5, 8, 8, 6, 8]
    },
    {
        name: "Inga",
        marks: [7, 7, 8, 8, 9]
    },
    {
        name: "Vlad",
        marks: [8, 9, 10, 10, 7]
    },
    {
        name: "Elvira",
        marks: [9, 8, 7, 9, 9]
    },
    {
        name: "Max",
        marks: [8, 7, 9, 5, 7]
    },
    {
        name: "Cristian",
        marks: [7, 5, 4, 7, 7]
    }
];*/

//Error!!
//sum = students[0].marks.reduce((sum, number) => sum + number, 0);
//let sum = 0;
//const summ = students.map(students.marks.reduce((sum, number) => sum + number));

//console.log(summ);
//let averrage = students.map((sum = students.marks.reduce((sum, number) => sum + number, 0)) => sum / students.marks.length);
//console.log(averrage);

//const average = arr => arr.reduce(sum = numbers.reduce((sum, number) => sum + number) / arr.length);

/*
Задача №3 - обработка массива
Создать массив и произвести над ним следующие 5 операций:

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.

Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
 */

/* 
const styles = ['Jazz', 'Blues'];
styles.forEach(element => console.log(element));

styles.push('Rock and Roll');
styles.forEach(element => console.log(element));

styles.splice(styles.length/2, 1, 'Classic');
styles.forEach(element => console.log(element));

styles.shift();
styles.forEach(element => console.log(element));

styles.unshift('Rap', 'Rugby');
styles.forEach(element => console.log(element));
*/

/*
Задача №4 - обработка массива
Напишите функцию sumInputNumbers(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 */

function sumInputNumbers() {
    let values = [];
    while (true) {
      let value = prompt("Please, enter a number", 0);
      if (!isFinite(value) || value === "" || value === null) break;
      values.push(+value);
    }
  
    let sum = 0;
    for (let number of values) {
      sum += number;
    }
    return sum;
  }
  alert(sumInputNumbers());