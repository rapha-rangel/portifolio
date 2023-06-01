import { useContext } from "react";
import {AboutSection, 
				AboutTitle, 
				AboutSubtitle, 
				AboutContainer, 
				AboutData, 
				AboutDescription, 
				AboutInfo, 
				AboutInfoTitle, 
				AboutInfoName,
				AboutButton,
				Button, 
				ButtonIcon} 
	from "./AboutStyle";
	import { BsDownload} from "react-icons/bs";
	import Context from "./Context";

const About =()=>{
	const [darkMode] = useContext(Context);

  return(
		<AboutSection id="about">
			<AboutTitle className="section__title">About Me</AboutTitle>
			<AboutSubtitle className="section__subtitle">My Introducion</AboutSubtitle>
			<AboutContainer className="container grid">
				<AboutData>
					<AboutDescription>Frontend Developer Junior, com grande vontade de aprender e produzir o seu melhor</AboutDescription>
					<AboutInfo>
						<div>
							<AboutInfoTitle darkMode={darkMode}>08+</AboutInfoTitle>
							<AboutInfoName>Completed <br/> project</AboutInfoName>
						</div>
						<div>
							<AboutInfoTitle darkMode={darkMode}>01+</AboutInfoTitle>
							<AboutInfoName>Years <br/> experience</AboutInfoName>
						</div>
						<div>
							<AboutInfoTitle darkMode={darkMode}>05+</AboutInfoTitle>
							<AboutInfoName>Name <br/> transtor</AboutInfoName>
						</div>
					</AboutInfo>
					<AboutButton>
						<Button download href="/pdf/CV_Raphael_Rangel.pdf" className="button--flex">
							<ButtonIcon>Download CV <BsDownload/></ButtonIcon>
						</Button>
					</AboutButton>
				</AboutData>
				
			</AboutContainer>
		</AboutSection>
  )
}

export default About;