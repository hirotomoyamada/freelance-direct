import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { useApp } from "./hook/useApp";

import { Meta } from "./Meta";
import * as load from "./components/load/Load";

import { Announce } from "./components/announce/Announce";
import { Modal } from "./components/modal/Modal";
import { Menu } from "./components/menu/Menu";
import { Overlay } from "./components/overlay/Overlay";

import { Auth } from "./pages/auth/Auth";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { List } from "./pages/list/List";
import { Post } from "./pages/post/Post";
import { User } from "./pages/user/User";

import { Setting } from "./pages/setting/Setting";
import { HowTo } from "./pages/howTo/HowTo";

import { Terms } from "./pages/terms/Terms";

import { NotFound } from "./pages/notFound/NotFound";
import { Maintenance } from "./pages/maintenance/Maintenance";

import { Promotion } from "./pages/promotion/Promotion";
import { Contact } from "./pages/contact/Contact";

export const App = () => {
  const [user, access, browser, control] = useApp();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Meta />

        {browser ? (
          <>
            <load.Root />
            <load.Fetch />

            <Announce />

            <NotFound />
            <Maintenance />

            <Modal />

            {!user.uid ? (
              <Switch>
                <Route exact path={["/", "/option"]} component={Promotion} />
                <Route exact path="/login" component={Auth} />
                <Route exact path="/signup" component={Auth} />

                <Route exact path="/contact" component={Contact} />
                <Route exact path="/terms" component={Terms} />

                {!access && (
                  <>
                    <Redirect path="/home" to="/login" />
                    <Redirect path="/search" to="/login" />
                    <Redirect path="/post" to="/login" />
                    <Redirect path="/user" to="/login" />
                    <Redirect path="/setting" to="/login" />
                    <Route component={NotFound} />
                  </>
                )}
              </Switch>
            ) : (
              <div className="main">
                <Menu user={user} />

                <Switch>
                  <Redirect exact path="/login" to="/" />
                  <Redirect exact path="/signup" to="/" />
                  <Redirect exact path="/option" to="/" />

                  <Route exact path={["/", "/home"]} component={Home} />

                  <Route exact path="/home" component={Home} />
                  <Route exact path="/search" component={Search} />
                  <Route exact path="/setting" component={Setting} />

                  <Route exact path="/howto" component={HowTo} />
                  <Route exact path="/terms" component={Terms} />

                  <Route exact path="/:list" component={List} />

                  <Route exact path="/post/:objectID" component={Post} />
                  <Route exact path="/user/:uid" component={User} />

                  <Route component={NotFound} />
                </Switch>

                {control && <Overlay />}
              </div>
            )}
          </>
        ) : (
          <div className="disable">
            <p>このアプリは Internet Explorer に対応しておりません</p>
          </div>
        )}
      </BrowserRouter>
    </HelmetProvider>
  );
};
