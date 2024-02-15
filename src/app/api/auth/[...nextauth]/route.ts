/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-param-reassign */

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginUser } from '../../../../../libs/userData';

export const authOptions:NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        if (credentials) {
          const res = await loginUser(credentials);
          const userLogged = res.data;
          // console.log(userLogged.userLogin.name);

          if (userLogged) {
            // console.log('from' ,userLogged);
            const user = {
              id: userLogged.id, name: userLogged.userLogin.name, email: userLogged.userLogin.email, image: userLogged.userLogin.photo,
            };
            return Promise.resolve(user);
          }
        }
        return Promise.resolve(null);
      },
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_URL,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    // jwt: async ({
    //   token, user, trigger, session,
    // }) => {
    //   if (user) {
    //     token.user = user;
    //   }
    //   if (trigger === 'update' && session.name) {
    //     token.name = session.name;
    //   }
    // },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({
      token, user, trigger, session,
    }) {
      if (user) {
        token.user = user;
      }
      if (trigger === "update") {
        // @ts-ignore
        token.user.name = session.name;
        // @ts-ignore
        token.user.image = session.image;

        // console.log(token.user.name , session);
      }
      return token;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
