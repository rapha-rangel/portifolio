import Home from './Home'
import About from './About'
import Skills from './Skills'
import Qualification from './Qualification'
import Portifolio from './Portifolio'
import Contact from './Contact'

const Main = ({darkMode})=>{
	
	return(
		<>
			<Home darkMode={darkMode}/>
			<About darkMode={darkMode}/>
			<Skills darkMode={darkMode}/>
			<Qualification/>
			<Portifolio/>
			<Contact darkMode={darkMode}/>
		</>
	)
}

export default Main;