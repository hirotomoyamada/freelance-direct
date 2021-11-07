import styles from "./Form.module.scss";

import { Header } from "./components/header/Header";

import { NickName } from "./components/NickName";
import { Name } from "./components/Name";
import { Email } from "./components/Email";
import { Body } from "./components/Body";
import { Position } from "./components/Position";
import { Period } from "./components/Period";
import { Age } from "./components/Age";
import { Sex } from "./components/Sex";
import { Location } from "./components/Location";
import { Handles } from "./components/Handles";
import { Tools } from "./components/Tools";
import { Skills } from "./components/Skills";
import { Urls } from "./components/Urls";
import { Resident } from "./components/Resident";
import { Working } from "./components/Working";
import { Clothes } from "./components/Clothes";
import { Costs } from "./components/Costs";

export const Form = ({ cover, icon, setCover, setIcon }) => {
  return (
    <div className={styles.form}>
      <Header cover={cover} icon={icon} setCover={setCover} setIcon={setIcon} />

      <div className={styles.form_inner}>
        <NickName />
        <Name />
        <Email />
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

        <div className={styles.form_container}>
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
    </div>
  );
};
