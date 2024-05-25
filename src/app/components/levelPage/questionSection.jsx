import React from "react";

function QuestionSection({ questionTitle, questionDescription }) {
  return (
    <div className="px-6 justify-self-center">
      <h2 className=" font-bold text-black">{questionTitle}</h2>
      <p className="text-black">{questionDescription}</p>
    </div>
  );
}

export default QuestionSection;
