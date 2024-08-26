import { FC, memo } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroCard from "./HeroCard";
import { Link } from "react-router-dom";



/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Hero: FC<IProps> = ({  }) => {
  


  return (
    <>
      <section className="py-0 mb-4">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className=" hidden lg:flex lg:col-span-3 border-r border-r-slate-300 pt-10 flex-col gap-4">

              <Link to={'/'} className="text-base font-medium" >Woman’s Fashion</Link>
              <Link to={'/'} className="text-base font-medium" >Men’s Fashion</Link>
              <Link to={'/'} className="text-base font-medium" >Electronics</Link>
              <Link to={'/'} className="text-base font-medium" >Home & Lifestyle</Link>
              <Link to={'/'} className="text-base font-medium" >Medicine</Link>
              <Link to={'/'} className="text-base font-medium" >Sports & Outdoor</Link>
              <Link to={'/'} className="text-base font-medium" >Baby’s & Toys</Link>
              <Link to={'/'} className="text-base font-medium" >Groceries & Pets</Link>
              <Link to={'/'} className="text-base font-medium" >Health & Beauty</Link>
            </div>
            <div className="bg-primary col-span-12 lg:col-span-9 rounded px-4 lg:ml-8 py-8 mt-10">
              <Swiper
                  modules={[Autoplay , Pagination]}
                  slidesPerView={1}
                  spaceBetween={15}
                  pagination
                  loop={true}
                  autoplay={{
                    delay: 7000, 
                    disableOnInteraction: false, 
                  }}

                >
                  <SwiperSlide>
                    <HeroCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <HeroCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <HeroCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <HeroCard/>
                  </SwiperSlide>


                </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Hero);