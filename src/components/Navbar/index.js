import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavbarContainer, NavLogo, MobileIcon, 
    NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink } from './NavbarElements';


const Navbar = ({ toggle }) => {
const [scrollNav, setcrollNav] =useState(false)

    const changeNav = () => {
    if (window.scrollY >=80) {
        setcrollNav(true)
    } else {
        setcrollNav(false)}
    }

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])

    const toggleHome = () => {
    scroll.scrollToTop();
    };

    return (
<>
<IconContext.Provider value={{color: '#fff'}}>
<Nav scrollNav={scrollNav}>
<NavbarContainer>
    <NavLogo to='/' onClick={toggleHome}>GetTravel</NavLogo>
    <MobileIcon onClick={toggle}>
    <FaBars />
    </MobileIcon>
    <NavMenu>
        <NavItem>
            <NavLinks to ='routes'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-50}
            >Маршруты</NavLinks>
        </NavItem>
        <NavItem>
            <NavLinks to ='travelers'
             smooth={true}
             duration={500}
             spy={true}
             exact='true'
             offset={-50}
            >Попутчики</NavLinks>
        </NavItem>
        <NavItem>
            <NavLinks to ='tours'>Туры</NavLinks>
        </NavItem>
    </NavMenu>
        <NavBtn>
            <NavBtnLink to ='/signin'>Войти</NavBtnLink>
        </NavBtn>


</NavbarContainer>
</Nav>
</IconContext.Provider>
</>
    );
};

export default Navbar;
