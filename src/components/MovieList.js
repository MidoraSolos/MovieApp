import React from "react";
// import Card from "react-bootstrap/Card";

const MovieList = (props) => {
	const FavoriteComponent = props.FavoriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div
					key={movie.imdbID}
					className="image-container d-flex justify-content-start m-3 "
				>
					{/* <h1>movie.Title</h1> */}

					{/* <Card>
						<Card.Img variant="top" src={movie.Poster} />
						<Card.Body>
							<Card.Title>{movie.Title}</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">{movie.Type}</small>
						</Card.Footer>
					</Card> */}

					<div className="movie-container">
						<img src={movie.Poster} alt="movie"></img>
						{/* <span>{movie.Title} </span>
						<span>Type: {movie.Type}</span> */}
					</div>
					<div
						onClick={() => props.handleFavoritesClick(movie)}
						className="overlay d-flex align-items-center justify-content-center"
					>
						<FavoriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
