import Layout from '../components/Layout'
import '../styles/globals.css'

import {SessionProvider} from "next-auth/react"


function MyApp({ Component, pageProps }) {
  return (
      <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    )
}

MyApp.displayName = 'The game app'
export default MyApp
