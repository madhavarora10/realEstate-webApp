/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginUser } from '../../../../../libs/userData';

export const authOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    // CredentialsProvider({
    //   name: 'signup',
    //   credentials: {
    //     name: { label: 'Username', type: 'text' },
    //     email: { label: 'email', type: 'email' },
    //     password: { label: 'Password', type: 'password' },
    //     passwordConfirm: { label: 'Confirm Password', type: 'password' },
    //   },
    //   async authorize(credentials, req) {
    //     console.log(credentials);
    //     const res = await createUser(JSON.stringify(credentials));
    //     const user = await res.data;
    //     if (res.status === 200 && user) {
    //       return user;
    //     }
    //     return null;
    //   },
    // }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (credentials) {
          const res = await loginUser(credentials);
          const user = res.data;
          console.log(res.status);
          if (res.status === 200) {
            console.log(user);
            return user;
          }
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
