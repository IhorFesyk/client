import React from "react"
import { Redirect, Route } from "react-router-dom"
import { useQuery } from "@apollo/client"

import { GET_ME } from "graphql/queries"
import { Sidebar } from "components/sidebar"

const ProtectedRoutes: React.FC = () => {
  const { loading, data } = useQuery(GET_ME)

  const proteсtedRoutes = (
    <div className="flex">
      <Sidebar />
      <Route exact path="/" component={() => <Redirect to="/dashboard" />} />
    </div>
  )

  if (loading) {
    return <div>Loading...</div>
  }

  return data ? proteсtedRoutes : <Redirect to="login" />
}

export default ProtectedRoutes
