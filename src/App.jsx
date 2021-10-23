import { useEffect, useState } from "react";

import { auth } from "./firebase";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "./features/user/actions/login";

import * as rootSlice from "./features/root/rootSlice";
import * as userSlice from "./features/user/userSlice";

import { Meta } from "./Meta";
import * as load from "./components/load/Load";
import { Announce } from "./components/announce/Announce";

import { Home } from "./Home";
import { Search } from "./Search";
import { Post } from "./features/post/Post";
import { User } from "./features/user/User";

import { Auth } from "./pages/auth/Auth";
import { List } from "./pages/list/List";
import { Setting } from "./pages/setting/Setting";
import { HowTo } from "./pages/howTo/HowTo";
import { Terms } from "./pages/terms/Terms";
import { NotFound } from "./pages/notFound/NotFound";
import { Maintenance } from "./pages/maintenance/Maintenance";

import { Promotion } from "./promotion/Promotion";
import { Contact } from "./promotion/pages/contact/Contact";

import { Modal } from "./components/modal/Modal";
import { Menu } from "./components/menu/Menu";

export const App = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSlice.user);
  const menu = useSelector(rootSlice.menu);
  const access = useSelector(rootSlice.verified).access;
  const notFound = useSelector(rootSlice.notFound);

  const [browser, setBrowser] = useState(true);
  const [control, setControl] = useState(
    window.innerWidth < 959 ? true : false
  );

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user));
      } else {
        auth.signOut();
        dispatch(userSlice.logout());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const agent = window.navigator.userAgent.toLowerCase();
    if (agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1) {
      setBrowser(false);
    }
  }, []);

  useEffect(() => {
    const resize = () => {
      window.innerWidth < 959 ? setControl(true) : setControl(false);
    };

    !control && dispatch(rootSlice.handleMenu("reset"));

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [control]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Meta />

        {notFound ? (
          <NotFound />
        ) : browser ? (
          <>
            <load.Root />
            <load.Fetch />
            
            <Announce />
            <Maintenance />
            <Modal />

            {!user.uid ? (
              <Switch>
                <Route exact path="/" component={Promotion} />
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

                {control && (
                  <div
                    className={`overlay ${
                      menu.display
                        ? "overlay_open"
                        : menu.control && "overlay_close"
                    }`}
                    onClick={() => dispatch(rootSlice.handleMenu("close"))}
                  ></div>
                )}
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
