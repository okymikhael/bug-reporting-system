# Bug Tracker Application

This is a simple bug tracking application built with React. It allows users to log in, view a list of bugs, see details of individual bugs, add new bugs, and edit existing bugs.

## Features

- **Login/Logout**: Users can log in with a username and password.
- **View Bugs**: Users can view a list of bugs with details such as title, severity, status, date, assignee, and description.
- **Bug Details**: Users can view detailed information about a specific bug.
- **Add Bug**: Users can add a new bug to the list.
- **Edit Bug**: Users can edit the details of an existing bug.

## Components

- **Navbar**: Displays the navigation bar with login/logout options.
- **BugList**: Displays a list of bugs.
- **BugDetails**: Displays detailed information about a specific bug.
- **NewTicket**: Form to add a new bug.
- **EditBug**: Form to edit an existing bug.
- **LoginForm**: Form to log in.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/bug-tracker.git
    ```
2. Navigate to the project directory:
    ```sh
    cd bug-tracker
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```plaintext
src/
├── components/
│   ├── Navbar.js
│   ├── BugList.js
│   ├── BugDetails.js
│   ├── NewTicket.js
│   ├── EditBug.js
│   └── LoginForm.js
├── styles.css
└── App.js
```

## Usage

- **Login**: Use the credentials provided in the `users` array in `App.js`.
- **Navigate**: Use the navigation bar to switch between different pages.
- **Add/Edit Bugs**: Use the forms provided to add or edit bugs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).