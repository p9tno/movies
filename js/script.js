"use strict"

// let numberOfFilms;
//
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     //пока пустая строка, или пока отмена, или пока не число - работает цикл
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
//
// start();
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
//
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++){
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его', '');
//
//         if (a != null && b != null && a != '' && b != '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     };
// }
//
// // rememberMyFilms();
//
//
// function detectedPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     };
// }
//
// // detectedPersonalLevel();
//
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('privat true');
//     }
//
// }
//
// showMyDB(personalMovieDB.privat);
//
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`)
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }
//
// writeYourGenres();


// let a = 5,
//     b = a;
//
// b = b + 5;
//
// console.log(b);
// console.log(a);
//
// //
//
// const obj = {
//     a: 5,
//     b: 1
// };
//
// const copy = obj;// cсылка на существующий объект
// copy.a = 10;
//
// console.log(obj);
// console.log(copy);
