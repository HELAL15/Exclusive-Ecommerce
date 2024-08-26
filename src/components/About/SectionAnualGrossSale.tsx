import { BsShopWindow } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { PiBackpackLight } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";

export default function SectionAnualGrossSale() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          <div
            className=" py-8 px-4 md:px-6 border border-slate-300 rounded
            cursor-pointer hover:bg-accent hover:border-transparent hover:shadow-[0px_2px_10px_2px_#00000033] hover:text-white transition-all duration-300 group"
          >
            <div className="text-center flex justify-center flex-col h-full items-center gap-[24px]">
              <div className="rounded-full bg-primary text-primary-white border-gray-300 group-hover:border-opacity-20  group-hover:bg-primary-white group-hover:text-primary border-8 h-[65px] w-[65px] grid place-items-center duration-300">
                <BsShopWindow className="text-[30px] font-extrabold" />
              </div>
              <h3 className="text-[32px] font-bold leading-3">10.5k</h3>
              <p className="font-normal text-[rgba(0, 0, 0, 1)]">
                Sallers active our site
              </p>
            </div>
          </div>
          <div
            className=" py-8 px-4 md:px-6 border border-slate-300 rounded
          cursor-pointer hover:bg-accent hover:border-transparent hover:shadow-[0px_2px_10px_2px_#00000033] hover:text-white transition-all duration-300 group"
          >
            <div className="text-center flex justify-center flex-col h-full items-center gap-[24px]">
              <div className="rounded-full bg-primary text-primary-white border-gray-300 group-hover:border-opacity-20  group-hover:bg-primary-white group-hover:text-primary border-8 h-[65px] w-[65px] grid place-items-center duration-300">
                <HiOutlineCurrencyDollar className="text-[30px] font-extrabold" />
              </div>
              <h3 className="text-[32px] font-bold leading-3">33k</h3>
              <p className="font-normal text-[rgba(0, 0, 0, 1)]">
                Mopnthly Produduct Sale
              </p>
            </div>
          </div>
          <div
            className=" py-8 px-4 md:px-6 border border-slate-300 rounded
            cursor-pointer hover:bg-accent hover:border-transparent hover:shadow-[0px_2px_10px_2px_#00000033] hover:text-white transition-all duration-300 group
          "
          >
            <div className="text-center flex justify-center flex-col h-full items-center gap-[24px]">
              <div className="rounded-full bg-primary text-primary-white border-gray-300 group-hover:border-opacity-20  group-hover:bg-primary-white group-hover:text-primary border-8 h-[65px] w-[65px] grid place-items-center duration-300">
                <PiBackpackLight className="text-[30px] font-extrabold" />
              </div>
              <h3 className="text-[32px] font-bold leading-3">45.5k</h3>
              <p className="font-normal text-[rgba(0, 0, 0, 1)]">
                Customer active in our site
              </p>
            </div>
          </div>
          <div
            className=" py-8 px-4 md:px-6 border border-slate-300 rounded
            cursor-pointer hover:bg-accent hover:border-transparent hover:shadow-[0px_2px_10px_2px_#00000033] hover:text-white transition-all duration-300 group"
          >
            <div className="text-center flex justify-center flex-col h-full items-center gap-[24px]">
              <div className="rounded-full bg-primary text-primary-white border-gray-300 group-hover:border-opacity-20  group-hover:bg-primary-white group-hover:text-primary border-8 h-[65px] w-[65px] grid place-items-center duration-300">
                <TbMoneybag className="text-[30px] font-extrabold" />
              </div>
              <h3 className="text-[32px] font-bold leading-3">25k</h3>
              <p className="font-normal text-[rgba(0, 0, 0, 1)]">
                Anual gross sale in our site
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
