import {AiOutlineHome, 
				AiOutlineUser, 
				AiOutlineFileText, 
				AiOutlineClose, 
				AiOutlineAppstore } 
	from "react-icons/ai";
import { SlBriefcase  } from "react-icons/sl";
import { BsImage, BsMoonStars, BsSun } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import {Header, 
				Nav, 
				NavLogo, 
				NavApps,
				NavMenu, 
				NavList,
				NavLink, 
				NavClose,
				NavIcon,
				ChangeIcon } 
	from "./styled";
	import {  useState } from "react";

const Navbar = ({headerBoxShadow, darkMode, setDarkMode, showHeader}) =>{
	const moon = <BsMoonStars/>;
	const sun=  <BsSun/>;
	const [showMenu, setShowMenu] = useState(false);
	const [changeMode, setChangeMode] = useState(moon);
	
	const handleDarkMode = ()=>{
		setDarkMode(prevState=>!prevState)
		if(darkMode){
			setChangeMode(moon)
		}else{
			setChangeMode(sun)
		}
		console.log(darkMode)
	}

	const handleMenuOpen = ()=>{
		setShowMenu(true)
		console.log(showMenu)
	}

	const handleMenuClose = ()=>{
		setShowMenu(false)
		console.log(showMenu)
	}

  return (
		<Header id="header" headerBoxShadow={headerBoxShadow} darkMode={darkMode} showHeader={showHeader} >
			<Nav className="containerNavbar">
				<NavLogo href="#index" darkMode={darkMode}>Raphael</NavLogo>
					<div style={{display: "flex", gap:"2rem"}}>
					<NavMenu id="nav-menu" showMenu={showMenu} darkMode={darkMode} >
						<NavList>
							<li className="nav__item">
								<NavLink href="#home"darkMode={darkMode} home>
									<NavIcon onClick={handleMenuClose} ><AiOutlineHome/></NavIcon> Home
								</NavLink>
							</li>
							<li className="nav__item">
								<NavLink href="#about" darkMode={darkMode}>
									<NavIcon onClick={handleMenuClose}><AiOutlineUser/></NavIcon> About
								</NavLink>
							</li>
							<li className="nav__item">
								<NavLink href="#skills" darkMode={darkMode}>
									<NavIcon onClick={handleMenuClose}><AiOutlineFileText/></NavIcon> Skills
								</NavLink>
							</li>
							<li className="nav__item">
								<NavLink href="#services" darkMode={darkMode}>
									<NavIcon onClick={handleMenuClose}><SlBriefcase/></NavIcon> Services
								</NavLink>
							</li>
							<li className="nav__item">
								<NavLink href="#portifolio" darkMode={darkMode}>
									<NavIcon onClick={handleMenuClose}><BsImage/></NavIcon> Portifolio
								</NavLink>
							</li>
							<li className="nav__item">
								<NavLink href="#contact" darkMode={darkMode}>
									<NavIcon onClick={handleMenuClose}><BiMailSend/></NavIcon> Contact
								</NavLink>
							</li>
						</NavList>
						<NavClose id="nav-close" onClick={handleMenuClose}>
							<AiOutlineClose/>
						</NavClose>
					</NavMenu>
					<div className="nav__btns">
						<ChangeIcon onClick={handleDarkMode} darkMode={darkMode}> {changeMode}</ChangeIcon>
						<NavApps id="nav-toogle" onClick={handleMenuOpen} darkMode={darkMode}>
							<AiOutlineAppstore/>
						</NavApps>
					</div>
				</div>
				
			</Nav>
		</Header>
  )
}

export default Navbar