const { useState } = require("react")
import axios from 'axios'
const Form = ({ label, name, file, url }) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const handlerFile = (e) => {
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
    }
    const uploadFile = (e) => {
        const fd = new FormData()

        fd.append('image', selectedFile, selectedFile.name)
        axios.post(url, fd, {
            onUploadProgress: progressEvent => {
                console.log('upload progress' + progressEvent.loaded / (progressEvent.total * 100) + ' %')
            }
        })
            .then(res => {
                console.log(res, 'res')
            })
    }
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                name={name}
                type='file'
                className="form-control"
                id={name}
                defaultValue={file}
                onChange={handlerFile}
            />
            <button className='btn btn-primary' onClick={uploadFile}>enviar</button>
        </div>
    )
}

export default Form