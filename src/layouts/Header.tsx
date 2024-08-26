import { FC, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaRegHeart, FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuUser } from "react-icons/lu";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Header: FC<IProps> = ({  }) => {



  return (
    <>
      <header className="py-4 border-b border-b-gray-200 sticky top-0 bg-primary-white z-[99]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="logo font-bold text-2xl">
              <Link to="/">exclusive</Link>
            </div>
            <nav className="nav hidden lg:block">
              <ul className="flex items-center gap-8">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/shop">shop</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">about</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-up">sign up</NavLink>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-6">
              <form action="" className="hidden lg:flex items-center bg-light px-3 py-2 rounded-[4px]">
                <input type="text" placeholder="What are you looking for?" className="bg-transparent placeholder:text-sm border-0 outline-0 focus:border-0 focus:outline-0" />
                <button type="submit" className="text-xl "><FaSearch /></button>
              </form>
              <Link className=" text-lg md:text-xl font-medium" to={'/wishlist'}>
                <i><FaRegHeart /></i>
              </Link>
              <Link className="text-lg md:text-xl font-medium" to={'/cart'}>
                <i><AiOutlineShoppingCart /></i>
              </Link>
              <Link className="text-lg md:text-xl font-medium" to={'/profile'}>
                <i><LuUser /></i>
              </Link>
              <button className=" block lg:hidden text-lg md:text-xl bg-transparent border-0 outline-0">
              <FaBars />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default memo(Header);