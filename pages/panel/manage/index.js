import ManageArticleForm from "@/components/admin-panel/manage-articles-form/manage-article-form";
import { Fragment } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AddArticlePage = () => {
  const router = useRouter();
  const { locale: activeLocale } = router;

  const onCreate = async (article) => {
    try {
      const response = await axios.post("/api/articles/add", {
        article,
        lang: activeLocale,
      });
    } catch (error) {
      throw new Error(`Error while creating article... ${error}`);
    }
  };

  return (
    <Fragment>
      <ManageArticleForm lang={activeLocale} onCreate={onCreate} />
    </Fragment>
  );
};

export default AddArticlePage;
