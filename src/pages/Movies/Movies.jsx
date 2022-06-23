import React from 'react';
import { useState, useEffect } from 'react';
import { getMovies } from '../../utilities/movies-service';
const Movies = () => {
    //useEffect bellow will envoke after every render
    useEffect(() =>{
        getMovies();
    },[]);

    //useEffect bellow will only run once if the dependency arrary is empty
    //second arg of useEffect is the dependency array
    // useEffect(() =>{
    //     console.log("Hello");
    // },[]);

    return (
        <div>
            This is the movies page.
        </div>
    );
}

export default Movies;
