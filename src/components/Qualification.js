import {QualificationButton, 
				QualificationContainer,
				QualificationContent, 
				QualificationIcon, 
				QualificationSection, 
				QualificationSubtitle, 
				QualificationTabs, 
				QualificationTitle, 
				QualificationData,
				QualificationContentInsider,
				QualificationCalendar,
				QualificationRounder,
				QualificationLine,
				QualificationDataTitle,
				QualificationDataSubtitle,
				QualificationPointer,
				QualificationGraduationContent,
				QualificationCourseContent
	} from "./QualificationStyle";
import { SlGraduation, SlCalender } from "react-icons/sl";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { useState, useEffect} from "react";

const Qualification =()=>{

	const [showGraduation, setShowGraduation]= useState(false);
	const [showCourse, setShowCourse]= useState(false);
	const [qualificationAnimation, setQualificationAnimation] = useState(false);

	useEffect(()=>{
		const moveQualificationAnimation = ()=>{
			if(window.scrollY > 2100){
				setQualificationAnimation(true)
			} else  {
				setQualificationAnimation(false)			
			}
		console.log(window.scrollY, qualificationAnimation)
		}
		window.addEventListener('scroll', moveQualificationAnimation);
		return () =>{
			window.removeEventListener('scroll', moveQualificationAnimation);
		}
	},[])
	
	const handleGraduation = ()=>{
		setShowGraduation(prevState =>!prevState)
		setShowCourse(false)
	}

	const handleCourse = ()=>{
		setShowCourse(prevState =>!prevState)
		setShowGraduation(false)
	}

	return(
		<QualificationSection id="qualification" className="section">
			<QualificationTitle className="section__title" qualificationAnimation={qualificationAnimation}>Qualificações</QualificationTitle>
			<QualificationSubtitle className="section__subtitle"qualificationAnimation={qualificationAnimation}>Minha jornada pessoal</QualificationSubtitle>
			<QualificationContainer className="container">
				<QualificationTabs>
					<QualificationButton className="button--flex" qualificationAnimation={qualificationAnimation} onClick={handleGraduation}>
						<QualificationIcon><SlGraduation/>Graduação</QualificationIcon>
					</QualificationButton>
					<QualificationButton className="button--flex" qualificationAnimation={qualificationAnimation} onClick={handleCourse}>
						<QualificationIcon><HiOutlineComputerDesktop/>Cursos</QualificationIcon>
					</QualificationButton>
				</QualificationTabs>
				<QualificationContent>
					<QualificationContentInsider>
						<QualificationData>
							<div style={{display: "flex", justifyContent: "space-between"}}>
								<QualificationGraduationContent showGraduation={showGraduation} qualificationAnimation={qualificationAnimation}>
									<QualificationDataTitle>Analise de Sistemas</QualificationDataTitle>
									<QualificationDataSubtitle>UCAM - Univesidade Candido Mendes</QualificationDataSubtitle>
									<QualificationCalendar>
										<SlCalender/> 2021 - 2023
									</QualificationCalendar>
								</QualificationGraduationContent>
								<QualificationPointer>
									<QualificationRounder></QualificationRounder>
									<QualificationLine></QualificationLine>
								</QualificationPointer>
							</div>
						</QualificationData>
					</QualificationContentInsider>

					<QualificationContentInsider>
						<QualificationData>
							<QualificationPointer>
								<QualificationRounder></QualificationRounder>
								<QualificationLine></QualificationLine>
							</QualificationPointer>
							<QualificationCourseContent showCourse={showCourse} qualificationAnimation={qualificationAnimation}>
								<QualificationDataTitle>Front End Development Libaries</QualificationDataTitle>
								<QualificationDataSubtitle>FreeCodeCamp</QualificationDataSubtitle>
								<QualificationCalendar>
									<SlCalender/> 2022
								</QualificationCalendar>
							</QualificationCourseContent>
						</QualificationData>

						<QualificationData>
							<QualificationPointer>
								<QualificationRounder></QualificationRounder>
								<QualificationLine></QualificationLine>
							</QualificationPointer>
							<QualificationCourseContent showCourse={showCourse} qualificationAnimation={qualificationAnimation}>
								<QualificationDataTitle>JavaScript </QualificationDataTitle>
								<QualificationDataSubtitle>FreeCodeCamp</QualificationDataSubtitle>
								<QualificationCalendar>
									<SlCalender/> 2022
								</QualificationCalendar>
							</QualificationCourseContent>
						</QualificationData>

						<QualificationData>
							<QualificationPointer>
								<QualificationRounder></QualificationRounder>
							</QualificationPointer>
							<QualificationCourseContent showCourse={showCourse} qualificationAnimation={qualificationAnimation}>
								<QualificationDataTitle>Web Design</QualificationDataTitle>
								<QualificationDataSubtitle>FreeCodeCamp</QualificationDataSubtitle>
								<QualificationCalendar>
									<SlCalender/> 2022
								</QualificationCalendar>
							</QualificationCourseContent>
							
						</QualificationData>
					</QualificationContentInsider>
				</QualificationContent>
			</QualificationContainer>
		</QualificationSection>
	)
}

export default Qualification;