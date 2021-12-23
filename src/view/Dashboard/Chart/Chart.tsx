import { HeaderSection } from "components/shared";
import moment from "moment";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  BarChart,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

import { normalizerAmount, reducerSum } from "utils";
import { IChartProps } from "../types";
import { data } from "../const";

export const Chart: React.FC<IChartProps> = ({ walletData }) => {
  const normalizedDataForChart = data.map((chartItem, id) => {
    const check = moment();

    const currentDay = id + 1;
    const currentDateRecords: any = [];

    const currentMonth = check.format("M");
    const currentDate = moment(`${currentMonth}-${currentDay}`).format(
      "MMM Do"
    );

    walletData?.monthRecords.forEach((record) => {
      if (
        moment(record.createdAt)
          .format("L")
          .split("/")
          .map((str) => +str)[1] === currentDay
      )
        currentDateRecords.push(record);
    });

    const currentDateRecordsAmount = currentDateRecords.map(
      (record: { amount: any }) => record.amount
    );

    const currentDateAmount =
      currentDateRecordsAmount.length > 0
        ? currentDateRecordsAmount.reduce(reducerSum)
        : 0;

    return {
      name: currentDate,
      changes: currentDateAmount,
      changesNormalized: normalizerAmount(currentDateAmount),
    };
  });

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-md text-gray-700 shadow-md box-border">
      <HeaderSection title="Spending" />

      <ResponsiveContainer height={520}>
        <BarChart
          data={normalizedDataForChart}
          margin={{ top: 20, right: 30, bottom: 10, left: 0 }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" fontSize={12} />
          <YAxis fontSize={12} />

          <Tooltip />
          <Bar barSize={300} fill="#8884d8" type="monotone" dataKey="changes" />
          <ReferenceLine y={0} stroke="#000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
