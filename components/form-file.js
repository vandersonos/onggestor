const { useState, useEffect } = require("react")
import axios from 'axios'
import { Card } from 'react-bootstrap';
const Form = ({ label, name, file, url, flImg }) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [valuefile, setValuefile] = useState('')
    const [opacity, setOpacity] = useState('1')
    const handlerFile = (e) => {
        setSelectedFile(e.target.files[0])
        setSuccessMessage('')
        setErrorMessage('')
    }
    const uploadFile = (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append('image', selectedFile, selectedFile.name)
        setLoading(true)
        axios.post(url, fd)
            .then(res => {
                setValuefile(res.data.file)
                console.log(res.data.file, 'data')
                setSuccessMessage("Aquivo enviado com sucesso!")
            })
            .catch(err => {
                console.log(err, 'error')
                setErrorMessage(err.data.msg)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const idtmp = name + 'tmp'
    const nametmp = name + 'tmp'
    useEffect(() => {
        if (!valuefile) {
            setValuefile(file)
        }
    })

    useEffect(() => {
        if (loading) {
            setOpacity('0.2')
        } else {
            setOpacity('1')
        }
    }, [loading])

    return (
        <div className='fileUpload'>
            <Card style={{ width: '18rem', margin: '2px' }}>
                {flImg ? (<Card.Img variant="top" src={valuefile} style={{ 'border-bottom': 'solid 1px rgba(0,0,0,0.125)', opacity: opacity }} />) : ''}
                <Card.Body>
                    <div className="mb-3 fileUpload">
                        <label htmlFor={name} className="form-label">{label}</label>
                        <input type='hidden' name={name} id={name} value={valuefile} />
                        <input
                            name={nametmp}
                            type='file'
                            className="form-control"
                            id={idtmp}
                            onChange={handlerFile}
                        />
                        <button className='btn btn-primary' onClick={uploadFile}>enviar</button>
                        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
                        {successMessage && <p className="alert alert-success">{successMessage}</p>}
                        {loading && <p className="alert alert-info"><i className="fas fa-spinner fa-spin"> </i>  Enviando...</p>}
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