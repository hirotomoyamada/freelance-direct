import styles from "./Form.module.scss";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { promotionPosts } from "../../../../../../features/post/actions/promotionPosts";
import * as rootSlice from "../../../../../../features/root/rootSlice";
import { Btn } from "../../../../../components/btn/Btn";

export const Form = () => {
  const dispatch = useDispatch();
  const { register, watch, handleSubmit, reset } = useForm();

  const status = useSelector(rootSlice.verified).status;
  const value = watch("value");

  useEffect(() => {
    status === "promo" && dispatch(promotionPosts(value));
  }, [dispatch, status, value]);

  const handleSearch = (data) => {};

  const handleReset = () => {
    reset({ value: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSearch)}>
      <div className={styles.form_input}>
        <button type="submit">
          <SearchIcon
            className={`${styles.form_icon} ${styles.form_icon_search}`}
          />
        </button>

        <input {...register("value")} />

        <button type="button" onClick={handleReset}>
          <CloseIcon className={styles.form_icon} />
        </button>
      </div>
      <Btn txt="検索" submit square />
    </form>
  );
};
