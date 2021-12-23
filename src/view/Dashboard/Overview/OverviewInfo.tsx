import { IOverviewInfoProps } from "../types";
import { OverviewOption } from "./OverviewOption";

export const OverviewInfo: React.FC<IOverviewInfoProps> = ({
  amount,
  changesMonth,
  spendingMonth,
  incomeMonth,
  changesMonthNumber,
}) => {
  return (
    <div className="py-2 px-4">
      <div className="flex items-end justify-between border-b pb-2">
        <p className="text-sm font-medium">Amount:</p>
        <p className="font-medium text-eastBay">{amount}</p>
      </div>

      <OverviewOption
        label="Changes current month:"
        data={changesMonth}
        isIncome={changesMonthNumber > 0}
      />

      <OverviewOption
        label="Spending current month:"
        data={spendingMonth}
        isIncome={false}
      />

      <OverviewOption
        label="Income current month:"
        data={incomeMonth}
        isIncome={true}
      />
    </div>
  );
};
