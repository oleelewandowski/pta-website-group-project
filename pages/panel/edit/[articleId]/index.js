import React, { Fragment } from "react";
import { useRouter } from "next/router";
import ManageArticleForm from "@/components/admin-panel/manage-articles-form/manage-article-form";
import { useArticle } from "@/hooks/articles";

const EditArticlePage = () => {
  const router = useRouter();
  const { query } = router;

  const { data, isLoading, isFetched } = useArticle(query.articleId);

  const onEdit = () => {};

  if (isLoading) return <div></div>;

  return (
    <Fragment>
      <ManageArticleForm onEdit={onEdit} article={data.article} />
    </Fragment>
  );
};

export default EditArticlePage;
