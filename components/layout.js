import { Nav, Navbar, NavDropdown, Col, Image } from 'react-bootstrap';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useUser } from '../lib/hooks'
const Layout = (props) => {
  const user = useUser()
  return (
    <>
      <Head>
        <title>With Cookies</title>
      </Head>

      <main className="container-fluid">
        <div className='row'>
          <Col xs={6} md={2}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" defaultActiveKey="/" as="ul" className="flex-column">
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
          </Col>
          <Col xs={6} md={10}>
            {props.children}
          </Col>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Orggestor - Sua ONG eficiente e transparente.
        </a>
      </footer>
      <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      .container {
        max-width: 42rem;
        margin: 0 auto;
        padding: 2rem 1.25rem;
      }
    `}</style>
    </>
  )
}
export default Layout