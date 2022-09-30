import styled from "styled-components";

const Container = styled.div`
    width: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin: 0;
    padding: 0;

    z-index: 2;
    .hello {
        position: absolute;
        width: 240px;
        height: 92px;
        left: 219px;
        top: 20vh;

        font-family: 'Alien World';
        font-style: normal;
        font-weight: 400;
        font-size: 75px;
        line-height: 92px;
        /* identical to box height */


        color: #000000;
        -webkit-text-stroke: #FFFFFF;
        -webkit-text-stroke-width: 5px;
        
    }
    .Intro {
        position: absolute;
        width: 1002px;
        height: 228px;
        left: 219px;
        top: 25vh;

        font-family: 'Alien World';
        font-style: normal;
        font-weight: 400;
        font-size: 75px;
        line-height: 92px;

        color: #FFFFFF;

        border: 1px solid #000000;
        text-align: left;
    }
    .more {
        position: absolute;
        width: 349px;
        height: 51px;
        left: 219px;
        top: 37vh;

        font-family: 'Cynatar';
        font-style: normal;
        font-weight: 400;
        font-size: 75px;
        line-height: 51px;

        color: #FFFFFF;
        
    }
`;

const ContactButton = styled.button`
        position: absolute;
        box-sizing: border-box;
        padding: 1.2rem 1.2rem 1.2rem 1.2rem;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        width: auto;
        height: 53px;
        left: 219px;
        top: 50vh;

        background: #690759;
        border: 1px solid #02CEFC;
        border-radius: 16px;
        font-family: 'Alien World';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;

        color: #FFFFFF;

        :hover {
            background: #ED006C;
            cursor: pointer;
        }


`;

function TextContainer() {
    return (
        <Container>
            <h1 className="hello">Hello</h1>
            <h1 className="Intro">I am Mohammed BRIJA. Software Engineer;</h1>
            <h1 className="more">And more ....</h1>
            <ContactButton>Contact Me</ContactButton>
        </Container>
    );
}

export default TextContainer;