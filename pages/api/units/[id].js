import { findUnit } from '../../../lib/units'

export default async function list(req, res) {
    try {
        console.log(req.query)
        const units = await findUnit(req.query.id)

        res.status(200).json(units)
    } catch (error) {
        console.error(error)
        res.status(500).end('Ocorreu um erro ao consultar as unidades')
    }
}