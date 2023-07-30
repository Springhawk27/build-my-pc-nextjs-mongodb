import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
  ],
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
