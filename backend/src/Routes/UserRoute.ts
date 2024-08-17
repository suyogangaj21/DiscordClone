import {Router} from "express";
import { allusers } from "../Controller/UserController";

const router =Router();

router.route("/login").get(allusers);
router.route("/register").post();

export default router;
