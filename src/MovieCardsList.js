import React from 'react'

class MovieCardsList extends React.Component{

    render(){
        var arr = []
        var json = this.props.movies;
        
        Object.keys(json).forEach(function(key) {
            console.log(json[key])
            arr.push(json[key]);
        });

        return <ul>The list: {arr.map(item => <h4>{item.Title}{console.log('yo', item[0])}</h4>)}</ul>;
        
    }
}

export default MovieCardsList;