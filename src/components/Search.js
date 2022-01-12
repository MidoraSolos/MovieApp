import React from "react";

const Search = (props) => {
	return (
		<div className="col col-sm-3 m-4">
			<input
				className="form-control"
				value={props.value}
				onChange={(event) => props.setmovieSearch(event.target.value)}
				placeholder="Search a Movie"
			></input>
		</div>
	);
};
export default Search;
