import { Button, HStack, Input, NumberInput, NumberInputField, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react'

const Addition = () => {
  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  }
  const [firstNumber, setFirstNumber] = useState(getRandomNumber(10));
  const [secondNumber, setSecondNumber] = useState(getRandomNumber(10));
  const [inputValue, setInputValue] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = (e : any) => {
    // verify answer first
    if (ref.current) {
        console.log('ref.current.value: ' + ref.current.value);
        console.log('input.value ' + inputValue);
        if (inputValue === (firstNumber + secondNumber).toString()) {
          // if (ref.current.value === (firstNumber + secondNumber).toString()) {
            console.log('correct ans!');
            // ref.current.value = '';
            console.log(inputValue);
        }
    }

    // change numbers for the next question
    changeNumbers();
  }

//   useEffect(() => {
//     clearInputField();
//   }, [clearInputField]);
//   const clearInputField = useCallback(async (setInputValue, inputValue) => {await setInputValue("")},[inputValue, setInputValue])

  const changeNumbers = () => {
    setFirstNumber(getRandomNumber(10));
    setSecondNumber(getRandomNumber(10));
  }


  return (
    <VStack>
    <p>{firstNumber} + {secondNumber} = ? </p>
    <HStack>
    <NumberInput>
        <NumberInputField ref={ref} value={inputValue} onChange={(e) => setInputValue(e.target.value)} borderRadius={20}/>
        {/* <NumberInputField ref={ref} borderRadius={20} value={ref.current?.value}/> */}
    </NumberInput>

    <Button onClick={handleClick}>Check ans</Button>
    </HStack>
    {/* <Button onClick={changeNumbers}>Next</Button> */}
    </VStack>
  )
}

export default Addition