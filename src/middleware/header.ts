import express = require("express");

export const setAndCheckHeaders = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    res.header("Access-Control-Allow-Credentials", "true");

    if (["OPTIONS", "PUT", "DELETE", "HEAD"].includes(req.method)) {
        return res.status(405).json();
    }

    next();
};
