export { SLUG_CONST, CATEGORIES } from "./const";

export {
  checkAuth,
  normalizerAmount,
  getWalletIdByLocation,
  reducerIncomeRecords,
  reducerSpendingRecords,
  reducerSum,
} from "./helpers";

export type {
  IUser,
  IWallet,
  IRecord,
  ICategory,
  IAuthData,
  ISignInPayload,
  IPropsIcon,
} from "./types";

export {
  GET_USERNAME,
  GET_USER_WALLETS_IDS,
  GET_ALL_WALLETS_DATA,
  SIGN_IN,
  SIGN_UP,
  DELETE_RECORD,
  GET_WALLET_RECORDS,
  GET_ALL_WALLET_DATA,
  ADD_NEW_RECORD,
  GET_ME,
  CREATE_WALLET,
  DELETE_WALLET,
} from "./queries";
