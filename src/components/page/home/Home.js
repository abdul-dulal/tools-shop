import React from "react";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import CutomerSummery from "./CustomerSummery";
import FeatureProduct from "./FeatureProduct";
import Newsletter from "./Newsletter";
import PopularCategory from "./PopularCategory";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <PopularCategory />
      <FeatureProduct />
      <Banner />
      <CustomerReview />
      <CutomerSummery />
      <Newsletter />
    </div>
  );
};

export default Home;
