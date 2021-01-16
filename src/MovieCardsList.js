import React from 'react'
import MovieCard from './MovieCard.js'
import {SimpleGrid, Box, Center, Spinner} from "@chakra-ui/react"

class MovieCardsList extends React.Component{

    render(){
        var arr = []
        var json = this.props.movies;
        var element = <h3>error</h3>
        if(json == null || Object.keys(json).length === 0){
            element = <h3>No Results</h3>
        }else{

        
            Object.keys(json).forEach(function(key) {
                //console.log(json[key])
                arr.push(json[key]);
            });

            element = arr.map((item, index) => <MovieCard key={index} title={item.Title} year={item.Year} type={item.Type} poster={item.Poster} onItemClick={this.props.onItemClick} index={index}/>)

        }

        return(
            <SimpleGrid minChildWidth="250px" rowGap='20px' columnGap='50px'>{element}</SimpleGrid>
        )
        
    }
}

export default MovieCardsList;