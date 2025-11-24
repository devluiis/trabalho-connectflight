import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import onda from "../assets/onda.svg";

const FooterContainer = styled.footer`
    margin-top: 40px;
    text-align: center;
`;

const Line = styled.div`
    width: 60%;
    height: 1px;
    background-color: #eceff2;
    margin: 0 auto 20px auto;
`;

const Menu = styled.nav`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 30px;
`;

const MenuLink = styled(Link)`
    color: #3f3d56;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Wave = styled.img`
    width: 100%;
    display: block;
    margin-top: -20px;
`;

export default function Footer() {
    return (
        <FooterContainer>
        <Line />

        <Menu>
            <MenuLink to="/destinos">Destinos</MenuLink>
            <MenuLink to="/ofertas">Ofertas</MenuLink>
            <MenuLink to="/contato">Contato</MenuLink>
        </Menu>

        <Wave src={onda} alt="onda" />
        </FooterContainer>
    );
}

