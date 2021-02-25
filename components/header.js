
import { Nav, Navbar, NavDropdown, Col, Image } from 'react-bootstrap';
import { useUser } from '../lib/hooks'
const Header = () => {
  const user = useUser()
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" defaultActiveKey="/" as="ul" >
            {user ? (
              <>
                <Nav.Item as="li">
                  <Image src="/logo.png" alt="Casa Vida Logo" roundedCircle />
                </Nav.Item>
                <Nav.Item as="li">
                  <h4>{user.username}</h4>
                </Nav.Item>
                <NavDropdown title="Perfil" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Editar</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/api/users/logout">Sair</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
                <Nav.Item as="li">
                  <Nav.Link href="/login">Entrar</Nav.Link>
                </Nav.Item>
              )}
            <Nav.Item as="li">
              <hr />
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/users">Usuários</Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <style jsx>{`
        nav {
          max-width: 42rem;
          margin: 0 auto;
          padding: 0.2rem 1.25rem;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:first-child {
          margin-left: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        header {
          color: #fff;
          background-color: #333;
        }
      `}</style>
    </header>
  )
}

export default Header