import express from "express";
const authRoute = express.Router();
import * as authController from "../controllers/auth.controller.js";

authRoute.post("/login", authController.login);
authRoute.post("/register", authController.register);
authRoute.get("/me", authController.getMe);

export default authRoute;
