import { connectToDatabase } from "@/helpers/database/database-utils";
import { validateInputs } from "@/helpers/articles/articles-utils";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "PATCH") {
    const data = req.body;

    const { article } = data;

    const possibleValidationError = await validateInputs(article);

    if (!possibleValidationError.isValid) {
      res.status(422).json({ ...possibleValidationError, ok: false });
      return;
    }

    const client = await connectToDatabase();

    const db = client.db();

    const articlesCollection = db.collection("articles");

    try {
      const dbArticle = await articlesCollection.findOne({
        _id: new ObjectId(article._id),
      });
      dbArticle._id = article._id.toString();
    } catch (error) {
      throw new Error(
        `Something went wrong. Searching product failed! ${error}`
      );
    }

    try {
      const result = await articlesCollection.updateOne(
        {
          _id: new ObjectId(article._id),
        },
        {
          $set: {
            image: article.image,
            date: article.date,
            isTranslated: article.isTranslated,
            translations: {
              pl: {
                title: article.title,
                description: article.description,
                snippet: article.snippet,
              },
              en: {
                title: !!article.translations?.title
                  ? article.translations.title
                  : "English title not provided. Available only in Polish.",
                description: !!article.translations?.description
                  ? article.translations.description
                  : "English description not provided. Available only in Polish.",
                snippet: !!article.translations?.snippet
                  ? article.translations.snippet
                  : "English snippet not provided. Available only in Polish.",
              },
            },
            isFeatured: article.isFeatured,
          },
        }
      );
    } catch (error) {
      res.status(422).json({
        status: 422,
        ok: false,
        message: `Editing product failed! ${error} `,
      });
    }

    client.close();
    res.status(201).json({
      ok: true,
      message: "Successfully edited an article!",
    });
  }
};

export default handler;
