import ManageArticleForm from "@/components/admin-panel/manage-articles-form/manage-article-form";
import { Fragment } from "react";
import axios from "axios";
import { successToast, errorToast } from "@/helpers/toast/toaster-utils";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const AddArticlePage = () => {
  const { t } = useTranslation("panel-manage");
  const router = useRouter();

  const onCreate = async (article, notification) => {
    try {
      const response = await axios.post("/api/articles/add", {
        article,
      });
      successToast(notification, t("toast.success"));
      router.replace("/panel/overview");
    } catch (error) {
      errorToast(notification, t("toast.error"));
    }
  };

  return (
    <Fragment>
      <ManageArticleForm onCreate={onCreate} />
    </Fragment>
  );
};

export default AddArticlePage;
