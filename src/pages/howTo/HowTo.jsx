import styles from "./HowTo.module.scss";

import { useState } from "react";

import { Header } from "../../components/header/Header";
import { Menu } from "./components/menu/Menu";
import { Main } from "./components/Main/Main";

export const HowTo = () => {
  const [page, setPage] = useState("home");

  return (
    <div className={styles.howto}>
      <Header back />
      <div className={styles.howto_inner}>
        <Menu page={page} setPage={setPage} />
        <Main page={page} />
      </div>
    </div>
  );
};