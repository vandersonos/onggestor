const { useState } = require("react")
import axios from 'axios'
import { Card, Button } from 'react-bootstrap';
const Form = ({ label, name, file, url, flImg }) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [valuefile, setValuefile] = useState(file ? file : '')
    const handlerFile = (e) => {
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
        setSuccessMessage('')
        setErrorMessage('')
    }
    const uploadFile = (e) => {
        const fd = new FormData()
        fd.append('image', selectedFile, selectedFile.name)
        setLoading(true)
        axios.post(url, fd)
            .then(res => {
                setValuefile(res.data.file)
                setSuccessMessage("Aquivo enviado com sucesso!")
            })
            .catch(err => {
                setErrorMessage(err.data.msg)
            })
            .finally(() => {

                setLoading(false)
            })
    }
    const idtmp = name + 'tmp'
    const nametmp = name + 'tmp'
    return (
        <div className='fileUpload'>
            <Card style={{ width: '18rem', margin: '2px' }}>
                {flImg ? (<Card.Img variant="top" src={valuefile} />) : ''}
                <Card.Body>
                    <div className="mb-3 fileUpload">
                        <label htmlFor={name} className="form-label">{label}</label>
                        <input type='hidden' name={name} id={name} value={valuefile} />
                        <input
                            name={nametmp}
                            type='file'
                            className="form-control"
                            id={idtmp}
                            defaultValue={file}
                            onChange={handlerFile}
                        />
                        <button className='btn btn-primary' onClick={uploadFile}>enviar</button>
                        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
                        {successMessage && <p className="alert alert-success">{successMessage}</p>}
                        {loading && <p className="alert alert-info"><i class="fas fa-spinner fa-spin"> </i>  Enviando...</p>}
                        <style jsx>{`
                            .fileUpload{

                                display: flex;
                                flex-direction: column;
                            }
                            .fileUpload input{
                                margin-bottom:10px;
                            }
                            .fileUpload button{
                                margin-bottom:10px;
                            }
                        `}</style>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Form