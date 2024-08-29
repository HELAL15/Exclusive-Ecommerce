import { FC, memo } from "react";
import BreadCrumb from "../components/global/BreadCrumb";
import { Link, useNavigate } from 'react-router-dom';
import product from '../assets/main-product.png'
import { IoCloseSharp } from "react-icons/io5";

/**
 * ==> props interface
 */
interface IProps {}

/**
 * ==> Component
 */
const Cart: FC<IProps> = () => {

  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate('/checkout')
  }


  return (
    <>
      <section className="pt-0">
        <BreadCrumb />
        <div className="container  ">
          <div className="overflow-x-auto">
            <div className="table  w-[768px] md:w-full">
              <div className="header text-base font-normal grid grid-cols-4 text-center rounded shadow-shadow px-4 py-4">
                <h2>products</h2>
                <h2>price</h2>
                <h2>quantity</h2>
                <h2>subtotal</h2>
              </div>
              <div className="body mt-10 space-y-6">
                <div className="text-base font-normal grid grid-cols-4 items-center text-center rounded shadow-shadow px-4 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="relative w-[50px] h-[50px]">
                    <button className="absolute -top-[3px] rtl:-right-[3px] ltr:-left-[3px] w-[18px] h-[18px] grid place-items-center btn-primary rounded-full" >
                    <IoCloseSharp />
                    </button>
                    <img className="w-full h-full object-contain" src={product} alt="" />
                    </div>
                    <h3>lcd monitor</h3>
                  </div>
                  <h3>$550</h3>
                  <input className="mx-auto w-[72px] h-[44px] px-2 rounded outline-none border border-slate-400 focus:border-accent duration-300" type="number" min={0} />
                  <h3>$ 1100</h3>
                </div>
                <div className="text-base font-normal grid grid-cols-4 items-center text-center rounded shadow-shadow px-4 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="relative w-[50px] h-[50px]">
                    <button className="absolute -top-[3px] rtl:-right-[3px] ltr:-left-[3px] w-[18px] h-[18px] grid place-items-center btn-primary rounded-full" >
                    <IoCloseSharp />
                    </button>
                    <img className="w-full h-full object-contain" src={product} alt="" />
                    </div>
                    <h3>lcd monitor</h3>
                  </div>
                  <h3>$550</h3>
                  <input className="mx-auto w-[72px] h-[44px] px-2 rounded outline-none border border-slate-400 focus:border-accent duration-300" type="number" min={0} />
                  <h3>$ 1100</h3>
                </div>
                <div className="text-base font-normal grid grid-cols-4 items-center text-center rounded shadow-shadow px-4 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="relative w-[50px] h-[50px]">
                    <button className="absolute -top-[3px] rtl:-right-[3px] ltr:-left-[3px] w-[18px] h-[18px] grid place-items-center btn-primary rounded-full" >
                    <IoCloseSharp />
                    </button>
                    <img className="w-full h-full object-contain" src={product} alt="" />
                    </div>
                    <h3>lcd monitor</h3>
                  </div>
                  <h3>$550</h3>
                  <input className="mx-auto w-[72px] h-[44px] px-2 rounded outline-none border border-slate-400 focus:border-accent duration-300" type="number" min={0} />
                  <h3>$ 1100</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="footer mt-10 flex items-center justify-between flex-wrap gap-2">
            <Link to={'/shop'} className="rounded px-8 py-3 w-full md:w-fit text-center border border-primary duration-300 hover:bg-primary hover:text-primary-white" >return to shop</Link>
            {/* <button className="rounded px-8 py-3 w-full md:w-fit text-center border border-primary hover:bg-primary hover:text-primary-white" >update cart</button> */}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex justify-between items-start flex-wrap gap-8">
            <div className="coupon flex items-center flex-wrap gap-4">
              <input type="text" placeholder="coupon code" className="rounded px-8 py-3 w-full md:w-fit border border-gray-400 duration-300 focus:border-accent outline-none " />
              <button className="rounded px-8 py-3 btn-primary">apply coupon</button>
            </div>
            <div className="total border border-primary rounded p-6 w-full lg:w-[450px]">
              <h2 className="text-2xl font-medium">cart total</h2>
              <div className="space-y-3 divide-y divide-gray-400">
                <div className="subtotal pt-3 text-base font-normal flex justify-between items-center gap-2">
                  <h3>subtotal:</h3>
                  <h3>$ 2200</h3>
                </div>
                <div className="shipping pt-3 text-base font-normal flex justify-between items-center gap-2">
                  <h3>shipping:</h3>
                  <h3>free</h3>
                </div>
                <div className="total pt-3 text-base font-normal flex justify-between items-center gap-2">
                  <h3>total:</h3>
                  <h3>$ 2300</h3>
                </div>
              </div>
              <div className="flex items-center justify-center mt-4">
                <button onClick={handleCheckout} className="btn btn-primary w-fit ">proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Cart);
