import { normalizerAmount } from "utils";
import { ListRecordsItem } from "./ListRecordsItem";
import { IListRecordsProps } from "../types";

export const ListRecords: React.FC<IListRecordsProps> = ({ records }) => {
  return (
    <>
      {records?.map((record, id) => {
        return (
          <ListRecordsItem
            category={record.category}
            amount={normalizerAmount(record.amount)}
            type={record.type}
            isLastItem={id === records.length - 1}
            key={record._id}
          />
        );
      })}
    </>
  );
};
