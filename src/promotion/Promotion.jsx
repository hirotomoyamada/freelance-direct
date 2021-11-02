import styles from "./Promotion.module.scss";

import { useOption } from "./hook/useOption";
import { useOpen } from "./hook/useOpen";
import { useChange } from "./hook/useChange";

import { Header } from "./layouts/header/Header";
import { Fv } from "./layouts/fv/Fv";
import { Footer } from "./layouts/footer/Footer";

import { What } from "./layouts/section/what/What";
import { Can } from "./layouts/section/can/Can";
import { Feature } from "./layouts/section/feature/Feature";
import { Search } from "./layouts/section/search/Search";
import { Target } from "./layouts/section/target/Target";
import { Lets } from "./layouts/section/lets/Lets";

import { Modal } from "./components/modal/Modal";

export const Promotion = () => {
  const [option] = useOption();
  const [open, handleOpen, handleClose] = useOpen();
  const [fv, change] = useChange();

  return (
    <div className={styles.promotion}>
      <Modal handleClose={handleClose} open={open} option={option} />
      <Header change={change} option={option} />
      <Fv handleOpen={handleOpen} fv={fv} option={option} />

      <div className={styles.promotion_main}>
        <What option={option} />
        <Can option={option} />
        <Feature option={option} />
        <Search handleOpen={handleOpen} option={option} />
        <Target option={option} />
        <Lets option={option} />
      </div>

      <Footer option={option} />
    </div>
  );
};
