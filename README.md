# Bubble Game - Event Bubbling Demonstration

This project is a simple bubble game designed to demonstrate the concept of event bubbling in JavaScript. It provides an interactive way to understand how events propagate through the DOM tree.

## Project Overview

The Bubble Game is a time-based clicking game where players aim to click on bubbles with numbers matching the "hit" value. It showcases the following key features:

- Dynamic bubble generation
- Countdown timer
- Score tracking
- Random "hit" number generation
- Event delegation for efficient event handling

## How It Works

1. The game starts with a 60-second timer.
2. Bubbles with random numbers (0-9) are generated on the screen.
3. A random "hit" number is displayed.
4. Players must click on bubbles that match the "hit" number.
5. Correct clicks increase the score by 10 points.
6. New bubbles and a new "hit" number are generated after each correct click.
7. The game ends when the timer reaches zero.

## Key JavaScript Concepts Demonstrated

- **Event Bubbling**: The game utilizes event bubbling by attaching a single event listener to the parent container (`#pbtm`) instead of individual bubbles.
- **DOM Manipulation**: Dynamic creation and updating of HTML elements.
- **Timers**: Usage of `setInterval` for the countdown timer.
- **Random Number Generation**: For creating bubbles and selecting the "hit" number.
- **Event Handling**: Capturing and processing click events.

## Code Structure

The JavaScript code is organized into several functions:

- `makebubbles()`: Generates the bubble elements.
- `gettimer()`: Manages the countdown timer.
- `gethit()`: Generates a new "hit" number.
- `increasescore()`: Updates the player's score.
- `gameplay()`: Handles the main game logic and event listening.

## Learning Outcomes

This project helps in understanding:
1. How event bubbling works in practice.
2. Efficient event handling in JavaScript.
3. Basic game logic implementation.
4. DOM manipulation and dynamic content generation.

Feel free to explore the code and experiment with it to deepen your understanding of event bubbling and JavaScript game development!

You can play the game [here](https://eventbubbling-muhammad-mujeeb-ur-rehmans-projects.vercel.app//)
