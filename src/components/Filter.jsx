import React from "react";
import Select from "react-select";
import { FaFilter } from "react-icons/fa";
import "./styles/Filter.css";

const FilterOptions = ({ genres, onFilterChange }) => {
  // Convert genres to options format required by react-select
  const options = genres.map((genre) => ({ label: genre, value: genre }));

  // Custom styles for react-select options
  const customStyles = {
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#ED7A07" : "#fff",
      color: isFocused ? "#fff" : "#333",
    }),
  };

  return (
    <div className="filter-options-container">
      <label className="filter-label">
        <FaFilter className="filter-icon" /> Filter by Genre
      </label>

      <Select
        options={[{ label: "All Genres", value: "" }, ...options]}
        onChange={(selectedOption) => onFilterChange(selectedOption.value)}
        className="filter-select"
        styles={customStyles}
      />
    </div>
  );
};

export default FilterOptions;
