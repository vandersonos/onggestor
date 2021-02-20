import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

          <div className={styles.cardLogin}>
            <form>
              <div className="mb-3">
                <label for="inputLogin" className="form-label">Usuário</label>
                <input name="login" className="form-control" id="inputLogin" />
              </div>
              <div className="mb-3">
                <label for="inputSenha" className="form-label">Senha</label>
                <input name="password" type='password' className="form-control" id="inputSenha" />
              </div>
              <div className={styles.toolbar} >
                <a href='/forgoutpassword' className="btn btn-link mb-4" >Esqueci a senha</a>
                <button type="button" className="btn btn-primary mb-4">Entrar</button>
                <a href='/signup' className="btn btn-success ">Cadastre-se</a>
              </div>
            </form>
          </div>

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
    </div >
  )
}
