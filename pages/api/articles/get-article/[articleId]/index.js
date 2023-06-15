import { connectToDatabase } from "@/helpers/database/database-utils";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { query } = req;

    const client = await connectToDatabase();

    const db = client.db();

    const collection = db.collection("articles");

    const foundArticle = await collection.findOne({
      _id: new ObjectId(query.articleId),
    });

    if (!foundArticle)
      return res
        .status(422)
        .json({ message: "Fetching article failed!...", status: 422 });

    try {
      res.status(200).json({
        message: " You've fetched articles... ",
        status: 200,
        article: foundArticle,
      });
    } catch (error) {
      res.status(422).json({
        message: `Fetching failed... ${error}`,
        status: 422,
      });
    }

    client.close();
  }
};

export default handler;
