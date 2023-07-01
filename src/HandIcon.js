import rockImg from "./assets/images/rock.svg";
import scissorImg from "./assets/images/scissor.svg";
import paperImg from "./assets/images/paper.svg";
import "./assets/css/Hand.css";

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

// className prop을 추가하고, img 태그에 적용해주세요
function HandIcon({ value, className }) {
  const src = IMAGES[value];

  return <img src={src} alt={value} className={className} />;
}

export default HandIcon;
