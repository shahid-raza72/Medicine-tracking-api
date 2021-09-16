import { Container,Navbar} from 'react-bootstrap'
const Header =()=>(
    <Container>
  <Navbar expand="lg" variant="light" bg="dark">
    <Container>
      <Navbar.Brand>Medicine Tracker</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
)

export default Header