import { FC, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import { persistor, RootState } from "../redux/store";
import {  useDispatch, useSelector } from "react-redux";
import { getToken, isTokenExpired, removeAllTokens } from "./Utils";
import { setUnAuthed, setUser } from "../redux/features/UserSlice";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const ProtectedRoutes: FC<IProps> = ({  }) => {


  const token = getToken('accessToken');

  const user = useSelector((state:RootState)=>state.user)

  const { isAuthenticated } = user

  const navigate = useNavigate()

  const dispatch =  useDispatch()
const location = useLocation()
  const hndleUnAuthed = () => {
    dispatch(setUser({}))
    dispatch(setUnAuthed())
  }
  const isMyTokenExpired = isTokenExpired(token);
  console.log(isMyTokenExpired);

  useEffect(() => {
    const checkTokenValidity = () => {
      const isMyTokenExpired = isTokenExpired(token);
      console.log(isMyTokenExpired);
      
      if (token && isMyTokenExpired) {
        persistor.purge()
        removeAllTokens();
        hndleUnAuthed()
        // dispatch(removeUser());
        navigate("/login", { replace: true });
      }
      if (!token){
        hndleUnAuthed()
        navigate("/login", { replace: true });
        persistor.purge()
      }
    };

    const intervalId = setInterval(checkTokenValidity, 60000);

    checkTokenValidity();

    return () => clearInterval(intervalId);
  }, [dispatch, navigate , token,location]);

  return (
    <>

{
        isAuthenticated && token ? <Outlet/> : <Navigate to={'/login'} replace  />
      }

    </>
  );
}

export default ProtectedRoutes;