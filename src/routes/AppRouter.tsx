import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PageHeader } from "components/shared";
import { Sidebar } from "components/Sidebar";
import { AllWallets, Records, Dashboard, SignIn, SignUp } from "view";
import { checkAuth } from "utils";

export const AppRouter: React.FC = () => {
  const isAuth = checkAuth();

  const PrivateRoutes = (
    <div className="w-screen h-screen flex">
      <Sidebar />

      <div className="w-5/6 h-full flex flex-col">
        <PageHeader />

        <Routes>
          <Route path="/:id/dashboard" element={<Dashboard />} />
          <Route path="/:id/records" element={<Records />} />
          <Route path="/all-wallets" element={<AllWallets />} />
          <Route path="/*" element={<Navigate to="/all-wallets" />} />
        </Routes>
      </div>
    </div>
  );

  const PublicRoutes = (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/signin" />} />
    </Routes>
  );

  return isAuth ? PrivateRoutes : PublicRoutes;
};
