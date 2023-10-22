import React from "react";
import { range } from "../utils/rangeUtils";
import Square from "../Square/Square";

import "./Board.css";

const winnerBoard = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,5,9],
	[3,5,7],
	[1,4,7],
	[2,5,8],
	[3,6,9]
];

const Board = ({ rows = 3, cols = 3 }) => {
  const [isX, setIsX] = React.useState(true);
	const [winner, setWinner] = React.useState(false);
  const [board, setBoard] = React.useState(Array(9).fill(null));

  const handleSquareClick = (val) => {
		const newBoard = [...board];
		newBoard[val] = isX ? 'X' : 'O';
		checkWinner(newBoard);
		setBoard(newBoard);
    setIsX(!isX);
  };

	const checkWinner = (board) => {
		for(let i=0; i<winnerBoard.length; i++) {
			const [a,b,c] = winnerBoard[i];
			if(board[a] && board[a] === board[b] && board[c] && board[b] == board[c]) {
				setWinner(board[a])
			}
		}
	}

  const generateBoard = () => {
    let value = 0;
    return (
      <div className="board">
        {range(rows).map((num1, idx1) =>
          range(cols).map((num2, idx2) => {
            value = value + 1;
            return (
              <Square
                key={idx1 + idx2}
                value={value}
                handleClick={handleSquareClick}
								isX={isX}
								winner={winner}
              />
            );
          })
        )}
				{winner ? `Player ${winner} wins` : ''}
      </div>
    );
  };

  return generateBoard();
};

export default Board;
