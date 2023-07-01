import "./assets/css/Score.css";

function Score({ score, otherScore }) {
  return (
    <div className="App-scores">
      <div className="Score">
        <div className="Score-num">{score}</div>
        <div className="Score-name">나</div>
      </div>
      <div className="App-versus">:</div>
      <div className="Score">
        <div className="Score-num">{otherScore}</div>
        <div className="Score-name">상대</div>
      </div>
    </div>
  );
}

export default Score;
