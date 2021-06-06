import React from 'react';
import {SidebarContainer, Icon, CloseIcon,
    SidebarWrapper,SidebarLink,SidebarRoute,SideBtnWrap,SidebarMenu } from './SidebarElements';

const Sidebar = ({ isOpen, toggle} ) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='routes' onClick={toggle}>Маршруты</SidebarLink>
                    <SidebarLink to='travelers' onClick={toggle}>Попутчики</SidebarLink>
                    <SidebarLink to='tours' onClick={toggle}>Туры</SidebarLink>
                    <SidebarLink to="signup">Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

