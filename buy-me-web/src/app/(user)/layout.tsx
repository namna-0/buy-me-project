import { PropsWithChildren } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "../_components/header";

export default function CustomerLayout({ children }: PropsWithChildren) {
  return (
    <div className="antialiased w-full flex flex-col  ">
      <Header />
      <Toaster position="top-right" />
      <div className="flex-1 h-screen px-10 ">{children}</div>
    </div>
  );
}