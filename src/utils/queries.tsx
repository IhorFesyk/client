import { gql } from "@apollo/client";

// --------> Queries <--------
export const GET_USERNAME = gql`
  query GET_USERNAME {
    getMe {
      username
    }
  }
`;

export const GET_USER_WALLETS_IDS = gql`
  query GetWalletsIds {
    getMe {
      wallets
    }
  }
`;

export const GET_ALL_WALLETS_DATA = gql`
  query GetWallets {
    getWallets {
      _id
      title
      amount
      records {
        _id
        type
        amount
        category
        description
      }
    }
  }
`;

export const GET_ALL_WALLET_DATA = gql`
  query GetWallet($walletId: ID!) {
    getWallet(walletId: $walletId) {
      _id
      title
      amount
      records {
        _id
        type
        amount
        category
        description
        createdAt
      }
      monthRecords {
        _id
        type
        amount
        category
        description
        createdAt
      }
    }
  }
`;

export const GET_WALLET_RECORDS = gql`
  query GetRecords($walletId: ID!) {
    getWallet(walletId: $walletId) {
      records {
        _id
        type
        amount
        category
        description
        createdAt
      }
    }
  }
`;

export const SIGN_IN = gql`
  query SignIn($payload: SignIn!) {
    signIn(payload: $payload) {
      _id
      token
      tokenExpiration
    }
  }
`;

// --------> Mutations <--------
export const DELETE_RECORD = gql`
  mutation DeleteRecord($recordId: ID!, $walletId: ID!) {
    deleteRecord(recordId: $recordId, walletId: $walletId) {
      _id
    }
  }
`;

export const ADD_NEW_RECORD = gql`
  mutation AddRecord($payload: RecordData!, $walletId: ID!) {
    createRecord(payload: $payload, walletId: $walletId) {
      _id
      title
      amount
      createdAt
      updatedAt
      records {
        _id
        type
        amount
        category
        description
        createdAt
        updatedAt
      }
      monthRecords {
        _id
        type
        amount
        category
        description
        createdAt
        updatedAt
      }
    }
  }
`;

export const DELETE_WALLET = gql`
  mutation DeleteWallet($walletId: ID!) {
    deleteWallet(walletId: $walletId) {
      _id
    }
  }
`;

export const CREATE_WALLET = gql`
  mutation CreateWallet($payload: WalletData!) {
    createWallet(payload: $payload) {
      _id
      title
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($payload: SignUp!) {
    signUp(payload: $payload) {
      _id
      token
      tokenExpiration
    }
  }
`;

// --------------------

export const GET_ME = gql`
  query getMe {
    getMe {
      _id
      username
      email
      wallets
    }
  }
`;

