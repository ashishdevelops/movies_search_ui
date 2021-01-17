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
    this.state = {movies: {}, search_term: "error", loading:false, nominations: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNominate = this.handleNominate.bind(this);
  }

  moviesList(){
    console.log('MAKING REQUEST')
    // this.setState({loading: true}, ()=>{
    //   const http = new XMLHttpRequest();
    //   const url = `https://www.omdbapi.com/?s=${this.state.search_term}&apikey=e2878480&`
    //   http.open("GET", url)
    //   http.send()

    //   http.onreadystatechange = (e) => {
    //     console.log(http.readyState, http.status)
    //     if(http.readyState === 4 && http.status === 200){
          this.setState({
            movies: {"Search":[{"Title":"Guardians of the Galaxy","Year":"2014","imdbID":"tt2015381","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"},{"Title":"Guardians of the Galaxy Vol. 2","Year":"2017","imdbID":"tt3896198","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"},{"Title":"Guardians of the Galaxy","Year":"2015–","imdbID":"tt4176370","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNDM4NDQxMDU2MV5BMl5BanBnXkFtZTgwMDY2MDQ5NjE@._V1_SX300.jpg"},{"Title":"Guardians of the Galaxy: Inferno","Year":"2017","imdbID":"tt7131308","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGQ0YzEyNWQtNGJiMi00NTAxLThkNDctNGY2ODkzYWMxZmZkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"LEGO Marvel Super Heroes - Guardians of the Galaxy: The Thanos Threat","Year":"2017","imdbID":"tt7387224","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjhlYzVhNTMtMmFkYy00NDhiLTkyNDgtYzhhMTZiMzM2OTA5XkEyXkFqcGdeQXVyNjI2OTgxNzY@._V1_SX300.jpg"},{"Title":"Disneyland Resort: Guardians of the Galaxy - Mission Breakout!","Year":"2017","imdbID":"tt7134278","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTYwZmQwY2MtMzkwMC00ZjllLTg2YWItNzg1MzEzOThjYTkxXkEyXkFqcGdeQXVyMTA1MTY4NTkz._V1_SX300.jpg"},{"Title":"Guardians of the Galaxy: The Telltale Series","Year":"2017","imdbID":"tt6636812","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BMzkwYzJkOTYtOWVlZC00Mzk3LThlZTktYWY3MDM3N2IwZDA3XkEyXkFqcGdeQXVyNTk5Nzg0MDE@._V1_SX300.jpg"},{"Title":"Bonus Round: The Making of 'Guardians of the Galaxy Vol. 2'","Year":"2017","imdbID":"tt7312152","Type":"movie","Poster":"N/A"},{"Title":"Guardians of the Galaxy Vol. 3","Year":"2023","imdbID":"tt6791350","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWM3ZWNlMjgtODZjMi00YTAwLWJhZTktMTM4NTgyMjE0NjMwXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"The Intergalactic Visual Effects of 'Guardians of the Galaxy'","Year":"2014","imdbID":"tt5286008","Type":"movie","Poster":"N/A"}],"totalResults":"12","Response":"True"}['Search']  //JSON.parse(http.responseText)['Search'],
    //      loading: false
          });
    //       console.log("API CALL RECIEVED")
    //     }
    //   }
    // });
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
    event.target.disabled = true;
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
      var search_response = <MovieCardsList onItemClick={this.handleNominate} movies={this.state.movies} loading={this.state.loading}/>  
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
          <NominationList movies={this.state.nominations} onDenominate={this.handleRemoveNominate}/>  
        </Box>
        <Box borderWidth="1px" borderRadius="lg" padding='30px' margin='100px' minH='300px'>
          {search_response} 
        </Box>
      </div>
    )
  }
}

export default App;
