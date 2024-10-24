import express from "express";
import { altscoreRouter } from "./routers";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(altscoreRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});