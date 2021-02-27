import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Router from 'next/router'

import Head from 'next/head'
import Header from '../components/header'
import Form from '../components/form-login'

const Signup = () => {

    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        if (errorMsg) setErrorMsg('')

        const body = {
            username: e.currentTarget.username.value,
            name: e.currentTarget.name.value,
            password: e.currentTarget.password.value,
            email: e.currentTarget.email.value,
        }

        if (body.password !== e.currentTarget.rpassword.value) {
            setErrorMsg(`As senhas não conferem`)
            return
        }

        try {
            const res = await fetch('/api/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                setSuccessMsg('Usuário cadstrado com sucesso! Encaminhando para tela de login...')
                setTimeout(() => {

                    Router.push('/login')
                }, 2000);
            } else {
                throw await res.text()
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            setErrorMsg(error)
        }
    }
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <main className="row main">

                <div className={styles.main}>

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
                    <div className="row mt-5 w-100">

                        <Form isLogin={false} errorMessage={errorMsg} successMessage={successMsg} onSubmit={handleSubmit} user={false} />

                    </div>
                </div>

            </main>
            <footer className="">

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
    `}</style>
        </>
    )
}

export default Signup