/* eslint-disable indent */
import React from "react"
import { Formik } from "formik"
import { Link } from "react-router-dom"
import { SingUpFormValues } from "types"

interface IProps {
  initialValues: SingUpFormValues
  loading: boolean
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: SingUpFormValues) => void
}

const SignUpForm: React.FC<IProps> = ({ initialValues, loading, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit }) => {
        return (
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="w-400px p-5 rounded"
          >
            <p className="text-gray-800 text-center text-2xl">Sign Up</p>

            <div className="flex flex-col justify-items-center my-4">
              <label className="text-gray-600 cursor-pointer" htmlFor="email">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={values.username}
                onChange={handleChange}
                className="text-gray-600 bg-gray-100 px-3 py-2 outline-none rounded shadow"
                placeholder="John"
              />
            </div>

            <div className="flex flex-col justify-items-center my-4">
              <label className="text-gray-600 cursor-pointer" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                className="text-gray-600 bg-gray-100 px-3 py-2 outline-none rounded shadow"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="flex flex-col justify-items-center my-4">
              <label
                className="text-gray-600 cursor-pointer"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                className="text-gray-600 bg-gray-100 px-3 py-2 outline-none rounded shadow"
                placeholder="At least 6 characters"
              />
            </div>

            <button
              className="text-white rounded shadow-lg bg-gray-800 hover:bg-gray-900 min-w-full py-2 my-6"
              disabled={loading}
              type="submit"
            >
              Sign Up
            </button>

            <div className="flex justify-center">
              <p className="text-gray-400">
                Already have an account,{" "}
                <Link className="text-gray-700 underline" to="login">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}

export default SignUpForm
