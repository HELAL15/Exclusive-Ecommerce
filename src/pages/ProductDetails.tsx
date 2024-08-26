import { FC, memo, useState } from "react";
import main from '../assets/main-product.png';
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import { Rate } from "antd";
import { FaRegHeart } from "react-icons/fa";
import SecTitle from "../components/global/SecTitle";
import ProductCard from "../components/global/ProductCard";
import BreadCrumb from "../components/global/BreadCrumb";

/**
 * ==> props interface
 */
interface IProps {}

/**
 * ==> Component
 */
const ProductDetails: FC<IProps> = () => {
  const [color, setColor] = useState<string>('#A0BCE0');
  const [size, setSize] = useState<string>('m');
  const sizes = ['xs', 's', 'm', 'l', 'xl'];
  const colors = [
    { name: 'Blue', value: '#A0BCE0' },
    { name: 'Red', value: '#E07575' },
  ];

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value);
  };

  const [amount, setAmount] = useState<number>(1);
  const maxAmount = amount >= 10 ? true :false
  const counter = {
    decrement: () => {
      if (amount <= 1) {
        return;
      }
      setAmount((prevAmount) => prevAmount - 1);
    },
    increment: () => {
      if (maxAmount) {
        return;
      }
      setAmount((prevAmount) => prevAmount + 1);
    }
  };
  



  return (
    <>
      <section className="pt-0">
        <BreadCrumb/>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 md:gap-8">
            <div className="col-span-12 md:col-span-7 grid grid-cols-12 gap-y-6 md:gap-6">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-y-4 gap-x-4 md:gap-4 col-span-12 md:col-span-3 order-2 md:order-1">
                {[p1, p2, p3, p4].map((imgSrc, index) => (
                  <div key={index} className="bg-light grid place-items-center p-4 rounded">
                    <img src={imgSrc} alt="" className="w-[100px] h-[100px] object-contain" />
                  </div>
                ))}
              </div>
              <div className="bg-light rounded col-span-12 md:col-span-9 grid place-items-center p-4 order-1 md:order-2">
                <img src={main} alt="Product Main" className=" object-contain" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 space-y-3 divide-y divide-slate-300 lg:px-8 xl:px-12">
              <div className="space-y-3 pb-5">
                <h3 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h3>
                <div className="divide divide-x divide-slate-300 flex items-center flex-wrap gap-1 md:gap-2">
                  <div className="rate flex items-center gap-1 md:gap-2">
                    <Rate disabled value={4} />
                    <span className="text-slate-400 text-sm font-normal" >(150 reviews)</span>
                  </div>
                  <div className="text-green text-sm font-medium pl-1 md:pl-2">in stock</div>
                </div>
                <p className="text-2xl font-normal">$ 192.00</p>
                <p className="text-sm font-normal">
                  PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                </p>
              </div>
              <div className="space-y-5 pt-5">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-normal">Colours:</span>
                  <div className="flex items-center gap-2">
                    {colors.map((colorOption) => (
                      <label key={colorOption.value} className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          value={colorOption.value}
                          checked={color === colorOption.value}
                          onChange={handleColorChange}
                          className="sr-only peer"
                        />
                        <span
                          className={`w-5 h-5 block bg-[${colorOption.value}] peer-checked:border-2 peer-checked:border-primary-white peer-checked:outline-primary peer-checked:outline peer-checked:outline-2  rounded-full`}
                          
                        ></span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-normal">Size:</span>
                  <div className="flex items-center gap-4">
                    {sizes.map((sizeOption) => (
                      <label key={sizeOption} className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          value={sizeOption}
                          checked={size === sizeOption}
                          onChange={handleSizeChange}
                          className="sr-only peer"
                        />
                        <span className="aspect-square w-8 h-8 grid place-items-center rounded border border-slate-400 text-sm font-medium duration-300 hover:bg-accent hover:text-primary-white hover:border-transparent peer-checked:bg-accent peer-checked:text-primary-white peer-checked:border-transparent">
                          {sizeOption}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-4">
                  <div className="amount text-2xl h-[44px] overflow-hidden items-center w-full xl:w-[160px] grid grid-cols-4 rounded border border-slate-300">
                    <button disabled={amount === 1} onClick={counter.decrement} className="text-center disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:hover:text-primary disabled:cursor-not-allowed h-full duration-300 hover:bg-accent hover:text-primary-white border-r border-r-slate-300">-</button>
                    <span className="col-span-2 text-center">{amount}</span>
                    <button disabled={maxAmount} onClick={counter.increment} className="text-center disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:hover:text-primary disabled:cursor-not-allowed h-full duration-300 hover:bg-accent hover:text-primary-white border-l border-l-slate-300">+</button>
                  </div>
                  <button className="rounded px-12 flex-grow xl:flex-grow-0 h-[44px] duration-300 bg-accent hover:bg-accent-hover text-primary-white ">buy now</button>
                  <button className="rounded h-[44px] w-[44px] grid place-items-center duration-300 text-xl border hover:border-transparent border-slate-300 hover:bg-accent hover:text-primary-white "><i><FaRegHeart /></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <SecTitle title="Related Items" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(ProductDetails);
