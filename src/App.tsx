import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { useApp } from "hooks/useApp";

import { Meta } from "Meta";
import * as load from "components/load/Load";

import { Announce } from "components/announce/Announce";
import { Modal } from "components/modal/Modal";
import { Menu } from "components/menu/Menu";
import { Overlay } from "components/overlay/Overlay";

import { Auth } from "pages/auth/Auth";
import { Home } from "pages/home/Home";
import { Search } from "pages/search/Search";
import { List } from "pages/list/List";
import { Post } from "pages/post/Post";
import { User } from "pages/user/User";

import { Setting } from "pages/setting/Setting";
import { HowTo } from "pages/howTo/HowTo";

import { Terms } from "pages/terms/Terms";

import { NotFound } from "pages/notFound/NotFound";
import { Maintenance } from "pages/maintenance/Maintenance";
import { NotSupported } from "pages/notSupported/NotSupported";

import { Promotion } from "pages/promotion/Promotion";
import { Contact } from "pages/contact/Contact";

export const App: React.FC = () => {
  const [user, access, support, control] = useApp();

  switch (support) {
    case true:
      return (
        <HelmetProvider>
          <BrowserRouter>
            <Meta />

            <load.Root />
            <load.Pending />
            <Announce />
            <NotFound />
            <Maintenance />
            <Modal />

            {(() => {
              switch (true) {
                case !user?.uid:
                  return (
                    <Routes>
                      <Route index element={<Promotion />} />
                      <Route path="/option" element={<Promotion />} />
                      <Route path="/login" element={<Auth />} />
                      <Route path="/signup" element={<Auth />} />

                      <Route path="/contact" element={<Contact />} />
                      <Route path="/terms" element={<Terms />} />

                      {!access ? (
                        <Route
                          path="*"
                          element={<Navigate to="/login" replace />}
                        />
                      ) : (
                        <Route path="*" element={<></>} />
                      )}
                    </Routes>
                  );

                default:
                  return (
                    <div className="main">
                      <Menu user={user} />

                      <Routes>
                        <Route
                          path="/login"
                          element={<Navigate to="/" replace />}
                        />
                        <Route
                          path="/signup"
                          element={<Navigate to="/" replace />}
                        />
                        <Route
                          path="/option"
                          element={<Navigate to="/" replace />}
                        />

                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/home/:index" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/search/:index" element={<Search />} />
                        <Route path="/setting" element={<Setting />} />

                        <Route path="/terms" element={<Terms />} />
                        <Route path="/howto" element={<HowTo />} />

                        <Route path="/user/:uid" element={<User />} />
                        <Route path="/post/:objectID" element={<Post />} />

                        <Route path="/:list" element={<List />} />

                        <Route path="*" element={<NotFound />} />
                      </Routes>

                      {control && <Overlay />}
                    </div>
                  );
              }
            })()}
          </BrowserRouter>
        </HelmetProvider>
      );

    default:
      return <NotSupported />;
  }
};
