import { IDemo, IStrDictionary } from "../interfaces/demo";

export const getDemo = async (demo: string): Promise<IStrDictionary> => {
    const oDemo: IDemo = {
        type: demo,
    };
    const response: IStrDictionary = {
        "DEMO": oDemo,
    };

    return response;
};
