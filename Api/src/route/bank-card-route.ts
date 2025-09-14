import { Router } from "express";
import { CreateBankcard } from "../controller/bankAccount/create-bankcard";
import { getBankCard } from "../controller/bankAccount/get-bankcard";
import { updateBankCard } from "../controller/bankAccount/update-card";

export const bankCardRouter = Router()
  .post("/:userId", CreateBankcard)
  .get("/:userId", getBankCard)
  .put("/update/:BankCardId", updateBankCard);