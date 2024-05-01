import React from "react";
import AllButton from "./allButton";

function BottomBar() {
  return (
    <div className="p-6 flex justify-between">
      <AllButton
        textColor="text-[#24B9FF]"
        backgroundColor="bg-white"
        borderColor="border-[#24B9FF]"
        shadow="shadow-[0_6px_0_0_#17A2FF]"
      >
        Periksa Jawaban
      </AllButton>
      <AllButton
        textColor="text-white"
        backgroundColor="bg-[#24B9FF]"
        borderColor="border-sky-400"
        shadow="shadow-[0_6px_0_0_#17A2FF]"
      >
        Run
      </AllButton>
    </div>
  );
}

export default BottomBar;
