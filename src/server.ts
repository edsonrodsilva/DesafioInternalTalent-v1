import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { routes } from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port} \n⭐️ Internal Talent!`);
})