import React from "react";
import QuestionSection from "./questionSection";
import Playground from "./playground";

function MainSection() {
  return (
    <div className="App">
      <Playground
        readOnly={false}
        trashcan={true}
        media={"media/"}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true,
        }}
        initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>
      `}
      ></Playground>
    </div>
  );
}

export default MainSection;
