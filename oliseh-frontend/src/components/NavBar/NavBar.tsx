import { useState } from "react"
import { 
        LeftContainer, 
        NavBarContainer, 
        NavBarLink, 
        NavBarLinksContainer, 
        RightContainer,
        MobileMenu,
        NameAndLogo,
} from "../../styles/NavBar/NavBar.styles"

export const NavBar = (): JSX.Element => {
    const [mobileMenuClicked, setMenuButton] = useState(false);

    return(
        <NavBarContainer>
            <LeftContainer>
                <NameAndLogo>
                    OlisehC
                </NameAndLogo>
            </LeftContainer>

            <RightContainer>
                <NavBarLinksContainer>
                    <NavBarLink to={"/"}>Home</NavBarLink>
                    <NavBarLink to={"/about"}>About</NavBarLink>
                    <NavBarLink to={"/contact"}>Contact</NavBarLink>
                    <NavBarLink to={"/projects"}>Projects</NavBarLink>
                    <NavBarLink to={"/credentials"}>Credentials</NavBarLink>

                    <MobileMenu 
                        onClick={()=>{
                            setMenuButton((curr)=>!curr);
                        }}
                    > 
                        {/*This is the html unicode for a hamburger menu(rhs) and x icon(lhs)*/}
                        {mobileMenuClicked ? <>&#10005;</>: <>&#8801;</> } 
                    </MobileMenu>
                </NavBarLinksContainer>
            </RightContainer>
        </NavBarContainer>
    )
}
