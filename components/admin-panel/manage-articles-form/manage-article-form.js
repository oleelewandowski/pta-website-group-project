import React, { useState, useEffect } from "react";
import { useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import styles from "./manage-article-form.module.css";

const ManageArticleForm = ({ onCreate, onEdit, article }) => {
  const { t } = useTranslation("panel-manage");
  const [isFeatured, setIsFeatured] = useState(false);

  const formRef = useRef();
  const titleRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const snippetRef = useRef();
  const dateRef = useRef();
  const isFeaturedRef = useRef();

  const initialInsert = ({
    title,
    description,
    snippet,
    image,
    date,
    isFeatured,
  }) => {
    titleRef.current.value = title;
    imageRef.current.value = image;
    descriptionRef.current.value = description;
    snippetRef.current.value = snippet;
    dateRef.current.value = date;
    isFeaturedRef.current.value = isFeatured;
  };

  const clearForm = (event) => {
    event.preventDefault();

    formRef.current.reset();
  };

  const handleCheckbox = (e) => {
    setIsFeatured(e.target.checked);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const inputTitle = titleRef.current.value;
    const inputImage = imageRef.current.value;
    const inputDescription = descriptionRef.current.value;
    const inputSnippet = snippetRef.current.value;
    const inputDate = dateRef.current.value;
    const inputIsFeatured = isFeatured;

    const inputs = {
      title: inputTitle,
      image: inputImage,
      description: inputDescription,
      snippet: inputSnippet,
      date: inputDate,
      isFeatured: inputIsFeatured,
    };

    if (onCreate) {
      onCreate(inputs);
      return;
    }
    if (onEdit) {
      onEdit({ ...inputs, id: article._id });
      return;
    }
  };

  useEffect(() => {
    article && initialInsert(article);
  }, [article]);

  return (
    <form className={styles.form} onSubmit={onSubmit} ref={formRef}>
      <h1> {onCreate ? t("form.createTitle") : t("form.editTitle")}</h1>
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
          id="Snippet"
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
          onChange={handleCheckbox}
        />
      </div>
      <div className={styles.action}>
        <button>
          {onCreate ? t("form.createTitle") : t("form.editTitle")}
        </button>
        <button onClick={clearForm}>{t("buttons.clear")}</button>
      </div>
    </form>
  );
};

export default ManageArticleForm;
