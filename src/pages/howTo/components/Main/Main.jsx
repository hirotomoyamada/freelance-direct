import { Home } from "./Home";
import { Search } from "./Search";
import { Likes } from "./Likes";
import { Entries } from "./Entries";
import { Requests } from "./Requests";
import { History } from "./History";
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
    case "history":
      return <History />;
    case "profile":
      return <Profile />;
  }
};
