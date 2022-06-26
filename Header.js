import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Head>
            <img src='/assets/images/movie-icon.png' alt=''/>
            <Title>Movie Recommender</Title>
        </Head>

    )
}

const Head = styled.div`
    margin:0 ;
    font-family: 'Montserrat', sans-serif;
    font-size : 1.5rem;
    display: flex;
    top: 8.5rem;
    justify-content: center;
    align-items:center ;
    position:fixed ;
    width: 100% ;
    background-color:transparent ;
    img{
        width: 40px ;
        height: 40px;
        margin-left: 15px ;
    }
`;

const Title = styled.h1`
    margin:17px ;
    color:white ;
`;

export default Header;