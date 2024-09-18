# Simple Express Signup Form

This is a simple Node.js application using Express.js to handle user signups. The application saves the user data (username, email, and password) in a plain text file on the server.

## Features

- A static signup form served through the root URL (`/`).
- A signup POST route (`/signup`) that accepts JSON data (username, email, and password).
- User data is appended to a `user_data.txt` file on the server.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v12.x or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install the required dependencies:
    ```bash
    npm install express
    ```

## Usage

1. Start the server:
    ```bash
    node app.js
    ```

2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

3. Fill in the signup form and submit. The entered user data will be saved in `user_data.txt`.

## File Structure

```bash
your-repo-name/
│
├── app.js               # The main server file
├── index.html           # Static HTML form
├── user_data.txt        # File where user signup data is stored
└── README.md            # Project documentation
