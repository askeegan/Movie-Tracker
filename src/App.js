import React, { useState, useEffect } from "react";
import TitleLogo from "./components/TitleLogo";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import LoadMoreButton from "./components/buttons/LoadMoreButton";
import Footer from "./components/footer/Footer";
import { debounce } from "lodash";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGenre, setFilteredGenre] = useState("");
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(20); // Initial number of visible movies

  useEffect(() => {
    // Fetch movie data from movies.json
    fetch("/movies-data/movies.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);

        // Extract and set unique genres for filter options
        const uniqueGenres = Array.from(
          new Set(data.flatMap((movie) => movie.Genre.split("|")))
        );
        setGenres(uniqueGenres);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const debouncedSearch = debounce((value) => {
    setSearchTerm(value);
  }, 300);

  const handleLoadMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 10); // Load additional 10 movies
  };

  const filteredMovies = movies
    .filter(
      (movie) =>
        typeof movie.Title === "string" &&
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filteredGenre ? movie.Genre.includes(filteredGenre) : true)
    )
    .slice(0, visibleMovies);

  return (
    <div>
      <TitleLogo />
      <SearchBar onSearch={(value) => debouncedSearch(value)} />
      <Filter genres={genres} onFilterChange={setFilteredGenre} />
      <MovieList movies={filteredMovies} />
      <LoadMoreButton onClick={handleLoadMore} />
      <Footer />
    </div>
  );
};

export default App;
