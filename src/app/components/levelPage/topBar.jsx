import React from "react";
import HeartIndicator from "./heartIndicator";
import { FaChevronLeft, FaMagnifyingGlass } from "react-icons/fa6";
import AllButton from "./allButton";

function TopBar() {
  return (
    <div className="flex justify-between items-center p-6 text-black">
      <div>
        <a href="/">
          <FaChevronLeft size={28}></FaChevronLeft>
        </a>
      </div>
      <HeartIndicator heartNumber={2}></HeartIndicator>
      <AllButton
        borderColor="border-[#BEBBBB]"
        backgroundColor="bg-white"
        shadow="shadow-[0_6px_0_0_#BEBBBB]"
      >
        <FaMagnifyingGlass></FaMagnifyingGlass>
      </AllButton>
    </div>
  );
}

export default TopBar;
