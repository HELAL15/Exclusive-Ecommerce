import { FC, memo } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Layouts: FC<IProps> = ({  }) => {
  return (
    <> 
    <Header/>
      <Outlet/>
    <Footer/>
    </>
  );
}

export default memo(Layouts);