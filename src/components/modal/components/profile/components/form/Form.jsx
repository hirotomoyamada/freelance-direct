import styles from "./Form.module.scss";

import { Header } from "./components/header/Header";
import { Name } from "./components/Name";
import { Body } from "./components/Body";

import { Handles } from "./components/Handles";
import { Tools } from "./components/Tools";
import { Skills } from "./components/Skills";
import { Urls } from "./components/Urls";
import { Age } from "./components/Age";
import { Sex } from "./components/Sex";
import { Location } from "./components/Location";
import { Position } from "./components/Position";
import { Resident } from "./components/Resident";
import { Working } from "./components/Working";
import { Clothes } from "./components/Clothes";
import { Period } from "./components/Period";
import { Costs } from "./components/Costs";

export const Form = ({ cover, icon, setCover, setIcon }) => {
  return (
    <>
      <Header cover={cover} icon={icon} setCover={setCover} setIcon={setIcon} />

      <div className={styles.form}>
        <Name />
        <Body />

        <div className={`${styles.form_grid} ${styles.form_grid_mid}`}>
          <Position />
          <Period />
        </div>

        <div className={`${styles.form_grid} ${styles.form_grid_triangle}`}>
          <Age />
          <Sex />
          <Location />
        </div>

        <Handles />
        <Tools />
        <Skills />
        <Urls />

        <div className={styles.form_col}>
          <p className={styles.form_strike}>
            <span>勤務</span>
          </p>
          <div className={`${styles.form_grid} ${styles.form_grid_triangle}`}>
            <Resident />
            <Working />
            <Clothes />
          </div>

          <Costs />
        </div>

        <span className={styles.form_tag_desc}>
          ※1&nbsp;承認後、開示される情報です。
        </span>
      </div>
    </>
  );
};
