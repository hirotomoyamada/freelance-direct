import { useLocation } from "react-router";

export const useOption = (): [boolean] => {
  const location = useLocation();

  return [location.pathname.endsWith("option")];
};
