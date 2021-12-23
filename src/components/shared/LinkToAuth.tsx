import { Link } from "react-router-dom";

interface IProps {
  text: string;
  label: string;
  link: string;
}

export const LinkToAuth: React.FC<IProps> = ({ text, label, link }) => {
  return (
    <div className="flex mt-10">
      <p className="text-gray-500 text-xs">{text}</p>
      <Link
        className="text-gray-500 text-xs text-crayolaBlue ml-1 hover:underline"
        to={link}
      >
        {label}
      </Link>
    </div>
  );
};
