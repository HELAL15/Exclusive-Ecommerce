
import Cookies from "cookie-universal";
import { persistor } from "../redux/store";
import { jwtDecode } from "jwt-decode";


const  cookie = Cookies()

// get token from cookie
export const getToken = (tokenName:string) => {
  return cookie.get(tokenName)
}

// set token in cookie
export const setToken = (tokenName:string ,token:string) => {
  return cookie.set(tokenName , token , {
    path:'/',
    secure: true, 
    sameSite: 'strict',
  })
}

// remove token from cookie
export const removeToken = (tokenName:string) => {
  return cookie.remove(tokenName)
}

// remove all tokens from cookie
export const removeAllTokens = () => {
  cookie.remove('accessToken')
  persistor.purge();
  cookie.remove('persist:root', { path: '/' });
}



export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded:any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};