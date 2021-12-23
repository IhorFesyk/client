import { IRecord, IWallet } from "utils";

export interface IOverviewProps {
  walletData: IWallet;
}

export interface ILastRecordsProps {
  walletData: IWallet;
}

export interface IChartProps {
  walletData: IWallet;
}

export interface IOverviewInfoProps {
  amount: string;
  changesMonth: string;
  spendingMonth: string;
  incomeMonth: string;
  changesMonthNumber: number;
}

export interface IOverviewOptionProps {
  label: string;
  data: string;
  isIncome: boolean;
}

export interface IDataForChart {
  name: string;
  changes: number;
}

export interface INewRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
  walletId?: string;
}

export interface INewRecordModalFormProps {
  onClose: () => void;
  walletId?: string;
}

export interface ISelectCategoryProps {
  setValues: (values: any) => void;
  values: any;
}

export interface ILastRecordsListProps {
  records: Array<IRecord>;
}

export interface ILastRecordsListItemProps {
  category: string;
  amount: string;
  type: string;
  isLastItem: boolean;
}

export interface ILastRecordsHeaderProps {
  setIsModalOpen: (isOpen: boolean) => void;
}
