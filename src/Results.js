import React from "react";
import styled from "styled-components";
import Card from "./Cards";


function Results(){
    return(
        <Container>
            <Card 
                id='1'
                title='iron man'
                image='/assets/images/1154.jpg'
            
            />
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



export default Results;