
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { persistor } from "../redux/store";
import { getToken, isTokenExpired, removeAllTokens } from "../helpers/Utils";
import { getUser, setUnAuthed, setUser } from "../redux/features/UserSlice";
import { useLocation, useNavigate } from "react-router";

interface IProps {
  children: React.ReactNode;
}

const AuthProvider: FC<IProps> = ({ children }) => {
 
  const token = getToken('accessToken');

  const navigate = useNavigate()

  const dispatch: any =  useDispatch()
const location = useLocation()
  const hndleUnAuthed = () => {
    dispatch(setUser({}))
    dispatch(setUnAuthed())
  }



  useEffect(() => {
    const checkTokenValidity = () => {
      const isMyTokenExpired = isTokenExpired(token);
    
      
      if (token && isMyTokenExpired) {
        persistor.purge()
        removeAllTokens();
        hndleUnAuthed()
        // dispatch(removeUser());
        // navigate("/login", { replace: true });
      }
      if (!token){
        hndleUnAuthed()
        // navigate("/login", { replace: true });
        persistor.purge()
      }
    };

    const intervalId = setInterval(checkTokenValidity, 60000);

    checkTokenValidity();

    return () => clearInterval(intervalId);
  }, [dispatch, navigate , token,location]);



  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])
  


  return <>{children}</>;
};

export default AuthProvider;
