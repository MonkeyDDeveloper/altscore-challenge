import { Request, Response } from "express";
import path from "path";
import { interpolateVolumes } from "./utils";

const viewsPath = path.join(__dirname, "views")

class AltScoreController {

    GetStatus(_req: Request, res: Response) {
        return res.status(200).json({
            damaged_system: "deflector_shield"
        })
    }

    GetRepairBay(_req: Request, res: Response) {
        return res.status(200).setHeader("Content-Type", "text/html").send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Repair</title>
                </head>
            <body>
                <div class="anchor-point">SHLD-05</div>
            </body>
        </html>`)
    }

    //[GET] /phase-change-diagram?pressure=10
    GetPhaseChangeDiagram(req: Request, res: Response) {
        if (!req.query.pressure) {
            return res.status(400).send("Missing pressure query parameter")
        }
        const pressure = parseFloat(req.query.pressure as string);
        if (isNaN(pressure)) {
            return res.status(400).send("Invalid pressure query parameter")
        }
        return res.status(200).json(interpolateVolumes(pressure))
    }

    PostTeapot(_req: Request, res: Response) {
        return res.status(418).send("I'm a teapot")
    }
}

export default new AltScoreController();