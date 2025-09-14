import Image from "next/image";
import { PropsWithChildren } from "react";
import { bottleOfCoffee, cupOfCoffee } from "../_components/svgs";

export default function CustomerLayout({ children }: PropsWithChildren) {
  return (
    <div className="antialiased w-full flex flex-row ">
      <div className="flex flex-1 w-full h-screen gap-6 bg-amber-400 justify-center items-center ">
    {/* Replace with a valid component or content */}
  <div className="w-30 h-30 flex items-center justify-center p-3 rounded-full border-6 border-white">{bottleOfCoffee}</div>
      </div>
      <div className="flex-1 h-screen ">{children}</div>
    </div>
  );
}