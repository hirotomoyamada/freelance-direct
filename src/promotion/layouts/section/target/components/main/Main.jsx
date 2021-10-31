import root from "../../../Section.module.scss";
import styles from "./Main.module.scss";

import { position } from "./functions/position";
import { location } from "./functions/location";

export const Main = () => {
  return (
    <div className={styles.main}>
      <h1 className={`${styles.main_ttl} ${root.section_ttl}`}>
        ご利用いただける方
      </h1>

      <div className={styles.main_container}>
        <span className={styles.main_tag}>ポジション</span>
        <div className={styles.main_wrap}>
          {position.map((t, index) => (
            <span key={index}>{t}</span>
          ))}
        </div>
      </div>

      <div className={styles.main_container}>
        <span className={styles.main_tag}>エリア</span>
        <div className={styles.main_wrap}>
          {location.map((t, index) => (
            <span key={index}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
