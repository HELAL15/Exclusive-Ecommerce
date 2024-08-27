import { FC, memo } from "react";
import BreadCrumb from "../components/global/BreadCrumb";
import ProductCard from "../components/global/ProductCard";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Shop: FC<IProps> = ({  }) => {

  
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
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        </div>
      </section>
    </>
  );
}

export default memo(Shop);