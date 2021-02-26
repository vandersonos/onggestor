import { activeUser } from '../../../lib/user'

export default async function active(req, res) {
    try {
        await activeUser(req.body)
        res.status(200).json({ ok: true, messageError: null })
    } catch (error) {
        console.error(error)
        res.status(500).json({ ok: false, messageError: error })
    }
}