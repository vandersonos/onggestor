import Link from 'next/link'
import { Card, Button } from 'react-bootstrap';
const Unidade = ({ id, name, descricao }) => {
    const link = '/unidade/' + id
    return (
        <Link href={link}>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {descricao}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Link>

    )
}

export default Unidade