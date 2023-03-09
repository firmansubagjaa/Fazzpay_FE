import React from 'react'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'

let userAccount = null;
let token = null;

export const authOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    Credentials({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const res = await fetch("http:http://localhost:5000/api/v1/auth/login/", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })

        const user = await res.json();
        token = await getToken({ req })

        if (res.ok && user) {
          userAccount = user;
          return user
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt(token, account) {
      console.log("JWT Token User");
      console.log("JWT Token.account");
      if (typeof iser !== typeof undefined) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session(session, token, user) {
      console.log("Session token");
      console.log(token);
      if (userAccount !== null) {
        session.user = userAccount
      } else if (typeof token !== typeof undefined) {
        session.accesToken = token.accessToken
      }
      console.log("session callback returning")
      console.log(session)
      return session;
    },
  },
}

export default NextAuth({

})
