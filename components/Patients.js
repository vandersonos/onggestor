import Link from 'next/link'
import { Card, Button } from 'react-bootstrap';
const Unidade = ({ id, uf, city, addres, district, email, phone, url_img }) => {
    const link = '/units/' + id
    const link_edit = '/units/' + id + '/edit'
    return (


        <Card style={{ width: '18rem', margin: '2px' }}>
            <Card.Img variant="top" src={url_img} />
            <Card.Body>
                <Card.Title>{city}/{uf}</Card.Title>
                <Card.Text>
                    {addres},{district} <br />
                    {email} <br />
                    {phone}<br />
                </Card.Text>
                <Link href="/units/[id]/edit" as={link_edit}>
                    <Button variant="success">
                        <i class="far fa-edit"></i> Editar
                    </Button>
                </Link >
            </Card.Body>
        </Card>
        //    <Link href={link}><Button variant="primary">Abrir</Button></Link >


    )
}

export default Unidade