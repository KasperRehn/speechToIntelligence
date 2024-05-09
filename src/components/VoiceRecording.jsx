import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaMicrophone, FaStopCircle, FaTrashAlt, FaUpload, FaInfoCircle } from 'react-icons/fa';

const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  max-width: 200px;
  height: 100px;
  padding: 16px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 20px;
  resize: none; 

  background: linear-gradient(
    to bottom right,
    rgba(48, 102, 190, 0.1) 0%,
    rgba(98, 45, 185, 0.1) 50%,
    rgba(48, 102, 190, 0.1) 100%
  );

  color: #374151;

  &:focus {
    outline: none; 
    box-shadow: 0 0 0 2px rgba(98, 45, 185, 0.3); 
  }
  &::placeholder {
    color: rgba(48, 102, 190, 0.5); 
  }

   /* Styles for the scrollbar */
   &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-track {
    background: rgba(48, 102, 190, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(98, 45, 185, 0.3); 
    border-radius: 4px; 
  }
`;


const StyledTextareaTranscript = styled.textarea`
display: block;
  width: 100%;
  min-width: 400px;
  height: 100px;
  padding: 16px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.5;
  resize: none; 

  background: linear-gradient(
    to bottom right,
    rgba(48, 102, 190, 0.1) 0%,
    rgba(98, 45, 185, 0.1) 50%,
    rgba(48, 102, 190, 0.1) 100%
  );

  color: #374151;

  &:focus {
    outline: none; 
    box-shadow: 0 0 0 2px rgba(98, 45, 185, 0.3); 
  }
  &::placeholder {
    color: rgba(48, 102, 190, 0.5); 
  }
   /* Styles for the scrollbar */
   &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-track {
    background: rgba(48, 102, 190, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(98, 45, 185, 0.3); 
    border-radius: 4px; 
  }
`;

const StyledButtonBlue = styled.button`
  background-color: rgba(48, 102, 190, 0.2); 
  border: none;
  border-radius: 50%; 
  padding: 16px;
  display: flex;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out; 

  &:hover {
    background-color: rgba(48, 102, 190, 0.6); 
    color: white;
  }

`;
const StyledButtonPurple = styled.button`
  background-color: rgba(98, 45, 185, 0.2); 
  border: none;
  border-radius: 50%;
  padding: 16px;
  display: flex;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(98, 45, 185, 0.6); 
    color: white;
  }
`;


const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 180px;
  background-color: rgba(48, 102, 190, 0.8);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -90px; // Adjust this to center the tooltip
  opacity: 0;
  transition: opacity 0.3s;

  ${Tooltip}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;


const VoiceRecording = () => {
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null); // Use useRef here

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }
        setTranscript(prevTranscript => prevTranscript + finalTranscript);
        setInterimTranscript(interim);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };
    } else {
      console.warn('This browser does not support Speech Recognition.');
    }
  }, []);


    const handleStart = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const handleStop = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop(); // This will stop listening
      setListening(false);
    }
  };

  const handleClear = () => {
    setTranscript('');
    setInterimTranscript('');
    setListening(false);
  };

  const sendTranscriptToDatabase = async () => {
    if (!transcript) {
      alert("No transcript available to send.");
      return;
    }
    
    try {
      const response = await fetch('https://your-api-endpoint.com/transcripts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ transcript })
      });
  
      if (response.ok) {
        alert("Transcript sent successfully!");
        setTranscript(''); // Optionally clear transcript after sending
      } else {
        alert("Failed to send transcript.");
      }
    } catch (error) {
      console.error('Error sending transcript:', error);
      alert("Error sending transcript.");
    }
  };

  return (
    <div>
      <Tooltip>
        <FaInfoCircle size={20} style={{ marginLeft: '5px', color: 'rgba(98, 45, 185, 0.6)',borderRadius:"50%" }} />
        <TooltipText>Not compatible with Android or iOS</TooltipText>
      </Tooltip>
      <div style={{ display: 'flex', justifyContent: "center", marginBottom: "10px" }}> {/* Wrap buttons in a flex container */}
        <StyledButtonPurple onClick={handleStart} disabled={listening}>
          <FaMicrophone size={20} /> 
        </StyledButtonPurple>

        <StyledButtonBlue onClick={handleStop} disabled={!listening}>
          <FaStopCircle size={20}/> 
        </StyledButtonBlue>

        <StyledButtonBlue onClick={handleClear}>
         <FaTrashAlt size={20}/>
        </StyledButtonBlue>

        <StyledButtonPurple onClick={sendTranscriptToDatabase} disabled={!transcript}>
          <FaUpload size={20}/>
        </StyledButtonPurple>

       
      </div>
      
      <div  style={{ display: 'flex', flexDirection: "column", alignItems: "center", marginBottom: "10px" }}>
      <StyledTextarea value={interimTranscript} readOnly />
      <p>Transcript:</p>
      <StyledTextareaTranscript value={transcript} readOnly />
      </div>
    </div>
  );
}

export default VoiceRecording;