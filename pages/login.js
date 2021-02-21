import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Form from '../components/form-login.js'
export default Login = () => {
  useUser({ redirectTo: '/', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        Router.push('/')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
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
          <div className={styles.containerHead}>

            <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />

          </div>
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
        <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
      </div >   </Layout>
  )
}


