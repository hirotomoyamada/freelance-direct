import styles from "./Promotion.module.scss";
import { useEffect, useState, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { Header } from "./layouts/header/Header";
import { Fv } from "./layouts/fv/Fv";

import { Footer } from "./layouts/footer/Footer";

import { Modal } from "./components/modal/Modal";

export const Promotion = () => {
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);

  const fv = useRef();

  const methods = useForm();

  useEffect(() => {
    const changeHeader = () => {
      if (
        JSON.stringify(
          fv.current && fv.current.getBoundingClientRect().height
        ) -
          96 <
        window.scrollY
      ) {
        setChange(true);
      } else {
        setChange(false);
      }
    };
    window.addEventListener("scroll", changeHeader);

    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open);
    document.body.classList.add("lock");
  };

  const handleClose = () => {
    setOpen(!open);
    document.body.classList.remove("lock");
  };

  const handleSignUp = () => {};

  return (
    <FormProvider {...methods}>
      <form
        className={styles.promotion}
        onSubmit={methods.handleSubmit(handleSignUp)}
      >
        <Modal handleClose={handleClose} open={open} />
        <Header change={change} />
        <Fv open={open} handleOpen={handleOpen} fv={fv} />

        <div className={styles.promotion_main}></div>

        <Footer handleOpen={handleOpen} />
      </form>
    </FormProvider>
  );
};
