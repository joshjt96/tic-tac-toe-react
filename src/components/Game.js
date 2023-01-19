// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { useState } from "react";
// import Board from "./Board";

// export default function Game() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState(Array(9).fill(null));
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//       <div className="game-info">
//         <ol>{/*TODO*/}</ol>
//       </div>
//     </div>
//   );
// }

// // Game component will store the history of moves so the player can go back to any previous point.
// // This is why copying the square state array with splice was important, as we still have the original data for each move.