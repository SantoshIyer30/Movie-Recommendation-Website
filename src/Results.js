import React from "react";
import styled from "styled-components";
import Card from "./Cards";
import Main from "./Main";


function Results(){
    return(
        <Container>
            <Main/>
            <Card 
                id='1'
                title='iron man'
                image='/assets/images/1154.jpg'
            
            />
            <BgImage />
        </Container>


    )
}





// very imp... WILL USE LATER
// const Result = ({movieData, setMovieData}) => {
//     return (<div className = 'movieList'>
//         {movieData.map(movie =>(
//             <div onClick={() => setMovieData(movie.token_id)}>
//                 <CollectionCard 
//                 key={movie.token_id}
//                 id={movie.token_id}
//                 name={movie.name}
//                 />
//             </div>
//         ))}
//     </div>);
//   };
  

const Container=styled.section`
    padding-top: 70px ;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image:url('/assets/images/background-homepage.jpg');
  background-color: rgbargba(0,0,0,0.5);
  position: absolute;
  top:0;
  right:0;
  left:0;
  z-index:-1;
  opacity: 1;
`;



export default Results;