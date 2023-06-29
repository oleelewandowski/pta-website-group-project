import { Fragment, useState } from "react";
import OverviewArticlesTable from "@/components/admin-panel/manage-articles-table/manage-articles-table";
import DeleteArticleModal from "@/components/ui/modal/delete-article-modal";
import axios from "axios";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

const OverviewArticlesPage = () => {
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState({});
  const router = useRouter();

  const moveToEditForm = async (articleId) => {
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

  const onDelete = async () => {
    try {
      const response = await axios.delete(
        `/api/articles/delete/${articleToDelete?._id}`
      );
    } catch (error) {
      setDisplayDeleteModal(false);
      throw new Error(error);
    }
    setDisplayDeleteModal(false);
    router.reload();
  };

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

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default OverviewArticlesPage;
