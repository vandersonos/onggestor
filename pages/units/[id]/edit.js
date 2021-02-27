import { useUser, findUnits } from '../../../lib/hooks'
import Layout from '../../../components/layout'
import styles from '../../../styles/Home.module.css'
import Form from '../../../components/form-unit'
import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
const create = ({ id }) => {
    const { query } = useRouter()
    const user = useUser({ redirectTo: '/login' })
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [unit, setUnit] = useState({})


    useEffect(() => {

        try {
            const url = '/api/units/' + query.id
            fetch(url)
                .then((r) => {

                    if (r.status === 200) {
                        return r.json()
                    } else {
                        throw r.text()
                    }
                }
                )
                .then((data) => {
                    console.log(data)
                    //setUnit(data)
                })
        } catch (e) {

            setErrorMsg(e);

        }

    }, [unit])
    async function handleSubmit(e) {
        e.preventDefault()

        if (errorMsg) setErrorMsg('')

        const body = {
            id: id,
            uf: e.currentTarget.uf.value,
            city: e.currentTarget.city.value,
            addres: e.currentTarget.addres.value,
            district: e.currentTarget.district.value,
            cep: e.currentTarget.cep.value,
            email: e.currentTarget.email.value,
            phone: e.currentTarget.phone.value
        }

        try {
            const res = await fetch('/api/units/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                setSuccessMsg('Unidade criada com sucesso!')
                setTimeout(() => {
                    setSuccessMsg('')
                    Router.push('/');
                }, 2000);
            } else {
                throw await res.text()
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
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

export default create