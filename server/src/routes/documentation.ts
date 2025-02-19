import {Router} from "express"

import { getMenu } from "../controller/documentation";

const router : Router = Router()

router.get("/menu", getMenu);

export default router;