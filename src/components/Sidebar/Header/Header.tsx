import { IHeaderProps } from "../types";

export const Header: React.FC<IHeaderProps> = ({ icon: Component }) => {
  return (
    <div className="flex flex-col items-center">
      <Component className="h-12 w-12 text-gray-800" />
      <p className="mt-4 text-lg font-semibold text-gray-700">App Audit</p>
    </div>
  );
};
