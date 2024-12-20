import { ChangeEvent, FC, FormEvent, memo, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import qr from '../assets/Qrcode.png';
import appstore from '../assets/appstore.png';
import playstore from '../assets/google-play.png';
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Footer: FC<IProps> = ({  }) => {

  const [mail , setMail] = useState('')

  const handleMailChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setMail(e.target.value)
  }

  const handleSubmitMail = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(mail !==''){
      toast.success(mail)
    }
    setMail('')
  }

  const {t , i18n} = useTranslation()

  const lang = i18n.language


  const {setting} = useSelector((state:RootState)=>state.setting)



  
  const {
    facebook_link :facebook ,
    twitter_link :twitter,
    instagram_link :instagram,
    mobile,
     email,
     [`address_${lang}`] : address,
 } = setting

  


  return (
    <>
    <footer className="bg-primary py-8 pt-16 ">
      <div className="container">
        <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-start">
          <div className="footer-col">
            <h3 className="text-primary-white font-medium text-xl">exclusive</h3>
            <div>
              <h3 className="text-primary-white my-4">{t("footer.subscribe.title")}</h3>
              <p className="text-primary-white text-sm font-normal mb-2">{t("footer.subscribe.subtitle")}</p>
              <form 
                onSubmit={handleSubmitMail}
                action="" className="flex w-full md:w-[200px] items-center text-primary-white justify-between border border-light px-4 py-2 rounded-[4px]">
                <input
                  onChange={handleMailChange}
                  value={mail}
                  type="email" placeholder={t("footer.subscribe.mail")} className="bg-transparent w-3/4 text-primary-white placeholder:text-sm border-0 outline-0 focus:border-0 focus:outline-0" />
                <button type="submit" className="text-lg text-primary-white "><VscSend /></button>
              </form>
            </div>
          </div>
          <div className="footer-col">
            <h3 className="text-white font-medium text-xl">{t("footer.support")}</h3>
            <ul className="footer-links flex flex-col gap-4 mt-4">
              <li className="footer-item">
                <Link target="_blank" to={address} className="footer-link ">{address}</Link>
              </li>
              <li className="footer-item">
                <Link target="_blank" to={`mailto:${email}`} className="footer-link ">{email}</Link>
              </li>
              <li className="footer-item">
                <Link target="_blank" to={`tel:${mobile}`} className="footer-link ">{mobile}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="text-white font-medium text-xl">{t("footer.account.title")}</h3>
            <ul className="footer-links flex flex-col gap-4 mt-4 columns-2 ">
              <li className="footer-item">
                <NavLink to="/profile" className="footer-link ">{t("footer.account.links.myAccount")}</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/login" className="footer-link ">{t("footer.account.links.login")}</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/cart" className="footer-link ">{t("footer.account.links.cart")}</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/wishlist" className="footer-link ">{t("footer.account.links.wishlist")}</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/shop" className="footer-link ">{t("footer.account.links.shop")}</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="text-white font-medium text-xl">{t("footer.quick.title")}</h3>
            <ul className="footer-links flex flex-col gap-4 mt-4">
              <li className="footer-item">
                <NavLink to="/privacy" className="footer-link ">{t("footer.quick.links.privacy")}</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/terms" className="footer-link ">{t("footer.quick.links.terms")}</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/faq" className="footer-link ">{t("footer.quick.links.faq")}</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/contact" className="footer-link ">{t("footer.quick.links.contact")}</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="text-white font-bold text-xl">{t("footer.download.title")}</h3>
            <ul className="footer-links flex flex-col gap-4 mt-4">
              <li>
                <p className="text-slate-400 text-sm">{t("footer.download.subtitle")}</p>
                <div className="flex items-center gap-4 mt-4">
                  <img src={qr} alt="" />
                  <div className="flex flex-col gap-4">
                    <Link to='/'>
                      <img src={appstore} alt="" />
                    </Link>
                    <Link to='/'>
                      <img src={playstore} alt="" />
                    </Link>
                  </div>
                </div>
              </li>
              <li className="footer-link flex items-center gap-5">
                <Link target="_blank" to={facebook} className="text-white text-3xl mt-2 ">
                  <RiFacebookLine />
                </Link>
                <Link target="_blank" to={twitter} className="text-white text-3xl mt-2 "><FaXTwitter /></Link>
                <Link target="_blank" to={instagram} className="text-white text-3xl mt-2 ">
                  <FaInstagram />
                </Link>
                <Link target="_blank" to="www.linkedin.com" className="text-white text-3xl mt-2 "><RiLinkedinLine /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div className="rights pt-4 mt-8 border-t border-t-gray-800">
          <p className="text-white text-center mt-4">© 2021 exclusive. All rights reserved.</p>
        </div>
    </footer>
    </>
  );
}

export default memo(Footer);