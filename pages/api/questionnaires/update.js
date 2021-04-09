
import { updateQuestionnaires } from '../../../lib/questionnaires'

export default async function update(req, res) {
    try {
        console.log(req.body);
        await updateQuestionnaires(req.body)
        res.status(200).send({ done: true })
    } catch (error) {
        console.error(error)
        res.status(500).end(error.message)
    }
}