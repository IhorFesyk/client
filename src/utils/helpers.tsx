/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@apollo/client";
import currency from "currency.js";
import { useLocation } from "react-router-dom";
import { SLUG_CONST } from "./const";
import { GET_ME } from "./queries";

export const checkAuth = () => {
  // get token from storage
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return false;

  // send query to server
  const { data, loading } = useQuery(GET_ME);

  // if get data - token is active, if not - token expired
  if (loading) {
    return <div>LOADING...</div>;
  } else if (data?.getMe._id) return true;
  else return false;
};

export const getWalletIdByLocation = () => {
  const location = useLocation();

  const temp = location.pathname.split("/");
  const walletId = temp[1];

  if (
    walletId !== SLUG_CONST.ALL_WALLETS.slice(1) &&
    walletId !== SLUG_CONST.ANALYTICS.slice(1) &&
    walletId !== SLUG_CONST.DASHBOARD.slice(1) &&
    walletId !== SLUG_CONST.RECORDS.slice(1)
  ) {
    return walletId;
  } else {
    return null;
  }
};

export const normalizerAmount = (amount: number) =>
  currency(amount, {
    precision: 0,
  }).format();

export const reducerSpendingRecords = (total: number, current: number) =>
  current < 0 ? total + current : total;

export const reducerIncomeRecords = (total: number, current: number) =>
  current > 0 ? total + current : total;

export const reducerSum = (total: number, current: number) => total + current;