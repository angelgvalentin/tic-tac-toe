import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Square = (props) => {
    return (
        <button className="square" onClick={props.onClickEvent}>
            {props.value}
        </button>
    );
};

const Board = () => {
    const initialSquares = Array(9).fill(null);

    const [squares, setSquares] = useState(initialSquares);

    const [xIsNext, setXIsNext] = useState(true);

    const handleClickEvent = (i) => {
        // alert(`square ${i} clicked`);
        //1. make copy of squares state array
        const newSquares = [...squares];
        // console.log(...squares);
        //2. Mutate the copy setting the i-th element to X
        newSquares[i] = xIsNext ? "X" : "O";
        //3. Call the setSquares function with the mutated copy
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />;
    };

    const status = `Current Player: ${xIsNext ? "X" : "O"}`;

    return (
        <div className="">
            <div className="status"> {status}</div>
            <div className="boardRow">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="boardRow">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="boardRow">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

const Game = () => {
    return (
        <div className="game">
            Tic-Tac-Toe
            <Board />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Game />
    </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
