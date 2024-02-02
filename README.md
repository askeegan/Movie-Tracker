# Movie Tracking System 🎬

## Overview

This Movie Tracking System is a web application designed to showcase a list of movies. Users can filter movies by genre, search for specific titles, and load more movies to explore.

## Design Decisions

### Responsive Layout

The application uses a responsive layout to provide an optimal viewing experience across various devices. The movie cards adjust their size and layout to fit the screen size, ensuring usability on both desktop and mobile devices.

### Filter and Search Functionality

Users can filter movies by genre using an intuitive dropdown menu. Additionally, a search bar allows users to search for specific movie titles, providing a seamless experience for discovering movies.

### Styling Choices

The color scheme and styling aim to provide a modern and visually appealing interface. Dark backgrounds emphasize movie details, while contrasting colors enhance readability and highlight interactive elements.

## Technologies Used

- **React**: The application is built using the React library, providing a component-based architecture for efficient development and maintenance.

- **React Select**: The dropdown menu for filtering genres is implemented using the React Select library, enhancing user experience with a customizable and accessible dropdown component.

- **React Icons**: Icons, such as the filter icon, are incorporated using the React Icons library for easy integration of scalable vector icons.

- **CSS**: Styling is done using CSS to create a visually appealing and responsive layout.

## Challenges Faced

- **Responsive Design**: Ensuring a seamless experience across various screen sizes required careful consideration of responsive design principles. Media queries and flexible layouts were implemented to address this challenge.

- **Dropdown Styling**: Customizing the appearance of the genre filter dropdown posed a challenge. The React Select library provided customization options, and specific styling choices were made to enhance the dropdown's visual appeal.

- **Data Fetching**: Fetching and managing movie data presented challenges related to asynchronous operations. The `useEffect` hook in React was utilized to fetch data on component mount, and state management was crucial for displaying the retrieved data.

## How to Run the App Locally

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and visit `http://localhost:3000` to view the app.

Feel free to explore the codebase! 🌐