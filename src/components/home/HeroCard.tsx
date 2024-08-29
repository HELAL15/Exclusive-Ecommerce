import { FC, memo } from "react";
import hero from "../../assets/hero.png"
import apple from '../../assets/apple.png'
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const HeroCard: FC<IProps> = ({  }) => {
  return (
    <>
      <div className="card grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="content space-y-4 rtl:md:pr-8 rtl:lg:pr-14 ltr:md:pl-8 ltr:lg:pl-14">
          <div className="flex items-center gap-6">
            <img src={apple} alt="" className="w-[40px] h-[40px] object-contain" />
            <span className="text-sm font-semibold text-primary-white">iPhone 14 Series</span>
          </div>
          <h1 className="text-3xl md:text-[3.5rem] md:leading-[4rem] font-semibold text-primary-white max-w-[500px]">Up to 10% off Voucher</h1>
          <Link to={'/'} className="flex items-center gap-3 text-primary-white">
            <span className="underline">shop now</span>
            <i><FaArrowRightLong /></i>
          </Link>
        </div>
        <img src={hero} alt="" />
      </div>
    </>
  );
}

export default memo(HeroCard);