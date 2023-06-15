import React, { useState, useEffect, Fragment } from "react";
import { useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import styles from "./manage-article-form.module.css";
import { pendingToast } from "@/helpers/toast/toaster-utils";

const ManageArticleForm = ({ onCreate, onEdit, article }) => {
  const { t } = useTranslation("panel-manage");
  const [isFeatured, setIsFeatured] = useState(false);
  const [fetchedArticle, setFetchedArticle] = useState({});
  const [isTranslated, setIsTranslated] = useState(
    fetchedArticle?.isTranslated || false
  );

  const formRef = useRef();
  const titleRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const snippetRef = useRef();
  const dateRef = useRef();
  const isFeaturedRef = useRef();
  const isTranslatedRef = useRef();
  const titleENRef = useRef();
  const descriptionENRef = useRef();
  const snippetENRef = useRef();

  const initialInsert = (article) => {
    titleRef.current.value = article.translations["pl"].title;
    imageRef.current.value = article.image;
    descriptionRef.current.value = article.translations["pl"].description;
    snippetRef.current.value = article.translations["pl"].snippet;
    dateRef.current.value = article.date;
    isFeaturedRef.current.checked = isFeatured;
    isTranslatedRef.current.checked = isTranslated;
  };

  const initialInsertTranslations = (article) => {
    titleENRef.current.value = article.translations["en"].title;
    descriptionENRef.current.value = article.translations["en"].description;
    snippetENRef.current.value = article.translations["en"].snippet;
  };

  const handleIsFeaturedCheckbox = (e) => {
    setIsFeatured(e.target.checked);
  };

  const handleIsTranslatedCheckbox = (e) => {
    setIsTranslated(e.target.checked);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const notification = pendingToast(t("pendingToast"));

    const inputTitle = titleRef.current.value;
    const inputImage = imageRef.current.value;
    const inputDescription = descriptionRef.current.value;
    const inputSnippet = snippetRef.current.value;
    const inputDate = dateRef.current.value;
    const inputIsFeatured = isFeatured;
    const translationsProvided = isTranslated;
    const titleEN = isTranslated && titleENRef.current?.value;
    const descriptionEN = isTranslated && descriptionENRef.current?.value;
    const snippetEN = isTranslated && snippetENRef.current?.value;

    const inputs = {
      title: inputTitle,
      image: inputImage,
      description: inputDescription,
      snippet: inputSnippet,
      date: inputDate,
      isFeatured: inputIsFeatured,
      isTranslated: translationsProvided,
    };

    if (isTranslated) {
      inputs.translations = {
        title: titleEN,
        description: descriptionEN,
        snippet: snippetEN,
      };
    }

    if (onCreate) {
      onCreate(inputs, notification);
      return;
    }
    if (onEdit) {
      onEdit({ ...inputs, id: article._id }, notification);
      return;
    }
  };

  useEffect(() => {
    if (article) {
      setIsTranslated(article.isTranslated);
      setIsFeatured(article.isFeatured);
      setFetchedArticle(article);
      initialInsert(article);
    }
  }, [article]);

  useEffect(() => {
    isTranslated && fetchedArticle && initialInsertTranslations(fetchedArticle);
  }, [isTranslated]);

  return (
    <form className={styles.form} onSubmit={onSubmit} ref={formRef}>
      <h1> {onCreate ? t("form.createTitle") : t("form.editTitle")}</h1>
      <p>{onCreate ? t("warning") : null}</p>
      <div className={styles.control}>
        <label htmlFor="title">{t("fields.title.title")}</label>
        <p> {t("fields.title.tooltip")} </p>
        <input type="text" id="title" ref={titleRef} spellCheck="true" />
      </div>
      <div className={styles.control}>
        <label htmlFor="image">{t("fields.image.title")}</label>
        <p> {t("fields.image.tooltip")} </p>
        <input type="text" id="image" ref={imageRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="description">{t("fields.description.title")}</label>
        <p> {t("fields.description.tooltip")} </p>
        <textarea
          type="text"
          id="description"
          ref={descriptionRef}
          rows="8"
          spellCheck="true"
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="snippet">{t("fields.snippet.title")}</label>
        <p> {t("fields.snippet.tooltip")} </p>
        <textarea
          type="text"
          id="snippet"
          ref={snippetRef}
          rows="5"
          spellCheck="true"
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="date">{t("fields.date.title")}</label>
        <p> {t("fields.date.tooltip")} </p>
        <input type="text" id="date" ref={dateRef} spellCheck="true" />
      </div>
      <div className={styles.control}>
        <label htmlFor="isFeatured">{t("fields.isFeatured.title")}</label>
        <p> {t("fields.isFeatured.tooltip")} </p>
        <input
          type="checkbox"
          id="isFeatured"
          ref={isFeaturedRef}
          checked={isFeatured}
          onChange={handleIsFeaturedCheckbox}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="isTranslated">{t("fields.isTranslated.title")}</label>
        <p> {t("fields.isTranslated.tooltip")} </p>
        <input
          type="checkbox"
          id="isTranslated"
          ref={isTranslatedRef}
          checked={isTranslated}
          onChange={handleIsTranslatedCheckbox}
        />
      </div>
      {isTranslated && (
        <Fragment>
          <div className={styles.control}>
            <label htmlFor="titleEN">{t("fields.titleEN.title")}</label>
            <p> {t("fields.titleEN.tooltip")} </p>
            <input
              type="text"
              id="titleEN"
              ref={titleENRef}
              spellCheck="true"
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="descriptionEN">
              {t("fields.descriptionEN.title")}
            </label>
            <p> {t("fields.descriptionEN.tooltip")} </p>
            <textarea
              type="text"
              id="descriptionEN"
              ref={descriptionENRef}
              rows="8"
              spellCheck="true"
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="snippetEN">{t("fields.snippetEN.title")}</label>
            <p> {t("fields.snippetEN.tooltip")} </p>
            <textarea
              type="text"
              id="snippetEN"
              ref={snippetENRef}
              rows="5"
              spellCheck="true"
            />
          </div>
        </Fragment>
      )}
      <div className={styles.action}>
        <button>
          {onCreate ? t("form.createTitle") : t("form.editTitle")}
        </button>
      </div>
    </form>
  );
};

export default ManageArticleForm;
