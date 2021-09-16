import { Container } from "react-bootstrap";
import Input from "./components/Input";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginScreen from './screens/userlogin'
import RegisterScreen from './screens/userRegister'
import React from 'react'

function App() {
  return (
    <>
    <Router>
      <Header/>
        <main className='py-3'>
        <Container>
        <Route path='/' component={LoginScreen} exact  />
          <Route path='/register' component={RegisterScreen} />
        </Container>
        </main>
    </Router>
     
    </>
  );
}

export default App;
