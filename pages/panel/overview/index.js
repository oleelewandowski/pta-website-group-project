import { Fragment } from "react";
import OverviewArticlesTable from "@/components/admin-panel/manage-articles-table/manage-articles-table";
import useTranslation from "next-translate/useTranslation";

const OverviewArticlesPage = () => {
  const { t } = useTranslation("panel-manage");

  const moveToEditForm = async (router, articleId) => {
    try {
      console.log(articleId);
      router.replace(`/panel/edit/${articleId}`);
    } catch (error) {
      throw new Error("Something went wrong with fetching article...");
    }
  };

  const triggerDelete = async (router, articleId) => {
    try {
    } catch (error) {}
  };

  return (
    <Fragment>
      <OverviewArticlesTable onEdit={moveToEditForm} />
    </Fragment>
  );
};

export default OverviewArticlesPage;
