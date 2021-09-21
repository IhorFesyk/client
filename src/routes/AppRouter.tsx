import React from "react"
import { Route, Switch } from "react-router-dom"

import { SignUp, SignIn } from "pages"
import { ProtectedRoutes } from "routes"

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/registration" component={SignUp} />
      <Route exact path="/login" component={SignIn} />

      <ProtectedRoutes />

      <Route path="*" component={() => <div>Page not Found</div>} />
    </Switch>
  )
}

export default AppRouter
