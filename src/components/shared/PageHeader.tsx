import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SLUG_CONST, GET_USERNAME } from "utils";
import { Loader } from "./Loader";

export const PageHeader: React.FC = () => {
  const [titlePage, setTitlePage] = useState("Dashboard");
  const { pathname } = useLocation();

  const { data, loading } = useQuery(GET_USERNAME);

  useEffect(() => {
    if (pathname.includes(SLUG_CONST.DASHBOARD)) setTitlePage("Dashboard");
    else if (pathname.includes(SLUG_CONST.ANALYTICS)) setTitlePage("Analytics");
    else if (pathname.includes(SLUG_CONST.RECORDS)) setTitlePage("Records");
    else if (pathname.includes(SLUG_CONST.ALL_WALLETS))
      setTitlePage("All Wallets");
  }, [pathname]);

  return (
    <div className="w-full py-3 px-12 flex justify-between items-center z-10 shadow-sm box-border">
      <p className="text-xl font-semibold text-gray-700">{titlePage}</p>

      <div className="flex items-center">
        <div className="mr-4 text font-medium text-gray-700">
          {loading ? <Loader /> : data?.getMe?.username}
        </div>
        <img
          className="h-10 w-10 rounded-full bg-gray-100"
          src="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/Monterey-Graphic-1-dragged.jpeg?quality=82&strip=all&w=1000"
          alt="user avatar"
        />
      </div>
    </div>
  );
};
