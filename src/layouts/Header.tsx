import { FC, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaRegHeart, FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { Select } from "antd";
import Marquee from "react-fast-marquee";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Header: FC<IProps> = ({  }) => {

  const {Option} = Select

  const handleOptionChange = (value: any) => {
    console.log(`selected ${value}`)
  }

  return (
    <>
      <header className="bg-primary py-3">
        <div className="container relative">
          <div className="flex items-center justify-start md:justify-center  ">
            <div className="w-3/4 md:w-1/2">
            <Marquee pauseOnHover >
              <div className="flex items-center justify-center gap-2 ">
                <p className="text-sm font-normal text-primary-white">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                </p>
                <Link className="text-primary-white underline text-sm font-semibold" to={'/'}>shop now</Link>
              </div>
            </Marquee>
            </div>
          </div>
          <Select
            defaultValue="en"
            style={{ width: 90 , height:24 }}
            onChange={handleOptionChange}
            className="absolute right-0 top-1/2 -translate-y-1/2 select-lang"
            >
            <Option value="en">english</Option>
            <Option value="ar">arabic</Option>
          </Select>
        </div>
      </header>
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
              <Link className=" text-lg md:text-xl font-medium  " to={'/wishlist'}>
                <i><FaRegHeart /></i>
              </Link>
              <Link className="text-lg md:text-xl font-medium relative after:content-['2'] after:text-primary-white after:text-sm after:grid after:place-items-center after:absolute after:-top-2 after:-right-2 after:bg-accent after:w-4 after:h-4 after:rounded-full" to={'/cart'}>
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