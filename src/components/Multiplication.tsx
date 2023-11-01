import { Button, HStack, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import Notification from './Notification';
import correctSoundPath from '/audio/correct-6033.mp3';
import incorrectSoundPath from '/audio/wrong-47985.mp3';
interface Props {
  range: string;
}
const Multiplication = ({range} : Props) => {
  const getRandomNumber = (max: number) => {
    if (max === 100) {
      return Math.floor(Math.random() * 91) + 10;
    }
    else if (max === 1000) {
      return Math.floor(Math.random() * 901) + 100;
    }
    return Math.floor(Math.random() * max);
  }

  const [firstNumber, setFirstNumber] = useState(getRandomNumber(parseInt(range)));
  const [secondNumber, setSecondNumber] = useState(getRandomNumber(parseInt(range)));
  const [inputValue, setInputValue] = useState("");
  const [showNotification, setShowNotification] = useState({
    show: false,
    message: "",
    soundEffectPath: "",
  })

  const handleClick = () => {
    // verify answer first
    if (inputValue === (firstNumber * secondNumber).toString()) {
      // TODO: show some message the answer was correct
      console.log('correct answer');
      setShowNotification({show: true, message: "correct!", soundEffectPath: correctSoundPath});

      // set a timeout to reset showNotification after 1 second
      setTimeout(() => {
        setShowNotification((prev) => ({...prev, show: false}));
      }, 500);

      // change numbers only when the answer is correct
      changeNumbers();
    }
    else {
      // TODO: show some message answer was incorrect
      console.log('wrong answer');
      setShowNotification({show: true, message: "Incorrect!", soundEffectPath: incorrectSoundPath});

      setTimeout(() => {
        setShowNotification((prev) => ({...prev, show: false}));
      }, 500);
    }
  };

  const changeNumbers = () => {
    setFirstNumber(getRandomNumber(parseInt(range)));
    setSecondNumber(getRandomNumber(parseInt(range)));
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
      <Notification showNotification={showNotification}/>
    </VStack>
  )
}

export default Multiplication