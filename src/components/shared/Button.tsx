/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from "react"

interface IPropsButton {
  text: string
  color: string
}

interface Id {
  primary: string
  dark: string
  red: string
}

const Button: React.FC<IPropsButton> = ({ text, color }) => {
  return (
    <button className={styles.dark} type="button">
      {text}
    </button>
  )
}

const styles: Id = {
  ["primary"]:
    "min-w-full bg-blue-500 text-white py-2 rounded my-2 hover:bg-blue-600 shadow-lg",
  ["dark"]: "min-w-full py-2 my-6 text-white bg-gray-800 rounded shadow-lg",
  ["red"]: "min-w-full py-2 my-6 text-white bg-red-500 rounded shadow-lg"
}

export default Button
