import { Router } from "express"; 
import { CreateDonation } from "../controller/donation/create-donation";
import { getDonation } from "../controller/donation/get-donation-by-user-id";

export const donationRouter = Router()
  .post("/:userId", CreateDonation)
  .get("/:userId", getDonation);