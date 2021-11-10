import express from "express";
import config from "./config";
import compression from "compression";
import demo from "./routes/demo";
import { IsAllowedAccess } from "./middleware/auth";
import { setAndCheckHeaders } from "./middleware/header";

const app: express.Application = express();

const port = config.api.port;

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(setAndCheckHeaders);

app.use("/demo", IsAllowedAccess, demo);

app.use((req, res, next) => {
    res.status(404).send(`${req.url} is not a valid resource here`);
});

app.use((err, req, res, next) => {
    console.trace();
    res.status(500).json("Internal server error");
});

process.on("uncaughtException", (err) => {
    console.trace();
    process.exit(1);
});

process.on("unhandledRejection", (reason: any, promise) => {
    console.trace();
    console.log(reason.message);
});

app.set("port", port);

export default app;
