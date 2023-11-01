import { Box, Button, HStack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import GameCard from './GameCard'
interface Props {
    gameMode: string
    range: string;
}
const GameCardContainer = ({gameMode, range} : Props) => {
  return (
    <Box
      width="100%"
      height="74vh"
      borderRadius={{base: 0, md: 10}}
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={{base: '1rem', md: '2rem'}}
    >
        <GameCard game={gameMode} range={range}></GameCard>
    </Box>
  );
}

export default GameCardContainer