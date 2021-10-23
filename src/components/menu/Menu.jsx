import styles from "./Menu.module.scss";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as rootSlice from "../../features/root/rootSlice";

import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Footer } from "./components/footer/Footer";

export const Menu = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const page = useSelector(rootSlice.page);
  const menu = useSelector(rootSlice.menu);

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

  const handlePage = (p) => {
    if (p === page) {
      return;
    }
    history.push(p === "user" ? `/user/${user.uid}` : `/${p}`);
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
        <Header user={user} handlePage={handlePage} />
        <Nav user={user} page={page} handlePage={handlePage} />
        <Footer />
      </div>
    </div>
  );
};
