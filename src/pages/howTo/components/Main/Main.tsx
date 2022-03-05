import React from "react";

import { Home } from "./Home";
import { Search } from "./Search";
import { Likes } from "./Likes";
import { Entries } from "./Entries";
import { Requests } from "./Requests";
import { Histories } from "./Histories";
import { Profile } from "./Profile";

interface PropType {
  page: string;
}

export const Main: React.FC<PropType> = ({ page }) => {
  switch (page) {
    default:
      return <Home />;
    case "search":
      return <Search />;
    case "notice":
      return <Search />;
    case "likes":
      return <Likes />;
    case "entries":
      return <Entries />;
    case "requests":
      return <Requests />;
    case "histories":
      return <Histories />;
    case "profile":
      return <Profile />;
  }
};
