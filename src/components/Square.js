import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

export default function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
