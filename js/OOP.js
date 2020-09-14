const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};


// СОЗДАНИЕ ПРОТОТИПА 1 й способ
const jonh = Object.create(soldier);

// const jonh = {
//     heialth: 100
// };

//устаревший способ прототипа
// jonh.__proto__ = soldier;



// СОЗДАНИЕ ПРОТОТИПА 2 й способ
// если переменная уже создана то присваиваем прототив
// Object.setPrototypeOf(jonh, soldier);

console.log(jonh);
console.log(jonh.armor);
jonh.sayHello();
