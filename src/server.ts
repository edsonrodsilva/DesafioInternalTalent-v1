import express from "express";
import { routes } from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use(routes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})