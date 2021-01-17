import React from 'react'
import MovieCard from './MovieCard'
import {Wrap} from '@chakra-ui/react'

class NominationList extends React.Component{
    render(){

        var arr = this.props.movies;

        return <Wrap>{arr.map((item, index) => <MovieCard key={index} title={item.Title} year={item.Year} type={item.Type} poster={item.Poster} onNominate={this.props.onNominate} index={index} card_type="nominated" onItemClick={this.props.onItemClick}/>)}</Wrap>
    }
}
export default NominationList;