# SmokeTrees User Registration Assignment

Welcome to the SmokeTrees User Registration API! This API allows users to register with their names and addresses, which are stored in a MongoDB database.

## Technologies Used

- **Node.js**: Backend server framework
- **Express.js**: Web application framework for Node.js
- **Mongoose**: MongoDB object modeling tool
- **Pug**: Templating engine for rendering HTML
- **Bootstrap**: Frontend CSS framework for responsive design

## Setup

### Prerequisites

- Create A `.env` file in the `./config/` directory
- Add PORT=3000
- DB_URL=your_database_url

### Start

- install all dep ` npm install`
- production ` npm start`
- development ` npm run dev`

### 01 Register User form

- **GET /**
- Description: Registers a new user form.

### 02 List of users UI

- **GET /users**
- Description: you can see list of users (UI)

### 03 Register User API

- **POST /register**
- Description: Registers a new user and their address.
- example data

```
    {
      "name":"user,
      "address:"user_address"
    }
```
