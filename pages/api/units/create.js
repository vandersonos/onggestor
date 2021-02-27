import { createUnit, findUnit } from '../../../lib/unit'

export default async function signup(req, res) {
    try {
        console.log('signup')
        const email = await findUnit({ email: req.body.email })
        if (email) {
            throw 'O E-mail já está cadastrado na base de dados!'
        }
        await createUnit(req.body)
        res.status(200).send({ done: true })
    } catch (error) {
        console.error(error)
        res.status(500).end(error)
    }
}