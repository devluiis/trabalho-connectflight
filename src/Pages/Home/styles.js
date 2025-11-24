import styled from "styled-components";

export const Container = styled.main`
    text-align: center;
    padding: 40px 20px;
    color: #3f3d56;
`;

export const Img = styled.img`
    width: 350px;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 500;
    font-family: 'Dosis', sans-serif;
    color: #3f3d56;
    text-align: center;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Highlight = styled.span`
    font-family: 'Dosis', sans-serif;
    font-weight: 700;
    color: #ee24ff;
`;

export const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    max-width: 600px;
    margin: 10px auto;
    color: #828282;
    font-size: 16px;
    text-align: center;

    strong {
    color: #3f3d56;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
}
`;
