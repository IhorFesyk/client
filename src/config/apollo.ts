import { ApolloClient, InMemoryCache } from "@apollo/client"
import { getToken } from "utils"

const token = getToken()

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:5001/graphql",
  headers: {
    authorization: token ? `Bearer ${token}` : ""
  }
})

export default client
