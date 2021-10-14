import styles from "./Person.module.scss";

import { Head } from "./components/Head";
import { Body } from "./components/Body";

import { Email } from "./components/Email";

import { CreateAt } from "./components/CreateAt";

export const Person = ({ user, demo }) => {
  return (
    <div className={styles.inner}>
      <Head user={user} />

      <Body user={user} />

      <div className={styles.profile_container}>
        <div className={styles.profile_wrap}>
          <Email user={user} demo={demo} />
        </div>

        <CreateAt user={user} />
      </div>
    </div>
  );
};
