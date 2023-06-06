import styled, { keyframes } from "styled-components";
import {responsive, root, darkTheme} from './styled';

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
const moveBloob =keyframes`
0% {
    transform: translateY(-2rem);
}
50%{
    transform: translateY(2rem);
}
100% {
    transform: translateY(-2rem);
}
`
export const HomeImageContainer = styled.div`
    @media ${responsive.small} {
        margin-bottom: ${root.mb2};
    }
    @media ${responsive.medium} {
        margin-bottom: ${root.mb3};
    }
    @media ${responsive.exLarge} {
        animation: ${moveBloob} 3s infinite;
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
  @media ${responsive.large} {
		font-size: 2.5rem;
	}  
`
export const HomeSubtitle = styled.h3`
    font-size: ${root.h3FontSize};
    color: ${props=> props.darkMode ? darkTheme.textColor : root.textColor};
    font-weight: ${root.fontMedium};
    margin-bottom: ${root.mb075};
	@media ${responsive.large} {
		font-size: ${root.h2FontSize}
	}
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