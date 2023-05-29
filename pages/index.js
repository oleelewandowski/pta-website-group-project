import { Fragment } from "react";
import AllArticles from "@/components/articles/all-articles";
import HeaderHome from "@/components/home-page/header-home";

const HomePage = () => {
  return (
    <Fragment>
      <main>
        <HeaderHome />
        <AllArticles />
      </main>
    </Fragment>
  );
};

export default HomePage;
