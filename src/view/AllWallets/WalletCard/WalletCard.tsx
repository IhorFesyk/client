import { useMutation } from "@apollo/client";
import { IconTrash } from "assets";
import { Button } from "components/shared";
import { Link } from "react-router-dom";
import { normalizerAmount } from "utils";
import { DELETE_WALLET } from "utils/queries";
import { IWalletCardProps } from "../types";
import { ListRecords } from "./ListRecords";

export const WalletCard: React.FC<IWalletCardProps> = ({
  wallet: { amount, title, _id, records },
}) => {
  const numberOfLastElements = 5;
  const lastRecords = records.slice(-numberOfLastElements);
  const sortedLastRecords = lastRecords?.reverse();

  const [deleteWallet] = useMutation(DELETE_WALLET, {
    variables: { walletId: _id },
  });

  const handleDeleteWallet = () => {
    deleteWallet();
  };

  return (
    <div className="w-1/4 h-112 mr-6 mt-6 flex flex-col justify-between bg-white rounded-md shadow pb-4">
      <div>
        <div>
          <div className="flex bg-gray-50 rounded-t-md border-b border-gray-200 px-4 py-3 items-center justify-between">
            <p className="font-medium text-xl text-gray-700">{title}</p>
            <IconTrash
              onClick={handleDeleteWallet}
              className="w-4 h-4 cursor-pointer text-gray-400 transition hover:text-gray-600"
            />
          </div>

          <div className="flex px-4 mt-2 items-end">
            <p className="text-xs font-medium text-gray-700">Amount:</p>
            <p className="ml-1 font-medium text-eastBay">
              {normalizerAmount(amount ? amount : 0)}
            </p>
          </div>
        </div>

        <div className="mt-6 px-4">
          <ListRecords records={sortedLastRecords} />
        </div>
      </div>

      <Link to={`/${_id}/dashboard`} className="px-4 mt-6">
        <Button text="Overview" indentation="py-2" />
      </Link>
    </div>
  );
};
