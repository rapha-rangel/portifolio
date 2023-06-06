import styled from "styled-components";
import {responsive, root} from './styled';

export const ContactSection = styled.section`
`
export const ContactTitle = styled.h2` 
`
export const ContactSubtitle = styled.span`
`
export const ContactContainer= styled.div`
	row-gap: 3rem;
`
export const ContactInformation= styled.a`
	margin-bottom: ${root.mb2};
	@media ${responsive.small} {
		display: flex;
		justify-content: flex-start;
		text-align: start;
	}
	@media ${responsive.medium} {
		display: grid;
		justify-content: center;
		text-align: center;
	}
`
export const ContactInformationTitle = styled.h3`
	font-size: ${root.h3FontSize};
	font-weight: ${root.fontMedium};
	@media ${responsive.exLarge} {
		font-size: ${root.h1FontSize};
	}
`
export const ContactInformationSubtitle = styled.span`
	font-size: ${root.smallFontSize};
	color: ${root.textColorLight};
	@media ${responsive.exLarge} {
		font-size: ${root.h3FontSize};
	}
`
export const ContactIcon= styled.i`
	color: ${root.firstColor};
	font-size: 1.5rem;
	margin-right: ${root.mb075};
	@media ${responsive.medium} {
		font-size: 2rem;
		margin-right: 0;
	}
	@media ${responsive.large} {
		font-size: 3rem;
	}
	@media ${responsive.exLarge} {
		font-size: 3.5rem;
	}
`
export const ContactContent= styled.div`
@media ${responsive.small}{
		display: grid;
		justify-content: flex-start;
	}
	@media ${responsive.medium}{
		display: flex;
		gap: 1rem;
		justify-content: center;
	}
`