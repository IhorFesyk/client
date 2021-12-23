import { IconDashboard, IconRecord, IconMultipleWallets } from "assets";
import { SLUG_CONST } from "utils";
import { ISidebarLink } from "./types";

export const SIDEBAR_LINKS: Array<ISidebarLink> = [
  {
    _id: "faebcda8-3976-491f-8e65-fdc18f22dd65",
    title: "Dashboard",
    slug: SLUG_CONST.DASHBOARD,
    icon: IconDashboard,
  },
  {
    _id: "0b44a30a-a41a-415d-ac60-394979ac6951",
    title: "Records",
    slug: SLUG_CONST.RECORDS,
    icon: IconRecord,
  },
  {
    _id: "7135c4cd-9f38-422f-be71-f7a5232abc14",
    title: "All wallets",
    slug: SLUG_CONST.ALL_WALLETS,
    icon: IconMultipleWallets,
  },
];
