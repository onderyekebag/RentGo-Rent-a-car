import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import AboutPage from "../pages/user/AboutPage";
import ContactPage from "../pages/user/ContactPage";
import PravicyPolicyPage from "../pages/user/PravicyPolicyPage";
import AuthPage from "../pages/common/AuthPage";
import VehiclesPage from "../pages/user/VehiclesPage";
import VehicleDetailsPage from "../pages/user/VehicleDetailsPage";
import ProfilePage from "../pages/user/ProfilePage";
import ReservationsPage from "../pages/user/ReservationsPage";
import ReservationDetails from "../pages/user/ReservationDetails";
import NotFoundPage from "../pages/common/NotFound";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="privacy-policy" element={<PravicyPolicyPage />} />

          <Route path="vehicles">
            <Route index element={<VehiclesPage />} />
            <Route path=":vehicleId" element={<VehicleDetailsPage />} />
          </Route>

          <Route path="user">
            <Route index element={<ProfilePage />} />
            <Route path="reservations">
              <Route index element={<ReservationsPage />} />
              <Route path=":reservationId" element={<ReservationDetails />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
