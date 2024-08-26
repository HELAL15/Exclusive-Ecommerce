import { FC, memo } from "react";
import SecTitle from "../global/SecTitle";
import ProductCard from "../global/ProductCard";
import { Link } from "react-router-dom";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const ThisMonth: FC<IProps> = ({  }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex items-center justify-between">
            <SecTitle title="this month" subTitle="Best Selling Products" />
            <Link to={'/shop'} className="px-4 md:px-8 text-sm py-3 rounded-[4px] btn-primary">view all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

export default memo(ThisMonth);