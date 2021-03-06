import React from "react";
import styles from "./Company.module.scss";

import { Head } from "./components/Head";
import { Body } from "./components/Body";
import { Address } from "./components/Address";
import { Tel } from "./components/Tel";
import { Email } from "./components/Email";
import { Url } from "./components/Url";
import { CreateAt } from "./components/CreateAt";
import { Social } from "./components/Social";

import { Company as SelectUser } from "types/post";

interface PropType {
  user: SelectUser;
  demo?: boolean;
}

export const Company: React.FC<PropType> = ({ user, demo }) => {
  return (
    <div className={styles.profile}>
      <Head user={user} />

      <Body user={user} />

      <div className={styles.profile_container}>
        <Address user={user} demo={demo} />

        <div className={styles.profile_wrap}>
          <Tel user={user} demo={demo} />

          <Email user={user} demo={demo} />
        </div>

        <Url user={user} demo={demo} />

        <CreateAt user={user} />
      </div>
      <Social user={user} demo={demo} />
    </div>
  );
};
