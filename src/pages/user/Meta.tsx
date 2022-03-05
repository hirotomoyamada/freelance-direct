import React from "react";
import { Helmet } from "react-helmet-async";

import { Company } from "types/post";
import { User } from "types/user";

interface PropType {
  user: User | Company;
}

export const Meta: React.FC<PropType> = ({ user }) => {
  return (
    <Helmet>
      <title>
        {(user as Company)?.profile?.person
          ? `${(user as Company)?.profile?.person} - ${
              user?.profile?.name
            }｜Freelance Direct`
          : user?.profile?.name
          ? `${user?.profile?.name}｜Freelance Direct`
          : "Freelance Direct｜営業支援App"}
      </title>
    </Helmet>
  );
};
