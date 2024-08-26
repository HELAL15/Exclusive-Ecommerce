import { memo } from "react";
import ContactForm from "../components/Contact/ContactForm";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import BreadCrumb from "../components/global/BreadCrumb";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="mt-0 pt-0">
      <BreadCrumb/>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 md:items-stretch gap-[30px] ">
          <div className="py-8 px-5 col-span-12 md:col-span-3 rounded shadow-shadow space-y-8 divide-y divide-slate-300">
            <div className="  space-y-4">
              <div className=" flex gap-4 items-center ">
                <span className="w-[40px] h-[40px] bg-accent text-white rounded-full grid place-items-center">
                  <LuPhone />
                </span>
                <p className="font-medium">Call To Us</p>
              </div>
              <p className="text-sm ">
                We are available 24/7, 7 days a week.
              </p>
              <Link to={`tel:+201222810589`} className="block text-sm ">Phone : +8801611112222</Link>
            </div>
            <div className="space-y-4 pt-8">
              <div className=" flex gap-4 items-center">
                <span className="w-[40px] h-[40px] rounded-full bg-accent text-white grid place-items-center">
                  <MdOutlineMailOutline />
                </span>
                <p className="font-medium">Write To Us</p>
              </div>
              <p className="text-sm ">
                  Fill out our form and we will contact you within 24 hours.
              </p>
              <Link to={`mailto:1ahmedhelal1@gmail.com`} className="block text-sm ">Emails: customer@exclusive.com</Link>
              <Link to={`mailto:1ahmedhelal1@gmail.com`} className="block text-sm ">Emails: customer@exclusive.com</Link>
            </div>
          </div>
          <div className="py-8 px-4 lg:px-8 col-span-12 md:col-span-9 rounded shadow-shadow ">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
export default memo(Contact);
