import { FC, FormEvent, memo, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaRegHeart, FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { Select } from "antd";
import Marquee from "react-fast-marquee";
import MobileMenu from "../components/header/MobileMenu";
import i18next from "i18next";
import { marqueeDir } from "../components/globalVars";
import { useTranslation } from "react-i18next";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Header: FC<IProps> = ({  }) => {
  
  const {t} = useTranslation()

  const [isOpen , setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const navigate = useNavigate()
  const location = useLocation()

  const handleOpen = ()=>{
    setOpen(true)
  }

  useEffect(()=>{
    setOpen(false)
  },[location])


const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  navigate(`/shop?search=${searchValue}`)
  setSearchValue('')
}



  const {Option} = Select

  const handleOptionChange = (value: any) => {
    i18next.changeLanguage(value);
    window.location.reload();
    navigate(location.pathname , {replace: true})
    console.log(`selected ${value}`)
  }

  return (
    <>
      <header className="bg-primary py-3">
        <div className="container relative">
          <div className="flex items-center justify-start md:justify-center  ">
            <div className="w-3/4 md:w-1/2">
            <Marquee pauseOnHover direction={marqueeDir} >
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
            defaultValue={localStorage.getItem("i18nextLng") || 'en'}
            style={{ width: 90 , height:24 }}
            onChange={handleOptionChange}
            className="absolute rtl:left-0 ltr:right-0 top-1/2 -translate-y-1/2 select-lang"
            >
            <Option value="en">{t("topHeader.lang.en")}</Option>
            <Option value="ar">{t("topHeader.lang.ar")}</Option>
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
              <ul className="flex items-center gap-5 xl:gap-8">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">{t("header.nav.home")}</NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/test">test</NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/shop">{t("header.nav.shop")}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">{t("header.nav.contact")}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">{t("header.nav.about")}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">{t("header.nav.login")}</NavLink>
                </li>
              </ul>
            </nav>
            <div className="block lg:hidden">
              <MobileMenu isOpen={isOpen} setOpen={setOpen} />
            </div>
            <div className="flex items-center gap-6">
              <form  onSubmit={handleSubmit} className="hidden lg:flex items-center bg-light px-3 py-2 rounded-[4px]">
                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue} type="search" placeholder={t("header.search")} className="bg-transparent placeholder:text-sm border-0 outline-0 focus:border-0 focus:outline-0" />
                <button type="submit" className="text-xl "><FaSearch /></button>
              </form>
              <NavLink className=" text-lg md:text-xl font-medium " to={'/wishlist'}>
                <i><FaRegHeart /></i>
              </NavLink>
              <NavLink className="text-lg md:text-xl font-medium relative after:content-['2'] after:text-primary-white after:text-sm after:grid after:place-items-center after:absolute after:-top-2 after:-right-2 after:bg-accent after:w-4 after:h-4 after:rounded-full" to={'/cart'}>
                <i><AiOutlineShoppingCart /></i>
              </NavLink>
              <NavLink className="text-lg md:text-xl font-medium" to={'/profile'}>
                <i><LuUser /></i>
              </NavLink>
              <button onClick={handleOpen} className=" block lg:hidden text-lg md:text-xl bg-transparent border-0 outline-0">
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