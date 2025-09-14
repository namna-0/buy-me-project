import { Router } from "express";
import { authenticationMiddleware } from "../middlewear/auth-middleware";
import { getMe } from "../controller/authentication/get-me";
import { signIn } from "../controller/authentication/sing-in";
import { checkUsername } from "../controller/authentication/check-username";
import { signUp } from "../controller/authentication/sing-up";
import { updatePassword } from "../controller/authentication/changePass";

export const authRouter = Router()
  .get("/me", authenticationMiddleware, getMe)
  .post("/signin", signIn)
  .post("/checkname", checkUsername)
  .post("/signup", signUp)
  .put("/update/:userId", updatePassword);