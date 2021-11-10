import express from "express";
import * as demoService from "../services/demo";
import { demoSchema } from "../schemas/demo";
import { IStrDictionary } from "../interfaces/demo";

export const getDemo = async (req: express.Request, resp: express.Response): Promise<object> => {
    try {
        const demo = <string>req.params.demo || "";

        try {
            await demoSchema.validateAsync({ type: demo }, { abortEarly: false });
        } catch (e) {
            return resp.status(400).send(e);
        }

        const response: IStrDictionary = await demoService.getDemo(demo);
        return resp.status(200).send(response);
    } catch (e: any) {
        console.log(e.message);
        return resp.status(500).send("An error occured with getAggregatedNotifications");
    }
};
