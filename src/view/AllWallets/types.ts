import { IRecord, IWallet } from "utils";

export interface IWalletCardProps {
  wallet: IWallet;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export interface IListRecordsItemProps {
  category: string;
  amount: string;
  type: string;
  isLastItem: boolean;
}

export interface IListRecordsProps {
  records: Array<IRecord>;
}

export interface INewWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface INewWalletModalFormProps {
  onClose: () => void;
}