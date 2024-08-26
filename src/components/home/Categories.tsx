import { FC, memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../global/CategoryCard";
import { Autoplay } from "swiper/modules";
import SwiperNav from "../global/SwiperNav";
import SecTitle from "../global/SecTitle";

/**
 * ==> props interface
 */
interface IProps {}

/**
 * ==> Component
 */
const Categories: FC<IProps> = ({}) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <>
      <section>
        <div className="container">
          <div className="flex items-center justify-between gap-2">
            <SecTitle title="Category" subTitle="Browse By Category" />
            <SwiperNav swiper={swiperInstance} />
          </div>
          <Swiper
            onSwiper={setSwiperInstance} // سيتم تعيين الـ swiper هنا
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={15}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              700: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default memo(Categories);
