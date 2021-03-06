const path = require('path')
const slugfile = require('slugify')
const formidable = require('formidable-serverless')
export const config = {
    api: {
        bodyParse: false
    }
}
export default async (req, res) => {
    try {

        const data = await new Promise((resolve, reject) => {

            const form = formidable({
                multiple: true,
                uploadDir: './public/ongs/units/'
            });
            form.keepExtensions = true;
            form.keepFileName = true;

            form.on("fileBegin", (name, file) => {
                file.path = path.join('./public/ongs/units/', slugfile(file.name));
            })
            form.parse(req, (err, fields, files) => {
                if (err) {
                    return reject(err)
                }
                return resolve(files)
            })
        })
        res.json(data)

    } catch (error) {
        console.error(error)
        res.status(500).end('Ocorreu um erro ao consultar as unidades')
    }
}