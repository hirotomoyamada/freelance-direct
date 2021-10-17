import root from "../../Person.module.scss";

import { useEffect, useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { uploadResume } from "../../../../../../actions/uploadResume";
import * as userSlice from "../../../../../../userSlice";
import * as rootSlice from "../../../../../../../root/rootSlice";

import { File } from "./components/File";
import { Upload } from "./components/Upload";

export const Resume = ({ user }) => {
  const dispatch = useDispatch();

  const input = useRef();
  const [resume, setResume] = useState(null);
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

      // 5242,880
      // 400,000

      return;
    }

    if (resume?.size > 0.4 * 1024 * 1024) {
      setError("400KB までアップロードできます");
      setSuccess(false);

      return;
    }

    setError(null);
    setSuccess(true);
  }, [resume]);

  const handleUpload = (e) => {
    e.preventDefault();

    const reader = new FileReader();

    reader.onload = () => {
      const base64 = window.btoa(
        new Uint8Array(reader.result).reduce((p, c) => {
          return p + String.fromCharCode(c);
        }, "")
      );

      dispatch(uploadResume({ file: base64, fetch: true }));

      handleCancel();
    };

    reader.readAsArrayBuffer(resume);
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
    dispatch(
      rootSlice.handleModal({
        type: "delete",
        text: "ファイル",
        delete: () => {
          dispatch(userSlice.deleteResume());
        },
      })
    );
  };

  return (
    <form onSubmit={handleUpload} className={root.profile_container}>
      <File user={user} resume={resume} handleDelete={handleDelete} />

      <Upload
        user={user}
        input={input}
        success={success}
        error={error}
        handleChange={handleChange}
        handleCancel={handleCancel}
      />
    </form>
  );
};
