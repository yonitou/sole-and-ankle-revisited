/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent, Dialog } from '@reach/dialog';

import { QUERIES } from '../../constants';
import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import { WEIGHTS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay isOpen={isOpen} onDismiss={onDismiss} >
      <ModalContent aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={24}/>
          <VisuallyHidden>
            Dismiss Menu
          </VisuallyHidden>
        </CloseButton>
    <Side />
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <Link href="/terms">Terms and Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/contact">Contact Us</Link>
      </Footer>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled(DialogOverlay)`
background-color: hsla(220, 5%, 40%, 0.8);
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
`

const ModalContent = styled(DialogContent)`
background: white;
height: 100%;
margin-left: 75px;
display: flex;
flex-direction: column;
padding: 32px;
`

const NavLink = styled.a`
text-decoration: none;
color: ${COLORS.gray[900]};
text-transform: uppercase;
font-size: 18px;
font-weight: ${WEIGHTS.medium};
&[aria-current] {
  color: ${COLORS.primary};
}
`

const Link = styled.a`
text-decoration: none;
color: ${COLORS.gray[700]};
font-size: 14px;
font-weight: ${WEIGHTS.normal};
`

const CloseButton = styled(UnstyledButton)`
  top: 26px;
  right: 16px;
  position: absolute;
`

const Side = styled.div`
flex: 1;
`

const Nav = styled.nav`
flex: 1;
display: flex;
flex-direction: column;
gap: 22px;
`

const Footer = styled.footer`
flex: 1;
display: flex;
flex-direction: column;
justify-content: flex-end;
gap: 14px;
`

export default MobileMenu;
