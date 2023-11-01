import { Button, HStack, Box, VStack, Text, Container, Flex, RadioGroup, Stack, Radio } from '@chakra-ui/react'
import { useState } from 'react';
import GameCardContainer from './GameCardContainer';

const HomePage = () => {
  const [method, setMethod] = useState('');
  const [range, setRange] = useState('10');
  const handleClick = (gameMode: string) => {
    setMethod(gameMode);
  }

  return (
    <>
      {method == "" && (
        <VStack margin="15%">
          <HStack paddingBottom="2%">
            <Text> Welcome, let's play some maths quiz </Text>
          </HStack>
          <VStack>
            <HStack>
              <Text>Select a range of numbers you want to play with</Text>
              <RadioGroup onChange={setRange} value={range}>
                <Stack direction="row">
                  <Radio value="10">0-10</Radio>
                  <Radio value="100">10-100</Radio>
                  <Radio value="1000">100-1000</Radio>
                </Stack>
              </RadioGroup>
            </HStack>
            <HStack paddingBottom="6%">
              <Button
                width="150px"
                marginRight="10px"
                onClick={() => handleClick("add")}
              >
                Addition
              </Button>
              <Button width="150px" onClick={() => handleClick("subtract")}>
                Subtraction
              </Button>
            </HStack>
            <HStack paddingBottom="6%">
              <Button
                width="150px"
                marginRight="10px"
                onClick={() => handleClick("multiply")}
              >
                Multiplication
              </Button>
              <Button width="150px" onClick={() => handleClick("divide")}>
                Division
              </Button>
            </HStack>
          </VStack>
        </VStack>
      )}
      {method == "add" && (
        <GameCardContainer gameMode="add" range={range}></GameCardContainer>
      )}
      {method == "subtract" && (
        <GameCardContainer gameMode="subtract" range={range}></GameCardContainer>
      )}
      {method == "multiply" && (
        <GameCardContainer gameMode="multiply" range={range}></GameCardContainer>
      )}
      {method == "divide" && (
        <GameCardContainer gameMode="divide" range={range}></GameCardContainer>
      )}
    </>
  );
}

export default HomePage