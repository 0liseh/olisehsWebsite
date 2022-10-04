import styled from "styled-components";
import { Link } from "react-router-dom"

//contains name and logo
export const LeftContainer = styled.div`
    flex: 25%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    //background-color: #000224;
`;

export const NameAndLogo = styled.div`
    text-align: center;
    font-size: large;
    font-weight: bold;
    margin-top: 20px;
    @media (max-width: 700px){
        margin-top:10px;
    }
`;

//contains links
export const RightContainer = styled.div`
    flex: 75%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
`;

//links in NavBar 
export const NavBarLink = styled(Link)` //we do this to style an already made component
    color: white;
    font-size: large;
    font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
    text-decoration: none;
    margin: 20px;
    height: 100%;
    &:hover {
        background: grey 
    }


    //media query to remove links when screen is below 700px and to add when above 700px
    @media (max-width: 700px){
        display:none;
    }
`;

//contains NavBarLink components
export const NavBarLinksContainer = styled.div`
    display: flex;
    height: 100%;
`;

//menu button to click to open links 
export const MobileMenu = styled.button`
    width: 6vh;
    height: 6vh;
    background: transparent;
    border: none;
    color: white;
    font-size: 35px;
    cursor: pointer;

    //media query to remove hamburger icon when screen is above 700px and to add when below 700px
    @media (min-width: 700px){
        display:none;
    }
`;

//is the NavBar 
export const NavBarContainer = styled.nav`
    width: 100%;
    height: 70px;
    background-color: transparent;
    display: flex;
    flex-direction: row; //makes children containers to set up horizontally 
`;