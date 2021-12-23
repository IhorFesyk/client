import { ChangeEvent } from "react";
import { IPropsIcon } from "utils/types";

interface IProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;

  icon?: React.FC<IPropsIcon>;
  min?: string;
  max?: string;
  placeholder?: string;
  className?: string;
  iconClassName?: string;
  indentation?: string;
  internalIndentation?: string;
}

export const Input: React.FC<IProps> = ({
  icon: Component,
  className,
  indentation,
  internalIndentation,
  ...rest
}) => {
  return (
    <div className={`flex items-center  ${indentation}`}>
      {Component && (
        <Component
          className={
            className ? className : `h-4 w-4 absolute ml-2  text-crayolaBlue`
          }
        />
      )}

      <input
        {...rest}
        className={
          className
            ? className
            : `w-full appearance-none ${internalIndentation} border rounded-md`
        }
      />
    </div>
  );
};
