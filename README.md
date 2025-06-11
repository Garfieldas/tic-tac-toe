# Tic Tac Toe - JavaScript Module Pattern

A browser-based Tic Tac Toe game built using vanilla JavaScript, HTML, and CSS. The app follows the module pattern (IIFE + factory functions) to separate concerns and keep code maintainable.

## 🔗 Live Preview

👉 [Play the Game](https://garfieldas.github.io/tic-tac-toe/)  

---

## 🖼️ Screenshots

### 🟦 Game Board
![Game Board](https://i.ibb.co/wZtMSNm8/Screenshot-2025-06-11-at-22-38-58.png)

### ❌ Player Move
![Player Move](https://i.ibb.co/VpVJwWC4/Screenshot-2025-06-11-at-22-39-18.png)

### 🏁 Game Over
![Game Over](https://i.ibb.co/CsDngCnd/Screenshot-2025-06-11-at-22-39-29.png)

---


## 🎮 Features

- Two-player turn-based gameplay (`X` vs `O`)
- Clickable UI — no prompts!
- Win detection (rows, columns, diagonals)
- Tie detection
- Game reset button
- Clean module-based architecture:
  - `GameBoard` – manages board setup and marks
  - `playerFactory` – creates player objects
  - `GameController` – handles win logic
  - `gameFlow` – controls game state and UI interaction

