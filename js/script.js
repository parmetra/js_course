"use srict";

let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let lastWatchedFilm = prompt("Последний просмотренный фильм?", "");
let yourRatingOfLastWatchedFilm = +prompt("Оценка последнего просмотренного фильма?", "");
personalMovieDB.movies[lastWatchedFilm] = yourRatingOfLastWatchedFilm;

lastWatchedFilm = prompt("Последний просмотренный фильм?", "");
yourRatingOfLastWatchedFilm = +prompt("Оценка последнего просмотренного фильма?", "");
personalMovieDB.movies[lastWatchedFilm] = yourRatingOfLastWatchedFilm;

console.log(personalMovieDB);