import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import AboutMePage from "./components/AboutMePage/AboutMePage";
import { MainPageContainer } from "./components/MainPage/MainPage";
import NavPage from "./components/NavPage/NavPage";
import { ProfilePageContainer } from "./components/ProfilePage/ProfilePage";
import { store } from "./redux/redux-store";

const App = ({ setPosts }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.wrapperApp}>
      <header className={styles.header}>
        <div className={openMenu ? styles.menuBtnOpen : styles.menuBtnClosed} onClick={() => setOpenMenu(!openMenu)}>
          Menu
        </div>
        <NavPage openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </header>
      <div
        className={styles.wrapperElements}
        onClick={() => setOpenMenu(false)}
      >
        <Routes>
          <Route path="/main" element={<MainPageContainer />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/profile" element={<ProfilePageContainer openMenu={openMenu} />}>
            <Route path=":userId" element={<ProfilePageContainer />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

const AppMain = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default AppMain;
