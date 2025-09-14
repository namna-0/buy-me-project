import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { authRouter } from "../src/route/auth-route";
import { profileRouter } from "../src/route/profile-route";
import { bankCardRouter } from "../src/route/bank-card-route";
import { donationRouter } from "../src/route/donation-route";

config();
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/bankcard", bankCardRouter);
app.use("/donation", donationRouter);
app.get("/", (req, res) => {
  res.json("connected");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});