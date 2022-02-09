import styles from "./Can.module.scss";
import root from "../Section.module.scss";

import { Contact } from "./components/Contact";
import { Search } from "./components/Search";
import { Matching } from "./components/Matching";

export const Can = ({ option }) => {
  return (
    <section className={`${styles.can} ${root.section}`}>
      <div className={`${root.section_inner} ${root.section_inner_content}`}>
        <h1 className={`${styles.can_ttl} ${root.section_ttl}`}>できること</h1>
        <Search option={option} />
        <Contact option={option} />
        <Matching option={option} />
      </div>
    </section>
  );
};
