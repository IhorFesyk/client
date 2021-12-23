import { ISidebarNavigationProps } from "../types";
import { SidebarLink } from "./SidebarLink";

export const SidebarNavigation: React.FC<ISidebarNavigationProps> = ({
  links,
}) => {
  return (
    <div className="w-full px-4 mt-16">
      {links.map((link) => (
        <SidebarLink {...link} key={link._id} />
      ))}
    </div>
  );
};
