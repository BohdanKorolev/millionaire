# README

## Project Overview

This project is a React-based web application for a trivia game, designed to be scalable, responsive, and interactive. The game features dynamic questions, answer buttons, and rewards, with an intuitive user interface and a smooth user experience. It leverages modern web technologies such as React, TypeScript, and Sass, while using Next.js for server-side rendering and page routing.

---

## Project Structure

The project follows a well-organized folder structure that ensures maintainability and scalability. Here's an overview of the key folders and their purposes:

### 1. **`/src`**
This is the main directory where all the application logic resides.

- **`/components`**: Contains reusable components like buttons, headers, and footers.
    - **`Button`**: A customizable button component used throughout the app.
- **`/app`**: Contains Next.js pages and is responsible for routing.
    - **`/game`**: Contains the game logic, including the current question and answers.
      - **`/QuestionButton`**: Displays individual answer choices in the trivia game.
      - **`/RewardsList`**: Lists the rewards accumulated in the game.
    - **`/result`**: Displays the result page at the end of the game.
- **`/contexts`**: Includes React context providers for global state management.
- **`/utils`**: Contains utility functions.
- **`/configs`**: Stores configuration files.
- **`/styles`**: Contains all global styles and specific component styles.
- **`/interfaces`**: Contains all global interfaces.

---

## Dependencies

The project uses the following key dependencies:
- **React**: For building the UI components.
- **Next.js**: For server-side rendering and routing.
- **TypeScript**: For static type-checking.
- **Sass**: For styling the application.
- **ESLint and Prettier**: For code linting and formatting.

---

## Available Scripts

In the project directory, you can run the following commands:

### 1. **`npm install`**
Installs all the project dependencies listed in `package.json`.

### 2. **`npm run dev`**
Runs the development server. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### 3. **`npm run build`**
Builds the project for production to the `.next` folder. It optimizes the application for performance and minimizes files.

### 4. **`npm run start`**
Starts the production server. Ensure you have built the project before running this command.

### 5. **`npm run lint`**
Runs ESLint to check for any linting issues in the codebase.

### 6. **`npm run lint:fix`**
Fixes linting issues automatically where possible.

### 7. **`npm run format`**
Runs Prettier to format the codebase according to the defined style.

---

## Development Guidelines

- **Modular Components**: Components should be small, reusable, and well-documented.
- **State Management**: Use React Context API for managing global states like score and questions.
- **Styling**: We use Sass for styling the application, with separate files for global styles and component-specific styles.
- **TypeScript**: Type-check all components, props, and functions. Ensure the use of types wherever applicable.
- **Testing**: All components should have corresponding tests to ensure stability. Use Jest for unit and integration testing.

---

## Contributing

Contributions to the project are welcome! If you want to improve the game or fix any bugs, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes, ensuring that you write tests for your modifications.
4. Submit a pull request, and include a description of what was changed.


---

By following this structure and these guidelines, we ensure that the codebase remains clean, efficient, and easy to maintain as the project grows.
