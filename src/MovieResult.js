import React from 'react'
import {Box, Heading, Text, Image, Flex, Button} from '@chakra-ui/react'


class MovieResult extends React.Component{

    constructor(props){
        super(props)
        this.nominated = false;
    }

    render(){
        if((this.props.nominationList).length === 0){
            this.nominated = false;
        }
        for(let i = 0; i < (this.props.nominationList).length; ++i){
            if(this.props.nominationList[i].imdbID === this.props.id){
                this.nominated = true;
                break;
            }else{
                this.nominated = false;
            }
        }
        var button = <Button margin='5px' colorScheme="teal" variant="solid" position='absolute' isDisabled={this.nominated} onClick={this.props.onItemClick} value={this.props.index}>Nominate</Button>

        return(
            <Flex borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={this.props.poster} fallbackSrc="https://via.placeholder.com/300" width='250px' height='250px' objectFit='cover'/>
                <Box padding='20px'>
                    <Heading size="lg">{this.props.title}</Heading>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="sm"
                        textTransform="uppercase"
                        ml="0.5"
                    >
                        Release: {this.props.year}
                    </Box>
                    {button}
                </Box>
            </Flex>

        )
    }
}

export default MovieResult;