import { connectToDatabase } from "@/helpers/database/database-utils";
import {
  getAndTranslateArticle,
  validateInputs,
} from "@/helpers/articles/articles-utils";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { article, lang } = data;

    const possibleValidationError = await validateInputs(article);

    if (!possibleValidationError.isValid) {
      res.status(422).json(possibleValidationError);
      return;
    }

    const client = await connectToDatabase();

    const db = client.db();

    const existingArticle = await db.collection("articles").findOne({
      title: article.title,
    });

    if (existingArticle) {
      res.status(422).text({
        message: "Article with this title is already in the database! ",
      });
      client.close();
      return;
    }

    const {
      title,
      image,
      description,
      snippet,
      date,
      isFeatured,
      translations,
    } = article;

    const newArticle = (translatedArticle = {
      image,
      date,
      translations: {
        pl: {
          title: title,
          description: description,
          snippet: snippet,
        },
        en: {
          title: translations ? translations.title : "EN title not provided",
          description: translations
            ? translations.title
            : "EN description not provided.",
          snippet: translations
            ? translations.title
            : "EN snippet not provided.",
        },
      },
      isFeatured,
    });

    try {
      const result = await db.collection("articles").insertOne(newArticle);
      newArticle._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({
        message:
          "Article not created! Something went wrong with saving in the database... ",
      });
      return;
    }

    res.status(201).json({
      status: "Successfully created an article!",
    });

    client.close();
  }
};

export default handler;
