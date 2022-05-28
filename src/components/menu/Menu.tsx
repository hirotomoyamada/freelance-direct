import React, { useEffect, useState } from "react";
import styles from "./Menu.module.scss";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Footer } from "./components/footer/Footer";

import { User } from "types/user";

interface PropType {
  user: User;
}

export const Menu: React.FC<PropType> = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const page = useSelector(rootSlice.page);
  const menu = useSelector(rootSlice.menu);
  const disable = useSelector(rootSlice.verified).agree;

  const [control, setControl] = useState(
    window.innerWidth < 959 ? true : false
  );

  useEffect(() => {
    const resize = () => {
      window.innerWidth < 959 ? setControl(true) : setControl(false);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handlePage = (p: string): void => {
    if (p === page) {
      return;
    }
    navigate(p === "user" ? `/user/${user.uid}` : `/${p}`);
    control && dispatch(rootSlice.handleMenu("close"));

    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`${styles.menu} ${
        menu.display ? styles.menu_open : menu.control && styles.menu_close
      }`}
    >
      <div className={styles.menu_inner}>
        <Header user={user} handlePage={handlePage} disable={disable} />
        <Nav
          user={user}
          page={page}
          handlePage={handlePage}
          disable={disable}
        />
        <Footer />
      </div>
    </div>
  );
};
