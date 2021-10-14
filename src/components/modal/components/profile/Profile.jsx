import styles from "./Profile.module.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";

import * as userSlice from "../../../../features/user/userSlice";

import { Header } from "./components/header/Header";
import { Cover } from "./components/cover/Cover";
import { Icon } from "./components/icon/Icon";
import { Form } from "./components/form/Form";

export const Profile = ({ user, handleClose }) => {
  const dispatch = useDispatch();
  const [cover, setCover] = useState(false);
  const [icon, setIcon] = useState(false);

  const methods = useForm({
    defaultValues: {
      name: user?.profile?.name,
      icon: user?.icon,
      cover: user?.cover,
      body: user?.profile?.body,
      age: user?.profile?.age,
      sex: user?.profile?.sex,
      position: user?.profile?.position,
      location: user?.profile?.location,
      handles: user?.profile?.handles?.[0]
        ? user?.profile?.handles.map((value) => ({
            handle: value,
          }))
        : [{ handle: "" }, { handle: "" }, { handle: "" }, { handle: "" }],
      tools: user?.profile?.tools?.[0]
        ? user?.profile?.tools.map((value) => ({
            tool: value,
          }))
        : [{ tool: "" }, { tool: "" }, { tool: "" }, { tool: "" }],
      skills: user?.profile?.skills?.[0]
        ? user?.profile?.skills.map((value) => ({
            skill: value,
          }))
        : [{ skill: "" }, { skill: "" }, { skill: "" }],
      urls: user?.profile?.urls?.[0]
        ? user?.profile?.urls.map((value) => ({
            url: value,
          }))
        : [{ url: "" }],
      data: user?.profile?.data,
      costs: user?.profile?.costs,
      working: user?.profile?.working ? user?.profile?.working : 3,
      resident: user?.profile?.resident ? user?.profile?.resident : "常駐可",
      clothes: user?.profile?.clothes ? user?.profile?.clothes : "カジュアル",
      period: user?.profile?.period,
    },
  });

  const handleBack = () => {
    setCover(false);
    setIcon(false);
  };

  const handleEdit = (data) => {
    data.uid = user.uid;

    dispatch(userSlice.editProfile(data));
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
