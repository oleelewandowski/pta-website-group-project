import { Fragment } from "react";
import AllArticles from "@/components/articles/all-articles";
import HeaderHome from "@/components/home-page/header-home";
import OurPartners from "@/components/home-page/our-partners";

const HomePage = () => {
  return (
    <Fragment>
      <main>
        <HeaderHome />
        <AllArticles />
        <OurPartners />
      </main>
    </Fragment>
  );
};

export default HomePage;
