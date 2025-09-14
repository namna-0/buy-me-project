import { Router } from "express";
import { CreateProfile } from "../controller/userProfile/create-profile";
import { getProfileByUserId } from "../controller/userProfile/get-profile-by-userid";
import { updateProfile } from "../controller/userProfile/updAate-profile-by-id";


export const profileRouter = Router()
  .post("/:userId", CreateProfile)
  .get("/", getProfileByUserId)
  .put("/:profileId", updateProfile);