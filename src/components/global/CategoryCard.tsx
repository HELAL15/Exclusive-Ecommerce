import { FC, memo } from "react";
import { Link } from "react-router-dom";
import computer from '../../assets/Category-Computer.png'

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const CategoryCard: FC<IProps> = ({  }) => {
  return (
    <>
      <Link to={`/categories/1`} className="card block group hover:bg-accent duration-300 hover:text-primary-white rounded-[4px] border border-gray-300 px-2 py-6">
        <div className="card-img">
          <img src={computer} alt="Category" className="w-[56px] h-[56px] object-contain mx-auto rounded-[4px] group-hover:invert " />
        </div>
        <div className="card-body text-center mt-4">
          <h2 className="text-base font-normal">Category</h2>
        </div>
      </Link>
    </>
  );
}

export default memo(CategoryCard);