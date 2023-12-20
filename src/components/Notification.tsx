import { Text } from '@chakra-ui/react';
import  { useEffect } from 'react'
interface Props2 {
    showNotification: {show: boolean, message: string, soundEffectPath: string };
}
const Notification = ({showNotification} : Props2) => {
  //TODO: make the message notification better
  const {show, message, soundEffectPath} = showNotification;
  useEffect(() => {
    if (show) {
        playSoundEffect(soundEffectPath);
    }
  }, [show, soundEffectPath]);
  const playSoundEffect = (path : string) => {
    const audio = new Audio(path);
    audio.play().then(() => {
        audio.remove();
    });
  }
  return show ? (
    <div>
        <Text as="i" color={message==="Correct!"? "green.500" : "tomato"}>{message}</Text>
        {/* <Text as="i" color="tomato">{message}</Text> */}
    </div>
  ) : null;
};

export default Notification