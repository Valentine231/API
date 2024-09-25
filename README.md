# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Pokémon Memory Game

Overview
This is a Pokémon-themed memory game built using React. The game displays a grid of Pokémon images, and when a user clicks on an image, it checks if the image is the same as the previous one. If it is, the game resets the score and best score. If not, it increments the score and updates the best score if necessary.

Components
App
The main application component. It renders a header with the title "Random Pokémon", a score counter, and two grids of Pokémon images.

Memory
A component that represents a single Pokémon image. It fetches a random Pokémon from the PokéAPI and displays its image. When clicked, it checks if the image is the same as the previous one and updates the score and best score accordingly.

Count
A component that displays the current score and best score.

Features
Displays a grid of random Pokémon images
Tracks the user's score and best score
Resets the score and best score when the user clicks on the same image twice
Updates the best score when the user achieves a higher score
Technical Details
Built using React and Axios
Uses the PokéAPI to fetch Pokémon data
Implements a timeout of 10 seconds for API requests
Handles errors and retries failed API requests
How to Play
Click on a Pokémon image to start the game.
Keep clicking on different images to increase your score.
If you click on the same image twice, the game will reset your score and best score.
Try to achieve the highest score possible!





