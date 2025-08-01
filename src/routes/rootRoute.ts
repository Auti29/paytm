import { Router } from "express";
import registration from "../controllers/authControllers/registration";
import login from "../controllers/authControllers/login";

const router = Router();

router.post('/signup', registration);
router.post('/signin', login);
export default router;