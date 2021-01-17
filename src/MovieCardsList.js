import React from 'react'
import MovieCard from './MovieCard.js'
import {SimpleGrid, Box, Center, Spinner} from "@chakra-ui/react"

class MovieCardsList extends React.Component{

    render(){
        var element = <h3>error</h3>
        if(this.props.movies == null || (this.props.movies).length === 0){
            element = <h3>No Results</h3>
        }else{

        
            // Object.keys(json).forEach(function(key) {
            //     //console.log(json[key])
            //     arr.push(json[key]);
                
            // });
            //console.log(arr)
            element = (this.props.movies).map((item, index) => <MovieCard key={index} id={item.imdbID} title={item.Title} year={item.Year} type={item.Type} poster={item.Poster} onItemClick={this.props.onItemClick} nominationList={this.props.nominationList} index={index} nominated={this.nominated} card_type="result"/>)

        }

        return(
            <SimpleGrid minChildWidth="250px" rowGap='20px' columnGap='50px'>{element}</SimpleGrid>
        )
        
    }
}

export default MovieCardsList;