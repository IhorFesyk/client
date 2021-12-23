import { IPropsIcon } from "utils";

export interface ISidebarLink {
  _id: string;
  title: string;
  slug: string;
  icon: React.FC<IPropsIcon>;
}

export interface ISidebarNavigationProps {
  links: ISidebarLink[];
}

export interface IFooterProps {
  icon: React.FC<IPropsIcon>;
}

export interface ILogoutProps {
  icon: React.FC<IPropsIcon>;
}

export interface IHeaderProps {
  icon: React.FC<IPropsIcon>;
}
