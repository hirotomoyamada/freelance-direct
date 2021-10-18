import styles from "./Profile.module.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";

import * as userSlice from "../../../../features/user/userSlice";

import { Header } from "./components/header/Header";
import { Cover } from "./components/cover/Cover";
import { Icon } from "./components/icon/Icon";
import { Form } from "./components/form/Form";

import { defaultValues } from "./functions/defaultValues";
import { persons } from "./functions/persons";

export const Profile = ({ user, handleClose }) => {
  const dispatch = useDispatch();
  const [cover, setCover] = useState(false);
  const [icon, setIcon] = useState(false);

  const methods = useForm({
    defaultValues: defaultValues(user),
  });

  const handleBack = () => {
    setCover(false);
    setIcon(false);
  };

  const handleEdit = (data) => {
    const object = { ...{ uid: user.uid }, ...persons(data) };

    dispatch(userSlice.editProfile(object));
  };

  return (
    <FormProvider {...methods}>
      <form
        className={`${styles.profile} ${
          (cover || icon) && styles.profile_change
        }`}
        onSubmit={methods.handleSubmit(handleEdit)}
      >
        <Header
          handleClose={handleClose}
          handleBack={handleBack}
          cover={cover}
          icon={icon}
        />

        {cover ? (
          <Cover />
        ) : icon ? (
          <Icon />
        ) : (
          <Form
            cover={cover}
            icon={icon}
            setCover={setCover}
            setIcon={setIcon}
          />
        )}
      </form>
    </FormProvider>
  );
};
