"use strict";




let numberOfFilms;

function start(){
    numberOfFilms = prompt("Сколко филмов вы уже просмотрели?" , " " );
    while(numberOfFilms == "NaN" || numberOfFilms <= 0 || numberOfFilms == "" ){
        numberOfFilms = prompt("Сколко филмов вы уже просмотрели?" , " " );
    }
}

start();


const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
for(let i = 0; i < 2; i ++){
    let a = prompt("Один из просмотренных фильмов?", " ");
    let b = +prompt("На сколько оцените его?", " ");

    if(a != "" && b != "" && a != null && b != null && typeof(a) == 'string' && typeof(b) == 'number'){
        personalMovieDB.movies[a] = b;
    } else {
        alert("Please enter correct data!");
        i --;
        }
    }
}

console.log(personalMovieDB);



