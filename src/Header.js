import React from 'react';
import styled from 'styled-components';

function Header (){
    return(
        <Head>
            <img src='/assets/images/popcorn.png' alt=''/>
            <Title>Movie Recommender</Title>
        </Head>
        
    )
}

const Head = styled.div`
    margin:0 ;
    display: flex;
    justify-content: left;
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