"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/app/_components/userProvider";
import { SignUpStepOne } from "@/app/_components/sing-up-step-one";
import { SignUpStepTwo } from "@/app/_components/sing-up-step-two";


export default function Home() {
  const [username, setUsername] = useState("");
  const { step, setStep } = useUser();
  return (
    <div className=" relative w-full h-full flex flex-col justify-center items-center">
      {step == 1 && (
        <SignUpStepOne setStep={setStep} setUsername={setUsername} />
      )}
      {step == 2 && <SignUpStepTwo setStep={setStep} username={username} />}
      <Button className="absolute top-5 right-5 ">Log in</Button>
    </div>
  );
}