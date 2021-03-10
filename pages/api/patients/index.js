import { getLoginSession } from '../../../lib/auth'
import { findPatients } from '../../../lib/patients'

export default async function list(req, res) {
    try {
        const users = await findPatients(req.body)


        res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.status(500).end('Oceorreu um erro ao consultar os pacientes')
    }
}