import { memo } from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { getToken } from "./Utils";



/**
 * ==> Component
 */
const ReqiuerBack = () => {
  const token = getToken('accessToken');

  const user = useSelector((state:RootState)=>state.user)

  const {isAuthenticated} = user

  return (
    <>

    {isAuthenticated  && token 
    ? <Navigate to='/' />
    : <Outlet/>
  }

    </>
  );
}

export default memo(ReqiuerBack);