import { FC, memo } from "react";
import ThisMonth from "../components/home/ThisMonth";
import ExploreProducts from "../components/home/ExploreProducts";
import NewArrival from "../components/home/NewArrival";
import Experience from "../components/home/Experience";
import Categories from "../components/home/Categories";
import Sale from "../components/home/Sale";
import Hero from "../components/home/Hero";
import Facts from "../components/global/Facts";



/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Home: FC<IProps> = ({  }) => {



  

  return (
    <>
    {/* {
      loading.loading && <div className="fixed top-0 left-0 grid place-items-center w-screen h-screen bg-red-400 z-[9999] " >loading.....</div>
    } */}
    <Hero/>
    <Sale/>
    <Categories/>
    <ThisMonth/>
    <Experience/>
    <ExploreProducts/>
    <NewArrival/>
    <Facts/>
    </>
  );
}

export default memo(Home);