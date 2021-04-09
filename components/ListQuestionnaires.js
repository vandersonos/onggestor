import { useEffect, useState } from 'react';
import Router from 'next/router'
import { getQuestionnaires } from '../lib/hooks.js';
import Quiz from './Quiz.js';
import { Button } from 'react-bootstrap';
const ListQuestionnaires = () => {
    const [errorMsg, setErrorMsg] = useState('')
    const [filters, setFilters] = useState({})
    const [questionnaires, setQuestionnaires] = useState([])
    const [loading, setLoading] = useState(true)
    const busca = async (filters) => {
        setLoading(true)
        const data = await getQuestionnaires(filters)
        if (data.error) {
            setErrorMsg(data.error)
        }
        console.log(data, 'data')
        setLoading(false)
        setQuestionnaires(data.questionnaires);
    }
    useEffect(() => {
        busca(filters)
    }, [filters])

    return (
        <>

            {errorMsg && <p className="alert alert-danger">{errorMsg}</p>}
            <h3>Questionarios</h3>
            <div className='toolbar'>

                <Button variant="primary" type="button" onClick={() => Router.push('/questionnaires/create')}>+</Button>
            </div>
            <hr />
            <div className='list-questionnaires'>
                {loading && <p className="alert alert-info"><i className="fas fa-spinner fa-spin"> </i>  Carregando...</p>}

                {
                    questionnaires.map((u) => {
                        return <div>teste p</div>
                    })
                }
            </div>
            <style jsx>{`
            .toolbar{
                margin-bottom:10px;
                margin-top:10px;
            }
            .list-questionnaires{
                padding:10px;
                display:flex;
            }
            `}</style>
        </>

    )
}

export default ListQuestionnaires