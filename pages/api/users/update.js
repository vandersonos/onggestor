import { updateUser } from '../../../lib/user'

export default async function update(req, res) {
    try {
        await updateUser(req.body)
        res.status(200).send({ done: true })
    } catch (error) {
        console.error(error)
        res.status(500).end(error.message)
    }
}