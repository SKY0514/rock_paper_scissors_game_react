import resetImg from "./assets/images/ic-reset.svg";
function Button({ onClick }) {
  return (
    <img className="App-reset" src={resetImg} alt="초기화" onClick={onClick} />
  );
}

export default Button;
