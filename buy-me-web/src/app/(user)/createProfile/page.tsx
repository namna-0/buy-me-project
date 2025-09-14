"use client";

import { useState } from "react";
import { AddPaymentCardInfo } from "@/app/_components/addCard";
import { ProfileInfo } from "@/app/_components/profileInfo";


export default function Home() {
  const [step, setStep] = useState(1);
  console.log(step);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {step == 1 && <ProfileInfo setStep={setStep} />}
      {step == 2 && <AddPaymentCardInfo />}
    </div>
  );
}