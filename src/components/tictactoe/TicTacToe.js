import React, { useState } from "react";
import Board from "./Board";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const startGame = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true);
  };

  const handleClick = (event) => {
    const { value } = event.target;
    const boardCopy = [...board];
    if (winner || boardCopy[value]) return;
    boardCopy[value] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  return (
    <div>
      <Board squares={board} handleClick={handleClick} />
      <p>
        {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
      </p>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}
export default TicTacToe;
