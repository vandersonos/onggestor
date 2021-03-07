import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Form from '../components/form-login'
import { useState } from 'react'
const Profile = () => {
    const user = useUser({ redirectTo: '/login' })
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()

        if (errorMsg) setErrorMsg('')

        const body = {
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value,
            email: e.currentTarget.email.value,
            url_img: e.currentTarget.url_img.value,
        }

        if (body.password !== e.currentTarget.rpassword.value) {
            setErrorMsg(`As senhas não conferem`)
            return
        }

        try {
            const res = await fetch('/api/users/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                setSuccessMsg('Usuário atualizado com sucesso!')
                setTimeout(() => {

                    setSuccessMsg('')

                }, 2000);
            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            setErrorMsg(error)
        }
    }
    return (
        <Layout user={user}>
            {user && (
                <div className={styles.main}>
                    <div className="row mt-5 w-100">
                        <Form isLogin={false} errorMessage={errorMsg} successMessage={successMsg} onSubmit={handleSubmit} user={user} />
                    </div>
                </div>
            )}

            <style jsx>{`
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
        </Layout>
    )
}

export default Profile