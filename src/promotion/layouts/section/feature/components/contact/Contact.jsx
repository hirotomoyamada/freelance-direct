import root from "../../Feature.module.scss";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={`${root.feature_container} ${styles.contact}`}>
      <figure className={`${root.feature_figure} ${styles.contact_figure}`}>
        <span
          className={`${root.feature_figure_tag} ${styles.contact_figure_tag}`}
        ></span>

        
      </figure>
    </div>
  );
};
