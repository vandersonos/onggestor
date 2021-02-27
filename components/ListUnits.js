import { useEffect, useState } from 'react';
import Router from 'next/router'
import { getUnits, activeUnit } from '../lib/hooks.js';
import Unit from './Unit.js';
import { Button } from 'react-bootstrap';
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
            <h3>Unidades</h3>
            <div className='toolbar'>

                <Button variant="primary" type="button" onClick={() => Router.push('/units/create')}>+</Button>
            </div>
            <hr />
            <div className='list-units'>

                {
                    units.map((u) => {
                        return <Unit city={u.city} addres={u.addres} uf={u.uf} district={u.district} email={u.email} phone={u.phone} id={u.id} />
                    })
                }
            </div>
            <style jsx>{`
            .toolbar{
                margin-bottom:10px;
                margin-top:10px;
            }
            .list-units{
                padding:10px;
                display:flex;
            }
            `}</style>
        </>

    )
}

export default ListUnits