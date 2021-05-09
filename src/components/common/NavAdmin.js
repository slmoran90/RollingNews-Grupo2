import React from "react";
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const NavAdmin = () => {
return (
    <Navbar bg="secondary" expand="lg" variant='dark'>
            <Navbar.Brand href="/">ADMINISTRACION</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className='nav-link' exact={true} to='/noticias/listar'>Listar Noticias</NavLink>
                    <NavLink className='nav-link' exact={true} to='/categorias/listar'>Listar Categorias</NavLink>
                    <NavLink className='nav-link' exact={true} to='/noticias/nueva'>Nueva Noticia</NavLink>
                    <NavLink className='nav-link' exact={true} to='/categorias/nueva'>Nueva Categoria</NavLink>
                </Nav>
            </Navbar.Collapse>
    </Navbar>    
);
};

export default NavAdmin;
