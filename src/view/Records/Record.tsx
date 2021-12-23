import { useMutation } from "@apollo/client";
import { IconCategoryOther } from "assets";
import moment from "moment";
import {
  DELETE_RECORD,
  getWalletIdByLocation,
  IPropsIcon,
  IRecord,
  CATEGORIES,
} from "utils";

export const Record: React.FC<IRecord> = ({
  _id,
  category,
  amount,
  description,
  createdAt,
  isLast,
}) => {
  let Component: React.FC<IPropsIcon> = IconCategoryOther;
  let categoryItem = { title: "Other" };

  CATEGORIES.forEach((item: any) => {
    if (item._id === category) {
      Component = item.icon;
      categoryItem = item;
    }
  });

  const [deleteRecordMutation] = useMutation(DELETE_RECORD);
  const walletId = getWalletIdByLocation();

  const deleteRecord = () => {
    deleteRecordMutation({
      variables: {
        walletId: walletId,
        recordId: _id,
      },
    });
  };

  return (
    <div
      className={`w-full flex bg-gray-50 px-6 py-2 border-b ${
        isLast && "rounded-b-lg"
      }`}
    >
      <div className="flex items-center w-2/6">
        <div className="rounded-md bg-gray-100 border border-gray-200 p-2">
          <Component className="w-5 h-5 text-gray-500" />
        </div>

        <p className="text-sm font-medium text-gray-700 ml-2">
          {categoryItem.title}
        </p>
      </div>

      <p
        className={`w-1/6 flex items-center text-sm ${
          amount < 0 ? "text-red-500" : "text-green-500"
        } `}
      >
        {amount < 0 ? `-$${-amount}` : `+$${amount}`}
      </p>
      <p className="w-3/6 flex items-center text-gray-700 text-sm">
        {description}
      </p>
      <p className="w-1/6 flex items-center text-xs text-gray-500">
        {moment(createdAt).format("LL")}
      </p>
      <button
        onClick={deleteRecord}
        className="w-1/6 flex items-center justify-end text-sm text-red-300 hover:text-red-500 transition"
      >
        Delete
      </button>
    </div>
  );
};
