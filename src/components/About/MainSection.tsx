
import main from '../../assets/about/main.png'


export default function MainSection() {
  // container w-full md:pl-8 lg:pl-32 xl:pl-40 lg:pr-4 xl:pr-10  space-y-5
  return (
    <section className="pt-0">
      <div className="">
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
            <div className="container w-full rtl:md:pr-8 rtl:lg:pr-32 rtl:xl:pr-40 rtl:lg:pl-4 rtl:xl:pl-10 ltr:md:pl-8 ltr:lg:pl-32 ltr:xl:pl-40 ltr:lg:pr-4 ltr:xl:pr-10  space-y-5">
              <h2 className="text-[54px] font-semibold font-inter  tracking-wider">
                Our Story
              </h2>
              <p className=" text-base font-normal">
                Launced in 2015, Exclusive is South Asia’s premier online shopping
                makterplace with an active presense in Bangladesh. Supported by
                wide range of tailored marketing, data and service solutions,
                Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
                customers across the region.
              </p>
              <p className=" text-base font-normal">
                Exclusive has more than 1 Million products to offer, growing at a
                very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <img
              src={main}
              alt="imageAbout"
              className="aspect-[10/9] w-full object-cover"
            />
        </div>
      </div>
    </section>
  )
}
