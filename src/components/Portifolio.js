import {PortifolioContainer, 
				PortifolioContent, 
				PortifolioImage, 
				PortifolioSection, 
				PortifolioSubtitle, 
				PortifolioTitle,
				PortifolioData,
				PortifolioDataTitle,
				PortifolioDataDescription,
				PortifolioDataButton,
				PortifolioDataButtonIcon,
				PortifolioArrowLeft,
				PortifolioArrowRight,
				PortifolioArrowContent,
				PortifolioImageSkills,
				PortifolioImageContent,
				PortifolioImageOverlay
	} from "./PortifolioStyle";

import {HiOutlineArrowCircleRight, 
				HiOutlineArrowNarrowLeft, 
				HiOutlineArrowNarrowRight } 
from "react-icons/hi";
import { IoLogoReact } from "react-icons/io5";
import {SiStyledcomponents, SiRedux, SiMui, SiTailwindcss, SiReactrouter } from "react-icons/si";
import {IoLogoCss3, 
					IoLogoJavascript, 
					IoLogoNodejs} 
from "react-icons/io";
import { useRef, useEffect, useState } from "react";
import pokedex from './imagens/projeto_pokedex.jpg'
import calculadora from './imagens/projeto_calculadora.jpg';
import faturamento from './imagens/projeto_faturamento.jpg';
import livro from './imagens/projeto_livros.jpg';
import poll from './imagens/Projeto_poll.jpg'


