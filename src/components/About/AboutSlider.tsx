import person1 from "../../assets/about/person-1.webp";
import person2 from "../../assets/about/person-2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function AboutSlider() {
  return (
    <section>
      <div className="container">
        <div className="">
            <Swiper
              loop={true}
              breakpoints={{
                700: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className=" space-y-6 mb-20">
                  <div className="flex justify-center items-end bg-light rounded w-full  h-[350px] pt-6  ">
                    <img src={person2} alt="Man with shirt" loading="lazy" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h2 className=" text-2xl font-medium font-inter tracking-wider">
                      Tom Cruise
                    </h2>
                    <p>Founder & Chairman</p>
                    <div className="flex gap-4 mt-4">
                      <a href="#">
                        <FaTwitter />
                      </a>
                      <a href="#">
                        <FaInstagram />
                      </a>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className=" space-y-6 mb-20">
                  <div className="flex justify-center items-end bg-light rounded w-full  h-[350px] pt-6  ">
                    <img src={person1} alt="Man with Suit" loading="lazy" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h2 className=" text-2xl font-medium font-inter tracking-wider">
                      Tom Hardy
                    </h2>
                    <p>Managing Director</p>
                    <div className="flex gap-4 mt-4">
                      <a href="#">
                        <FaTwitter />
                      </a>
                      <a href="#">
                        <FaInstagram />
                      </a>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className=" space-y-6 mb-20">
                  <div className="flex justify-center items-end bg-light rounded w-full  h-[350px] pt-6  ">
                    <img src={person2} alt="Man with shirt" loading="lazy" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h2 className=" text-2xl font-medium font-inter tracking-wider">
                      Tom Hanks
                    </h2>
                    <p>Founder & Chairman</p>
                    <div className="flex gap-4 mt-4">
                      <a href="#">
                        <FaTwitter />
                      </a>
                      <a href="#">
                        <FaInstagram />
                      </a>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className=" space-y-6 mb-20">
                  <div className="flex justify-center items-end bg-light rounded w-full  h-[350px] pt-6  ">
                    <img src={person1} alt="Man with Suit" loading="lazy" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h2 className=" text-2xl font-medium font-inter tracking-wider">
                      Will Smith
                    </h2>
                    <p>Product Designer</p>
                    <div className="flex gap-4 mt-4">
                      <a href="#">
                        <FaTwitter />
                      </a>
                      <a href="#">
                        <FaInstagram />
                      </a>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
      </div>
    </section>
  );
}
