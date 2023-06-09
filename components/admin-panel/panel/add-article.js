import useTranslation from "next-translate/useTranslation";
import AdminButton from "@/components/ui/admin-button/admin-button";
import { MdAddCircle } from "react-icons/md";
import { Fragment } from "react";
import { ADMIN_BUTTON_ICON_SIZE } from "@/constants/component-constants";

const AddArticle = () => {
  const { t } = useTranslation("panel");

  const href = "/panel/manage";
  const description = t("add");
  const addIcon = <MdAddCircle size={ADMIN_BUTTON_ICON_SIZE} />;

  return (
    <Fragment>
      <AdminButton href={href} description={description} icon={addIcon} />
    </Fragment>
  );
};

export default AddArticle;
