import { FC, memo } from "react";
import ProductCard from "../components/global/ProductCard";
import SecTitle from "../components/global/SecTitle";
import { Link } from "react-router-dom";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Wishlist: FC<IProps> = ({  }) => {
  return (
    <>
      <section className="">
        <div className="container">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h3 className="flex items-center gap-2 font-medium">
            <span>wishlist</span>
            <span>(4)</span>
          </h3>
          <button className="rounded px-8 py-2 duration-300 hover:bg-primary hover:text-primary-white border border-primary">move all to bag</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-between gap-4 mb-8">
            <SecTitle title="just for you" />
            <Link to={'/products'} className="rounded px-8 py-2 duration-300 hover:bg-primary hover:text-primary-white border border-primary">view all</Link>
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

export default memo(Wishlist);