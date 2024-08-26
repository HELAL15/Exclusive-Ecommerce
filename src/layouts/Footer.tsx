import { FC, memo } from "react";
import { FaInstagram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import qr from '../assets/Qrcode.png';
import appstore from '../assets/appstore.png';
import playstore from '../assets/google-play.png';
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Footer: FC<IProps> = ({  }) => {
  return (
    <>
    <footer className="bg-primary py-8 pt-16 ">
      <div className="container">
        <div className="grid grid-col-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
          <div className="footer-col">
            <h3 className="text-primary-white font-medium text-xl">exclusive</h3>
            <div>
              <h3 className="text-primary-white my-4">subscribe</h3>
              <form action="" className="flex items-center justify-between border border-light px-3 py-2 rounded-[4px]">
                <input type="text" placeholder="Enter your email" className="bg-transparent placeholder:text-sm border-0 outline-0 focus:border-0 focus:outline-0" />
                <button type="submit" className="text-xl text-primary-white"><VscSend /></button>
              </form>
            </div>
          </div>
          <div className="footer-col">
            <h3 className="text-white font-medium text-xl">support</h3>
            <ul className="footer-links flex flex-col gap-4 mt-4">
              <li className="footer-link">
                <Link target="_blank" to="111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh." className="text-white ">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Link>
              </li>
              <li className="footer-link">
                <Link target="_blank" to="mailto:exclusive@gmail.com" className="text-white ">exclusive@gmail.com</Link>
              </li>
              <li className="footer-link">
                <Link target="_blank" to="tel:+88015-88888-9999" className="text-white ">+88015-88888-9999</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="text-white font-medium text-xl">account</h3>
            <ul className="footer-links flex flex-col gap-4 mt-4">
              <li className="footer-link">
                <NavLink to="/profile" className="text-white ">my account</NavLink>
              </li>
              <li className="footer-link">
                <NavLink to="/login" className="text-white ">login / sign up</NavLink>
              </li>
              <li className="footer-link">
                <NavLink to="/cart" className="text-white ">cart</NavLink>
              </li>
              <li className="footer-link">
                <NavLink to="/wishlist" className="text-white ">whishlist</NavLink>
              </li>
              <li className="footer-link">
                <NavLink to="/shop" className="text-white ">shop</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="text-white font-medium text-xl">quick links</h3>
            <ul className="footer-links flex flex-col gap-4 mt-4">
              <li className="footer-link">
                <NavLink to="/privacy" className="text-white ">privacy policy</NavLink>
              </li>
              <li className="footer-link">
                <NavLink to="/terms" className="text-white ">terms of us</NavLink>
              </li>
              <li className="footer-link">
                <NavLink to="/faq" className="text-white ">FAQ</NavLink>
              </li>
              <li className="footer-link">
                <NavLink to="/contact" className="text-white ">contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="text-white font-bold text-xl">download app</h3>
            <ul className="footer-links flex flex-col gap-4 mt-4">
              <li>
                <p className="text-slate-400 text-sm">save $3 with app new user only</p>
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
                <Link target="_blank" to="www.facebook.com" className="text-white text-3xl mt-2 ">
                  <RiFacebookLine />
                </Link>
                <Link target="_blank" to="www.x.com" className="text-white text-3xl mt-2 "><FaXTwitter /></Link>
                <Link target="_blank" to="www.instagram.com" className="text-white text-3xl mt-2 ">
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