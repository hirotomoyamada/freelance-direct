import styles from "./Setting.module.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import * as userSlice from "../userSlice";
import * as postSlice from "../../post/postSlice";
import * as functions from "./functions/functions";
import { auth } from "../../../firebase";

import { Header } from "../../../components/header/Header";
import { Password } from "./components/page/Password";
import { Email } from "./components/page/Email";
import { Create } from "./components/page/Create";
import { Reset } from "./components/page/Reset";
import { Delete } from "./components/page/Delete";
import { Main } from "./components/main/Main";

export const Setting = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(userSlice.user);
  const demo = useSelector(userSlice.verified).demo;

  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [create, setCreate] = useState(false);
  const [remove, setRemove] = useState(false);
  const [next, setNext] = useState(false);
  const [reset, setReset] = useState(false);

  const methods = useForm();

  useEffect(() => {
    dispatch(postSlice.handlePage("setting"));
  }, [dispatch]);

  const handleClose = () => {
    history.push(`/companys/${user.uid}`);
  };

  const handleBack = () => {
    setEmail(false);
    setPassword(false);
    setCreate(false);
    setRemove(false);
    setReset(false);
    setNext(false);
  };

  const handleCreate = (data) => {
    if (demo) {
      return;
    }

    functions.handleCreate({ dispatch, methods, handleBack, data });
  };

  const handleProvider = (provider) => {
    if (demo) {
      return;
    }

    functions.handleProvider(provider);
  };

  const handleEmail = (data) => {
    functions.handleEmail({
      dispatch,
      methods,
      setEmail,
      setNext,
      data,
      demo,
    });
  };

  const handlePassword = (data) => {
    functions.handlePassword({
      dispatch,
      methods,
      setPassword,
      setNext,
      data,
      demo,
    });
  };

  const handleReset = (data) => {
    if (demo) {
      return;
    }

    functions.handleReset({
      dispatch,
      methods,
      setEmail,
      setPassword,
      setNext,
      setReset,
      data,
    });
  };

  const handleLogout = () => {
    auth.signOut();
    history.push("/");

    dispatch(
      userSlice.handleAnnounce({
        type: "success",
        text: "ログアウトしました",
      })
    );
  };

  const handleDelete = (data) => {
    functions.handleDelete({
      dispatch,
      history,
      methods,
      user,
      next,
      setNext,
      data,
      demo,
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        className={`${styles.setting} ${
          !email &&
          !password &&
          !create &&
          !remove &&
          !reset &&
          !next &&
          styles.setting_main
        }`}
        onSubmit={methods.handleSubmit(
          reset
            ? handleReset
            : email
            ? handleEmail
            : password
            ? handlePassword
            : create
            ? handleCreate
            : remove && handleDelete
        )}
      >
        <Header
          type="setting"
          user={user}
          handleBack={handleBack}
          email={email}
          password={password}
          create={create}
          remove={remove}
          handleClose={handleClose}
        />

        {reset ? (
          <Reset />
        ) : create ? (
          <Create />
        ) : remove ? (
          <Delete
            next={next}
            user={user}
            setReset={setReset}
            setNext={setNext}
          />
        ) : email ? (
          <Email next={next} user={user} setReset={setReset} />
        ) : password ? (
          <Password next={next} setReset={setReset} />
        ) : (
          <Main
            user={user}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            setCreate={setCreate}
            setRemove={setRemove}
            handleProvider={handleProvider}
            handleLogout={handleLogout}
          />
        )}
      </form>
    </FormProvider>
  );
};
