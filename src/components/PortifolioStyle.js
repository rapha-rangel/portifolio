import styled, {keyframes, css} from "styled-components";
import {responsive, root, moveLeft, moveRight} from './styled';

export const PortifolioSection = styled.section`
`
export const PortifolioTitle = styled.h2`
	overflow-x: auto;
	position: relative;
	::-webkit-scrollbar{
		display: none;
	}
	@media ${responsive.large} {
		font-size: ${root.bigFontSize};
	}
	@media ${responsive.exLarge} {
		${(props) =>{ 
			if(props.portifolioAnimation){
				return css`
				animation: ${moveLeft} 2s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
`
export const PortifolioSubtitle = styled.span`
	overflow-x: auto;
	position: relative;
	::-webkit-scrollbar{
		display: none;
	}
	position: relative;
	@media ${responsive.large} {
		font-size: ${root.h3FontSize};
	}
	@media ${responsive.exLarge} {
		${(props) =>{ 
			if(props.portifolioAnimation){
				return css`
				animation: ${moveRight} 2s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
`
export const PortifolioContainer = styled.div`
	position: relative;
	overflow-x: auto;
	display: flex;
	transition: 3s;
	scroll-behavior: smooth;
	::-webkit-scrollbar{
		display: none;
	}
	@media ${responsive.exLarge} {
		${(props) =>{ 
			if(props.portifolioAnimation){
				return css`
				animation: ${moveRight} 2s;
				`
			}else{
				return css`
				animation: none;
				`
			}
		}}
	}
`
export const PortifolioContent = styled.div`
	width: 2560px;
	padding: 0 1.5rem;
	@media ${responsive.small}{
		display: grid;
		justify-content: center;
		justify-items: center;
		row-gap: 1.5rem;
	}
	@media ${responsive.large}{
		display: flex;
		column-gap: 3rem ;
		justify-content: center;
		align-items: center;
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
 	{left:15%; top:50%; opacity:1;}
`
export const PortifolioImageContent = styled.div`
	position: relative;
	justify-self: center;
	object-fit: contain;
	@media ${responsive.small} {
		width:  160px;
		height: 100px;
	}
	@media ${responsive.medium} {
		width: 300px;
		height: 150px;
	}
	@media ${responsive.large} {
		height: 200px;
		width: 300px;
	}
	@media ${responsive.exLarge} {
		width: 400px;
	}
`
export const PortifolioImage = styled.img`
	align-self: center;
	justify-self: center;
	object-fit: contain;
	:hover {
		opacity: 0.3;
	}
	@media ${responsive.small} {
		width:  160px;
		height: 100px;
	}
	@media ${responsive.medium} {
		width: 300px;
		height: 150px;
	}
	@media ${responsive.large} {
		height: 200px;
		width: 300px;
	}
	@media ${responsive.exLarge} {
		width: 400px;
	}
`
export const PortifolioImageOverlay =styled.div`
	position: absolute;
  bottom: 0;
  opacity: 0;
	width: 100%;
	height: 100%;
	border-radius: 5%;
  background-color: #c1b6fc;
	${PortifolioImageContent}:hover & {
		animation: ${inLine} 0.8s linear forwards;
	}
	@media ${responsive.exLarge} {
	}
`
export const PortifolioImageSkills = styled.a`
  position: relative;
	display: flex;
	opacity: 0;
	color: white;
	font-weight: 900;
	${PortifolioImageContent}:hover & {
		animation: ${inLineText} 0.8s linear forwards;
		opacity: 1;
	}
	@media ${responsive.small}{
		gap: 0.5rem;
		font-size: 1.5rem;
	}
	@media ${responsive.medium}{
		gap: 1rem;
		font-size: 2rem;
	}
		@media ${responsive.large}{
			font-size: 2rem;
			gap: 1rem;
	}
	@media ${responsive.exLarge}{
			font-size: 3rem;
			gap: 2rem;
			margin-left: -1rem;
	}
`
export const PortifolioData = styled.div`
	align-self: center;
	max-width: 250px;
	align-self: center;
	text-align: justify;
	@media ${responsive.large} {
		max-width: 200px;
    margin-left: 1rem;
    margin-right: 1rem;
	}
	@media ${responsive.exLarge} {
		max-width: 300px;
    margin-left: 1rem;
    margin-right: 1rem;
	}
`
export const PortifolioDataTitle = styled.h3`
	font-size: ${root.h3FontSize};
	margin-bottom: ${root.mb05};
	@media ${responsive.small} {
		font-size: ${root.normalFontSize}
	}
	@media ${responsive.exLarge} {
		font-size: ${root.h2FontSize}
	}
`
export const PortifolioDataDescription = styled.p`
	margin-bottom: ${root.mb075};
	@media ${responsive.small} {
		font-size: ${root.smallFontSize}
	}
	@media ${responsive.exLarge} {
		font-size: ${root.h3FontSize}
	}
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
	@media ${responsive.exLarge} {
		font-size: ${root.h3FontSize}
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