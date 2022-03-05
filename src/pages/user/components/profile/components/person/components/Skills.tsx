import React from "react";
import styles from "../Person.module.scss";

import { User } from "types/user";

interface PropType {
  user: User;
}

export const Skills: React.FC<PropType> = ({ user }) => {
  const skills = user?.profile?.skills;

  return skills?.[0] ? (
    <div className={styles.profile_col}>
      <span className={styles.profile_tag}>スキル</span>
      {skills?.[0] &&
        skills.map((skill, index) => skill && <p key={index}>{skill}</p>)}
    </div>
  ) : (
    <></>
  );
};
