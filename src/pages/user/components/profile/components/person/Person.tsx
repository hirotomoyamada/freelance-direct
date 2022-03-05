import React from "react";
import styles from "./Person.module.scss";

import { Head } from "./components/Head";
import { Handles } from "./components/Handles";
import { Tools } from "./components/Tools";
import { Body } from "./components/Body";
import { Work } from "./components/Work";
import { Name } from "./components/Name";
import { Skills } from "./components/Skills";
import { Costs } from "./components/Costs";
import { Period } from "./components/Period";
import { Resume } from "./components/resume/Resume";
import { Private } from "./components/Private";
import { Email } from "./components/Email";
import { Urls } from "./components/Urls";
import { CreateAt } from "./components/CreateAt";

import { User } from "types/user";

interface PropType {
  user: User;
}

export const Person: React.FC<PropType> = ({ user }) => {
  return (
    <div className={styles.profile}>
      <Head user={user} />

      <div
        className={`${styles.profile_container} ${
          user?.profile?.body && styles.profile_container_dev
        } `}
      >
        <Handles user={user} />
        <Tools user={user} />
      </div>

      {user?.profile?.body && (
        <div className={styles.profile_container}>
          <Body user={user} />
        </div>
      )}

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

      <div className={styles.profile_field}>
        <span className={styles.profile_request}>リクエスト</span>
        <span
          className={`${styles.profile_desc} ${styles.profile_desc_request}`}
        >
          承認後、開示される情報です
        </span>
      </div>
    </div>
  );
};
