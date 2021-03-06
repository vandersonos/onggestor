import { useRouter } from 'next/router'
import { useUser } from '../../../lib/hooks'
import Layout from '../../../components/layout'
import styles from '../../../styles/Home.module.css'
import Form from '../../../components/form-unit'
import { useEffect, useState } from 'react'
const edit = () => {
    const Router = useRouter()

    const user = useUser({ redirectTo: '/login' })

    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [unit, setUnit] = useState({})
    const getUnits = async () => {
        if (!Router.query.id) {
            return;
        }
        const url = '/api/units/' + Router.query.id
        const u = await fetch(url)
        if (u.ok) {
            const data = await u.json();
            setUnit(data)
        } else {
            const e = await u.text();
            setErrorMsg(e);
        }
    }

    useEffect(() => {
        getUnits();

    }, [Router.query])
    async function handleSubmit(e) {
        e.preventDefault()

        if (errorMsg) setErrorMsg('')

        const body = {
            id: e.currentTarget.id.value,
            uf: e.currentTarget.uf.value,
            city: e.currentTarget.city.value,
            addres: e.currentTarget.addres.value,
            district: e.currentTarget.district.value,
            cep: e.currentTarget.cep.value,
            email: e.currentTarget.email.value,
            phone: e.currentTarget.phone.value,
            url_img: e.currentTarget.url_img.value
        }

        try {
            const res = await fetch('/api/units/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                console.log(res);
                setSuccessMsg('Unidade atualizada com sucesso!')
                setErrorMsg('')
                setTimeout(() => {
                    setSuccessMsg('')

                    Router.push('/');
                }, 3000);
            } else {
                throw await res.text()
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            setSuccessMsg('')
            setErrorMsg(error.message)
        }
    }
    return (
        <Layout user={user}>
            <h3>Cadastro de unidade</h3>
            <div className={styles.main}>
                <div className="row mt-5 w-100">
                    <Form isLogin={false} errorMessage={errorMsg} successMessage={successMsg} onSubmit={handleSubmit} unit={unit} />
                </div>
            </div>


            <style jsx>{`
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
        </Layout>
    )
}

export default edit