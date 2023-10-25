import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const GameGrid = () => {
  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                padding="10px"
                spacing={6}>

    </SimpleGrid>
  )
}

export default GameGrid