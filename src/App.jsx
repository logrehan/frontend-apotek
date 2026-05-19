import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

import api from "./services/api";

import MainLayout from "./layouts/MainLayout";

import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SetupPage from "./pages/SetupPage";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [loading, setLoading] =
    useState(true);

  const [isSetup, setIsSetup] =
    useState(false);

  const token =
    localStorage.getItem("token");

  useEffect(() => {
    fetchSetup();
  }, []);

  const fetchSetup = async () => {
    try {
      const response =
        await api.get("/setup/status");

      setIsSetup(
        response.data.isSetup
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* SETUP */}
        <Route
          path="/setup"
          element={
            isSetup
              ? <Navigate to="/login" />
              : <SetupPage />
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            token
              ? (
                <Navigate to="/dashboard" />
              )
              : (
                <LoginPage />
              )
          }
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* ROOT */}
        <Route
          path="/"
          element={
            token
              ? (
                <Navigate to="/dashboard" />
              )
              : isSetup
              ? (
                <Navigate to="/login" />
              )
              : (
                <Navigate to="/setup" />
              )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;