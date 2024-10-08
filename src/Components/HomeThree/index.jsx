import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import FooterOne from "../Layouts/Footers/FooterOne";
import NewsLetterArea from "../HomeOne/NewsLetterArea";
import EssentialFeatures from "./EssentialFeatures";

import DiscoverServices from "./DiscoverServices";
import HistoryArea from "../About/HistoryArea";
import ProjectArea from "./ProjectArea";
import Reviews from "../Review/reviews";
import BrandAreaWid from "../Common/BrandAreaWid";
import HeroCarousel from "./HeroCarousel";

function HomeThree() {
  return (
    <>
      <HeaderThree />
      <main>
      <HeroCarousel />
      <NewsLetterArea />

        <EssentialFeatures />
        <DiscoverServices />
        <HistoryArea />
        <ProjectArea />
        <Reviews />
        <BrandAreaWid />
      </main>
      <FooterOne />
    </>
  );
}

export default HomeThree;