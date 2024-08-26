import { Breadcrumb } from "antd";
import { FC, memo } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const BreadCrumb: FC<IProps> = ({  }) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const isCurrentPage = index === pathSnippets.length - 1;
    return {
      title: isCurrentPage ? pathSnippets[index] : <Link to={url}>{pathSnippets[index]}</Link>,
    };
  });
  return (
    <section>
      <div className="container">
        <Breadcrumb items={[{ title: <Link to="/">home</Link> }, ...breadcrumbItems]} />
      </div>
    </section>
  );
}

export default memo(BreadCrumb);