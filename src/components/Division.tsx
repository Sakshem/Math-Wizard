import { Button, HStack, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const Division = () => {

  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
  }
  
  const [secondNumber, setSecondNumber] = useState(getRandomNumber(10));
  const [firstNumber, setFirstNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let candidate = getRandomNumber(10);
    while (candidate !== secondNumber && candidate % secondNumber !== 0) {
      candidate = getRandomNumber(10);
    }
    setFirstNumber(candidate);
  }, [secondNumber]);

  // useEffect(() => {
  //   let newSecondNumber = getRandomNumber(10);

  //   // Ensure that firstNumber is divisible by secondNumber
  //   let newFirstNumber;
  //   do {
  //     newFirstNumber = getRandomNumber(10);
  //   } while (newFirstNumber % newSecondNumber !== 0);
  //   // let newFirstNumber = getRandomNumber(10);
  //   // while (newFirstNumber % newSecondNumber !== 0) {
  //   //   newFirstNumber = getRandomNumber(10);
  //   // }

  //   setSecondNumber(newSecondNumber);
  //   setFirstNumber(newFirstNumber);
  // }, []);

  const handleClick = () => {
    // verify answer first
    if (inputValue === (firstNumber / secondNumber).toString()) {
      // TODO: show some message the answer was correct
      console.log('correct answer');

      // change numbers only when the answer is correct
      changeNumbers();
    }
    else {
      // TODO: show some message answer was incorrect
      console.log('wrong answer');
    }
  };

  const changeNumbers = () => {
    // setFirstNumber(getRandomNumber(10));
    setSecondNumber(getRandomNumber(10));
  }

  const handleKeyDown = (e : React.KeyboardEvent) => {
    // if Enter key is pressed, click the check button
    if (e.code === 'Enter') {
      setInputValue("");
      handleClick();
    }
  }

  return (
    <VStack>
      <p>
        {firstNumber} &divide; {secondNumber} = ?
      </p>

      <HStack>
        <Input
          type="number"
          placeholder="write here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          borderRadius={20}
        />
        <Button
          isDisabled={!inputValue}
          onClick={() => {
            handleClick();
            setInputValue("");
          }}
        >
          Check
        </Button>
      </HStack>
    </VStack>
  )
}

export default Division