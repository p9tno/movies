//копирование объектов поверхностная первого уровня, не глубокая!!!!
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 5,
    b: 10,
    c: {
        x:100,
        z:121
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 42;
newNumbers.c.x = 42;
console.log(numbers);
console.log(newNumbers);


const add = {
    d: 17,
    e: 20
};
// объеденение объектов
console.log(Object.assign(numbers, add));

//клон add
const clon = Object.assign({}, add)
add.d = 42;
console.log(clon);
console.log(add);



const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray; //ссылка на oldArray

//slice() копирует массив
const newArray = oldArray.slice();
newArray[0] = 'A';

console.log(oldArray);
console.log(newArray);

// оператор разворота "..."
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'blogger', 'new'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);

// 4 способ создать копию массива (es9 для объектов)
const array = ['a', 'b'];
const arrayNew = [...array];

const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
