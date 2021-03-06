const path = require('path')
const fs = require('fs')
const formidable = require('formidable-serverless')

export const config = {
    api: {
        bodyParser: false
    }
}
async function endpoint(req, res) {
    const destino = path.resolve('./') + '/public/units/';

    if (!fs.existsSync(destino)) {
        fs.mkdirSync(destino, { recursive: true })
    }
    await new Promise(function (resolve, reject) {
        const form = formidable({
            multiples: true
        });
        form.keepExtensions = true;
        form.keepFileName = true;
        form.on("fileBegin", (name, file) => {
            const nome = new Date().getTime() + file.name.substring(file.name.indexOf('.'))
            file.path = path.join(destino, nome);
            file.nome = nome;
        })
        form.parse(req, function (err, fields, files) {
            if (err) return reject(err);
            resolve({ fields, files });
        });
    })
        .then((data) => {
            return res.status(200).json({ ok: true, file: '/units/' + data.files.image.nome })
        })
        .catch((err) => {
            return res.status(500).json({ ok: false, msg: 'Ocorreu um erro ao processar sua imagem!' })
        })

}
export default endpoint