import { FC, memo } from "react";
import BreadCrumb from "../components/global/BreadCrumb";
import ProductCard from "../components/global/ProductCard";
import { Pagination } from "antd";
import useFetch from "../hooks/useFetch";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Shop: FC<IProps> = ({  }) => {


  const {data} = useFetch("https://backend.smartvision4p.com/hotel/public/api/rooms")

  console.log(data);
  
  
  return (
    <>
      <section className="pt-0">
        <BreadCrumb/>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
          <div className="mt-16 flex justify-center md:justify-end">
            <Pagination defaultCurrent={1} total={50} />
          </div>
            
        </div>
      </section>
    </>
  );
}

export default memo(Shop);