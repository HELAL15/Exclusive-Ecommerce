import { FC, memo } from "react";
import ProductCard from "../global/ProductCard";
import SecTitle from "../global/SecTitle";
import { Link } from "react-router-dom";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const ExploreProducts: FC<IProps> = ({  }) => {
  return (
    <>
    <section>
        <div className="container">
          <div className="flex items-center justify-between">
            <SecTitle title="Our Products" subTitle="Explore Our Products" />
          </div>
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
        <div className="grid place-items-center mt-10 ">
          <Link to={'/shop'} className=" flex px-4 md:px-8 py-3 rounded-[4px] btn-primary">view all products</Link>
        </div>
        </div>
      </section>

    </>
  );
}

export default memo(ExploreProducts);