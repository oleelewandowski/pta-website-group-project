import AdminButton from "@/components/ui/admin-button/admin-button";
import { MdAddCircle } from "react-icons/md";
import { Fragment } from "react";
import { ADMIN_BUTTON_ICON_SIZE } from "@/constants/component-constants";

const AddArticle = () => {
  const href = "/panel/manage";
  const addIcon = <MdAddCircle size={ADMIN_BUTTON_ICON_SIZE} />;

  return (
    <Fragment>
      <AdminButton href={href} icon={addIcon} />
    </Fragment>
  );
};

export default AddArticle;
