import { Button, Modal, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { DeleteIcon } from "../table/delete-icon";
import useTranslation from "next-translate/useTranslation";

const DeleteArticleModal = ({ closeHandler, visible, article, onDelete }) => {
  const { t } = useTranslation("panel-overview");
  const router = useRouter();
  const { locale } = router;
  return (
    <Modal closeButton open={visible} onClose={closeHandler}>
      <Modal.Header justify="center">
        <DeleteIcon size={60} fill="#FF0080" />
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Text size={15}>
            {t("deleteModal.confirmation")}{" "}
            <Text b size={15}>
              {article.translations[locale].title}
            </Text>
            ?
          </Text>
        </Row>
        <Row>
          <Text size={12}>
            {t("deleteModal.warning.note")}{" "}
            <Text b color="error" size={13}>
              {t("deleteModal.warning.irreversible")}
            </Text>
            .
          </Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="primary" onPress={closeHandler}>
          {t("deleteModal.buttons.close")}
        </Button>
        <Button auto color="error" onPress={onDelete}>
          {t("deleteModal.buttons.confirm")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteArticleModal;
