import {Router} from "express";
import { Login } from "../Controller/UserController";

const router =Router();

router.route("/login").get(Login);


export default router;
