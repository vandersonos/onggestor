import { findQuestions } from '../../../lib/question'

export default async function list(req, res) {
    try {
        const units = await findQuestions(req.body)
        res.status(200).json(units)
    } catch (error) {
        console.error(error)
        res.status(500).end('Oceorreu um erro ao consultar os questões')
    }
}