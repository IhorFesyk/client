import { useQuery } from "@apollo/client";
import React from "react";
import { getWalletIdByLocation, GET_ALL_WALLET_DATA, IWallet } from "utils";
import { Chart } from "./Chart";
import { LastRecords } from "./LastRecords";
import { Overview } from "./Overview";

export const Dashboard: React.FC = () => {
  const walletId = getWalletIdByLocation();
  const { data } = useQuery(GET_ALL_WALLET_DATA, {
    variables: {
      walletId,
    },
  });

  const walletData: IWallet = data ? data.getWallet : null;

  return (
    <div className="w-full h-full flex p-6 bg-gray-100 box-border">
      <div className="w-1/4 box-border">
        <Overview walletData={walletData} />
        <div className="pt-7 box-border h-2/3">
          <LastRecords walletData={walletData} />
        </div>
      </div>

      <div className="ml-7 w-3/4">
        <Chart walletData={walletData} />
      </div>
    </div>
  );
};
