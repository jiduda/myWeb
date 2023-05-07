import { useState } from "react";
import "../App.css";

const Header = () => {
  const [hover, setHover] = useState(0);
  return (
    <div className="Header">
      <div className="main">J-LOG</div>
      <div className="blank"></div>
      <div className="nav">
        <button
          className={`HeaderButton${hover === 1 ? "On" : "Off"}`}
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(0)}
        >
          Home
        </button>
        <button
          className={`HeaderButton${hover === 2 ? "On" : "Off"}`}
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(0)}
        >
          About
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
        <button
          className={`HeaderButton${hover === 5 ? "On" : "Off"}`}
          onMouseEnter={() => setHover(5)}
          onMouseLeave={() => setHover(0)}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
