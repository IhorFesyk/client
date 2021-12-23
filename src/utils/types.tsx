import React from "react";

export interface IUser {
  _id: string;
  username: string;
  email: string;
  wallets: Array<string>;
}

export interface IWallet {
  _id: string;
  title: string;
  amount: number;
  records: Array<IRecord>;
  monthRecords: Array<IRecord>;

  createdAt: string;
  updatedAt: string;
}

export interface IRecord {
  _id: string;
  type: string;
  amount: number;
  category: string;
  description: string;

  createdAt: string;
  updatedAt: string;

  isLast?: boolean;
}

export interface ICategory {
  _id: string;
  title: string;
  icon: React.FC<IPropsIcon>;
}

export interface IAuthData {
  _id: string;
  token: string;
  tokenExpiration: number;
}

export interface ISignInPayload {
  email: string;
  password: string;
}

export interface IPropsIcon {
  className: string;
  onClick?: () => void;
}
