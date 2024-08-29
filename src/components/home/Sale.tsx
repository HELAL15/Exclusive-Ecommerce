import { FC, memo, useState } from "react";
import SecTitle from "../global/SecTitle";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import ProductCard from "../global/ProductCard";
import SwiperNav from "../global/SwiperNav";
import { swiperDir } from "../globalVars";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Sale: FC<IProps> = ({  }) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  return (
    <>
      <section>
        <div className="container">
          <div className="flex items-center justify-between gap-2">
            <SecTitle title="Today’s" subTitle="Flash Sales" />
            <SwiperNav swiper={swiperInstance} />
          </div>
        </div>
        <div className="relative px-4 md:px-0 rtl:md:pr-[30px] rtl:lg:pr-[125px] rtl:xl:pr-[160px] ltr:md:pl-[30px] ltr:lg:pl-[125px] ltr:xl:pl-[160px]">
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={15}
            dir={swiperDir}
            loop={true}
            autoplay={{
              delay: 2500, 
              disableOnInteraction: false, 
            }}
            breakpoints={{
              700: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>


          </Swiper>
        </div>
          <div className="grid place-items-center mt-10 ">
            <Link to={'/shop'} className=" flex px-4 md:px-8 py-3 rounded-[4px] btn-primary">view all products</Link>
        </div>
      </section>
    </>
  );
}

export default memo(Sale);