import Link from 'next/link'
import { Card, Button } from 'react-bootstrap';
const Unidade = ({ id, city, endereco, email, phone }) => {
    const link = '/unidade/' + id
    return (
        <Link href={link}>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{city}</Card.Title>
                    <Card.Text>
                        {endereco}
                        {email}
                        {phone}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Link>

    )
}

export default Unidade