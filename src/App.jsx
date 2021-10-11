import { useEffect, useState } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { auth } from "./firebase";

import { login } from "./features/user/functions/login";
import * as userSlice from "./features/user/userSlice";
import * as postSlice from "./features/post/postSlice";

import { Meta } from "./Meta";

import { Load } from "./components/load/Load";
import { Announce } from "./components/announce/Announce";
import { Agree } from "./components/agree/Agree";
import { Maintenance } from "./components/maintenance/Maintenance";
import { NotFound } from "./components/notFound/NotFound";
import { Demo } from "./components/demo/Demo";

import { Promotion } from "./promotion/Promotion";
import { Contact } from "./promotion/pages/contact/Contact";
import { Terms } from "./promotion/pages/terms/Terms";
import { Auth } from "./features/user/auth/Auth";

import { Home } from "./Home";
import { Search } from "./Search";
import { Post } from "./features/post/Post";
import { User } from "./features/user/User";
import { List } from "./features/user/list/List";
import { Setting } from "./features/user/setting/Setting";

import { Menu } from "./components/menu/Menu";

export const App = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSlice.user);
  const menu = useSelector(userSlice.menu);
  const access = useSelector(userSlice.verified).access;
  const notFound = {
    user: useSelector(userSlice.notFound),
    post: useSelector(postSlice.notFound),
  };

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

    !control && dispatch(userSlice.handleMenu("reset"));

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

        {notFound.user || notFound.post ? (
          <NotFound />
        ) : browser ? (
          <>
            <Maintenance />
            <Announce />
            <Agree />
            <Demo />
            <Load />

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
                    onClick={() => dispatch(userSlice.handleMenu("close"))}
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
