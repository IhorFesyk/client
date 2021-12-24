import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PageHeader } from "components/shared";
import { Sidebar } from "components/Sidebar";
import { AllWallets, Records, Dashboard, SignIn, SignUp } from "view";
import { GET_ME } from "utils";
import { useQuery } from "@apollo/client";

export const AppRouter: React.FC = () => {
  const { data, error } = useQuery(GET_ME);

  console.log(data);

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

  let isAuth = false;

  if (data) {
    isAuth = true;
  } else if (error) {
    isAuth = false;
  }

  return isAuth ? PrivateRoutes : PublicRoutes;
};
