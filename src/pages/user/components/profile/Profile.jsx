import { useSelector } from "react-redux";
import * as rootSlice from "../../../../features/root/rootSlice";

import { Company } from "./components/company/Company";
import { Person } from "./components/person/Person";

export const Profile = ({ currentUser, user }) => {
  const demo = useSelector(rootSlice.verified).demo;

  return currentUser?.uid !== user?.uid ? (
    <Company user={user} demo={demo} />
  ) : (
    <Person user={user} />
  );
};
