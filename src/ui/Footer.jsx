import NovonesisLogo from "../assets/NovonesisLogo.png";
import styled from 'styled-components';
import NesisFlux from "../assets/NovonesisFluxBackground.mp4";
import { useRef, useEffect } from "react";

const BackgroundVideo = styled.video`
  position: fixed;
  border-radius: 20px 10px 0 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 20vh;
  object-fit: cover;
  opacity: 1;
  z-index: -1;
  filter: contrast(1.5) brightness(0.9 ); 
  margin-bottom: 0 10px;
  margin: 0;
`;

const Logo = styled.div`
  position: fixed;
  bottom: 20px;  
  right: 20px;   
  z-index: 1200;
`;

const StyledImage = styled.img`
  width: 80px;   
  height: auto; 
  object-fit: contain;  
  margin-bottom: -30px;
  filter: contrast(0.8) brightness(0.2); 
  border-radius: 20px;
`;

function Footer() {
  const videoRef = useRef(null);
  
  useEffect(() => {
    // Adjust the playback rate
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div>
        <BackgroundVideo ref={videoRef} autoPlay loop muted playsInline>
          <source src={NesisFlux} type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>

        <Logo>
          <StyledImage src={NovonesisLogo} alt="Novonesis Logo" />
        </Logo>
    </div>
  );
}

export default Footer;