import React from "react";
import QuestionSection from "./questionSection";
import Playground from "./playground";

function MainSection() {
  return (
    <div className="relative flex flex-col gap-4 h-full">
      <QuestionSection
        questionTitle="Tes"
        questionDescription="Tes description."
      ></QuestionSection>
      <div className="flex flex-col h-full">
        <div className="flex justify-start gap-4 mx-6">
          <input
            id="menu-tab-1"
            type="radio"
            name="menu-tab"
            value="block"
            defaultChecked={true}
            className=" text-black hidden"
          />
          <label
            htmlFor="menu-tab-1"
            className=" block p-3 text-black border border-black rounded-t border-b-0"
          >
            <div></div>
            Block
          </label>

          <input
            id="menu-tab-2"
            type="radio"
            name="menu-tab"
            value="code"
            className=" text-black hidden"
          />
          <label
            htmlFor="menu-tab-2"
            className=" block p-3 text-black border border-black rounded-t border-b-0"
          >
            Code
          </label>

          <input
            id="menu-tab-3"
            type="radio"
            name="menu-tab"
            value="hasil"
            className=" text-black hidden"
          />
          <label
            htmlFor="menu-tab-3"
            className=" block p-3 text-black border border-black rounded-t border-b-0"
          >
            Hasil
          </label>
        </div>
        <div className="h-full">
          <Playground
            readOnly={false}
            trashcan={true}
            zoom={{
              controls: true,
              wheel: true,
              startScale: 1.0,
              maxScale: 3,
              minScale: 0.3,
              scaleSpeed: 1.2,
              pinch: true,
            }}
            move={{
              scrollbars: true,
              drag: true,
              wheel: true,
            }}
            initialXml={`
          <xml xmlns="http://www.w3.org/1999/xhtml">
            <block type="controls_ifelse" x="0" y="0"></block>
            <block type="controls_ifelse" x="10" y="10"></block>
            <block type="controls_ifelse" x="20" y="20"></block>
          </xml>
        `}
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
