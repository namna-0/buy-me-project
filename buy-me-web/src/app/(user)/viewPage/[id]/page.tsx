"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Params } from "next/dist/server/request/params";
import { Donation } from "@/app/_components/userProvider";
import { getDonations } from "@/app/_components/getDonation";
import { Cover } from "@/app/_components/coverImage";
import { ProfileScreen } from "@/app/_components/Profile";
import { CreateDonation } from "@/app/_components/createDonation";

export default function Home() {
  const { id } = useParams<Params>();
  const [donation, setDonation] = useState<Donation[] | null>(null);
  const [loading, setLoading] = useState(false);
  const loadDonation = async () => {
    setLoading(true);
    if (!id) return;
    try {
      const data = await getDonations(parseInt(id as string));
      setDonation(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadDonation();
  }, [id]);
  return (
    <div className=" relative w-full h-screen flex flex-col pt-20">
      <Cover />
      <div className=" absolute w-full flex flex-row gap-16 px-16 top-[40%] ">
        <ProfileScreen donation={donation} loading={loading} />
        <CreateDonation loadDonation={loadDonation} />
      </div>
    </div>
  );
}