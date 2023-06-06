import { useContext, useEffect, useState } from "react";
import {AboutSection, 
				AboutTitle, 
				AboutSubtitle, 
				AboutContainer, 
				AboutData, 
				AboutDescription, 
				AboutButton,
				Button, 
				ButtonIcon} 
	from "./AboutStyle";
	import { BsDownload} from "react-icons/bs";
const About =()=>{
	const [aboutAnimation, setAboutAnimation] = useState(false);

	useEffect(()=>{
		const moveAboutAnimation = ()=>{
			if(window.scrollY > 400){
				setAboutAnimation(true)
			} else  {
				setAboutAnimation(false)
			}
		}
		window.addEventListener('scroll', moveAboutAnimation);
		return () =>{
			window.removeEventListener('scroll', moveAboutAnimation);
		}
	},[])

  return(
		<AboutSection id="about" className="section" >
			<AboutTitle className="section__title" aboutAnimation={aboutAnimation}>Sobre Mim</AboutTitle>
			<AboutSubtitle className="section__subtitle" aboutAnimation={aboutAnimation} >Um pouco mais sobre Raphael</AboutSubtitle>
			<AboutContainer className="container grid">
				<AboutData>
					<AboutDescription aboutAnimation={aboutAnimation}>Analista de sistemas em formação buscando novos desafios como desenvolvedor Front-end. 
						Entusiasta em soft skills, movido a aprendizado contínuo, com foco em React.js, Next.js, Redux, JavaScript, 
						Styled Components, Material UI e consumo de APIs REST. Habilidades para trabalho em grupo, pensamento crítico, 
						compreensão de problemas, proposição de soluções e manuseio responsável de informações. Atualmente busca por 
						oportunidades no mercado como desenvolvedor a fim de alcançar o nível Full Stack. Busca agregar os aprendizados e 
						experiências adquiridas ao longo da vida profissional como Engenheiro de Produção e especialista em Logística 
						empresarial e Negócios Internacionais. 
					</AboutDescription>
					<AboutButton aboutAnimation={aboutAnimation}>
						<Button download href="/pdf/CV_Raphael_Rangel.pdf" className="button--flex" >
							<ButtonIcon>Download CV <BsDownload/></ButtonIcon>
						</Button>
					</AboutButton>
				</AboutData>
				
			</AboutContainer>
		</AboutSection>
  )
}

export default About;