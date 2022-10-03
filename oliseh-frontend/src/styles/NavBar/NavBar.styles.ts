import styled from "styled-components";
import { Link } from "react-router-dom"

//contains name and logo
export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: left;
    background-color: black;
`;

//contains links
export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

//links in NavBar 
export const NavBarLink = styled(Link)` //we do this to style an already made component
    color: white;
    font-size: large;
    font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
    text-decoration: none;
    margin: 10px;

    //media query to remove links when screen is below 700px and to add when above 700px
    @media (max-width: 700px){
        display:none;
    }
`;

//contains NavBarLink components
export const NavBarLinksContainer = styled.div`
    display: flex;
`;

//menu button to click to open links 
export const MobileMenuBar = styled.button`
    width: 10vh;
    height: 10vh;
    background: transparent;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    //media query to remove hamburger icon when screen is above 700px and to add when below 700px
    @media (min-width: 700px){
        display:none;
    }
`;

//is the NavBar 
export const NavBarContainer = styled.nav`
    width: 100%;
    height: 10vh;
    background-color: transparent;
    display: flex;
    flex-direction: row; //makes children containers to set up horizontally 
`;