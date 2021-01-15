import React from 'react'
import './App.css';
import MovieCardsList from './MovieCardsList';
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react"

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {movies: {}, search_term: "error"};
    this.api_key = 'e2878480'
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  moviesList(){
    const http = new XMLHttpRequest();
    const url = `http://www.omdbapi.com/?s=${this.state.search_term}&apikey=e2878480&`
    http.open("GET", url)
    http.send();

    http.onreadystatechange = (e) => {
      console.log(http.readyState, http.status)
      if(http.readyState === 4 && http.status === 200){
        this.setState({movies: JSON.parse(http.responseText)['Search']});
      }
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.moviesList();
  }

  handleChange(event){
    this.setState({ search_term: event.target.value})
  }

  render(){
    return (
      <div>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <form onSubmit={this.handleSubmit}>
        <FormControl>
          <FormLabel>Search</FormLabel>
          <Input type='field' id='search_field' value={this.state.value} onChange={this.handleChange}/>
          <Input type="submit" value='Submit'/>
          <FormHelperText>We got you :)</FormHelperText>
        </FormControl>
        </form>
        </Box> 
        <MovieCardsList movies={this.state.movies}/>  
      </div>
    )
  }
}

export default App;
