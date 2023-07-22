import express, { Request, Response } from "express";

const router = express.Router();

// router.get('/', (req, res) => {

// })

router.get("/about", (req: Request, res: Response) => {
    res.json({
        message: "About page"
    })
});

export {
    router
}