import express from "express";
import { shouldBeLoggedIn, shouldBeAdmin } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/loggedin",verifyToken, shouldBeLoggedIn)
router.get("/admin",verifyToken, shouldBeAdmin)


export default router;
