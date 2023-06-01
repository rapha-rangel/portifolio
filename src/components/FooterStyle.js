import styled from "styled-components";
import { darkTheme, root } from "./styled";

export const FooterSection = styled.footer`
	padding-top: 2rem ;
`
export const FooterBg = styled.div`
	background-color: ${props=> props.darkMode ? darkTheme.firstColorSecond : root.firstColorSecond};
	padding: 2rem 0 3rem;
`
export const FooterContainer = styled.div`
 row-gap: 3.5rem;
`
export const FooterTitle = styled.h1`
	color: ${root.colorLetterFooter};
	font-size: ${root.h1FontSize};
	margin-bottom: ${root.mb025};
`
export const FooterSubtitle = styled.span`
	color: ${root.colorLetterFooter};
	font-size: ${root.smallFontSize};
`