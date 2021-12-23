interface IProps {
  text: string;
  className?: string;
  indentation?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<IProps> = ({
  text,
  className,
  indentation,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={
        className
          ? className
          : `bg-crayolaBlue text-sm font-semibold text-white rounded-md w-full hover:bg-blue-600 transition ${indentation}`
      }
    >
      {text}
    </button>
  );
};
