import React from 'react'
import MovieCard from './MovieCard'
import {VStack} from '@chakra-ui/react'

class NominationList extends React.Component{
    render(){

        var arr = this.props.movies;

        return <VStack>{arr.map((item, index) => <MovieCard key={index} title={item.Title} year={item.Year} type={item.Type} poster={item.Poster} onNominate={this.props.onNominate} index={index} card_type="nominated" onItemClick={this.props.onItemClick}/>)}</VStack>
    }
}
export default NominationList;