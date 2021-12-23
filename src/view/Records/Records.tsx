import { Record } from "./Record";
import { useQuery } from "@apollo/client";
import { getWalletIdByLocation, GET_WALLET_RECORDS } from "utils";

export const Records: React.FC = () => {
  const walletId = getWalletIdByLocation();

  const { data, loading } = useQuery(GET_WALLET_RECORDS, {
    variables: { walletId },
  });

  const records = data ? data.getWallet.records : [];
  const reversedRecords = [].concat(records).reverse();

  if (loading) {
    return (
      <div className="flex h-full justify-center items-center">
        <div
          className="spinner-border border-gray-300 animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <div className="w-2 h-2 -ml-1 rounded-full bg-gray-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-150 flex flex-col h-min px-8 py-6 bg-gray-100">
      <div className="flex max-h-full flex-col rounded-lg shadow">
        <div className="flex bg-gray-100 text-xs text-gray-500 font-semibold px-6 py-2 rounded-t-lg border-b">
          <p className="w-2/6">NAME CATEGORY</p>
          <p className="w-1/6">AMOUNT</p>
          <p className="w-3/6">SHORT DESCRIPTION</p>
          <p className="w-1/6">DATE</p>
          <p className="w-1/6 text-right">OPTIONS</p>
        </div>

        <div className="w-full overflow-auto">
          {reversedRecords?.map((record: any, id) => {
            return (
              <Record
                key={record._id}
                _id={record._id}
                category={record.category}
                amount={record.amount}
                description={record.description}
                createdAt={record.createdAt}
                type={record.type}
                updatedAt={record.updatedAt}
                isLast={id === records.length - 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
