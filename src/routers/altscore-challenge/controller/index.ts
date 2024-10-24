import { Request, Response } from "express";
import path from "path";

const viewsPath = path.join(__dirname, "..", "..", "..", "views")

class AltScoreController {

    GetStatus(_req: Request, res: Response) {
        return res.status(200).json({
            damaged_system: "SHLD-05"
        })
    }

    GetRepairBay(_req: Request, res: Response) {
        return res.status(200).sendFile(path.join(viewsPath, "sistema_averiado.html"))
    }

    PostTeapot(_req: Request, res: Response) {
        return res.status(418).send("I'm a teapot")
    }
}

export default new AltScoreController();