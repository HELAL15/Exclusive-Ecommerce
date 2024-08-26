import AboutSlider from "../components/About/AboutSlider";
import MainSection from "../components/About/MainSection";
import SectionAnualGrossSale from "../components/About/SectionAnualGrossSale";

import Facts from "../components/global/Facts";

import BreadCrumb from "../components/global/BreadCrumb";

export default function About() {
  return (
    <>
      <BreadCrumb/>
      <MainSection/>
      <SectionAnualGrossSale/>
      <AboutSlider/>
      <Facts/>

      </>
  );
}
