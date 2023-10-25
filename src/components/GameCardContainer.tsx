import { Box, Button, HStack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import GameCard from './GameCard'
interface Props {
    gameMode: String
}
const GameCardContainer = ({gameMode} : Props) => {
  return (
    <>
    <Box width='100%' borderRadius={10} overflow='hidden' justifyContent='center' alignItems='center'>
        <GameCard game={gameMode}></GameCard>
    </Box>
    </>
  )
}

export default GameCardContainer