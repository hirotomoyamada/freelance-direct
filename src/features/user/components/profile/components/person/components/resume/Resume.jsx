import root from "../../Person.module.scss";

import { useEffect, useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { uploadResume } from "../../../../../../actions/uploadResume";
import * as userSlice from "../../../../../../userSlice";

import { File } from "./components/File";
import { Upload } from "./components/Upload";

export const Resume = ({ user }) => {
  const dispatch = useDispatch();

  const input = useRef();
  const [resume, setResume] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resume) {
      setError(null);
      setSuccess(false);

      return;
    }

    if (resume?.type !== "application/pdf") {
      setError("pdf のみアップロードできます");
      setSuccess(false);

      return;
    }

    if (resume?.size > 400 * 1000) {
      setError("400KB までアップロードできます");
      setSuccess(false);

      return;
    }

    setError(null);
    setSuccess(true);
  }, [resume]);

  const handleUpload = (e) => {
    e.preventDefault();

    const arrayBuffer = new Uint8Array(resume);
    const base64 = btoa(
      arrayBuffer.reduce((p, c) => {
        return p + String.fromCharCode(c);
      }, "")
    );

    dispatch(uploadResume(base64));
  };

  const handleChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleCancel = () => {
    input.current.value = null;
    setResume(null);
    setError(null);
    setSuccess(false);
  };

  const handleDelete = () => {
    dispatch(userSlice.deleteResume());
  };

  return (
    <form onSubmit={handleUpload} className={root.profile_container}>
      <File user={user} resume={resume} handleDelete={handleDelete} />

      <Upload
        input={input}
        success={success}
        error={error}
        handleChange={handleChange}
        handleCancel={handleCancel}
      />
    </form>
  );
};
