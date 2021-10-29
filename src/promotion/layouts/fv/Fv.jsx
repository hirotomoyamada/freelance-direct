import styles from "./Fv.module.scss";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

export const Fv = ({ open, handleOpen, fv }) => {
  return (
    <div className={styles.fv} ref={fv}>
      <Main handleOpen={handleOpen} />
      <Footer />
    </div>
  );
};
