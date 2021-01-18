import React from 'react'
import { Box, Image, Badge, Button, Flex } from "@chakra-ui/react"
import {CloseIcon} from "@chakra-ui/icons"

class MovieCard extends React.Component{

    constructor(props){
        super(props)
        this.nominated = false;
    }

    render(){
        // if(this.props.card_type == 'result'){
        //     if((this.props.nominationList).length === 0){
        //         this.nominated = false;
        //     }
        //     for(let i = 0; i < (this.props.nominationList).length; ++i){
        //         if(this.props.nominationList[i].imdbID === this.props.id){
        //             this.nominated = true;
        //             break;
        //         }else{
        //             this.nominated = false;
        //         }
        //     }
        //     var button = <Button margin='5px' colorScheme="teal" variant="solid" position='absolute' isDisabled={this.nominated} onClick={this.props.onItemClick} value={this.props.index}>Nominate</Button>
        // }else{
            
        // }
        //var button = <Button margin='5px' colorScheme="red" variant="solid" position='absolute' onClick={this.props.onItemClick} value={this.props.index}>Remove</Button>
        
        return(
        <Flex w="300px" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box>
            <Image src={this.props.poster} fallbackSrc="https://via.placeholder.com/300" width='250px' height='80px' objectFit='cover'/>
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        {this.props.type}
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        Release: {this.props.year}
                    </Box>
                </Box>

                <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                >
                    {this.props.title}
                </Box>
            </Box>
            </Box>
            <Button minHeight='100%' borderRadius={0} width='50px' height='' colorScheme="red" variant="solid" onClick={this.props.onItemClick} value={this.props.index}><CloseIcon/></Button>
        </Flex>
        )
    }
}
export default MovieCard;