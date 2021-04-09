import { findQuestionnaires } from '../../../lib/questionnaires'

export default async function list(req, res) {
    try {
        const units = await findQuestionnaires(req.body)
        res.status(200).json(units)
    } catch (error) {
        console.error(error)
        res.status(500).end('Oceorreu um erro ao consultar os questionários')
    }
}