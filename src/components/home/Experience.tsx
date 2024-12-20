import { FC, memo } from "react";
import jbl from "../../assets/JBL_BOOMBOX.png"
import { Link } from "react-router-dom";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Experience: FC<IProps> = ({  }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="bg-primary grid grid-cols-1 lg:grid-cols-2 items-center gap-4 px-6 md:px-10 py-6 md:py-2 rounded">
            <div className="content space-y-6">
              <span className="text-sm font-semibold text-green">Categories</span>
              <h2 className="text-white text-xl md:text-[3.3rem] md:leading-[3.5rem] rtl:pl-8 ltr:pr-8 font-bold">Enhance Your Music Experience</h2>
              <div className="flex items-center flex-wrap gap-2 md:gap-4">
                <p className="text-sm font-normal bg-white w-[70px] h-[70px] rounded-full flex items-center flex-col justify-center">
                  <span>24</span>
                  <span>hours</span>
                </p>
                <p className="text-sm font-normal bg-white w-[70px] h-[70px] rounded-full flex items-center flex-col justify-center">
                  <span>05</span>
                  <span>days</span>
                </p>
                <p className="text-sm font-normal bg-white w-[70px] h-[70px] rounded-full flex items-center flex-col justify-center">
                  <span>59</span>
                  <span>minutes</span>
                </p>
                <p className="text-sm font-normal bg-white w-[70px] h-[70px] rounded-full flex items-center flex-col justify-center">
                  <span>35</span>
                  <span>seconds</span>
                </p>
              </div>
              <Link className="btn bg-green text-primary-white block w-fit" to="/">buy now!</Link>
            </div>
            <div className="relative">
              <div className=" absolute inset-0 rounded-full bg-light filter blur-3xl opacity-30 m-10 "></div>
              <img src={jbl} className="aspect-[4/4] object-contain relative z-10" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Experience);