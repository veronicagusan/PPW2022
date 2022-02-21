/*
Задача №1 - создание объекта
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/

/*
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);
*/

/*
Задача №2 - работа со свойствами
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/

/*
let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);
*/

/*
Задача №3 - методы объекта
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
*/

/*
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
  };

function multiplyNumeric(obj) {
	for (let key in obj) {
	  if (typeof obj[key] == 'number') {
		obj[key] *= 2;
	  }
	}
  };
  multiplyNumeric(menu);
  console.log(menu);
  */

/*
Задача №4 - обработка объектов
Создайте объект user1 со следующей структурой:
{
	name: `User 1`,
	age: 123
}
Создайте объект user2 с той же структурой и копируйте в него объект user1.
Замените в user 2 значения name = `User 2` и age = 321.
Выведите в консоль оба объекта. 
PS: Если у вас выведется 2 раза одинаковые значения, значит задача выполнена неправильно.
*/

/*
let user1 = {
	name: `User 1`,
	age: 123
}
let user2 = Object.assign({}, user1);
user2.name =`User 2`;
user2.age = 321;
console.log(user1, user2);
*/

/*
Задача №5 - обработка объектов
Создайте объект person со следующей структурой:
{
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: ‘email@domain.com’
},
address: `Moldova`
}

Замените в этом объекте номер телефона на `+37312345678` и удалите поле address. Выведите объект в консоль.
*/

/*
let obj = {
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: `email @domain.com`
	},
	address: `Moldova`
};
obj.contacts.phone = `+37312345678`;
delete obj.address;
console.log(obj);
*/

/*
Задача №6 - массив объектов
Задан массив из точек [{1, 2}, {3, 4}, {null, 4}, {3, undefined}]
Написать функцию которая удалит из массива все неправильно заданные точки и вернет массив из точек у которых координаты указаны правильно.
[{1, 2}, {3, 4}]
*/

const obj = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

const del = (obj) => {
    return obj.filter((element, index) => typeof (obj[index].x) === 'number' && typeof (obj[index].y) === 'number');
}

console.log(del(obj));

/*
Задача №7 - getters
Создайте объект person со следующей структурой:
{
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: ‘email@domain.com’
},
address: `Moldova`
}

Создайте по одной функции get для каждого поля объекта (функции/методы должныдолны принадлежать объекту)

Задача №8 - работа с ключами объекта
Задан объект 
const weekDays = {
	“Mo”: “Понедельник”,
	“Tu”: “Вторник”,
	“We”: “Среда”,
	“Th”: “Четверг”,
	“Fr”: “Пятница”,
	“Sa”: “Суббота”,
	“Su”: “Воскресенье”,
}

Напишите функцию translate которая переводит названия дней на румынском

const weekDays = {
	“Mo”: “Luni”,
	“Tu”: “Marti”,
	“We”: “Miercuri”,
	“Th”: “Joi”,
	“Fr”: “Vineri”,
	“Sa”: “Simbata”,
	“Su”: “Duminica”
}
Примечание: нельзя делать так weekDays[“mon”] = “Luni”
Используйте методы для работы с объектами или массивами.

Задача №9 - работа с ключами объекта
Задан объект
const weekDays = {
	“Luni”: “Mo”,
	“Marti”: “Tu”,
	“Miercuri”: “We”,
	“Joi”: “Th”,
	“Vineri”: “Fr”,
	“Simbata”: “Sa”,
	“Duminica”: “Su”
}
Напишите функцию которая получит как параметр этот объект и вернет следующий объект
const weekDays = {
	“Mo”: “Luni”,
	“Tu”: “Marti”,
	“We”: “Miercuri”,
	“Th”: “Joi”,
	“Fr”: “Vineri”,
	“Sa”: “Simbata”,
	“Su”: “Duminica”
}
Придумайте подходящее название для этой функции.

Задача №10 - работа с ключами объекта

Создайте 2 объект person со следующей структурой:
{
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: ‘email@domain.com’
},
address: `Moldova`
}

Напишите метод Intersection который получит на входе эти 2 объекта и вернет новый объект только из тех полей значение которых равна о обоих объектов.

*/