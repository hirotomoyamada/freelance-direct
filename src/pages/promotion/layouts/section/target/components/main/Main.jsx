import root from "../../../Section.module.scss";
import styles from "./Main.module.scss";

import { position } from "./functions/position";
import { location } from "./functions/location";

export const Main = ({ option }) => {
  return (
    <div className={styles.main}>
      {!option ? (
        <h1 className={`${styles.main_ttl} ${root.section_ttl}`}>
          ご利用いただける方
        </h1>
      ) : (
        <h1 className={`${styles.main_ttl} ${root.section_ttl}`}>
          利用している<span>フリーランスの方</span>
        </h1>
      )}

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
