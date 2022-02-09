import styles from "./Modal.module.scss";

import { FormProvider } from "react-hook-form";

import { SignUp } from "./components/SignUp";
import { Social } from "./components/Social";
import { useSignUp } from "./hook/useSignUp";

export const Modal = ({ handleClose, open }) => {
  const [methods, handleSignUp] = useSignUp();

  return (
    <div className={open ? styles.open : styles.close}>
      <div className={styles.overlay} onClick={handleClose}></div>

      <FormProvider {...methods}>
        <form
          className={styles.modal}
          onSubmit={methods.handleSubmit(handleSignUp)}
        >
          <div className={styles.modal_inner}>
            <h1 className={styles.modal_ttl}>新規登録</h1>

            <SignUp />

            <p className={styles.modal_strike}>
              <span>または</span>
            </p>

            <Social />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
