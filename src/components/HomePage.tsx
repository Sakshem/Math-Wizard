import { Button, HStack, VStack, Text, RadioGroup, Stack, Radio, Grid, Center } from '@chakra-ui/react'
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
    // <>
    //   {method == "" && (
    //     <VStack margin="15%">
    //       <HStack paddingBottom="2%">
    //         <Text> Welcome, let's play some maths quiz </Text>
    //       </HStack>
    //       <VStack>
    //         <HStack>
    //           <Text>Select a range of numbers you want to play with</Text>
    //           <RadioGroup onChange={setRange} value={range}>
    //             <Stack direction="row">
    //               <Radio value="10">0-10</Radio>
    //               <Radio value="100">10-100</Radio>
    //               <Radio value="1000">100-1000</Radio>
    //             </Stack>
    //           </RadioGroup>
    //         </HStack>
    //         <HStack paddingBottom="6%">
    //           <Button
    //             width="150px"
    //             marginRight="10px"
    //             onClick={() => handleClick("add")}
    //           >
    //             Addition
    //           </Button>
    //           <Button width="150px" onClick={() => handleClick("subtract")}>
    //             Subtraction
    //           </Button>
    //         </HStack>
    //         <HStack paddingBottom="6%">
    //           <Button
    //             width="150px"
    //             marginRight="10px"
    //             onClick={() => handleClick("multiply")}
    //           >
    //             Multiplication
    //           </Button>
    //           <Button width="150px" onClick={() => handleClick("divide")}>
    //             Division
    //           </Button>
    //         </HStack>
    //       </VStack>
    //     </VStack>
    //   )}
    //   {method == "add" && (
    //     <GameCardContainer gameMode="add" range={range}></GameCardContainer>
    //   )}
    //   {method == "subtract" && (
    //     <GameCardContainer gameMode="subtract" range={range}></GameCardContainer>
    //   )}
    //   {method == "multiply" && (
    //     <GameCardContainer gameMode="multiply" range={range}></GameCardContainer>
    //   )}
    //   {method == "divide" && (
    //     <GameCardContainer gameMode="divide" range={range}></GameCardContainer>
    //   )}
    // </>
  );
}

export default HomePage