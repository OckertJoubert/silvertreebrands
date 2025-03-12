import React, { FC, useState } from "react";
import styles from "@/styles/Home.module.css";

interface CycleButtonProps {
  colors: string[];
}

const CycleButton: FC<CycleButtonProps> = ({ colors }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <>
      <div className={styles.ctas}>
        <a
          className={styles.primary}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: colors[currentColorIndex],
            borderColor:
              colors[currentColorIndex] === "white" ? "black" : "white",
            borderWidth: "2px",
          }}
          onClick={handleClick}
        >
          Cycle
        </a>
      </div>
    </>
  );
};

export default CycleButton;
