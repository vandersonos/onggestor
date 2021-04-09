import { createQuestionnaires, findQuestionnaires } from '../../../lib/questionnaires'

export default async function create(req, res) {
    try {
        const name = await findQuestionnaires({ name: req.body.name })
        if (name) {
            throw 'Já existe um questionário com esse nome na base de dados!'
        }
        await createQuestionnaires(req.body)
        res.status(200).send({ done: true })
    } catch (error) {
        res.status(500).end(error)
    }
}