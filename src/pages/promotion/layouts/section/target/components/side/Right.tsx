import React from "react";
import styles from "./Side.module.scss";

export const Right: React.FC = () => {
  const icons = [
    "azure",
    "go",
    "illustrator",
    "photoshop",
    "php",
    "mysql",
    "vue",
    "java",
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
        src={`${process.env.PUBLIC_URL}/img/promotion/target_right.svg`}
        alt=""
        className={styles.side_bg}
      />
    </div>
  );
};
