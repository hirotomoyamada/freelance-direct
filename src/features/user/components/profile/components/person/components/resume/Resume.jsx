import root from "../../Person.module.scss";

import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useDispatch } from "react-redux";
import { uploadResume } from "../../../../../../actions/uploadResume";
import * as userSlice from "../../../../../../userSlice";

import { File } from "./components/File";
import { Upload } from "./components/Upload";

export const Resume = ({ user }) => {
  const dispatch = useDispatch();
  const methods = useForm();

  const resume = methods.watch("file");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resume?.[0]) {
      setError(null);
      setSuccess(false);

      return;
    }

    if (resume?.[0]?.type !== "application/pdf") {
      setError("pdf のみアップロードできます");
      setSuccess(false);

      return;
    }

    if (resume?.[0]?.size > 400 * 1000) {
      setError("400KB までアップロードできます");
      setSuccess(false);

      return;
    }

    setError(null);
    setSuccess(true);
    console.log(resume[0]);
  }, [resume]);

  const handleUpload = (data) => {
    dispatch(uploadResume(data.resume));
  };

  const handleCancel = () => {
    methods.reset();
    setError(null);
    setSuccess(false);
  };

  const handleDelete = () => {
    dispatch(userSlice.deleteResume());
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleUpload)}
        className={root.profile_container}
      >
        <File user={user} resume={resume} handleDelete={handleDelete} />

        <Upload success={success} error={error} handleCancel={handleCancel} />
      </form>
    </FormProvider>
  );
};
