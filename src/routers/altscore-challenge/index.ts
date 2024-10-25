import { Router } from "express";
import AltController from "./controller"

const altscoreRouter = Router()

altscoreRouter.get("/status", (req, res) => {
    AltController.GetStatus(req, res)
})

altscoreRouter.get("/repair-bay", (req, res) => {
    AltController.GetRepairBay(req, res)
})

altscoreRouter.get("/phase-change-diagram", (req, res) => {
    AltController.GetPhaseChangeDiagram(req, res)
})

altscoreRouter.post("/teapot", (req, res) => {
    AltController.PostTeapot(req, res)
})

export default altscoreRouter