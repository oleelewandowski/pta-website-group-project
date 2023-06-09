import { connectToDatabase } from "@/helpers/database/database-utils";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await connectToDatabase();

    const db = client.db();

    const collection = db.collection("articles");

    const data = await collection.find({ isFeatured: true }).toArray();

    if (!data)
      return res
        .status(422)
        .json({ message: "No artctiles to fetch...", status: 422 });

    try {
      res.status(200).json({
        message: " You've fetched articles... ",
        status: 200,
        articles: data,
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
