import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CoffeeIcon, Loader } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Params } from "next/dist/server/request/params";
import { Profile, useUser } from "./userProvider";
import { getProfile } from "./getProfile";
import { CreateDonationFun } from "./createDonationFunc";

type CreateDonationPropsType = {
  loadDonation: () => Promise<void>;
};

export const CreateDonation = ({ loadDonation }: CreateDonationPropsType) => {
  const [amount, setAmount] = useState<number>(0);
  const [socialURL, setSocialURL] = useState<string>("");
  const [specialMessage, setSpecialMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();
  const { id } = useParams<Params>();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      if (!id) return;
      try {
        const data = await getProfile(parseInt(id as string));
        setProfile(data?.profile);
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    };

    loadProfile();
  }, [id]);

  const handleDonation = async () => {
    try {
      setLoading(true);
      await CreateDonationFun(
        Number(id),
        amount,
        specialMessage,
        user ? user.id : 1,
        socialURL,
        setLoading
      );
      await loadDonation();
    } catch (error) {
      console.error("Failed to create donation:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="flex-1">
      <CardContent className="flex flex-col gap-6">
        <p className="font-bold text-2xl">Buy {profile?.name} a Coffee</p>

        <div className="flex flex-col gap-2">
          <p className="font-medium text-xl">Select amount:</p>
          <div className="flex flex-row gap-12">
            {[1, 2, 5, 10].map((value) => (
              <Badge
                key={value}
                onClick={() => setAmount(value)}
                variant="secondary"
                className={`flex flex-row gap-2 p-3 ${
                  amount === value ? "border-black" : ""
                }`}
                aria-label={`Select $${value}`}
              >
                <CoffeeIcon />
                ${value}
              </Badge>
            ))}
          </div>
        </div>

        {/* Social URL Input */}
        <div className="w-full flex flex-col gap-2">
          <p className="font-medium">Enter BuyMeCoffee or social account URL:</p>
          <Input
            value={socialURL}
            onChange={(e) => setSocialURL(e.target.value)}
            placeholder="buymeacoffee.com/"
            aria-label="Social account URL"
          />
        </div>

        {/* Special Message Input */}
        <div className="w-full h-full flex flex-col gap-2">
          <p className="font-medium">Special message:</p>
          <Textarea
            value={specialMessage}
            onChange={(e) => setSpecialMessage(e.target.value)}
            placeholder="Please write your message here"
            className="w-full h-[150px]"
            aria-label="Special message"
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleDonation}
          disabled={!amount || !socialURL}
          className="text-white"
          aria-label="Support"
        >
          {loading ? <Loader className="animate-spin" /> : "Support"}
        </Button>
      </CardContent>
    </Card>
  );
};