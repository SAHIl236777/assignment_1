# React User List App

## Project Overview

This is a React application that displays a list of users, formatted according to the given UI requirements. The app uses Material UI (MUI) Grid2 for layout and Material 3 Design for styling. The user data is fetched from `assignmentData.json` located in the `public/` folder.

## Features

- Modern UI with Material 3 Design principles.
- Responsive layout with `Grid2` for proper alignment.
- User card design where the avatar is left-aligned and details are displayed on the right.
- Static pagination display showing "Page 2 of 2".
- Data fetching from a JSON file stored in the `public/` directory.

---

## Installation & Setup

### Prerequisites

Ensure you have Node.js (v16+) and npm installed on your system.

- Check Node.js version:
  ```sh
  node -v
  ```
- Check npm version:
  ```sh
  npm -v
  ```

### Clone the Repository

```sh
 git clone <repository-url>
 cd assignment_1
```

### Install Dependencies

```sh
 npm install
```

### Run the Development Server

```sh
 npm run dev
```

This will start the application at `http://localhost:5173/`.

### Build for Production

```sh
 npm run build
```

This will generate a `dist/` folder with optimized production files.

---

## Project Structure

```
assignment_1/
│── public/
│   ├── assignmentData.json   # User data source
│   ├── index.html            # Root HTML file
│── src/
│   ├── components/
│   │   ├── UserCard.jsx       # User display component
│   │   ├── Pagination.jsx     # Page indicator component
│   ├── pages/
│   │   ├── UsersPage.jsx      # Main user list page
│   ├── styles/
│   │   ├── styles.css         # Global styles
│   ├── App.jsx                # Root React component
│   ├── main.jsx               # React entry point
│── package.json               # Project dependencies
│── vite.config.js             # Vite configuration
│── README.md                  # Project documentation
```

---

## Key Technologies Used

- React.js – Frontend framework
- Vite – Fast build tool for development
- Material UI (MUI) 3 – Component library for styling
- Axios – Fetching data from `assignmentData.json`

---

## How It Works

1. User data is loaded from `assignmentData.json`.
2. The UsersPage component renders a list of user cards using `Grid2`.
3. Each UserCard follows the required format:
    - Avatar on the left
    - User's name and email on the right
4. The Pagination component displays "Page 2 of 2" (static, non-functional).

---

## Deployment on Netlify

### Steps to Deploy

1. Build the app:
   ```sh
   npm run build
   ```
2. Push the project to GitHub.
3. Go to Netlify and create a new site.
4. Connect your GitHub repository and deploy.

---

## Troubleshooting

### Blank Screen?

- Ensure `assignmentData.json` is inside the `public/` directory.
- Check the browser console (`F12` → Console tab) for errors.
- Restart the server:
  ```sh
  npm run dev
  ```

### Styles Not Applied?

- Make sure `styles.css` is imported in `main.jsx`.
- Perform a hard refresh (`Ctrl + Shift + R`) in the browser.

### Icons Not Loading?

- Install missing MUI icons package:
  ```sh
  npm install @mui/icons-material
  ```

---

## Contact

For any issues, please create an issue in the GitHub repository.

