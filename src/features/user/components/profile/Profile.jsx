import { useSelector } from "react-redux";
import * as useSlice from "../../userSlice";

import { Company } from "./components/company/Company";
import { Person } from "./components/person/Person";

export const Profile = ({ currentUser, user }) => {
  const demo = useSelector(useSlice.verified).demo;

  return currentUser?.uid !== user?.uid ? (
    <Company user={user} demo={demo} />
  ) : (
    <Person user={user} demo={demo} />
  );
};
