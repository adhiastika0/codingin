import Image from "next/image";
import "./globals.css";
import { ubuntu } from "./fonts/font";
export default async function Home() {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image src={"/logo.svg"} alt="logo codingin" width={20} height={20} />
          <p className={`${ubuntu.className}`}>Codingin</p>
        </div>
        <div>test</div>
      </div>
    </div>
  );
}
