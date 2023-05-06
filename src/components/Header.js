import { useState } from "react";
import "../App.css";
import { onMoveToForm } from "../hook/moveScroll";

const Header = () => {
  const [hover, setHover] = useState(0);
  return (
    <div className="Header">
      <div className="main">J-LOG</div>
      <div className="nav">
        <button
          className={`HeaderButton${hover === 1 ? "On" : "Off"}`}
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(0)}
          onClick={onMoveToForm}
        >
          Main
        </button>
        <button
          className={`HeaderButton${hover === 2 ? "On" : "Off"}`}
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(0)}
        >
          About Me
        </button>
        <button
          className={`HeaderButton${hover === 3 ? "On" : "Off"}`}
          onMouseEnter={() => setHover(3)}
          onMouseLeave={() => setHover(0)}
        >
          Projects
        </button>
        <button
          className={`HeaderButton${hover === 4 ? "On" : "Off"}`}
          onMouseEnter={() => setHover(4)}
          onMouseLeave={() => setHover(0)}
        >
          Info
        </button>
      </div>
      <div className="menu">Contact</div>
    </div>
  );
};

export default Header;
