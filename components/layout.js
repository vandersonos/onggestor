
import Head from 'next/head'
import { useUser } from '../lib/hooks'
import Header from './header'
const Layout = (props) => {
  const user = useUser({ redirectTo: '/login' })
  return (
    <>
      <Head>
        <title>With Cookies</title>


      </Head>
      <Header />
      <main className="row main">
        {props.children}

      </main>
      <footer className="footer">

      </footer>
      <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      .container {
        max-width: 42rem;
        margin: 0 auto;
        padding: 2rem 1.25rem;
      }
    `}</style>
    </>
  )
}
export default Layout