
# Frontend_Test

This repository contains the front-end application for a modern web platform. It is built using **React**, **Webpack**, and **Tailwind CSS**, offering a responsive, dynamic, and scalable user interface.

---

## Features

- **React with Tailwind CSS**: For clean, modern, and responsive UI/UX.
- **Dynamic Routing**: Handled by React Router.
- **API Integration**: Easily configurable for back-end connectivity.
- **Code-Splitting**: Improves performance by dynamically loading routes.

---

## Quick Start

### Prerequisites

Before starting, ensure you have:

- **Node.js** (v14+ recommended)
- **npm** (comes with Node.js) or **yarn** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/STOKEDMODELLER/Frontend_Test.git
   cd Frontend_Test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

### Build for Production

To generate an optimised production build:

```bash
npm run build
```

This will create the build in the `dist/` folder.

---

## Project Structure

```plaintext
Frontend_Test/
├── public/                 # Static files served directly
│   └── index.html          # HTML entry point for the app
├── src/                    # Source code for the application
│   ├── components/         # Reusable UI components
│   │   ├── auth/           # Login and Register forms
│   │   ├── dashboard/      # Role-based dashboards
│   │   └── forms/          # Dynamic forms
│   ├── pages/              # Static-like pages (e.g., Home, Not Found)
│   ├── utils/              # Utility functions (e.g., API integration)
│   ├── App.js              # Main App component
│   ├── routes.js           # Defines application routes
│   ├── index.js            # Entry point for the app
│   └── index.css           # Tailwind CSS imports and custom styles
├── .gitignore              # Files and directories to ignore in Git
├── package.json            # Project metadata and dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── webpack.config.js       # Webpack bundler configuration
```

---

## Scripts

- **`npm start`**: Starts the development server.
- **`npm run build`**: Creates a production-ready build.
- **`npm run lint`**: Runs a linter to check code quality.

---

## Environment Variables

The following `.env` variables are supported:

```plaintext
REACT_APP_API_URL=http://localhost:5000/api
```

- **`REACT_APP_API_URL`**: Base URL for the back-end API.

Create a `.env` file in the root directory and add your configuration.

---

## Contribution Guidelines

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).


