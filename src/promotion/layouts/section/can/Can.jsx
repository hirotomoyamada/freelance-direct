import root from "../Section.module.scss";
import styles from "./Can.module.scss";

export const Can = () => {
  return (
    <section className={`${styles.can} ${root.section}`}>
      <div className={root.section_inner}>
        <h1 className={`${styles.can_ttl} ${root.section_ttl}`}>
          できること
        </h1>
      </div>
    </section>
  );
};
