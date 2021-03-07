import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Router from 'next/router'
import Form from '../components/form-login'
import Head from 'next/head'
import Header from '../components/header'
import { useUser } from '../lib/hooks'
const Login = () => {
  useUser({ redirectTo: '/', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }

    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (res.status === 200) {
        setSuccessMsg('Entrando...')
        setTimeout(() => {
          Router.push('/')
        }, 1000);
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <main className="row main">

        <div className={styles.main}>
          <div className='container'>
            <div className="row mt-5 ">

              <div className="col-10 pt-5">
                <h1 className={styles.title}>Casa Vida</h1>

                <p className={styles.description}>
                  Quando você abraça uma causa a causa abraça você.
            </p>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <img src="/logo.png" alt="Casa Vida Logo" />

              </div>
            </div>
          </div>
          <div className="row mt-5 w-100">

            <Form isLogin errorMessage={errorMsg} successMessage={successMsg} onSubmit={handleSubmit} />

          </div>
        </div>

      </main>

      <footer className="footer">
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
      .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .footer{
          position:relative;
          bottom:0;
        }
    `}</style>
    </>
  )
}
export default Login

