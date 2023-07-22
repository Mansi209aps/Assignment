import passport from 'passport';
import DiscordStrategy from 'passport-discord';
import { Strategy as DiscordStrategyType } from 'passport-discord'; // Import the type explicitly

require('dotenv').config();

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID!,
    clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    callbackURL: process.env.DISCORD_CALLBACK_URL!,
    scope: ['identify', 'guilds']
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile.username);
    console.log(profile.id);
}));

export {
    DiscordStrategy
}
