import React, { useState } from "react";
import Select from "react-select";
import { CATEGORIES } from "utils";
import { ISelectCategoryProps } from "view/Dashboard/types";

export const SelectCategory: React.FC<ISelectCategoryProps> = ({
  setValues,
  values,
}) => {
  const [state, setState] = useState({ label: null, value: null });

  const handleChange = async (selectedOption: any) => {
    await setState(selectedOption);
    setValues({ ...values, category: selectedOption.value });
  };

  const options: any = CATEGORIES.map((category) => {
    return {
      label: category.title,
      value: category._id,
    };
  });

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "white" : "#4a4a4a",
      padding: "5px 0 5px 10px",
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      styles={customStyles}
      value={state}
      onChange={handleChange}
      options={options}
    />
  );
};
