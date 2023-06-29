import { connectToDatabase } from "@/helpers/database/database-utils";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "DELETE") {
    const { articleId } = req.query;

    const client = await connectToDatabase();

    const db = client.db();

    const articlesCollection = db.collection("articles");

    let articleToDelete;

    try {
      articleToDelete = await articlesCollection.findOne({
        _id: new ObjectId(articleId),
      });
    } catch (error) {
      throw new Error(
        `Something went wrong with deletion given article... ${error}`
      );
    }

    try {
      const result = await articlesCollection.deleteOne({
        _id: articleToDelete._id,
      });
      console.log(result);
    } catch (error) {
      throw new Error(
        `Something went wrong with deletion given article... ${error}`
      );
    }

    client.close();

    res.status(201).json({
      ok: true,
      message: "Successfully deleted an article!",
    });
  }
};

export default handler;
