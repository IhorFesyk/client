import { IconCategoryOther } from "assets";
import { IPropsIcon, CATEGORIES } from "utils";
import { IListRecordsItemProps } from "../types";

export const ListRecordsItem: React.FC<IListRecordsItemProps> = ({
  category,
  amount,
  type,
  isLastItem,
}) => {
  let Component: React.FC<IPropsIcon> = IconCategoryOther;
  let categoryItem = { title: "Other" };

  CATEGORIES.forEach((item) => {
    if (item._id === category) {
      Component = item.icon;
      categoryItem = item;
    }
  });

  return (
    <div
      className={`w-full flex items-center justify-between ${
        !isLastItem && "border-b"
      }  pb-2 mb-2`}
    >
      <div className="flex items-center">
        <div className="rounded-md border border-gray-300 p-1">
          <Component className="w-6 h-6 text-gray-700" />
        </div>
        <p className="ml-3 font-medium text-sm text-gray-700">
          {categoryItem.title}
        </p>
      </div>

      <p
        className={`font-medium text-sm ${
          type === "income" ? "text-green-400" : "text-red-400"
        } `}
      >
        {type === "income" ? "+" + amount : amount}
      </p>
    </div>
  );
};
