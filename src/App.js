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
    this.state = {movies: [], search_term: "error", loading:false, nominations: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNominate = this.handleNominate.bind(this);
  }

  moviesList(){
    console.log('MAKING REQUEST')
    this.setState({loading: true}, ()=>{
      const http = new XMLHttpRequest();
      const url = `https://www.omdbapi.com/?s=${this.state.search_term}&apikey=e2878480&`
      http.open("GET", url)
      http.send()

      http.onreadystatechange = (e) => {
        console.log(http.readyState, http.status)
        if(http.readyState === 4 && http.status === 200){

          var json = JSON.parse(http.responseText)['Search'];
          var movies_arr = []
          Object.keys(json).forEach(function(key) {
            if(json[key].Type == 'movie'){
              movies_arr.push(json[key]);
            }
          });


          this.setState({
            movies: movies_arr,
            loading: false
          });
          console.log("API CALL RECIEVED")
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

  handleNominate(event){
    let to_nominate = this.state.movies[event.target.value];
    //event.target.disabled = true;
    this.setState({ nominations: [...this.state.nominations, to_nominate] })
  }

  handleRemoveNominate(event){
    // let to_nominate = this.state.movies[event.target.value];
    // event.target.disabled = true;
    // this.setState({ nominations: [...this.state.nominations, to_nominate] })
    console.log("denominate")
  }

  render(){

    if(this.state.loading){
      var search_response = <Center><Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl"/></Center>;
    }else{
      var search_response = <MovieCardsList onItemClick={this.handleNominate} movies={this.state.movies} loading={this.state.loading} nominationList = {this.state.nominations}/>  
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
                <FormHelperText>Search for and nominate your favorite movies :)</FormHelperText>
              </FormControl>
            </form>
          </Box> 
        </Center>
        <Box borderWidth="1px" borderRadius="lg" padding='30px' marginLeft='100px' marginRight='100px'>
          <FormLabel>Nomination List</FormLabel>
          <NominationList movies={this.state.nominations} onItemClick={this.handleRemoveNominate}/>  
        </Box>
        <Box borderWidth="1px" borderRadius="lg" padding='30px' margin='100px' minH='300px'>
          {search_response} 
        </Box>
      </div>
    )
  }
}

export default App;
