import { 
        LeftContainer, 
        NavBarContainer, 
        NavBarLink, 
        NavBarLinksContainer, 
        RightContainer,
        MobileMenuBar
} from "../../styles/NavBar/NavBar.styles"

export const NavBar = (): JSX.Element => {
    return(
        <NavBarContainer>
            <LeftContainer>
                <h1 style={{marginLeft:"20px"}}>Oliseh C</h1>
            </LeftContainer>
            <RightContainer>
                <NavBarLinksContainer>
                    <NavBarLink to={"/"}>Home</NavBarLink>
                    <NavBarLink to={"/about"}>About</NavBarLink>
                    <NavBarLink to={"/contact"}>Contact</NavBarLink>
                    <NavBarLink to={"/projects"}>Projects</NavBarLink>
                    <NavBarLink to={"/credentials"}>Credentials</NavBarLink>

                    <MobileMenuBar> &#8801;</MobileMenuBar>
                </NavBarLinksContainer>
            </RightContainer>
        </NavBarContainer>
    )
}
