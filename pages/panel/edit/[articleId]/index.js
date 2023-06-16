import React, { Fragment } from "react";
import { useRouter } from "next/router";
import ManageArticleForm from "@/components/admin-panel/manage-articles-form/manage-article-form";
import { useArticle } from "@/hooks/articles";
import axios from "axios";
import { errorToast, successToast } from "@/helpers/toast/toaster-utils";
import useTranslation from "next-translate/useTranslation";
import Loader from "@/helpers/loaders/basic-loader";

const EditArticlePage = () => {
  const router = useRouter();
  const { t } = useTranslation("panel-overview");
  const { query } = router;

  const { data, isLoading, isFetched } = useArticle(query.articleId);

  const onEditArticle = async (article, notification) => {
    try {
      const response = await axios.patch("/api/articles/edit", {
        article,
      });
      successToast(notification, t("toast.success"));
      router.replace("/panel/overview");
    } catch (error) {
      errorToast(notification, t("toast.error"));
    }
  };

  if (isLoading) return <Loader />;

  if (isFetched)
    return (
      <Fragment>
        <ManageArticleForm onEdit={onEditArticle} article={data.article} />
      </Fragment>
    );
};

export default EditArticlePage;
