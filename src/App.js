import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieHeading from "./components/MovieHeading";
import Search from "./components/Search";
import AddFavorite from "./components/AddFavorite";
import RemoveFavorite from "./components/RemoveFavorite";
// import Card from "react-bootstrap/Card";

function App() {
	const [movies, setmovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [page, setPage] = useState(1);
	const [movieSearch, setmovieSearch] = useState("Adventure");

	const movieRequest = async (movieSearch) => {
		const url = `http://www.omdbapi.com/?s=${movieSearch}&apikey=f3f14679`;
		const response = await fetch(url);
		const responseJson = await response.json();
		console.log(responseJson);
		if (responseJson.Search) {
			setmovies(responseJson.Search);
		}
	};
	useEffect(() => {
		movieRequest(movieSearch);
	}, [movieSearch]);

	useEffect(() => {
		const movieFavorites = JSON.parse(
			localStorage.getItem("react-movie-app-favorites")
		);
		setFavorites(movieFavorites);
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem("react-movie-app-favorites", JSON.stringify(items));
	};

	const AddFavoriteMovie = (movie) => {
		const newFavoriteList = favorites.filter((e) => {
			if (e.imdbID !== movie.imdbID) {
				return e;
			}
		});
		console.log(favorites);
		console.log(newFavoriteList);
		if (newFavoriteList.length === favorites.length) {
			setFavorites([...favorites, movie]);
			saveToLocalStorage([...newFavoriteList, movie]);
		}
	};

	const DeleteFavoriteMovie = (movie) => {
		const newFavoriteList = favorites.filter(
			(favorites) => favorites.imdbID !== movie.imdbID
		);

		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

	return (
		<div className="TestContainer">
			<div className="header-wrap">
				<MovieHeading heading="Movies" />
				<Search movieSearch={movieSearch} setmovieSearch={setmovieSearch} />
			</div>
			<div className="movie-wrap">
				<MovieList
					movies={movies}
					handleFavoritesClick={AddFavoriteMovie}
					FavoriteComponent={AddFavorite}
				/>
			</div>
			<div className="">
				<MovieHeading heading="Favorites" />
			</div>
			<div className="movie-wrap">
				<MovieList
					movies={favorites}
					handleFavoritesClick={DeleteFavoriteMovie}
					FavoriteComponent={RemoveFavorite}
				/>
			</div>
		</div>
	);
}

export default App;
