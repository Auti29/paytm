import { RequestHandler, Router } from "express";
import registration from "../controllers/authControllers/registration";
import login from "../controllers/authControllers/login";
import userUpdate from "../controllers/resourceControllers/user";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.post('/signup', registration);
router.post('/signin', login);
router.put('/user', authMiddleware as unknown as RequestHandler, userUpdate);
export default router;