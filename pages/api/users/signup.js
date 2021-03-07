import { createUser, findUser } from '../../../lib/user'

export default async function signup(req, res) {
    try {
        const username = await findUser({ username: req.body.username })
        if (username) {
            throw 'O CPF já está cadastrado na base de dados!'
        }
        const email = await findUser({ email: req.body.email })
        if (email) {
            throw 'O E-mail já está cadastrado na base de dados!'
        }
        await createUser(req.body)
        res.status(200).send({ done: true })
    } catch (error) {
        console.error(error)
        res.status(500).end(error)
    }
}