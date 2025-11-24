import React from "react";
import styled from "styled-components";

const Container = styled.header`
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #3f3d56;
`;

export default function Header() {
    return <Container>ConnectFlight</Container>;
}
