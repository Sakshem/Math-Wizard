import { Button, VStack, Text, RadioGroup, Stack, Radio, Grid } from '@chakra-ui/react'
import { useState } from 'react';
import GameCardContainer from './GameCardContainer';

const HomePage = () => {
  const [method, setMethod] = useState('');
  const [range, setRange] = useState('10');
  const handleClick = (gameMode: string) => {
    setMethod(gameMode);
  }

  return (
      <VStack paddingX={{ base: 4, md: 8 }} paddingY={8} align="center" spacing={8}>
      {method === "" && (
        <VStack spacing={{base: 6, md: 8}} width="100%">
          <Text fontSize={{ base: '24px', md: '36px' }}>
            Welcome, let's play some maths quiz
          </Text>
          <VStack width="100%" spacing={4}>
            <Text>Choose your number range</Text>
            <RadioGroup onChange={setRange} value={range}>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Radio value="10">0-10</Radio>
                <Radio value="100">10-100</Radio>
                <Radio value="1000">100-1000</Radio>
              </Stack>
            </RadioGroup>
          </VStack>
          <Grid
            templateColumns={{ base: '1fr', md: '1fr 1fr' }}
            gap={{base: 4, md: 8}}
            width="100%"
          >
            <Button
              width="100%"
              onClick={() => handleClick("add")}
            >
              Addition
            </Button>
            <Button
              width="100%"
              onClick={() => handleClick("subtract")}
            >
              Subtraction
            </Button>
            <Button
              width="100%"
              onClick={() => handleClick("multiply")}
            >
              Multiplication
            </Button>
            <Button
              width="100%"
              onClick={() => handleClick("divide")}
            >
              Division
            </Button>
          </Grid>

        </VStack>
      )}
      {method !== "" && (
        <GameCardContainer gameMode={method} range={range}></GameCardContainer>
      )}
    </VStack>
  );
}

export default HomePage