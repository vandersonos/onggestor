import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Form = ({ errorMessage, successMessage, onSubmit, unit }) => {
    return (
        <div className="border rounded p-3 col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4 col-xxl-3 m-auto">
            <form onSubmit={onSubmit}>

                <div className="mb-3">
                    <label htmlFor='name'> Nome do Formulário </label>
                    <input type="text" name="name" className="form-control" id="name" defaultValue={unit?.name} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descrição</label>
                    <textArea type='text' name="description" className="form-control" id="description" defaultValue={unit?.description} required />
                </div>
                <div className={styles.toolbar} >
                    <button type="submit" className="btn btn-primary mb-4 mt-4">{unit ? 'Alterar' : 'Inserir'}</button>
                    <Link href='/' >

                        <button type="buttom" className="btn btn-primary mb-4 mt-4" >Cancelar</button>
                    </Link>
                </div>

                {successMessage && <p className="alert alert-success">{successMessage}</p>}
                {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
            </form>
            <style jsx>{`
            form,
            label {
                display: flex;
                flex-flow: column;
            }
            label > span {
                font-weight: 600;
            }
            input {
                padding: 8px;
                margin: 0.3rem 0 1rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            .submit {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                justify-content: space-between;
            }
            .submit > a {
                text-decoration: none;
            }
            .submit > button {
                padding: 0.5rem 1rem;
                cursor: pointer;
                background: #fff;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            .submit > button:hover {
                border-color: #888;
            }
            .error {
                color: brown;
                margin: 1rem 0 0;
            }
         `}</style>
        </div>

    )
}

export default Form