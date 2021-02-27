import Link from 'next/link'
import { Card, Button } from 'react-bootstrap';
const Unidade = ({ id, uf, city, addres, district, email, phone }) => {
    const link = '/units/' + id
    const link_edit = '/units/edit/' + id
    return (


        <Card style={{ width: '18rem', margin: '2px' }}>
            <Card.Img variant="top" src="units/pelotas.jpeg" />
            <Card.Body>
                <Card.Title>{city}/{uf}</Card.Title>
                <Card.Text>
                    {addres},{district} <br />
                    {email} <br />
                    {phone}<br />
                </Card.Text>
                <Link href={link}><Button variant="primary">Abrir</Button></Link >

                <Link href={link_edit}><Button variant="success">Editar</Button></Link >
            </Card.Body>
        </Card>


    )
}

export default Unidade