import { Box, Button, HStack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import GameCard from './GameCard'
interface Props {
    gameMode: string
    range: string;
}
const GameCardContainer = ({gameMode, range} : Props) => {
  return (
    <>
    <Box width='100%' borderRadius={10} overflow='hidden' justifyContent='center' alignItems='center'>
        <GameCard game={gameMode} range={range}></GameCard>
    </Box>
    </>
  )
}

export default GameCardContainer