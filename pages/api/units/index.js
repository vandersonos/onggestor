import { findUnits } from '../../../lib/units'

export default async function list(req, res) {
    try {
        const units = await findUnits(req.body)
        console.log(units)

        res.status(200).json(units)
    } catch (error) {
        console.error(error)
        res.status(500).end('Oceorreu um erro ao consultar os usuários')
    }
}