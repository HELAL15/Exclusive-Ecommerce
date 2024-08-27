import { FC, memo } from "react";

/**
 * ==> props interface
 */
interface IProps {
  title?:string,
  subTitle?:string
}

/**
 * ==> Component
 */
const SecTitle: FC<IProps> = ({ title , subTitle }) => {
  return (
    <>
      <div className={` ${subTitle ? 'mb-10' : 'mb-8'}  mt-4`}>
        <h2 className="text-sm flex items-center mb-4 text-accent relative pl-8 before:h-8 before:w-4 before:absolute before:left-0 before:rounded-[4px] before:bg-accent font-semibold">{title}</h2>
        {
          subTitle &&
          <p className="font-semibold text-base md:text-2xl">{subTitle}</p>
        }
      </div>
    </>
  );
}

export default memo(SecTitle);