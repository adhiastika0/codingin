"use client";

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";

const Heart = ({ available = false }) => (
  <FaHeart size={20} color={available ? "red" : "grey"} />
);

const createArray = (length) => [...Array(length)];

function HeartIndicator({ heartNumber = 3 }) {
  const [totalHearts, setHearts] = useState(heartNumber);
  return (
    <div className="flex gap-[2px]">
      {createArray(5).map((n, i) => (
        <Heart key={i} available={i < totalHearts}></Heart>
      ))}
    </div>
  );
}

export default HeartIndicator;
