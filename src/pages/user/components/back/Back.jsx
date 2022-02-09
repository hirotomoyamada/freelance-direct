import styles from "./Back.module.scss";
import { useHistory } from "react-router";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
export const Back = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };
  return (
    <button type="button" className={styles.back} onClick={handleBack}>
      <ArrowBackIcon className={styles.back_icon} />
    </button>
  );
};
