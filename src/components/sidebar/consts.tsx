import { RecordIcon, DashboardIcon, AccountIcon, AnalyticsIcon } from "assets"

interface INavItem {
  text: string
  link: string
  icon: JSX.Element
}

export const nav: Array<INavItem> = [
  {
    text: "Dashboard",
    link: "/dashboard",
    icon: <DashboardIcon className="w-6 h-6 text-current" />
  },

  {
    text: "Account",
    link: "/account",
    icon: <AccountIcon className="w-6 h-6 text-current" />
  },

  {
    text: "Records",
    link: "/records",
    icon: <RecordIcon className="w-6 h-6 text-current" />
  },

  {
    text: "Analytics",
    link: "/analytics",
    icon: <AnalyticsIcon className="w-6 h-6 text-current" />
  }
]
