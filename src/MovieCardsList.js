import React from 'react'
import MovieResult from './MovieResult.js'
import {VStack, StackDivider} from "@chakra-ui/react"

class MovieCardsList extends React.Component{

    render(){
        var element = <h3>error</h3>
        if(this.props.movies == null || (this.props.movies).length === 0){
            element = <h3>No Results</h3>
        }else{ 
            element = (this.props.movies).map((item, index) => <MovieResult key={index} id={item.imdbID} title={item.Title} year={item.Year} type={item.Type} poster={item.Poster} onItemClick={this.props.onItemClick} nominationList={this.props.nominationList} index={index} nominated={this.nominated} card_type="result"/>)

        }

        return(
            
            <VStack 
                spacing={4}
                align="stretch">
                    {element}
            </VStack>
        )
        
    }
}

export default MovieCardsList;