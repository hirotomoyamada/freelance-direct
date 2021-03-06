import React from "react";
import root from "../Section.module.scss";
import styles from "./Feature.module.scss";

import { Contact } from "./components/contact/Contact";
import { Follow } from "./components/follow/Follow";
import { Request } from "./components/request/Request";

interface PropType {
  option?: boolean;
}
export const Feature: React.FC<PropType> = ({ option }) => {
  return !option ? (
    <section className={`${styles.feature} ${root.section}`}>
      <div className={`${root.section_inner} ${root.section_inner_content}`}>
        <h1 className={`${styles.feature_ttl} ${root.section_ttl}`}>機能</h1>
        <Contact />
        <Follow />
        <Request />
      </div>
    </section>
  ) : (
    <></>
  );
};
