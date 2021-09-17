import React, { useEffect, useState } from "react"
import { Redirect, Route } from "react-router-dom"
import { useQuery } from "@apollo/client"

import { GET_ME } from "graphql/queries"
import { Home } from "pages"

const ProtectedRoutes: React.FC = () => {
  const { loading, data } = useQuery(GET_ME)

  const protextedRoutes = <Route exact path="/" component={Home} />

  if (loading) {
    return <div>Loading...</div>
  }

  return data ? protextedRoutes : <Redirect to="login" />
}

export default ProtectedRoutes
