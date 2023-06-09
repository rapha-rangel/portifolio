import {SkillsArrows, 
				SkillsContainer, 
				SkillsContent,
				SkillsData, 
				SkillsDataName, 
				SkillsIcons, 
				SkillsHeader, 
				SkillsHeaderTitle, 
				SkillsList, 
				SkillsBox,
				SkillsDataIcon,
				SkillsSection, 
				SkillsSubtitle, 
				SkillsTitle } 
	from "./SkillsStyle"
import { BsBraces, BsFillBootstrapFill } from "react-icons/bs";
import { TbArrowBadgeDown } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoSass} from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import {SiStyledcomponents, SiRedux, SiMui, SiTailwindcss, SiReactrouter } from "react-icons/si";
import Context from "./Context";
import { useContext, useEffect, useState } from "react";

const Skills = ()=>{
	const [darkMode] = useContext(Context);

	const [skillsAnimation, setSkillsAnimation] = useState(false);

	useEffect(()=>{
		const moveSkillsAnimation = ()=>{
			if(window.scrollY > 1200){
				setSkillsAnimation(true)
			} else  {
				setSkillsAnimation(false)			
			}
		console.log(window.scrollY, skillsAnimation)
		}
		window.addEventListener('scroll', moveSkillsAnimation);
		return () =>{
			window.removeEventListener('scroll', moveSkillsAnimation);
		}
	},[])

  return (
		<SkillsSection id="skills" className="section">
			<SkillsTitle className="section__title" skillsAnimation={skillsAnimation}>Habilidades</SkillsTitle>
			<SkillsSubtitle className="section__subtitle" skillsAnimation={skillsAnimation}>Meu nível de conhecimento</SkillsSubtitle>
			<SkillsContainer className="container grid">
				<div>
					<SkillsContent>
						<SkillsHeader skillsAnimation={skillsAnimation}>
							<SkillsIcons><BsBraces/></SkillsIcons>
							<SkillsHeaderTitle>Frontend Developer</SkillsHeaderTitle>
							<SkillsArrows><TbArrowBadgeDown/></SkillsArrows>
						</SkillsHeader>
						<SkillsList className="grid" >
							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>HTML5</SkillsDataName>
									<SkillsDataIcon><AiOutlineHtml5/></SkillsDataIcon>
								</SkillsBox>
									
							</SkillsData>

							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>CSS3</SkillsDataName>
									<SkillsDataIcon><IoLogoCss3/></SkillsDataIcon>
								</SkillsBox>
									
							</SkillsData>

							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>Javacript</SkillsDataName>
									<SkillsDataIcon><IoLogoJavascript/></SkillsDataIcon>
								</SkillsBox>
									
							</SkillsData>

							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>React</SkillsDataName>
									<SkillsDataIcon><IoLogoReact/></SkillsDataIcon>
								</SkillsBox>
							</SkillsData>
							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>Redux</SkillsDataName>
									<SkillsDataIcon><SiRedux /></SkillsDataIcon>
								</SkillsBox>
							</SkillsData>
							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>ReactRouter</SkillsDataName>
									<SkillsDataIcon><SiReactrouter/></SkillsDataIcon>
								</SkillsBox>
							</SkillsData>
							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>NodeJs</SkillsDataName>
									<SkillsDataIcon><IoLogoNodejs/></SkillsDataIcon>
								</SkillsBox>
							</SkillsData>
							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>CSS-in-JS</SkillsDataName>
									<SkillsDataIcon><SiStyledcomponents/></SkillsDataIcon>
								</SkillsBox>
							</SkillsData>
							
							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>Bootstrap</SkillsDataName>
									<SkillsDataIcon><BsFillBootstrapFill/></SkillsDataIcon>
								</SkillsBox>
							</SkillsData>
							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>MaterialUI</SkillsDataName>
									<SkillsDataIcon><SiMui/></SkillsDataIcon>
								</SkillsBox>
							</SkillsData>
							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>Tailwind</SkillsDataName>
									<SkillsDataIcon><SiTailwindcss/></SkillsDataIcon>
								</SkillsBox>
							</SkillsData>
							
							<SkillsData skillsAnimation={skillsAnimation}>
								<SkillsBox darkMode={darkMode}>
									<SkillsDataName darkMode={darkMode}>Sass</SkillsDataName>
									<SkillsDataIcon><IoLogoSass/></SkillsDataIcon>
								</SkillsBox>
							</SkillsData>
							
						</SkillsList>
					</SkillsContent>
				</div>
			</SkillsContainer>
		</SkillsSection>
	)
}

export default Skills