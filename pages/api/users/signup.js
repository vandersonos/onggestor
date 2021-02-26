import { createUser } from '../../../lib/user'

export default async function signup(req, res) {
    try {
        console.log('signup')
        await createUser(req.body)
        res.status(200).send({ done: true })
    } catch (error) {
        console.error(error)
        res.status(500).end(error.message)
    }
}