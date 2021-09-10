/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from "react"
import CheckedInputIcon from "../../assets/checkedInputIcon"
import NotCheckedInputIcon from "../../assets/notCheckedInputIcon"

interface IPropsInput {
  id: string
  label: string
  placeholder: string
  type: string
  isVerified: boolean
}

const Input: React.FC<IPropsInput> = ({
  id,
  placeholder,
  type,
  label,
  isVerified
}) => {
  return (
    <div className="flex flex-col my-2 justify-items-center">
      <label className="text-gray-600 cursor-pointer" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="text-gray-600 bg-gray-100 px-3 py-2 outline-none rounded shadow"
        placeholder={placeholder}
      />

      {isVerified && <CheckedInputIcon />}
      {!isVerified && <NotCheckedInputIcon />}
    </div>
  )
}

export default Input
