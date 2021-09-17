import { useMutation } from "@apollo/client"
import { REGISTRATION_USER } from "graphql/mutations"
import React, { useEffect } from "react"
import { SingUpFormValues } from "types"
import { saveAccessToken } from "utils"
import SignUpForm from "./SignUpForm"

const initialValues: SingUpFormValues = {
  username: "",
  email: "",
  password: ""
}

const SignUp = () => {
  const [registration, { loading, data }] = useMutation(REGISTRATION_USER, {
    onError(err) {
      console.log(err)
    }
  })

  useEffect(() => {
    if (data) {
      saveAccessToken(data.registration.token)
    }

    console.log(data)
  }, [data])

  const handleRegistration = (values: SingUpFormValues) => {
    registration({
      variables: {
        username: values.username,
        email: values.email,
        password: values.password
      }
    })
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <SignUpForm
        initialValues={initialValues}
        loading={loading}
        onSubmit={handleRegistration}
      />
    </div>
  )
}

export default SignUp
