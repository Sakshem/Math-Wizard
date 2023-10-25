import { Button, HStack, Box, VStack, Text, Container, Flex } from '@chakra-ui/react'
import React, { useState } from 'react';
import GameCardContainer from './GameCardContainer';
const HomePage = () => {
  const [method, setMethod] = useState('');
  const handleClick = (gameMode: string) => {
    setMethod(gameMode);
  }

  return (
    <>
    {method == '' && <VStack margin="15%">
      <HStack paddingBottom="2%">
        <Text> Welcome, let's play some maths quiz </Text>
      </HStack>
      <VStack>
        <HStack paddingBottom='6%'>
          <Button width="150px" marginRight='10px' onClick={() => handleClick('add')}>Addition</Button>
          <Button width="150px" onClick={() => handleClick('subtract')}>Subtraction</Button>
        </HStack>
        <HStack paddingBottom='6%'>
          <Button width="150px" marginRight='10px' onClick={() => handleClick('multiply')}>Multiplication</Button>
          <Button width="150px" onClick={() => handleClick('divide')}>Division</Button>
        </HStack>
      </VStack>
    </VStack>}
    {method=='add' && <GameCardContainer gameMode='add'></GameCardContainer>}
    {method=='subtract' && <GameCardContainer gameMode='subtract'></GameCardContainer>}
    {method=='multiply' && <GameCardContainer gameMode='multiply'></GameCardContainer>}
    {method=='divide' && <GameCardContainer gameMode='divide'></GameCardContainer>}
    </>
  );
}

export default HomePage