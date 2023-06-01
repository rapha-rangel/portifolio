import {createGlobalStyle} from "styled-components";

export const root ={
  headerHeigth: "3rem",
	/*----------------------Colors----------------------------------*/
	principalColor: "#6e57e0",
	firstColor: "#6e57e0",
	firstColorSecond: "#6e57e0",
	firstColorAlt: "#5a43cb",
	firstColorLighter: "#c1b6fc",
	titleColor: "#242329",
	textColor: "#6d6a7c",
	textColorLight: "#a19fad",
	inputColor: "#f0eefc",
	bodyColor: "#fbfbfe",
	containerColor: "#fff",
	colorLetterFooter: "#fff",
	
	/*----------------------Fonts----------------------------------*/
	bodyFont: "'Poppins', sans-serif",
	bigFontSize: "2rem",
	h1FontSize: "1.5rem",
	h2FontSize: "1.25rem",
	h3FontSize: "1.125rem",
	normalFontSize: ".9387rem",
	smallFontSize: ".813rem",
	smallerFontSize: ".75rem",
	fontMedium: "500",
	fontSemiBold: "600",

	/*----------------------Margens----------------------------------*/
	mb025: ".25rem",
	mb05: ".5rem",
	mb075: ".75rem",
	mb1: "1rem",
	mb15:"1.5rem",
	mb2: "2rem",
	mb25: "2.5rem",
	mb3: "3rem",

	/*----------------------------------------Z-Index------------------------------------------*/
	zTooltip: "10",
	zFixed: "100",
	zModal: "1000",

}
/*-------------------------Responsive----------------------------------*/
export const responsive ={
	small: "(min-width: 320px)",
	medium: "(min-width: 568px)",
	large: "(min-width: 768px)",
	exLarge: "(min-width: 1028px)"
}
/*----------------------DarkThemeColors----------------------------------*/
export const darkTheme ={
	firstColorSecond: "#100e1b",
	titleColor: "#f2f1f3",
	textColor: "#bcbac4",
	bodyColor: "#191627",
}

export const GlobalStyle = createGlobalStyle`
	*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
	}
	html{
		scroll-behavior: smooth;
	}

	body{
		font-family: ${root.bodyFont};
		font-size: ${root.normalFontSize};
		background-color: ${props=> props.darkMode ? darkTheme.bodyColor : root.bodyColor};
		color: ${props=> props.darkMode ? darkTheme.textColor : root.textColor};
	}

	h1, h2, h3, h4{
		color: ${props=> props.darkMode ? darkTheme.titleColor : root.titleColor};
		font-weight: ${root.fontSemiBold};
	}
	ul {
		list-style: none;
	}
	li{
	}
	a{
		text-decoration: none;
		color: ${props=> props.darkMode ? darkTheme.textColor : root.textColor};
	}

	img{
		max-width: 100%;
		height: auto;
	}

	i{
		font-style: normal;
	}
	section{
		padding: 2rem 0 4rem;
	}

	.section__title{
		font-size: ${root.h1FontSize};
	}

	.section__subtitle{
		display: block;
		font-size: ${root.smallFontSize};
		margin-bottom: ${root.mb3};
	}

	.section__title, 
	.section__subtitle{
		text-align: center;
	}
	.button--flex{
		display: inline-flex;
		align-items: center;
		gap: .5rem;
	}
	.container{
		margin-left: ${root.mb15};
		margin-right: ${root.mb15};
	}
	.containerNavbar{
		margin-left: ${root.mb15};
		margin-right: ${root.mb15};
	}
	.grid{
		display: grid;
		gap: 1.5rem;
	}
	.nav__btns{
		display: flex;
		align-items: center;
	}
	.homeImage{
		width:500px;
		fill: #6e57e0;
	}
	::-webkit-scrollbar{
		background-color: #e3e2e9 ;
		border-radius: .2rem;

	}
	::-webkit-scrollbar-thumb{
		background-color: #c8c6d2;
		border-radius: .2rem;
		:hover{
			background-color: ${root.textColorLight};
		}
	}
	@media ${responsive.small}{
		.container{
			margin-left: ${root.mb1};
			margin-right: ${root.mb1};
		}
		section{
			padding: 2rem 0 4rem;
		}
	}
	@media ${responsive.medium}{
		section{
			padding: 4rem 0 4rem;
		}
	}
	@media ${responsive.large}{
		section{
			padding: 4rem 0 2rem;
		}
	}
	@media ${responsive.exLarge}{
		.container{
			margin-left: 10%;
			margin-right: 10%;
		}
		section{
			padding: 6rem 0 2rem;
		}
	}
`

