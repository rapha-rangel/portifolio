import styled, {createGlobalStyle, css, keyframes} from "styled-components";

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

	/*----------------------Font Size for Large Devices----------------------------------
	@media screen and (min-width: 968px){
		:root{
			bigFontSize: "3rem",
			h1FontSize: "2.25rem",
			h2FontSize: "1.5rem",
			h3FontSize: "1.25rem",
			normalFontSize: "1rem",
			smallFontSize: ".875rem",
			smallerFontSize: ".813rem",
		}
	}
	*/
}
/*-------------------------Responsive----------------------------------*/
const responsive ={
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
/*-------------------------------------Navbar-----------------------------------------------*/
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
		box-shadow:  0 -1px 4px rgba(0,0,0,.15);
		background-color: ${props=> props.darkMode ? darkTheme.bodyColor : root.bodyColor};
		z-index: ${root.zFixed};
		bottom: initial;
	}
	@media ${responsive.exLarge}{
		top: ${props => props.showHeader ? "-100%" : "0"};
		transition: .2s;
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
/*---------------------------------------Main-----------------------------------------------*/
export const HomeSection = styled.section`
`
export const HomeContainer = styled.div`
	gap: 1rem;
`
export const HomeContent = styled.div`
	padding-top: 3.5rem;
	align-items: center;
	@media ${responsive.small} {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 1fr;
	}
	@media ${responsive.large} {
		padding-top: 4.5rem;
		display: flex;
    gap: 1.5rem;
    flex-direction: row-reverse;
		justify-content: space-evenly;
	}
	@media ${responsive.exLarge} {
		padding-top: 5rem;
	}
`
export const HomeImageContainer = styled.div`
	@media ${responsive.small} {
		margin-bottom: ${root.mb2};
	}
	@media ${responsive.medium} {
		margin-bottom: ${root.mb3};
	}

`
export  const HomeBlob = styled.div`
	fill: #6e57e0;
	@media ${responsive.small} {
		width:200px;
	}
	@media ${responsive.medium} {
		width:300px;
	}
	@media ${responsive.large} {
		width:400px;
	}
`
export const HomeImage = styled.image`
	width: 200px;
`
export const HomeData = styled.div`
`
export const HomeTitle = styled.h1`
	font-size: ${root.bigFontSize};
`
export const HomeSubtitle = styled.h3`
	font-size: ${root.h3FontSize};
	color: ${props=> props.darkMode ? darkTheme.textColor : root.textColor};
	font-weight: ${root.fontMedium};
	margin-bottom: ${root.mb075};
`
export const HomeDescription = styled.p`
	margin-bottom: ${root.mb2};
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

/*---------------------------------------About-----------------------------------------------*/
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

/*---------------------------------------Skills--------------------------------------------------*/
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
/*---------------------------------------Qualification---------------------------------------------*/
export const QualificationSection = styled.section`
`
export const QualificationTitle = styled.h2`
`
export const QualificationSubtitle = styled.span`
	font-size: ${root.smallFontSize};
	color: ${root.textColorLight};
`
export const QualificationContainer = styled.div`
`
export const QualificationTabs = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: ${root.mb2};
`
export const QualificationButton = styled.div`
	font-size: ${root.h3FontSize};
	font-weight: ${root.fontMedium};
	cursor: pointer;
	:hover{
		color: ${root.firstColor}
	}
`
export const QualificationIcon = styled.i`
	margin-right: ${root.mb025};
	@media ${responsive.small} {
		font-size: ${root.smallFontSize};
	}
	@media ${responsive.medium} {
		font-size: ${root.normalFontSize};
	}
	@media ${responsive.large} {
		font-size: ${root.h3FontSize};
	}
	@media ${responsive.exLedium} {
		font-size: ${root.h2FontSize};
	}
`
export const QualificationContent = styled.div`
	@media ${responsive.small} {
		margin-left:${root.mb2};
	}
	@media ${responsive.medium} {
		margin-left: ${root.mb3};
	}
`
export const QualificationContentInsider = styled.div`
`
export const QualificationData = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 1.5rem;
	
`
export const QualificationDataTitle = styled.h3`
	@media ${responsive.small}{
		font-size: ${root.smallFontSize};
	}
	@media ${responsive.medium}{
		font-size: ${root.normalFontSize};
	}
	@media ${responsive.large}{
		font-size: ${root.h3FontSize};
	}
	@media ${responsive.exLarge}{
		font-size: ${root.h2FontSize};
	}
`
export const QualificationDataSubtitle = styled.span`
	display: inline-block;
	font-size: ${root.smallFontSize};
	margin-bottom: ${root.mb05};
`
export const QualificationCalendar = styled.div`
	font-size: ${root.smallerFontSize};
	color: ${root.textColorLight};
	margin-bottom: ${root.mb1};
	margin-right: ${root.mb025};
`
export const QualificationPointer = styled.div`
	display: flex;
	justify-content: flex-end;
`
export const QualificationRounder = styled.span`
	display: inline-block;
	width: 13px;
	height: 13px;
	background-color: ${root.firstColor};
	border-radius: 50%;
`
export const QualificationLine = styled.span`
	display: block;
	width: 1px;
	height: 100%;
	background-color: ${root.firstColor};
	transform: translate(-7px);
`
export const QualificationGraduationContent = styled.div`
	${(props) =>{
		if(props.showGraduation){
			return css`
				transform: scale(1.1);
				transition: 1s;
			`
		}else{
			return css`
				transform: scale(1.0);
				transition: 1s;
			`
		}
	}}
`
export const QualificationCourseContent = styled.div`
	${(props) =>{
		if(props.showCourse){
			return css`
				transform: scale(1.1);
				transition: 1s;
			`
		}else{
			return css`
				transform: scale(1.0);
				transition: 1s;
			`
		}
	}}
`

/*-----------------------------------------Portifolio-----------------------------------------------*/
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

/*-----------------------------------------Contact-----------------------------------------------*/
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
`
export const ContactInformationSubtitle = styled.span`
	font-size: ${root.smallFontSize};
	color: ${root.textColorLight};
`
export const ContactIcon= styled.i`
	color: ${root.firstColor};
	@media ${responsive.small} {
		font-size: 1.5rem;
		margin-right: ${root.mb075};
	}
	@media ${responsive.medium} {
		font-size: 2rem;
		margin-right: 0;
	}
	@media ${responsive.large} {
		font-size: 3rem;
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


/*-----------------------------------------Footer-----------------------------------------------*/
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
/*-----------------------------------------ScrollUp-----------------------------------------------*/
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