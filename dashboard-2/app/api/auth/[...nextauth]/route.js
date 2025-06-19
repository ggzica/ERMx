import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "backend",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:5500/api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const dataJson = await res.json();
        const data = dataJson.data;
        if (!res.ok || !data.token)
          throw new Error(data.error?.message || "Login Failed");
        return {
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          token: data.token,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.token;
        token.id = user._id;
        token.name = user.name;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.jwt = token.jwt;
      session.user.name = `${token.firstName} ${token.lastName}`;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      return session;
    },
  },
  paged: {
    signIn: "/login",
  },
  secret: "12345",
});

export { handler as GET, handler as POST };
