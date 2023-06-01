import styled from "styled-components";
import {responsive, root, darkTheme} from './styled';

export const AboutSection = styled.section`
`
export const AboutTitle = styled.h2`
`
export const AboutSubtitle = styled.span`
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
	text-align: justify;
	margin-bottom: ${root.mb1};
	grid-area: description;
	@media ${responsive.medium} {
		margin-bottom: ${root.mb1};
		display: flex;
    align-items: center;
	}
`
export const AboutInfo = styled.div`
	@media ${responsive.small} {
		display: flex;
		flex-direction: row;
		margin-bottom: ${root.mb1};
		justify-content: space-evenly;
	}
	@media ${responsive.medium} {
		grid-area: info;
		display: flex;
		flex-direction: column;
		margin-bottom: 0;
		gap: 1rem;
	}
	@media ${responsive.large} {
		display: flex;
		flex-direction: row;
		margin-bottom: ${root.mb1};
		justify-content: space-evenly;
	}
`
export const AboutInfoTitle = styled.span`
	font-size: ${root.h2FontSize};
	font-weight: ${root.fontSemiBold};
	display: block;
	text-align: center;
	color: ${props=> props.darkMode ? darkTheme.titleColor : root.titleColor};
`
export const AboutInfoName = styled.span`
	font-size: ${root.smallerFontSize};
	display: block;
	text-align: center;
`
export const AboutButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	grid-area: button;
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