import { Home } from "./Home";
import { Search } from "./Search";
import { Likes } from "./Likes";
import { Entries } from "./Entries";
import { Requests } from "./Requests";
import { Histories } from "./Histories";
import { Profile } from "./Profile";

export const Main = ({ page }) => {
  switch (page) {
    default:
      return <Home />;
    case "search":
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
