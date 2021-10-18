import styles from "./Person.module.scss";

import { Head } from "./components/Head";
import { Body } from "./components/Body";

import { Email } from "./components/Email";

import { CreateAt } from "./components/CreateAt";
import { Handles } from "./components/Handles";
import { Tools } from "./components/Tools";
import { Skills } from "./components/Skills";
import { Urls } from "./components/Urls";
import { Work } from "./components/Work";
import { Private } from "./components/Private";
import { Costs } from "./components/Costs";
import { Period } from "./components/Period";
import { Resume } from "./components/resume/Resume";
import { Name } from "./components/Name";

export const Person = ({ user }) => {
  return (
    <div className={styles.profile}>
      <Head user={user} />

      <div
        className={`${styles.profile_container} ${styles.profile_container_dev}`}
      >
        <Handles user={user} />
        <Tools user={user} />
      </div>

      <div className={styles.profile_container}>
        <Body user={user} />
      </div>

      <div className={styles.profile_container}>
        <Work user={user} />
        <Name user={user} />
        <Skills user={user} />
        <Costs user={user} />
        <Period user={user} />
      </div>

      <Resume user={user} />

      <div className={styles.profile_container}>
        <Private user={user} />
        <Email user={user} />
        <Urls user={user} />
        <CreateAt user={user} />
      </div>
    </div>
  );
};
