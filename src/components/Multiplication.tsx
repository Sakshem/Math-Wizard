import { Button, HStack, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const Multiplication = () => {
  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  const [firstNumber, setFirstNumber] = useState(getRandomNumber(10));
  const [secondNumber, setSecondNumber] = useState(getRandomNumber(10));
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    // verify answer first
    if (inputValue === (firstNumber * secondNumber).toString()) {
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
    setFirstNumber(getRandomNumber(10));
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
        {firstNumber} &times; {secondNumber} = ?
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

export default Multiplication