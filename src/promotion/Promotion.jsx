import styles from "./Promotion.module.scss";

import { useOpen } from "./hook/useOpen";
import { useChange } from "./hook/useChange";
import { useForm, FormProvider } from "react-hook-form";

import { Header } from "./layouts/header/Header";
import { Fv } from "./layouts/fv/Fv";

import { Footer } from "./layouts/footer/Footer";

import { Modal } from "./components/modal/Modal";

export const Promotion = () => {
  const [open, handleOpen, handleClose] = useOpen();
  const [fv, change] = useChange();

  const methods = useForm();

  const handleSignUp = () => {};

  return (
    <FormProvider {...methods}>
      <form
        className={styles.promotion}
        onSubmit={methods.handleSubmit(handleSignUp)}
      >
        <Modal handleClose={handleClose} open={open} />
        <Header change={change} />
        <Fv handleOpen={handleOpen} fv={fv} />

        <div className={styles.promotion_main}></div>

        <Footer handleOpen={handleOpen} />
      </form>
    </FormProvider>
  );
};
