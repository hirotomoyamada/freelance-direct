import styles from "./Form.module.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { promotionPosts } from "../../../../../../features/post/actions/promotionPosts";
import * as rootSlice from "../../../../../../features/root/rootSlice";
import { Btn } from "../../../../../components/btn/Btn";

export const Form = () => {
  const dispatch = useDispatch();
  const { register, watch, handleSubmit } = useForm();

  const status = useSelector(rootSlice.verified).status;
  const value = watch("value");

  useEffect(() => {
    status === "promo" && dispatch(promotionPosts(value));
  }, [dispatch, status, value]);

  const handleSearch = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSearch)}>
      <input {...register("value")} className={styles.form_input} />
      <Btn txt="検索" submit square />
    </form>
  );
};
