import {ContactContainer, 
				ContactIcon, 
				ContactInformation, 
				ContactSection, 
				ContactSubtitle, 
				ContactTitle,
				ContactInformationTitle, 
				ContactInformationSubtitle,
				ContactContent
	} from "./ContactStyle";
import {BsWhatsapp} from "react-icons/bs";
import {MdOutlineMailOutline } from "react-icons/md";
import { SlSocialLinkedin} from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

const Contact =()=>{
	return (
		<ContactSection id="contact">
			<ContactTitle className="section__title">Contact Me</ContactTitle>
			<ContactSubtitle className="section__subtitle">Get in Touch</ContactSubtitle>
			<ContactContainer className="container grid">
				<ContactContent>
					<ContactInformation href="https://web.whatsapp.com/send?phone=5522998402009" target="_blank">
						<ContactIcon><BsWhatsapp/></ContactIcon>

						<div>
							<ContactInformationTitle>WhatsApp</ContactInformationTitle>
							<ContactInformationSubtitle>(22) 99840-2009</ContactInformationSubtitle>
						</div>

					</ContactInformation>

					<ContactInformation href="mailto:rapha.carvalho7@gmail.com" target="_blank"> 
						<ContactIcon><MdOutlineMailOutline/></ContactIcon>

						<div>
							<ContactInformationTitle>Email</ContactInformationTitle>
							<ContactInformationSubtitle>rapha.carvalho7@gmail.com</ContactInformationSubtitle>
						</div>

					</ContactInformation>
					<ContactInformation href="https://www.linkedin.com/in/raphael-carvalho-rangel/" target="_blank">
						<ContactIcon><SlSocialLinkedin/></ContactIcon>

						<div>
							<ContactInformationTitle>Linkdin</ContactInformationTitle>
							<ContactInformationSubtitle>@raphael-carvalho-rangel</ContactInformationSubtitle>
						</div>

					</ContactInformation>
					<ContactInformation href="https://github.com/rapha-rangel/" target="_blank">
						<ContactIcon><FiGithub/></ContactIcon>

						<div>
							<ContactInformationTitle>Github</ContactInformationTitle>
							<ContactInformationSubtitle>@rapha-rangel</ContactInformationSubtitle>
						</div>

					</ContactInformation>
				</ContactContent>
			</ContactContainer>
		</ContactSection>
	)
}

export default Contact;
