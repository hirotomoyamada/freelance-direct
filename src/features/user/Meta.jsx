import { Helmet } from "react-helmet-async";

export const Meta = ({ user }) => {
  return (
    <Helmet>
      <title>
        {user?.profile?.person
          ? `${user?.profile?.person} - ${user?.profile?.name}｜Freelance Direct`
          : user?.profile?.name
          ? `${user?.profile?.name}｜Freelance Direct`
          : "Freelance Direct"}
      </title>
    </Helmet>
  );
};
