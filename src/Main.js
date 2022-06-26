import React from "react";
import styled from "styled-components";

function Main(){
    return (
        <Container>
            <h1> The movie that you searched for is Iron Man 2</h1>
            <Content>
                <Image>
                    <img src='/assets/images/1154.jpg' alt=''/>
                </Image>
                <Details>
                <Title>
                    Iron Man 2
                </Title>
                <Description>
                    Robert Downet Jr Played Iron Man jajasfjf asjdhlajsfl jahsdljsa
                </Description>
                </Details>
            </Content>
        </Container>
    )
}


const Container = styled.div`
    padding-bottom: 20px;
    padding:20px ;
    color: white ;
`;

const Content= styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: left;`;

const Image = styled.div`
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        margin-right: 20px;
        img{
            object-fit: contain;
        max-width: min(30vw, 40vh);
        max-height: 30vw;
        
        }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    height: 30vw;

  `;

const Title = styled.div`
    font-size: 40px;
    font-weight: 800;
    display: flex;
    align-self: flex-start;
    /* @media  only screen and (min-width: 950px){
        padding-top: 80px;
    } */
    
    `;

const Description = styled.div`
    font-size: 12px;
    font-weight: 800;
    display: flex;
`;

export default Main;