import NextAuth, { type DefaultSession } from "next-auth"
import Google from "next-auth/providers/google"

import "next-auth/jwt"


declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: string,
    user: {
      /** The user's postal address. */
      
      
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  // debug: true,
  
  providers: [Google],
  session: { strategy: "jwt" },
  pages:{
    signIn:'/login',
    signOut:'/login'
    
  },
  callbacks: {
    
    // authorized({ request, auth }) {
    //   const { pathname } = request.nextUrl
    //   if (pathname === "/middleware-example") return !!auth
    //   return true
    // },
    jwt({ token, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name
      if (account?.provider === "keycloak") {
        return { ...token, accessToken: account.access_token }
      }
      return token
    },
    // async session({ session, token }) {
    //   if (token?.accessToken) {
    //     session.accessToken = token.accessToken
    //   }
    //   return session
    // },
    session({ session, token, user }) {
      // `session.user.address` is now a valid property, and will be type-checked
      // in places like `useSession().data.user` or `auth().user`
      if (token?.accessToken) {
            session.accessToken = token.accessToken
          }
      return {
        ...session,
        user: {
          ...session.user,
          
        },
      }
    },
    async signIn({profile,user}){
       const email=profile?.email; 
       const profile_picture=profile?.picture;
       const data=JSON.stringify({
        email:email,
        picture:profile_picture,
        firstName:profile?.given_name,
        lastName:profile?.family_name,
       })
        console.log(data)
       
       try{
            const res= await fetch(`${process.env.BACKEND_URL}/api/login`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body : data  })
            console.log(res.json())

        }catch(e){
          console.log(e)
          return false;
          
        }
      
       return true;
    }
  }
}
)

// declare module "next-auth" {
//   interface Session {
//     accessToken?: string
//   }
// }

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
}