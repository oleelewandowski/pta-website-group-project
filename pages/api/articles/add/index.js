import { connectToDatabase } from "@/helpers/database/database-utils";
import { validateInputs } from "@/helpers/articles/articles-utils";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { article } = data;

    const possibleValidationError = await validateInputs(article);

    if (!possibleValidationError.isValid) {
      res.status(422).json({ ...possibleValidationError, ok: false });
      return;
    }

    const client = await connectToDatabase();

    const db = client.db();

    const {
      title,
      image,
      description,
      snippet,
      date,
      isFeatured,
      isTranslated,
      translations,
    } = article;

    const newArticle = {
      image,
      date,
      isTranslated,
      translations: {
        pl: {
          title: title,
          description: description,
          snippet: snippet,
        },
        en: {
          title:
            translations && translations.title
              ? translations.title
              : "English title not provided. Available only in Polish.",
          description:
            translations && translations.description
              ? translations.description
              : "English description not provided. Available only in Polish.",
          snippet:
            translations && translations.snippet
              ? translations.snippet
              : "English snippet not provided. Available only in Polish.",
        },
      },
      isFeatured,
    };

    try {
      const result = await db.collection("articles").insertOne(newArticle);
      newArticle._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({
        ok: false,
        message:
          "Article not created! Something went wrong with saving in the database... ",
      });
      return;
    }

    res.status(201).json({
      ok: true,
      message: "Successfully created an article!",
      article: newArticle,
    });

    client.close();
  }
};

export default handler;
