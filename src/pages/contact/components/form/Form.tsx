import React from "react";
import styles from "../../Contact.module.scss";

import { Company } from "./components/Company";
import { Person } from "./components/Person";
import { Position } from "./components/Position";
import { Email } from "./components/Email";
import { Body } from "./components/Body";

interface PropType {
  person: string;
  email: string;
  body: string;
}

export const Form: React.FC<PropType> = ({ person, email, body }) => {
  return (
    <div className={styles.contact_form_inner}>
      <Company />
      <Person />
      <Position />
      <Email />
      <Body />

      <button
        className={`${styles.contact_form_btn} ${
          (!person || !email || !body) && styles.contact_form_btn_disable
        }`}
      >
        確認
      </button>
    </div>
  );
};
