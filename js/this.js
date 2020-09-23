// 3) this в конструкторах и классах - новый экземпляр объекта
// конструктор функция ПОД КАБОТОМ СЕЙЧАС ПОЛЬЗУЮТЬСЯ class User
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`hello ${name}`);
    }
}

//добавление
User.prototype.exit = function () {
    console.log(`пользователь ${this.name} ушол`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 18);
console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();

ivan.exit();


// Контекст вызова. This - то что окружает функцию и в каких условиях она вызываеться

// 1) обычная функция this = window, но если стоит "use strict" - undefined
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return  a + b;
    }

    console.log(sum());
}
showThis(4, 5);


// 2) контекст у методов объекта - будет сам объек
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    },
    //пункт 1)
    sum2: function () {
        function shout() {
            console.log(this);
        }
        shout();
    }
}
obj.sum();
//пункт 1)
obj.sum2();

// 4) Ручное присвоение контекста (привязка this) call, apply, bind

function sayName(surname, age) {
    console.log(this);
    console.log(this.name + surname + age);
}

const user = {
    name: 'Jonn'
}

// разница только в синтаксизе
sayName.call(user, 'Smit', 23);
sayName.apply(user, ['Smit', 23]);

//Cоздает новую функцию и под нее подвязывает контекст
function count(num) {
    return this*num;
}
const dumble = count.bind(2);
console.log(dumble(2));
console.log(dumble(12));


//ПРИМЕНЕНИЕ
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    //выведет сам элемент на котором произошло событие(!При классическом виде function () {};!) работае  как event.target
    console.log(this);
});

// у стрелочных функций нет своего контекста, будут брать контекст у своего родителя
