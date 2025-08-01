import { RequestHandler, Router } from "express";
import registration from "../controllers/authControllers/registration";
import login from "../controllers/authControllers/login";
import userUpdate from "../controllers/resourceControllers/user";
import authMiddleware from "../middlewares/authMiddleware";
import searchUsers from "../controllers/resourceControllers/bulkUsers";

const router = Router();

router.post('/signup', registration);
router.post('/signin', login);
router.put('/user', authMiddleware as unknown as RequestHandler, userUpdate);
router.get('/bulk', authMiddleware as RequestHandler, searchUsers);
export default router;