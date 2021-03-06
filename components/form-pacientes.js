import File from './form-file.js'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import InputMask from 'react-input-mask';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import locale from '../lib/locale';
//registerLocale('pt', pt)


const Form = ({ errorMessage, successMessage, onSubmit, paciente }) => {
    const [startDate, setStartDate] = useState(paciente?.data_entrada);
    const [nascimento, setNascimento] = useState(paciente?.data_nascimento);
    useEffect(() => {
        document.getElementById('uf').value = (paciente?.uf) ? (paciente?.uf) : 'RS'
    }, [paciente])
    let file = '/img/house.jpg'
    if (paciente && paciente.url_img) {
        file = paciente.url_img
    }

    return (
        <div className="border rounded p-3 col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4 col-xxl-3 m-auto">
            <form onSubmit={onSubmit}>
                <File label='Foto' name='url_img' file={file} url={'/api/pacientes/uploadimg/'} flImg='true' />
                <div className="mb-3">
                    <label htmlFor='nome'>Nome:</label>
                    <input type="text" name="nome" className="form-control" id="nome" defaultValue={paciente?.nome} required />
                </div>
                <div className="mb-3">
                    <label htmlFor='data_entrada'>Data de entrada:</label>
                    <DatePicker locale={locale} selected={startDate} onChange={date => setStartDate(date)} />
                </div>
                <div className="mb-3">
                    <label htmlFor='data_nascimento'>Data de entrada:</label>
                    <DatePicker locale='pt' selected={nascimento} onChange={date => setStartDate(date)} />
                </div>
                <div className="mb-3">
                    <label htmlFor='age'>Idade:</label>
                    <input type="text" name="age" className="form-control" id="age" defaultValue={paciente?.age} />
                </div>
                <div className="mb-3">
                    <input type='hidden' name='id' id='id' defaultValue={paciente?.id} />
                    <label htmlFor='uf'> Estado </label>
                    <select className="form-control" name="uf" id='uf'>
                        <option value="-1">Selecione</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PR">PR</option>
                        <option value="PB">PB</option>
                        <option value="PA">PA</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SE">SE</option>
                        <option value="SP">SP</option>
                        <option value="TO">TO</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor='city'> Cidade </label>
                    <input type="text" name="city" className="form-control" id="city" defaultValue={paciente?.city} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="addres" className="form-label">Endereço</label>
                    <input type='text' name="addres" className="form-control" id="addres" defaultValue={paciente?.addres} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="district" className="form-label">Bairro</label>
                    <input type='text' name="district" className="form-control" id="district" defaultValue={paciente?.district} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cep" className="form-label">CEP</label>
                    <input type='text' name="cep" className="form-control" id="cep" defaultValue={paciente?.cep} required />
                </div>
                <div className="mb-3">
                    <label htmlFor='phone'> Telefone </label>
                    <input type="phone" name="phone" className="form-control" id="phone" defaultValue={paciente?.phone} required />
                </div>
                <div className="mb-3">
                    <label htmlFor='email'> Email </label>
                    <input type="email" name="email" className="form-control" id="email" defaultValue={paciente?.email} required />
                </div>

                <div className={styles.toolbar} >
                    <button type="submit" className="btn btn-primary mb-4 mt-4">{paciente ? 'Alterar' : 'Inserir'}</button>
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