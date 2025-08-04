import React from "react";
import CarOutline from "../../images/car122.png";

const CarButton = ({
  text,
  onClick,
  width = 120,
  textColor = "#EDEBD7",
  hoverTextColor = "#E3B23C",
}) => {
  const [hover, setHover] = React.useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        width: `${width}px`,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        margin: "0.5%",
      }}
    >
      <img
        src={CarOutline}
        alt="Car Button"
        style={{
          width: hover ? "105%" : "100%",
          display: "block",
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "44%",
          left: "44.5%",
          transform: "translate(-50%, -50%)",
          color: hover ? hoverTextColor : textColor,
          fontSize: "12px",
          fontWeight: "bold",
          pointerEvents: "none",
          textAlign: "center",
        }}
      >
        {text}
      </span>
    </button>
  );
};

export default CarButton;
