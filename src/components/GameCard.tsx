import React from 'react'
import { Card, CardBody, Input } from '@chakra-ui/react'
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Division from './Division';
interface Props {
    game: String
}
const GameCard = ({game} : Props) => {
  const addition = 'add';
  const subtraction = 'subtract';
  const multiplication = 'multiply';
  const division = 'divide'
  return (
    <Card marginY={250} marginX={10} alignItems = 'center'>
      <h2>Guess the output</h2>
      {game == addition && 
      <CardBody>
        <Addition></Addition>
      </CardBody>
      }
      {game == subtraction && 
      <CardBody>
        <Subtraction></Subtraction>
      </CardBody>
      }
      {game == multiplication && 
      <CardBody>
        <Multiplication></Multiplication>
      </CardBody>}
      {game == division && 
      <CardBody>
        <Division></Division>
      </CardBody>}
    </Card>
  );
}

export default GameCard