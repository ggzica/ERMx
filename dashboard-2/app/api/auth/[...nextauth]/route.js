import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        Credentials({
            name:"backend",
            credentials:{
                email:{label:"Email",type:"email"},
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials){
                const {data, error} = await fetch(
                    "http://localhost:5500/api/auth/signin",
                    {
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify({
                            email:credentials.email,
                            password:credentials.password
                        })
                    }
                )
               console.log(data)

                if (!data?.user || error) 
                    throw new Error(data.error?.message || "Login Failed")
                return {
                    id:data.user._id,
                    name:data.user.name,
                    email:data.user.email,
                    token:data.token
                }
            }
        })
    ],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.jwt = user.token
                token.id = user._id
            }
            return token
        },

        async session({session,token}){
            session.user.id = token.id
            session.jwt = token.jwt
            return session
        }
    },
    paged:{
        signIn:"/login"
    },
    secret:12345
})

export {handler as GET, handler as POST}