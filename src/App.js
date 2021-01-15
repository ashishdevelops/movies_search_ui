import React from 'react'
import './App.css';
import MovieCardsList from './MovieCardsList';
import NominationList from './NominationList'
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Center,
  InputLeftElement,
  InputGroup,
  Spinner
} from "@chakra-ui/react"

import {Search2Icon} from "@chakra-ui/icons"

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {movies: {}, search_term: "error", loading:false};
    this.api_key = 'e2878480'
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  moviesList(){
    this.setState({loading: true}, ()=>{
      console.log(`loading? ${this.state.loading}`)
      const http = new XMLHttpRequest();
      const url = `http://www.omdbapi.com/?s=${this.state.search_term}&apikey=e2878480&`
      http.open("GET", url)
      http.send()

      http.onreadystatechange = (e) => {
        console.log(http.readyState, http.status)
        if(http.readyState === 4 && http.status === 200){
          this.setState({
            movies: JSON.parse(http.responseText)['Search'],
            loading: false
          });
        }
      }
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.moviesList();
  }

  handleChange(event){
    this.setState({ search_term: event.target.value})
  }

  render(){

    if(this.state.loading){
      var search_response = <Center><Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl"/></Center>;
    }else{
      var search_response = <MovieCardsList movies={this.state.movies} loading={this.state.loading}/>  
    }

    return (
      <div>
        <Center>
          <Box w="50%" borderWidth="1px" borderRadius="lg" padding='10px' marginTop='100px' marginBottom = '70px'>
            <form onSubmit={this.handleSubmit}>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.300"/>} />
                  <Input type='field' id='search_field' value={this.state.value} onChange={this.handleChange}/>
                </InputGroup>
                <FormHelperText>Search for an nominate your favorite movies :)</FormHelperText>
              </FormControl>
            </form>
          </Box> 
        </Center>
        <Box borderWidth="1px" borderRadius="lg" padding='30px' marginLeft='100px' marginRight='100px'>
          <FormLabel>Nomination List</FormLabel>
          <NominationList movies={this.state.movies}/>  
        </Box>
        <Box borderWidth="1px" borderRadius="lg" padding='30px' margin='100px' minH='300px'>
          {search_response} 
        </Box>
      </div>
    )
  }
}

export default App;
