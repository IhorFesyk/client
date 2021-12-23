import { IOverviewOptionProps } from "../types";

export const OverviewOption: React.FC<IOverviewOptionProps> = ({
  label,
  data,
  isIncome,
}) => {
  return (
    <div className="flex items-end mt-2 justify-between">
      <p className="text-xs">{label}</p>
      <p
        className={`text-sm ml-1 ${
          isIncome ? "text-green-500" : "text-red-500"
        }`}
      >
        {isIncome ? "+" + data : data}
      </p>
    </div>
  );
};
