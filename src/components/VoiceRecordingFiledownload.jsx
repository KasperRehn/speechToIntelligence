import { useState } from 'react';
import { VoiceRecorder } from 'react-voice-recorder-player';

const VoiceRecording = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const styles = {
    mainContainerStyle: {
      background: "transparent",
      boxShadow: `
      0 2px rgba(48, 102, 190, 0.4), 
      4px 0 rgba(98, 45, 185, 0.3),
      0 0 0 2px rgba(48, 102, 190, 0.4),
      0 0 8px rgba(98, 45, 185, 0.3)
    `,
      

    },
    controllerContainerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      height: "50px",
      background: "var(--color-brand-300)",
    },

    controllerStyle: {
      
      background: isHovered
        ? `linear-gradient(
            rgba(48, 102, 190, 0.7), 
            rgba(98, 45, 185, 0.4) 
          )`
        : `linear-gradient(
            rgba(48, 102, 190, 1), 
            rgba(98, 45, 185, 0.7) 
          )`,
      borderRadius: '4px',
      opacity: "1",
      cursor: 'pointer',
      padding: '10px',
      transition: 'all 0.3s ease',

    },
    waveContainerStyle: {
      background: "transparent",
      height: '100px',
      marginTop: '20px',
      width: '100%',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: "all 0.4s ease-in",

    },
    
  };

  return (
    <>
      <div>
        <VoiceRecorder
          mainContainerStyle={styles.mainContainerStyle}
          controllerContainerStyle={styles.controllerContainerStyle}
          controllerStyle={styles.controllerStyle}
          waveContainerStyle={styles.waveContainerStyle}
          graphColor="rebeccapurple"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </>
  );
};

export default VoiceRecording;
