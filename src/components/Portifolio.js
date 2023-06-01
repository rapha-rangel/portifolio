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
import {IoLogoCss3, 
					IoLogoJavascript, 
					IoLogoNodejs, 
					IoLogoSass} 
from "react-icons/io";
import { useRef } from "react";


const Portifolio = ()=>{
	const arrow = useRef(null);
	
	const handleArrowLeft =(e)=>{
		e.preventDefault();
		if(arrow.current.scrollLeft === 0){
			arrow.current.scrollLeft = arrow.current.offsetWidth*2
		}else{
			arrow.current.scrollLeft -= arrow.current.offsetWidth
		}
		console.log(arrow.current.scrollLeft)
	}

	const handleArrowRight =(e)=>{
		e.preventDefault();
		if(arrow.current.scrollLeft > arrow.current.offsetWidth*1.9){
			arrow.current.scrollLeft = 0
		}else{
			arrow.current.scrollLeft += arrow.current.offsetWidth
		}
		console.log(arrow.current.scrollLeft)
	}


	return (
		<PortifolioSection id="portifolio">
			<PortifolioTitle className="section__title">Portifolio</PortifolioTitle>
			<PortifolioSubtitle className="section__subtitle">Most Recent Work</PortifolioSubtitle>
			<div style={{display: "flex"}} className="container">
			<PortifolioArrowContent>
			<PortifolioArrowLeft onClick={handleArrowLeft}>  <HiOutlineArrowNarrowLeft/></PortifolioArrowLeft>
				
			</PortifolioArrowContent>
			
			<PortifolioContainer className="container" ref={arrow} >
			
				<div style={{width: "300%", display: "flex"}} >

				<PortifolioContent >
					<PortifolioImageContent>
						<PortifolioImage src="https://i.pinimg.com/564x/5b/2e/e6/5b2ee66fcf721aa46c12d462eab0b091.jpg" alt ="tranks"/>
						<PortifolioImageOverlay>
							<PortifolioImageSkills>
								<IoLogoCss3/>
								<IoLogoJavascript/>
								<IoLogoNodejs/>
								<IoLogoSass/> 
							</PortifolioImageSkills>
						</PortifolioImageOverlay>
					</PortifolioImageContent>
					<PortifolioData>
						<PortifolioDataTitle>Design Master</PortifolioDataTitle>
						<PortifolioDataDescription>Design Master for all services</PortifolioDataDescription>
						<PortifolioDataButton className="button--flex">
							Demo
							<PortifolioDataButtonIcon >  <HiOutlineArrowCircleRight/></PortifolioDataButtonIcon>
						</PortifolioDataButton>
					</PortifolioData>
				</PortifolioContent>
				
				<PortifolioContent >
					<PortifolioImageContent>
						<PortifolioImage src="https://i.pinimg.com/564x/39/aa/f4/39aaf41ff085d836a1a31dbcc9351891.jpg" alt="vegeto"/>
						<PortifolioImageOverlay>
							<PortifolioImageSkills>
								<IoLogoCss3/>
								<IoLogoJavascript/>
								<IoLogoNodejs/>
								<IoLogoSass/> 
							</PortifolioImageSkills>
						</PortifolioImageOverlay>
					</PortifolioImageContent>
					<PortifolioData>
						<PortifolioDataTitle>Online Store</PortifolioDataTitle>
						<PortifolioDataDescription>Most Services for Devices</PortifolioDataDescription>
						<PortifolioDataButton className="button--flex">
							Demo
							<PortifolioDataButtonIcon >  <HiOutlineArrowCircleRight/></PortifolioDataButtonIcon>
						</PortifolioDataButton>
					</PortifolioData>
				</PortifolioContent>

				<PortifolioContent >
					<PortifolioImageContent>	
						<PortifolioImage src="https://i.pinimg.com/564x/2e/24/3c/2e243c69413dbfcee49a894187407ccf.jpg" alt="picolo"/>
						<PortifolioImageOverlay>
							<PortifolioImageSkills>
								<IoLogoCss3/>
								<IoLogoJavascript/>
								<IoLogoNodejs/>
								<IoLogoSass/> 
							</PortifolioImageSkills>
						</PortifolioImageOverlay>
					</PortifolioImageContent>
					<PortifolioData>
						<PortifolioDataTitle>Design Master</PortifolioDataTitle>
						<PortifolioDataDescription>Website Adaptable to all devices</PortifolioDataDescription>
						<PortifolioDataButton className="button--flex" >
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