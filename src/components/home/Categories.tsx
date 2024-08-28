import { FC, memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../global/CategoryCard";
import { Autoplay } from "swiper/modules";
import SwiperNav from "../global/SwiperNav";
import SecTitle from "../global/SecTitle";


// imgs
import phone from '../../assets/Category-CellPhone.png'
import computer from '../../assets/Category-Computer.png'
import smartwatch from '../../assets/Category-SmartWatch.png'
import camera from '../../assets/Category-Camera.png'
import headphone from '../../assets/Category-Headphone.png'
import gaming from '../../assets/Category-Gamepad.png'




const categories = [
  {
    id: 1,
    title: "phones",
    img: phone
  },
  {
    id: 2,
    title: "computers",
    img: computer
  },
  {
    id:3,
    title:"smart watch",
    img: smartwatch
  },
  {
    id:4,
    title:"camera",
    img: camera
  },
  {
    id:5,
    title:"headphones",
    img: headphone
  },
  {
    id:6,
    title:"gaming",
    img: gaming
  },
  {
    id:7,
    title:"smart watch",
    img: smartwatch
  },
  {
    id:8,
    title:"camera",
    img: camera
  },
  {
    id:9,
    title:"headphones",
    img: headphone
  },
]




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
      <section className="py-2">
        <div className="container border-y border-gray-300 pt-12 pb-16">
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
            {
              categories.map((category)=>(
                <SwiperSlide key={category.id}>
                  <CategoryCard id={category.id} title={category.title} img={category.img} />
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default memo(Categories);
