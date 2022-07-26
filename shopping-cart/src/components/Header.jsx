import React from 'react'
import {Container, Navbar, FormControl, Nav, Dropdown, Badge} from "react-bootstrap"
import {Link} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
 
const Header = () => {
  return (
    <Navbar bg="dark" variant ="dark" style ={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className ="search">
                <FormControl style ={{width:500}} className ="m-auto"  placeholder ="search a product"/>
            </Navbar.Text>
            <Nav>
              <Dropdown style ={{alignItems:"right"}}>
                <Dropdown.Toggle variant = "success">
                  <FaShoppingCart color="white" fontSize = "25px" />
                  <Badge bg="success" >{10}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style ={{backgroundColor:"red",color:"white", minWidth:"300px", marginTop:"10px", marginLeft:"-300px"}} >
                  <span style ={{padding:10}} > Cart is Empty!</span>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header