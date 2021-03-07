import { useEffect, useState } from 'react';
import { getUsers, activeUser } from '../lib/hooks.js';
import { Table, Button } from 'react-bootstrap';
const ListUsers = () => {
    const [errorMsg, setErrorMsg] = useState('')
    const [filters, setFilters] = useState({})
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const busca = async (filters) => {
        setLoading(true)
        const data = await getUsers(filters)
        if (data.error) {
            setErrorMsg(data.error)
        }
        setLoading(false)
        setUsers(data.users);
    }
    useEffect(() => {
        busca(filters)
    }, [filters])
    const handleAtivaDesativa = async (e) => {
        const data = await activeUser(e.target.dataset.id)
        if (data.error) {
            setErrorMsg(data.error)
        }
        setUsers([]);
        busca(filters)

    }
    return (
        <>
            <h2>Usuários do sistema</h2>
            {errorMsg && <p className="alert alert-danger">{errorMsg}</p>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Login</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ativo?</th>
                        <th>Ativar/desativar</th>
                    </tr>
                </thead>
                <tbody>


                    {loading && <tr><td colspan='5'> <p className="alert alert-info"><i className="fas fa-spinner fa-spin"> </i>  Carregando...</p></td> </tr>}

                    {
                        users.map((u) => {
                            return (<tr >
                                <td>{u.username}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.status ? 'Sim' : 'Não'}</td>
                                <td>
                                    <Button data-id={u.id} variant="primary" type="button" onClick={handleAtivaDesativa}>{u.status ? 'Desativa' : 'Ativa'}</Button>
                                </td>
                            </tr>)
                        })
                    }


                </tbody>
            </Table>
        </>

    )
}

export default ListUsers