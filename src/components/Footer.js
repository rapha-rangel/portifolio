import {FooterSection, 
				FooterBg, 
				FooterContainer, 
				FooterSubtitle, 
				FooterTitle,
				FooterLink,
				FooterLinks,
				FooterSocilas,
				FooterSocial
	} from "./styled";

import { SlSocialLinkedin} from "react-icons/sl";
import { FiGithub, FiInstagram } from "react-icons/fi";

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