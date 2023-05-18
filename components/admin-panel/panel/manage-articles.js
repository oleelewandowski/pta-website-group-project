import useTranslation from "next-translate/useTranslation";
import AdminButton from "@/components/ui/admin-button/admin-button";
import { MdEdit } from "react-icons/md";
import { Fragment } from "react";
import { ADMIN_BUTTON_ICON_SIZE } from "@/constants/component-constants";

const ManageArticles = () => {
  const { t } = useTranslation("panel");

  const href = "/panel/manage";
  const manageIcon = <MdEdit size={ADMIN_BUTTON_ICON_SIZE} />;
  const description = t("manage");

  return (
    <Fragment>
      <AdminButton href={href} description={description} icon={manageIcon} />
    </Fragment>
  );
};

export default ManageArticles;
