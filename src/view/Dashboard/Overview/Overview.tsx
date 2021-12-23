import {
  normalizerAmount,
  reducerIncomeRecords,
  reducerSpendingRecords,
  IRecord,
} from "utils";
import { IOverviewProps } from "../types";
import { HeaderSection } from "components/shared";
import { OverviewInfo } from "./OverviewInfo";

export const Overview: React.FC<IOverviewProps> = ({ walletData }) => {
  const amountRecords = walletData
    ? walletData.monthRecords.map((record: IRecord) => record.amount)
    : [];

  // Calculate spending amount
  const spendingLastMonth =
    amountRecords.length > 0
      ? amountRecords.reduce(reducerSpendingRecords, 0)
      : 0;

  // Calculate income amount
  const incomeLastMonth =
    amountRecords.length > 0
      ? amountRecords.reduce(reducerIncomeRecords, 0)
      : 0;

  // Calculate changes amount
  const changesLastMonth = incomeLastMonth + spendingLastMonth;

  const normalizedSpendingMonth = normalizerAmount(spendingLastMonth);
  const normalizedIncomeMonth = normalizerAmount(incomeLastMonth);
  const normalizedChangesMonth = normalizerAmount(changesLastMonth);
  const normalizedAmount = normalizerAmount(walletData ? walletData.amount : 0);

  // New record modal

  return (
    <div className="w-full h-1/3 bg-white shadow rounded-md text-gray-700 box-border">
      <HeaderSection title="Overview" />

      <OverviewInfo
        amount={normalizedAmount}
        changesMonth={normalizedChangesMonth}
        incomeMonth={normalizedIncomeMonth}
        spendingMonth={normalizedSpendingMonth}
        changesMonthNumber={changesLastMonth}
      />
    </div>
  );
};
