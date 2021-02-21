import Head from 'next/head'
import Header from './header'
import styles from '../styles/Home.module.css'
const Layout = (props) => (
  <>
    <Head>
      <title>With Cookies</title>
    </Head>

    <Header />

    <main className='mb-5'>
      {props.children}
    </main>
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Orggestor - Sua ONG eficiente e transparente.
        </a>
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

export default Layout