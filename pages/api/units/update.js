import { updateUnit } from '../../../lib/unit'

export default async function update(req, res) {
    try {
        await updateUnit(req.body)
        res.status(200).send({ done: true })
    } catch (error) {
        console.error(error)
        res.status(500).end(error.message)
    }
}