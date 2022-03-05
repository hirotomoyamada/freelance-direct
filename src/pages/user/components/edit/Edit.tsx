import React from "react";
import styles from "./Edit.module.scss";

import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";

import * as userSlice from "features/user/userSlice";
import * as rootSlice from "features/root/rootSlice";

import { User } from "types/user";

interface PropType {
  user: User;
}

type Data = {
  state: string;
};

export const Edit: React.FC<PropType> = ({ user }) => {
  const dispatch = useDispatch();
  const { register, watch, handleSubmit } = useForm<Data>({
    defaultValues: { state: user?.profile?.state },
  });

  const state = watch("state");

  const handleEdit: SubmitHandler<Data> = (data) => {
    dispatch(userSlice.changeState(data.state));
  };

  return (
    <form className={styles.edit} onSubmit={handleSubmit(handleEdit)}>
      <div className={`${styles.edit_btn} ${styles.edit_btn_select}`}>
        <span className={styles.edit_btn_display}>{state}</span>

        <select {...register("state")} className={styles.edit_btn_input}>
          <option value="案件探し中">案件探し中</option>
          <option value="確定">確定</option>
          <option value="商談中">商談中</option>
          <option value="内容次第">内容次第</option>
          <option value="至急">至急</option>
          <option value="情報収集中">情報収集中</option>
        </select>
      </div>

      <button
        type={user?.profile?.state === state ? "button" : "submit"}
        onClick={() =>
          user?.profile?.state === state
            ? dispatch(rootSlice.handleModal({ type: "profile" }))
            : null
        }
        className={`${styles.edit_btn} ${
          user?.profile?.state !== state && styles.edit_btn_submit
        }`}
      >
        {user?.profile?.state === state ? "プロフィール変更" : "保存"}
      </button>
    </form>
  );
};
