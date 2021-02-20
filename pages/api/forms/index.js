const forms = [{
    title: 'formulario 1',
    quests: [{ id: 1, quest: 'pergunta 1', alternatives: [], type: 'text' },
    {
        id: 2, quest: 'pergunta 2', alternatives: [
            { id: 1, text: 'opção 1' },
            { id: 2, text: 'opção 2' }
        ], type: 'multiple'
    },
    { id: 3, quest: 'pergunta 3', alternatives: [], type: 'text' }
    ]
}];

export default function handler(req, res) {
    // Get data from your database
    res.status(200).json(forms)
}