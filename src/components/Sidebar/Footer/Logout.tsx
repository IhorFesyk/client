import { ILogoutProps } from "../types";
import { useNavigate } from "react-router-dom";

export const Logout: React.FC<ILogoutProps> = ({ icon: Component }) => {
  const navigate = useNavigate();

  const logout = async () => {
    await localStorage.removeItem("accessToken");
    navigate("/signin");
  };

  return (
    <div
      onClick={logout}
      className="flex w-full items-center text-gray-400 p-2 my-2 cursor-pointer rounded transition hover:bg-gray-100 hover:text-gray-700"
    >
      <Component className="w-6 h-6" />
      <p className="ml-2">Logout</p>
    </div>
  );
};
