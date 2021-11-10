import express = require("express");

export const IsAllowedAccess = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    next();
};
