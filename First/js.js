"use strict";




const numberOfFilms = prompt("Сколко филмов вы уже просмотрели?" , " " );


const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let a = prompt("Один из просмотренных фильмов?", " ");
let b = prompt("На сколько оцените его?", " ");


personalMovieDB.movies[a] = b;



console.log(personalMovieDB);