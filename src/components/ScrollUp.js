import { ScrollButton, ScrollSection } from "./styled";
import { BsArrowUpShort} from "react-icons/bs";

const ScrollUp = ({showScrollUp})=>{
  return (
		<ScrollSection className="container">
			<ScrollButton href="#home" showScrollUp={showScrollUp}>
				<BsArrowUpShort style={{color: "#fff", fontSize: "2rem"}} />
			</ScrollButton>
		</ScrollSection>
		
	) 
}

export default ScrollUp;