const Portifolio = ()=>{
	const arrow = useRef(null);
	const [portifolioAnimation, setPortifolioAnimation] = useState(false);

	useEffect(()=>{
		const movePortifolioAnimation = ()=>{
			if(window.scrollY > 3000){
				setPortifolioAnimation(true)
			} else  {
				setPortifolioAnimation(false)			
			}
		console.log(window.scrollY, portifolioAnimation)
		}
		window.addEventListener('scroll', movePortifolioAnimation);
		return () =>{
			window.removeEventListener('scroll', movePortifolioAnimation);
		}
	},[])
	
	const handleArrowLeft =(e)=>{
		e.preventDefault();
		if(arrow.current.scrollLeft === 0){
			arrow.current.scrollLeft = arrow.current.offsetWidth*4.1
		}else{
			arrow.current.scrollLeft -= arrow.current.offsetWidth
		}
		console.log(arrow.current.scrollLeft)
	}

	const handleArrowRight =(e)=>{
		e.preventDefault();
		if(arrow.current.scrollLeft > arrow.current.offsetWidth*3.1){
			arrow.current.scrollLeft = 0
		}else{
			arrow.current.scrollLeft += arrow.current.offsetWidth
		}
		console.log(arrow.current.scrollLeft)
	}


	return (
		<PortifolioSection id="portifolio" className="section">
			<PortifolioTitle className="section__title" portifolioAnimation={portifolioAnimation}>Portifolio</PortifolioTitle>
			<PortifolioSubtitle className="section__subtitle" portifolioAnimation={portifolioAnimation}>Meus trabalhos recentes</PortifolioSubtitle>
			<div style={{display: "flex", marginLeft: "1rem" , marginRight: "1rem"}} >
			<PortifolioArrowContent>
			<PortifolioArrowLeft onClick={handleArrowLeft}>  <HiOutlineArrowNarrowLeft/></PortifolioArrowLeft>
				
			</PortifolioArrowContent>
			
			<PortifolioContainer className="container" ref={arrow} portifolioAnimation={portifolioAnimation}>
			
				<div style={{width: "500%", display: "flex"}} >


			
				<PortifolioContent>
					<PortifolioImageContent>
						<PortifolioImage src={poll} alt ="Perguntas"/>
						<PortifolioImageOverlay>
							<PortifolioImageSkills>
								<IoLogoReact/>
								<SiRedux/>
								<SiMui/>
								<SiReactrouter/> 
							</PortifolioImageSkills>
						</PortifolioImageOverlay>
					</PortifolioImageContent>
					<PortifolioData>
						<PortifolioDataTitle>Perguntas</PortifolioDataTitle>
						<PortifolioDataDescription>Esse projeto o usuario pode responder e gerara novas perguntas, além de acessar quais repostas foram mais escolhidas. Informação retirada do Api da Udacity.</PortifolioDataDescription>
						<PortifolioDataButton className="button--flex" href="https://github.com/rapha-rangel/employee_polls_udacity" target="_blank">
							Demo
							<PortifolioDataButtonIcon >  <HiOutlineArrowCircleRight/></PortifolioDataButtonIcon>
						</PortifolioDataButton>
					</PortifolioData>
				</PortifolioContent>	




				<PortifolioContent>
					<PortifolioImageContent>
						<PortifolioImage src={livro} alt ="Armario de Livros"/>
						<PortifolioImageOverlay>
							<PortifolioImageSkills>
								<IoLogoReact/>
								<IoLogoJavascript/>
								<IoLogoCss3/>
								<SiReactrouter/> 
							</PortifolioImageSkills>
						</PortifolioImageOverlay>
					</PortifolioImageContent>
					<PortifolioData>
						<PortifolioDataTitle>Armario de Livros</PortifolioDataTitle>
						<PortifolioDataDescription>Esse armario de livros o usuario pode escolher as opções entre as quais, o livro que quer ler, esta lendo e já leu. Informação retirada do Api da Udacity.</PortifolioDataDescription>
						<PortifolioDataButton className="button--flex" href="https://github.com/rapha-rangel/my-reads" target="_blank">
							Demo
							<PortifolioDataButtonIcon >  <HiOutlineArrowCircleRight/></PortifolioDataButtonIcon>
						</PortifolioDataButton>
					</PortifolioData>
				</PortifolioContent>	

				<PortifolioContent>
					<PortifolioImageContent>
							<PortifolioImage src={pokedex} alt ="Pokedex"/>
						<PortifolioImageOverlay>
							<PortifolioImageSkills>
								<IoLogoReact/>
								<IoLogoJavascript/>
								<SiStyledcomponents/>
								<IoLogoNodejs/>
							</PortifolioImageSkills>
						</PortifolioImageOverlay>
					</PortifolioImageContent>
					<PortifolioData>
						<PortifolioDataTitle>Pokedex</PortifolioDataTitle>
						<PortifolioDataDescription>Nessa pokédex o usuário pode pesquisar o pokémon pelo nome e número além de ver suas características. A informação foi retirada do PokéAPI.</PortifolioDataDescription>
						<PortifolioDataButton className="button--flex" href="https://github.com/rapha-rangel/Pokedex" target="_blank">
							Demo
							<PortifolioDataButtonIcon >  <HiOutlineArrowCircleRight/></PortifolioDataButtonIcon>
						</PortifolioDataButton>
					</PortifolioData>
				</PortifolioContent>
				
				<PortifolioContent >
					<PortifolioImageContent>
						<PortifolioImage src={faturamento} alt="Faturamento"/>
						<PortifolioImageOverlay>
							<PortifolioImageSkills>
								<IoLogoReact/>
								<IoLogoJavascript/>
								<SiStyledcomponents/>
								<IoLogoNodejs/>
							</PortifolioImageSkills>
						</PortifolioImageOverlay>
					</PortifolioImageContent>
					<PortifolioData>
						<PortifolioDataTitle>Faturamento</PortifolioDataTitle>
						<PortifolioDataDescription>Projeto onde o usuario diz qual o nome e o valor da ação (dispesa ou receita) e o projeto faz o balanço descrevendo em uma tabela quais são essas ações e o valor de cada uma.</PortifolioDataDescription>
						<PortifolioDataButton className="button--flex" href="https://github.com/rapha-rangel/faturamento" target="_blank">
							Demo
							<PortifolioDataButtonIcon >  <HiOutlineArrowCircleRight/></PortifolioDataButtonIcon>
						</PortifolioDataButton>
					</PortifolioData>
				</PortifolioContent>

				<PortifolioContent >
					<PortifolioImageContent>	
						<PortifolioImage src={calculadora} alt="Calculadora"/>
						<PortifolioImageOverlay>
							<PortifolioImageSkills>
								<IoLogoReact/>
								<IoLogoJavascript/>
								<SiTailwindcss/>
								<IoLogoNodejs/>
							</PortifolioImageSkills>
						</PortifolioImageOverlay>
					</PortifolioImageContent>
					<PortifolioData>
						<PortifolioDataTitle>Calculadora</PortifolioDataTitle>
						<PortifolioDataDescription>Projeto Calculadora usando as 4 operações básicas.</PortifolioDataDescription>
						<PortifolioDataButton className="button--flex" href="https://github.com/rapha-rangel/Calculadora" target="_blank">
							Demo
							<PortifolioDataButtonIcon><HiOutlineArrowCircleRight/></PortifolioDataButtonIcon>
						</PortifolioDataButton>
					</PortifolioData>
				</PortifolioContent>

				
				</div>
			</PortifolioContainer>
			<PortifolioArrowContent>
			<PortifolioArrowRight onClick={handleArrowRight} >  <HiOutlineArrowNarrowRight/></PortifolioArrowRight>
			</PortifolioArrowContent>
			</div>
		</PortifolioSection>
	)
}

export default Portifolio;