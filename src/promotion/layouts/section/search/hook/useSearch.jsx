import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { promotionPosts } from "../../../../../features/post/actions/promotionPosts";
import * as rootSlice from "../../../../../features/root/rootSlice";

export const useSearch = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, reset } = useForm({
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
      console.log(value);
      dispatch(promotionPosts(value));
      setControl(true);
    }
  }, [control, dispatch, status, value]);

  const handleSearch = () => {
    value && setControl(false);
  };

  const handleReset = () => {
    reset({ value: "" });
  };

  return [register, handleSubmit, handleSearch, handleReset];
};
