import { Request, Response } from "express";

const homeDetail = (req: Request, res: Response) => {
    let ob = {
        x: 12,
        y: 30
    }

    let data = sumData(ob);
    res.json({
        message: "Home Page New",
        data: data
    })
}

interface params {
    x: number;
    y: number;
}

type sumCheck = (x: params) => number;

const sumData: sumCheck = (ob: params) => {
    return ob.x + ob.y;
}
export {
    homeDetail
}