import { IFooterProps } from "../types";
import { Logout } from "./Logout";

export const Footer: React.FC<IFooterProps> = ({ icon }) => {
  return (
    <div className="w-full h-full flex items-end px-4">
      <Logout icon={icon} />
    </div>
  );
};
