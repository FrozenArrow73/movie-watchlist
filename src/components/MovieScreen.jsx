import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({list, movieList, page, setPage, addMovie, removeMovie}) => {

    const movieDisplay = movieList.map((movie, index)=>{
        return (
            <MovieCard movie={movie} addMovie={addMovie} removeMovie={removeMovie} list={list}/>
        )
    })

    const increment = () => {
        setPage((previousPage) => {
            return previousPage + 1
        })
    }
    /*
    the assignment asked me to put the logic for not decrementening below zero in the jsx return like so 
    onClick={page !== 1 && decrement}

    this doesn't actually work and causes the website to crash when previous button is clicked when page === 1
    this is because the logic returns false but onClick is looking for a function and can't run false as a function
    the solution is to put the logic inside the decrement function with an if statement
    then when previous button is clicked when page === 1 nothing happens like desired and the website doesn't crash
    */
    const decrement = () => {
        if(page > 1) {
            setPage((previousPage) => {
                return previousPage - 1
            })
        }
    }

    return (
        <div className="page">
            <h1>Derek's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="btn-container">
                <button onClick={decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen