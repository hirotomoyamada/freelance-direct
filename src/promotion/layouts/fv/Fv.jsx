import styles from "./Fv.module.scss";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

export const Fv = ({ handleOpen, fv }) => {
  return (
    <div className={styles.fv} ref={fv}>
      <Main handleOpen={handleOpen} />
      <Footer />

      <img
        src={`${process.env.PUBLIC_URL}/img/promotion/fv.png`}
        alt=""
        className={styles.fv_bg}
      />
    </div>
  );
};
