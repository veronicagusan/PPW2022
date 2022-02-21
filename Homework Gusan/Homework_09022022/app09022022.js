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
Создать массив который содержит минимум 5 учеников  (алгоритм должен работать для любого количества учеников) и их 
оценки (минимум 4 оценки)

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


/*const sumInputNumbers = () => {
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
  console.log("Summ is: ", sumInputNumbers());
*/

/*
Задача №5 - стрелочные функции обработки массивов
Напиши функцию convert(fn, array), которая принимает на вход функцию и массив, и обрабатывает 
каждый элемент массива этой функцией, возвращая новый массив. Пример:

function square(x) { return x * x; } // возведение в квадрат
console.log(convert(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(convert(square, [])); // []
Обрати внимание: функция не должна изменять переданный ей массив:

let arr = [1, 2, 3];
console.log(convert(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]
 */

/*
const convert = (fn, array) => {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(cube(array[i]));
    }
    return newArray;
}
const cube = (x) => {return x*x*x;}
const initArray = [1, 2, 3, 4];
console.log(convert(cube,initArray));
console.log(initArray);
*/

/*
Задача №6 - функции обработки массивов
Задан массив [1, 2, 3, 4, 5, 6, 7, 8, 9].
Используя одну функцию обработки массивов, из исходного массива нужно получить [1, 2, 3, 4, 0, 0, 0, 6, 7, 8, 9]
 */

/*
const initArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
initArray.splice(4, 1, [0, 0, 0]);
initArray.forEach(element => console.log(element));
*/

/*
Задача №7 - функции обработки массивов
Задан массив [1, 2, 3, 4, 5, 6, 7, 8, 9]. Написать функцию которая возвращает элементы этого массива, 
начиная с позиции start по позиции end.

extract(2, 4) вернет [3, 4, 5]
 */

/*
const initArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const extract = initArray.slice(2, 4);
extract.forEach(element => console.log(element));
*/

/*
Задача №8 - функции обработки массивов
Задан массив
const colors = [“red”, “green”, “blue”];
Написать функцию
checkColor(color)
которая вернет позицию цвета в массиве если она есть или -1 если цвета нет. 
*/

/*
const colors = ["red", "green", "blue"];
const checkColor = colors.findIndex(element => element == "bluee");
console.log(checkColor);
*/

/*
Задача №9 - функции обработки массивов
Задан массив [1, “a”, 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100]
Напишите функцию filter которая удалить лишнее из массива (все что не является цифрой) и вернет чистый массив [1, 2,  3, 4, 5, 6, 7, 8, 9]
*/
const all = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
const newArray = all.filter((element) => {
    return typeof element === 'number';
});
console.log(newArray);

/*
Задача №10 - функции обработки массивов
Задан массив [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1]
Напишите функцию uniqueSorted, которая удалит дубликаты из массива и вернет отсортированный по возрастанию массив из уникальных значений
[0, 1, 2,  3, 4, 5, 6, 7, 8, 9]
 */