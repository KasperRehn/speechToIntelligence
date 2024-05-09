import styled from 'styled-components';
import { Bounce } from "react-awesome-reveal";
import landingpagePic from "../assets/landingpagePic.png"
import Row from "../ui/Row";

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100vw;  
    height: 800px;
    color: var(--header-left);
`;
const Home = () => {
    return (
        <PageContainer>
            <Bounce>
            <Row type="horizontal">
                <Row type="vertical"> 
                    <img src={landingpagePic} alt="Microphone" style={{ width: "100%", height: "400px", objectFit: "contain" }} />
                    <h1 style={{ fontSize: "4rem", color: "var(--header-left)", marginBottom: "1rem", textAlign: "center" }}>
                        Hackathon 2024
                    </h1>
                    <h2 style={{ width: "100%", fontSize: "2.5rem", color: "var(--header-right)", marginBottom: "2rem", textAlign: "center" }}>
                        Speech to Intelligence
                    </h2>
                    <section style={{ textAlign: "center", fontSize: "2rem", color: "var(--color-grey-600)" }}>
                        <p style={{ width: "250px", margin: "auto" }}>
                            Sebastian Topalian, Daniela Azevedo, and Kasper Rehn
                        </p>
                    </section>
                </Row>
            </Row>
            </Bounce>
        </PageContainer>
        
    );
};
  
  export default Home;

  /*
  <Row type="horizontal" style={{"minWidth": '33vw'}}>
            <AboutSectionBottom>
            
              <p style={{width: "450px", margin: "auto"}}>
                speech to intelligence aims to make sense of verbal logging of
                operator experience and handover reports. The technical challange
                is create understanding from congestions of strings and numbers.
              </p>

            </AboutSectionBottom>
            </Row>
        </Row>

       
        
  */
