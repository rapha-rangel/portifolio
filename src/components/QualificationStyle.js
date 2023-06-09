import styled, {css} from "styled-components";
import {responsive, root, moveLeft, moveRight} from './styled';

export const QualificationSection = styled.section`
`
export const QualificationTitle = styled.h2`
	@media ${responsive.large} {
		font-size: ${root.bigFontSize};
	}
	@media ${responsive.exLarge} {
		${(props) =>{ 
			if(props.qualificationAnimation){
				return css`
				animation: ${moveLeft} 4s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
`
export const QualificationSubtitle = styled.span`
	font-size: ${root.smallFontSize};
	color: ${root.textColorLight};
	@media ${responsive.large} {
		font-size: ${root.h3FontSize};
	}
	@media ${responsive.exLarge} {
		${(props) =>{ 
			if(props.qualificationAnimation){
				return css`
				animation: ${moveRight} 4s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
`
export const QualificationContainer = styled.div`
`
export const QualificationTabs = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: ${root.mb2};
`
export const QualificationButton = styled.div`
	font-size: ${root.h3FontSize};
	font-weight: ${root.fontMedium};
	cursor: pointer;
	:hover{
		color: ${root.firstColor}
	}
	@media ${responsive.exLarge} {
		:nth-child(odd){
			${(props) =>{ 
			if(props.qualificationAnimation){
				return css`
				animation: ${moveLeft} 4s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
	:nth-child(even){
		${(props) =>{ 
			if(props.qualificationAnimation){
				return css`
				animation: ${moveRight} 4s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
	}		
`
export const QualificationIcon = styled.i`
	margin-right: ${root.mb025};
	@media ${responsive.small} {
		font-size: ${root.normalFontSize};
	}
	@media ${responsive.medium} {
		font-size: ${root.h3FontSize};
	}
	@media ${responsive.large} {
		font-size: ${root.h2FontSize};
	}
	@media ${responsive.exLarge} {
		font-size: ${root.h1FontSize};
	}
`
export const QualificationContent = styled.div`
	@media ${responsive.small} {
		margin-left:${root.mb2};
	}
	@media ${responsive.medium} {
		margin-left: ${root.mb3};
	}
`
export const QualificationContentInsider = styled.div`
`
export const QualificationData = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 1.5rem;
	@media ${responsive.large}{
		margin-left: 20%;
		margin-right: 20%;
	}
`
export const QualificationDataTitle = styled.h3`
	@media ${responsive.small}{
		font-size: ${root.smallFontSize};
	}
	@media ${responsive.medium}{
		font-size: ${root.normalFontSize};
	}
	@media ${responsive.large}{
		font-size: ${root.h3FontSize};
	}
	@media ${responsive.exLarge}{
		font-size: ${root.h2FontSize};
	}
`
export const QualificationDataSubtitle = styled.span`
	display: inline-block;
	font-size: ${root.smallFontSize};
	margin-bottom: ${root.mb05};
`
export const QualificationCalendar = styled.div`
	font-size: ${root.smallerFontSize};
	color: ${root.textColorLight};
	margin-bottom: ${root.mb1};
	margin-right: ${root.mb025};
`
export const QualificationPointer = styled.div`
	display: flex;
	justify-content: flex-end;
`
export const QualificationRounder = styled.span`
	display: inline-block;
	width: 13px;
	height: 13px;
	background-color: ${root.firstColor};
	border-radius: 50%;
`
export const QualificationLine = styled.span`
	display: block;
	width: 1px;
	height: 100%;
	background-color: ${root.firstColor};
	transform: translate(-7px);
`
export const QualificationGraduationContent = styled.div`
	${(props) =>{
		if(props.showGraduation){
			return css`
				transform: scale(1.1);
				transition: 1s;
			`
		}else{
			return css`
				transform: scale(1.0);
				transition: 1s;
			`
		}
	}}
	@media ${responsive.exLarge} {
			${(props) =>{ 
			if(props.qualificationAnimation){
				return css`
				animation: ${moveLeft} 4s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
`
export const QualificationCourseContent = styled.div`
	${(props) =>{
		if(props.showCourse){
			return css`
				transform: scale(1.1);
				transition: 1s;
			`
		}else{
			return css`
				transform: scale(1.0);
				transition: 1s;
			`
		}
	}}
	@media ${responsive.exLarge} {
			${(props) =>{ 
			if(props.qualificationAnimation){
				return css`
				animation: ${moveRight} 4s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
`
