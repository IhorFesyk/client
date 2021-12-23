import { normalizerAmount, IRecord } from "utils";
import { ILastRecordsListProps } from "../types";
import { LastRecordsListItem } from "./LastRecordsListItem";

export const LastRecordsList: React.FC<ILastRecordsListProps> = ({
  records,
}) => {
  return (
    <>
      {records?.map((record: IRecord, id: number) => {
        return (
          <LastRecordsListItem
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
