"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/_components/userProvider";
import { Menu } from "@/app/_components/Menu";
import { ProfileDashboard } from "@/app/_components/Profiledashboard";
import { AccountSettings } from "@/app/_components/accountSettings";
import { SetPassword } from "@/app/_components/SetPassword";
import { PaymentDetail } from "@/app/_components/PaymentDetial";
import { SuccessMessage } from "@/app/_components/successMessage";
import { User } from "@/app/_components/User";
export default function Home() {
  const { user,loading } = useUser();
  const [selectedMenu, setSelectedmenu] = useState("home");
  const router = useRouter();
 const [range, setRange] = useState("0");
  useEffect(() => {
    if (!loading && !user) {
      router.push("/Login");
    }
  }, [user, loading, router]);

  

  if (!user) {
    return null; 
  }
 
  return (
    <div className="flex  flex-row  pl-[15%] pr-16 pt-16 gap-4">
      <Menu selectedMenu={selectedMenu} setSelectedmenu={setSelectedmenu} />

      <div className="w-full h-200  ">
        {selectedMenu == "home" && (
          <div className="flex flex-col gap-8">
            <User setRange={setRange} />
            <ProfileDashboard range={range} />
          </div>
        )}
        {selectedMenu == "explore" && <div></div>}
        {selectedMenu == "account settings" && (
          <div className="flex w-[80%] flex-col gap-4">
            <p className="font-medium text-2xl">My account</p>
            <p></p>
            <AccountSettings />
            <SetPassword />
            <PaymentDetail />
            <SuccessMessage />
          </div>
        )}
      </div>
    </div>
  );
}