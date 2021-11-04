import styles from "./Form.module.scss";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import { Btn } from "../../../../../components/btn/Btn";
import { useSearch } from "../../hook/useSearch";

export const Form = () => {
  const [register, handleSubmit, handleSearch, handleReset] = useSearch();

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(handleSearch)}
      action="#"
      submit="search"
    >
      <div className={styles.form_input}>
        <button type="submit">
          <SearchIcon
            className={`${styles.form_icon} ${styles.form_icon_search}`}
          />
        </button>

        <input type="search" placeholder="検索" {...register("value")} />

        <button type="button" onClick={handleReset}>
          <CloseIcon className={styles.form_icon} />
        </button>
      </div>
      <Btn txt="検索" submit square hidden />
    </form>
  );
};
