import { Card, CardBody } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Division from './Division';
interface Props {
    game: string
    range: string;
}
const GameCard = ({game, range} : Props) => {
  const addition = 'add';
  const subtraction = 'subtract';
  const multiplication = 'multiply';
  const division = 'divide'
  return (
    <Card marginY={{ base: 4, md: 10 }} marginX="auto" width={{ base: '95%', md: '80%' }}>
      <CardBody textAlign="center">
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" marginBottom={{ base: 4, md: 6 }}>
          Guess the output
        </Text>
        {game === addition && <Addition range={range} />}
        {game === subtraction && <Subtraction range={range} />}
        {game === multiplication && <Multiplication range={range} />}
        {game === division && <Division range={range} />}
      </CardBody>
    </Card>
    // <Card marginY={250} marginX={10} alignItems = 'center'>
    //   <h2>Guess the output</h2>
    //   {game == addition && 
    //   <CardBody>
    //     <Addition range={range}></Addition>
    //   </CardBody>
    //   }
    //   {game == subtraction && 
    //   <CardBody>
    //     <Subtraction range={range}></Subtraction>
    //   </CardBody>
    //   }
    //   {game == multiplication && 
    //   <CardBody>
    //     <Multiplication range={range}></Multiplication>
    //   </CardBody>}
    //   {game == division && 
    //   <CardBody>
    //     <Division range={range}></Division>
    //   </CardBody>}
    // </Card>
  );
}

export default GameCard