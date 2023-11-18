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
        <p>{message}</p>
    </div>
  ) : null;
};

export default Notification