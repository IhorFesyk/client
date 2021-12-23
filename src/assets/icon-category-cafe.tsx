import { IPropsIcon } from "utils";

export const IconCategoryCafe: React.FC<IPropsIcon> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 50 50"
      version="1.2"
      baseProfile="tiny"
      overflow="inherit"
      className={className}
      stroke="currentColor"
      fill="currentColor"
    >
      <path d="M37 7h-28v27c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4v-5c6.076 0 11-4.925 11-11s-4.924-11-11-11zm0 17v-12c3.314 0 6 2.686 6 6 0 3.313-2.686 6-6 6zm-35 16v2.301c0 1.896 2.069 2.699 4.6 2.699h36.8c2.53 0 4.6-.803 4.6-2.699v-2.301h-46z" />
    </svg>
  );
};
