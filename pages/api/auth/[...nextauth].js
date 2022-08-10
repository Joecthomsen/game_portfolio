import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder:"joecthomsen"},
                password: {label: "Password", type: "password"}
            },

            async authorize(credentials){
                if(credentials.username === "joecthomsen" && credentials.password === "test"){
                    return {
                        id: 2,
                        name: "Johannes",
                        email: "joecthomsen@gmail.com"
                    }   
                }
                return null
            }

            // authorize: (credentials) => {

            //     if(credentials.username === "joecthomsen" && credentials.password === "test"){
            //         return {
            //             id: 2,
            //             name: "Johannes",
            //             email: "joecthomsen@gmail.com"
            //         }   
            //     }
            //     return null
            // },
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
        },
        // signIn: (credentials) => {
        //     if(credentials.username === "joecthomsen" && credentials.password === "test"){
        //         return {
        //             id: 2,
        //             name: "Johannes",
        //             email: "joecthomsen@gmail.com"
        //         }   
        //     }
        //     return null
        // }
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true
    },
    // pages: {
    //     signIn: "/signin_custom"
    // }
})


