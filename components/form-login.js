import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Form = ({ isLogin, errorMessage, successMessage, onSubmit, user }) => {

    return (
        <div className="border rounded p-3 col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4 col-xxl-3 m-auto">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Usuário</label>

                    {user ? (
                        <input name="login" className="form-control" id="username" defaultValue={user.username} readOnly />
                    ) : (
                            <input name="login" className="form-control" id="username" required />
                        )}
                </div>
                <div className="mb-3">
                    <label htmlFor="inputSenha" className="form-label">Senha</label>
                    <input name="password" type='password' className="form-control" id="inputSenha" required defaultValue={user ? user.password : ''} />
                </div>
                {!isLogin && (
                    <>
                        <div className="mb-3">
                            <label htmlFor='rpassword'>
                                <span>Repita a senha</span>
                            </label>
                            <input type="password" name="rpassword" id="rpassword" className="form-control" required defaultValue="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='email'> Email </label>
                            <input type="email" name="email" className="form-control" id="email" required defaultValue={user ? user.email : ''} />
                        </div>
                    </>
                )}
                <div className={styles.toolbar} >

                    {isLogin ? (
                        <>
                            <Link href="/forgoutpassword">
                                <a >Esqueci a senha</a>
                            </Link>
                            <button type="submit" className="btn btn-primary mb-4 mt-4">Entrar</button>
                            <Link href="/signup">
                                <a>Cadastre-se</a>
                            </Link>
                        </>
                    ) : ("")}
                    {!isLogin && !user ? (
                        <>
                            <Link href="/login">
                                <a>Efetuar login</a>
                            </Link>
                            <button type="submit" className="btn btn-primary mb-4 mt-4">Cadastrar</button>
                        </>
                    ) : ""}
                    {!isLogin && user ? (
                        <>
                            <button type="submit" className="btn btn-primary mb-4 mt-4">Alterar</button>
                        </>
                    ) : ""}

                </div>

                {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
                {successMessage && <p className="alert alert-success">{successMessage}</p>}
            </form>
            <style jsx>{`
            form,
            label {
                display: flex;
                flex-flow: column;
            }
            label > span {
                font-weight: 600;
            }
            input {
                padding: 8px;
                margin: 0.3rem 0 1rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            .submit {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                justify-content: space-between;
            }
            .submit > a {
                text-decoration: none;
            }
            .submit > button {
                padding: 0.5rem 1rem;
                cursor: pointer;
                background: #fff;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            .submit > button:hover {
                border-color: #888;
            }
            .error {
                color: brown;
                margin: 1rem 0 0;
            }
         `}</style>
        </div>

    )
}

export default Form