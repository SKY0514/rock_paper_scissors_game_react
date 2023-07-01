import HandIcon from "./HandIcon.js";
import "./assets/css/Box.css";

function Box({ hand, otherHand, gameResult, bet, handleBetChange }) {
  return (
    <div className="Box App-box">
      <div className="Box-inner">
        <div className="App-hands">
          <div
            className={
              gameResult[gameResult.length - 1] === "승리"
                ? "Hand winner"
                : "Hand"
            }
          >
            <HandIcon value={hand} className="Hand-icon" />
          </div>
          <div className="App-versus">VS</div>
          <div
            className={
              gameResult[gameResult.length - 1] === "패배"
                ? "Hand winner"
                : "Hand"
            }
          >
            <HandIcon value={otherHand} className="Hand-icon" />
          </div>
        </div>
        <div className="App-bet">
          <span>배점</span>
          <input
            type="number"
            min="1"
            max="9"
            step="1"
            value={bet}
            onChange={handleBetChange}
          />
          <span>배</span>
        </div>
        <div className="App-history">
          <h2>승부기록</h2>
          <p> {gameResult.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default Box;
