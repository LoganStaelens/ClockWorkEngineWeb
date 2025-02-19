import { Request, Response } from "express";

import { getMenuTree } from "./menu";

export const getMenu = (request: Request, response:Response) => {
    const documentTree = getMenuTree('assets/documentation');

    response.status(200).json(documentTree);
}