# Full-Stack Authentication App

This repository contains a Full-Stack Authentication App built with modern web technologies, including Next.js, Tailwind CSS, TypeScript, Express, MongoDB, and Vercel.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project demonstrates a complete authentication flow, including user registration, login, and secure access to protected routes. The app is built with a modern tech stack to ensure scalability, maintainability, and a seamless developer experience.

## Features

- User registration and login
- Secure JWT-based authentication
- Protected routes
- Responsive design with Tailwind CSS
- Full TypeScript support
- Server-side rendering with Next.js
- API routes with Express.js
- Database integration with MongoDB
- Deployment on Heroku (backend) and Vercel (frontend)

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Heroku](https://www.heroku.com/)
- [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

Before we start, we must install the required programs and set up the environment. In this step, we need to ensure three things: our runtime environment is installed, an available database, and a way to test the API.

1. **Node.js**: As a runtime environment, we are going to use Node.js. Make sure it’s installed. You can get it [here](https://nodejs.org).

2. **MongoDB Atlas**: As a database, we will use MongoDB Atlas, so we don’t have to install anything. However, you need to create an account and get the connection URI.

#### Steps to Set Up the Database:

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create a free account. Complete the registration process by selecting the free shared subscription model.
2. After registration, you'll be directed to the "Create a Shared Cluster" page. Here, select AWS, choose any region, leave both Cluster Tier and Additional Settings as default, and proceed to the Cluster name, which is 'Cluster0' by default. Create the cluster.
3. In the Quickstart page, provide a username and a password, then click "Create User".
4. Set up an IP Access List by leaving the IP address of your current device or the IP address of the server where you will deploy this API. For development purposes, you can keep it open by adding `0.0.0.0` as an IP address and ‘for all’ as a description. Click "Finish and Close". Make sure to change this when you deploy the API to prevent unauthorized access to your database.
5. Go to the "Database Deployments" page, click "Cluster0", then "Connect" > "Connect your application". This will show you a URI which we will use to connect the database with the API. Replace `<username>` and `<password>` with the username and password you created in step 3. An example URI: `mongodb+srv://<username>:<password>@cluster0.h8milvy.mongodb.net/?retryWrites=true&w=majority`.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Babsbright/FullstackAuthApp.git
    cd FullstackAuthApp.
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    # Install frontend dependencies
    cd frontend
    npm install
    # or
    yarn install

    # Install backend dependencies
    cd ../server
    npm install
    # or
    yarn install
    ```

### Running the App

1. Set up environment variables.

2. Start the backend server:

    ```bash
    cd backend
    npm run dev
    # or
    yarn dev
    ```

3. Start the frontend server:

    ```bash
    cd ../frontend
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Deployment

### Backend and Frontend (Vercel)
Go through this [article](https://vinyldavyl.medium.com/how-to-deploy-a-fullstack-nodejs-and-express-app-on-vercel-c79d433eeb6) to host your server and frontend on Vercel.


## Environment Variables

Create a `.env` file in the root of both the frontend and backend directories and add the following environment variables:

### Backend

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Frontend

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Replace the placeholder values with your actual configuration.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
