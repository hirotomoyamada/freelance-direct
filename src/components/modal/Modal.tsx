import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as rootSlice from "../../features/root/rootSlice";
import * as userSlice from "../../features/user/userSlice";
import * as postSlice from "../../features/post/postSlice";

import { Profile } from "./components/profile/Profile";
import { Entry } from "./components/entry/Entry";
import { Home } from "./components/home/Home";
import { Information } from "./components/information/Information";
import { Demo } from "./components/demo/Demo";
import { Agree } from "./components/agree/Agree";
import { Delete } from "./components/delete/Delete";

export const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const index = useSelector(rootSlice.index);
  const user = useSelector(userSlice.user);
  const post = useSelector(postSlice.post);
  const modal = useSelector(rootSlice.modal);

  const location = useLocation();

  useEffect(() => {
    location?.pathname === "/terms"
      ? document.body.classList.remove("lock")
      : modal.open
      ? document.body.classList.add("lock")
      : document.body.classList.remove("lock");
  }, [location, modal.open]);

  const Inner = () => {
    switch (modal.type) {
      case "agree":
        return <Agree user={user} />;
      case "demo":
        return <Demo handleClose={handleClose} />;
      case "info":
        return <Information handleClose={handleClose} />;
      case "home":
        return <Home user={user} handleClose={handleClose} />;
      case "profile":
        return <Profile user={user} handleClose={handleClose} />;
      case "entry":
        return (
          <Entry
            index={index as "matters"}
            user={user}
            post={post}
            handleClose={handleClose}
          />
        );
      case "delete":
        return (
          <Delete
            text={modal.text}
            close={modal.close}
            handleClose={handleClose}
            handleDelete={modal.delete}
          />
        );
      case "block":
        return (
          <Delete
            text={modal.text}
            close={modal.close}
            handleClose={handleClose}
            handleDelete={modal.delete}
            block
          />
        );
      default:
        return <></>;
    }
  };

  const handleClose = () => {
    dispatch(rootSlice.handleModal());
  };

  return (
    <div
      className={
        modal.open &&
        location?.pathname !== "/asct" &&
        location?.pathname !== "/terms"
          ? styles.open
          : styles.close
      }
    >
      <div className={styles.overlay}></div>
      <div
        className={`${styles.modal} ${
          modal.type !== "home" &&
          modal.type !== "delete" &&
          modal.type !== "block" &&
          styles.modal_sp
        }`}
      >
        <Inner />
      </div>
    </div>
  );
};
