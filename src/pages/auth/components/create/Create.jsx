import styles from "./Create.module.scss";
import root from "../../Auth.module.scss";

import { Name } from "./components/Name";
import { Agree } from "./components/Agree";
import { Position } from "./components/Position";
import { Location } from "./components/Location";
import { Age } from "./components/Age";
import { Sex } from "./components/Sex";
import { Handles } from "./components/Handles";
import { Resume } from "./components/Resume";

export const Create = ({ handleLogout, file, error, setTerms }) => {
  return (
    <div className={root.auth_inner}>
      <button
        type="button"
        className={`${root.auth_desc} ${root.auth_desc_logout}`}
        onClick={handleLogout}
      >
        ログイン画面に戻る
      </button>

      <Name />

      <div className={styles.grid}>
        <Age />
        <Sex />
      </div>

      <div className={`${styles.grid} ${styles.grid_mid}`}>
        <Position />
        <Location />
      </div>

      <Handles />

      <Resume file={file} error={error} />

      <Agree setTerms={setTerms} />

      <button type="submit" className={root.auth_btn}>
        登録
      </button>
    </div>
  );
};
