import styles from "./Auth.module.scss";

import { auth } from "../../firebase";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import * as rootSlice from "../../features/root/rootSlice";

import { Sign } from "./components/Sign";
import { Reset } from "./components/Reset";
import { Create } from "./components/create/Create";
import { Verified } from "./components/Verified";
import { Help, StartGuide } from "./components/help/Help";
import { Terms } from "../terms/Terms";

import * as functions from "../../features/user/functions/functions";

export const Auth = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const methods = useForm({
    defaultValues: {
      handles: [{ handle: "" }, { handle: "" }, { handle: "" }, { handle: "" }],
    },
  });

  const verified = useSelector(rootSlice.verified);

  const [sign, setSign] = useState(false);
  const [reset, setReset] = useState(false);

  const [profile, setProfile] = useState(false);
  const [email, setEmail] = useState(false);
  const [help, setHelp] = useState(false);
  const [terms, setTerms] = useState(false);
  const [create, setCreate] = useState(false);
  const [error, setError] = useState(null);

  const file = methods.watch("file")?.[0];

  useEffect(() => {
    functions.auth.getRedirect({ dispatch });
  }, [dispatch]);

  useEffect(() => {
    setSign(location.pathname === "/signup" ? true : false);

    setCreate(
      verified.email || verified.profile || verified.status === "hold"
        ? true
        : false
    );
    setEmail(verified.email);
    setProfile(verified.profile);
  }, [location.pathname, verified]);

  useEffect(() => {
    if (!file) {
      setError(null);

      return;
    }

    if (file?.type !== "application/pdf") {
      setError("pdf のみアップロードできます");

      return;
    }

    if (file?.size > 0.4 * 1024 * 1024) {
      setError("400KB までアップロードできます");

      return;
    }

    setError(null);
  }, [file]);

  const handleSignIn = (data) => {
    functions.auth.handleSignIn({ dispatch, methods, data });
  };

  const handleSignUp = (data) => {
    functions.auth.handleSignUp({
      dispatch,
      methods,
      setCreate,
      setEmail,
      data,
    });
  };

  const handleProvider = (provider) => {
    functions.auth.handleProvider(provider);
  };

  const handleLogout = async () => {
    await auth.signOut().then(() => {
      setProfile(false);
      setReset(false);
      setEmail(false);
      methods.reset();
    });
  };

  const handleReset = (data) => {
    functions.auth.handleReset({ dispatch, reset, setReset, data });
  };

  const handleResend = () => {
    functions.auth.handleResend({ dispatch });
  };

  const handleCreate = (data) => {
    !error && functions.auth.handleCreate({ dispatch, data });
  };

  return (
    <FormProvider {...methods}>
      <form
        className={`${styles.auth} ${terms && styles.auth_terms} ${
          (email ||
            verified.status === "hold" ||
            verified.status === "disable") &&
          styles.auth_verified
        }`}
        onSubmit={
          reset
            ? methods.handleSubmit(handleReset)
            : profile
            ? methods.handleSubmit(handleCreate)
            : sign
            ? methods.handleSubmit(handleSignUp)
            : methods.handleSubmit(handleSignIn)
        }
      >
        {terms ? (
          <Terms create setTerms={setTerms} />
        ) : email ||
          verified.status === "hold" ||
          verified.status === "disable" ? (
          <Verified
            handleLogout={handleLogout}
            handleResend={handleResend}
            email={email}
            verified={verified}
          />
        ) : profile ? (
          <Create
            handleLogout={handleLogout}
            file={file}
            error={error}
            setTerms={setTerms}
          />
        ) : reset ? (
          <Reset reset={reset} setReset={setReset} />
        ) : (
          <Sign
            sign={sign}
            reset={reset}
            setSign={setSign}
            setReset={setReset}
            handleProvider={handleProvider}
          />
        )}
        {((sign && !create) || verified.email || verified.status === "hold") &&
          verified.status !== "disable" && (
            <StartGuide help={help} setHelp={setHelp} />
          )}
      </form>

      <Help
        help={help}
        email={email}
        create={create}
        profile={profile}
        verified={verified}
        setHelp={setHelp}
      />
    </FormProvider>
  );
};
