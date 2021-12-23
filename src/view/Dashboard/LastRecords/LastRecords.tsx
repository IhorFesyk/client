import { useState } from "react";
import { NewRecordModal } from "./NewRecordModal";
import { ILastRecordsProps } from "../types";
import { LastRecordsHeader } from "./LastRecordsHeader";
import { LastRecordsList } from "./LastRecordsList";

export const LastRecords: React.FC<ILastRecordsProps> = ({ walletData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const numberOfLastElements = 6;
  const lastRecords = walletData?.records.slice(-numberOfLastElements);
  const sortedLastRecords = lastRecords?.reverse();

  return (
    <div className="w-full h-full bg-white rounded-md text-gray-700 shadow box-border">
      <LastRecordsHeader setIsModalOpen={setIsModalOpen} />

      <div className="px-4 py-2 overflow-hidden">
        <LastRecordsList records={sortedLastRecords} />
      </div>

      <NewRecordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        walletId={walletData?._id}
      />
    </div>
  );
};
