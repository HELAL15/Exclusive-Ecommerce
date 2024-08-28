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


  return (
    <>
    <footer className="bg-primary py-8 pt-16 ">
      <div className="container">
        <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-start">
          <div className="footer-col">
            <h3 className="text-primary-white font-medium text-xl">exclusive</h3>
            <div>
              <h3 className="text-primary-white my-4">subscribe</h3>
              <p className="text-primary-white text-sm font-normal mb-2">Get 10% off your first order</p>
              <form 
                onSubmit={handleSubmitMail}
                action="" className="flex w-full md:w-[200px] items-center text-primary-white justify-between border border-light px-4 py-2 rounded-[4px]">
                <input
                  onChange={handleMailChange}
                  value={mail}
                  type="email" placeholder="Enter your email" className="bg-transparent w-3/4 text-primary-white placeholder:text-sm border-0 outline-0 focus:border-0 focus:outline-0" />
                <button type="submit" className="text-lg text-primary-white "><VscSend /></button>
              </form>
            </div>
          </div>
          <div className="footer-col">
            <h3 className="text-white font-medium text-xl">support</h3>
            <ul className="footer-links flex flex-col gap-4 mt-4">
              <li className="footer-item">
                <Link target="_blank" to="https://111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh." className="footer-link ">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Link>
              </li>
              <li className="footer-item">
                <Link target="_blank" to="mailto:exclusive@gmail.com" className="footer-link ">exclusive@gmail.com</Link>
              </li>
              <li className="footer-item">
                <Link target="_blank" to="tel:+88015-88888-9999" className="footer-link ">+88015-88888-9999</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="text-white font-medium text-xl">account</h3>
            <ul className="footer-links flex flex-col gap-4 mt-4">
              <li className="footer-item">
                <NavLink to="/profile" className="footer-link ">my account</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/login" className="footer-link ">login / sign up</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/cart" className="footer-link ">cart</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/wishlist" className="footer-link ">whishlist</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/shop" className="footer-link ">shop</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="text-white font-medium text-xl">quick links</h3>
            <ul className="footer-links flex flex-col gap-4 mt-4">
              <li className="footer-item">
                <NavLink to="/privacy" className="footer-link ">privacy policy</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/terms" className="footer-link ">terms of us</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/faq" className="footer-link ">FAQ</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/contact" className="footer-link ">contact</NavLink>
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