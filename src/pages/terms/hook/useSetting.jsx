import { useLocation } from "react-router";

export const useSetting = () => {
  const location = useLocation();

  return [!location.state?.setting];
};
