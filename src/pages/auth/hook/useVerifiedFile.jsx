import { useState, useEffect } from "react";

export const useVerifiedFile = (methods) => {
  const file = methods.watch("file")?.[0];
  const [error, setError] = useState(null);

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

  return [file, error];
};
