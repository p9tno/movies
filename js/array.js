// let arr = [1, 2, 3, 6, 8];

//перебор массива(!не трансформирует!) с фукцией для каждого эл. callback функции. Не льзя остановить на нужном момнте break - не работает
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} в нутри массива ${arr}`);
// });

//свойство length - последний эл массива +1. НЕ ПРИСВАИВАТЬ ЗНАЧЕНИЕ НЕ ПОПОРЯДКУ
// arr[99] = 0;
// console.log(arr).length;

//удаление эл в конце массива
// arr.pop();

//добавление эл в конец массива
// arr.push('10', 10);

// console.log(arr);

//перебор массива
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (let value of arr) {
//     console.log(value);
// }



// .SPLIT(S) - превращает строку в массив, s - разделитель
// let str = prompt('введите товар через запятую', '');
// let produsts = str.split(',');
// console.log(produsts);

//.JOIN(S) - превращает массив в строку, s - разделитель
//SORT(Fn) - сортирует мвссиы, если не передать fn сортирует как !СТРОКИ!
// let str = prompt('введите товар через запятую', '');
// let produsts = str.split(',');
// produsts.sort();
// console.log(produsts.join('; '));

//sort для чисел
// let arr = [100, 2, 12, 67, 8];
// arr.sort(compareNum);
// function compareNum(a, b) {
//     return a - b;
// }
// console.log(arr);
