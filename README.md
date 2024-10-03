# Project Name

## Description
This project is a web application built using React, TypeScript, and Tailwind CSS. It leverages various Google Fonts and custom fonts to enhance the visual appeal. The project is configured with Tailwind CSS for styling and includes a global CSS file for additional custom styles.

## Features
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Google Fonts**: Integration of multiple Google Fonts for typography.
- **Custom Fonts**: Inclusion of custom fonts via `@font-face`.

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm start
    ```

## Project Structure
- `src/`: Contains the source code of the application.
- `public/`: Contains public assets and the HTML template.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `app/globals.css`: Global CSS file with custom styles and font imports.

## Configuration

### Tailwind CSS
The `tailwind.config.js` file is used to configure Tailwind CSS. You can extend the default configuration by adding custom styles and plugins.

### Global Styles
The `app/globals.css` file includes:
- Imports for Google Fonts.
- Tailwind CSS base, components, and utilities.
- Custom font-face definitions.
- CSS variables for theming.
- Media queries for dark mode support.

## Usage

### Running the Application
To run the application in development mode, use:
```sh
npm start
```
This will start the development server and open the application in your default web browser.

### Building for Production
To build the application for production, use:
```sh
npm run build
```
This will create an optimized build of the application in the `build/` directory.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
