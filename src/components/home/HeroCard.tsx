import { FC, memo } from "react";
import apple from '../../assets/apple.png'
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

/**
 * ==> Banner Interface
 */
interface IBanner {
  id: string;
  title_en?: string;
  title_ar?: string;
}

/**
 * ==> Props Interface
 */
interface IProps {
  banner?: IBanner; 
  title: string;
  catTitle: string;
  img?:string,
  link?:number
}


/**
 * ==> Component
 */
const HeroCard: FC<IProps> = ({ img , title , catTitle , link }) => {


  const {i18n} = useTranslation()

  const lang = i18n.language
console.log(lang);

  
  return (
    <>
      <div className="card grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="content space-y-4 rtl:md:pr-8 rtl:lg:pr-14 ltr:md:pl-8 ltr:lg:pl-14">
          <div className="flex items-center gap-6">
            <img src={apple} alt="" className="w-[40px] h-[40px] object-contain" />
            <span className="text-sm font-semibold text-primary-white">
              {catTitle}
            </span>
          </div>
          <h1 className="text-3xl md:text-[3.5rem] md:leading-[4rem] font-semibold
           text-primary-white max-w-[500px]">{title} </h1>
          <Link to={`/shop?category=${link}`} className="flex items-center gap-3 text-primary-white">
            <span className="underline">shop now</span>
            <i><FaArrowRightLong /></i>
          </Link>
        </div>
        <img src={img} alt="" className="aspect-square object-cover max-h-80 mx-auto" />
      </div>
    </>
  );
}

export default memo(HeroCard);