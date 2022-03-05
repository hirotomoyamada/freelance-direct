import { useState, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

import { Data } from "pages/auth/Auth";

export const useVerifiedFile = (
  methods: UseFormReturn<Data>
): [file: File, error: string | null] => {
  const file = methods.watch("file")?.[0];
  const [error, setError] = useState<string | null>(null);

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
