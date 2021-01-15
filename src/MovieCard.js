import React from 'react'
import { Box, Image, Badge } from "@chakra-ui/react"

class MovieCard extends React.Component{
    render(){
        return(
        <Box maxW="250px" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={this.props.poster} fallbackSrc="https://via.placeholder.com/300" width='250px' height='250px' objectFit='cover'/>
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
        )
    }
}
export default MovieCard;