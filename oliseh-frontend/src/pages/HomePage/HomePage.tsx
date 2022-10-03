import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/NavBar/NavBar"

const HomePageContent = (): JSX.Element => {
    return(
        <div style={{borderStyle:"solid"}}>
            This is the Home Page
        </div>
    )
}

export const HomePage = (): JSX.Element => {
    return(
        <div style={{width:"100%", display: "inline-block"}}>
            <NavBar/>
            <HomePageContent/>
            <Footer/>
        </div>
    )
}