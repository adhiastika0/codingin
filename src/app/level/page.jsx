import React, { Fragment } from "react";
import TopBar from "../components/levelPage/topBar";
import MainSection from "../components/levelPage/mainSection";
import BottomBar from "../components/levelPage/bottomBar";

function Level() {
  return (
    <div className="flex flex-col bg-white">
      <TopBar></TopBar>
      <MainSection></MainSection>
      <BottomBar></BottomBar>
    </div>
  );
}

export default Level;
