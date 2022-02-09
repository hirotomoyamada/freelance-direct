import { useLocation } from "react-router";

export const useOption = () => {
  const location = useLocation();

  return [location.pathname.endsWith("option")];
};
