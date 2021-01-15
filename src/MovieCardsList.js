import React from 'react'
import MovieCard from './MovieCard.js'
import {SimpleGrid} from "@chakra-ui/react"

class MovieCardsList extends React.Component{

    render(){
        var arr = []
        var json = this.props.movies;
        
        Object.keys(json).forEach(function(key) {
            console.log(json[key])
            arr.push(json[key]);
        });

        return <SimpleGrid columns={6} spacing={10}>{
            arr.map(item => <MovieCard title={item.Title} year={item.Year} type={item.Type} poster={item.Poster}/>)}
        </SimpleGrid>;
        
    }
}

export default MovieCardsList;