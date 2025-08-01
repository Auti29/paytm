import { Router } from "express";
import registration from "../controllers/authControllers/registration";

const router = Router();

router.post('/signup', registration);





export default router;