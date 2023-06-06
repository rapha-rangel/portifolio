import styled, { css } from "styled-components";
import {responsive, root, moveTop} from './styled';

export const AboutSection = styled.section`
	
`
export const AboutTitle = styled.h2`
position: relative;

	@media ${responsive.large} {
		font-size: ${root.bigFontSize};
	}
	@media ${responsive.exLarge} {
		${(props) =>{ 
			if(props.aboutAnimation){
				return css`
				animation: ${moveTop} 2s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
`
export const AboutSubtitle = styled.p`
position: relative;

	@media ${responsive.large} {
		font-size: ${root.h3FontSize};
	}
	@media ${responsive.exLarge} {
		${(props) =>{ 
			if(props.aboutAnimation){
				return css`
				animation: ${moveTop} 2s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
`
export const AboutContainer = styled.div`


`
export const AboutData = styled.div`
	@media ${responsive.small} {
		display: flex;
		flex-direction: column;
		row-gap: 1.5rem;
	}
	@media ${responsive.medium} {
	display: grid;
	column-gap: 1.5rem;
	grid-template-areas: 
		" description info"
		"button  info";
	}
	@media ${responsive.large} {
		display: flex;
		flex-direction: column;
		row-gap: 1.5rem;
	}
`
export const AboutDescription = styled.p`
	position: relative;
	text-align: justify;
	margin-bottom: ${root.mb1};
	grid-area: description;
	font-size: ${root.smallerFontSize};
	@media ${responsive.medium} {
		margin-bottom: ${root.mb1};
		display: flex;
    align-items: center;
		font-size: ${root.smallFontSize};
	}
	@media ${responsive.large} {
		font-size: ${root.h3FontSize};	
	}
	@media ${responsive.exLarge} {
		${(props) =>{ 
			if(props.aboutAnimation){
				return css`
				animation: ${moveTop} 2s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
`
export const AboutButton = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	grid-area: button;
	@media ${responsive.exLarge} {
		${(props) =>{ 
			if(props.aboutAnimation){
				return css`
				animation: ${moveTop} 2s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
`
export const Button = styled.a`
	display: inline-block;
	background-color: ${root.firstColor};
	color: #fff;
	padding: 1rem;
	border-radius: 0.5rem;
	font-weight: ${root.fontMedium};
	:hover{
		color:${root.firstColorAlt}
	}
`
export const ButtonIcon = styled.i`
	font-size: 1.25rem;
	margin-left: ${root.mb05};
	transition: .3s;
`