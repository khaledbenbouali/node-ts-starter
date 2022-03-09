import express, { Request, Response, Application, NextFunction } from "express";
import { json } from "body-parser";
import "dotenv/config";

import "./modulesAliasConfig";

import registerRouter from "@routes/index";

const app: Application = express();

app.use(json());

app.use("/", indexRouter);

app.use(
    (
        error: Error,
        // @ts-ignore
        request: Request,
        response: Response,
        // @ts-ignore
        next: NextFunction
    ) => {
        response.status(500).json({ message: error.message });
    }
);

const HOST = process.env.HOST ?? "localhost";
const PORT = process.env.PORT ?? 5100;

app.listen(PORT, () =>
    console.log(`Server listening on http://${HOST}:${PORT}`)
);
