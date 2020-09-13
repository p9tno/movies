const options = {
    name: 'test',
    width: 1024,
    heihgt: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};

options.makeTest();

//дестроктуризация объекта
let {border, bg} = options.colors;
console.log(border);


// delete options.name;

console.log(options);

//перебор + счеьчик для длины объекта
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`свойство ${key} имеет значение ${options[key]}`);
//         counter++
//     }
// }
// console.log(counter);


// console.log(Object.keys(options));
// let array = Object.keys(options);
// console.log(array.length);
