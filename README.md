# 🎮 Simon Says Game

A classic memory game implementation where players must repeat an increasingly complex sequence of colored button flashes. Test your memory and reflexes in this modern take on the iconic Simon game!

## 📋 Project Overview

Simon Says Game is a browser-based memory challenge that tests players' ability to remember and replicate sequences of colored buttons. The game progressively increases in difficulty with each successful round, making it both entertaining and mentally engaging.

### Game Features

- 🎯 Progressive difficulty - each level adds one more step to the sequence
- 🎨 Four colorful buttons (Red, Yellow, Green, Purple)
- 💡 Visual feedback with button flash animations
- ⌨️ Simple keyboard controls to start/restart
- 📊 Level tracking system
- 🔄 Instant restart on game over

## 🛠️ Tech Stack

- **HTML5** - Structure and markup
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Game logic and interactivity

No frameworks or libraries required - pure vanilla JavaScript implementation!

## 📁 Folder Structure

```
Simon-game/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── app.js              # Game logic and event handlers
└── README.md           # Project documentation
```

## 🚀 Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Simon-game.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Simon-game
   ```

3. **Open the game**
   - Simply open `index.html` in your preferred web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

4. **Start playing!**
   - Press any key to begin the game
   - Watch the sequence of button flashes
   - Click the buttons in the same order
   - Try to reach the highest level!

## 🎮 How to Play

1. **Start**: Press any key on your keyboard to begin
2. **Watch**: Observe the sequence of button flashes
3. **Repeat**: Click the buttons in the exact same order
4. **Advance**: Successfully complete the sequence to move to the next level
5. **Challenge**: Each level adds one more button to the sequence
6. **Game Over**: If you make a mistake, press any key to restart

## 🌐 Environment Variables

This project does not require any environment variables or configuration files.

## 🧪 How to Run Tests

Currently, this project does not include automated tests. Testing is performed manually through gameplay.

### Manual Testing Checklist

- [ ] Game starts when any key is pressed
- [ ] First level shows a single button flash
- [ ] Button flashes are visible and distinct
- [ ] User clicks register correctly
- [ ] Correct sequence advances to next level
- [ ] Incorrect sequence triggers game over
- [ ] Level counter increments properly
- [ ] Game restarts correctly after game over

## 🎯 Game Logic

The game follows these core mechanics:

1. **Initialization**: Game starts in inactive state
2. **Level Generation**: Random button is selected and added to sequence
3. **Display**: Computer shows the complete sequence with flashes
4. **User Input**: Player attempts to replicate the sequence
5. **Validation**: Each click is validated against the game sequence
6. **Progression**: Correct sequence → Next level | Incorrect → Game over

## 🤝 Contributing

Contributions are welcome! Here are some ideas for enhancements:

- Add sound effects for button presses
- Implement difficulty modes (speed variations)
- Add high score tracking with localStorage
- Create mobile-responsive touch controls
- Add theme customization options
- Implement strict mode (game over on first mistake)

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

Inspired by the classic Simon electronic game created by Ralph H. Baer and Howard J. Morrison.

---

**Enjoy the game and challenge your memory! 🧠✨**