import React from "react";
import { Container, Title, Text, Highlight, Img } from "./styles";
import world from "../../assets/world.svg";

export default function Home() {
    return (
        <Container>
        <Img src={world} alt="Mapa" />

        <Title>
            O seu próximo <Highlight>destino</Highlight> pode estar aqui...
        </Title>

        <Text>
            Aqui você encontra uma seleção de <strong>pacotes completos</strong> para
            as suas férias!
        </Text>

        <Text>
            No <b>ConnectFlight</b> você encontra pacotes de viagens nacionais e
            internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com <strong>preços arrasadores</strong>.
        </Text>

        <Text>
            Se você ainda não tem um destino definido, confira nossa seção de ofertas.
        </Text>
        </Container>
    );
}
