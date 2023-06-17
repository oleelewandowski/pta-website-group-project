import { Fragment, useState } from "react";
import OverviewArticlesTable from "@/components/admin-panel/manage-articles-table/manage-articles-table";
import DeleteArticleModal from "@/components/ui/modal/delete-article-modal";

const OverviewArticlesPage = () => {
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState({});

  const moveToEditForm = async (router, articleId) => {
    try {
      router.replace(`/panel/edit/${articleId}`);
    } catch (error) {
      throw new Error("Something went wrong with fetching article...");
    }
  };

  const triggerDelete = (article) => {
    setDisplayDeleteModal(true);
    setArticleToDelete(article);
  };

  const closeHandler = () => setDisplayDeleteModal(false);

  const onDelete = async () => {};

  return (
    <Fragment>
      <OverviewArticlesTable onEdit={moveToEditForm} onDelete={triggerDelete} />
      {displayDeleteModal && (
        <DeleteArticleModal
          closeHandler={closeHandler}
          visible={displayDeleteModal}
          article={articleToDelete}
          onDelete={onDelete}
        />
      )}
    </Fragment>
  );
};

export default OverviewArticlesPage;
