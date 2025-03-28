# Tic-Tac-Toe

This is my version of Tic-Tac-Toe built using HTML, CSS, and JavaScript. The project follows a modular design with minimal global scope by leveraging the module pattern (IIFE). The game board is stored as an array inside a Gameboard module, players are encapsulated in objects, and the game flow is controlled by a dedicated GameState module. This structure makes the code maintainable and scalable.

# Demo Website
https://junehyukyoo.github.io/tic-tac-toe

## Features

- **Modular Design:** Uses IIFEs to encapsulate game logic and minimize global variables.
- **Interactive Game Board:** Clickable board tiles allow players to place their markers.
- **Dynamic Rendering:** The game board is rendered and updated in the DOM based on the board’s array.
- **Win and Draw Detection:** Logic to check all winning combinations and handle tie situations.
- **Player Input:** Allows players to enter their names before starting the game.
- **Game Reset:** Provides functionality to restart the game.
- **Styled UI:** Clean and modern interface with responsive design elements and overlay for end-game results.

## Project Structure

- **index.html:** Contains the HTML structure, including the board container, form for player input, and an overlay for displaying win/draw messages.
- **style.css:** Provides the visual styling for the game, including a blue gradient background, custom-styled buttons and inputs, and an overlay design.
- **library.js:** Contains all the JavaScript logic for the game. This includes:
  - **Gameboard Module:** Manages the game board as a 1D array, handles rendering, resetting, and updating board values.
  - **GameState Module:** Manages player turns, win/draw logic, and game flow. Also handles attaching event listeners to board tiles.
  - **Display Controller Functions:** Render game state updates to the DOM.

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Open the Project:**

   Open `index.html` in your preferred web browser. Alternatively, use a local development server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for a smoother development experience.

## How to Play

1. **Enter Player Names:**  
   Fill out the form with the names of the two players.

2. **Start the Game:**  
   Click the Start button to initialize the game and render the board.

3. **Make a Move:**  
   Click on an empty tile to place your marker ("O" or "X"). The game automatically checks for win or draw conditions after each move.

4. **End-Game Overlay:**  
   When a win or draw condition is reached, an overlay will appear displaying the result and a button to exit or reset the game.

5. **Reset the Game:**  
   Use the Reset button to clear the board and start a new game.

## Code Structure & Design

- **Gameboard Module:**  
  - Stores the board as a 1D array.
  - Provides methods to render the board, reset it, and update individual positions.
  
- **GameState Module:**  
  - Manages the current player, total moves, and win/draw conditions.
  - Contains the logic to check winning combinations.
  - Handles user interactions and updates the display via event listeners.
  
- **Display Controller:**  
  - Renders the board and game state updates to the DOM.
  - Manages the overlay for game results.

The code is organized to ensure that each piece of functionality is placed logically, making it easy to manage and extend.

## Future Enhancements

- Improve UI animations and visual effects.
- Add an AI opponent for single-player mode.
- Implement score tracking across multiple rounds.
- Enhance responsiveness for mobile devices.

## Contributing

Contributions are welcome! If you’d like to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear commit messages.
4. Push to your fork and open a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by modular design principles and the guidelines from "Building a house from the inside out."
- Thanks to the developer community for the resources and support that made this project possible.
```

This README provides a clear overview of your Tic-Tac-Toe project, its structure, and how to set it up and play. Feel free to adjust any details to better match your implementation or preferences.