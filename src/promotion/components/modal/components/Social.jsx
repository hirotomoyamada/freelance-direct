import styles from "../Modal.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { handleProvider } from "../../../../pages/auth/functions/handleProvider";

export const Social = () => {
  return (
    <div className={styles.modal_container}>
      <button
        type="button"
        onClick={() => handleProvider("google")}
        className={`${styles.modal_btn_google} ${styles.modal_btn}`}
      >
        <FontAwesomeIcon icon={faGoogle} />
        &nbsp;Google
      </button>

      <button
        type="button"
        onClick={() => handleProvider("twitter")}
        className={`${styles.modal_btn_twitter} ${styles.modal_btn}`}
      >
        <FontAwesomeIcon icon={faTwitter} />
        &nbsp;Twitter
      </button>

      <button
        type="button"
        onClick={() => handleProvider("github")}
        className={`${styles.modal_btn_github} ${styles.modal_btn}`}
      >
        <FontAwesomeIcon icon={faGithub} />
        &nbsp;Github
      </button>
    </div>
  );
};
