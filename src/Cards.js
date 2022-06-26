import React from 'react';
import styled from 'styled-components';

function Card(props)  {
    return (
        <CollectionCard>
            <img src={props.image} alt=''/>
            <Details>
              <Name>
                  {props.title} <div className='id'> #{props.id}  </div>
              </Name>
              </Details>
            </CollectionCard>
    )
  };


const CollectionCard = styled.div`
    color: white;
    background-color: #673d4d;
    border-radius: 20px;
    overflow: hidden;
    width: 300px;
    height: 500px;
    margin: 30px;
    img{
        width: 100%;
    }
    @media only screen and (max-width : 950px){
        width: 200px;
        height:400px ;
        
    }
`;

const Details = styled.div`
    padding: 20px;
`;

const Name = styled.div`
    font-size: 20px;
    font-weight: 900;
`;
  
  export default Card;
  