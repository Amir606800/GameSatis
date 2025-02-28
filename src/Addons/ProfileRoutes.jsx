import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./Wrapper";
import Profile from "../Pages/Profile";
import Informations from "../Pages_Dashboard/Informations";
import Siparisler from "../Pages_Dashboard/Siparisler";
import AddElan from "../Pages_Dashboard/AddElan";
import ListElan from "../Pages_Dashboard/ListElan";

const ProfileRoutes = () => {
  return (
    <React.Fragment>
      <Route
        path="/profilim"
        element={
          <Wrapper>
            <Profile section={<Informations />} />
          </Wrapper>
        }
      >
        {" "}
      </Route>
      <Route
        path="/siparislerim"
        element={
          <Wrapper>
            <Profile section={<Siparisler />} />
          </Wrapper>
        }
      ></Route>
      <Route
        path="/ilan_ekle"
        element={
          <Wrapper>
            <Profile section={<AddElan />} />
          </Wrapper>
        }
      ></Route>
      <Route
        path="/ilanlarim"
        element={
          <Wrapper>
            <Profile section={<ListElan />} />
          </Wrapper>
        }
      ></Route>

    </React.Fragment>
  );
};

export default ProfileRoutes;
