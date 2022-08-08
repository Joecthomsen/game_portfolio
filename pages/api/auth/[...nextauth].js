import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder:"joecthomsen@gmail.com"},
                password: {label: "Password", type: "password"}
            },
            authorize: (credentials) => {

                if(credentials.username === "joecthomsen" && credentials.password === "test"){
                    return {
                        id: 2,
                        name: "Johannes",
                        email: "joecthomsen@gmail.com"
                    }   
                }
                return null
            },
        })
    ],
    callbacks: {
        jwt: async ({token, user}) => {
            if(user) {
                token.id = user.id
            }
            return token
        },
        session: ({session, token}) => {
            if(token){
                session.id = token.id
            }
            return session
        }
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true
    },
})