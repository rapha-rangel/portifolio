import styled from "styled-components";
import {root} from './styled';

export const ScrollSection = styled.div`
`
export const ScrollButton = styled.a`
	position: fixed;
	right: 1.5rem;
	bottom: ${props =>props.showScrollUp ? "5rem"  : "-20%"};
	padding: .2rem .2rem 0;
	border-radius: .4rem;
	background-color: ${root.firstColor};
	opacity: .8;
	z-index: ${root.zTooltip};
	transition: .4s;
	:hover{
		background-color: ${root.firstColorAlt};
	}
`