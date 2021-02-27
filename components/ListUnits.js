import { useEffect, useState } from 'react';
import { getUnits, activeUnit } from '../lib/hooks.js';
import { Table, Button } from 'react-bootstrap';
const ListUnits = () => {
    const [errorMsg, setErrorMsg] = useState('')
    const [filters, setFilters] = useState({})
    const [units, setUnits] = useState([])
    const busca = async (filters) => {
        const data = await getUnits(filters)
        if (data.error) {
            setErrorMsg(data.error)
        }
        setUnits(data.units);
    }
    useEffect(() => {
        busca(filters)
    }, [filters])
    const handleAtivaDesativa = async (e) => {
        const data = await activeUnit(e.target.dataset.id)
        if (data.error) {
            setErrorMsg(data.error)
        }
        setUnits([]);
        busca(filters)

    }
    return (
        <>

            {errorMsg && <p className="alert alert-danger">{errorMsg}</p>}

            {
                units.map((u) => {
                    return (<Unidade city={u.city} endereco={u.endereco} email={u.email} phone={u.phone} id={u.id} />)
                })
            }

        </>

    )
}

export default ListUnits