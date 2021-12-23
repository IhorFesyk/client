import { IconApp, IconLogout } from "assets";
import { SidebarNavigation } from "./Navigation";
import { SIDEBAR_LINKS } from "./const";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Sidebar: React.FC = () => {
  return (
    <div className="w-1/6 h-full shadow-lg z-20 flex flex-col items-center pt-10">
      <Header icon={IconApp} />
      <SidebarNavigation links={SIDEBAR_LINKS} />
      <Footer icon={IconLogout} />
    </div>
  );
};
