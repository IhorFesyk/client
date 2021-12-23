interface IProps {
  title: string;
  children?: JSX.Element;
}

export const HeaderSection: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className="py-2 px-4 flex justify-between items-center bg-gray-50 border-b border-gray-200 rounded-t-md">
      <p className="font-medium text-xl">{title}</p>
      <div className="flex items-center">{children}</div>
    </div>
  );
};
