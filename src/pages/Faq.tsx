import { FC, memo } from "react";
import BreadCrumb from "../components/global/BreadCrumb";
import SecTitle from "../components/global/SecTitle";
import { Collapse, CollapseProps } from "antd";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Faq: FC<IProps> = ({  }) => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eum nobis totam laboriosam eius eos autem voluptate veritatis pariatur unde qui rem sit, exercitationem voluptatem cupiditate reiciendis ut adipisci quam ab! Suscipit fuga praesentium nesciunt, in harum nemo nihil quos consequuntur fugit at, molestiae temporibus dolores natus cum. Sit molestias dicta exercitationem harum necessitatibus quam iure unde error, explicabo vel ea illo quaerat non quasi ex. Totam quo error saepe mollitia autem corporis dolore repellat ab vel quidem, nam laborum voluptatem aspernatur amet, iusto aliquid. Voluptatem, libero esse eius eveniet nihil qui tempora dignissimos quos alias, architecto corporis, debitis quod.</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eum nobis totam laboriosam eius eos autem voluptate veritatis pariatur unde qui rem sit, exercitationem voluptatem cupiditate reiciendis ut adipisci quam ab! Suscipit fuga praesentium nesciunt, in harum nemo nihil quos consequuntur fugit at, molestiae temporibus dolores natus cum. Sit molestias dicta exercitationem harum necessitatibus quam iure unde error, explicabo vel ea illo quaerat non quasi ex. Totam quo error saepe mollitia autem corporis dolore repellat ab vel quidem, nam laborum voluptatem aspernatur amet, iusto aliquid. Voluptatem, libero esse eius eveniet nihil qui tempora dignissimos quos alias, architecto corporis, debitis quod.</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eum nobis totam laboriosam eius eos autem voluptate veritatis pariatur unde qui rem sit, exercitationem voluptatem cupiditate reiciendis ut adipisci quam ab! Suscipit fuga praesentium nesciunt, in harum nemo nihil quos consequuntur fugit at, molestiae temporibus dolores natus cum. Sit molestias dicta exercitationem harum necessitatibus quam iure unde error, explicabo vel ea illo quaerat non quasi ex. Totam quo error saepe mollitia autem corporis dolore repellat ab vel quidem, nam laborum voluptatem aspernatur amet, iusto aliquid. Voluptatem, libero esse eius eveniet nihil qui tempora dignissimos quos alias, architecto corporis, debitis quod.</p>,
    },
  ];
  return (
    <>
      <section className="pt-0">
        <BreadCrumb/>
        <div className="container">
          <SecTitle title="FAQS" subTitle="some faqs about us you may want to know" />
          <Collapse items={items} defaultActiveKey={['1']} />
        </div>
      </section>
    </>
  );
}

export default memo(Faq);