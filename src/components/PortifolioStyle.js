import styled, {keyframes} from "styled-components";
import {responsive, root} from './styled';

export const PortifolioSection = styled.section`
`
export const PortifolioTitle = styled.h2`
`
export const PortifolioSubtitle = styled.span`
`
export const PortifolioContainer = styled.div`
	overflow-x: auto;
	display: flex;
	transition: 3s;
	scroll-behavior: smooth;
	::-webkit-scrollbar{
		display: none;
	}
`
export const PortifolioContent = styled.div`
	width: 1028px;
	padding: 0 1.5rem;
	@media ${responsive.small}{
		display: grid;
		justify-content: center;
		row-gap:1rem;
	}
	@media ${responsive.large}{
		display: flex;
		column-gap: 3rem ;
	}
`
export const inLine = keyframes`
	from   
	{ left:-100%; top:0; opacity:0.8; background-color: transparent;}
	to
 	{left:0; top:0; opacity:0.8; background-color: #c1b6fc;}
`
export const inLineText = keyframes`
	from   
	{ left:0; top:50%; opacity:1;}
	to
 	{left:30%; top:50%; opacity:1;}
`
export const inColumnText = keyframes`
	from   
	{ left:0; top:10%; opacity:1;}
	to
	{left:40%; top:10%; opacity:1;}
`
export const PortifolioImageContent = styled.div`
	position: relative;
	width:  100%;
	height: 200px;
	cursor: pointer;
`
export const PortifolioImage = styled.img`
	height: 200px;
	width: 100%;
	justify-self: center;
	object-fit: cover;
	border-radius: 10%;
	:hover {
		opacity: 0.3;
	}
`
export const PortifolioImageOverlay =styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
	border-radius: 10%;
  background-color: #c1b6fc;
	${PortifolioImageContent}:hover & {
		animation: ${inLine} 0.8s linear forwards;
	}
`
export const PortifolioImageSkills = styled.a`
  position: absolute;
	display: flex;
	opacity: 0;
	left:0; 
	top:0;
	color: white;
	font-weight: 900;
	font-size: 2rem;
	${PortifolioImageContent}:hover & {
		animation: ${inLineText} 0.8s linear forwards;
		opacity: 1;
	}
	@media ${responsive.small}{
		flex-direction: column;
		gap: 0.5rem;
		${PortifolioImageContent}:hover & {
		animation: ${inColumnText} 0.8s linear forwards;
		}
	}
		@media ${responsive.large}{
		flex-direction: row;
		gap: 1rem;
		${PortifolioImageContent}:hover & {
		animation: ${inLineText} 0.8s linear forwards;
		}
	}
`
export const PortifolioData = styled.div`
	@media ${responsive.medium}{
		align-self: center;
	}
`
export const PortifolioDataTitle = styled.h3`
	font-size: ${root.h3FontSize};
	margin-bottom: ${root.mb05};
	@media ${responsive.small} {
		font-size: ${root.normalFontSize}
	}
`
export const PortifolioDataDescription = styled.p`
	margin-bottom: ${root.mb075};
`
export const PortifolioDataButton = styled.a`
	cursor: pointer;
	display: inline-block;
	background-color: ${root.firstColor};
	color: #fff;
	padding: 1rem;
	border-radius: 0.5rem;
	font-weight: ${root.fontMedium};
	@media ${responsive.small} {
		padding: .8rem;
		display: inline-flex;
	}
`
export const PortifolioDataButtonIcon = styled.i`
	font-size: 1.25rem;
	transition: .3s;
	display: flex;
	align-items: center;
	${PortifolioDataButton}:hover & {
		transform: translateX(.25rem);
	}
	@media ${responsive.small} {
		font-size: ${root.normalFontSize}
	}
`
export const PortifolioArrowContent =styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
export const PortifolioArrowLeft =styled.a`
	cursor: pointer;
	:hover{
		color: ${root.firstColor}
	}
	@media ${responsive.small} {
		font-size: 1.2rem;
	}
	@media ${responsive.medium} {
		font-size: 1.8rem;
	}
	@media ${responsive.large} {
		font-size: 2.4rem;
	}
`
export const PortifolioArrowRight =styled.a`
	cursor: pointer;
	:hover{
		color: ${root.firstColor}
	}
	@media ${responsive.small} {
		font-size: 1.2rem;
	}
	@media ${responsive.medium} {
		font-size: 1.8rem;
	}
	@media ${responsive.large} {
		font-size: 2.4rem;
	}
`