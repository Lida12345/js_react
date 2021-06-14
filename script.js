"use strict";
/* урок16 */
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);


/*console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function calc(a, b) {
    return (a + b);
}*/



function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();


const calc = (a, b) => {
    console.log ('1');
    return a + b;
};

/* урок 17 */

const str = "teSt";

//console.log(str[2] = 'd');

//console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello world";

//console.log(logg.slice(6, 11));

//console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
//console.log(parseInt(test));
console.log(parseFloat(test));

/* урок 19 */

function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second(); 

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я прошел этот урок!');
});

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);

/* Урок 20 */

const options = {
    name: `test`,
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

//console.log(Object.keys(options).length);

//console.log(options.name);

//delete options.name;

//console.log(options);
/*let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
       for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }    
}
console.log(counter);*/

/* Урок 21 */

const arr = [2, 3, 6, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
//arr[99] = 0;
//console.log(arr.length);
//console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

//arr.pop();
//arr.push(10);

//console.log(arr);

//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

for (let value of arr) {
    console.log(value); 
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));

/* Урок 22 */

/*let a = 5,
    b = a;

    b = b + 5;

    console.log(b);
    console.log(a);

    const obj = {
        a: 5,
        b: 1
    };*/

   /* const copy = obj;// Передает ссылку

    copy.a = 10;

    console.log(copy);
    console.log(obj);*/

 function copy(mainObj) {
     let objCopy = {};

     let key;
     for (key in mainObj) {
         objCopy[key] = mainObj[key];
     }

     return objCopy;
 }
 
 const numbers = {
     a: 2,
     b: 5,
     c: {
         x: 7,
         y: 4
     }
 };

 const newNumbers = copy(numbers);

 newNumbers.a = 10;
 newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

 const add = {
     d: 17,
     e: 20
 };

const clone =  Object.assign({}, add);
 
 clone.d = 20;

 //console.log(add);
 //console.log(clone);

 const oldArray = ['a', 'b', 'c'];
 const newArray = oldArray.slice();

 newArray[1] = 'adasdasda';
 console.log(newArray);
 console.log(oldArray);

 const video = ['youtube', 'vimeo', 'rutube'],
       blogs = ['wordpress', 'livejournal', 'blogger'],
       internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

// Урок 23

let str = "some";
let strObj = new String(str);

//console.log(typeof(str));
//console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier);

/*const jonh = {
    health:100
};*/

//jonh.__proto__ = soldier; //устаревший формат

//Object.setPrototypeOf(jonh, soldier);

//console.log(jonh.armor);

jonh.sayHello();

// Урок 26

"use strict";

// To String

//  способ 1)
//console.log(typeof(String(null)));
 // console.log(String(null));
 console.log(typeof(String(4)));

 // способ 2) конкотенация

 console.log(typeof(5 + ''));

 const num = 5;

 console.log("https://vk.com/catalog/" + num);

 const fontSize = 26 + 'px';

 //To Number

 // способ 1)
 console.log(typeof(Number('4')));

 // 2) Унарный плюс
 console.log(typeof(+'5'));

 // 3)
 console.log(typeof(parseInt("15px", 10)));

 let answ = +prompt("Hello", "");

 // To boolean

// 0, '', null, undefined, NaN;
// 1)

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"44444"));

//Урок 27

/* Какое будет выведено значение: let x = 5; alert( x++ ); ?



Чему равно такое выражение: [ ] + false - null + true ?

Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

Чему равна сумма [ ] + 1 + 2?

Что выведет этот код: alert( "1"[0] )?

Чему равно 2 && 1 && null && 0 && undefined ?

Есть ли разница между выражениями? !!( a && b ) и (a && b)?

Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

Что выведет этот код: alert( +"Infinity" ); ?

Верно ли сравнение: "Ёжик" > "яблоко"?

Чему равно 0 || "" || 2 || undefined || true || falsе ? */




































