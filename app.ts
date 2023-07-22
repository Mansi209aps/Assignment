import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { auth } from './src/Routes/auth';
import passport from 'passport';
import session from 'express-session';
import { DiscordStrategy } from './src/utils/discord';

const app = express();

require('dotenv').config();

app.use(session({
    secret: 'supersecret',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false
}));

// Use the auth router for Discord authentication routes
app.use('/auth', auth);

// Initialize Passport and session middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport Discord strategy
passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID!,
    clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    callbackURL: process.env.DISCORD_CALLBACK_URL!,
    scope: ['identify', 'guilds']
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile.username);
    console.log(profile.id);
}));


// MongoDB connection and server start
mongoose
    .connect(
        `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.0m8bxj6.mongodb.net/test?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(5000, () => {
            console.log("MongoDB connection successfully.........")
            console.log('Server is running on http://localhost:5000');
        });
    })
    .catch(err => {
        console.log(err);
    });
