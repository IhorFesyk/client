import React from "react"
import { Button, Input } from "../../components/shared"

const SignUp = () => {
  return (
    <div className="m-5 flex justify-center">
      <form autoComplete="off" className="w-400px p-5 rounded">
        <p className="text-gray-800 text-center text-2xl">Sign Up</p>

        <Input
          id="username"
          placeholder="Ananasik"
          type="text"
          label="Username"
          isVerified
        />

        <Input
          id="email"
          placeholder="example@gmail.com"
          type="email"
          label="E-mail"
          isVerified
        />

        <Input
          id="password"
          placeholder="At least 6 characters"
          type="password"
          label="Password"
          isVerified={false}
        />
        <Button text="Sign Up" color="red" />
      </form>
    </div>
  )
}

export default SignUp
