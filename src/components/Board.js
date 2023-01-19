import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Square from "./Square";
import { useState } from "react";

export default function Board() {
  // Initialising state for the squares on the board as an Array with a length of 9 values that are set to be 'null':
  const [squares, setSquares] = useState(Array(9).fill(null));
  // Initialising another state to mark X and O on the board in order:
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    // using slice method to copy the squares array, keeping the original state array immutable:
    const nextSquares = squares.slice();
    // if statement that checks if a square is already filled and stops it from being changed:
    if (squares[i]) {
      return;
    }
    // Ternary statement that determines if X or O will fill the empty square that is clicked:
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    // setSquare function is called with the copied array defined above:
    setSquares(nextSquares);
    // setXIsNext function is called to flip the status of the boolean:
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
