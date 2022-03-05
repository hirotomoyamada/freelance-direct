import React, { useEffect, useState } from "react";
import styles from "./HowTo.module.scss";

import { Header } from "../../components/header/Header";
import { Menu } from "./components/menu/Menu";
import { Main } from "./components/Main/Main";

export const HowTo: React.FC = () => {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
