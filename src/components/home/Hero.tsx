import { FC, memo } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroCard from "./HeroCard";
import { Link } from "react-router-dom";
import { swiperDir } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { useTranslation } from "react-i18next";



/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Hero: FC<IProps> = ({  }) => {
  
  const {data:cat} = useFetch('categorys?in_home=true')
  const {data:hero} = useFetch('banners?in_home=true')


  


  const categories = cat?.data?.data
  const banners = hero?.data?.data
  

  const {i18n} = useTranslation()

  const lang = i18n.language

  return (
    <>
      <section className="py-0 mb-4">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className=" hidden lg:flex lg:col-span-3 rtl:border-l ltr:border-r border-slate-300 pt-10 flex-col gap-4">
                
              {
                categories?.map((category:any) => (
                  <Link to={`/shop?category=${category.id}`} key={category.id} className="">
                    {category[`title_${lang}`]}
                  </Link>
                ))
              }
            </div>
            <div className="bg-primary col-span-12 lg:col-span-9 rounded px-4 rtl:lg:mr-8 ltr:lg:ml-8 py-8 mt-10">
              <Swiper
                  modules={[Autoplay , Pagination]}
                  slidesPerView={1}
                  spaceBetween={15}
                  pagination
                  dir={swiperDir}
                  loop={true}
                  autoplay={{
                    delay: 7000, 
                    disableOnInteraction: false, 
                  }}

                >
                    {
                    banners?.map((banner:any) => (
                      <SwiperSlide key={banner.id}>
                        <HeroCard
                        link={banner.category_id}
                         catTitle={banner[`category_title_${lang}`]}
                          title={banner[`title_${lang}`]} 
                          img={banner.banner_image}
                           />
                      </SwiperSlide>
                    ))
                  } 



                </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Hero);