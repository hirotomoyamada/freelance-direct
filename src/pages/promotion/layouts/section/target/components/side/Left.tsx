import React from "react";
import styles from "./Side.module.scss";

export const Left: React.FC = () => {
  const icons = [
    "typescript",
    "javascript",
    "react",
    "python",
    "figma",
    "flutter",
    "kotlin",
    "unity",
  ];

  return (
    <div className={styles.side}>
      {icons.map((icon, index) => (
        <figure
          key={index}
          className={`${styles.side_icon} ${styles[`side_icon_${icon}`]}`}
        >
          <img
            src={`${process.env.PUBLIC_URL}/img/promotion//icon/${icon}.svg`}
            alt=""
            className={`${styles.side_icon_img} ${
              styles[`side_icon_img_${icon}`]
            }`}
          />
        </figure>
      ))}

      <img
        src={`${process.env.PUBLIC_URL}/img/promotion/target_left.svg`}
        alt=""
        className={styles.side_bg}
      />
    </div>
  );
};
