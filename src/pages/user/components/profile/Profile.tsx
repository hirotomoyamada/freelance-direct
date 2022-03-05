import React from "react";
import { useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

import { Company } from "./components/company/Company";
import { Person } from "./components/person/Person";

import { Company as SelectUser } from "types/post";
import { User } from "types/user";

interface PropType {
  currentUser: User;
  user: SelectUser;
}

export const Profile: React.FC<PropType> = ({ currentUser, user }) => {
  const demo = useSelector(rootSlice.verified).demo;

  return currentUser?.uid !== user?.uid ? (
    <Company user={user} demo={demo} />
  ) : (
    <Person user={currentUser} />
  );
};
