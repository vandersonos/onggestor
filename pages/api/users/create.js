export default function userHandler(req, res) {
    const {
        query: { id, name },
        method,
    } = req

    if (method == 'POST') {
        res.status(200).json({ id, name: name || `User ${id}` })
    } else {
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)

    }

}