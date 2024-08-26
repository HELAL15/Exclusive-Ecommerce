import { FC, memo, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import bag from "../../assets/bag.png"
import { Rate } from "antd";
import { IoEyeOutline } from "react-icons/io5";

/**
 * ==> props interface
 */
interface IProps {
  fav?:boolean,
}

/**
 * ==> Component
 */
const ProductCard: FC<IProps> = ({ }) => {

  const [isFav , setFav] = useState(false)
  const [inCart , setCart] = useState(false)

  const handleFav = ()=>{
    console.log('fav');
    setFav(!isFav)
  }

  const handleCart = ()=>{
    console.log('fav');
    setCart(!inCart)
  }



  return (
    <>
      <div className="card rounded-[4px] relative group">
        <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
          <button onClick={handleFav} className={`rounded-full w-[32px] h-[32px] grid place-items-center ${isFav ? 'bg-accent text-primary-white' : 'bg-primary-white'} `}><FaRegHeart /></button>
          <Link to={`/product-details/${1}`} onClick={handleCart} className="rounded-full w-[32px] h-[32px] grid place-items-center bg-primary-white"><IoEyeOutline /></Link>
        </div>
        <div className="">
          <div className="card-image relative z-10 bg-light h-[250px] flex items-center justify-center rounded-[4px] overflow-hidden">
            <img src={bag} alt="product" className="object-contain w-[190px] h-[180px]" />
            <button className="btn bg-primary text-primary-white absolute bottom-[-100%] group-hover:bottom-0 duration-300 w-full">
              Add to Cart
            </button>
          </div>
          <div className="card-content mt-3 px-2">
            <h3 className="text-lg font-semibold">Product Name</h3>
            <div className="flex items-center gap-2 my-2">
              <p className="text-sm text-accent">$260</p>
              <p className="text-sm text-gray-400 line-through">$290</p>
            </div>
            <div className="rate flex items-center gap-2">
              <Rate disabled defaultValue={2} />
              <span className="text-gray-400 font-medium">(65)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(ProductCard);