import { Router } from "express";
import passport from "passport";
const auth = Router();

auth.get('/', passport.authenticate('discord'))

auth.get('/redirect', passport.authenticate('discord', {
    failureRedirect: '/forbidden'
}), (req, res) => {
    res.send("Hello World!");
})


export {
    auth
}