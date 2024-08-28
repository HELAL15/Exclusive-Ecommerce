import { FC, memo } from "react";
import BreadCrumb from "../components/global/BreadCrumb";
import SecTitle from "../components/global/SecTitle";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Policy: FC<IProps> = ({  }) => {
  return (
    <>
      <section className="pt-0">
        <BreadCrumb/>
        <div className="container">
          <SecTitle title="privacy policy" subTitle="These privacy policy of Use you should know" />
          <ul className="text-gray-500 space-y-6">
            <li className="pl-10  relative before:absolute before:-left-0 before:top-1/2 before:-translate-y-1/2 before:bg-accent before:rounded-full before:w-[30px] before:h-[30px]">
              <p className="whitespace-pre-line">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, nemo! Dolorum facilis, repellendus eligendi blanditiis incidunt dicta, repudiandae nam, unde distinctio quod sint ex qui at? Ut, totam? Veniam excepturi quas quam nam dolores praesentium quo! Odit accusantium ex reiciendis dolor esse recusandae, non ab possimus! Totam libero fuga eligendi, repudiandae vitae, odio optio pariatur quasi nulla quo in ipsa, qui veritatis magnam veniam consequuntur reprehenderit! Numquam aspernatur illo vero labore, libero explicabo porro ullam cupiditate, iste impedit hic ipsam sunt praesentium dolorem laudantium quos fugit totam natus laborum soluta mollitia nisi? Inventore atque earum natus voluptatum dicta harum rem!
              </p>
            </li>
            <li className="pl-10 relative before:absolute before:-left-0 before:top-1/2 before:-translate-y-1/2 before:bg-accent before:rounded-full before:w-[30px] before:h-[30px]">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, nemo! Dolorum facilis, repellendus eligendi blanditiis incidunt dicta, repudiandae nam, unde distinctio quod sint ex qui at? Ut, totam? Veniam excepturi quas quam nam dolores praesentium quo! Odit accusantium ex reiciendis dolor esse recusandae, non ab possimus! Totam libero fuga eligendi, repudiandae vitae, odio optio pariatur quasi nulla quo in ipsa, qui veritatis magnam veniam consequuntur reprehenderit! Numquam aspernatur illo vero labore, libero explicabo porro ullam cupiditate, iste impedit hic ipsam sunt praesentium dolorem laudantium quos fugit totam natus laborum soluta mollitia nisi? Inventore atque earum natus voluptatum dicta harum rem!</p>
            </li>
            <li className="pl-10 relative before:absolute before:-left-0 before:top-1/2 before:-translate-y-1/2 before:bg-accent before:rounded-full before:w-[30px] before:h-[30px]">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, nemo! Dolorum facilis, repellendus eligendi blanditiis incidunt dicta, repudiandae nam, unde distinctio quod sint ex qui at? Ut, totam? Veniam excepturi quas quam nam dolores praesentium quo! Odit accusantium ex reiciendis dolor esse recusandae, non ab possimus! Totam libero fuga eligendi, repudiandae vitae, odio optio pariatur quasi nulla quo in ipsa, qui veritatis magnam veniam consequuntur reprehenderit! Numquam aspernatur illo vero labore, libero explicabo porro ullam cupiditate, iste impedit hic ipsam sunt praesentium dolorem laudantium quos fugit totam natus laborum soluta mollitia nisi? Inventore atque earum natus voluptatum dicta harum rem!</p>
            </li>
            <li className="pl-10 relative before:absolute before:-left-0 before:top-1/2 before:-translate-y-1/2 before:bg-accent before:rounded-full before:w-[30px] before:h-[30px]">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, nemo! Dolorum facilis, repellendus eligendi blanditiis incidunt dicta, repudiandae nam, unde distinctio quod sint ex qui at? Ut, totam? Veniam excepturi quas quam nam dolores praesentium quo! Odit accusantium ex reiciendis dolor esse recusandae, non ab possimus! Totam libero fuga eligendi, repudiandae vitae, odio optio pariatur quasi nulla quo in ipsa, qui veritatis magnam veniam consequuntur reprehenderit! Numquam aspernatur illo vero labore, libero explicabo porro ullam cupiditate, iste impedit hic ipsam sunt praesentium dolorem laudantium quos fugit totam natus laborum soluta mollitia nisi? Inventore atque earum natus voluptatum dicta harum rem!</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default memo(Policy);