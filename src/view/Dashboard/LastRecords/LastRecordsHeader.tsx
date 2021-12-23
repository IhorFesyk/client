import { IconPlus } from "assets";
import { HeaderSection } from "components/shared";
import { ILastRecordsHeaderProps } from "../types";

export const LastRecordsHeader: React.FC<ILastRecordsHeaderProps> = ({
  setIsModalOpen,
}) => {
  return (
    <HeaderSection title="Last Records">
      <>
        <IconPlus
          onClick={() => setIsModalOpen(true)}
          className="h-4 w-4 text-gray-300 hover:text-gray-700 cursor-pointer transition"
        />
      </>
    </HeaderSection>
  );
};
