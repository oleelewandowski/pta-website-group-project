import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/helpers/database/database-utils";
import { comparePassword } from "@/helpers/auth/auth-utils";

export default NextAuth({
  session: {
    jwt: true,
  },
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        const { email, password } = credentials;

        const user = await usersCollection.findOne({ email });

        if (!user) {
          client.close();
          throw new Error("User not found!");
        }

        const areCredentialsValid = await comparePassword(
          password,
          user.password
        );

        if (!areCredentialsValid) {
          client.close();
          throw new Error(
            "You can not log in! Double check you e-mail and password!"
          );
        }

        client.close();

        return {
          email: user.email,
        };
      },
    }),
  ],
});
