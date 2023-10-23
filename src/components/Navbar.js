import React from 'react';
import "./Navbar.css";
import {
 
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';

 function Navbar(props) {

  return (
    

        <div className="nav">
        <MDBNavbarBrand href='#'>Shopping Cart App</MDBNavbarBrand>
          <span onClick={()=>props.handleshow(false)}>All Products</span>
          <MDBBtn color='dark'>
            <div onClick={ ()=> props.handleshow(true)}>
       Cart{
        <sup>{props.count}</sup>
       }
       </div>
      </MDBBtn>
        </div>
  );
}
export default Navbar;