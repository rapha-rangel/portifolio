import styled from "styled-components";
import {responsive, root, darkTheme} from './styled';

export const Header = styled.div`
	@media ${responsive.small} {
		width: 100%;
		position: fixed;
		bottom: 0;
		left:0;
		z-index: ${root.zFixed};
		background-color: ${props=> props.darkMode ? darkTheme.bodyColor : root.bodyColor};
		box-shadow: ${props => props.headerBoxShadow ? "0 -1px 4px rgba(0,0,0,.15)" : "0"};
	}
	@media ${responsive.large} {
		top: 0;
		position: fixed;
		width: 100%;
		box-shadow:  ${props=> props.darkMode ? '0 3px 6px #D5D5D5' : '0 6px 6px #D0D3D4'};
		background-color: ${props=> props.darkMode ? darkTheme.bodyColor : root.bodyColor};
		z-index: ${root.zFixed};
		bottom: initial;
	}
	@media ${responsive.exLarge}{
    transition: top 0.8s ease-in-out;
		top: ${props => props.showHeader ? "-100%" : "0"};
	}
`
export const Nav = styled.nav`
	@media ${responsive.small} {
		height: ${root.headerHeigth};
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	@media ${responsive.large} {
		max-width: 100%;
		height: 4rem;
	}
	@media ${responsive.exLarge}{
		height: 5rem;
	}
`
export const NavLogo = styled.a`
	color: ${props=> props.darkMode ? darkTheme.titleColor : root.titleColor};
	font-weight: ${root.fontMedium};
	:hover{
		color: ${root.firstColor}
	}
	@media ${responsive.small} {
		font-size: ${root.normalFontSize};
	}
	@media ${responsive.medium} {
		font-size: ${root.normalFontSize};
	}
	@media ${responsive.large} {
		font-size: ${root.h2FontSize};
	}
	@media ${responsive.exLarge}{
		font-size: ${root.bigFontSize};
	}
`
export const NavApps = styled.div`
  @media ${responsive.small} {
		display: initial;
		color: ${props=> props.darkMode ? darkTheme.titleColor : root.titleColor};
		font-weight: ${root.fontMedium};
		font-size: 1.1rem;
		cursor: pointer;
		:hover{
			color: ${root.firstColor}
		}
	}
	@media ${responsive.large}{
	display: none;
	}
`
export const NavMenu = styled.div`
	@media ${responsive.small} {
		padding: 2rem .25rem 4rem;
		position: fixed;
		bottom: ${props => props.showMenu ? 0 :"-100%"};
		left:0;
		width: 100%;
		background-color: ${props=> props.darkMode ? darkTheme.bodyColor : root.bodyColor};
		box-shadow: 0 -1px 4px rgba( 0,0,0,.15);
		border-radius: 1.5rem 1.5rem 0 0;
		transition: 0.3s;
	}
	@media ${responsive.medium}  {
		padding: 2rem 1.5rem 4rem;
	}
	@media ${responsive.large}  {
		bottom: initial;
		position: initial;
		width: auto;
		box-shadow: none;
		border-radius: 0%;
		transition: none;
		padding: 0;
	}
`
export const NavList = styled.ul`
	gap: 2rem;
	@media ${responsive.small} {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	@media ${responsive.large}{
		display: flex;
	}
`
export const NavLink = styled.a`
	display: flex;
	color:${props=> props.darkMode ? darkTheme.titleColor : root.titleColor};
	font-weight: ${root.fontMedium};
	flex-direction: column;
	align-items: center;
	:hover{
		color: ${root.firstColor};
	}
	@media ${responsive.small} {
		font-size: ${root.smallerFontSize};
	}
	@media ${responsive.medium} {
		font-size: ${root.h3FontSize};
	}
	@media ${responsive.large}{
		font-size: ${root.h3FontSize};
		display: ${props => props.home ? "none" : "flex"};
	}
	@media ${responsive.exLarge} {
		font-size: ${root.h1FontSize};
	}
`
export const NavClose = styled.i`
  @media ${responsive.small} {
		display: initial;
		position: absolute;
		right: 1.3rem;
		bottom: .5rem;
		font-size: 1.2rem;
		cursor: pointer;
		color: ${root.firstColor};
		:hover{
			color: ${root.firstColorAlt}
		}
	}
	@media ${responsive.large} {
		display:none;
	}
`
export const NavIcon = styled.i`
	@media ${responsive.small} {
		display:initial;
		font-size: ${root.h3FontSize};
	}
	@media ${responsive.medium} {
		font-size: ${root.h1FontSize};
	}
	@media ${responsive.large} {
		display:none;
	}
`
export const ChangeIcon = styled.i`
  @media ${responsive.small} {
		font-size: 1.25rem;
		color: ${props=> props.darkMode ? darkTheme.titleColor : root.titleColor};
		margin-right: ${root.mb1};
		cursor: pointer;
		:hover{
			color:${root.firstColor}
		}
	}
	@media ${responsive.large} {
		font-size: ${root.h1FontSize};
		margin-right: 0;
	}
`