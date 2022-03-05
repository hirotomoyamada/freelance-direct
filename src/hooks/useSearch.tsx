import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
  useForm,
} from "react-hook-form";

import { promotionPosts } from "features/post/actions";
import * as rootSlice from "features/root/rootSlice";

type Data = {
  value: string;
};

export const useSearch = (): [
  register: UseFormRegister<Data>,
  handleSubmit: UseFormHandleSubmit<Data>,
  handleSearch: SubmitHandler<Data>,
  handleReset: () => void
] => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, reset } = useForm<Data>({
    defaultValues: { value: "" },
  });

  const status = useSelector(rootSlice.verified).status === "promo";
  const value = watch("value");

  const [control, setControl] = useState(false);

  useEffect(() => {
    !value && setControl(false);
  }, [value]);

  useEffect(() => {
    if (status && !control) {
      dispatch(promotionPosts(value));
      setControl(true);
    }
  }, [control, dispatch, status, value]);

  const handleSearch: SubmitHandler<Data> = (): void => {
    value && setControl(false);
  };

  const handleReset = (): void => {
    reset({ value: "" });
  };

  return [register, handleSubmit, handleSearch, handleReset];
};
