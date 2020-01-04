import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import logo from './logo.svg';

import Menu from './components/MenuComponents';

function App() {
  return (
    <div >
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante con fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
      
    </div>
  );
}

export default App;
