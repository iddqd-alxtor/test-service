import { Router } from "express";
import { testController } from "../controllers/test";


const router = Router();

router.get('/test', testController);

export default router;