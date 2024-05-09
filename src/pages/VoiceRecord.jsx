import Row from "../ui/Row";
import VoiceRecording from "../components/VoiceRecording";
import styled from 'styled-components';
import { JackInTheBox  } from "react-awesome-reveal";
const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    padding-top: 20px;
    width: 50%;
    height: 1000px;
    color: var(--header-left);
  @media (max-width: 1920), (max-height: 1080) {
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  padding: 25px;
  border-radius: 10%; 
  transition: box-shadow ease-in-out 0.4s, padding ease-in-out 0.4s;
  box-shadow:
  0 12px rgba(48, 102, 190, 0.4),  
  6px 0 rgba(98, 45, 185, 0.3),
  0 0 0 1px rgba(48, 102, 190, 0.4), 
  0 0 12px rgba(98, 45, 185, 0.3); 
  &:focus,
  &:hover {
  box-shadow:
  0 15px rgba(48, 102, 190, 0.4),  
  9px 0 rgba(98, 45, 185, 0.3),
  0 0 0 3px rgba(48, 102, 190, 0.4), 
  0 0 15px rgba(98, 45, 185, 0.4); 
  padding: 35px;
  }
`;


function VoiceRecord() {
  return (
    <PageContainer>
        <JackInTheBox>         
            <Row type="vertical" style={{"minWidth": '33vw'}}>
            <ImageContainer>    
                <VoiceRecording />
            </ImageContainer>
        </Row>
    </JackInTheBox>
  </PageContainer>
  )
}

export default VoiceRecord