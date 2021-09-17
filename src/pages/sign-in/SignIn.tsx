import React, { useEffect } from "react"
import { useMutation } from "@apollo/client"

import { LOGIN_USER } from "graphql/mutations"
import { saveAccessToken } from "utils"
import { SingInFormValues } from "types"
import SignInForm from "./SignInForm"

const initialValues: SingInFormValues = {
  email: "",
  password: ""
}

const SignIn: React.FC = () => {
  const [login, { loading, data }] = useMutation(LOGIN_USER, {
    onError(err) {
      console.error(err)
    }
  })

  useEffect(() => {
    if (data) {
      saveAccessToken(data.login.token)
    }

    console.log(data)
  }, [data])

  const handleLogin = (values: SingInFormValues) => {
    login({
      variables: {
        email: values.email,
        password: values.password
      }
    })
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <SignInForm
        initialValues={initialValues}
        onSubmit={handleLogin}
        loading={loading}
      />
    </div>
  )
}

export default SignIn
