import { useEffect, useState } from 'react';
import Router from 'next/router'
import { getPatients } from '../lib/hooks.js';
import Patients from './Patients.js';
import { Button } from 'react-bootstrap';
const ListPatients = () => {
    const [errorMsg, setErrorMsg] = useState('')
    const [filters, setFilters] = useState({})
    const [patients, setPatients] = useState([])
    const [loading, setLoading] = useState(true)
    const busca = async (filters) => {
        setLoading(true)
        const data = await getPatients(filters)
        if (data.error) {
            setErrorMsg(data.error)
        }
        console.log(data, 'data')
        setLoading(false)
        setPatients(data.patients);
    }
    useEffect(() => {
        busca(filters)
    }, [filters])

    return (
        <>

            {errorMsg && <p className="alert alert-danger">{errorMsg}</p>}
            <h3>Pacientes</h3>
            <div className='toolbar'>

                <Button variant="primary" type="button" onClick={() => Router.push('/patients/create')}>+</Button>
            </div>
            <hr />
            <div className='list-patients'>
                {loading && <p className="alert alert-info"><i className="fas fa-spinner fa-spin"> </i>  Carregando...</p>}

                {
                    patients.map((u) => {
                        return <div>teste p</div>
                    })
                }
            </div>
            <style jsx>{`
            .toolbar{
                margin-bottom:10px;
                margin-top:10px;
            }
            .list-patients{
                padding:10px;
                display:flex;
            }
            `}</style>
        </>

    )
}

export default ListPatients