// import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import type { AppProps } from 'next/app'
import Layout from './layout'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>


  )
}

export default MyApp
