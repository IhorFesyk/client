import {
  IconCategoryCafe,
  IconCategoryCommunication,
  IconCategoryEntertainment,
  IconCategoryFinancial,
  IconCategoryFood,
  IconCategoryHouse,
  IconCategoryOther,
  IconCategoryPurchase,
  IconCategoryTransport,
  IconCategoryTravel,
} from "assets";
import { ICategory } from "./types";

export const SLUG_CONST = {
  DASHBOARD: "/dashboard",
  ANALYTICS: "/analytics",
  RECORDS: "/records",
  ALL_WALLETS: "/all-wallets",
};

export const CATEGORIES: Array<ICategory> = [
  {
    _id: "62949f30-51b5-4050-a96b-6542346ae592",
    title: "Food",
    icon: IconCategoryFood,
  },
  {
    _id: "26e1b428-93e4-4f2d-b196-49a3c567e0e7",
    title: "Cafe",
    icon: IconCategoryCafe,
  },
  {
    _id: "852a8f74-0219-4bab-822b-e070040db1da",
    title: "Purchases",
    icon: IconCategoryPurchase,
  },
  {
    _id: "8e97e009-7115-4560-8293-6849f1bb3991",
    title: "House",
    icon: IconCategoryHouse,
  },
  {
    _id: "e09c643b-5b2c-4d21-a004-5a3cdc31afa0",
    title: "Transport",
    icon: IconCategoryTransport,
  },
  {
    _id: "7f25cf39-1647-43ef-8be7-8a4673bcb502",
    title: "Travel",
    icon: IconCategoryTravel,
  },
  {
    _id: "41750f01-1a5f-42e1-b254-81ebdbb78e80",
    title: "Entertainment",
    icon: IconCategoryEntertainment,
  },
  {
    _id: "7bab0736-f500-4f90-90ce-ecf3dbc5e042",
    title: "Communication",
    icon: IconCategoryCommunication,
  },
  {
    _id: "a9066ba2-cdb7-4547-9f75-91aacac38408",
    title: "Financial",
    icon: IconCategoryFinancial,
  },
  {
    _id: "f15793fe-fca5-4a60-a36c-374d31841407",
    title: "Salary",
    icon: IconCategoryFinancial,
  },
  {
    _id: "0405a685-a59c-4cc9-b110-b84c568c9ddc",
    title: "Other",
    icon: IconCategoryOther,
  },
];
