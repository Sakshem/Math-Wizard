import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react'

const Division = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  }
  const changeNumbers = () => {
    setFirstNumber(getRandomNumber(10));
    setSecondNumber(getRandomNumber(10));
  }
  return (
    <>
    <Button onClick={changeNumbers}>Start/next</Button>
    <p>{firstNumber} / {secondNumber} = ? </p>
    <Input placeholder='your ans?'></Input>
    </>
  )
}

export default Division