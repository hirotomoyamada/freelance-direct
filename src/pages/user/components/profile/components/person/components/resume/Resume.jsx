import root from "../../Person.module.scss";

import { useEffect, useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { uploadResume } from "../../../../../../../../features/user/actions/uploadResume";
import * as userSlice from "../../../../../../../../features/user/userSlice";
import * as rootSlice from "../../../../../../../../features/root/rootSlice";

import { File } from "./components/File";
import { Upload } from "./components/Upload";

export const Resume = ({ user }) => {
  const dispatch = useDispatch();

  const input = useRef();
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!file) {
      setError(null);
      setSuccess(false);

      return;
    }

    if (file?.type !== "application/pdf") {
      setError("pdf のみアップロードできます");
      setSuccess(false);

      return;
    }

    if (file?.size > 0.4 * 1024 * 1024) {
      setError("400KB までアップロードできます");
      setSuccess(false);

      return;
    }

    setError(null);
    setSuccess(true);
  }, [file]);

  const handleUpload = (e) => {
    e.preventDefault();

    const reader = new FileReader();

    reader.onload = () => {
      const base64 = window.btoa(
        new Uint8Array(reader.result).reduce((p, c) => {
          return p + String.fromCharCode(c);
        }, "")
      );

      dispatch(uploadResume({ type: file.type, file: base64, fetch: true }));

      handleCancel();
    };

    reader.readAsArrayBuffer(file);
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCancel = () => {
    input.current.value = null;
    setFile(null);
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
      <File user={user} file={file} handleDelete={handleDelete} />

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
