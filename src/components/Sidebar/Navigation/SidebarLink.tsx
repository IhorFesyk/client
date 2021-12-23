import { ISidebarLink } from "../types";
import { Link, useLocation } from "react-router-dom";
import { getWalletIdByLocation } from "utils";

export const SidebarLink: React.FC<ISidebarLink> = ({
  title,
  slug,
  icon: Component,
}) => {
  const { pathname } = useLocation();
  const isActive = pathname.includes(slug);
  const walletId = getWalletIdByLocation();

  return (
    <Link
      to={walletId && slug !== "/all-wallets" ? `${walletId}${slug}` : slug}
      className={`${
        isActive
          ? "p-2 my-2 cursor-pointer rounded transition bg-gray-100 text-gray-700"
          : "text-gray-400"
      } flex items-center p-2 my-2 cursor-pointer rounded transition hover:bg-gray-100 hover:text-gray-700`}
    >
      <Component className="h-6 w-6" />
      <p className="ml-2 text-sm font-medium">{title}</p>
    </Link>
  );
};
