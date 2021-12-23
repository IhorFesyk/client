import { useQuery } from "@apollo/client";
import { Loader } from "components/shared";
import { useState } from "react";
import { GET_ALL_WALLETS_DATA } from "utils";
import { NewWalletModal } from "./NewWalletModal";
import { WalletCard } from "./WalletCard";

export const AllWallets: React.FC = () => {
  const { loading, data } = useQuery(GET_ALL_WALLETS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-100 h-full flex flex-col px-12 overflow-scroll">
      <div className="w-full py-6">
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="bg-crayolaBlue px-2 py-1 text-white font-semibold text-sm rounded-md transition hover:bg-blue-600"
        >
          + New
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : data?.getWallets.length === 0 ? (
        <div className="bg-gray-100 h-full w-full items-center justify-center flex flex-col px-12 overflow-scroll">
          <p className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 text-sm font-medium">
            There is no existed wallets
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap">
          {data?.getWallets.map((wallet: any) => (
            <WalletCard
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              wallet={wallet}
              key={wallet._id}
            />
          ))}
        </div>
      )}

      <NewWalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
