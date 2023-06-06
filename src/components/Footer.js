import {FooterSection, 
				FooterBg, 
				FooterContainer, 
				FooterSubtitle, 
				FooterTitle,
	} from "./FooterStyle";
import Context from "./Context";
import { useContext } from "react";

const Footer =() => {
	const [darkMode] = useContext(Context);
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