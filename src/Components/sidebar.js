import styled from "styled-components";

const Bolt = styled.img`
        width: 43px;
        height: 63px;
        left: 47px;
        top: 23px;
        mix-blend-mode: normal;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
Bolt.defaultProps = {
    src: "icons/lbolt.png",
    
}

const Home = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 80px;
    height: 80px;
    left: 21%;;
    top: 20px;

    background: rgba(105, 7, 89, 0.65);
    border-radius: 10px;
    :hover {
        background-color: #ffd300;
        #Bolt {
            filter: invert();
        }
        cursor: pointer;
    }
`;

const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 63px;
    height: 63px;
    left: 33px;
    top: 155.55px;

    background: #D9D9D9;
    border-radius: 10px;
    transform: rotate(-45deg);
    :hover {
        background: #02CEFC;
        cursor: pointer;
    }
`;

const AboutIcon = styled.img`
    width: 45px;
    height: 45px;
    transform: rotate(45deg);
`;
AboutIcon.defaultProps = {
    src: "icons/about.svg",
}

const Projects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 63px;
    height: 63px;
    left: 33px;
    top: 266.55px;

    background: #D9D9D9;
    border-radius: 10px;
    transform: rotate(-45deg);
    :hover {
        background: #02CEFC;
        cursor: pointer;
    }
`;

const ProjectsIcon = styled.img`
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
 `;
ProjectsIcon.defaultProps = {
    src: "icons/projects.svg",
}

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 63px;
    height: 63px;
    left: 33px;
    top: 377.55px;

    background: #D9D9D9;
    border-radius: 10px;
    transform: rotate(-45deg);
    :hover {
        cursor: pointer;
        background: #02CEFC;
    }
`;

const ContactIcon = styled.img`
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
`;
ContactIcon.defaultProps = {
    src: "icons/contact.svg",
}

const Profile = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 91px;
    height: 91px;
    left: 23px;
    top: 90vh;

    background: url(icons/senko.svg);
  
`;

const MailContact = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    left: 56px;
    top: 89vh;
    background-color: white;
    background-image: url(icons/mail.svg);
    :hover {
        background-color: #ffd300;
        cursor: pointer;
    }
`;

const TwitterContact = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    left: 22px;
    top: 94vh;
    background-color: white;
    background-image: url(icons/twitter.svg);
    :hover {
        background-color: #ffd300;
        cursor: pointer;
    }
`;


const InstagramContact = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    left: 90px;
    top: 94vh;
    background-color: white;
    background-image: url(icons/instagram.svg);
    background-position: center;
    :hover {
        background-color: #ffd300;
        cursor: pointer;
    }
`;


const SideBar = styled.div`
    position: absolute;
    width: 137px;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: rgba(105, 7, 89, 0.40);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 999;
    ::after {
        content: '';
        position: absolute;
        background: rgba(0, 0, 0, 0.57);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

function Sidebar() {
    return (
        <SideBar>
            <Home>
                <a href="#home">
                    <Bolt id="Bolt" />
                </a>
            </Home>

            <About>
                <a href="#about">
                    <AboutIcon />
                </a>
            </About>

            <Projects>
                <a href="#projects">
                    <ProjectsIcon />
                </a>
            </Projects>
            
            <Contact>
                <a href="#contact">
                    <ContactIcon />
                </a>
            </Contact>
            
            <Profile/>
                <a href="mailto: brija.main@gmail.com " target="_blank" rel="noopener noreferrer">
                    <MailContact />
                </a>
                
                <a href="https://twitter.com/brija_jr" target="_blank" rel="noopener noreferrer">
                <TwitterContact />
                </a>

                <a href="https://www.instagram.com/brija_jr" target="_blank" rel="noopener noreferrer">
                <InstagramContact />
                </a>
        </SideBar>
    );
}
export default Sidebar;