import { createUnit, findUnit } from '../../../lib/units'

export default async function create(req, res) {
    try {
        const email = await findUnit({ email: req.body.email })
        if (email) {
            throw 'O E-mail já está cadastrado na base de dados!'
        }
        await createUnit(req.body)
        res.status(200).send({ done: true })
    } catch (error) {
        res.status(500).end(error)
    }
}