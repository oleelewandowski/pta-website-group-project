import React from "react";
import styles from "./manage-articles-table.module.css";
import useTranslation from "next-translate/useTranslation";
import { useArticles } from "@/hooks/articles";
import { ARTCILE_TYPE_ALL } from "@/constants/api-constants";
import { useRouter } from "next/router";
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "@/components/ui/table/styled-badge";
import { IconButton } from "@/components/ui/table/icon-button";
import { EditIcon } from "@/components/ui/table/edit-icon";
import { DeleteIcon } from "@/components/ui/table/delete-icon";
import Loader from "@/components/ui/loaders/basic-loader";

const OverviewArticlesTable = ({ onEdit, onDelete }) => {
  const { t } = useTranslation("panel-overview");
  const router = useRouter();
  const { locale } = router;
  const { data, isLoading, isFetched } = useArticles(ARTCILE_TYPE_ALL);

  const columns = [
    { name: t("columns.article"), uid: "article" },
    { name: t("columns.snippet"), uid: "snippet" },
    { name: t("columns.highlight"), uid: "highlight" },
    { name: t("columns.actions"), uid: "actions" },
  ];

  const renderArticle = (article, columnKey) => {
    const cellValue = article[columnKey];
    switch (columnKey) {
      case "article":
        return (
          <User
            squared
            src={`/images/articles/${article.image}`}
            name={article.translations[locale].title}
            css={{ p: 0 }}
            size="lg"
            zoomed
          >
            {article.date}
          </User>
        );
      case "snippet":
        return (
          <Col>
            <Row>
              <Text
                b
                size={10}
                css={{
                  tt: "capitalize",
                  width: "auto",
                  minWidth: "100px",
                  maxWidth: "300px",
                  whiteSpace: "break-spaces",
                }}
              >
                {article.translations[locale].snippet}
              </Text>
            </Row>
          </Col>
        );
      case "highlight":
        return (
          <StyledBadge type={article.isFeatured}>
            {article.isFeatured.toString()}
          </StyledBadge>
        );
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content={t("tooltip.edit")}>
                <IconButton onClick={() => onEdit(router, article._id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content={t("tooltip.delete")}
                color="error"
                onClick={() => onDelete(article)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  if (isLoading) return <Loader />;

  if (isFetched) {
    return (
      <div className={styles.overview}>
        <Table
          css={{
            height: "auto",
            maxWidth: "100%",
          }}
          selectionMode="single"
        >
          <Table.Header>
            {columns.map((column) => (
              <Table.Column
                key={column.uid}
                hideHeader={column.uid === "actions"}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </Table.Column>
            ))}
          </Table.Header>
          <Table.Body items={data.articles}>
            {data.articles.map((item) => (
              <Table.Row>
                {(columnKey) => (
                  <Table.Cell>{renderArticle(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Pagination
            size="sm"
            color="default"
            shadow
            align="end"
            rowsPerPage={5}
          />
        </Table>
      </div>
    );
  }
};

export default OverviewArticlesTable;
