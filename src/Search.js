import styled from 'styled-components';
import React from 'react';



function Search(){
    return(
        <Container>
            <Content>
                <CTA>
                    <TextBox>
                        <input name='hello'/>
                    </TextBox>
                    <SearchButton type="button" class="btn btn-outline-secondary">
                        Search
                    </SearchButton>
                    <Description>
                        You really liked 'That one' moive? Wanna watch something similar and don't know what to watch?
                        You have landed at the best place. Get the best movie recommendations here.
                    </Description>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display:flex ;
    width: 100% ;
    height: 100vh ;
    align-items: center ;
    justify-content: center;
    margin: 0 ;
    background-color: transparent;
    background-image:none ;
`;

const Content = styled.div`
  /* margin-bottom: 10vw ; */
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;


const CTA = styled.div`
margin: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
margin-top: 0;
align-items: center;
justify-content: center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width:100%;
background-color: rgba(0,0,0,0.5);


`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  background-image:url('/assets/images/login-background.jpg');
  background-color: rgbargba(0,0,0,0.5);


  position: absolute;
  top:0;
  right:0;
  left:0;
  z-index:-1;
  opacity: 1;
`;

const Description=styled.p`
color: hsla(0,0%,95.3%,1);
font-family: 'Poppins', sans-serif;
font-size: 14px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;

`;

const TextBox = styled.div`
    margin: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    align-items: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width:70%;
    input{
        width: 100%;
        letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    }

`;

const SearchButton = styled.button`
font-weight: bold;
color: white;
background-color: #0063e5;
margin-bottom: 12px;
width: 50%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover{
  background-color: #0483ee ;
}
`;





export default Search ;