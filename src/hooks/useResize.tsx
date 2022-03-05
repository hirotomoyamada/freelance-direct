import { useEffect, useState, useRef } from "react";

export const useResize = (
  verified: unknown
): [
  resize: boolean,
  form: React.RefObject<HTMLFormElement>,
  inner: React.RefObject<HTMLDivElement>
] => {
  const form = useRef<HTMLFormElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  const [resize, setResize] = useState(false);

  useEffect(() => {
    const resizeObserver = () => {
      if (inner?.current) {
        const innerHeight = inner.current.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;

        innerHeight > windowHeight ? setResize(true) : setResize(false);
      }
    };

    const observer = new ResizeObserver(() => {
      resizeObserver();
    });

    const ref = inner?.current;

    window.addEventListener("resize", () => {
      resizeObserver();
    });
    ref && observer?.observe(ref);

    return () => {
      window.removeEventListener("resize", resizeObserver);
      ref && observer.disconnect();
    };
  }, [inner, resize, verified]);

  return [resize, form, inner];
};
