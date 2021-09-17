import { gql } from "@apollo/client"

export const LOGIN_USER = gql`
    mutation login(
        $email: String!
        $password: String!
    ) {
        login(
            loginData: {
                email: $email
                password: $password
            }
        ) {
            _id
            token
            tokenExpiration
        }
    }
`

export const REGISTRATION_USER = gql`
    mutation registration(
        $username: String!
        $email: String!
        $password: String!
    ) {
        registration(
            registrationData: {
                username: $username
                email: $email
                password: $password
            }
        ) {
            _id
            token
            tokenExpiration
        }
    }
`
