import {FooterSection, 
				FooterBg, 
				FooterContainer, 
				FooterSubtitle, 
				FooterTitle,
	} from "./FooterStyle";


const Footer =({darkMode})=>{
	return (
		<FooterSection>
			<FooterBg darkMode={darkMode}>
				<FooterContainer className="container grid">
					<div>
						<FooterTitle>Raphael</FooterTitle>
						<FooterSubtitle>Frontend Developer</FooterSubtitle>
					</div>
				</FooterContainer>
			</FooterBg>
		</FooterSection>
	)
}

export default Footer;