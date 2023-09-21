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
import NotFoundPage from "../pages/common/NotFound";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import ReservationDetailsPage from "../pages/user/ReservationDetails";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import UnAuthorized from "../pages/common/UnAuthorized";
import AdminContactMessagePage from "../pages/admin/AdminContactMessagePage";
import AdminContactMessageEditPage from "../pages/admin/AdminContactMessageEditPage";
import AdminUsersPage from "../pages/admin/AdminUsersPage";
import AdminUsersEditPage from "../pages/admin/AdminUsersEditPage";
import AdminReservationsPage from "../pages/admin/AdminReservationsPage";
import AdminReservationsEditPage from "../pages/admin/AdminReservationsEditPage";
import AdminVehiclesPage from "../pages/admin/AdminVehiclesPage";
import AdminVehiclesEditPage from "../pages/admin/AdminVehiclesEditPage";
import AdminVehiclesNewPage from "../pages/admin/AdminVehiclesNewPage";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="auth">
            <Route index element={<AuthPage />} />
            <Route path="register" element={<AuthPage />} />
          </Route>
          <Route path="privacy-policy" element={<PravicyPolicyPage />} />
          <Route path="unauthorized" element={<UnAuthorized />} />

          <Route path="vehicles">
            <Route index element={<VehiclesPage />} />
            <Route path=":vehicleId" element={<VehicleDetailsPage />} />
          </Route>

          <Route path="user">
            <Route
              index
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="reservations">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <ReservationsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":reservationId"
                element={
                  <ProtectedRoute>
                    <ReservationDetailsPage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>

          <Route path="admin">
            <Route
              index
              element={
                <ProtectedRoute admin={true}>
                  <AdminDashboardPage />
                </ProtectedRoute>
              }
            />

            <Route path="contact-message">
              <Route
                index
                element={
                  <ProtectedRoute admin={true}>
                    <AdminContactMessagePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":messageId"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminContactMessageEditPage />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute admin={true}>
                    <AdminUsersPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminUsersEditPage />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="reservations">
              <Route
                index
                element={
                  <ProtectedRoute admin={true}>
                    <AdminReservationsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":reservationId"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminReservationsEditPage />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="vehicles">
              <Route
                index
                element={
                  <ProtectedRoute admin={true}>
                    <AdminVehiclesPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":vehicleId"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminVehiclesEditPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminVehiclesNewPage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
