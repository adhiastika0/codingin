import React from "react";

function QuestionSection({ questionTitle, questionDescription }) {
  return (
    <div className="px-6">
      <h2 className=" font-bold">{questionTitle}</h2>
      <p>{questionDescription}</p>
    </div>
  );
}

export default QuestionSection;
