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
import { useState} from "react";

const Qualification =()=>{

	const [showGraduation, setShowGraduation]= useState(false);
	const [showCourse, setShowCourse]= useState(false);
	
	const handleGraduation = ()=>{
		setShowGraduation(prevState =>!prevState)
		setShowCourse(false)
	}

	const handleCourse = ()=>{
		setShowCourse(prevState =>!prevState)
		setShowGraduation(false)
	}

	return(
		<QualificationSection id="services">
			<QualificationTitle className="section__title">Qualification</QualificationTitle>
			<QualificationSubtitle className="section__subtitle">My Personal Journey</QualificationSubtitle>
			<QualificationContainer className="container">
				<QualificationTabs>
					<QualificationButton className="button--flex" onClick={handleGraduation}>
						<QualificationIcon><SlGraduation/>Graduation</QualificationIcon>
					</QualificationButton>
					<QualificationButton className="button--flex" onClick={handleCourse}>
						<QualificationIcon><HiOutlineComputerDesktop/>Course</QualificationIcon>
					</QualificationButton>
				</QualificationTabs>
				<QualificationContent>
					<QualificationContentInsider>
						<QualificationData>
							<div style={{display: "flex", justifyContent: "space-between"}}>
								<QualificationGraduationContent showGraduation={showGraduation}>
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
							<QualificationCourseContent showCourse={showCourse}>
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
							<QualificationCourseContent showCourse={showCourse}>
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
							<QualificationCourseContent showCourse={showCourse}>
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