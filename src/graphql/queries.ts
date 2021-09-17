import { gql } from "@apollo/client"

export const GET_ME = gql`
  query getMe {
    getMe {
      _id
      username
      email
      createdAt
      updatedAt
    }
  }
`

export const GET_TASK_LISTS = gql`
  query getTaskLists {
    getTaskLists {
      _id
      title
      tasks {
        _id
        title
        isChecked
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
