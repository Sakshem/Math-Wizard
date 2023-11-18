import { Button, HStack, Input, Switch, VStack, Text, Grid } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import Notification from './Notification';
import correctSoundPath from '/audio/correct-6033.mp3';
import incorrectSoundPath from '/audio/wrong-47985.mp3';
interface Props {
  range: string;
}
const Subtraction = ({range}: Props) => {
  // TODO: add a toggle button to allow negative results if turned off firstNumber should be greater than secondNumber
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
  // const [secondNumber, setSecondNumber] = useState(getRandomNumber(parseInt(range)));
  const [inputValue, setInputValue] = useState("");
  const [showNotification, setShowNotification] = useState({
    show: false,
    message: "",
    soundEffectPath: "",
  });
  const [allowNegative, setAllowNegative] = useState(false);
  const [secondNumber, setSecondNumber] = useState(0); // Initialize to 0
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!allowNegative) {
      setSecondNumber(getRandomNumber(firstNumber));
    } else {
      setSecondNumber(getRandomNumber(parseInt(range)));
    }
  }, [firstNumber, allowNegative, range]);

  const handleClick = () => {
    // verify answer first
    if (inputValue === (firstNumber - secondNumber).toString()) {
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
      console.log('wrong answer');
      setShowNotification({show: true, message: "Incorrect!", soundEffectPath: incorrectSoundPath});

      setTimeout(() => {
        setShowNotification((prev) => ({...prev, show: false}));
      }, 500);
    }

    // Delay resetting input and focusing to keep the keyboard open
    setTimeout(() => {
      setInputValue("");
      if (inputRef.current)
        inputRef.current.focus(); // Set focus on the input field

    }, 100);
  };


  const changeNumbers = () => {
    const newFirstNumber = getRandomNumber(parseInt(range));
    let newSecondNumber;
    if (allowNegative) {
      newSecondNumber = getRandomNumber(parseInt(range));
    } else {
      newSecondNumber = getRandomNumber(newFirstNumber);
    }
    setFirstNumber(newFirstNumber);
    setSecondNumber(newSecondNumber);
  }

  const handleKeyDown = (e : React.KeyboardEvent) => {
    // if Enter key is pressed, click the check button
    if (e.code === 'Enter') {
      setInputValue("");
      handleClick();
    }

  };
  return (
    <VStack align="center" spacing={4} alignItems="center" justifyContent="center">
      {/* <Box display="flex" justifyContent="flex-end" width="100%" paddingRight={["10px", "20px"]}>
      </Box> */}
      <Grid
        templateColumns={["1fr auto", "1fr auto"]}
        alignItems="center"
        gap={["2", "-2"]}
        width="100%"
      >
        <Text fontSize={["16px", "24px"]}>
          {firstNumber} - {secondNumber} = ?
        </Text>
        <Switch
          isChecked={allowNegative}
          onChange={() => setAllowNegative(!allowNegative)}
          colorScheme="teal"
          size="sm"
        >
          Allow -ve
        </Switch>
      </Grid>
      <HStack>
        <Input
          ref={inputRef}
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
      <Notification showNotification={showNotification} />
    </VStack>
  );
}

export default Subtraction