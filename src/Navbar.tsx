import React, { useContext } from 'react'
import {
  Container,
  Form,
  Nav,
  Navbar,
  InputGroup,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Github from './assets/github.svg'
import { ReactSVG } from 'react-svg'
import { BsSearch } from 'react-icons/bs'
import { UserContext } from './App'

function NavBar() {
  const { userName, setUserName } = useContext(UserContext)

  const handleInputChange = (e) => {
    e.preventDefault()
    setUserName(e.target.value)
    console.log(userName)
  }

  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="#">
          <ReactSVG src={Github} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form>
              <InputGroup className="w-auto">
                <InputGroup.Text
                  className="bg-white"
                  style={{ borderRight: 'none' }}
                >
                  <BsSearch style={{ color: 'grey' }} />
                </InputGroup.Text>
                <Form.Control
                  style={{ borderLeft: 'none', width: '500px' }}
                  type="search"
                  placeholder="Enter github username"
                  aria-label="Search"
                  value={userName}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
