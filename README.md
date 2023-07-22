# Discord Authentication Backend Project

This is a backend project for implementing Discord authentication using Node.js, TypeScript, and MongoDB.

## Overview

The project provides a server-side implementation for handling user authentication with Discord using OAuth2. Users can log in to the application using their Discord accounts, and the backend will handle the authentication process, and retrieving user data from Discord. The project MongoDB configured.

<img width="957" alt="image" src="https://github.com/Mansi209aps/Discord-Authentication-Backend-Project/assets/78530251/0245d60e-b9e5-4e7c-b2b7-2a0363d422c8">

<img width="884" alt="image" src="https://github.com/Mansi209aps/Discord-Authentication-Backend-Project/assets/78530251/a64dec0d-2423-42ad-b334-40133a3cae53">

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (https://nodejs.org)
- npm (Node Package Manager, included with Node.js)
- MongoDB (https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone the repository:

   ```
   git clone <repository_url>
   cd discord-auth-backend
   ```

2. Install dependencies:

   ```
   npm install
   ```
3. Environment Variables:

Create a .env file in the root of the project and add the following environment variables:

```
DISCORD_CLIENT_ID=<your_discord_client_id>
DISCORD_CLIENT_SECRET=<your_discord_client_secret>
DISCORD_CALLBACK_URL=<your_discord_callback_url>
SESSION_SECRET=<your_session_secret>
MONGODB_URI=<your_mongodb_connection_string>
```

`DISCORD_CLIENT_ID`: Your Discord application client ID obtained from the Discord Developer Portal.
`DISCORD_CLIENT_SECRET`: Your Discord application client secret obtained from the Discord Developer Portal.
`DISCORD_CALLBACK_URL`: The callback URL where users will be redirected after successful authentication.
`SESSION_SECRET`: A secret key used for encrypting the session data. Choose a strong and unique value.
`MONGODB_URI`: The MongoDB connection string. Set this to your MongoDB database URI.


4. Run the Application:

```
npm start
```

The server will start running on http://localhost:5000.

##Endpoints

/auth: Initiates the Discord authentication process. Redirect users to this endpoint to start the authentication flow.

