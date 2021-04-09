import Link from 'next/link'
import { Card, Button } from 'react-bootstrap';
const Patients = ({ id, uf, city, addres, district, email, phone, url_img }) => {
    const link = '/patients/' + id
    const link_edit = '/patients/' + id + '/edit'
    return (
        <div>teste paciente</div>
    )
}

export default Patients