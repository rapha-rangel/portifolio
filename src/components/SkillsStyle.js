import styled from "styled-components";
import {responsive, root} from './styled';

export const SkillsSection = styled.section`
`
export const SkillsTitle = styled.h2`
	
`
export const SkillsSubtitle = styled.span`
	font-size: ${root.smallFontSize};
	color: ${root.textColorLight};
`
export const SkillsContainer = styled.div`
	row-gap: 0;
`
export const SkillsContent = styled.div`
	margin-bottom: ${root.mb25};

`
export const SkillsHeader = styled.span`
	display: flex;
	align-items: center;
	margin-bottom: ${root.mb25};
`
export const SkillsHeaderTitle = styled.h2`
	@media ${responsive.small} {
		font-size: ${root.normalFontSize};
	}
`
export const SkillsIcons = styled.i`
	font-size: 2rem;
	color: ${root.firstColor};
	margin-right: ${root.mb075};
	display: flex;
`
export const SkillsArrows = styled.i`
	font-size: 2rem;
	color: ${root.firstColor};
	margin-left: auto;
	cursor: pointer;
	transition: .4s;
	rotate: -90deg; 
`
export const SkillsList = styled.div`
	grid-template-columns: 1fr 1fr;
	row-gap: 1.5rem;
	@media ${responsive.medium}{
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media ${responsive.large}{
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
	@media ${responsive.exLarge}{
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	}
`
export const SkillsData = styled.div`
`
export const SkillsBox = styled.div`
	background-color: ${root.inputColor};
	color: ${props=> props.darkMode ? root.textColor : root.textColor};
	padding: 0.8rem 0.2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1rem;
	transition: .4s;
	:hover{
		transform: scale(1.1);
	}
`
export const SkillsDataIcon = styled.i`
	font-size: 3rem;
`
export const SkillsDataTitle = styled.div`
	display:flex;
	justify-content: space-between;
	margin-bottom: ${root.mb05};
`
export const SkillsDataName = styled.h3`
	font-size: ${root.smallFontSize};
	font-weight: ${root.fontMedium};
	border-bottom: 1px solid black;
	color: ${props=> props.darkMode ? root.textColor : root.textColor};
`