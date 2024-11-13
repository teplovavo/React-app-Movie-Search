import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

// Import components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // API key to access the movie data
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movie data based on search term
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data); // Store the movie data in state
    } catch (e) {
      console.error(e); // Log any errors
    }
  };

  // Use useEffect to fetch default movie data when app loads
  useEffect(() => {
    getMovie("Clueless"); // Fetch data for a default movie
  }, []);

  // JSX to render the form and movie display components
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
