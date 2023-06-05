import { connectToDatabase } from "@/helpers/database/database-utils";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await connectToDatabase();

    const db = client.db();

    console.log(db);
  }
};

export default handler;
